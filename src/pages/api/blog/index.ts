import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '@/lib/db';
import Blog from '@/models/Blog';
import upload from '@/middleware/multer/multer';

// Configuration to disable Next.js body parsing, allowing multer to handle file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper function to find files by field name
const findFiles = (files: any[], fieldName: string) => files.filter((file: any) => file.fieldname === fieldName);

async function handlePostRequest(req: NextApiRequest, res: NextApiResponse) {
  upload.any()(req as any, res as any, async (err: any) => {
    if (err) {
      console.error('Upload error:', err);
      return res.status(500).json({ error: 'Error uploading file' });
    }

    const files = (req as any).files;
    const { title, description, Category, userName, userImg, AddMoreBlog } = req.body;

    console.log('Received files:', files);
    console.log('Body:', req.body);

    // Validate required fields
    if (!title || !description || !Category || !userImg || !userName || !AddMoreBlog) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Parse AddMoreBlog from JSON
    let parsedAddMoreBlog: { title: string; description: string; image?: string }[] = [];
    try {
      parsedAddMoreBlog = JSON.parse(AddMoreBlog);
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      return res.status(400).json({ error: 'Invalid JSON format for AddMoreBlog' });
    }

    // Handle file uploads
    const mainImage = findFiles(files, 'image').length > 0 ? `/uploads/${findFiles(files, 'image')[0].filename}` : null;

    console.log('Parsed main image URL:', mainImage);

    // Create blog entry
    const blogData = {
      image: mainImage,
      title,
      description,
      category: Category,
      userImg,
      userName,
      date: new Date(),
      likes: 0,
      comments: 0,
      AddMoreBlog: parsedAddMoreBlog // Updated field
    };

    try {
      await Blog.create(blogData);
      res.status(201).json({ success: true, msg: 'Blog Added' });
    } catch (error) {
      console.error('Database error:', error);
      res.status(500).json({ error: 'Error creating blog data' });
    }
  });
}

async function handleGetRequest(req: NextApiRequest, res: NextApiResponse) {
  try {
    const blogs = await Blog.find({}).sort({ date: -1 }).exec();
    res.status(200).json(blogs);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Error fetching blog data' });
  }
}

// Handler for API requests
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  switch (req.method) {
    case 'POST':
      await handlePostRequest(req, res);
      break;
    case 'GET':
      await handleGetRequest(req, res);
      break;
    default:
      res.status(405).json({ error: 'Method not allowed' });
      break;
  }
}
