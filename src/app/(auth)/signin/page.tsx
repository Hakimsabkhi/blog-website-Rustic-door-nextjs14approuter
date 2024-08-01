"use client";
import Link from 'next/link';
import { useState,useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FcGoogle } from "react-icons/fc";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';


config.autoAddCss = false;

const SignIn = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {data:session,status}=useSession();
  console.log(session?.user?.role)

  useEffect(() => {
    if (session) {
      if (session?.user?.role === 'Admin') {
          router.push('/admin/dashboard');
        } else {
          router.push('/');
        }
    }
  }, [session]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true); // Start loading
  
    const result = await signIn('credentials', {
      redirect: false,
      email: credentials.email,
      password: credentials.password,
    });
  
    setLoading(false); // Stop loading

    if (result?.ok && result?.status === 200) {
      // Fetch user details from the server
     
      // Redirect based on user role
      switch (session?.user?.role) {
        case 'Admin':
          router.push('/admin/dashboard'); // Redirect to admin dashboard
          break;
        case 'Visitor':
          router.push('/'); // Redirect to profile page or another page for writers
          break;
        default:
          router.push('/'); // Redirect to home or a default page
          break;
      }
    } else {
      setError('Failed to sign in. Please check your credentials and try again.');
    }
  };
  
  return (
    
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-[#F1F4F9] p-4 sm:p-4 md:p-8 lg:p-8 xl:p-8 2xl:p-8 rounded-lg shadow-md  w-[90%] sm:w-[90%] md:w-[60%] lg:w-[60%] xl:w-[60%] 2xl:w-[60%] ">
        <h1 className="text-2xl font-bold mb-6"></h1>
        {error && (
          <div className="bg-red-500 text-white p-3 rounded mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          {/*Email Bloc */}
          <div className="mb-4">
            <label className="block text-gray-900 text-sm mb-2" htmlFor="email">
            Email Adress 
            </label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm hover:border-orange-400  block w-full p-2.5  dark:placeholder-gray-400 dark:text-white" placeholder="Enter Email Adress"
              required
            />
          </div>
          {/*Password Bloc */}
          <div className="mb-4">
            <label className="block text-gray-900 text-sm mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm hover:border-orange-400  block w-full p-2.5  dark:placeholder-gray-400 dark:text-white" placeholder="******"
              required
            />
          </div>
          {/*Rmember Me */}
          <div className="flex items-start mb-5 flex-col gap-3 sm:gap-3 lg:justify-between lg:flex-row md:flex-row xl:flex-row ">
           <div className="flex items-center h-5">
           <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-300 dark:border-gray-300 dark:focus:ring-blue-600 dark:ring-offset-gray-300 dark:focus:ring-offset-gray-300" required />
           <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
           <Link href="#" className=' text-primary line border-b-2 hover:border-primary border-[#F1F4F9]'>Forgot Password ? </Link>
           </div>
           {/*Sigin Bloc */}
           <div className='flex flex-col items-center justify-center gap-4'>
           <button
              type="submit"
              className={`bg-primary hover:bg-gray-300 hover:text-primary text-white py-2 w-full rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
            <p className='text-gray-300'> Or continue with</p>
           </div>
          {/*Media Connect Bloc */}
          <div className="flex items-center gap-4 py-4 flex-col sm:gap-3 lg:justify-between lg:flex-row md:flex-row xl:flex-row">
      <button
        type="button"
        onClick={() => signIn('facebook', { callbackUrl: '/' })}
        className="bg-white text-gray-900 text-sm border border-gray-300 py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-full md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-w-[50%] flex items-center justify-center"
      >
        <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-lg mr-2" />
        Sign In with Facebook
      </button>
      <button
        type="button"
        onClick={() => signIn('google', { callbackUrl: '/' })}
        className="bg-white text-gray-900 text-sm border border-gray-300 py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-full md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-w-[50%] flex items-center justify-center"
      >
        <FcGoogle className="text-lg mr-2" />
        Sign In with Google
      </button>
    </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
{/*
  
<form class="max-w-sm mx-auto">
  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div class="flex items-start mb-5">
    <div class="flex items-center h-5">
      <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

  */}