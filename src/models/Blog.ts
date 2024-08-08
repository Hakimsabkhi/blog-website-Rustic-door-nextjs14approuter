import mongoose, { Document, Schema, Model } from 'mongoose';

// Define the Blog interface
export interface IBlog extends Document {
  image: string;
  category: string;
  title: string;
  description: string;
  likes: number;
  comments: number;
  userImg: string;
  userName: string;
  date: Date;
}

// Define the Blog schema
const BlogSchema: Schema = new Schema({
  image: { type: String, required: true },
  category: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  likes: { type: Number, required: true },
  comments: { type: Number, required: true },
  userImg: { type: String, required: true },
  userName: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

// Create and export the Blog model
const Blog: Model<IBlog> = mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);
export default Blog;
