import { render } from '@testing-library/react';
import Homepage from './page';

describe('Homepage', () => {
  it('renders the component', () => {
    render(<Homepage />);
  });
});
