import { FC } from 'react';

import Header from 'components/Message/Header/Header';
import Description from 'components/Message/Description/Description';

import useMessage from './Message.hook';

const Message: FC = () => {
  const { loading, error, data } = useMessage();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;

  return (
    <>
      <Header text={data?.message.title} />
      <Description text={data?.message.message} />
    </>
  );
};

export default Message;
