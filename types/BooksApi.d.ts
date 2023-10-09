declare namespace RoomBookingAPI {
  export interface Room {
    id: string;
    createdAt: string;
    name: string;
    spots: number;
    thumbnail: string;
    isBooked: boolean;
  }

  export type Rooms = Room[];
}
