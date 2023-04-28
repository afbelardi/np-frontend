import Navbar from '../components/Navbar';
import Head from 'next/head';
import { useRef } from 'react';
import Link from 'next/link';


export default function SignUp () {


    const email = useRef(null);
    const password = useRef(null);
    
    return (
        <>
        <Head>
            <title>NP Finder</title>
            <meta name="description" content="Discover National Park sites to visit" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/mountain.png" />
        </Head>
            <Navbar />
            <div className="flex justify-center mt-40">
          <div className="w-full max-w-xs">
            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
              <div className="mb-4">
                <label className="mb-2 text-sm font-bold text-gray-700">
                  Email Address
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  ref={email}
                  placeholder="Email Address"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-700">
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  ref={password}
                  type="password"
                  placeholder="******************"
                />
                {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="px-4 py-2 font-bold text-white rounded bg-light-purple hover:bg-dark-purple focus:outline-none focus:shadow-outline"
                //   onClick={handleLogin}
                  type="button"
                >
                  Sign In
                </button>
                <Link
                  className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800"
                  href="/signup"
                >
                  Need to Sign Up?
                </Link>
              </div>
            </form>
          </div>
        </div>
        </>
    )
}