// src/components/admin/BlogActions.client.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();
  const id = params?.id;
  const [blog, setBlog] = useState<Blog>({
    title: '',
    category: '',
    image: '',
  });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState<string | undefined>(undefined);

  // States for confirmation modals
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [confirmText, setConfirmText] = useState('');
  const [actionType, setActionType] = useState<'delete' | 'update' | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

  const handleFormSubmit = async () => {
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
      const response = await fetch(`/api/blog/put/${id}`, {
        method: 'PUT',
        body: formData,
      });

      if (response.ok) {
        toast.success('Blog updated successfully!');
        setIsFormOpen(false);
        router.refresh();
        onActionComplete?.();
      } else {
        toast.error('Failed to update blog');
      }
    } catch (error) {
      toast.error('Error updating blog');
      console.error('Error', error);
    }
  };

  const handleDelete = async () => {
    if (confirmText === 'blog') {
      try {
        if (!id) {
          throw new Error('Blog ID is required');
        }

        const res = await fetch(`/api/blog/delete/${id}`, { method: 'DELETE' });

        if (res.ok) {
          toast.success('Blog deleted successfully');
          router.refresh();
        } else {
          const errorData = await res.json();
          throw new Error(errorData.error || 'Failed to delete blog');
        }
      } catch (error) {
        console.error('Error deleting blog:', error);
        toast.error('Error deleting blog');
      } finally {
        setIsConfirmOpen(false);
        setConfirmText('');
        setActionType(null);
      }
    } else {
      toast.error('Please type "blog" to confirm');
    }
  };

  const handleOpenForm = async () => {
    try {
      const res = await fetch(`/api/blog/Get/${id}`, { method: 'GET' });

      if (!res.ok) {
        throw new Error('Failed to fetch blog data');
      }

      const data = await res.json(); // Assuming the response is JSON
      setBlog(data); // Assuming the API returns the blog object directly
      setImageURL(data.image); // Set the image URL if available

      setIsFormOpen(true);
    } catch (error) {
      console.error('Error fetching blog data:', error);
      toast.error('Error fetching blog data');
    }
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setFile(null); // Clear the file when closing the form
    setImageURL(undefined); // Clear the image URL when closing the form
  };

  const handleOpenConfirm = (type: 'delete' | 'update') => {
    setActionType(type);
    setIsConfirmOpen(true);
  };

  const handleCloseConfirm = () => {
    setIsConfirmOpen(false);
    setConfirmText('');
    setActionType(null);
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
        onClick={() => handleOpenConfirm('delete')}
      >
        Delete
      </button>

      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">Edit Blog</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleFormSubmit(); }}>
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

      {isConfirmOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">Confirm {actionType === 'update' ? 'Update' : 'Delete'}</h2>
            <p className="mb-4">
              {actionType === 'update'
                ? 'Type "update" to confirm your action.'
                : 'Type "blog" to confirm your action.'
              }
            </p>
            <input
              type="text"
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            {confirmText === (actionType === 'update' ? 'update' : 'blog') && (
              <button
                onClick={() => {
                  if (actionType === 'update') {
                    handleFormSubmit();
                  } else {
                    handleDelete();
                  }
                }}
                className="px-4 py-2 bg-green-500 text-white rounded"
              >
                Confirm
              </button>
            )}
            <button
              type="button"
              onClick={handleCloseConfirm}
              className="px-4 py-2 bg-gray-500 text-white rounded ml-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default BlogActions;
