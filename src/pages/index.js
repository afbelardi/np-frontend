import Image from 'next/image'
import Navbar from '../components/Navbar';
import ParkCard from '../components/ParkCard';
import Hero from '../components/Hero';
import { useState, useEffect, useRef} from 'react';
import Head from 'next/head';


export default function Home() {

  const [parks, setParks] = useState([]);
  const state = useRef(null)



  return (
    <>
    <Head>
      <title>NP Finder</title>
      <meta name="description" content="Discover National Park sites to visit" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
      <Navbar />
      <Hero />

    </>
  )
}
