"use client";
import React, { useState } from 'react';
import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai';
import Image from 'next/image';
import { productpagethree } from 'public/data';
import Link from 'next/link';

function Page() {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('All Category');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
  };
  
  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setCategory(event.target.value);
  };
  

    const filteredproductpagethree = productpagethree.filter(product => {
        const matchesCategory = category === 'All Category' || product.category === category;
        const matchesSearchTerm = product.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearchTerm;
    });

    return (
        <section className='centred flex flex-col gap-8 py-8'>
            <div className='flex flex-col justify-center items-center '>

                <h1 className='text-center text-4xl text-blue-400 font-bold mb-4'>Our Collection Of Products</h1>
                <div className='flex items-center rounded-md gap-1 bg-gray-100 '>
                
                    {/* Select Category */}
                    <select
                        name="Category"
                        id="Category"
                        value={category}
                        onChange={handleCategoryChange}
                        className="text-blue-600 sm:text-sm px-2 py-3 border-r-2 bg-gray-100 rounded-tl-md rounded-bl-md -mr-1"
                    >
                        <option value="All Category">All Category</option>
                        <option value="SIDI BOUSAID">SIDI BOUSAID</option>
                        <option value="RADIAS">RADIAS</option>
                        <option value="TUNIS">TUNIS</option>
                    </select>
                    <div className="relative w-full max-w-xs">
                        <label htmlFor="Search" className="sr-only">Search</label>
                        {/* Search Bar */}
                        <input
                            type="text"
                            id="Search"
                            placeholder="Search for..."
                            value={searchTerm}
                            onChange={handleSearchChange}

                            className="w-full py-3 pe-16 sm:text-sm bg-gray-100 pl-2"
                        />
                    </div>
                    <span className=" grid w-15 ">
                            <button type="button" className="bg-primary rounded-tr-md rounded-br-md text-white px-4 py-4 sm:py-4 md:py-3.5 lg:py-3.5 xl:py-3.5 -ml-1">
                                <span className="sr-only">Search</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                    />
                                </svg>
                            </button>
                        </span>

                </div>
            </div>

            {/* productpagethree Blog */}

            <div className=" grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-0 lg:grid-cols-0 xl:grid-cols-3   ">
        {filteredproductpagethree.map((product, index) => (
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
              <h1 className="text-xl font-bold text-blue-500 drop-shadow-xl mb-2">
                {product.title}
              </h1>
              <p className=" text-xs sm:text-sm text-gray-400 mb-4 truncate">
                {product.description}
              </p>
              <div className="mx-auto w-[80%] sm:w-[80%] md:w-[50%] lg:w-[50%] xl:w-[50%] text-center rounded-full bg-white py-2 text-sm font-medium text-primary transition hover:bg-blue-100 focus:outline-none border border-primary shadow-md">
                <a href={'/product-details'}  >SAVOIR PLUS</a>
              </div>
            </div>
          </div>
        ))}
      </div>
             {/* productpagethree Blog */}
             <div className=" grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-0 lg:grid-cols-0 xl:grid-cols-3   ">
        {filteredproductpagethree.map((product, index) => (
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
              <h1 className="text-xl font-bold text-blue-500 drop-shadow-xl mb-2">
                {product.title}
              </h1>
              <p className=" text-xs sm:text-sm text-gray-400 mb-4 truncate">
                {product.description}
              </p>
              <div className="mx-auto w-[80%] sm:w-[80%] md:w-[50%] lg:w-[50%] xl:w-[50%] text-center rounded-full bg-white py-2 text-sm font-medium text-primary transition hover:bg-blue-100 focus:outline-none border border-primary shadow-md">
                <a href={'/product-details'}  >SAVOIR PLUS</a>
              </div>
            </div>
          </div>
        ))}
      </div>
             {/* productpagethree Blog */}
             <div className=" grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-0 lg:grid-cols-0 xl:grid-cols-3   ">
        {filteredproductpagethree.map((product, index) => (
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
              <h1 className="text-xl font-bold text-blue-500 drop-shadow-xl mb-2">
                {product.title}
              </h1>
              <p className=" text-xs sm:text-sm text-gray-400 mb-4 truncate">
                {product.description}
              </p>
              <div className="mx-auto w-[80%] sm:w-[80%] md:w-[50%] lg:w-[50%] xl:w-[50%] text-center rounded-full bg-white py-2 text-sm font-medium text-primary transition hover:bg-blue-100 focus:outline-none border border-primary shadow-md">
                <a href={'/product-details'}  >SAVOIR PLUS</a>
              </div>
            </div>
          </div>
        ))}
      </div>
            {/* Pagination */}
            <div className="flex justify-center mt-6">
                <ol className="flex items-center space-x-2">
                    <li>
                        <Link href="/product/productpage2" className="px-4 py-2 text-blue-700 border rounded-md hover:bg-green-200 font-extrabold">
                            &lt; {/* Left arrow */}
                        </Link>
                    </li>
                    <li>
                        <Link href="/product" className="px-4 py-2 text-blue-700 border rounded-md hover:bg-blue-200">1</Link>
                    </li>
                    <li>
                        <Link href="/product/productpage2" className="px-4 py-2 text-blue-700 border rounded-md hover:bg-blue-200">2</Link>
                    </li>
                    <li>
                        <Link href="/product/productpage2/productpage3" className="px-4 py-2 text-blue-700 border rounded-md hover:bg-blue-200">3</Link>
                    </li>
                    <li>
                        <Link href="#" className="px-4 py-2 text-blue-700 border rounded-md hover:bg-green-200 font-extrabold">
                            &gt; {/* Right arrow */}
                        </Link>
                    </li>
                </ol>
            </div>
        </section>
    );
}

export default Page;
