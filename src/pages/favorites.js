import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authContext";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import axios from "axios";
import Header from "../components/Header";
import Card from '../pages/search'; 

export default function Favorites({ parks }) {
  const router = useRouter();
  const { isLoggedIn, favorites } = useContext(AuthContext);
  // const [favoriteParks, setFavoriteParks] = useState([]);



  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  });

  return (
    <>
      <Header />
      <Navbar />
    </>
  );
}

