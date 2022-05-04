import { fireEvent, render, screen } from '@testing-library/react';
import Parent from '../Components/Parent';

test('Communication from child to parent via callback works', () => {
  render(<Parent />);
  const textCounterSpan = screen.getByTestId("counter-text");
  const btnElement = screen.getByTestId("btn-send");
  expect(textCounterSpan.textContent).toBe("0");
  fireEvent.click(btnElement);  
  expect(textCounterSpan.textContent).toBe("1");
});
