"use client";

import React from 'react';
import { Product } from 'public/data'; // Import the Product type
import Image from 'next/image';

interface ProductDetailsProps {
  product: Product; // Use the Product type
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <section className='py-8'>
      <div className='flex flex-col items-center justify-center'>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="flex justify-center items-center">
            <Image
              alt={product.title}
              src={product.imgSrc}
              className="max-w-[500px] rounded-xl"
              layout='responsive'
              width={500}
              height={300}
            />
          </div>
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h1 className="font-mono text-lg text-primary mt-2">{product.title}</h1>
            <p className="text-gray-600">{product.description}</p>
            <div>
              <span>Likes: {product.likes}</span>
              <span>Comments: {product.comments}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
