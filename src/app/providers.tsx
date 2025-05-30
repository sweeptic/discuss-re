'use client';

import { HeroUIProvider } from '@heroui/system';
import { SessionProvider } from 'next-auth/react';

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <HeroUIProvider>{children}</HeroUIProvider>
    </SessionProvider>
  );
}
