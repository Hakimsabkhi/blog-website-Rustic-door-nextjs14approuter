import React from 'react';
import { FaThumbsUp, FaComment } from 'react-icons/fa';
import Image from 'next/image';
import {Product1,Product2,Product3} from 'public/img/image'

const products = [
    {
        imgSrc: Product1,
        title: 'SIDI BOUSAID DOOR',
        description: 'Lorem ipsum dolor sit amet consectetur. Neque purus egestas in tincidunt ullamcorper ullamcorper sociis habitant',
        likes: 6,
        comments: 18,
        savoir: 'SAVOIR PLUS',
    },
    {
        imgSrc: Product2,
        title: 'RADIAS',
        description: 'Lorem ipsum dolor sit amet consectetur. Neque purus egestas in tincidunt ullamcorper ullamcorper sociis habitant',
        likes: 6,
        comments: 18,
        savoir: 'SAVOIR PLUS',
    },
    {
        imgSrc: Product3,
        title: 'TUNIS',
        description: 'Lorem ipsum dolor sit amet consectetur. Neque purus egestas in tincidunt ullamcorper ullamcorper sociis habitant',
        likes: 6,
        comments: 18,
        savoir: 'SAVOIR PLUS',
    },
];

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
                        <option value="">All Category</option>
                        <option value="JM">John Mayer</option>
                        <option value="SRV">Stevie Ray Vaughn</option>
                        <option value="JH">Jimi Hendrix</option>
                        <option value="BBK">B.B King</option>
                        <option value="AK">Albert King</option>
                        <option value="BG">Buddy Guy</option>
                        <option value="EC">Eric Clapton</option>
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

                        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
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
