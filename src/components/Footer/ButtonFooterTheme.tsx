import { VFC } from 'react';
import { useFooterTheme } from 'contexts/FooterContext'

const ButtonFooterTheme: VFC = () => {
  const { changeTheme } = useFooterTheme();

  return (
    <button className="ml-4" onClick={changeTheme}>
      Change footer theme
    </button>
  );
};

export default ButtonFooterTheme;
