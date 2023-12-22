import React from 'react'
import './login.css'
import { TfiEmail } from "react-icons/tfi";
import { FcGoogle } from "react-icons/fc";
export default function Login() {
  return (
    <>
    <div className='login-card'>
        <form className='form-ctn' method='post'>
        <h2>Login</h2>
            <input className='ph-no' type='tel'/>
            
                <hr className='line'/>
                  <button className='otp-btn'>Send One Time Password</button>
            <div className='email-btn'><TfiEmail className='email-icon' />&nbsp;&nbsp;Continue With Email</div>
            <div className='google-btn'><FcGoogle />&nbsp;&nbsp;Continue With Google</div>
               <hr className='line'/>
                <p className='new-acn'>New To Zomato? <a href="https://www.zomato.com/" className='create-acn'>Create Account</a></p>
       
        </form>
    </div>
    </>
  )
}
