'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Block1 from '../components/Block1';
import CommentsBlock from '../components/CommentsBlock';
import { IBlog } from '@/models/Blog'; // Import the IBlog interface
import Block2 from '../components/Block2';
import Block3 from '../components/Block3';

const BlogDetail: React.FC = () => {
  const params = useParams();

  const id = params?.id as string | undefined; // Ensure id is typed correctly
  const [blog, setBlog] = useState<IBlog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) {
        setError('Invalid blog ID');
        setLoading(false);
        return;
      }

      try {
        // Replace this URL with your API endpoint or data fetching logic
        const response = await fetch(`/api/blog/${id}`);
        console.log(response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: IBlog = await response.json();
        setBlog(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }
console.log(blog)
  return (
    <div>
      <Block1 blog={blog} />
      <Block2 blog={blog}/>
      <Block3 blog={blog}/>
      <CommentsBlock />
    </div>
  );
};

export default BlogDetail;
