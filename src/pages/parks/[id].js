import { useRouter } from 'next/router'; 
import Navbar from '../../components/Navbar';
import { AuthContext } from '../../../authContext';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import { Carousel } from 'flowbite-react';

export default function ParkDetails ( ) {

    
    const { isLoggedIn } = useContext(AuthContext)
    const router = useRouter();
    const { id } = router.query;
    const [currentPark, setCurrentPark] = useState({})
    const [parkImages, setParkImages] = useState([])
    

    // useEffect(() => {
    //     if (!isLoggedIn) {
    //         router.replace('/login')
    //     }
    // }, []);

    useEffect(() => {
        (async () => {
            try {
                const parkCode = id;
                const response = await axios.get(`http://localhost:8000/api/nationalpark/park/${parkCode}`);
                const data = await response.data.data[0];
                setCurrentPark(data);
                setParkImages(data.images);
                localStorage.setItem('currentPark', JSON.stringify(data));
                localStorage.setItem('parkImages', JSON.stringify(data.images))
            } catch(error) {
                console.error(error)
            }
            
        })()
    }, [id]);

    // useEffect(() => {
    //     const storedPark = JSON.parse(localStorage.getItem('currentPark'));
    //     const storedImages = JSON.parse(localStorage.getItem('parkImages'));
    //     if (storedPark && storedImages) {
    //         setCurrentPark(storedPark);
    //         setParkImages(storedImages);
    //     }
    // }, [])



    


    return (
        <>
            <Header />
            <Navbar />
            <h1 className="mt-10 ml-6 text-xl font-bold text-left text-white font-monserrat">{currentPark.fullName}</h1>
            <Carousel>
               {parkImages.map(index => (
                    <img src={index.url} />
                ))}
      </Carousel> 
        </>
    )
} 