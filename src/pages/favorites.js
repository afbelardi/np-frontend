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

  // useEffect(() => {
  //   const filteredParks = parks.filter((park) =>  {
  //     favorites.includes(park.parkCode)
  //   });
  //   setFavoriteParks(filteredParks);
  //   console.log(filteredParks);
  // }, [])

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


// export async function getServerSideProps(context) {
//   const res = await axios.get('http://localhost:8000/api/nationalpark/apikey');
//   const parks = await res.data.data;
  
//   console.log(parks)
//   return {
//     props: {
//       parks,
//     }
//   }
// }