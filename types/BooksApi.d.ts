declare namespace RoomBookingAPI {
  export interface Room {
    id: number;
    createdAt: string;
    name: string;
    spots: number;
    thumbnail: string;
  }

  export type Rooms = Room[];
}
