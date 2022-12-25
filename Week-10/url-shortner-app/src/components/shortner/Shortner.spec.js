import renderer from 'react-test-renderer';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Shortner from '.';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import React from 'react';

const handlers = [
  rest.get('https://api.shrtco.de/v2/shorten', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        result: {
          original_link: 'original_link',
          full_short_link: 'full_short_link',
          code: '123abcd',
        },
      })
    );
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it('renders without crashing', () => {
  render(<Shortner />);
  expect(screen.getByText('SHORTEN IT!')).toBeInTheDocument();

  const tree = renderer.create(<Shortner />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should shorten the url and display', async () => {
  render(<Shortner />);
  const button = screen.getByRole('button');
  const input = screen.getByTestId('name-input');
  fireEvent.change(input, { target: { value: 'samplelink.com' } });

  fireEvent.click(button);

  await waitFor(() => expect(screen.getAllByText('original_link')).toHaveLength(1), { timeout: 1000 });
  await waitFor(() => expect(screen.getAllByText('full_short_link')).toHaveLength(1), { timeout: 1000 });
});

test('should give proper error is request fails', async () => {
  server.use(
    rest.get('https://api.shrtco.de/v2/shorten', (req, res, ctx) => {
      return res.once(ctx.status(400), ctx.json({ message: 'Invalid URL' }));
    })
  );
  render(<Shortner />);
  fireEvent.change(screen.getByTestId('name-input'), { target: { value: 'samplelink.com' } });
  fireEvent.click(screen.getByRole('button'));
  let error = await screen.findByRole('alert');
  expect(error).toBeInTheDocument();
});
