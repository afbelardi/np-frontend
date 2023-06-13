import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import { AuthContext } from "../../../authContext";
import { useContext, useEffect, useState, useRef } from "react";
import axios from "axios";
import Header from "../../components/Header";
import { Carousel } from "flowbite-react";
import styles from "../../styles/parkdetails.module.css";
import newStyles from "../../styles/activities.module.css";
import MapLocator from "../../components/MapLocator";
import Directions from "../../components/Directions";
import Activities from "../../components/Activities";
import Skeleton from "../../components/Skeleton";

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
      {loading ? (
        <Skeleton />
      ) : (
        <div className="flex flex-col h-full">
          <h1 className="mt-10 mb-5 ml-6 text-2xl font-bold text-left text-white font-monserrat">
            {park.fullName}
          </h1>
          <div className="flex justify-center w-full mb-6">
            <section className={` ${newStyles.floatingDiv} w-11/12 rounded-md bg-slate-400/20 backdrop-blur-md`}>
              <h2 className="p-6 text-lg font-semibold leading-7 text-center text-off-white font-aeonik-bold-italic">
                {park.description}
              </h2>
            </section>
          </div>
          <div className="flex justify-center w-full">
            <section
              className={`${styles.carouselWrapper} h-500 mb-8 flex justify-center w-full`}
            >
              <Carousel className={newStyles.floatingDiv}>
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
          <Activities park={park} />
          <div className="flex justify-center">
            <MapLocator center={center} />
          </div>
        </div>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await axios.get(
    `http://localhost:8000/api/nationalpark/park/${id}`
  );
  const park = await res.data.data[0];
  return {
    props: {
      park,
    },
  };
}
