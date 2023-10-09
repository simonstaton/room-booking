import type { Metadata } from 'next';
import { RoomsPage } from '../../components/pages';
import { getRooms } from '../../utils';

export const metadata: Metadata = {
  title: 'Meeting Rooms',
};

export default async function RoomsRoute() {
  const data = await getRooms();
  return <RoomsPage data={data} />;
}
