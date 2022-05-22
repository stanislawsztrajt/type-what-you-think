import { VFC } from 'react';

type Props = {
  text?: string;
};

const Description: VFC<Props> = ({ text }: Props) => {
  return <p className="text-2xl text-text">{text}</p>;
};

export default Description;
