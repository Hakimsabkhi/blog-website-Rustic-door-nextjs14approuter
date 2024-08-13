import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/db';
import Blog from '@/models/Blog';
import cloudinary from '@/lib/cloudinary';
import { IncomingForm, File } from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

interface ParsedFields {
  [key: string]: any;
}

interface ParsedFiles {
  [key: string]: File[];
}

async function handleFileUpload(req: NextApiRequest): Promise<{ fields: ParsedFields; imageUrls: string[] }> {
  return new Promise((resolve, reject) => {
    const form = new IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        reject(err);
        return;
      }

      const parsedFields = fields as ParsedFields;
      const parsedFiles = files as ParsedFiles;

      // Handle image uploads
      const imageFiles = parsedFiles.images || [];
      const imageUrls: string[] = [];

      for (const imageFile of imageFiles) {
        try {
          const uploadResult = await cloudinary.uploader.upload(imageFile.filepath);
          imageUrls.push(uploadResult.secure_url);
        } catch (uploadError) {
          console.error('Upload error:', uploadError);
          reject(uploadError);
        } finally {
          fs.unlinkSync(imageFile.filepath); // Clean up temporary file
        }
      }

      resolve({ fields: parsedFields, imageUrls });
    });
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  switch (req.method) {
    case 'GET':
      try {
        const blogs = await Blog.find({});
        res.status(200).json(blogs);
      } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
      }
      break;

    case 'POST':
      try {
        const { fields, imageUrls } = await handleFileUpload(req);

        const newBlog = new Blog({
          ...fields,
          image: imageUrls[0] || '', // Main image
          PlusieursImages: imageUrls.slice(1), // Additional images
        });

        await newBlog.save();
        res.status(201).json(newBlog);
      } catch (error) {
        res.status(400).json({ message: 'Bad Request', error });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}
