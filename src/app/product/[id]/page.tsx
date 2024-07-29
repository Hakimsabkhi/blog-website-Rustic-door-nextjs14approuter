"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { products } from 'public/data'; // Adjust path as needed
import FirstBlock from '@/app/product_details/components/FirstBlock';
import SecondBlock from '@/app/product_details/components/SecondBlock';
import ThredBlock from '@/app/product_details/components/ThredBlock';
import ContactBlock from '@/app/product_details/components/ContactBlock';
import BlockFive from '@/app/product_details/components/BlockFive'; // Adjust path as needed
import DecouvreMore from '@/app/product_details/components/DecouvreMore';

const ProductPage: React.FC = () => {
  const params = useParams();
  const { id } = params as { id: string }; // Type assertion to ensure id is a string

  // Ensure id is defined and is a number
  const productId = id ? parseInt(id, 10) : NaN;

  // Find the product based on the id from the URL
  const product = products.find((product) => product.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <FirstBlock products={[product]} />
      <SecondBlock products={[product]} />
      <ThredBlock products={[product]} />
      <ContactBlock products={[product]} />
      <BlockFive products={[product]} />
      <DecouvreMore/>





      
    </div>
  );
};

export default ProductPage;
