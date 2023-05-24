import { TbMapSearch } from "react-icons/tb";

export default function Directions({ park }) {
  return (
    <div className="flex flex-col items-center w-full">
    <div className='flex flex-col items-center w-11/12 mb-4 rounded-md bg-navbar-blue'>
        <section className="flex justify-center w-1/2">
            <TbMapSearch />
            <h1 className="text-2xl font-bold text-white font-monserrat">Directions</h1>     
        </section>
    </div>
    </div>
  )
}

