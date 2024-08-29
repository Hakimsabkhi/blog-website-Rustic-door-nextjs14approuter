// src/pages/api/blog/comment.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import Blog from '@/src/models/Blog';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      await mongoose.connect(process.env.MONGODB_URI || '');

      const { blogId, userId, text } = req.body;

      // Find the blog and add a comment
      const blog = await Blog.findById(blogId);
      if (!blog) {
        return res.status(404).json({ error: 'Blog not found' });
      }

      // Add comment with current date
      blog.comments.push({
        user: userId, text, date: new Date(),
        _id: undefined
      });
      await blog.save();

      res.status(200).json(blog);
    } catch (error) {
      res.status(500).json({ error: 'Error adding comment' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default handler;
