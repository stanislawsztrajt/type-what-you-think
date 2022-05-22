import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const CREATE_MESSAGE = gql`
  mutation createMessage($title: String!, $message: String!) {
    createMessage(input: { data: { title: $title, message: $message } }) {
      message {
        title
        message
      }
    }
  }
`;

const useCreateMessage = () => {
  const navigate = useNavigate();
  const [createMessage] = useMutation(CREATE_MESSAGE);
  const [loading, setLoading] = useState<boolean>(false);

  const { handleSubmit, handleChange, values, handleBlur, touched, errors } = useFormik({
    initialValues: {
      title: '',
      message: ''
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .min(10, 'Title have to contain at least 10 characters')
        .max(500, 'Title can contain up to 500 characters')
        .required('Field required')
        .trim(),
      message: Yup.string()
        .min(10, 'Title have to contain at least 10 characters')
        .max(5000, 'Title can contain up to 5000 characters')
        .required('Field required')
        .trim()
    }),
    onSubmit: ({ title, message }) => {
      setLoading(true);
      createMessage({ variables: { title, message } });

      navigate('/');
      return navigate(0);
    }
  });

  return {
    loading,
    handleSubmit,
    handleChange,
    values,
    handleBlur,
    touched,
    errors
  };
};

export default useCreateMessage;
