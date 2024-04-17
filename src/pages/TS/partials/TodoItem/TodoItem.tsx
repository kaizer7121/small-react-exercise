import { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { DeleteOutlined, EditOutlined } from '@mui/icons-material';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';

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
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Draggable key={item.id} draggableId={item.id ?? ''} index={index}>
      {(provided, snapshot) => (
        <Box
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
              <IconButton onClick={handleClickOpen}>
                <DeleteOutlined />
              </IconButton>
            </StyledIconContainer>
          </StyledTaskInformation>
          <Dialog
            aria-labelledby='draggable-dialog-title'
            open={open}
            onClose={handleClose}
          >
            <DialogTitle id='draggable-dialog-title' style={{ cursor: 'move' }}>
              Delete todo
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                To delete it, the item will not be restored.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose}>
                Cancel
              </Button>
              <Button onClick={() => onDelete(item.id ?? '')}>Delete</Button>
            </DialogActions>
          </Dialog>
        </Box>
      )}
    </Draggable>
  );
};

export default TodoItem;
