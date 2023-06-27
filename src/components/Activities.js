import { useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import styles from "../styles/parkdetails.module.css";


export default function Activities({ park }) {

    const [numResults, setNumResults] = useState(5);

    const handleShowMore = () => {
        setNumResults(numResults + 5);
    }

  return (
    <div className="flex justify-center w-full mb-8">
        <div className={`flex flex-col items-center justify-center w-full mb-4`}>
            <section className="flex items-center justify-center w-full mb-4">
                <img src="/hiking.png" className="w-16 h-20 mr-4"/>
                <h1 className={`${styles["text-shadow"]} text-3xl font-medium text-white font-monserrat`}>Activities</h1>     
            </section>
            <ul className="flex flex-col items-center p-4">
                {park.activities.slice(0, numResults)
                .map((activity) => {
                    return (
                        <>
                        <li className={`${styles["text-shadow"]} flex items-center text-lg font-light text-white font-monserrat`}>
                            <BsArrowReturnRight className="mr-2" />
                                {activity.name}
                            </li>
                            </>
                        )}
                   )}
            </ul>
            {Object.keys(park.activities).length > numResults && (
          <button
            className="px-6 py-2 mt-4 mb-4 text-sm font-medium text-gray-400 bg-gray-800 border border-gray-600 rounded-lg hover:text-white hover:bg-gray-700"
            onClick={handleShowMore}
          >
            Show More
          </button>
        )}
        </div>
    </div>
  )
}

