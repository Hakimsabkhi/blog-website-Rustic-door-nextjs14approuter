import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: {
      id?: string;        // Make optional if it might not be present
      name?: string;      // Make optional if it might not be present
      email?: string;     // Make optional if it might not be present
      role?: 'Visitor' | 'Rédacteur' | 'Admin'; // Make optional if it might not be present
    };
  }

  interface User {
    id: string;
    name: string;
    email: string;
    role: 'Visitor' | 'Rédacteur' | 'Admin';
  }

  interface JWT {
    role?: 'Visitor' | 'Rédacteur' | 'Admin'; // Make optional if it might not be present
  }
}
