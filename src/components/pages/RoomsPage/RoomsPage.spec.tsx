import { render } from '../../../../test-utils';
import { RoomsPage } from './RoomsPage';
import MockRoomsData from '../../../../mocks/rooms';

describe('Components:Pages:RoomsPage', () => {
  it('renders', () => {
    render(<RoomsPage data={MockRoomsData} />);
  });
});
