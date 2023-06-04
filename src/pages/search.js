import Navbar from "../components/Navbar";
import { useEffect, useState, useRef, useContext } from "react";
import axios from "axios";
import Head from "next/head";
import styles from "../styles/search.module.css";
import { useAuth, AuthContext } from "../../authContext";
import { useRouter } from "next/router";
import Link from "next/link";
// import { AiOutlineHeart } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import Header from "../components/Header";

export default function Search() {
  const router = useRouter();
  const [parks, setParks] = useState([]);
  const [loading, setLoading] = useState(true);
  const inputRef = useRef(null);
 
  const { isLoggedIn } = useContext(AuthContext);

  const Skeleton = () => {
    return (
      <div
        role="status"
        className="max-w-sm p-4 mb-5 border rounded shadow border-slate-500 animate-pulse md:p-6"
      >
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
        <div className="h-2 bg-gray-700 rounded-full"></div>
        <div className="flex items-center mt-4 space-x-3">
          <svg
            className="text-slate-500 w-14 h-14"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            ></path>
          </svg>
          <div>
            <div className="h-2.5 rounded-full bg-slate-500 w-32 mb-2"></div>
            <div className="w-48 h-2 rounded-full bg-slate-500"></div>
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  };

  const Card = ({ fullName, image, description, id }) => {

    const [heartSelected, setHeartSelected] = useState(false);

    const handleHeartClick = () => {
      setHeartSelected(!heartSelected);
    }
    
    return (
      <div className="max-w-lg mb-5 ml-3 mr-3 bg-gray-800 border-gray-700 rounded-lg shadow">
          <img className={`${styles.parkImage} rounded-t-lg`} src={image} />
        <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              {fullName}
            </h5>
          <p className="mb-3 font-normal text-gray-400">{description}</p>
          <div className="flex w-full">
            <Link
              href={`/parks/${id}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:outline-none hover:bg-blue-700 focus:ring-blue-800"
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
                <FaHeart onClick={handleHeartClick} className={`w-10 h-10 ${heartSelected ? "text-red-500" : "text-white"}` }/>
              {/* </a> */}
            </section>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    (async () => {
      try {
        const response1 = await axios.get(
          "http://localhost:8000/api/nationalpark/park/mora"
        );
        const data1 = response1.data.data[0];
        console.log(response1)

        const response2 = await axios.get(
          "http://localhost:8000/api/nationalpark/park/yose"
        );
        const data2 = response2.data.data[0];

        const results = {
          data1: data1,
          data2: data2,
        };
        setParks(results);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8000/api/nationalpark/apikey/${inputRef.current.value}`
      );
      const data = response.data;
      setParks(data.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="flex flex-col items-center h-56 mt-16 text-center">
        <h1 className="pl-4 pr-4 mb-4 text-2xl font-bold text-white font-monserrat">
          Search by state
        </h1>
        <input
          placeholder="FL, California, NY"
          ref={inputRef}
          className={`${styles.input} bg-white`}
        ></input>
        <button
          type="button"
          onClick={handleSubmit}
          className="py-2.5 px-5 mt-4 text-sm font-medium  rounded-lg border bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700"
        >
          Submit
        </button>
      </div>
      <div className="flex flex-col items-center">
        {loading ? (
          <>
            <Skeleton />
            <Skeleton />
          </>
        ) : (
          Object.keys(parks).map((index) => (
            <Card
              key={index}
              fullName={parks[index].fullName}
              image={parks[index].images[0].url}
              description={parks[index].description}
              id={parks[index].parkCode}
            />
          ))
        )}
      </div>
    </>
  );
}


// export async function getServerSideProps() {
//   const res1 = await axios.get(
//     `http://localhost:8000/api/nationalpark/park/mora`
//   );
//   const res2 = await axios.get(`http://localhost:8000/api/nationalpark/park/yose`);
//   const park = await res.data.data[0];
//   return {
//     props: {
//       park,
//     },
//   };
// }
