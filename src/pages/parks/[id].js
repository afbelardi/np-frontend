import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import { AuthContext } from "../../../authContext";
import { useContext, useEffect, useState, useRef } from "react";
import axios from "axios";
import Header from "../../components/Header";
import { Carousel } from "flowbite-react";
import styles from "../../styles/parkdetails.module.css";
import MapLocator from "../../components/MapLocator";
import Directions from "../../components/Directions";
import Activities from "../../components/Activities";
import ParkSkeleton from "../../components/ParkSkeleton";
import BASE_URL from "../../../utils/baseUrl";
import FeesTable from "../../components/FeesTable";
import WeatherInfo from "../../components/WeatherInfo";


export default function ParkDetails({ park }) {
  const { isLoggedIn } = useContext(AuthContext);
  const router = useRouter();
  const [loading, setLoading] = useState(true);



  useEffect(() => {
      if (!isLoggedIn) {
          router.replace('/login')
      }
  }, []);

  useEffect(() => {
    if (park) {
      setLoading(false);
    }
  });



  const center = {
    lat: parseFloat(park.latitude),
    lng: parseFloat(park.longitude),
  };


  return (
    <>
      <Header />
      <Navbar />
        <div className="flex flex-col h-screen">
          {loading ? (
             <div className="flex flex-col items-center h-screen">
             <ParkSkeleton />
            </div>
          ) : (
            <>
             <h1 className={` ${styles["text-shadow"]} pl-4 pr-4 mt-10 text-3xl font-bold tracking-tighter text-center text-white font-monserrat`}>
            {park.fullName}
          </h1>
          <div className="flex justify-center w-full mb-6">
              <h2 className={` ${styles["text-shadow"]} p-6 font-light leading-7 text-center text-md text-off-white font-monserrat `}>
                {park.description}
              </h2>
          </div>
          <div className="flex justify-center w-full">
            <section
              className={`${styles.carouselWrapper} h-500 mb-8 flex justify-center w-full`}
            >
              <Carousel className={styles.floatingDiv}>
                {park.images.map((index) => (
                  <img
                    key={index}
                    className="object-cover w-full h-full"
                    src={index.url}
                    onError={(index) => index.target.src='/Arrowhead.png'}
                  />
                ))}
              </Carousel>
            </section>
          </div>
          <Directions park={park} />
          <WeatherInfo park={park} />
          <Activities park={park} />
          <FeesTable park={park} />
          <div className="flex justify-center">
            <MapLocator center={center} />
          </div>
            </>

      )};
</div>
</>
  )
                }
export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await axios.get(
    `${BASE_URL}/api/nationalpark/park/${id}`
  );
  const park = await res.data.data[0];
  return {
    props: {
      park,
    },
  };
}
