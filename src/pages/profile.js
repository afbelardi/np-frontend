import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../authContext';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';

export default function Profile () {
    const router = useRouter();
    const { isLoggedIn } = useContext(AuthContext);

    useEffect(() => {
        if (!isLoggedIn) {
            router.push('/login')
        }
    });

    return (
        <>
            <Navbar />
        </>
    )
}