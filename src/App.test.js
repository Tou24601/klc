import { render, screen } from '@testing-library/react';
import App from './App';

test('renders heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Kawa gotowa. Należy się 500 zł./i);
  expect(headingElement).toBeInTheDocument();
});

test('renders image', () => {
  render(<App />);
  const image = screen.getByAltText(/Dzisiaj kawy nie będzie/i);
  expect(image).toBeInTheDocument();
});

test('renders button', () => {
  render(<App />);
  const button = screen.getByText(/Jeszcze raz!/i);
  expect(button).toBeInTheDocument();
});