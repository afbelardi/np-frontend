import { TbMapSearch } from "react-icons/tb";
import styles from '../styles/activities.module.css';
import Link from 'next/link';

export default function Directions({ park }) {
  return (
    <div className="flex justify-center w-full mb-2">
    <div className={` ${styles.floatingDiv} flex flex-col items-center justify-center w-11/12 mb-4 rounded-md shadow-xl bg-slate-400/20 backdrop-blur-md`}>
        <section className="flex items-center justify-center w-full h-16 bg-slate-800 rounded-tr-md rounded-tl-md">
            <TbMapSearch className="w-8 h-8 mr-2 text-white"/>
            <h1 className="text-2xl font-bold text-white font-monserrat">Directions</h1>     
        </section>
        <main className=" bg-[url('/background.png')] flex flex-col items-center">
            <p className="p-3 mb-2 text-lg font-bold leading-7 text-center text-off-white font-aeonik-bold">{park.directionsInfo}</p>
            <Link href={park.directionsUrl} target="_blank">
              <button className="mb-4 btn glass">Full Directions</button>
            </Link>
        </main>
    </div>
    </div>
  )
}

