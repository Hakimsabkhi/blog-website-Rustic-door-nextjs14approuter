"use client";
import Link from 'next/link';
import { useState,useEffect } from 'react';
import { useSession, signIn, getProviders, ClientSafeProvider } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FcGoogle } from "react-icons/fc";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FaEye,FaEyeSlash } from 'react-icons/fa';


config.autoAddCss = false;
const SignIn: React.FC = () => {
 // State for managing providers, credentials, errors, and password visibility
 const [providers, setProviders] = useState<Record<string, ClientSafeProvider> | null>(null);
 const [credentials, setCredentials] = useState({ email: '', password: '' });
 const [error, setError] = useState<string | null>(null);
 const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
 const [loading, setLoading] = useState(false);
 const router = useRouter();
 const { data: session } = useSession();

 // Fetch providers on component mount
 useEffect(() => {
   const fetchProviders = async () => {
     try {
       const res = await getProviders();
       if (res) {
         setProviders(res);
       } else {
         setError('Failed to load authentication providers.');
       }
     } catch (error) {
       console.error('Error fetching providers:', error);
       setError('An unexpected error occurred while loading providers. Please try again.');
     }
   };
   fetchProviders();
 }, []);

 // Redirect based on user session
 useEffect(() => {
   if (session) {
     if (session.user?.role === 'Admin') {
       router.push('/admin');
     } else {
       router.push('/');
     }
   }
 }, [session, router]);

 // Handle input changes
 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setCredentials({ ...credentials, [e.target.name]: e.target.value });
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setError(null);
  try {
    const result = await signIn('credentials', {
      redirect: false,
      email: credentials.email,
      password: credentials.password,
    });

    if (result?.ok) {
      router.push('/');
    } else {
      setError('Failed to sign in. Please check your email and password and try again.');
    }
  } catch (error) {
    console.error('Sign in error:', error);
    setError('An unexpected error occurred. Please try again.');
  }
};

const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);
};
  
  return (
    
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-[#F1F4F9] p-4 sm:p-4 md:p-8 lg:p-8 xl:p-8 2xl:p-8 rounded-lg shadow-md  w-[90%] sm:w-[90%] md:w-[60%] lg:w-[60%] xl:w-[60%] 2xl:w-[60%] ">
        
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
          <div className="relative mb-4">
  <label className="block text-gray-900 text-sm mb-2" htmlFor="password">
    Password
  </label>
  <input
    type={showPassword ? "text" : "password"} // Change input type based on visibility
    name="password"
    value={credentials.password}
    onChange={handleChange}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm hover:border-orange-400 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white pr-10" // Added padding-right to make space for the icon
    placeholder="******"
    required
  />
  <button
    type="button"
    onClick={togglePasswordVisibility}
    className="absolute inset-y-0 right-0 flex items-center px-3 pt-6 text-gray-600"
  >
    {showPassword ? <FaEye className="w-5 h-5" /> : <FaEyeSlash className="w-5 h-5" />}
  </button>
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