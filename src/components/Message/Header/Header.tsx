import { VFC } from 'react';

type Props = {
  text?: string;
};

const Header: VFC<Props> = ({ text }: Props) => {
  return <header className="w-full text-6xl text-text font-medium">{text}</header>;
};

export default Header;
