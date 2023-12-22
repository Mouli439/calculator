import React from 'react'
import './Header.css';
import { MdGetApp } from "react-icons/md";
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <>
    <div className='header-container'>
        <div className='headerleft'>
            <ul><li className='dinesh'><MdGetApp />&nbsp;&nbsp;Get The App</li></ul>
        </div>
        <div className='headerright'>
            <ul>
            <li>Investor Relations</li>
            <li>Add Restuarents</li>
            <Link to="/login">Login</Link>
            <li>Sign up</li>
            </ul>
        </div>
    </div>
    </>
  )
}
