import { useContext, useEffect, useState } from 'react';
import styles from '../styles/search.module.css';
import Link from 'next/link';
import { FaHeart } from "react-icons/fa";
import { AuthContext } from "../../authContext";
import axios from 'axios';
import BASE_URL from '../../utils/baseUrl';

export default function Card ({ fullName, image, description, parkId }) {



    const [heartSelected, setHeartSelected] = useState(false);
    const { userId, token } = useContext(AuthContext);
    
    useEffect(() => {
        const checkFavoriteStatus = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/users/favorites/${userId}`, {
                    headers: {
                        'Authorization' : `Bearer ${token}`
                    }
                });
                const favorites = response.data
                const isFavorite = favorites.some(favorite => favorite.parkCode === parkId);
                setHeartSelected(isFavorite)
                
            } catch(error) {
                console.error(error)
            }
        };
        if (userId) {
            checkFavoriteStatus();
        }
    }, [userId, parkId]);

    
    const submitFavorite = async () => {
        try {  
            if (heartSelected === false) {
                const response = await axios.put(`${BASE_URL}/api/users/favorites/${userId}`,
                {
                    parkCode: parkId
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }   
                });
                const data = await response.data;
                setHeartSelected(true);
            } else {
                const response = await axios.delete(`${BASE_URL}/api/users/favorites/${userId}`, {
                    headers: {
                      Authorization: `Bearer ${token}`
                    },
                    data: {
                      parkCode: parkId
                    }
                  });
                const data = await response.data
                setHeartSelected(false)
            }
                 
        } catch(error) {
            console.error(error)
        }
}
    
    return (
      <div className="max-w-lg mb-5 ml-3 mr-3 bg-gray-800 border-gray-700 rounded-lg shadow lg:min-h-[600px]">
          <img className={`${styles.parkImage} rounded-t-lg`} src={image} />
        <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              {fullName}
            </h5>
          <p className="mb-3 font-normal text-gray-400">{description}</p>
          <div className="flex w-full">
            <Link
              href={`/parks/${parkId}`}
              className="flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:outline-none hover:bg-blue-700 focus:ring-blue-800"
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
                <FaHeart onClick={() => {submitFavorite()}} className={`w-10 h-10 ${heartSelected ? "text-red-500" : "text-white"}` }/>
              {/* </a> */}
            </section>
          </div>
        </div>
      </div>
    );
  };