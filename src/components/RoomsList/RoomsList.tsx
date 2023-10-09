import { RoomCard } from '../RoomCard';
import styles from './RoomsList.module.css';

const rooms: RoomBookingAPI.Rooms = [
  {
    createdAt: '2023-10-08T20:38:03.694Z',
    name: 'Ljerka',
    spots: 43,
    thumbnail:
      'https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80',
    id: '1',
  },
  {
    createdAt: '2023-10-09T12:25:22.862Z',
    name: 'Mostafa',
    spots: 4,
    thumbnail:
      'https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    id: '2',
  },
  {
    createdAt: '2023-10-08T15:26:14.031Z',
    name: 'Helmold',
    spots: 86,
    thumbnail:
      'https://images.unsplash.com/photo-1539872209618-fb1770aa6ff8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1251&q=80',
    id: '3',
  },
  {
    createdAt: '2023-10-09T01:53:11.672Z',
    name: 'Painter',
    spots: 16,
    thumbnail:
      'https://images.unsplash.com/photo-1540760029765-138c8f6d2eac?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
    id: '4',
  },
  {
    createdAt: '2023-10-09T02:57:04.968Z',
    name: 'Septima',
    spots: 84,
    thumbnail:
      'https://images.unsplash.com/photo-1455994972514-4624f7f224a7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
    id: '5',
  },
  {
    createdAt: '2023-10-08T15:55:44.312Z',
    name: 'Alexis',
    spots: 0,
    thumbnail:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    id: '6',
  },
  {
    createdAt: '2023-10-09T01:23:13.681Z',
    name: 'Yana',
    spots: 34,
    thumbnail:
      'https://images.unsplash.com/photo-1498409785966-ab341407de6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1520&q=80',
    id: '7',
  },
  {
    createdAt: '2023-10-09T09:38:12.490Z',
    name: 'Mina',
    spots: 39,
    thumbnail:
      'https://images.unsplash.com/photo-1601762429744-46fe92ccd903?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    id: '8',
  },
];

export function RoomsList() {
  return (
    <div className={styles.RoomsList}>
      {rooms.map((room) => (
        <RoomCard key={room.id} {...room} />
      ))}
    </div>
  );
}
