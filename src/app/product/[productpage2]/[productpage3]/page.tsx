"use client"; // Add this directive at the top of the file

import React, { useState, useEffect } from 'react';
import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai';
import Image from 'next/image';
import { productpagethree } from 'public/data'; // Ensure this import path is correct
import Link from 'next/link';
import SearchBar from '../../SearchBar';
import PaginationBar from '../../PaginationBar';
import { useRouter, useSearchParams } from 'next/navigation';

function Page() {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('All Category');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Adjust as needed
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const page = searchParams?.get('page');
        if (page) {
            setCurrentPage(Number(page));
        }
    }, [searchParams]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(event.target.value);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        router.push(`?page=${page}`);
    };

    const filteredproductpagethree = productpagethree.filter(product => {
        const matchesCategory = category === 'All Category' || product.category === category;
        const matchesSearchTerm = product.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearchTerm;
    });

    const totalPages = Math.ceil(filteredproductpagethree.length / itemsPerPage);

    // Paginate products
    const paginatedProducts = filteredproductpagethree.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <section className='centred flex flex-col gap-8 py-8'>
            <SearchBar 
                searchTerm={searchTerm}
                category={category}
                onSearchChange={handleSearchChange}
                onCategoryChange={handleCategoryChange}
            />
            <div className="grid gap-4 sm:gap-4 md:gap-2 lg:gap-0 xl:gap-0 2xl:gap-0 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
                {paginatedProducts.map(product => (
                    <div
                        key={product.id} // Use unique id as key
                        className="sm:w-1/2 md:w-[85%] lg:w-[85%] xl:w-[85%] mb-8 overflow-hidden flex flex-col ml-0 sm:ml-0 md:ml-5 xl:ml-10 2xl:ml-10"
                    >
                        <div className="relative">
                            <Image
                                src={product.imgSrc}
                                alt={product.title} // Improved alt text
                                className="w-full h-52 sm:h-52 md:h-96 lg:h-96 xl:h-96 object-cover rounded-xl mb-4"
                            />
                        </div>
                        <div className="flex flex-col bg-white">
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
                            <p className="text-xs sm:text-sm text-gray-400 mb-4 truncate">
                                {product.description}
                            </p>
                            <div className="mx-auto w-[80%] sm:w-[80%] md:w-[50%] lg:w-[50%] xl:w-[50%] text-center rounded-full bg-white py-2 text-sm font-medium text-[#054C73] transition hover:bg-blue-100 focus:outline-none border border-[#054C73] shadow-md">
                                <Link href={`/product-details/${product.id}`}>SAVOIR PLUS</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <PaginationBar
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </section>
    );
}

export default Page;
