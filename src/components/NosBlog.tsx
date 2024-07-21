import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai';
import { FaArrowRight } from 'react-icons/fa';
import { blogs } from 'public/data'

const NosBlog: React.FC = () => {
  return (
    <section className='centred flex flex-col gap-4 py-16'>
      <h1 className='text-center text-4xl text-orange-400 font-bold'>DECOUVRE NOS BLOG</h1>
      <h2 className='text-center text-gray-400 font-mono'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      
      <div className='grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3'>
  {blogs.map((blog, index) => (
    <div 
    key={index} 
    className={`w-full mb-8 overflow-hidden block rounded-xl border shadow-xl transition hover:border-orange-400/10 hover:shadow-orange-400/10 flex-1 ${index === 2 ? 'hidden md:block' : ''}`}
  >
      <Link href='#' className="relative block">
        <Image 
          src={blog.imgSrc} 
          alt="blog Image" 
          className="w-full h-32 sm:h-40 md:h-48 object-cover mb-4"
        />
      </Link>
      <div className="flex flex-col gap-2 bg-white rounded-xl p-4 h-full">
        <Link href='#' className="text-xs sm:text-sm text-orange-300">{blog.Catégorie}</Link>
        <div className="flex items-center">
          <Link href='#' className="text-base sm:text-lg md:text-xl font-semibold text-black drop-shadow-xl">{blog.title}</Link>
          <FaArrowRight className="text-black ml-3 -rotate-45" />
        </div>
        <p className="text-xs sm:text-sm text-gray-400 mb-4 truncate">{blog.description}</p>
        <div className="flex items-center gap-4 mb-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <AiOutlineHeart className="text-[20px]" />
            <Link href='#' className="text-gray-400">{blog.likes} likes</Link>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineComment className="text-[20px]" />
            <Link href='#' className="text-gray-400">{blog.comments} comments</Link>
          </div>
        </div>
        <Link href='#' className="hidden md:flex items-center gap-2 overflow-hidden">
          <Image src={blog.userImgSrc} alt="User Image" width={30} height={30} className="rounded-full" />
          <div>
            <h3 className="text-sm sm:text-base text-gray-700 font-bold">{blog.userName}</h3>
            <Link href='#' className="text-xs sm:text-sm text-gray-400">{blog.date}</Link>
          </div>
        </Link>
      </div>
    </div>
  ))}
</div>
<div className='grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3'>
  {blogs.map((blog, index) => (
    <div 
    key={index} 
    className={`w-full mb-8 overflow-hidden block rounded-xl border shadow-xl transition hover:border-orange-400/10 hover:shadow-orange-400/10 flex-1 ${index === 2 ? 'hidden md:block' : ''}`}
  >
      <Link href='#' className="relative block">
        <Image 
          src={blog.imgSrc} 
          alt="blog Image" 
          className="w-full h-32 sm:h-40 md:h-48 object-cover mb-4"
        />
      </Link>
      <div className="flex flex-col gap-2 bg-white rounded-xl p-4 h-full">
        <Link href='#' className="text-xs sm:text-sm text-orange-300">{blog.Catégorie}</Link>
        <div className="flex items-center">
          <Link href='#' className="text-base sm:text-lg md:text-xl font-semibold text-black drop-shadow-xl">{blog.title}</Link>
          <FaArrowRight className="text-black ml-3 -rotate-45" />
        </div>
        <p className="text-xs sm:text-sm text-gray-400 mb-4 truncate">{blog.description}</p>
        <div className="flex items-center gap-4 mb-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <AiOutlineHeart className="text-[20px]" />
            <Link href='#' className="text-gray-400">{blog.likes} likes</Link>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineComment className="text-[20px]" />
            <Link href='#' className="text-gray-400">{blog.comments} comments</Link>
          </div>
        </div>
        <Link href='#' className="hidden md:flex items-center gap-2 overflow-hidden">
          <Image src={blog.userImgSrc} alt="User Image" width={30} height={30} className="rounded-full" />
          <div>
            <h3 className="text-sm sm:text-base text-gray-700 font-bold">{blog.userName}</h3>
            <Link href='#' className="text-xs sm:text-sm text-gray-400">{blog.date}</Link>
          </div>
        </Link>
      </div>
    </div>
  ))}
</div>


    
    </section>
  );
};

export default NosBlog;
