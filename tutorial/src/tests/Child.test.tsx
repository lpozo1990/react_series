import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Parent from '../Components/Parent';
import store from '../store';

test('Communication from child to parent via callback works', () => {
  render(
    <Provider store={store}>
      <Parent />
    </Provider>
  );
  const textCounterSpan = screen.getByTestId("counter-text");
  const btnElement = screen.getByTestId("btn-send");
  expect(textCounterSpan.textContent).toBe("Component state: 0");
  fireEvent.click(btnElement);
  expect(textCounterSpan.textContent).toBe("Component state: 1");
});

