import React from 'react';

import useHome from './Home.hook';
import Message from 'components/Message/Message';
import { Imessage } from 'types/interfaces';

const Home: React.FC = () => {
  const { error, loading, data } = useHome();

  if (loading)
    return (
      <div
        data-testid="loading"
        className="w-full h-full flex justify-center items-center text-text text-5xl"
      >
        Loading...
      </div>
    );
  if (error)
    return (
      <div
        data-testid="error"
        className="w-full h-full flex justify-center items-center text-text text-5xl"
      >
        Error with server :(
      </div>
    );

  const messages = data?.messages.map((message: Imessage) => {
    return <Message message={message} key={message.id} />;
  });

  return <div className='flex flex-col-reverse gap-4'>{messages}</div>;
};

export default Home;
