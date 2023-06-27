import { FiActivity } from 'react-icons/fi';
import { BsArrowReturnRight } from 'react-icons/bs';
import styles from '../styles/activities.module.css';

export default function Activities({ park }) {
  return (
    <div className="flex justify-center w-full">
        <div className={`flex flex-col items-center justify-center w-11/12 mb-4 rounded-md `}>
            <section className="flex items-center justify-center w-full h-16 bg-slate-800 rounded-tr-md rounded-tl-md">
                <FiActivity className="w-6 h-6 mt-1 mr-2 text-white"/>
                <h1 className="text-2xl font-bold text-white font-monserrat">Activities</h1>     
            </section>
            <ul className="flex flex-col items-center p-4">
                {park.activities.map((activity) => {
                    return (
                        <>
                        <li className="flex items-center text-xl font-semibold text-white whitespace-nowrap font-aeonik-bold">
                            <BsArrowReturnRight className="mr-2" />
                                {activity.name}
                            </li>
                            </>
                        )}
                   )}
            </ul>
       
    </div>
    </div>
  )
}

