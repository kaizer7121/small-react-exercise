import { useEffect, useState } from 'react';
import { onValue, push, ref, remove, set } from 'firebase/database';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import { Box, Typography } from '@mui/material';

import { database } from '~/libs/firebase';

import EditItemModal from '~/pages/TS/partials/EditItemModal';
import TodoForm from '~/pages/TS/partials/TodoForm';
import TodoList from '~/pages/TS/partials/TodoList';
import {
  StyledContainer,
  StyledTaskColumnStyles,
} from '~/pages/TS/TodoListPage/styles';
import { Todo, TodoResponse, TodoStatus } from '~/pages/TS/types/todo';

const TodoListPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editedTodo, setEditedTodo] = useState<Todo>();
  const handleOpenEditTodoModal = (todo: Todo) => {
    setEditedTodo(todo);
  };
  const handleClose = () => {
    setEditedTodo(undefined);
  };

  useEffect(() => {
    const todoRef = ref(database, 'todos');
    onValue(todoRef, (snapshot) => {
      const data = (snapshot.val() as TodoResponse) || null;
      if (!data) {
        return;
      }
      const todoList = Object.keys(data).map(
        (key): Todo => ({
          ...data[key],
          id: key,
        }),
      );

      setTodos(todoList);
    });
  }, []);

  const getTodosByStatus = (status: TodoStatus) => {
    return todos.filter((todo) => todo.status === status);
  };

  const handleAddTodo = async (todo: Todo) => {
    try {
      const newTodoListRef = ref(database, 'todos');
      const newTodoRef = push(newTodoListRef);

      await set(newTodoRef, todo);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const handleChangeStatusTodo = (id: string, updatedStatus: TodoStatus) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    if (todoIndex !== -1) {
      const updatedTodo = { ...todos[todoIndex], status: updatedStatus };
      set(ref(database, `todos/${id}`), updatedTodo);
      setTodos([
        ...todos.slice(0, todoIndex),
        updatedTodo,
        ...todos.slice(todoIndex + 1),
      ]);
    }
  };

  const handleEditTodo = (editedTodo: Todo) => {
    const todoIndex = todos.findIndex((todo) => todo.id === editedTodo.id);
    if (todoIndex !== -1) {
      const updatedTodo = { ...editedTodo };
      set(ref(database, `todos/${editedTodo.id}`), updatedTodo);
      setTodos([
        ...todos.slice(0, todoIndex),
        updatedTodo,
        ...todos.slice(todoIndex + 1),
      ]);
      handleClose();
    }
  };

  const handleDeleteTodo = (id: string) => {
    remove(ref(database, `todos/${id}`));
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const reorder = (list: Todo[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }

    if (destination?.droppableId === source.droppableId) {
      const items = reorder(todos, source.index, destination.index);

      setTodos(items);
    } else {
      handleChangeStatusTodo(
        draggableId,
        destination.droppableId as TodoStatus,
      );
    }
  };

  return (
    <Box>
      <Typography fontWeight={'bold'} margin={2} marginBottom={4} variant='h4'>
        Implement draggable todo list by react-beautiful-dnd
      </Typography>
      <TodoForm onSubmit={handleAddTodo} />
      <DragDropContext onDragEnd={onDragEnd}>
        <StyledContainer>
          <StyledTaskColumnStyles>
            {Object.values(TodoStatus).map((status) => {
              return (
                <TodoList
                  key={status}
                  columnTitle={status}
                  todoList={getTodosByStatus(status)}
                  onDelete={handleDeleteTodo}
                  onEdit={handleOpenEditTodoModal}
                />
              );
            })}
          </StyledTaskColumnStyles>
        </StyledContainer>
      </DragDropContext>
      <EditItemModal
        editedTodo={editedTodo}
        handleClose={handleClose}
        open={!!editedTodo}
        onEdit={handleEditTodo}
      />
    </Box>
  );
};

export default TodoListPage;
