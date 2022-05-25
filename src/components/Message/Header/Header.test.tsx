import { render } from '@testing-library/react';
import Header from './Header';

test('should render Header with text prop', () => {
  const { getByText } = render(<Header text="Hi it's header" />);

  expect(getByText("Hi it's header")).toBeInTheDocument();
});
