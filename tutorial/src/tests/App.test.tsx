import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../store';

test('We expect the text of the child component to be in the document', () => {
  render(
    <Provider store={store}>
      <App />
  </Provider>
  );
  const child_component_content = screen.getByText(/Hello, unknown/i);  
  expect(child_component_content).toBeInTheDocument();
});
