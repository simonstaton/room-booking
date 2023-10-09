'use client';

import Image from 'next/image';
import tokens from '../../../tokens/breakpoints.json';
import styles from './RoomCard.module.css';
import { useRoomMutation } from '../../hooks';

export const TEST_IDS = {
  button: 'RoomCard:Button',
} as const;

type RoomCardProps = RoomBookingAPI.Room;

export function RoomCard({
  id,
  name,
  spots,
  thumbnail,
  isBooked,
}: RoomCardProps) {
  const mutation = useRoomMutation({ id, name, spots, thumbnail });
  const onBookRoom = () => {
    mutation.mutate({
      id,
      isBooked: !isBooked,
    });
  };

  return (
    <div className={styles.RoomCard}>
      <div className={styles['RoomCard__thumbnail-wrapper']}>
        <Image
          src={thumbnail}
          alt={name}
          fill
          priority
          sizes={`(max-width: ${tokens.sm}px) 100vw, (max-width: ${tokens.md}px) 50vw, (max-width: ${tokens.lg}px) 33vw, 25vw`}
        />
      </div>
      <div className={styles.RoomCard__content}>
        <div className={styles.RoomCard__name}>{name}</div>
        <div className={styles.RoomCard__spots}>{spots}</div>
        <div className={styles.RoomCard__cta}>
          <button
            type="button"
            className={styles.RoomCard__button}
            onClick={onBookRoom}
            data-testid={TEST_IDS.button}
            disabled={mutation.status === 'loading'}
          >
            {isBooked ? 'Un-book!' : 'Book!'}
          </button>
        </div>
      </div>
    </div>
  );
}
