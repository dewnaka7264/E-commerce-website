import { render, screen } from '@testing-library/react';
import App from './App'; // Assuming that the <p> tag is in the App component

test('renders GymShark text', () => {
  render(<App />);
  const textElement = screen.getByText(/GymShark/i);
  expect(textElement).toBeInTheDocument();
});
