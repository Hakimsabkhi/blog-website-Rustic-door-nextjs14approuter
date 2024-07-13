"use client"; // Keep this here to mark the component as a Client Component

import '../styles/globals.css'; // Ensure global styles are imported
import { SessionProvider } from 'next-auth/react';
import Header from '../components/Header';
import Footer from '../components/Footer';





const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <html lang="en">
        <body>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </SessionProvider>
  );
};

export default RootLayout;
