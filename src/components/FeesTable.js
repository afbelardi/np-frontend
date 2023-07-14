

export default function FeesTable({ park }) {
  return (
      <>
        <div className="flex justify-center w-full mb-16">
            <table className="w-3/4 text-sm text-left text-gray-400">
                <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                    <tr>
                        <th scope="col" class="px-6 py-3">
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
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-4">
                            Silver
                        </td>
                        <td className="px-6 py-4">
                            Laptop
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
  )
}

