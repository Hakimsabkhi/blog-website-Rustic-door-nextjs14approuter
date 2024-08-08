// src/pages/api/blog/index.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase  from '@/lib/db';
import Blog from '@/models/Blog';
import upload from '@/middleware/multer/multer';

// Disable body parsing for form data
export const config = {
  api: {
    bodyParser: false,
  },
};

// Handler function
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  if (req.method === 'POST') {
    // Use multer middleware to handle file uploads
    upload.single('image')(req as any, res as any, async (err: any) => {
      if (err) {
        console.error('Upload error:', err); // Log detailed error
        return res.status(500).json({ error: 'Error uploading file' });
      }

      const file = (req as any).file;
      const { title, description, Category, userName, userImg } = req.body;

      if (!file) {
        return res.status(400).json({ error: 'Image is required' });
      }

      if (!title || !description || !Category || !userImg || !userName) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const blogData = {
        image: `/uploads/${file.filename}`,
        title,
        description,
        category: Category,
        userImg,
        userName,
        date: new Date(),
        likes: 0,
        comments: 0,
      };

      try {
        await Blog.create(blogData);
        res.status(201).json({ success: true, msg: 'Blog Added' });
      } catch (error) {
        console.error('Database error:', error); // Log detailed error
        res.status(500).json({ error: 'Error creating blog data' });
      }
    });
  } else if (req.method === 'GET') {
    try {
      const blogs = await Blog.find({}).sort({ date: -1 }).exec();
      res.status(200).json(blogs);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching blog data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
