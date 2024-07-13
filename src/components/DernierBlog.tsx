import React from 'react';
import { FaThumbsUp, FaComment, FaTag, FaListAlt, FaFire } from 'react-icons/fa';
import Image from 'next/image';
import {Blog1, Blog2,Blog3,Blog4,Blog5} from 'public/img/image'

function DernierBlog() {
  const posts = [
    {
      userImgSrc: '/img/PNG/usreimg.png',
      userName: 'User2',
      date: '2023-07-10', 
      title: 'Porte Traditionnelle 101',
      description:
        'Lorem ipsum dolor sit amet consectetur. Neque purus egestas in tincidunt ullamcorper ullamcorper sociis habitant',
      likes: 6,
      comments: 18,
    },
   
  ];

  return (
    <section className="centred px-4 py-12 ">
      <h1 className="text-blue-500 font-bold text-4xl text-center mb-8">DERNIER BLOG</h1>

      {/* 2 blog premier */}

      <div className='flex items-center flex-wrap justify-center sm:justify-start'>
      {posts.map((post, index) => (
        <div
          key={index}
          className="  mb-8 overflow-hidden w-full max-w-2xl mx-auto"
        >
          <Image src={Blog1} alt="p2" className="w-full h-64 object-cover rounded-xl" />
          <div className="p-4">
            <div className="flex items-center mb-4">
              <img src={post.userImgSrc} alt="user img" className="w-10 h-10 rounded-full" />
              <div className="ml-4">
                <h2 className="font-bold">{post.userName}</h2>
                <p className="text-gray-500">{post.date}</p>
              </div>
            </div>
            <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
            <p className="text-gray-600 mb-4">{post.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaThumbsUp className="text-blue-500" />
                <h3 className="text-gray-700">{post.likes} j'aime</h3>
              </div>
              <div className="flex items-center gap-2">
                <FaComment className="text-blue-500" />
                <h3 className="text-gray-700">{post.comments} commentaire</h3>
              </div>
            </div>
          </div>
        </div>
      ))}

{posts.map((post, index) => (
        <div
          key={index}
          className="  mb-8 overflow-hidden w-full max-w-2xl mx-auto"
        >
          <Image src={Blog2} alt="p2" className="w-full h-64 object-cover rounded-xl" />
          <div className="p-4">
            <div className="flex items-center mb-4">
              <img src={post.userImgSrc} alt="user img" className="w-10 h-10 rounded-full" />
              <div className="ml-4">
                <h2 className="font-bold">{post.userName}</h2>
                <p className="text-gray-500">{post.date}</p>
              </div>
            </div>
            <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
            <p className="text-gray-600 mb-4">{post.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaThumbsUp className="text-blue-500" />
                <h3 className="text-gray-700">{post.likes} j'aime</h3>
              </div>
              <div className="flex items-center gap-2">
                <FaComment className="text-blue-500" />
                <h3 className="text-gray-700">{post.comments} commentaire</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
</div>

{/* 3 blog sous Premier Blog */}
<div className="flex flex-wrap gap-20 justify-center">
        {posts.map((post, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 mb-8 overflow-hidden">
            <div className="relative">
      <Image src={Blog3} alt="p2" className="w-full h-64 object-cover rounded-xl" />
      {/* Span pour l'icône de Listing */}
      <span className="absolute top-2 left-2 bg-amber-100 rounded-full px-2.5 py-0.5 text-amber-700 flex items-center">
        <FaListAlt className="mr-1" /> {/* Icône pour Listing */}
        <p className="whitespace-nowrap text-sm">New Listing</p>
      </span>
    </div>
            <div className="p-4 bg-white">
              <div className="flex items-center mb-4">
                <img src={post.userImgSrc} alt="user img" className="w-10 h-10 rounded-full" />
                <div className="ml-4">
                  <h2 className="font-bold">{post.userName}</h2>
                  <p className="text-gray-500">{post.date}</p>
                </div>
              </div>
              <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaThumbsUp className="text-blue-500" />
                  <h3 className="text-gray-700">{post.likes} j'aime</h3>
                </div>
                <div className="flex items-center gap-2">
                  <FaComment className="text-blue-500" />
                  <h3 className="text-gray-700">{post.comments} commentaire</h3>
                </div>
              </div>
            </div>
          </div>
        ))}

{posts.map((post, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 mb-8 overflow-hidden">
            <div className="relative">
      <Image src={Blog4} alt="p2" className="w-full h-64 object-cover rounded-xl" />

      {/* Span pour l'icône et le texte de "Discounted Price" */}
      <span className="absolute top-2 left-2 bg-emerald-100 rounded-full px-2.5 py-0.5 text-emerald-700 flex items-center">
        <FaTag className="mr-1" /> {/* Icône pour Price */}
        <p className="whitespace-nowrap text-sm">Discounted Price</p>
      </span>
    </div>
            <div className="p-4 bg-white">
              <div className="flex items-center mb-4">
                <img src={post.userImgSrc} alt="user img" className="w-10 h-10 rounded-full" />
                <div className="ml-4">
                  <h2 className="font-bold">{post.userName}</h2>
                  <p className="text-gray-500">{post.date}</p>
                </div>
              </div>
              <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaThumbsUp className="text-blue-500" />
                  <h3 className="text-gray-700">{post.likes} j'aime</h3>
                </div>
                <div className="flex items-center gap-2">
                  <FaComment className="text-blue-500" />
                  <h3 className="text-gray-700">{post.comments} commentaire</h3>
                </div>
              </div>
            </div>
          </div>
        ))}

{posts.map((post, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 mb-8 overflow-hidden">
            <div className="relative">
      <Image src={Blog5} alt="p2" className="w-full h-64 object-cover rounded-xl" />
      {/* Span pour l'icône et le texte de "Populer" */}
      <span className="absolute top-2 left-2 bg-red-100 rounded-full px-2.5 py-0.5 text-red-700 flex items-center">
        <FaFire className="mr-1" /> {/* Icône pour Populer */}
        <p className="whitespace-nowrap text-sm">Populer</p>
      </span>
    </div>
            <div className="p-4 bg-white">
              <div className="flex items-center mb-4">
                <img src={post.userImgSrc} alt="user img" className="w-10 h-10 rounded-full" />
                <div className="ml-4">
                  <h2 className="font-bold">{post.userName}</h2>
                  <p className="text-gray-500">{post.date}</p>
                </div>
              </div>
              <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaThumbsUp className="text-blue-500" />
                  <h3 className="text-gray-700">{post.likes} j'aime</h3>
                </div>
                <div className="flex items-center gap-2">
                  <FaComment className="text-blue-500" />
                  <h3 className="text-gray-700">{post.comments} commentaire</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DernierBlog;
