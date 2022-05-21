import React from 'react';

import useMessages from './Home.hook';
import Message from 'components/Message/Message';
import { Imessage } from 'src/types/interfaces';

const Home: React.FC = () => {
  const { error, loading, data } = useMessages();

  if (error) return <div>Error :(</div>;
  if (loading) return <div>Loading...</div>;

  const messages = data?.messages.map((message: Imessage) => {
    return <Message message={message} key={message.id} />;
  });

  return <>{messages}</>;
};

export default Home;
