declare namespace RoomBookingAPI {
  export interface Room {
    id: string;
    createdAt: string;
    name: string;
    spots: number;
    thumbnail: string;
  }

  export type Rooms = Room[];
}
