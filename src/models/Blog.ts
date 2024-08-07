import mongoose, { Document, Schema, Model } from 'mongoose';

// Define the Blog interface
export interface IBlog extends Document {
  id: number ;
  imgSrc: string;
  Categorie: string;
  title: string;
  description: string;
  likes: number;
  comments: number;
  userImgSrc: string;
  userName: string;
  date: string;
}

// Define the Blog schema
const BlogSchema: Schema = new Schema({
  id:{ type: Number, required: true },
  imgSrc: { type: String, required: true },
  Categorie: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  likes: { type: Number, required: true },
  comments: { type: Number, required: true },
  userImgSrc: { type: String, required: true },
  userName: { type: String, required: true },
  date: { type: String, required: true },
});

// Create and export the Blog model
const Blog: Model<IBlog> = mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);
export default Blog;






  