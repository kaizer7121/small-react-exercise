import { Modal } from '@mui/material';

import TodoForm from '~/pages/TS/partials/TodoForm';
import { Todo } from '~/pages/TS/types/todo';

type EditItemModalProps = {
  open: boolean;
  handleClose: VoidFunction;
  onEdit: (data: Todo) => void;
};

const EditItemModal = ({ open, handleClose, onEdit }: EditItemModalProps) => {
  return (
    <Modal
      aria-describedby='modal-modal-description'
      aria-labelledby='modal-modal-title'
      open={open}
      onClose={handleClose}
    >
      <TodoForm title='Editing Item' onSubmit={onEdit} />
    </Modal>
  );
};

export default EditItemModal;
