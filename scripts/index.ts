// src/pages/api/blog/index.ts
{/*import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '@/lib/db';
import Blog from '@/models/Blog';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();
  
  switch (req.method) {
    case 'GET':
      try {
        const blogs = await Blog.find({}).sort({ date: -1 }).exec();
        res.status(200).json(blogs);
      } catch (error) {
        res.status(500).json({ error: 'Error fetching blog data' });
      }
      break;
    case 'POST':
      try {
        const {id, imgSrc, Categorie, title, description, likes, comments, userImgSrc, userName, date } = req.body;
        if (id !|| !imgSrc || !Categorie || !title || !description || !likes || !comments || !userImgSrc || !userName || !date) {
          return res.status(400).json({ error: 'Missing required fields' });
        }
        const newBlog = new Blog({ imgSrc, Categorie, title, description, likes, comments, userImgSrc, userName, date });
        await newBlog.save();
        res.status(201).json(newBlog);
      } catch (error) {
        res.status(500).json({ error: 'Error creating blog data' });
      }
      break;
    default:
      res.status(400).json({ error: 'Method not allowed' });
      break;
  }
}*/}
