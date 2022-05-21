import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.VFC = () => {
  return (
    <nav className="p-4 bg-background text-text items-end flex flex-row flex-wrap uppercase tracking-widest justify-between">
      <Link to="/">
        <span className="font-extrabold text-3xl xl:text-6xl">Type</span>
        <span className="font-bold text-2xl xl:text-5xl ">what</span>
        <span className=" font-semibold text-xl xl:text-4xl ">you</span>
        <span className=" font-normal text-lg xl:text-3xl ">think</span>
      </Link>
      <Link to="/create-message">
        <span className="font-extrabold text-3xl xl:text-6xl">Create</span>
        <span className="ml-2 text-xl xl:text-4xl">your</span>
        <span className="ml-2 text-xl xl:text-4xl">message</span>
      </Link>
    </nav>
  );
};

export default Navigation;
