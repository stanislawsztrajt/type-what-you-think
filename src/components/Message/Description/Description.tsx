import React from 'react';

type Props = {
  text?: string;
};

const Description: React.FC<Props> = ({ text }) => {
  return <p className="text-2xl text-text">{text}</p>;
};

export default Description;
