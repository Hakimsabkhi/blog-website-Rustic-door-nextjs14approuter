import React from 'react'
import Image from 'next/image'
import { BlogPage3 } from 'public/img/image' 

function Block3() {
  return (
    <section className='w-[95%] sm:w-[95%] md:w-[80%] lg:w-[80%] xl:w-[80%] 2xl:w-[75%] mx-auto py-8 flex  gap-4 sm:gap-4 md:gap-2 lg:gap-2 xl:gap-2 flex-col justify-center md:flex-row'>
    {/*Bloc A gauche */}
    <div className='flex flex-col gap-4  '>
    <div className='flex flex-col gap-2'>
    <h1 className='font-bold text-2xl sm:text-2xl md:text-4xl text-orange-400 mb-2'>I have odd cosmic thoughts every day</h1>
    </div>
    <div>
      <p className='w-full sm:w-full md:w-[70%]'>For me, the most fascinating interface is Twitter. I have odd cosmic thoughts every day and I realized I could hold them to myself or share them with people who might be interested.

Venus has a runaway greenhouse effect. I kind of want to know what happened there because we're twirling knobs here on Earth without knowing the consequences of it. Mars once had running water. It's bone dry today. Something bad happened there as well.</p>
    </div>
    <div>
    <Image src={BlogPage3} alt='' className='rounded-md' width={1000}></Image>
    </div>
    </div>
    </section>
  )
}

export default Block3