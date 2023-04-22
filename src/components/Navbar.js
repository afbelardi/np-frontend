import styles from '../styles/navbar.module.css';
import Link from 'next/link';

export default function Navbar () {
    return (
    <div className="flex justify-center w-full">
    <div id={styles.navbar_custom} className="bg-base-100">
  <div className="flex-1">
    <Link href='/'>
        <button className="text-xl normal-case btn btn-ghost">National Park Finder</button>
    </Link>
    {/* <img src="mountain.png" className="w-5 h-5 mr-3" /> */}
  </div>
  <div className="flex-none gap-2">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-square">
        <div className="rounded-medium w-15">
           <img src="/mountain.png" />
        </div>
      </label>
      <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
</div>
    )
}