import { fireEvent, render, screen } from '@testing-library/react';
import ResultBox from '.';
import { copyToClipboard } from '../../../utils';

const mockData = [
  {
    full_short_link: 'full_short_link',
    original_link: 'original_link',
    code: 'asdw2133erf',
  },
  {
    full_short_link: 'full_short_link',
    original_link: 'original_link',
    code: 'asdw213hjns',
  },
  {
    full_short_link: 'full_short_link',
    original_link: 'original_link',
    code: 'asdw213hjns',
  },
];

it('should render search results', () => {
  render(<ResultBox data={mockData} />);

  expect(screen.getAllByText('original_link')).toHaveLength(3);
  expect(screen.getAllByText('full_short_link')).toHaveLength(3);
});

it('should have copy button', () => {
  render(<ResultBox data={mockData} />);

  expect(screen.getAllByText('Copy')).toHaveLength(3);
});

jest.mock('../../../utils', () => ({
  copyToClipboard: jest.fn(),
}));

it('copy button copies text to clipboard', () => {
  render(<ResultBox data={mockData} />);

  const copyButton = screen.getAllByText('Copy')[0];
  fireEvent.click(copyButton);

  expect(copyToClipboard).toHaveBeenCalledWith('full_short_link');
});
