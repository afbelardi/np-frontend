import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../authContext';
import { useRouter } from 'next/router';

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

        </>
    )
}