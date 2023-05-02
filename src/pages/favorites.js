import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../authContext';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Head from 'next/head';

export default function Favorites () {
    const router = useRouter();
    const { isLoggedIn } = useContext(AuthContext);

    useEffect(() => {
        if (!isLoggedIn) {
            router.push('/login')
        }
    });

    return (
        <>
        <Head>
            <title>NP Finder</title>
            <meta name="description" content="Discover National Park sites to visit" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/mountain.png" />
        </Head>
            <Navbar />
        </>
    )
}