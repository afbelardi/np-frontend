import { useState } from 'react';
import styles from '../styles/search.module.css';
import Link from 'next/link';
import { FaHeart } from "react-icons/fa";

export const Card = ({ fullName, image, description, id }) => {

    const [heartSelected, setHeartSelected] = useState(false);
  
    const handleHeartClick = () => {
      setHeartSelected(!heartSelected);
    }
    
    return (
      <div className="max-w-lg mb-5 ml-3 mr-3 bg-gray-800 border-gray-700 rounded-lg shadow">
          <img className={`${styles.parkImage} rounded-t-lg`} src={image} />
        <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              {fullName}
            </h5>
          <p className="mb-3 font-normal text-gray-400">{description}</p>
          <div className="flex w-full">
            <Link
              href={`/parks/${id}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:outline-none hover:bg-blue-700 focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
            <section className="flex items-center justify-end w-4/6 pl-8 ml-8">
              {/* <a href="/" className={styles.heartButton}> */}
                <FaHeart onClick={handleHeartClick} className={`w-10 h-10 ${heartSelected ? "text-red-500" : "text-white"}` }/>
              {/* </a> */}
            </section>
          </div>
        </div>
      </div>
    );
  };