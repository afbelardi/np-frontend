import styles from "../styles/parkdetails.module.css";

export default function WeatherInfo({ park }) {
    return (
    <div className="flex flex-col items-center justify-center w-full mt-4 mb-10">
        <section className="flex items-center justify-center gap-4 mb-4">
            <img src="/weather.png" className={`w-16 h-16 object-contain `}/>
            <h1 className={`${styles["text-shadow"]} text-3xl font-medium text-white font-monserrat`}>Weather</h1>     
        </section>
        <main className="flex flex-col items-center">
            <p className={` ${styles["text-shadow"]} p-6 mb-2 text-md font-light leading-7 text-center text-off-white font-monserrat`}>{park.weatherInfo}</p>
        </main>
    </div>
    )
}