import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authContext";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import axios from "axios";
import Header from "../components/Header";
import Card from '../components/Card'; 
import Skeleton  from "../components/Skeleton";
import BASE_URL from "../../utils/baseUrl";

export default function Favorites() {
  const router = useRouter();
  const { isLoggedIn, userId, token } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [numResults, setNumResults] = useState(5);

  

 useEffect(() => {
  (async () => {
    const response = await axios.get(`${BASE_URL}/api/users/favorites/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    const data = response.data
    setFavorites(data);
    setLoading(false);
  })()
 }, [userId, favorites])


 useEffect(() => {
  const url = new URL(window.location.href);
  const toastValue = url.searchParams.get("toast")
  if (!isLoggedIn && !toastValue) {
    router.push("/login");
  }
}, [isLoggedIn]);

const handleShowMore = () => {
  setNumResults(numResults + 5)
}

  return (
    <>
      <Header />
      <Navbar />
      <div className="flex justify-center w-full mt-8">
        <h1 className="text-4xl mb-8 tracking-[2px] font-aeonik-bold text-off-white">{`Favorites (${favorites.length})`}  </h1>
      </div>
      <div className="flex flex-col items-center">
        {loading ? (
          <>
            <Skeleton />
            <Skeleton />
          </>
        ) : (
          Object.keys(favorites).slice(0, numResults)
          .map((index) => (
            <Card
              key={index}
              fullName={favorites[index].fullName}
              image={favorites[index].images[0].url}
              description={favorites[index].description}
              parkId={favorites[index].parkCode}
            />
          ))
        )}
         {Object.keys(favorites).length > numResults && (
          <button
            className="px-4 py-2 mt-4 mb-4 text-sm font-medium text-gray-400 bg-gray-800 border border-gray-600 rounded-lg hover:text-white hover:bg-gray-700"
            onClick={handleShowMore}
          >
            Show More
          </button>
        )}
      </div>
    </>
  );
}

