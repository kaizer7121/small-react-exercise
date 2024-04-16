import { Draggable } from 'react-beautiful-dnd';

import { DeleteOutlined, EditOutlined } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';

import {
  StyledIconContainer,
  StyledTaskInformation,
} from '~/pages/TS/partials/TodoItem/styles';
import { Todo } from '~/pages/TS/types/todo';

interface TodoProps {
  item: Todo;
  index: number;
  onDelete: (id: string) => void;
  onEdit: (todo: Todo) => void;
}

const TodoItem = ({ item, index, onDelete, onEdit }: TodoProps) => {
  return (
    <Draggable key={item.id} draggableId={item.id ?? ''} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <StyledTaskInformation isDragging={snapshot.isDragging}>
            <Typography variant='body1'>{item.text}</Typography>
            <Box className='secondary-details'>
              <p>
                {new Date(item.dueDate).toLocaleDateString('en-us', {
                  month: 'short',
                  day: '2-digit',
                })}
              </p>
            </Box>
            <StyledIconContainer>
              <IconButton onClick={() => onEdit(item)}>
                <EditOutlined />
              </IconButton>
              <IconButton onClick={() => onDelete(item.id ?? '')}>
                <DeleteOutlined />
              </IconButton>
            </StyledIconContainer>
          </StyledTaskInformation>
        </div>
      )}
    </Draggable>
  );
};

export default TodoItem;
