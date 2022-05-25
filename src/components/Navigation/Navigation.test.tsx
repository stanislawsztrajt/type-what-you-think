import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Navigation from './Navigation';

test('should render Navigation', () => {
  const { getByText } = render(<Navigation />, { wrapper: MemoryRouter });

  expect(getByText(/type/i)).toBeInTheDocument();
});
