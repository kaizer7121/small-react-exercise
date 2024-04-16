import { Controller, useForm } from 'react-hook-form';

import {
  Button,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

import { StyledFormContainer } from '~/pages/TS/partials/TodoForm/Styles';
import { Todo, TodoStatus, TodoTypeForm } from '~/pages/TS/types/todo';

type TodoFormProps = {
  onSubmit: (data: Todo) => void;
  title?: string;
};

const TodoForm = ({ onSubmit, title = ' Adding new todo' }: TodoFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<TodoTypeForm>({
    defaultValues: {
      text: '',
      dueDate: new Date(),
    },
  });

  const onSubmitHandler = (data: TodoTypeForm) => {
    const formartedData: Todo = {
      text: data.text,
      status: TodoStatus.New,
      dueDate: data.dueDate.toString(),
    };

    onSubmit(formartedData);
    reset();
  };

  return (
    <StyledFormContainer>
      <Typography textAlign={'center'} variant='h3'>
        {title}
      </Typography>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <FormControl fullWidth margin='normal'>
          <FormLabel htmlFor='text'>Text</FormLabel>
          <TextField
            {...register('text', { required: true })}
            error={!!errors.text}
            helperText={
              errors.text ? errors.text?.message || 'Text is required' : ''
            }
            id='text'
          />
        </FormControl>
        <FormControl fullWidth margin='normal'>
          <FormLabel htmlFor='dueDate'>Due Date</FormLabel>
          <Controller
            control={control}
            name='dueDate'
            render={({ field }) => <DatePicker {...field} />}
          />
          {!!errors.dueDate && (
            <TextField error>
              {errors.dueDate?.message || 'Due Date is required'}
            </TextField>
          )}
        </FormControl>
        <Button fullWidth type='submit' variant='contained'>
          Add
        </Button>
      </form>
    </StyledFormContainer>
  );
};

export default TodoForm;
