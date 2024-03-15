// App.test.js
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('should increment count by 1 on Increment button click', () => {
  const { getByTestId } = render(<App />);
  const incrementButton = getByTestId('increment-button');
  const countDisplay = getByTestId('count');

  fireEvent.click(incrementButton);

  expect(countDisplay.textContent).toBe('Count: 1');
});

test('should increment count correctly on multiple Increment clicks', () => {
  const { getByTestId } = render(<App />);
  const incrementButton = getByTestId('increment-button');
  const countDisplay = getByTestId('count');

  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);

  expect(countDisplay.textContent).toBe('Count: 3');
});

test('should correctly update count with alternating Increment and Decrement clicks', () => {
  const { getByTestId } = render(<App />);
  const incrementButton = getByTestId('increment-button');
  const decrementButton = getByTestId('decrement-button');
  const countDisplay = getByTestId('count');

  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);
  fireEvent.click(decrementButton);
  fireEvent.click(decrementButton);

  expect(countDisplay.textContent).toBe('Count: 1');
});
