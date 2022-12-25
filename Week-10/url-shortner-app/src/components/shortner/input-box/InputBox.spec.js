import { render, screen, fireEvent } from '@testing-library/react';
import InputBox from '.';

it('renders without crashing', () => {
  render(<InputBox />);
  expect(screen.getByText('SHORTEN IT!')).toBeInTheDocument();
});

it('should change input value', () => {
  render(<InputBox />);
  const button = screen.getByRole('button');
  const input = screen.getByTestId('name-input');
  fireEvent.change(input, { target: { value: 'samplelink.com' } });
  expect(input.value).toBe('samplelink.com');
  expect(button).toBeInTheDocument();
});
