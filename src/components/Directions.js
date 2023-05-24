import { TbMapSearch } from "react-icons/tb";

export default function Directions({ park }) {
  return (
    <div className="flex justify-center w-full">
    <div className='flex flex-col items-center w-11/12 mb-4 rounded-md bg-navbar-blue'>
        <section className="flex justify-center w-40 mt-2">
            <TbMapSearch className="w-8 h-8 mr-2 text-white"/>
            <h1 className="text-2xl font-bold text-white font-monserrat">Directions</h1>     
        </section>
        <main className="flex flex-col items-center">
            <p className="p-2 mb-2 font-semibold text-center text-white font-monserrat">{park.directionsInfo}</p>
            <a className="mb-4 text-center text-white underline" target="_blank" href={park.directionsUrl}>Full Directions</a>
        </main>
    </div>
    </div>
  )
}

