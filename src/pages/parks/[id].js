import { useRouter } from 'next/router'; 
import Navbar from '../../components/Navbar';
import { AuthContext } from '../../../authContext';
import { useContext, useEffect } from 'react';

export default function ParkDetails ({ park }) {

    
    const { isLoggedIn } = useContext(AuthContext)
    const router = useRouter();
    const { id } = router.query
    

    useEffect(() => {
        if (!isLoggedIn) {
            router.replace('/login')
        }
    })
    


    return (
        <>
            <Navbar />
        </>
    )
}