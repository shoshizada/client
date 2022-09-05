import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {Person} from './Person';
import DeleteBusines from './components/System/DeleteBusiness';

test('renders a name', () => {
  render(<DeleteBusines />);
  const InputElement = screen.getByRole("contentinfo");
  expect(InputElement).toHaveTextContent("630f258eec905950b894c8e9");
  expect(InputElement).toHaveAttribute("role", "contentinfo");
});