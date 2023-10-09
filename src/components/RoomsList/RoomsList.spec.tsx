import { RoomsList } from './RoomsList';
import MockRoomsData from '../../../mocks/rooms';
import { render } from '../../../test-utils';

describe('Components:RoomsList', () => {
  it('renders', () => {
    render(<RoomsList initialData={MockRoomsData} />);
  });
});
