// src/components/BlogActions.client.tsx
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation'; // Assurez-vous d'importer useRouter de 'next/navigation'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';

interface BlogActionsProps {
  params: { id: string };
  onActionComplete?: () => void;
}

interface Blog {
  title: string;
  category: string;
  image: string;
}

const BlogActions: React.FC<BlogActionsProps> = ({ params, onActionComplete }) => {
  const router = useRouter(); // Utilisez useRouter ici
  const id = params.id;
  const [blog, setBlog] = useState<Blog>({
    title: '',
    category: '',
    image: '',
  });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState<string | undefined>(undefined);

  const getBlogData = useCallback(() => {
    fetch(`/api/blog/Get/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
        setImageURL(data.image);
      })
      .catch((e) => {
        console.error(e.message);
        toast.error('Error fetching blog data');
      });
  }, [id]);

  useEffect(() => {
    if (!id) return;
    getBlogData();
  }, [id, getBlogData]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setBlog((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setImageURL(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (blog.title === '' || blog.category === '') {
      toast.error('Please fill in all fields');
      return;
    }

    const formData = new FormData();
    formData.append('title', blog.title);
    formData.append('category', blog.category);
    if (file) {
      formData.append('image', file);
    }

    try {
      const response = await fetch(`/api/blog/Update/${id}`, {
        method: 'PUT',
        body: formData,
      });

      if (response.ok) {
        toast.success('Blog updated successfully!');
        setIsFormOpen(false);
        router.refresh(); // Rafraîchissement automatique
        onActionComplete?.(); // Notify parent component of completion
      }
    } catch (error) {
      toast.error('Error updating blog');
      console.error('Error', error);
    }
  };

  const handleDelete = async () => {
    try {
      if (!id) {
        throw new Error('Blog ID is required');
      }

      const res = await fetch(`/api/blog/Delete/${id}`, { method: 'DELETE' });

      if (res.ok) {
        toast.success('Blog deleted successfully');
        router.refresh(); // Rafraîchissement automatique
      } else {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to delete blog');
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
      toast.error('Error deleting blog');
    }
  };

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div id="main" className="flex space-x-2">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleOpenForm}
      >
        Update
      </button>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded"
        onClick={handleDelete}
      >
        Delete
      </button>

      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">Edit Blog</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="title">Title</label>
                <input
                  type="text"
                  name="title"
                  value={blog.title}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="category">Category</label>
                <input
                  type="text"
                  name="category"
                  value={blog.category}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="image">Image</label>
                <input
                  type="file"
                  name="image"
                  onChange={handleFileChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {imageURL && (
                  <img src={imageURL} alt="Preview" className="mt-2 w-32 h-32 object-cover" />
                )}
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleCloseForm}
                className="px-4 py-2 bg-gray-500 text-white rounded ml-2"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default BlogActions;
