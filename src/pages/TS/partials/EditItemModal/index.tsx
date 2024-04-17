import { Modal } from '@mui/material';

import { StyledModalContainer } from '~/pages/TS/partials/EditItemModal/styles';
import TodoForm from '~/pages/TS/partials/TodoForm';
import { Todo } from '~/pages/TS/types/todo';

type EditItemModalProps = {
  open: boolean;
  handleClose: VoidFunction;
  onEdit: (data: Todo) => void;
  editedTodo?: Todo;
};

const EditItemModal = ({
  open,
  handleClose,
  onEdit,
  editedTodo,
}: EditItemModalProps) => {
  return (
    <Modal
      aria-describedby='modal-modal-description'
      aria-labelledby='modal-modal-title'
      open={open}
      onClose={handleClose}
    >
      <StyledModalContainer>
        <TodoForm
          editedValue={editedTodo}
          title='Editing Item'
          onSubmit={onEdit}
        />
      </StyledModalContainer>
    </Modal>
  );
};

export default EditItemModal;
