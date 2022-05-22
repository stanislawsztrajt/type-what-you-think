import React from 'react';

import useMessages from './Home.hook';
import Message from 'components/Message/Message';
import { Imessage } from 'types/interfaces';

const Home: React.FC = () => {
  const { error, loading, data } = useMessages();

  if (loading)
    return (
      <div className="w-full h-full flex justify-center items-center text-text text-5xl">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="w-full h-full flex justify-center items-center text-text text-5xl">
        Error with server :(
      </div>
    );

  const messages = data?.messages.map((message: Imessage) => {
    return <Message message={message} key={message.id} />;
  });

  return <>{messages}</>;
};

export default Home;
