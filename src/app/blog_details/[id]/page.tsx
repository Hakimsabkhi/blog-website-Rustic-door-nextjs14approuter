'use client';
import React from 'react';
import { blogs } from 'public/data';
import { useParams } from 'next/navigation';
import Block1 from '../components/Block1';
import Block2 from '../components/Block2';
import Block3 from '../components/Block3';
import CommentsBlock from '../components/CommentsBlock';

const BlogDetail: React.FC = () => {
  const params = useParams();
  const id = params?.id as string;

  if (!id) {
    return <div>Invalid blog ID</div>;
  }

  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <Block1 blog={blog} />
      <Block2 blog={blog} />
      <Block3 blog={blog} />
      <CommentsBlock />
    </div>
  );
};

export default BlogDetail;
