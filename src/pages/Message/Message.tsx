import { FC } from 'react';

import Header from 'components/Message/Header/Header';
import Description from 'components/Message/Description/Description';

import useMessage from './Message.hook';

const Message: FC = () => {
  const { loading, error, data } = useMessage();
  console.log(data);

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
        id="error"
        className="w-full h-full flex justify-center items-center text-text text-5xl"
      >
        Cannot find message :(
      </div>
    );

  return (
    <div data-testid="message">
      <Header text={data?.message.title} />
      <Description text={data?.message.message} />
    </div>
  );
};

export default Message;
