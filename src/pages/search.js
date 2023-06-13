import Navbar from "../components/Navbar";
import { useEffect, useState, useRef, useContext } from "react";
import axios from "axios";
import styles from "../styles/search.module.css";
import { AuthContext } from "../../authContext";
import { useRouter } from "next/router";
import Link from "next/link";
import Header from "../components/Header";
import  Card  from "../components/Card";
import  Skeleton  from "../components/Skeleton";




export default function Search() {
  const router = useRouter();
  const [parks, setParks] = useState([]);
  const [loading, setLoading] = useState(true);
  const inputRef = useRef(null);
  const [numResults, setNumResults] = useState(5);

 
  const { isLoggedIn } = useContext(AuthContext);


  
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8000/api/nationalpark/apikey/${inputRef.current.value}`
      );
      const data = response.data;
      setParks(data.data);
      setLoading(false);
      setNumResults(5);
    } catch (error) {
      console.error(error);
    }
  };

  const handleShowMore = () => {
    setNumResults(numResults + 5)
  }

  return (
    <>
      <Header />
      <Navbar />
      <div className="flex flex-col items-center h-56 mt-16 text-center">
        <h1 className="pl-4 pr-4 tracking-[2px] mb-4 text-2xl font-bold text-white font-aeonik-bold">
          Search By State
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          placeholder="FL, California, NY"
          ref={inputRef}
          className={`${styles.input} bg-white`}
        />
        <button
          type="submit"
          className="py-2.5 w-1/2 px-5 mt-4 text-sm font-medium  rounded-lg border bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700"
        >
          Submit
        </button>
        </form>
      </div>
      <div className="flex flex-col items-center">
        {loading ? (
          <>
            <Skeleton />
            <Skeleton />
          </>
        ) : (
          Object.keys(parks).slice(0, numResults)
          .map((index) => (
            <Card
              key={index}
              fullName={parks[index].fullName}
              image={parks[index].images[0].url}
              description={parks[index].description}
              parkId={parks[index].parkCode}
            />
          ))
        )}
        {Object.keys(parks).length > numResults && (
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



