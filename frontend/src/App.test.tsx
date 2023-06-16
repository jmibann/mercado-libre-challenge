import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import App from './App';

import { MOCKED_SEARCH_RESULT } from './mockedvalues';

jest.mock('./api/index', () => ({
  fetchItems: () => Promise.resolve({data: { 
    author:     {
      lastName: 'LAST NAME TEST',
      name:     'NAME TEST',
    },
    categories: ['CATEGORY TEST'],
    items: MOCKED_SEARCH_RESULT,
  } })
}));

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/nothing to display yet/i);
  
  expect(linkElement).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
  expect(screen.getByTestId('magnifier')).toBeInTheDocument();
  expect(screen.getByTestId('search-input')).toBeInTheDocument();
});

test('Shows a list a found items', async() => {
  render(<App />);
  const KEYWORD = 'testing input text';

  const searchInput = screen.getByTestId('search-input');

  fireEvent.change(searchInput, {target: {value: KEYWORD}});
  expect(searchInput).toHaveValue(KEYWORD);
  
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => fireEvent.click(screen.getByRole('button')))

  const listItems = await screen.findAllByTestId('list-item')
  expect(listItems.length).toBe(4);
})
