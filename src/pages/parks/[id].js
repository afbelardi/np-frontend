import { useRouter } from 'next/router'; 
import Navbar from '../../components/Navbar';
import { AuthContext } from '../../../authContext';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import ImageCarousel from '../../components/ImageCarousel';
import { Carousel } from 'flowbite-react';

export default function ParkDetails ( ) {

    
    const { isLoggedIn } = useContext(AuthContext)
    const router = useRouter();
    const { id } = router.query;
    const [currentPark, setCurrentPark] = useState({})
    

    useEffect(() => {
        if (!isLoggedIn) {
            router.replace('/login')
        }
    }, []);

    useEffect(() => {
        (async () => {
            const parkCode = id;
            const response = await axios.get(`http://localhost:8000/api/nationalpark/park/${parkCode}`);
            const data = await response.data.data[0];
            setCurrentPark(data);
        })()
    }, [])



    


    return (
        <>
            <Header />
            <Navbar />
            <h1 className="mt-10 ml-6 text-xl font-bold text-left text-white font-monserrat">{currentPark.fullName}</h1>
            <Carousel>
               {currentPark.images.map(index => (
                    <img src={index.url} />
                ))}
      </Carousel> 
        </>
    )
}