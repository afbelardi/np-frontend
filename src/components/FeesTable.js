import { useState } from "react"

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
                    {park.entranceFees.slice(0, numResults).map(entranceFee => {
                        return (
                            <tr className="bg-gray-800 border-b border-gray-700">
                                <th scope="row" class="w-10 font-monserrat pl-6 font-semibold text-white">
                                    {entranceFee.title}
                                </th>
                                <td className="px-6 py-4 font-normal font-monserrat">
                                    {entranceFee.description}
                                </td>
                                <td className="px-6 py-4 font-monserrat">
                                    ${entranceFee.cost}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {Object.keys(park.entranceFees).length > numResults && (
          <button
            className="px-6 py-2 mt-4 mb-4 text-sm font-medium text-gray-400 bg-gray-800 border border-gray-600 rounded-lg hover:text-white hover:bg-gray-700"
            onClick={handleShowMore}
          >
            Show More
          </button>
        )}
        {Object.keys(park.entranceFees).length <= numResults  && (
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

