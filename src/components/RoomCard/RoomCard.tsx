'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from './RoomCard.module.css';

export const TEST_IDS = {
  button: 'RoomCard:Button',
} as const;

type RoomCardProps = RoomBookingAPI.Room;

export function RoomCard({ name, spots, thumbnail }: RoomCardProps) {
  const [booked, setBooked] = useState(false);
  const onBookRoom = () => {
    setBooked(!booked);
  }; // @TODO

  return (
    <div className={styles.RoomCard}>
      <div className={styles['RoomCard__thumbnail-wrapper']}>
        <Image src={thumbnail} alt={name} fill={true} objectFit="cover" />
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
          >
            {booked ? 'Un-book!' : 'Book!'}
          </button>
        </div>
      </div>
    </div>
  );
}
