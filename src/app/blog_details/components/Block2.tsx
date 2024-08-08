import React from 'react';
import { IBlog } from '@/models/Blog'; // Ensure this is the correct path
import Image from 'next/image';

interface Block2Props {
  blog: IBlog;
}

const Block2: React.FC<Block2Props> = ({ blog }) => {
  return (
    <section className='w-[95%] sm:w-[95%] md:w-[80%] lg:w-[80%] xl:w-[80%] 2xl:w-[75%] mx-auto py-8 flex gap-4 sm:gap-4 md:gap-2 lg:gap-2 xl:gap-2 flex-col md:flex-row'>
      {/* Bloc A gauche */}
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <h1 className='font-bold text-2xl sm:text-2xl md:text-4xl text-orange-400 mb-2'>{blog.title}</h1>
        </div>
        <div>
          <p className='w-full sm:w-full md:w-[70%]'>{blog.description}</p>
        </div>
        <div className='w-full sm:w-full md:w-[70%]'>
          <Image 
            src={blog.image} 
            alt={blog.title} 
            className='rounded-md' 
            width={500} 
            height={100} // Ensure you set height appropriately
          />
        </div>
      </div>
    </section>
  );
}

export default Block2;
