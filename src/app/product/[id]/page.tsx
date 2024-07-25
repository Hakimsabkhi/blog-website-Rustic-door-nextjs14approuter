"use client";

import React from 'react';
import { useRouter } from 'next/navigation'; // Use 'next/navigation' for App Router
import { products } from 'public/data'; // Adjust path as needed
import ProductDetails from '../../One_Product/page'; // Adjust path as needed
import { Product } from 'public/data'; // Import Product type

const ProductPage: React.FC<{ params: { id: string } }> = ({ params }) => {
    const { id } = params;
  
    // Ensure id is defined and is a number
    const productId = id ? parseInt(id, 10) : NaN;
  
    // Find the product based on the id from the URL
    const product = products.find((product) => product.id === productId);
  
    if (!product) {
      return <div>Product not found</div>;
    }
  
    return (
      <div>
        <ProductDetails product={product} />
      </div>
    );
  };
  
  export default ProductPage;
