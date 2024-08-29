import { NextApiRequest, NextApiResponse } from 'next';
import Blog from '@/src/models/Blog';
import dbConnect from '@/src/lib/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();

  const { id } = req.query; // Blog ID from URL
  const { blogId, userId, action, updates } = req.body; // Data from request body

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ message: 'Invalid or missing blog ID' });
  }

  try {
    switch (req.method) {
      case 'POST':
        // Handle like/unlike action
        if (!blogId || !userId || !action) {
          return res.status(400).json({ message: 'Blog ID, User ID, and action are required' });
        }

        const blogPost = await Blog.findById(blogId);
        if (!blogPost) {
          return res.status(404).json({ message: 'Blog not found' });
        }

        const hasLiked = blogPost.likes.includes(userId);

        if (action === 'like' && !hasLiked) {
          blogPost.likes.push(userId);
        } else if (action === 'unlike' && hasLiked) {
          blogPost.likes = blogPost.likes.filter((id) => id !== userId);
        } else {
          return res.status(400).json({ message: 'Invalid action or already in desired state' });
        }

        await blogPost.save();
        return res.status(200).json({ likes: blogPost.likes.length });

      case 'GET':
        // Get like status of a blog post
        const blogStatus = await Blog.findById(id);
        if (!blogStatus) {
          return res.status(404).json({ message: 'Blog not found' });
        }

        const { userId: queryUserId } = req.query;
        const isLiked = blogStatus.likes.includes(queryUserId as string);
        return res.status(200).json({ isLiked });

      case 'DELETE':
        // Remove like from a blog post
        if (!userId) {
          return res.status(400).json({ message: 'User ID is required' });
        }

        const blogToDeleteLike = await Blog.findById(id);
        if (!blogToDeleteLike) {
          return res.status(404).json({ message: 'Blog not found' });
        }

        blogToDeleteLike.likes = blogToDeleteLike.likes.filter((id) => id !== userId);
        await blogToDeleteLike.save();
        return res.status(200).json({ likes: blogToDeleteLike.likes.length });

      case 'PUT':
        // Update blog post
        if (!updates || typeof updates !== 'object') {
          return res.status(400).json({ message: 'Updates are required' });
        }

        const blogToUpdate = await Blog.findById(id);
        if (!blogToUpdate) {
          return res.status(404).json({ message: 'Blog not found' });
        }

        Object.assign(blogToUpdate, updates);
        await blogToUpdate.save();
        return res.status(200).json(blogToUpdate);

      default:
        return res.setHeader('Allow', ['POST', 'GET', 'DELETE', 'PUT']).status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Error handling request:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default handler;
