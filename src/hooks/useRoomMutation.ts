import { useMutation, useQueryClient } from 'react-query';
import { updateRoom } from '../utils';

export const useRoomMutation = ({
  id,
  name,
  spots,
  thumbnail,
}: Partial<RoomBookingAPI.Room>) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateRoom,
    onMutate: async (variables) => {
      await queryClient.cancelQueries({ queryKey: ['rooms'] });
      const optimisticRoom = {
        id,
        name,
        spots,
        thumbnail,
        isBooked: variables.isBooked,
      };
      return { optimisticRoom };
    },
    onSuccess: (result, variables, context) => {
      queryClient.setQueryData<RoomBookingAPI.Rooms>(
        ['rooms'],
        (old) =>
          old?.map((room) =>
            room.id === context?.optimisticRoom.id ? result : room,
          ) as RoomBookingAPI.Rooms,
      );
    },
  });
};
