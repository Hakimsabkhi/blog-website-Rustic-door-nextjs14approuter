// src/pages/_app.tsx

import React from 'react';
import { AppProps } from 'next/app';
import { SessionProvider, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <SessionHandler>
        <Component {...pageProps} />
      </SessionHandler>
    </SessionProvider>
  );
}

function SessionHandler({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (status === 'loading') return; // Do nothing while loading

    if (status === 'authenticated') {
      const redirectToRolePage = async () => {
        if (session?.user?.role === 'Admin') {
          router.push('/admin');
        } else if (session?.user?.role === 'Visitor') {
          router.push('/profile');
        }
      };
      redirectToRolePage();
    } else if (status === 'unauthenticated' && router.pathname !== '/signin') {
      router.push('/signin');
    }
  }, [status, session, router]);

  return <>{children}</>;
}

export default MyApp;
