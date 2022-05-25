import { gql } from '@apollo/client';

const GET_MESSAGES = gql`
  {
    messages {
      id
      title
      message
    }
  }
`;

export default GET_MESSAGES;
