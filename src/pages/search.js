import Navbar from "../components/Navbar";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Search () {

    const [exampleParks, setExampleParks] = useState([]);

    useEffect(() => {
    (async () => {
        try {
            const response1 = await axios.get('http://localhost:8000/api/nationalpark/apikey/WA');
            const data1 = response1.data.data[9];

            console.log(data1);

        } catch(error) {
            console.error(error)
        }
    })();
    }, [])


    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center h-56 mt-16">
                <input className="w-1/2 input-md"></input>
            </div>
            <div className="flex flex-col items-center">

            </div>
        </>
    )
}