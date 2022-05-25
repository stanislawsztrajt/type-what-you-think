import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter } from 'react-router-dom';

import CREATE_MESSAGE from 'api/queries/CreateMessage';
import CreateMessage from './CreateMessage';

test('should create Message with correct values', async () => {
  const createMessageMock = {
    request: {
      query: CREATE_MESSAGE,
      variables: {
        title: "Hi it's title of this message",
        message: "Hi it's message of this message"
      }
    },
    result: {
      data: {
        message: {
          title: "Hi it's title of this message",
          message: "Hi it's message of this message"
        }
      }
    }
  };

  const { findByText, getByText } = render(
    <MockedProvider mocks={[createMessageMock]} addTypename={false}>
      <CreateMessage />
    </MockedProvider>,
    { wrapper: MemoryRouter }
  );

  const titleInput = screen.getByPlaceholderText(/I am happy because.../i);
  const messageInput = screen.getByPlaceholderText(/because I was doing.../i);

  const testValue = "It's value to tests";

  fireEvent.change(titleInput, { target: { value: testValue } });
  fireEvent.change(messageInput, { target: { value: testValue } });

  const createMessageButton = await findByText(/Create message/i);
  fireEvent.click(createMessageButton);

  await waitFor(() => expect(getByText(/loading.../i)).toBeInTheDocument());
});
