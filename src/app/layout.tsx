"use client"; // Keep this here to mark the component as a Client Component

import '../styles/globals.css'; // Ensure global styles are imported
import { SessionProvider } from 'next-auth/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Poppins } from "next/font/google";
import SousFooter from '@/components/SousFooter';

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });



const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <html lang="en">
        <body className={poppins.className}>
          <Header />
          <main>{children}</main>
          <Footer />
          <SousFooter/>
        </body>
      </html>
    </SessionProvider>
  );
};

export default RootLayout;