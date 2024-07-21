"use client";
import React, { useState } from 'react';
import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai';
import Image from 'next/image';
import { products } from 'public/data';
import Link from 'next/link';

function DecouvreMore() {
  return (
    <section className='centred py-8 flex flex-col items-center justify-center gap-8 xl:w-full md:w-full sm:w-full '>
        <h1 className='text-orange-400 font-bold text-4xl text-center'>DECOUVRE MORE ... </h1>
        {/* Products Blog */}
    <div className="flex flex-wrap gap-10 justify-center ">
        {products.map((product, index) => (
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
                    <button className='text-center rounded-full bg-white p-2 mx-16 text-sm font-medium text-sky-700 transition hover:bg-blue-100 focus:outline-none border border-sky-700 shadow-md'>
                        {product.savoir}
                    </button>
                </div>
            </div>
        ))}
    </div>
    </section>
  )
}

export default DecouvreMore