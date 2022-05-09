import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../App';
import { createMemoryHistory } from 'history';
import store from '../store';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Page2 from '../Components/Page2';

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

test('If I click the `go to page 2` link, I will see the content of page 2', async () => {
  const history = createMemoryHistory();
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/page-2" element={<Page2 />} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );
  const link_to_page_2 = screen.getByText('Go to page2');
  const user = userEvent
  await user.click(link_to_page_2)
  screen.getByText('you are on page 2')
});
