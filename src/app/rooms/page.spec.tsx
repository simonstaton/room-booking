import RoomsRoute, { metadata } from './page';
import MockRoomsData from '../../../mocks/rooms';
import * as Api from '../../utils/api';
import { render } from '../../../test-utils';

describe('Router:Rooms', () => {
  beforeEach(() => {
    jest.spyOn(Api, 'getRooms').mockResolvedValue(MockRoomsData);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders', async () => {
    render(await RoomsRoute());
  });

  it('sets metadata', () => {
    expect(metadata.title).toBeDefined();
  });
});
