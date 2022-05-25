import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { Imessage } from 'types/interfaces';
import GET_MESSAGE from 'api/queries/GetMessage';

interface ImessageQuery {
  message: Imessage;
}

type Props = {
  id: string;
};

const useMessage = () => {
  const id: string | undefined = useParams<Props>().id;
  const { loading, error, data } = useQuery<ImessageQuery>(GET_MESSAGE, { variables: { id } });

  return {
    loading,
    error,
    data
  };
};

export default useMessage;
