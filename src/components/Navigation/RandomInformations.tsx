import { VFC } from 'react';

import useRandomSlug from './Navigation.hook';
import useRandomNumber from 'hooks/useRandomNumber';

const RandomInformations: VFC = () => {
  const { slug } = useRandomSlug();

  return (
    <div className="text-lg">
      {slug}
      {useRandomNumber()}
    </div>
  );
};

export default RandomInformations;
