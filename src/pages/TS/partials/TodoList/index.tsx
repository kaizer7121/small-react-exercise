import { Droppable } from 'react-beautiful-dnd';

import TodoItem from '~/pages/TS/partials/TodoItem/TodoItem';
import {
  StyledTaskList,
  StyledTitle,
} from '~/pages/TS/partials/TodoList/styles';
import { Todo, TodoStatus } from '~/pages/TS/types/todo';

interface TodoListProps {
  columnTitle: string;
  todoList: Todo[];
  onDelete: (id: string) => void;
  onEdit: (todo: Todo) => void;
}

const TodoList = ({
  columnTitle,
  todoList,
  onDelete,
  onEdit,
}: TodoListProps) => {
  return (
    <Droppable key={columnTitle} droppableId={columnTitle}>
      {(provided, snapshot) => (
        <StyledTaskList
          {...provided.droppableProps}
          ref={provided.innerRef}
          isDraggingOver={snapshot.isDraggingOver}
        >
          <StyledTitle status={columnTitle as TodoStatus}>
            {columnTitle}
          </StyledTitle>
          {todoList.map((todo, index) => (
            <TodoItem
              key={todo.id}
              index={index}
              item={todo}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
          {provided.placeholder}
        </StyledTaskList>
      )}
    </Droppable>
  );
};

export default TodoList;
