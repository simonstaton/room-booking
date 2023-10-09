'use client';

import { useQuery } from 'react-query';
import { RoomCard } from '../RoomCard';
import styles from './RoomsList.module.css';
import { getRooms } from '../../utils';

interface RoomsListProps {
  initialData: RoomBookingAPI.Rooms;
}

export function RoomsList({ initialData }: RoomsListProps) {
  const { data } = useQuery({
    queryKey: ['rooms'],
    queryFn: getRooms,
    initialData,
  });

  return (
    <div className={styles.RoomsList}>
      {data?.map((room) => <RoomCard key={room.id} {...room} />)}
    </div>
  );
}
