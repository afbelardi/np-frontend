import Navbar from "../components/Navbar";
import { useEffect, useRef, useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../../authContext";
import axios from "axios";
import Header from "../components/Header";
import BASE_URL from "../../utils/baseUrl";

export default function SignUp() {
  const router = useRouter();
  const email = useRef(null);
  const password = useRef(null);
  const password2 = useRef(null);
  const username = useRef(null);

  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (isLoggedIn) {
      router.replace("/search");
    }
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BASE_URL}/api/users/signup`,
        {
          username: username.current.value,
          password: password.current.value,
          email: email.current.value,
        }
      );
      const data = await response.data;
      if (data.message === "User created successfully") {
        router.replace("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="flex justify-center mt-40">
        <div className="w-full max-w-xs">
          <form 
          className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
          onSubmit={handleSignup}
          >
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
            <div className="mb-4">
              <label className="mb-2 text-sm font-bold text-gray-700">
                Username
              </label>
              <input
                className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                ref={username}
                placeholder="Username"
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
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
