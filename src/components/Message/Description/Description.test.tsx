import { render } from '@testing-library/react';
import Description from './Description';

test('should render Description with text prop', () => {
  const { getByText } = render(<Description text="Hi it's description" />);

  expect(getByText("Hi it's description")).toBeInTheDocument();
});
