'use client'

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
    UserImg: "https://res.cloudinary.com/dzo2bvw5a/image/upload/v1723116603/profileImage_npkuum.jpg"
  });

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create FormData and append fields
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('Category', data.Category);
    formData.append('userName', data.userName);
    formData.append('userImg', data.UserImg);

    // Check if an image is selected
    if (image) {
        formData.append('image', image); // Append the image file
    } else {
        toast.error("Please select an image before submitting.");
        return;
    }

    try {
        const response = await axios.post('/api/blog', formData, {
            headers: {
                'Content-Type': 'multipart/form-data', // Ensure correct header
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
            toast.error("Request failed: " + error.response?.data?.message || error.message);
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

      // Cleanup the URL object when the component unmounts or image changes
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
            hidden
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
        <button type='submit' className='w-40 h-12 bg-primary text-white hover:bg-orange-400'>ADD</button>
      </form>
    </section>
  );
}

export default Page;
