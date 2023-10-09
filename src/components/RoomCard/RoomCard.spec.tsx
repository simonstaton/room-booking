import { RenderResult, screen } from '@testing-library/react';
import { render } from '../../../test-utils';
import { RoomCard, TEST_IDS } from './RoomCard';

const MOCK_DATA: RoomBookingAPI.Room = {
  createdAt: '2023-10-08T20:38:03.694Z',
  name: 'Ljerka',
  spots: 43,
  thumbnail:
    'https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80',
  id: '1',
  isBooked: false,
};

describe('Components:RoomCard', () => {
  let rerender: RenderResult['rerender'];

  beforeEach(() => {
    const wrapper = render(<RoomCard {...MOCK_DATA} />);
    rerender = wrapper.rerender;
  });

  it('should show book button if isBooked flag is false', () => {
    rerender(<RoomCard {...MOCK_DATA} isBooked={false} />);
    expect(screen.getByTestId(TEST_IDS.button)).toHaveTextContent('Book!');
  });

  it('should show un-book button if isBooked flag is true', () => {
    rerender(<RoomCard {...MOCK_DATA} isBooked={true} />);
    expect(screen.getByTestId(TEST_IDS.button)).toHaveTextContent('Un-book!');
  });
});
