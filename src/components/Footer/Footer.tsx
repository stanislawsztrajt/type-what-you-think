import { VFC } from 'react';
import { Link } from 'react-router-dom';

const Footer: VFC = () => {
  return (
    <footer className="font-thin text-center w-full p-1 text-lg text-black bg-white">
      Page has been created for tests by me :o
      <Link className="ml-6 font-medium" to="/to-do-list">
        go to To do list
      </Link>
    </footer>
  );
};

export default Footer;
