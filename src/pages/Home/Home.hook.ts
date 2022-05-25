import { useQuery } from '@apollo/client';

import { Imessage } from 'types/interfaces';
import GET_MESSAGES from 'api/queries/GetMessages';

interface ImessagesQuery {
  messages: Imessage[];
}

const useHome = () => {
  const { loading, error, data } = useQuery<ImessagesQuery>(GET_MESSAGES);

  return {
    loading,
    error,
    data
  };
};

export default useHome;
