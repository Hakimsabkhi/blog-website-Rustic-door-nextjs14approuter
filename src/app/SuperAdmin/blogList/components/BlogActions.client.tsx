'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';

interface Blog {
  title: string;
  category: string;
  image: string;
}

export default function BlogActions({ params }: { params: { id: string } }) {
  const id = params.id;
  const [blog, setBlog] = useState<Blog>({
    title: '',
    category: '',
    image: '',
  });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState<string | undefined>(undefined);


  // Fetch blog data
  const getBlogData = useCallback(() => {
    fetch(`/api/blog/Get/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
        setImageURL(data.image); // Set image URL to display the current image
      })
      .catch((e) => {
        console.error(e.message);
        toast.error('Error fetching blog data');
      });
  }, [id]);

  useEffect(() => {
    getBlogData();
  }, [getBlogData]);

  // Handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setBlog((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setImageURL(URL.createObjectURL(e.target.files[0]));
    }
  };

  // Handle form submission
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
        getBlogData(); // Refresh blog data to show updated image
    
      }
    } catch (error) {
      toast.error('Error updating blog');
      console.error('Error', error);
    }
  };

  // Handle delete blog
  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/blog/Delete/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        toast.success('Blog deleted successfully');
     
      }
    } catch (error) {
      toast.error('Error deleting blog');
      console.error('Error deleting blog:', error);
    }
  };

  // Open the form
  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  // Close the form
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
                <label className="block text-gray-700">Title:</label>
                <input
                  type="text"
                  name="title"
                  value={blog.title}
                  onChange={handleInputChange}
                  className="border rounded p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Category:</label>
                <select
                  name="category"
                  value={blog.category}
                  onChange={handleInputChange}
                  className="border rounded p-2 w-full"
                >
                  <option value="Blue">Blue</option>
                  <option value="Red">Red</option>
                  <option value="Yellow">Yellow</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Image:</label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="border rounded p-2 w-full"
                />
                {imageURL && (
                  <div className="mt-2">
                    <Image
                      src={imageURL}
                      alt="Selected Image"
                      width={200}
                      height={200}
                      className="object-cover border rounded"
                    />
                  </div>
                )}
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={handleCloseForm}
                  className="px-4 py-2 bg-gray-300 text-black rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
