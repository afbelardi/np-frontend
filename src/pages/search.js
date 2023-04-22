import Navbar from "../components/Navbar";

export default function Search () {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center h-56 mt-16">
                <input className="w-1/2 input-md"></input>
            </div>
        </>
    )
}