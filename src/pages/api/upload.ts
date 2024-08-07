// pages/api/upload.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import cloudinary from '@/lib/cloudinary';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { file } = req.body; // Ensure this contains the image data or URL to upload

      const result = await cloudinary.uploader.upload(file, {
        folder: 'my_folder', // Optional: Specify a folder on Cloudinary
      });

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: 'Error uploading image to Cloudinary' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
