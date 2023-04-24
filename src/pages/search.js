import Navbar from "../components/Navbar";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Head from "next/head";

export default function Search () {

    const [exampleParks, setExampleParks] = useState([]);
    const [loading, setLoading] = useState(true);

    const Skeleton = () => {
      return (
        <div
          role="status"
          className="max-w-sm p-4 mb-5 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
        >
          <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
            <svg
              className="w-12 h-12 text-gray-200 dark:text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <pNameath d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
            </svg>
          </div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          <div className="flex items-center mt-4 space-x-3">
            <svg
              className="text-gray-200 w-14 h-14 dark:text-gray-700"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
              <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      );
    };

    const Cards = () => {
      return (
        <div class="max-w-sm rounded-lg shadow bg-gray-800 border-gray-700">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      );
    };

    useEffect(() => {
    (async () => {
        try {
            const response1 = await axios.get('http://localhost:8000/api/nationalpark/apikey/WA');
            const data1 = response1.data.data[9];

            console.log(data1);
            setLoading(false);
        } catch(error) {
            console.error(error)
        }
    })();
    }, [])


    return (
        <>
        <Head>
            <title>NP Finder</title>
            <meta name="description" content="Discover National Park sites to visit" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/mountain.png" />
        </Head>
            <Navbar />
            <div className="flex flex-col items-center justify-center h-56 mt-16">
                <input className="w-1/2 input-md"></input>
            </div>
            <div className="flex flex-col items-center">
            {
                loading ? 
                <>
                    <Skeleton />
                    <Skeleton />
                </>
                :
                <Cards />
            }

            </div>
        </>
    )
}