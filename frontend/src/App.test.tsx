/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import App from './App';

import { FIRST_ITEM_TITLE, FIRST_ITEM, MOCKED_SEARCH_RESULT } from './mockedvalues';

const getFirstItem = () => ({ ...FIRST_ITEM });

jest.mock('./api/index', () => ({
  fetchItem: () => Promise.resolve({ item: getFirstItem() }),
  fetchItems: () => Promise.resolve({ data: { 
    author:     {
      lastName: 'LAST NAME TEST',
      name:     'NAME TEST',
    },
    categories: ['CATEGORY TEST'],
    items: MOCKED_SEARCH_RESULT,
  } }),
}));

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/nothing to display yet/i);
  
  expect(linkElement).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
  expect(screen.getByTestId('magnifier')).toBeInTheDocument();
  expect(screen.getByTestId('search-input')).toBeInTheDocument();
});

test('Shows a list a found items and choose one', async() => {
  render(<App />);
  const KEYWORD = 'testing input text';

  const searchInput = screen.getByTestId('search-input');
  fireEvent.change(searchInput, {target: {value: KEYWORD}});
  expect(searchInput).toHaveValue(KEYWORD);
  
  act(() => fireEvent.click(screen.getByRole('button')))

  const listItems = await screen.findAllByTestId('list-item')
  expect(listItems.length).toBe(4);

  act(() => fireEvent.click(listItems[0]));
  const itemTitle = await screen.findByText(FIRST_ITEM_TITLE);

  expect(itemTitle).toBeInTheDocument();
})
