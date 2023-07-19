import Navbar from "../components/Navbar";
import { useEffect, useState, useRef, useContext } from "react";
import axios from "axios";
import styles from "../styles/search.module.css";
import { AuthContext } from "../../authContext";
import { useRouter } from "next/router";
import styles2 from "../styles/parkdetails.module.css";
import Header from "../components/Header";
import  Card  from "../components/Card";
import  Skeleton  from "../components/Skeleton";
import BASE_URL from "../../utils/baseUrl";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";



export default function Search() {
  const router = useRouter();
  const [parks, setParks] = useState([]);
  const [loading, setLoading] = useState(true);
  const inputRef = useRef(null);
  const [numResults, setNumResults] = useState(3);

 
  const { isLoggedIn } = useContext(AuthContext);

  
  useEffect(() => {
    const url = new URL(window.location.href);
    const toastValue = url.searchParams.get("toast")
    if (!isLoggedIn && !toastValue) {
      router.push("/login");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    (async () => {
      try {
        const response1 = await axios.get(
          `${BASE_URL}/api/nationalpark/park/mora`
        );
        const data1 = response1.data.data[0];
        

        const response2 = await axios.get(
          `${BASE_URL}/api/nationalpark/park/yose`
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

  const [selectedActivity, setSelectedActivity] = useState('');

  const handleActivity = (e) => {
    setSelectedActivity(e.target.value)
  }

  const handleActivitySubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log('Selected Option:', selectedActivity);
    // try {
      
    // } catch (error) {
      
    // }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(
        `${BASE_URL}/api/nationalpark/apikey/${inputRef.current.value}`
      );
      const data = response.data;
      

      //Fisher-Yates shuffle algorithm for randomizing results

      const shuffledParks = data.data.slice();
      for (let i = shuffledParks.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledParks[i], shuffledParks[j]] = [shuffledParks[j], shuffledParks[i]];
      }

      setParks(shuffledParks);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleShowMore = () => {
    setNumResults(numResults + 3);
  }

  const handleShowLess = () => {
    setNumResults(3);
  }

  return (
    <>
      <Header />
      <Navbar />
      <div className="flex flex-col items-center h-56 mt-10 text-center">
        <h1 className={`${styles2["text-shadow"]} pl-4 pr-4 tracking-[0.5px] mb-4 text-2xl font-semibold text-white font-monserrat`}>
          Search By State
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className={styles.inputContainer}>
            <input
              placeholder="Washington"
              ref={inputRef}
              className={`${styles.input} bg-white`}
            />
            <HiOutlineMagnifyingGlass className={styles.icon}/>
            <button
              type="submit"
              className="py-2.5 w-1/2 px-5 mt-4 text-sm font-medium  rounded-lg border bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700"
            >
              Submit
            </button>
          </div>
        </form>
        <label for="countries" class="block mb-2 text-sm font-medium text-white">Search by Activity</label>
          <select id="countries" class=" border   text-sm rounded-lg  block w-3/4 p-2.5 bg-navbar-blue border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
          <option selected>Choose a country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
      <div className="flex flex-col items-center lg:grid lg:grid-cols-3 lg:gap-4">
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
        {numResults > 3 && numResults >= Object.keys(parks).length && (
          <button
            className="px-6 py-2 mt-4 mb-4 text-sm font-medium text-gray-400 bg-gray-800 border border-gray-600 rounded-lg hover:text-white hover:bg-gray-700"
            onClick={handleShowLess}
          >
            Show Less
          </button>
        )}
      </div>
    </>
  );
}



