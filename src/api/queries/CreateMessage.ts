import { gql } from '@apollo/client';

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

export default CREATE_MESSAGE;
