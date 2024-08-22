import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/src/lib/db';
import Blog from '@/src/models/Blog';
import cloudinary from '@/src/lib/cloudinary';
import { IncomingForm, File } from 'formidable';
import fs from 'fs';

// Configuration for the API route
export const config = {
  api: {
    bodyParser: false, // Disable the default body parser to handle multipart form data
  },
};

// Interfaces for parsed fields and files from form submission
interface ParsedFields {
  [key: string]: any;
}

interface ParsedFiles {
  [key: string]: File[];
}

// Function to handle file uploads, including uploading images to Cloudinary
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

      const imageUrls: string[] = [];

      // --- Handling the main image upload ---
      const mainImageFile = parsedFiles.image?.[0];
      
      if (mainImageFile && mainImageFile.filepath) {
        try {
          // Upload the main image to Cloudinary
          const uploadResult = await cloudinary.uploader.upload(mainImageFile.filepath);
          imageUrls.push(uploadResult.secure_url); // Store the URL of the main image
        } catch (uploadError) {
          console.error('Upload error:', uploadError);
          reject(uploadError);
        } finally {
          if (mainImageFile.filepath) {
            fs.unlinkSync(mainImageFile.filepath); // Clean up the temporary file
          }
        }
      }

      // --- Handling addmoreblog images upload ---
      const addMoreBlogFiles = parsedFiles.addMoreBlog || [];

      for (const imageFile of addMoreBlogFiles) {
        try {
          if (imageFile.filepath) {
            // Upload each addmoreblog image to Cloudinary
            const uploadResult = await cloudinary.uploader.upload(imageFile.filepath);
            imageUrls.push(uploadResult.secure_url); // Store the URL of the addmoreblog image
          }
        } catch (uploadError) {
          console.error('Upload error:', uploadError);
          reject(uploadError);
        } finally {
          if (imageFile.filepath) {
            fs.unlinkSync(imageFile.filepath); // Clean up the temporary file
          }
        }
      }

      resolve({ fields: parsedFields, imageUrls });
    });
  });
}

// Main handler function to manage different HTTP methods
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect(); // Connect to the database

  switch (req.method) {
    case 'GET':
      try {
        const blogs = await Blog.find({}).sort({ date: -1 }); // Retrieve all blog posts from the database
        res.status(200).json(blogs); // Send blog posts as JSON response
      } catch (error) {
        res.status(500).json({ message: 'Server Error', error }); // Handle server errors
      }
      break;

    case 'POST':
      try {
        // Handle file upload and get fields and image URLs
        const { fields, imageUrls } = await handleFileUpload(req);

        // Create a new blog entry with the provided fields and image URLs
        const newBlog = new Blog({
          ...fields,
          image: imageUrls[0] || '', // Main image URL
          AddMoreBlog: fields.AddMoreBlog?.map((entry: any, index: number) => ({
            ...entry,
            image: imageUrls[index + 1] || '', // Handle images for AddMoreBlog
          })) || [], // Ensure AddMoreBlog is an array, default to empty if undefined
        });

        await newBlog.save(); // Save new blog entry to the database
        res.status(201).json(newBlog); // Send created blog entry as JSON response
      } catch (error) {
        console.error('Error creating blog:', error);
        res.status(400).json({ message: 'Bad Request', error }); // Handle request errors
      }
      break;

    case 'PUT':
      try {
        const { id } = req.query;
        if (!id) {
          return res.status(400).json({ message: 'Blog ID is required' });
        }

        // Handle file upload and get fields and image URLs
        const { fields, imageUrls } = await handleFileUpload(req);

        // Find the existing blog post
        const blogToUpdate = await Blog.findById(id);
        if (!blogToUpdate) {
          return res.status(404).json({ message: 'Blog not found' });
        }

        // Delete existing images in Cloudinary if new images are provided
        if (imageUrls.length > 0) {
          if (blogToUpdate.image) {
            await cloudinary.uploader.destroy(blogToUpdate.image);
          }
          blogToUpdate.image = imageUrls[0] || '';
        }

       

        await blogToUpdate.save(); // Save updated blog entry to the database
        res.status(200).json(blogToUpdate); // Send updated blog entry as JSON response
      } catch (error) {
        console.error('Error updating blog:', error);
        res.status(400).json({ message: 'Bad Request', error }); // Handle request errors
      }
      break;

    case 'DELETE':
      try {
        const { id } = req.query;
        if (!id) {
          return res.status(400).json({ message: 'Blog ID is required' });
        }

        // Find the existing blog post
        const blogToDelete = await Blog.findById(id);
        if (!blogToDelete) {
          return res.status(404).json({ message: 'Blog not found' });
        }

        // Delete images in Cloudinary
        if (blogToDelete.image) {
          await cloudinary.uploader.destroy(blogToDelete.image);
        }

        for (const addMoreBlogEntry of blogToDelete.AddMoreBlog) {
          if (addMoreBlogEntry.image) {
            await cloudinary.uploader.destroy(addMoreBlogEntry.image);
          }
        }

        await Blog.findByIdAndDelete(id); // Delete the blog post from the database
        res.status(200).json({ message: 'Blog deleted successfully' }); // Send success response
      } catch (error) {
        console.error('Error deleting blog:', error);
        res.status(400).json({ message: 'Bad Request', error }); // Handle request errors
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']); // Set allowed HTTP methods
      res.status(405).end(`Method ${req.method} Not Allowed`); // Handle unsupported methods
      break;
  }
}

