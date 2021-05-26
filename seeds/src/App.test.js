import { render, screen } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

test('Searches for text Author', () => {       //Every page features the word author somewhere so testing for this keyword is an easy way to test every page
  render(<App />);
  const linkElement = screen.getByText('Author');
  expect(linkElement).toBeInTheDocument();
});

it('renders without fatal error', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('table is able to ren', () => {
  const div = document.createElement('Table');
  ReactDOM.render(<App />, div);
});