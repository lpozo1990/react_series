import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node'
import Child from '../Components/Child';
import Parent from '../Components/Parent';


const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
    return res(ctx.json([
      {
        userId: 1,
        id: 1,
        title: "dummy response",
        body: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
      }]))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('We expect the text of the child component to be in the document', () => {
  render(<Parent />);
  render(<Child name="Lucas" />);
  const child_component_content = screen.getByText(/Hello, Lucas/i);
  expect(child_component_content).toBeInTheDocument();
});

test('The response is expected to be successful', async () => {
  render(<Parent />);
  fireEvent.click(screen.getByText('Fetch data'))
  await waitFor(() => screen.getAllByTestId('post-title'));
  expect(screen.getAllByTestId('post-title')[0].textContent).toBe('dummy response')
})
