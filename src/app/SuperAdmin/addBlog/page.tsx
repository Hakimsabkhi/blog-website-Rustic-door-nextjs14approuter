'use client'
import Image from 'next/image';
import { CldImage } from 'next-cloudinary';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import AddImage from '@/src/components/admin/UploadImage';

function Page() {
  const [image, setImage] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [data, setData] = useState({
    title: "",
    description: "",
    Category: "Blue",
    userName: "Aziz Maaref",
    userImg: "https://res.cloudinary.com/dzo2bvw5a/image/upload/v1723116603/profileImage_npkuum.jpg",
    AddMoreBlog: [] as Array<{ title: string; description: string; imageUrl: string | null }>,
  });

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  // Handle the uploaded image URL
  const handleUploadSuccess = (url: string) => {
    setImageUrl(url);
  };

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

  const addMoreBlog = () => {
    setData(prevData => ({
      ...prevData,
      AddMoreBlog: [
        ...prevData.AddMoreBlog,
        {
          title: newTitle,
          description: newDescription,
          imageUrl: imageUrl 
        }
      ]
    }));
    setNewTitle("");
    setNewDescription("");
    setImageUrl(null);
    setIsAddModalOpen(false);
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('Category', data.Category);
    formData.append('userName', data.userName);
    formData.append('userImg', data.userImg);
    formData.append('AddMoreBlog', JSON.stringify(data.AddMoreBlog));

    if (image) {
      formData.append('image', image);
    } else {
      toast.error("Please select a main image before submitting.");
      return;
    }

    try {
      const response = await fetch('/api/blog/post', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.msg);
      } else {
        toast.error("Error: " + result.error);
      }
    } catch (error) {
      toast.error("An unexpected error occurred.");
    }
  };

  const handleDelete = (index: number) => {
    setData(prevData => ({
      ...prevData,
      AddMoreBlog: prevData.AddMoreBlog.filter((_, i) => i !== index)
    }));
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
        <h1 className='text-4xl text-orange-400 font-bold text-center mt-6'>Create New Blog</h1>
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
            <option value="Blue" className='text-blue-500'>Blue</option>
            <option value="Rouge"className='text-red-600'>Rouge</option>
            <option value="Jaun"className='text-yellow-500'>Jaun</option>
            <option value="Blanc"className='text-white-800'>blanc</option>
            <option value="Orange"className='text-orange-500'>Orange</option>
            <option value="Noir"className='tex-gray-900'>Noir</option>
            <option value="Vert"className='text-green-500'>Vert</option> 
            <option value="Gris"className='text-gray-500'>Gris</option>
          </select>
        </div>
        {/* Add More Blog Titles and Descriptions */}
        <div className='text-center flex flex-col'>
          <button type='button' onClick={() => setIsAddModalOpen(true)} className='text-white bg-blue-500 py-2 px-4 rounded'>Add More</button>
          {isAddModalOpen && (
            <div className='fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
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
                 <AddImage onUploadSuccess={handleUploadSuccess} />
                </div>
                <div className='flex gap-4'>
                <button
                  onClick={addMoreBlog}
                  className=' text-white bg-blue-500 py-2 px-4 rounded mt-2'
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
          
          {data.AddMoreBlog.map((entry, index) => (
            <div key={index} className='mb-6 border p-4'>
              <h2 className='text-xl font-bold'>{entry.title}</h2>
              <span className='text-black font-semibold'>Description</span>
              <p>{entry.description}</p>
              {/* Affiche l'image si elle est disponible */}
              {entry.imageUrl && (
              <div className="mt-4">
                <Image 
                  src={entry.imageUrl} 
                  alt="Image uploaded" 
                  width={200} 
                  height={150} 
                  className="object-cover" 
                />
              </div>
            )}
              <button onClick={() => handleDelete(index)} className='mt-4 text-white bg-red-500 py-2 px-4 rounded'>
                Delete
              </button>
            </div>
          ))}
        </div>
        <button className='text-white bg-green-500 py-2 px-4 rounded' type="submit">Add Blog</button>
      </form>
    </section>
  );
}

export default Page;
