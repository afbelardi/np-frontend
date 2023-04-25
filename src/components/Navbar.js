import styles from '../styles/navbar.module.css';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar () {

    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    }

    return (
    <div className="flex justify-center w-full">
    <div id={styles.navbar_custom} className="bg-base-100">
  <div className="flex-1">
    <Link href='/'>
        <button className="text-xl normal-case btn btn-ghost">National Park Finder</button>
    </Link>
  </div>
  <div className="flex-none gap-2">
    <div className="dropdown dropdown-end">
      <label 
      tabIndex={0} 
      className="btn btn-ghost btn-square"
      onClick={toggleDropdown}
      >
        <div className="rounded-medium w-15">
           <img src="/mountain.png" />
        </div>
      </label>
      {showDropdown && 
      <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
      <li>
        <a className="justify-between">
          Profile
          <span className="badge">New</span>
        </a>
      </li>
      <li><a>Settings</a></li>
      <li><a>Log In</a></li>
    </ul>
      }
      
    </div>
  </div>
</div>
</div>
    )
}