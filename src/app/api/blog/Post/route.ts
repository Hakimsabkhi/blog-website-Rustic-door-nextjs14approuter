import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/src/lib/db';
import Blog from '@/src/models/Blog';
import cloudinary from '@/src/lib/cloudinary';
import stream from 'stream';

// Function to upload a single image to Cloudinary
async function uploadImage(imageFile: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];

    if (!allowedTypes.includes(imageFile.type)) {
      return reject(new Error('Invalid image type'));
    }

    if (imageFile.size > 2 * 1024 * 1024) { // 2MB limit
      return reject(new Error('Image size exceeds 2MB'));
    }

    // Convert File to Base64
    imageFile.arrayBuffer().then(imageBuffer => {
      const bufferStream = new stream.PassThrough();
      bufferStream.end(Buffer.from(imageBuffer));

      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: 'Blogs' },
        (error, result) => {
          if (error) {
            return reject(error);
          }
          if (!result || !result.secure_url) {
            return reject(new Error('Image upload failed: No URL returned'));
          }
          resolve(result.secure_url);
        }
      );

      bufferStream.pipe(uploadStream);
    }).catch(reject);
  });
}

export async function POST(req: NextRequest) {
  await connectToDatabase();

  try {
    const formData = await req.formData();

    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const category = formData.get('Category') as string;
    const userName = formData.get('userName') as string;
    const userImg = formData.get('userImg') as string;
    const addMoreBlog = formData.get('AddMoreBlog') as string;

    // Validate required fields
    if (!title || !description || !category || !userImg || !userName || !addMoreBlog) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    // Parse AddMoreBlog from JSON
    let parsedAddMoreBlog: { title: string; description: string; image?: string }[] = [];
    try {
      parsedAddMoreBlog = JSON.parse(addMoreBlog);
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      return NextResponse.json({ error: 'Invalid JSON format for AddMoreBlog' }, { status: 400 });
    }

    // ---- Handle Main Image Upload ----
    const imageFile = formData.get('image') as File | null;
    let mainImage = null;

    if (imageFile) {
      try {
        mainImage = await uploadImage(imageFile); // Upload the main image
      } catch (uploadError) {
        console.error('Cloudinary upload error:', uploadError);
        return NextResponse.json({ error: 'Error uploading main image' }, { status: 500 });
      }
    }

    // ---- Handle AddMoreBlog Images Upload ----
    const addMoreBlogFiles = formData.getAll('addMoreBlogImages') as File[];

    const addMoreBlogImages: string[] = [];
    
    for (const file of addMoreBlogFiles) {
      try {
        const imageUrl = await uploadImage(file); // Upload each addMoreBlog image
        addMoreBlogImages.push(imageUrl);
      } catch (uploadError) {
        console.error('Cloudinary upload error:', uploadError);
        return NextResponse.json({ error: 'Error uploading additional images' }, { status: 500 });
      }
    }

    // Create blog entry
    const blogData = {
      image: mainImage, // Main image URL
      title,
      description,
      category,
      userImg,
      userName,
      date: new Date(),
      AddMoreBlog: parsedAddMoreBlog.map((entry, index) => ({
        ...entry,
        image: addMoreBlogImages[index] || '', // Assign the corresponding image URL for AddMoreBlog
      })),
    };

    await Blog.create(blogData);

    return NextResponse.json({ success: true, msg: 'Blog Added' }, { status: 201 });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Error creating blog data' }, { status: 500 });
  }
}
