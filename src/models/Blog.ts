import mongoose, { Document, Schema, Model } from 'mongoose';


// Define the Blog interface extending mongoose Document
export interface IBlog extends Document {
  image: string; // Main image URL, uploaded to Cloudinary
  category: string; // Category of the blog post
  title: string; // Title of the blog post
  description: string; // Description of the blog post
  likes: number; // Number of likes for the blog post
  comments: number; //  comments for the blog post
  userImg: string; // User profile image URL
  userName: string; // User name who created the blog post
  date: Date; // Date when the blog post was created
  AddMoreBlog: { 
    title: string; // Title of additional blog entries
    description: string; // Description of additional blog entries
    image: string; // imageURL, uploaded to Cloudinary
  }[];
}

const BlogSchema: Schema = new Schema({
  image: { type: String, required: true }, // URL of the main image, must be provided
  category: { type: String, required: true }, // Category of the blog post, must be provided
  title: { type: String, required: true }, // Title of the blog post, must be provided
  description: { type: String, required: true }, // Description of the blog post, must be provided
  likes: { type: Number, required: true, default: 0 }, // Number of likes, default is 0
  comments:  { type: Number, required: true, default: 0 }, 
  userImg: { type: String, required: true }, // URL of the user’s profile image, must be provided
  userName: { type: String, required: true }, // User name, must be provided
  date: { type: Date, default: Date.now }, // Date of creation, default is current date
  AddMoreBlog: [ 
    {
      title: { type: String, required: true }, // Title of additional blog entries, must be provided
      description: { type: String, required: true }, // Description of additional blog entries, must be provided
      image: { type: String } // URL of image, 
    }
  ]
});

// Create and export the Blog model, using existing model if it exists
const Blog: Model<IBlog> = mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);
export default Blog;
