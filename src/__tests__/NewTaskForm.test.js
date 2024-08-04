import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import NewTaskForm from '../components/NewTaskForm';

test('calls the onTaskFormSubmit callback prop when the form is submitted', () => {
  const categories = ['All', 'Code', 'Food', 'Money', 'Misc'];
  const onTaskFormSubmit = jest.fn();

  render(<NewTaskForm categories={categories} onTaskFormSubmit={onTaskFormSubmit} />);

  fireEvent.change(screen.getByPlaceholderText(/New task details/i), { target: { value: 'Pass the tests' } });
  fireEvent.change(screen.getByDisplayValue(categories[1]), { target: { value: 'Code' } });
  fireEvent.submit(screen.getByText(/Add task/i));

  expect(onTaskFormSubmit).toHaveBeenCalledWith({ text: 'Pass the tests', category: 'Code' });
});
