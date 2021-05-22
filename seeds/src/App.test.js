import { render, screen } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders without fatal error', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders without fatal error', () => {
  const div = document.createElement('Table');
  ReactDOM.render(<App />, div);
});