import { VFC } from 'react';
import { Link } from 'react-router-dom';

import { Imessage } from 'src/types/interfaces';

type Props = {
  message: Imessage;
};

const Message: VFC<Props> = ({ message }: Props) => {
  return (
    <div className="bg-background text-text p-4 rounded-md shadow">
      <Link to={`/messages/${message.id}`}>
        <header className="font-semibold text-2xl">{message.title}</header>
        <p>{message.message}</p>
      </Link>
    </div>
  );
};

export default Message;
