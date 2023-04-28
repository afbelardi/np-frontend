import Image from 'next/image'
import Navbar from '../components/Navbar';
import ParkCard from '../components/ParkCard';
import Hero from '../components/Hero';
import { useState, useEffect, useRef} from 'react';
import Head from 'next/head';
import { test, test2 } from '../pages/test';


export default function Home() {

  const [parks, setParks] = useState([]);

  test();
  test2();


  return (
    <>
    <Head>
      <title>NP Finder</title>
      <meta name="description" content="Discover National Park sites to visit" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/mountain.png" />
    </Head>
      <Navbar />
      <Hero />

    </>
  )
}
