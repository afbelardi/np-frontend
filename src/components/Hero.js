import { TbCheckupList } from 'react-icons/tb';
import styles from '../styles/hero.module.css';

export default function Hero () {
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full mt-16 overflow-x-hidden">
                <h1 className="p-4 text-5xl font-bold text-center text-white font-monserrat">Plan your next 
                <p className={`${styles.intro} inline-block p-1 mx-2 text-transparent bg-gradient-to-r from-boston-blue-400 via-boston-blue-500 to-boston-blue-600 bg-clip-text`}>outdoor</p>
                
                adventure</h1>
                <button className="mt-3 btn glass">Get Started</button>
                <ul className="flex flex-col items-center w-full gap-2 mt-10">
                    <li className='flex items-center gap-2 w-72'>
                      <TbCheckupList className={`${styles.clipboard} w-7 h-7 `}/>
                      <p className={`${styles.listItem} text-sm font-medium`}>Search for National Park sites by state</p>
                    </li>
                    <li className='flex items-center gap-2 w-72'>
                      <TbCheckupList className={`${styles.clipboard} w-7 h-7 `}/>
                      <p className={`${styles.listItem} text-sm font-medium`}>Get information about each location</p>
                    </li>
                    <li className='flex items-center gap-2 w-72'>
                      <TbCheckupList className={`${styles.clipboard} w-7 h-7 `}/>
                      <p className={`${styles.listItem} text-sm font-medium`}>Create a list of favorites</p>
                    </li>
                    <li className='flex items-center gap-2 w-72'>
                      <TbCheckupList className={`${styles.clipboard} w-7 h-7 `}/>
                      <p className={`${styles.listItem} text-sm font-medium`}>Plan your next trip</p>
                    </li>
                </ul>
                <img src="/outdoor_adventure.svg" className={`${styles.intro} w-80 h-80`} />
            </div>
        </>
    )
}