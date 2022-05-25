import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Footer from './Footer';

test('should render Footer', () => {
  const { getByText } = render(<Footer />, { wrapper: MemoryRouter });

  expect(getByText(/page has been created for tests by me :o/i)).toBeInTheDocument();
});
