import React from 'react';

type Props = {
  text?: string;
};

const Header: React.FC<Props> = ({ text }) => {
  return <header className="w-full text-6xl text-text font-medium">{text}</header>;
};

export default Header;
