import { render } from '@testing-library/react';
import Message from './Message';
import { MemoryRouter } from 'react-router-dom';

test('should render Message component with message prop', () => {
  const { getByText } = render(
    <Message
      message={{
        message: "Hi it's message",
        title: "Hi it's title",
        id: '1'
      }}
      key="1"
    />,
    { wrapper: MemoryRouter }
  );

  expect(getByText("Hi it's message")).toBeInTheDocument();
});
