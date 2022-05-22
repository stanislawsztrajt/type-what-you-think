import { useReducer } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface Itodos {
  todos: string[];
}

interface Itodo {
  todo: string;
  type: string;
}

const reducer = (state: Itodos, action: Itodo) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.todo]
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo !== action.todo)
      };
    default:
      return state;
  }
};

const initialState: Itodos = { todos: [] };

const useToDoList = () => {
  const [store, dispatch] = useReducer(reducer, initialState);

  const { handleSubmit, handleChange, values, handleBlur, touched, errors } = useFormik({
    initialValues: {
      todo: ''
    },
    validationSchema: Yup.object({
      todo: Yup.string()
        .min(10, 'Title have to contain at least 10 characters')
        .max(500, 'Title can contain up to 500 characters')
        .required('Field required')
        .trim()
    }),
    onSubmit: ({ todo }) => {
      dispatch({ type: 'ADD_TODO', todo });
      values.todo = '';
    }
  });

  const deleteTodo = (todo: string) => {
    dispatch({ type: 'DELETE_TODO', todo });
  };

  return {
    store,
    handleSubmit,
    handleChange,
    values,
    handleBlur,
    touched,
    errors,
    deleteTodo
  };
};

export default useToDoList;
