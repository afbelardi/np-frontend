import { FiActivity } from 'react-icons/fi';
import { BsArrowReturnRight } from 'react-icons/bs';
import styles from '../styles/parkdetails.module.css';

export default function Activities({ park }) {
  return (
    <div className="flex justify-center w-full">
        <div className={`flex flex-col items-center justify-center w-11/12 mb-4`}>
            <section className="flex items-center justify-center w-full mb-4">
                <img src="/hiking.png" className="w-20 h-20 mr-4"/>
                <h1 className={`${styles["text-shadow"]} text-3xl font-medium text-white font-monserrat`}>Activities</h1>     
            </section>
            <ul className="flex flex-col items-center p-4">
                {park.activities.map((activity) => {
                    return (
                        <>
                        <li className="flex items-center text-xl font-semibold text-white font-aeonik-bold">
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

