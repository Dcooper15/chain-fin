import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Sectors text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Sectors/i);
  expect(linkElement).toBeInTheDocument();
});
