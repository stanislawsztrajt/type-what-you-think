import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { Imessage } from 'types/interfaces';

interface ImessageQuery {
  message: Imessage;
}

type Props = {
  id: string;
};

const MESSAGE = gql`
  query GetMessage($id: ID!) {
    message(id: $id) {
      id
      title
      message
      feel
    }
  }
`;

const useMessage = () => {
  const id: string | undefined = useParams<Props>().id;
  const { loading, error, data } = useQuery<ImessageQuery>(MESSAGE, { variables: { id } });

  return {
    loading,
    error,
    data
  };
};

export default useMessage;
