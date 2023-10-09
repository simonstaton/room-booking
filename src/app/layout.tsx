import type { Metadata } from 'next';
import { Providers } from '../utils';
import './globals.css';

export const metadata: Metadata = {
  title: 'Meeting Rooms',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
