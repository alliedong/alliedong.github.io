//Research this!!

import {render, screen} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});