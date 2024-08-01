'use client';

import { SessionProvider } from 'next-auth/react';

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {//@ts-ignore

  return (
    <SessionProvider>
    {children}
  </SessionProvider>
  );
}
