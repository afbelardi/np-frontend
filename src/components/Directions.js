import { TbMapSearch } from "react-icons/tb";
import styles from '../styles/activities.module.css';
import Link from 'next/link';

export default function Directions({ park }) {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-4 mb-10">
        <section className="flex items-center justify-center">
            <img src="/map.png" className="w-20 h-20 mr-4" />
            <h1 className="text-4xl font-medium text-white font-monserrat">Directions</h1>     
        </section>
        <main className="flex flex-col items-center">
            <p className="p-5 mb-2 text-lg font-light leading-7 text-center text-off-white font-monserrat">{park.directionsInfo}</p>
            <Link href={park.directionsUrl} target="_blank">
              <button className="mb-6 btn glass">Full Directions</button>
            </Link>
        </main>
    </div>
  )
}

