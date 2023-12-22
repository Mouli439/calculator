import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
   <>
   <nav className='navbar'>
    <ul>
    <li>
            <Link to="/">Topbar</Link>
        </li>
        <li>
            <Link to="/login">Login</Link>
        </li>
       
    {/* <li>
        <Link to="/first">First</Link>
    </li> */}
    </ul>
   </nav>
   </>
  )
}
