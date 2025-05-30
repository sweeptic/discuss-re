'use client';

import { useSession } from 'next-auth/react';

export default function Profile() {
  const session = useSession();

  return (
    <div>
      From useSession: {JSON.stringify(session.data?.user)}user is {session.data?.user ? '' : 'NOT'} signed in
    </div>
  );
}
