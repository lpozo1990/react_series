import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../App';
import { createMemoryHistory } from 'history';
import store from '../store';
import { BrowserRouter, MemoryRouter, Router } from 'react-router-dom';
import Parent from '../Components/Parent';
import userEvent from '@testing-library/user-event';

test('We expect the text of the child component to be in the document', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  );
  const child_component_content = screen.getByText(/Hello, unknown/i);
  expect(child_component_content).toBeInTheDocument();
});

test('If I click the `go to page 2` link, I will see the content of page 2',  async () => {
  const history = createMemoryHistory();
  render(
    <Provider store={store}>
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </Provider>
  );
  const link_to_page_2 = screen.getByText('Go to page2');
  const user = userEvent
  await user.click(link_to_page_2)
  expect(window.location.pathname).toBe('/page-2');
});
