"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CreatePost = () => {
  const [formData, setFormData] = useState({ title: '', content: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/blog');
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to create post');
      }
    } catch (error) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Content:
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" disabled={loading} className='bg-green-400 rounded-lg'>
          {loading ? 'Creating...' : 'Create Post'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default CreatePost;
