"use client";
import React, { useState } from 'react';
import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai';
import Image from 'next/image';
import { products } from 'public/data';
import Link from 'next/link';

function DecouvreMore() {
  return (
    <section className='centred py-4 flex flex-col items-center justify-center gap-8 xl:w-full md:w-full sm:w-full '>
        <h1 className='font-bold text-xl sm:text-xl md:text-4xl lg:text-4xl xl:text-4xl -mt-2 text-orange-400'>DECOUVRE MORE ... </h1>
        {/* Products Blog */}
        <div className=" grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-0 lg:grid-cols-0 xl:grid-cols-3  centred">
        {products.map((product, index) => (
<<<<<<< HEAD
            <div key={index} className=" sm:w-1/2 lg:w-1/3 xl:w-1/5 mb-8 overflow-hidden  ">
                <div className="relative">
                    <Image src={product.imgSrc} alt="Product" className="w-full h-96 object-cover rounded-xl mb-4 " />
                </div>
                <div className="flex flex-col  bg-white  rounded-xl shadow-lg">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-2">
                            <AiOutlineHeart className="text-[25px]" />
                            <Link href='#' className="text-gray-400">{product.likes} likes</Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <AiOutlineComment className="text-[25px]" />
                            <Link href='#' className="text-gray-400">{product.comments} comments</Link>
                        </div>
                    </div>
                    <h1 className="text-xl font-bold text-blue-500 drop-shadow-xl mb-2">{product.title}</h1>
                    <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                    <div className="text-center rounded-full bg-white p-2 mx-16 text-sm font-medium text-sky-700 transition hover:bg-blue-100 focus:outline-none border border-sky-700 shadow-md">
                        <a href={'/product-details'}  >SAVOIR PLUS</a>
                    </div>
                </div>
=======
          <div
            key={index}
            className=" sm:w-1/2 md:w-[85%] lg:w-[85%] xl:w-[85%] mb-8 overflow-hidden flex flex-col "
          >
            <div className="relative">
              <Image
                src={product.imgSrc}
                alt="Product"
                className="w-full h-52 sm:h-52 md:h-96 lg:h-96 xl:h-96 object-cover rounded-xl mb-4 "
              />
>>>>>>> 3c7d80ee01697c29e9b2ccee4306641da9d4869d
            </div>
            <div className="flex flex-col  bg-white ">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <AiOutlineHeart className="text-[20px] sm:text-[20px] md:text-[25px] lg:text-[25px] xl:text-[25px]" />
                  <Link href="#" className="text-gray-400 text-[12px] sm:text-[12px] md:text-[15px] lg:text-[15px] xl:text-[15px] truncate">
                    {product.likes} likes
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <AiOutlineComment className="text-[20px] sm:text-[20px] md:text-[25px] lg:text-[25px] xl:text-[25px]" />
                  <Link href="#" className="text-gray-400 text-[12px] sm:text-[12px] md:text-[15px] lg:text-[15px] xl:text-[15px] truncate">
                    {product.comments} comments
                  </Link>
                </div>
              </div>
              <h1 className="text-xl font-bold text-blue-500 drop-shadow-xl mb-2 truncate">
                {product.title}
              </h1>
              <p className=" text-xs sm:text-sm text-gray-400 mb-4 truncate">
                {product.description}
              </p>
              <div className="mx-auto w-[90%] sm:w-[90%] md:w-[50%] lg:w-[50%] xl:w-[50%] text-center rounded-full bg-white py-2 text-sm font-medium text-primary transition hover:bg-blue-100 focus:outline-none border border-primary shadow-md">
                <a href={'/product-details'}  >SAVOIR PLUS</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DecouvreMore