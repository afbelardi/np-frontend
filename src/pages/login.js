import Navbar from "../components/Navbar"
import { useRef } from 'react';
import axios from 'axios';


export default function Login () {


const email = useRef(null);
const password = useRef(null);

const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:8000/api/users/login', {
            email: email.current.value,
            password: password.current.value
        })
        const data = await response.data;
        console.log(data)
    } catch(error) {
        console.error(error)
    }
}
    return (
      <>
        <Navbar />
        <div className="flex justify-center mt-40">
          <div className="w-full max-w-xs">
            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
              <div className="mb-4">
                <label className="mb-2 text-sm font-bold text-gray-700">
                  Username
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
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
                  className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  onClick={handleLogin}
                  type="button"
                >
                  Sign In
                </button>
                <a
                  className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800"
                  href="#"
                >
                  Need to Sign Up?
                </a>
              </div>
            </form>
          </div>
        </div>
      </>
    );
}