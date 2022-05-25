import { fireEvent, render, waitFor } from '@testing-library/react';

import ToDoList from './ToDoList';

test('should render ToDoList', () => {
  const { getByText } = render(<ToDoList />);

  expect(getByText(/Create to do/i)).toBeInTheDocument();
});

test('should create to do', async () => {
  const { getByPlaceholderText, findByText, getByText } = render(<ToDoList />);

  const toDoValue = /Hi it's to do list./i;

  const toDoListInput = getByPlaceholderText(/I will go.../i);
  fireEvent.change(toDoListInput, { target: { value: toDoValue } });

  const createToDoButton = await findByText(/Create to do/i);
  fireEvent.click(createToDoButton);

  await waitFor(() => expect(getByText(toDoValue)).toBeInTheDocument());
});
