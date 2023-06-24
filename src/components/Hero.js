import { TbCheckupList } from "react-icons/tb";
import styles from "../styles/hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full mt-12 overlow-x-hidden">
        <h1 className="p-4 text-4xl font-bold text-center text-white font-monserrat">
          Unleash your inner adventurer and discover
          <p
            className={`${styles.intro} inline-block p-1 mx-2 text-transparent bg-gradient-to-r from-boston-blue-400 via-boston-blue-500 to-boston-blue-600 bg-clip-text`}
          >
            breathtaking
          </p>
          national parks with our finder.
        </h1>
        <Link href="/search">
          <button className="mt-3 btn glass">Get Started</button>
        </Link>
        <ul className="flex flex-col items-center w-full gap-2 mt-10 font-aeonik-light">
          <li className="flex items-center gap-2 w-72">
            <img  className={styles.mountain}src="/mt-checklist.png" />
            <p className={`${styles.listItem} text-lg font-medium font-monserrat`}>
              Search for National Park sites by state
            </p>
          </li>
          <li className="flex items-center gap-2 w-72">
            <img className={styles.mountain} src="/mt-checklist.png" />
            <p className={`${styles.listItem} text-lg font-medium font-monserrat`}>
              Get information about each location
            </p>
          </li>
          <li className="flex items-center gap-2 w-72">
            <img className={styles.mountain} src="/mt-checklist.png" />
            <p className={`${styles.listItem} text-lg font-monserrat  font-medium`}>
              Create a list of favorites
            </p>
          </li>
          <li className="flex items-center gap-2 w-72">
            <img className={styles.mountain} src="/mt-checklist.png" />
            <p className={`${styles.listItem} text-lg font-medium font-monserrat`}>
              Plan your next trip
            </p>
          </li>
        </ul>
        <img
          src="/outdoor_adventure.svg"
          className={`${styles.intro} w-80 h-80`}
        />
        <section className="flex flex-col items-center mb-4">
          <h1 className="pl-4 pr-4 text-xl font-semibold text-center text-white font-monserrat">
            Created with official data from the National Park Service
          </h1>
          <img src="/Arrowhead.png" className="w-20 mt-4 h-22" />
        </section>
      </div>
    </>
  );
}
