import { RoomsList } from '../..';

interface RoomsPageProps {
  data: RoomBookingAPI.Rooms;
}

export function RoomsPage({ data }: RoomsPageProps) {
  return (
    <main>
      <div className="container">
        <h1>Rooms</h1>
        <p>
          Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor
          ultricies donec risus sodales. Tempus quis et.
        </p>
        <RoomsList initialData={data} />
      </div>
    </main>
  );
}
