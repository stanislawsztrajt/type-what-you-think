import { useState, FC } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from "react-router-dom";

const CREATE_MESSAGE = gql`
  mutation createMessage($title: String!, $message: String!){
    createMessage(input: { data: { title: $title, message: $message } }) {
      message {
        title
        message
      }
    }
  }
`;

const CreateMessage: FC = () => {
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
      onSubmit: async ({ title, message }) => {
        setLoading(true);
        createMessage({variables: { title, message }});

        navigate('/');
        return navigate(0);
      }
    });

  return (
    <>
      {loading ? 
        "loading..." 
      :
      <form
        onSubmit={handleSubmit}
        className=" text-text flex flex-col justify-center items-center h-full w-full"
      >
        <div className="flex flex-col items-center w-full">
          <label htmlFor="title" className="w-11/12 xl:w-1/2 mb-1 text-2xl font-semibold">
            Title
          </label>
          <input
            className="bg-background shadow w-11/12 xl:w-1/2 h-12 p-2 text-2xl outline-blue-400"
            type="text"
            name="title"
            placeholder="I am happy because..."
            maxLength={500}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          {touched.title ? <div className="w-11/12 xl:w-1/2 text-red-500">{errors.title}</div> : null}
          <div></div>
        </div>
        <div className="flex flex-col items-center w-full mt-6">
          <label htmlFor="title" className="w-11/12 xl:w-1/2 mb-1 text-2xl font-semibold">
            Message
          </label>
          <textarea
            className="bg-background shadow w-11/12 xl:w-1/2 h-72 p-2 text-2xl outline-blue-400"
            name="message"
            placeholder="because I was doing..."
            maxLength={5000}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
          ></textarea>
          {touched.message ? (
            <div className="w-11/12 xl:w-1/2 text-red-500">{errors.message}</div>
          ) : null}
        </div>

        <input
          type="submit"
          value="Create message"
          className="bg-background shadow-xl font-semibold w-11/12 xl:w-1/2 h-12 p-2 text-2xl mt-6 cursor-pointer hover:opacity-80 duration-150 outline-blue-400"
        />
      </form>
      }
    </>
  );
};

export default CreateMessage;
