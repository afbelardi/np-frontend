import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../authContext';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import Header from '../components/Header';

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
            <Header />
            <Navbar />
        </>
    )
}