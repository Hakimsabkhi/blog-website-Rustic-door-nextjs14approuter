import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connectToDatabase from '@/lib/db'; // Adjust the path according to your project structure
import  User  from '@/models/User'; // Adjust the path according to your project structure

export async function POST(request: Request) {
  try {
    await connectToDatabase();

    const { username, email, password } = await request.json();

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role: 'Visitor', // Default role
    });

    // Save the new user to the database
    await newUser.save();

    // Return a successful response
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Error during sign-up:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
