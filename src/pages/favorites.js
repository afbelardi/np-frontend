import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authContext";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import axios from "axios";
import Header from "../components/Header";
import Card from '../pages/search'; 

export default function Favorites({ parks }) {
  const router = useRouter();
  const { isLoggedIn, userId, token } = useContext(AuthContext);
  const [favoriteParks, setFavoriteParks] = useState([]);


 useEffect(() => {
  (async () => {
    const response = await axios.get(`http://localhost:8000/api/users/favorites/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    const data = response.data
    setFavoriteParks(data);
  })()
 }, [])


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
        <h1 className="text-4xl tracking-[2px] font-aeonik-bold text-off-white">Favorites</h1>
      </div>
    </>
  );
}

