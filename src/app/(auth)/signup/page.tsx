"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FcGoogle } from "react-icons/fc";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

const SignUp = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const signInResult = await signIn('credentials', {
          redirect: false,
          email: formData.email,
          password: formData.password,
        });

        if (signInResult?.ok) {
          router.push('/');
        } else {
          setError('Failed to sign in after sign-up. Please try logging in.');
        }
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to sign up. Please try again.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-[#F1F4F9] p-4 sm:p-4 md:p-8 lg:p-8 xl:p-8 2xl:p-8 rounded-lg shadow-md w-[90%] sm:w-[90%] md:w-[60%] lg:w-[60%] xl:w-[60%] 2xl:w-[60%]">
        {error && (
          <div className="bg-red-500 text-white p-3 rounded mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-900 text-sm mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm hover:border-orange-400 block w-full p-2.5"
              placeholder="Enter Username"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-900 text-sm mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm hover:border-orange-400 block w-full p-2.5"
              placeholder="Enter Email Address"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-900 text-sm mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm hover:border-orange-400 block w-full p-2.5"
              placeholder="******"
              required
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <button
              type="submit"
              className={`bg-primary hover:bg-gray-300 hover:text-primary text-white py-2 w-full rounded focus:outline-none ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
            <p className='text-gray-300'>Or continue with</p>
          </div>
          <div className="flex items-center gap-4 py-4 flex-col sm:gap-3 lg:justify-between lg:flex-row md:flex-row xl:flex-row">
            <button
              type="button"
              onClick={() => signIn('facebook', { callbackUrl: '/' })}
              className="bg-white text-gray-900 text-sm border border-gray-300 py-2 px-4 rounded flex items-center justify-center w-full sm:w-full md:w-[50%] lg:w-[50%] xl:w-[50%]"
            >
              <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-lg mr-2" />
              Sign Up with Facebook
            </button>
            <button
              type="button"
              onClick={() => signIn('google', { callbackUrl: '/' })}
              className="bg-white text-gray-900 text-sm border border-gray-300 py-2 px-4 rounded flex items-center justify-center w-full sm:w-full md:w-[50%] lg:w-[50%] xl:w-[50%]"
            >
              <FcGoogle className="text-lg mr-2" />
              Sign Up with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
