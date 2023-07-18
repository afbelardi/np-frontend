import { useState } from "react";
import styles from "../styles/parkdetails.module.css";

export default function FeesTable({ park }) {


    const [numResults, setNumResults] = useState(2);

    const handleShowMore = () => {
        setNumResults(numResults + 2);
    }

    const handleShowLess = () => {
        setNumResults(2);
    }

  return (
      <>
        <div className="flex flex-col items-center justify-center w-full mb-16" >
        <section className="flex items-center justify-center w-full mr-4">
                <img src="/money.png" className="w-24 h-28 "/>
                <h1 className={`${styles["text-shadow"]} text-3xl font-medium text-white font-monserrat`}>Entrance Fees</h1>     
            </section>
            {Object.keys(park.entranceFees) != 0 ? (
                <table className="w-3/4 text-sm text-gray-400">
                <thead className="text-xs text-gray-400 uppercase border-separate rounded-lg bg-navbar-blue">
                    <tr>
                        <th scope="col" class=" px-6 py-3">
                            Title
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Cost
                        </th>
                    </tr>
                </thead>
                <tbody className="">
                    {park.entranceFees.concat(park.entrancePasses).slice(0, numResults).map(entranceFee => {
                        return (
                            <tr className="bg-gray-800 border-b border-gray-700">
                                <th scope="row" class="w-10 font-monserrat pl-6 font-semibold text-white">
                                    {entranceFee.title}
                                </th>
                                <td className="py-4 pl-4 font-normal font-monserrat">
                                    {entranceFee.description}
                                </td>
                                <td className="px-4 py-4 font-monserrat">
                                    ${entranceFee.cost}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            ) : (
                <h1 className={` ${styles["text-shadow"]} mb-2 ml-4 text-xl font-light leading-7 text-center text-off-white font-monserrat`}>No fee for entrance</h1>
            )}
             {Object.keys(park.entranceFees).length > numResults && (
          <button
            className="px-6 py-2 mt-4 mb-4 text-sm font-medium text-gray-400 bg-gray-800 border border-gray-600 rounded-lg hover:text-white hover:bg-gray-700"
            onClick={handleShowMore}
          >
            Show More
          </button>
        )}
        {Object.keys(park.entranceFees).length <= numResults  &&  park.entranceFees != 0 && (
          <button
            className="px-6 py-2 mt-4 mb-4 text-sm font-medium text-gray-400 bg-gray-800 border border-gray-600 rounded-lg hover:text-white hover:bg-gray-700"
            onClick={handleShowLess}
          >
            Show Less
          </button>
        )}
            
           
        </div>
        
    </>
  )
}

