import { useRouter } from 'next/router'; 
import Navbar from '../../components/Navbar';
import { AuthContext } from '../../../authContext';
import { useContext, useEffect } from 'react';
import axios from 'axios';

export default function ParkDetails ({ park }) {

    
    const { isLoggedIn } = useContext(AuthContext)
    const router = useRouter();
    const { id } = router.query
    

    useEffect(() => {
        if (!isLoggedIn) {
            router.replace('/login')
        }
    }, []);

    useEffect(() => {
        (async () => {
            const parkCode = id;
            const response = await axios.get(`http://localhost:8000/api/nationalpark/apikey/park/${parkCode}`);
            const data = await response.data.data[0];
            console.log(data)
        })()
    }, [])
    


    return (
        <>
            <Navbar />
        </>
    )
}