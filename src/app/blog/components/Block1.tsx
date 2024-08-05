import React from 'react'
import Image from 'next/image'
import { BlogPage } from 'public/img/image'
import Link from 'next/link'


function Block1() {
  return (
    <section className='w-[95%] sm:w-[95%] md:w-[80%] lg:w-[80%] xl:w-[80%] 2xl:w-[75%] mx-auto py-8 flex  gap-4 sm:gap-4 md:gap-2 lg:gap-2 xl:gap-2 flex-col justify-center md:flex-row'>
      {/*Bloc A gauche */}
      <div className='flex flex-col gap-4  '>
      <div className='flex flex-col gap-2'>
      <h1 className='font-bold text-2xl sm:text-2xl md:text-4xl text-orange-400 mb-2'>Welcome To Blog Post</h1>
      <span className='text-gray-400 text-sm'>Posted on january 1, 2023 by Start Bootstrap</span>
      <div className='flex gap-4'>
      <span className='bg-gray-500 text-white rounded-md px-2 text-sm'>Web Design</span>
      <span className='bg-gray-500 text-white rounded-md px-2 text-sm'>Freebies</span>
      </div>
      </div>
      <div>
      <Image src={BlogPage} alt='' className='rounded-md' width={1000}></Image>
      </div>
      <div>
        <p className='w-full sm:w-full md:w-[90%]'>Science is an enterprise that should be cherished as an activity of the free human mind. Because it transforms who we are, how we live, and it gives us an understanding of our place in the universe.

The universe is large and old, and the ingredients for life as we know it are everywhere, so there's no reason to think that Earth would be unique in that regard. Whether of not the life became intelligent is a different question, and we'll see if we find that.

If you get asteroids about a kilometer in size, those are large enough and carry enough energy into our system to disrupt transportation, communication, the food chains, and that can be a really bad day on Earth.</p>
      </div>
      </div>
      {/*bloc A droite*/}
<div className='w-full max-w-sm mx-auto flex flex-col gap-6 '>
  <div className='border border-gray-300 rounded-md overflow-hidden hidden md:block shadow-lg'>
    <div className='bg-gray-200 border-b border-gray-300 p-3'>
      <h3 className='text-gray-700'>Search</h3>
    </div>
    <div className='bg-white p-4'>
      <div className='flex border border-gray-300 rounded-md overflow-hidden'>
        <input 
          type="text"
          placeholder='Enter search term...'
          className='flex-grow p-2 outline-none'
        />
        <button className='bg-primary text-white px-4 py-2'>
          Go!
        </button>
      </div>
    </div>
  </div>

  <div className='border border-gray-300 rounded-md overflow-hidden hidden md:block shadow-lg'>
    <div className='bg-gray-200 border-b border-gray-300 p-3'>
      <h3 className='text-gray-700'>Category</h3>
    </div>
    <div className='bg-white p-4 flex flex-row justify-around'>
     <div className='flex flex-col gap-2'>
     <Link href="#" className='hover:underline text-primary'>Sidi Bou-Said</Link>
     <Link href="#" className='hover:underline text-primary'>Sidi Bou-Said</Link>
     <Link href="#" className='hover:underline text-primary'>Sidi Bou-Said</Link>
     </div>
     <div className='flex flex-col gap-2'>
     <Link href="#" className='hover:underline text-primary'>Sidi Bou-Said</Link>
     <Link href="#" className='hover:underline text-primary'>Sidi Bou-Said</Link>
     <Link href="#" className='hover:underline text-primary'>Sidi Bou-Said</Link>
     </div>
    </div>
  </div>

  <div className='border border-gray-300 rounded-md overflow-hidden shadow-lg hidden md:block '>
    <div className='bg-gray-200 border-b border-gray-300 p-3'>
      <h3 className='text-gray-700'>Side Widget</h3>
    </div>
    <div className='bg-white p-4 flex flex-row justify-around'>
      <p>You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!</p>
  </div>
</div>

</div>

    </section>
  )
}

export default Block1