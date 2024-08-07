import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '@/lib/db';
import Blog from '@/models/Blog';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();
  
  const { id } = req.query;
  
  switch (req.method) {
    case 'GET':
      try {
        const blog = await Blog.findById(id);
        res.status(200).json(blog);
      } catch (error) {
        res.status(500).json({ error: 'Error fetching blog data' });
      }
      break;
   
    default:
      res.status(400).json({ error: 'Method not allowed' });
      break;
  }
}
