import { FiActivity } from 'react-icons/fi';
import { BsArrowReturnRight } from 'react-icons/bs';

export default function Activities({ park }) {
  return (
    <div className="flex justify-center w-full">
    <div className='flex flex-col items-center justify-center w-11/12 mb-4 rounded-md bg-navbar-blue'>
        <section className="flex justify-center w-40 mt-2">
            <FiActivity className="w-6 h-6 mt-1 mr-2 text-white"/>
            <h1 className="text-2xl font-bold text-white font-monserrat">Activities</h1>     
        </section>
        <main className="flex justify-center w-full p-4">
            <ul className="grid grid-cols-2 gap-1">
                {park.activities.map((activity) => {
                    return (
                        <div className="flex items-center text-white">
                            <BsArrowReturnRight className="mr-2" />
                            <li className="flex items-center justify-center text-white font-monserrat">
                                {activity.name}
                            </li>
                        </div>
                    )
                   
                }
                   )}
            </ul>
        </main>
    </div>
    </div>
  )
}

