import { render, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter } from 'react-router-dom';
import { GraphQLError } from 'graphql';

import GET_MESSAGES from 'api/queries/GetMessages';

import Home from './Home';

test('should render loading', async () => {
  const { getByText, getByTestId } = render(
    <MockedProvider mocks={[]} addTypename={false}>
      <Home />
    </MockedProvider>
  );

  await waitFor(() => getByTestId('loading'));

  expect(getByText(/loading.../i)).toBeInTheDocument();
});

test('should render error', async () => {
  const errorMock = {
    request: {
      query: GET_MESSAGES
    },
    result: {
      errors: [new GraphQLError('Error!')]
    }
  };

  const { getByText, getByTestId } = render(
    <MockedProvider mocks={[errorMock]} addTypename={false}>
      <Home />
    </MockedProvider>
  );

  await waitFor(() => getByTestId('error'));

  expect(getByText(/error/i)).toBeInTheDocument();
});

test('should render Home', async () => {
  const renderMock = {
    request: {
      query: GET_MESSAGES
    },
    result: {
      data: {
        messages: [
          {
            id: '123',
            title: "Hi it's title of Home",
            message: "Hi it's message of Home"
          }
        ]
      }
    }
  };

  const { getByText, getByTestId } = render(
    <MockedProvider mocks={[renderMock]} addTypename={false}>
      <Home />
    </MockedProvider>,
    { wrapper: MemoryRouter }
  );

  await waitFor(() => getByTestId('message'));

  expect(getByText(/Hi it's title of Home/i)).toBeInTheDocument();
});
