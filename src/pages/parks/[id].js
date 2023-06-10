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

  const Skeleton = () => {
    return (
      <div className="flex flex-col items-center w-full max-w-xl mt-16">
        <div role="status" className="w-4/5 p-4 rounded animate-pulse md:p-6">
          <div className="h-2.5  rounded-full bg-slate-500 w-48 mb-4"></div>
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-slate-500">
            <svg
              className="w-12 h-12 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
            </svg>
          </div>
          <div className="h-2.5  rounded-full bg-slate-500 w-48 mb-4"></div>
          <div className="h-2  rounded-full bg-slate-500 mb-2.5"></div>
          <div className="h-2  rounded-full bg-slate-500 mb-2.5"></div>
          <div className="h-2 rounded-full bg-slate-500"></div>
          <div className="flex items-center mt-4 space-x-3">
            <div>
              <div className="h-2.5 rounded-full bg-slate-500 w-32 mb-2"></div>
              <div className="w-48 h-2 rounded-full bg-slate-500"></div>
            </div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>

        <div className="flex justify-between w-3/4 mt-4 rounded-md animate-pulse">
          <section className="w-1/4 h-48 mr-2 rounded-md bg-slate-500"></section>
          <section className="w-3/4 h-48 rounded-md bg-slate-500"></section>
        </div>
      </div>
    );
  };

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
