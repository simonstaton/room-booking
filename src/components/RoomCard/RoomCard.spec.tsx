import { fireEvent, render, screen } from '@testing-library/react';
import { RoomCard, TEST_IDS } from './RoomCard';

const MOCK_DATA: RoomBookingAPI.Room = {
  createdAt: '2023-10-08T20:38:03.694Z',
  name: 'Ljerka',
  spots: 43,
  thumbnail:
    'https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80',
  id: '1',
};

describe('Components:RoomCard', () => {
  beforeEach(() => {
    render(<RoomCard {...MOCK_DATA} />);
  });

  it('should handle booking events', () => {
    expect(screen.getByTestId(TEST_IDS.button)).toHaveTextContent('Book!');
    fireEvent.click(screen.getByTestId(TEST_IDS.button));
    expect(screen.getByTestId(TEST_IDS.button)).toHaveTextContent('Un-book!');
    fireEvent.click(screen.getByTestId(TEST_IDS.button));
    expect(screen.getByTestId(TEST_IDS.button)).toHaveTextContent('Book!');
  });
});
