'use client';

import Image from 'next/image';
import axios from 'axios';
import { CldImage } from 'next-cloudinary';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

function Page() {
  const [image, setImage] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState<string | undefined>(undefined);
  const [data, setData] = useState({
    title: "",
    description: "",
    Category: "Blue",
    userName: "Aziz Maaref",
    UserImg: "https://res.cloudinary.com/dzo2bvw5a/image/upload/v1723116603/profileImage_npkuum.jpg",
    AddMoreBlog: [] as { title: string; description: string; image?: string }[], // Updated field
  });
  
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newImages, setNewImages] = useState<File[]>([]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewDescription(event.target.value);
  };

  const handleImagesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setNewImages(Array.from(event.target.files));
    }
  };

  const addMoreBlog = () => {
    setData(prevData => ({
      ...prevData,
      AddMoreBlog: [
        ...prevData.AddMoreBlog,
        {
          title: newTitle,
          description: newDescription,
          image: newImages.length > 0 ? URL.createObjectURL(newImages[0]) : undefined
        }
      ]
    }));
    setNewTitle("");
    setNewDescription("");
    setNewImages([]);
    setIsAddModalOpen(false);
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('Category', data.Category);
    formData.append('userName', data.userName);
    formData.append('userImg', data.UserImg);
    formData.append('AddMoreBlog', JSON.stringify(data.AddMoreBlog));

    if (image) {
      formData.append('image', image);
    } else {
      toast.error("Please select an image before submitting.");
      return;
    }

    try {
      const response = await axios.post('/api/blog', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });

      if (response.data.success) {
        toast.success(response.data.msg);
      } else {
        toast.error("Error: " + response.data.msg);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data || error.message);
        toast.error("Request failed: " + error.response?.data?.error || error.message);
      } else {
        console.error("Unexpected error:", error);
        toast.error("An unexpected error occurred.");
      }
    }
  };

  useEffect(() => {
    if (image) {
      const url = URL.createObjectURL(image);
      setImageURL(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [image]);

  return (
    <section>
      <div>
        <h1 className='text-4xl text-orange-400 font-bold text-center mt-6'>Add Blog</h1>
      </div>
      <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16 flex flex-col gap-8 w-[60%] mx-auto '>
        {/* Image Upload Block */}
        <div>
          <h1 className='text-xl'>Upload Image</h1>
          <label htmlFor="image">
            <CldImage
              src={imageURL || 'https://res.cloudinary.com/dzo2bvw5a/image/upload/v1723112258/upload-1_fo1ehn.png'}
              alt='image'
              width={100}
              height={100}
              className='border-4 border-gray-100 px-2'
            />
          </label>
          <input
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setImage(e.target.files[0]);
              }
            }}
            type="file"
            id='image'
            required
          />
        </div>
        {/* Blog Title Block */}
        <div>
          <h1 className='text-xl'>Blog Title</h1>
          <input
            name='title' onChange={onChangeHandler} value={data.title}
            className='w-full sm:w-[500px] mt-4 px-3 border'
            type="text"
            placeholder='type here' required
          />
        </div>
        {/* Blog Description Block */}
        <div>
          <h1 className='text-xl'>Blog Description</h1>
          <textarea
            name='description' onChange={onChangeHandler} value={data.description}
            className='w-full sm:w-[500px] mt-4 px-3 border'
            placeholder='write content here' required rows={6}
          />
        </div>
        {/* Blog Category Block */}
        <div>
          <h1 className='text-xl'>Blog Category</h1>
          <select name="Category" onChange={onChangeHandler} value={data.Category} id="" className='w-40 mt-4 px-4 py-3 border text-gray-500'>
            <option value="Blue">Blue</option>
            <option value="Rouge">Rouge</option>
            <option value="Jaun">Jaun</option>
          </select>
        </div>
        {/* Add More Blog Titles and Descriptions */}
        <div className='text-center flex flex-col'>
          <button type='button' onClick={() => setIsAddModalOpen(true)} className='text-white bg-blue-500 py-2 px-4 rounded'>Add More</button>
          {isAddModalOpen && (
            <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
              <div className='bg-white p-5 rounded flex flex-col'>
                <h2>Add More Titles and Descriptions</h2>
                <input
                  value={newTitle}
                  onChange={handleTitleChange}
                  type="text"
                  placeholder='Title'
                  className='border p-2 mb-2'
                />
                <textarea
                  value={newDescription}
                  onChange={handleDescriptionChange}
                  placeholder='Description'
                  className='border p-2 mb-2'
                />
                <input
                  type="file"
                  multiple
                  onChange={handleImagesChange}
                />
                <button
                  onClick={addMoreBlog}
                  className='text-white bg-blue-500 py-2 px-4 rounded mt-2'
                >
                  Add
                </button>
                <button
                  onClick={() => setIsAddModalOpen(false)}
                  className='text-white bg-red-500 py-2 px-4 rounded mt-2'
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
        {/* Preview of Added Entries Block */}
        <div className='mt-8'>
          <h2 className='text-2xl font-bold text-center mb-4'>Preview of Added Entries</h2>
          {data.AddMoreBlog.map((entry, index) => (
            <div key={index} className='mb-6 border p-4'>
              <h2 className='text-xl font-bold'>{entry.title}</h2>
              <span className='text-black font-semibold'>Description</span>
              <p className='text-lg'>{entry.description}</p>
              {entry.image && (
                <div className='w-40 h-40 mt-4'>
                  <Image
                    src={entry.image}
                    alt={`Preview Image ${index}`}
                    width={100}
                    height={100}
                    className='object-cover'
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Submit Button */}
        <button
          type='submit'
          className='w-full mt-6 py-3 bg-blue-600 text-white text-lg font-bold'
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Page;
