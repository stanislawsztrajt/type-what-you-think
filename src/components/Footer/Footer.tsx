import { FC } from 'react';
import { Link } from 'react-router-dom';

import ButtonFooterTheme from './ButtonFooterTheme';
import { useFooterTheme } from 'contexts/FooterContext'

const Footer: FC = () => {
  const { theme } = useFooterTheme();

  return (
    <footer className={`font-thin text-center w-full p-1 text-lg ${theme}`}>
      Page has been created for tests by me :o
      <Link className="ml-6 font-medium" to="/to-do-list">
        go to To do list
      </Link>
      <ButtonFooterTheme />
    </footer>
  );
};

export default Footer;
