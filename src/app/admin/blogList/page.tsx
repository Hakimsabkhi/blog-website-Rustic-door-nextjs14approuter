import mongoose from 'mongoose';
import Blog from '@/models/Blog';
import React from 'react';


// BlogList component
const BlogList = async () => {
    // Ensure Mongoose connection
    if (!mongoose.connection.readyState) {
        await mongoose.connect(process.env.MONGODB_URI || '');
    }

    // Fetch blogs from MongoDB
    const blogs = await Blog.find().lean();

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg"> 
        <div></div>
        <div></div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-lg">User</th>
                        <th scope="col" className="px-6 py-3 text-lg">Title</th>
                        <th scope="col" className="px-6 py-3 text-lg">Category</th>
                        <th scope="col" className="px-6 py-3 text-lg">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog: any) => (
                        <tr key={blog._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="px-6 py-4 flex items-center">
                                <input type="checkbox" className='mr-4' /><img src={blog.userImg} alt={blog.userName} className="w-8 h-8 rounded-full mr-2" />
                                {blog.userName}
                            </td>
                            <td className="px-6 py-4">{blog.title}</td>
                            <td className="px-6 py-4">{blog.category}</td>
                            <td className="px-6 py-4">{new Date(blog.date).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BlogList;
