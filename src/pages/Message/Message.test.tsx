import { render, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { GraphQLError } from 'graphql';

import GET_MESSAGE from 'api/queries/GetMessage';

import Message from './Message';

test('shuold render loading', async () => {
  const { getByText, getByTestId } = render(
    <MockedProvider mocks={[]} addTypename={false}>
      <Message />
    </MockedProvider>
  );

  await waitFor(() => getByTestId('loading'));

  expect(getByText(/loading.../i)).toBeInTheDocument();
});

test('shuold render error', async () => {
  const errorMock = {
    request: {
      query: GET_MESSAGE
    },
    result: {
      errors: [new GraphQLError('Error!')]
    }
  };

  const { getByText, getByTestId } = render(
    <MockedProvider mocks={[errorMock]} addTypename={false}>
      <Message />
    </MockedProvider>
  );

  await waitFor(() => getByTestId('error'));

  expect(getByText(/error/i)).toBeInTheDocument();
});

test('should render Message', async () => {
  const renderMessageMock = {
    request: {
      query: GET_MESSAGE
    },
    result: {
      data: {
        message: {
          id: '123',
          title: "Hi it's title of this message",
          message: "Hi it's message of this message"
        }
      }
    }
  };

  const { getByText, getByTestId } = render(
    <MockedProvider mocks={[renderMessageMock]} addTypename={false}>
      <Message />
    </MockedProvider>
  );

  await waitFor(() => getByTestId('message'));

  expect(getByText(/Hi it's title of this message/i)).toBeInTheDocument();
});
