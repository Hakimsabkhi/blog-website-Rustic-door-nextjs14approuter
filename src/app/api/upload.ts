import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/src/lib/db';
import Blog from '@/src/models/Blog';
import cloudinary from '@/src/lib/cloudinary';
import { IncomingForm, File } from 'formidable';
import fs from 'fs';

// Configuration pour l'API route
export const config = {
  api: {
    bodyParser: false, // Désactive le body parser par défaut pour gérer les données de formulaire multipart
  },
};

// Interfaces pour les champs et fichiers analysés depuis la soumission du formulaire
interface ParsedFields {
  [key: string]: any;
}

interface ParsedFiles {
  [key: string]: File[];
}

// Fonction pour gérer le téléchargement de fichiers, y compris l'upload des images vers Cloudinary
async function handleFileUpload(req: NextApiRequest): Promise<{ fields: ParsedFields; addMoreBlogImageUrls: string[]; mainImageUrl: string }> {
  return new Promise((resolve, reject) => {
    const form = new IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        reject(err);
        return;
      }

      const parsedFields = fields as ParsedFields;
      const parsedFiles = files as ParsedFiles;

      const mainImageUrls: string[] = [];
      const addMoreBlogImageUrls: string[] = [];

      // Gestion de l'upload de l'image principale
      const mainImageFile = parsedFiles.image?.[0];
      if (mainImageFile && mainImageFile.filepath) {
        try {
          const uploadResult = await cloudinary.uploader.upload(mainImageFile.filepath);
          mainImageUrls.push(uploadResult.secure_url);
        } catch (uploadError) {
          console.error('Upload error:', uploadError);
          reject(uploadError);
        } finally {
          if (mainImageFile.filepath) {
            fs.unlinkSync(mainImageFile.filepath);
          }
        }
      }

      // Gestion de l'upload des images secondaires (addMoreBlog)
      const addMoreBlogFiles = parsedFiles.addMoreBlogImages as File[];
      if (addMoreBlogFiles) {
        for (const file of addMoreBlogFiles) {
          if (file.filepath) {
            try {
              const uploadResult = await cloudinary.uploader.upload(file.filepath);
              addMoreBlogImageUrls.push(uploadResult.secure_url);
            } catch (uploadError) {
              console.error('Upload error:', uploadError);
              reject(uploadError);
            } finally {
              if (file.filepath) {
                fs.unlinkSync(file.filepath);
              }
            }
          }
        }
      }

      resolve({ fields: parsedFields, addMoreBlogImageUrls, mainImageUrl: mainImageUrls[0] || '' });
    });
  });
}

// Fonction principale pour gérer les différentes méthodes HTTP
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect(); // Connexion à la base de données

  switch (req.method) {
    case 'GET':
      try {
        const blogs = await Blog.find({}).sort({ date: -1 }); // Récupère tous les articles de blog depuis la base de données
        res.status(200).json(blogs); // Envoie les articles de blog en réponse JSON
      } catch (error) {
        res.status(500).json({ message: 'Server Error', error }); // Gestion des erreurs serveur
      }
      break;

    case 'POST':
      try {
        // Gérer le téléchargement de fichiers et obtenir les champs et les URL des images
        const { fields, addMoreBlogImageUrls, mainImageUrl } = await handleFileUpload(req);
        

        // Créer une nouvelle entrée de blog avec les champs fournis et les URL des images
        const newBlog = new Blog({
          ...fields,
          image: mainImageUrl, // URL de l'image principale
          AddMoreBlog: fields.AddMoreBlog?.map((entry: any, index: number) => ({
            ...entry,
            image: addMoreBlogImageUrls[index] || '', // Assigner correctement l'URL de l'image pour AddMoreBlog
          })) || [],
        });
        
        await newBlog.save(); // Sauvegarder la nouvelle entrée de blog dans la base de données
        res.status(201).json(newBlog); // Envoyer la nouvelle entrée de blog en réponse JSON
      } catch (error) {
        console.error('Error creating blog:', error);
        res.status(400).json({ message: 'Bad Request', error }); // Gestion des erreurs de requête
      }
      break;

    case 'PUT':
      try {
        const { id } = req.query;
        if (!id) {
          return res.status(400).json({ message: 'Blog ID is required' });
        }

        // Gérer le téléchargement de fichiers et obtenir les champs et les URL des images
        const { fields, addMoreBlogImageUrls, mainImageUrl } = await handleFileUpload(req);

        // Trouver l'article de blog existant
        const blogToUpdate = await Blog.findById(id);
        if (!blogToUpdate) {
          return res.status(404).json({ message: 'Blog not found' });
        }

        // Supprimer les images existantes dans Cloudinary si de nouvelles images sont fournies
        if (mainImageUrl) {
          if (blogToUpdate.image) {
            await cloudinary.uploader.destroy(blogToUpdate.image);
          }
          blogToUpdate.image = mainImageUrl;
        }

        // Mettre à jour l'image de AddMoreBlog
        if (addMoreBlogImageUrls.length > 0) {
          blogToUpdate.AddMoreBlog = fields.AddMoreBlog?.map((entry: any, index: number) => ({
            ...entry,
            image: addMoreBlogImageUrls[index] || '',
          })) || [];
        }

        await blogToUpdate.save(); // Sauvegarder l'article de blog mis à jour dans la base de données
        res.status(200).json(blogToUpdate); // Envoyer l'article de blog mis à jour en réponse JSON
      } catch (error) {
        console.error('Error updating blog:', error);
        res.status(400).json({ message: 'Bad Request', error }); // Gestion des erreurs de requête
      }
      break;

    case 'DELETE':
      try {
        const { id } = req.query;
        if (!id) {
          return res.status(400).json({ message: 'Blog ID is required' });
        }

        // Trouver l'article de blog existant
        const blogToDelete = await Blog.findById(id);
        if (!blogToDelete) {
          return res.status(404).json({ message: 'Blog not found' });
        }

        // Supprimer les images dans Cloudinary
        if (blogToDelete.image) {
          await cloudinary.uploader.destroy(blogToDelete.image);
        }

        for (const addMoreBlogEntry of blogToDelete.AddMoreBlog) {
          if (addMoreBlogEntry.image) {
            await cloudinary.uploader.destroy(addMoreBlogEntry.image);
          }
        }

        await Blog.findByIdAndDelete(id); // Supprimer l'article de blog de la base de données
        res.status(200).json({ message: 'Blog deleted successfully' }); // Envoyer une réponse de succès
      } catch (error) {
        console.error('Error deleting blog:', error);
        res.status(400).json({ message: 'Bad Request', error }); // Gestion des erreurs de requête
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']); // Définir les méthodes HTTP autorisées
      res.status(405).end(`Method ${req.method} Not Allowed`); // Gérer les méthodes non supportées
      break;
  }
}
