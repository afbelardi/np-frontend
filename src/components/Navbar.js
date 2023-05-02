import styles from '../styles/navbar.module.css';
import Link from 'next/link';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../authContext';

export default function Navbar () {

    const { isLoggedIn, logout, user } = useContext(AuthContext);
    const [showDropdown, setShowDropdown] = useState(false);
    const [welcomeMessage, setWelcomeMessage] = useState('');

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    }

    useEffect(() => {
        if (user) {
            setWelcomeMessage(`Welcome, ${user.username}`)
        } 
    }, [user])

    return (
    <div className="flex justify-center w-full">
    <div id={styles.navbar_custom} className="bg-base-100">
  <div className="flex-1">
    <Link href='/'>
        <button className="text-xl text-white normal-case btn btn-ghost">National Park Finder</button>
    </Link>
  </div>
  <div className="flex-none gap-2">
    <div className="z-50 dropdown dropdown-end">
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
      <ul tabIndex={0} className="p-2 mt-3 shadow bg-navbar-blue menu menu-compact dropdown-content rounded-box w-52">
      <li>
        <Link href='/favorites' className="text-white">
          Favorites
          <span className="badge">New</span>
        </Link>
      </li>
      <li>
        {
            isLoggedIn ? <Link href="/search" className="text-white">Search</Link> : <Link href="/search" className="hidden">Search</Link>
        }
        
      </li>
      <li>
        {
            isLoggedIn ? <button className="text-white" onClick={logout}>Log out</button> : <Link className="text-white" href='/login'>
            Log In
        </Link>
        }
        
      </li>
      <li>
        {
            isLoggedIn ? <h2 className="font-semibold text-white ">{welcomeMessage}</h2>: <Link className="text-white" href='/signup'>
            Sign Up
        </Link>
        }
        
      </li>
    </ul>
      }
      
    </div>
  </div>
</div>
</div>
    )
}