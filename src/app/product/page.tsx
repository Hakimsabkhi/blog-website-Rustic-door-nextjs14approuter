import React from 'react';
import { FaThumbsUp, FaComment } from 'react-icons/fa';
import Image from 'next/image';
import { products } from 'public/data'


function Page() { 
    return (
        <section className='centred flex flex-col gap-8'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-center text-4xl text-blue-400 font-bold mb-4'>Our Collection Of Products</h1>

                <div className='flex items-center rounded-md gap-1 shadow-xl'>
                    {/* Select Category */}
                    <select
                        name="Category"
                        id="Category"
                        className="text-blue-600 sm:text-sm px-4 py-2 border-r-2"
                    >
                        <option value="All Category">All Category</option>
                        <option value="p2">p2</option>
                        <option value="p3">p3</option>
                        <option value="p4">p4</option>
                       
                    </select>

                    <div className="relative w-full max-w-xs">
                        <label htmlFor="Search" className="sr-only">Search</label>
                        
                        {/* Search Bar */}
                        <input
                            type="text"
                            id="Search"
                            placeholder="Search for..."
                            className="w-full py-2.5 pe-10 sm:text-sm"
                        />

                        <span className="absolute inset-y-0 end-0 grid w-15 place-content-center">
                            <button type="button" className="bg-sky-500 rounded-md text-white px-2 py-3">
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
            </div>

            {/* Products Blog */}
            <div className="flex flex-wrap gap-10 justify-center">
                {products.map((product, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 mb-8 overflow-hidden">
                        <div className="relative">
                            <Image src={product.imgSrc} alt="Product" className="w-full h-64 object-cover rounded-xl mb-4" />
                        </div>
                        <div className="flex flex-col gap-2 bg-white p-4 rounded-xl">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <FaThumbsUp className="text-blue-500" />
                                    <h3 className="text-gray-400">{product.likes} likes</h3>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaComment className="text-blue-500" />
                                    <h3 className="text-gray-400">{product.comments} comments</h3>
                                </div>
                            </div>
                            <h1 className="text-xl font-bold text-blue-500 drop-shadow-xl mb-2">{product.title}</h1>
                            <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                            <button className='text-center rounded-full bg-white px-6 py-3 text-sm font-medium text-sky-700 transition hover:bg-blue-100 focus:outline-none border border-sky-700'>
                                {product.savoir}
                            </button>
                        </div>
                    </div>
                ))}

                {products.map((product, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 mb-8 overflow-hidden">
                        <div className="relative">
                            <Image src={product.imgSrc} alt="Product" className="w-full h-64 object-cover rounded-xl mb-4" />
                        </div>
                        <div className="flex flex-col gap-2 bg-white p-4 rounded-xl">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <FaThumbsUp className="text-blue-500" />
                                    <h3 className="text-gray-400">{product.likes} likes</h3>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaComment className="text-blue-500" />
                                    <h3 className="text-gray-400">{product.comments} comments</h3>
                                </div>
                            </div>
                            <h1 className="text-xl font-bold text-blue-500 drop-shadow-xl mb-2">{product.title}</h1>
                            <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                            <button className='text-center rounded-full bg-white px-6 py-3 text-sm font-medium text-sky-700 transition hover:bg-blue-100 focus:outline-none border border-sky-700'>
                                {product.savoir}
                            </button>
                        </div>
                    </div>
                ))}

                {products.map((product, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 mb-8 overflow-hidden">
                        <div className="relative">
                            <Image src={product.imgSrc} alt="Product" className="w-full h-64 object-cover rounded-xl mb-4" />
                        </div>
                        <div className="flex flex-col gap-2 bg-white p-4 rounded-xl">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <FaThumbsUp className="text-blue-500" />
                                    <h3 className="text-gray-400">{product.likes} likes</h3>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaComment className="text-blue-500" />
                                    <h3 className="text-gray-400">{product.comments} comments</h3>
                                </div>
                            </div>
                            <h1 className="text-xl font-bold text-blue-500 drop-shadow-xl mb-2">{product.title}</h1>
                            <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                            <button className='text-center rounded-full bg-white px-6 py-3 text-sm font-medium text-sky-700 transition hover:bg-blue-100 focus:outline-none border border-sky-700'>
                                {product.savoir}
                            </button>
                        </div>
                    </div>
                ))}

                {products.map((product, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 mb-8 overflow-hidden">
                        <div className="relative">
                            <Image src={product.imgSrc} alt="Product" className="w-full h-64 object-cover rounded-xl mb-4" />
                        </div>
                        <div className="flex flex-col gap-2 bg-white p-4 rounded-xl">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <FaThumbsUp className="text-blue-500" />
                                    <h3 className="text-blue-700">{product.likes} likes</h3>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaComment className="text-blue-500" />
                                    <h3 className="text-blue-700">{product.comments} comments</h3>
                                </div>
                            </div>
                            <h1 className="text-xl font-bold text-blue-500 drop-shadow-xl mb-2">{product.title}</h1>
                            <p className="text-blue-600 text-sm mb-4">{product.description}</p>
                            <button className='text-center rounded-full bg-white px-6 py-3 text-sm font-medium text-sky-700 transition hover:bg-blue-100 focus:outline-none border border-sky-700'>
                                {product.savoir}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/*.Pagination*/}
            <div className="flex justify-center mt-6">
                <ol className="flex items-center space-x-2">
                    <li>
                        <a href="#" className="px-4 py-2 text-blue-700 border rounded-md hover:bg-green-200 font-extrabold">
                            &lt; {/* Left arrow */}
                        </a>
                    </li>
                    <li>
                        <a href="#" className="px-4 py-2 text-blue-700 border rounded-md hover:bg-blue-200">1</a>
                    </li>
                    <li>
                        <a href="#" className="px-4 py-2 text-blue-700 border rounded-md hover:bg-blue-200">2</a>
                    </li>
                    <li>
                        <a href="#" className="px-4 py-2 text-blue-700 border rounded-md hover:bg-blue-200">3</a>
                    </li>
                    <li>
                        <a href="#" className="px-4 py-2 text-blue-700 border rounded-md hover:bg-green-200 font-extrabold">
                            &gt; {/* Right arrow */}
                        </a>
                    </li>
                </ol>
            </div>
        </section>
    );
}

export default Page;
