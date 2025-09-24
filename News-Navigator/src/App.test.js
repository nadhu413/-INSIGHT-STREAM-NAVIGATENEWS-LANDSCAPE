import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('renders Navbar and Footer', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  // Check if Navbar is present
  const navbarLogo = screen.getByText(/spark|news/i); // Replace with your actual logo text
  expect(navbarLogo).toBeInTheDocument();

  // Check if Footer is present
  const footerText = screen.getByText(/©|all rights reserved/i); // Replace with actual footer text
  expect(footerText).toBeInTheDocument();
});
