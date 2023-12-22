import React from 'react'
import Header from '../Header/Header'
import './topbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CiSearch } from "react-icons/ci";
import InputIcon from '../InputIcon/InputIcon';

export default function Topbar() {
  return (
    <>
   <Header/>
    <div className='topbar-container'>
    <div class="background-image"></div>
    <h1 className='zomato-name'>ZOMATO</h1>
    <h2>Discover the best food & drinks in Hyderabad</h2>
    <div class="input-group flex-nowrap w-50">
  <span class="input-group-text" id="addon-wrapping"><CiSearch /></span>
  <input type="text" class="form-control search-box" placeholder='Search for Restuarent , Dish chef' aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
    </div>
    
    </>
  )
}
