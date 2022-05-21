import { useQuery, gql } from '@apollo/client';
import { Imessage } from 'src/types/interfaces';

interface ImessagesQuery {
  messages: Imessage[];
}

const MESSAGES = gql`
  {
    messages {
      id
      title
      message
    }
  }
`;

const useMessages = () => {
  const { loading, error, data } = useQuery<ImessagesQuery>(MESSAGES);

  return {
    loading,
    error,
    data
  };
};

export default useMessages;
