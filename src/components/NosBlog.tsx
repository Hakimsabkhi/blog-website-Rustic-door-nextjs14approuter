import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai';
import { FaArrowRight } from 'react-icons/fa';
import { blogs } from 'public/data'

const NosBlog: React.FC = () => {
  return (
    <section className='centred flex flex-col gap-8 py-8'>
      <h1 className='text-center text-4xl text-orange-400 font-bold'>DECOUVRE NOS BLOG</h1>
      <h2 className='text-center text-gray-400 font-mono'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      
      <div className='flex flex-col md:flex-row flex-wrap gap-10 justify-center'>
        {blogs.map((blog, index) => (
          <div 
            key={index} 
            className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 mb-8 overflow-hidden block rounded-xl border shadow-xl transition hover:border-orange-400/10 hover:shadow-orange-400/10 flex-1"
          >
            <Link href='#' className="relative">
              <Image src={blog.imgSrc} alt="blog Image" className="w-full h-64 object-cover mb-4" />
            </Link>
            <div className="flex flex-col gap-2 bg-white rounded-xl pl-4 pb-4">
              <Link href='#' className="text-sm text-orange-300">{blog.Catégorie}</Link>
              <div className="flex items-center">
                <Link href='#' className="text-xl font-semibold text-black drop-shadow-xl mb-2">{blog.title}</Link>
                <FaArrowRight className="text-black ml-3 -rotate-45 mb-2" />
              </div>
              <p className="text-gray-400 text-sm mb-4">{blog.description}</p>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <AiOutlineHeart className="text-[25px]" />
                  <Link href='#' className="text-gray-400">{blog.likes} likes</Link>
                </div>
                <div className="flex items-center gap-2">
                  <AiOutlineComment className="text-[25px]" />
                  <Link href='#' className="text-gray-400">{blog.comments} comments</Link>
                </div>
              </div>
              <Link href='#' className="flex items-center gap-2">
                <Image src={blog.userImgSrc} alt="User Image" width={40} height={40} className="rounded-full" />
                <div>
                  <h3 className="text-gray-700 font-bold">{blog.userName}</h3>
                  <Link href='#' className="text-gray-400 text-sm">{blog.date}</Link>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    
      <div className='flex flex-col md:flex-row flex-wrap gap-10 justify-center'>
        {blogs.map((blog, index) => (
          <div 
            key={index} 
            className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 mb-8 overflow-hidden block rounded-xl border shadow-xl transition hover:border-orange-400/10 hover:shadow-orange-400/10 flex-1"
          >
            <Link href='#' className="relative">
              <Image src={blog.imgSrc} alt="blog Image" className="w-full h-64 object-cover mb-4" />
            </Link>
            <div className="flex flex-col gap-2 bg-white rounded-xl pl-4 pb-4">
              <Link href='#' className="text-sm text-orange-300">{blog.Catégorie}</Link>
              <div className="flex items-center">
                <Link href='#' className="text-xl font-semibold text-black drop-shadow-xl mb-2">{blog.title}</Link>
                <FaArrowRight className="text-black ml-3 -rotate-45 mb-2" />
              </div>
              <p className="text-gray-400 text-sm mb-4">{blog.description}</p>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <AiOutlineHeart className="text-[25px]" />
                  <Link href='#' className="text-gray-400">{blog.likes} likes</Link>
                </div>
                <div className="flex items-center gap-2">
                  <AiOutlineComment className="text-[25px]" />
                  <Link href='#' className="text-gray-400">{blog.comments} comments</Link>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image src={blog.userImgSrc} alt="User Image" width={40} height={40} className="rounded-full" />
                <div>
                  <h3 className="text-gray-700 font-bold">{blog.userName}</h3>
                  <Link href='#' className="text-gray-400 text-sm">{blog.date}</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


      <div className='flex flex-col md:flex-row flex-wrap gap-10 justify-center'>
        {blogs.map((blog, index) => (
          <div 
            key={index} 
            className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 mb-8 overflow-hidden block rounded-xl border shadow-xl transition hover:border-orange-400/10 hover:shadow-orange-400/10 flex-1"
          >
            <Link href='#' className="relative">
              <Image src={blog.imgSrc} alt="blog Image" className="w-full h-64 object-cover mb-4" />
            </Link>
            <div className="flex flex-col gap-2 bg-white rounded-xl pl-4 pb-4">
              <Link href='#' className="text-sm text-orange-300">{blog.Catégorie}</Link>
              <div className="flex items-center">
                <Link href='#' className="text-xl font-semibold text-black drop-shadow-xl mb-2">{blog.title}</Link>
                <FaArrowRight className="text-black ml-3 -rotate-45 mb-2" />
              </div>
              <p className="text-gray-400 text-sm mb-4">{blog.description}</p>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <AiOutlineHeart className="text-[25px]" />
                  <Link href='#' className="text-gray-400">{blog.likes} likes</Link>
                </div>
                <div className="flex items-center gap-2">
                  <AiOutlineComment className="text-[25px]" />
                  <Link href='#' className="text-gray-400">{blog.comments} comments</Link>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image src={blog.userImgSrc} alt="User Image" width={40} height={40} className="rounded-full" />
                <div>
                  <h3 className="text-gray-700 font-bold">{blog.userName}</h3>
                  <Link href='#' className="text-gray-400 text-sm">{blog.date}</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NosBlog;
