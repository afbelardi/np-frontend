import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authContext";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import axios from "axios";
import Header from "../components/Header";
import Card from '../components/Card'; 
import Skeleton  from "../components/Skeleton";

export default function Favorites() {
  const router = useRouter();
  const { isLoggedIn, userId, token } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  

 useEffect(() => {
  (async () => {
    const response = await axios.get(`http://localhost:8000/api/users/favorites/${userId}`, {
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
    if (!isLoggedIn) {
      router.push("/login");
    }
  });

  return (
    <>
      <Header />
      <Navbar />
      <div className="flex justify-center w-full mt-4">
        <h1 className="text-4xl mb-8 tracking-[2px] font-aeonik-bold text-off-white">{`Favorites (${favorites.length})`}  </h1>
      </div>
      <div className="flex flex-col items-center">
        {loading ? (
          <>
            <Skeleton />
            <Skeleton />
          </>
        ) : (
          Object.keys(favorites).map((index) => (
            <Card
              key={index}
              fullName={favorites[index].fullName}
              image={favorites[index].images[0].url}
              description={favorites[index].description}
              parkId={favorites[index].parkCode}
            />
          ))
        )}
      </div>
    </>
  );
}

