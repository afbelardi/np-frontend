import Navbar from "../components/Navbar";
import { useEffect, useState, useRef, useContext } from "react";
import axios from "axios";
import styles from "../styles/search.module.css";
import { AuthContext } from "../../authContext";
import { useRouter } from "next/router";
import Link from "next/link";
import Header from "../components/Header";
import { Card } from "../components/Card";
import { Skeleton } from "../components/Skeleton";




//   const [heartSelected, setHeartSelected] = useState(false);

//   const handleHeartClick = () => {
//     setHeartSelected(!heartSelected);
//   }
  
//   return (
//     <div className="max-w-lg mb-5 ml-3 mr-3 bg-gray-800 border-gray-700 rounded-lg shadow">
//         <img className={`${styles.parkImage} rounded-t-lg`} src={image} />
//       <div className="p-5">
//           <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
//             {fullName}
//           </h5>
//         <p className="mb-3 font-normal text-gray-400">{description}</p>
//         <div className="flex w-full">
//           <Link
//             href={`/parks/${id}`}
//             className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:outline-none hover:bg-blue-700 focus:ring-blue-800"
//           >
//             Read more
//             <svg
//               aria-hidden="true"
//               className="w-4 h-4 ml-2 -mr-1"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
//                 clipRule="evenodd"
//               ></path>
//             </svg>
//           </Link>
//           <section className="flex items-center justify-end w-4/6 pl-8 ml-8">
//             {/* <a href="/" className={styles.heartButton}> */}
//               <FaHeart onClick={handleHeartClick} className={`w-10 h-10 ${heartSelected ? "text-red-500" : "text-white"}` }/>
//             {/* </a> */}
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };


export default function Search() {
  const router = useRouter();
  const [parks, setParks] = useState([]);
  const [loading, setLoading] = useState(true);
  const inputRef = useRef(null);
 
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
    } catch (error) {
      console.error(error);
    }
  };

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
          Object.keys(parks).map((index) => (
            <Card
              key={index}
              fullName={parks[index].fullName}
              image={parks[index].images[0].url}
              description={parks[index].description}
              parkId={parks[index].parkCode}
            />
          ))
        )}
      </div>
    </>
  );
}



