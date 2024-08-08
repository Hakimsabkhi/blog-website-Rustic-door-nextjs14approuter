// src/middleware/multer.ts
import multer from 'multer';
import { Request } from 'express';
import path from 'path';

// Configure storage for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads'); // Directory where files will be uploaded
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`); // Naming the file with timestamp
  },
});

// Create multer instance
const upload = multer({ storage });

export default upload;
