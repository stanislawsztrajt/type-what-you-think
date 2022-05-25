import { gql } from '@apollo/client';

const GET_MESSAGE = gql`
  query GetMessage($id: ID!) {
    message(id: $id) {
      id
      title
      message
    }
  }
`;

export default GET_MESSAGE;
