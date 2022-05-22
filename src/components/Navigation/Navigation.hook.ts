import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import randomSlug from 'helpers/randomSlug';

const useRandomSlug = () => {
  const location = useLocation();
  const [slug, setSlug] = useState('');

  useEffect(() => setSlug(randomSlug()), [location]);

  return {
    slug
  };
};

export default useRandomSlug;
