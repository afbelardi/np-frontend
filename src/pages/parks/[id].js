import { useRouter } from 'next/router'; 
import Navbar from '../../components/Navbar';
import { AuthContext } from '../../../authContext';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import { Carousel } from 'flowbite-react';
import styles from '../../styles/parkdetails.module.css';


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
                console.log(data)
                sessionStorage.setItem('currentPark', JSON.stringify(data));
                sessionStorage.setItem('parkImages', JSON.stringify(data.images))
                console.log('saved in session storage')
            } catch(error) {
                console.error(error)
            }
            
        })()
    }, []);

    // useEffect(() => {
    //         const storedPark = JSON.parse(sessionStorage.getItem('currentPark'));
    //     const storedImages = JSON.parse(sessionStorage.getItem('parkImages'));
    //     if (storedPark && storedImages) {
    //         setCurrentPark(storedPark);
    //         setParkImages(storedImages);
    //     }    
    // }, [id]);



    


    return (
        <>
            <Header />
            <Navbar />
            <h1 className="mt-10 mb-10 ml-6 text-xl font-bold text-left text-white font-monserrat">{currentPark.fullName}</h1>
            <div className="flex justify-center w-full h-1/2">
            <section className={`${styles.carouselWrapper} flex justify-center w-full h-3/4`}>
                <Carousel>
                {parkImages.map(index => (
                        <img 
                        className="object-cover w-full h-full" 
                        src={index.url} 
                        />
                    ))}
                </Carousel> 
            </section>
            </div>
        </>
    )
} 