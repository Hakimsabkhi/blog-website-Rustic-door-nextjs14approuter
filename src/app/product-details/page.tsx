import React from 'react';
import Image from 'next/image';
import { ProductDetail1, } from 'public/img/image'; // Add more images as needed
import FirstBlock from './components/FirstBlock';
import SecondBlock from './components/SecondBlock';
import ThredBlock from './components/ThredBlock';
import ContactBlock from './components/ContactBlock';
import BlockFive from './components/BlockFive';
import DecouvreMore from './components/DecouvreMore';

function ProductDetails() {
  return (
     <div>
        <FirstBlock/>
        <SecondBlock/>
        <ThredBlock/>
        <ContactBlock/>
        <BlockFive/>
        <DecouvreMore/>
     </div>
  );
}

export default ProductDetails;
