import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Head from 'next/head';



export default function Home() {

  

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
