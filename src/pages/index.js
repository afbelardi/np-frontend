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
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet"/ >
      </Head>
      <Navbar />
      <Hero />
    </>
  )
}
