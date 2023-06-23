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
import BASE_URL from "../../../utils/baseUrl";

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
          <h1 className="pl-2 pr-2 mt-10 mb-5 text-3xl font-extrabold text-center text-white font-inter">
            {park.fullName}
          </h1>
          <div className="flex justify-center w-full mb-6">
            <div className={` ${newStyles.floatingDiv} bg-[url('/background.png')] flex justify-center rounded-lg w-11/12  h-auto overflow-hidden `}>
              <h2 className="p-6 font-normal leading-7 text-center text-md text-off-white font-aeonik">
                {park.description}
              </h2>
            </div>
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
    `${BASE_URL}/api/nationalpark/park/${id}`
  );
  const park = await res.data.data[0];
  return {
    props: {
      park,
    },
  };
}
