import Image from 'next/image'
import Navbar from '../components/Navbar';
import ParkCard from '../components/ParkCard';
import Hero from '../components/Hero';
import { useState, useEffect, useRef} from 'react';


export default function Home() {

  const [parks, setParks] = useState([]);
  const state = useRef(null)



  return (
    <>
    {/* <div className='object-contain bg-hero-image h-2/4'> */}
      <Navbar />
      <Hero />
    {/* </div> */}
    </>
  )
}
