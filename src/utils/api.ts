type BadRequest = { code: 'bad_request'; message: string };

type ApiResponse<DataType> =
  | (Omit<Response, 'json'> & {
      ok: true;
      json: () => Promise<DataType>;
    })
  | (Omit<Response, 'json'> & {
      ok: false;
      json: () => Promise<BadRequest>;
    });

const API_VERSION = 'v1';

const ENDPOINTS = {
  rooms: `${process.env.NEXT_PUBLIC_API_URL}/api/${API_VERSION}/rooms`,
};

const headers = {
  'Content-Type': 'application/json',
  'Cache-Control': 'no-cache',
};

export async function getRooms() {
  const response = (await fetch(ENDPOINTS.rooms, {
    headers,
    cache: 'no-store',
  })) as ApiResponse<RoomBookingAPI.Rooms>;
  if (!response.ok) {
    throw new Error('Error fetching rooms');
  }
  return response.json();
}

export async function updateRoom({
  id,
  ...payload
}: Partial<RoomBookingAPI.Room>) {
  const response = (await fetch(`${ENDPOINTS.rooms}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
    cache: 'no-store',
    headers,
  })) as ApiResponse<RoomBookingAPI.Room>;
  if (!response.ok) {
    throw new Error('Error fetching rooms');
  }
  return response.json();
}
