//src/app/api/blog/post/[id]/route.ts
import connectToDatabase from '@/src/lib/db';
import Blog from '@/src/models/Blog';
import { NextRequest, NextResponse } from 'next/server';
import cloudinary from '@/src/lib/cloudinary';  // Import Cloudinary

// POST request handler to create a new blog
export async function POST(request: NextRequest) {
    await connectToDatabase();
    
    const { title, category, image, userImg, userName, date } = await request.json();
  
    try {
      const newBlog = new Blog({ title, category, image, userImg, userName, date });
      const savedBlog = await newBlog.save();
  
      return NextResponse.json(savedBlog, { status: 201 });
    } catch (error) {
      console.error('Error creating blog:', error);
      return NextResponse.json({ error: 'Error creating blog' }, { status: 500 });
    }
  }