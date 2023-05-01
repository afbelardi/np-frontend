import Navbar from "../components/Navbar"
import { useRef, useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Link from "next/link";
import Head from "next/head";
import { AuthContext } from "../../authContext";
import { useRouter } from "next/router";



export default function Login () {

const router = useRouter();
const email = useRef(null);
const password = useRef(null);
const [errorMessage, setErrorMessage] = useState('');


const { setIsLoggedIn, isLoggedIn, setUser, user } = useContext(AuthContext)

useEffect(() => {
    if (isLoggedIn) {
        router.replace('/search')
    }
})




const handleLogin = async (e) => {
    try {
        const response = await axios.post('http://localhost:8000/api/users/login', {
            email: email.current.value,
            password: password.current.value
        })
        const data = await response.data;
        localStorage.setItem('token', data.token);
        setIsLoggedIn(true);
        setErrorMessage('')
        router.push('/search')
    } catch(error) {
        console.error(error);
        setErrorMessage(error)
    }
}
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
                  onClick={handleLogin}
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
        {
            errorMessage ? 
        <div className="flex justify-center w-full">
            <div id="toast-danger" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow" role="alert">
            <div class="ml-3 text-sm text-red-700 font-bold">Incorrect email and/or password</div>
            <button type="button" onClick={() => setErrorMessage('')} className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-danger" aria-label="Close">
                <span className="sr-only">Close</span>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
        </div>
        </div> : ''
          }
      </>
    );
}