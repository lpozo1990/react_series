import { render, screen } from '@testing-library/react';
import Child from '../Components/Child';
import Parent from '../Components/Parent';

test('We expect the text of the child component to be in the document', () => {
  render(<Parent />);
  render(<Child name="Lucas" />);
  const child_component_content = screen.getByText(/Hello, Lucas/i);  
  expect(child_component_content).toBeInTheDocument();
});
