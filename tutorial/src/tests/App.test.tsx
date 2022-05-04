import { render, screen } from '@testing-library/react';
import App from '../App';

test('We expect the text of the child component to be in the document', () => {
  render(<App />);
  const child_component_content = screen.getByText(/Hello, unknown/i);  
  expect(child_component_content).toBeInTheDocument();
});
