import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import{Person} from './Person';

test('renders a name', () => {
  render(<Person name="lll" />);
  const divElement = screen.getByRole(/"contentinfo"/i);
  expect(divElement).toHaveTextContent("Name is lll" );
});