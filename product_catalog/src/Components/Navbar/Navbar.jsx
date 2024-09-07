import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import {auth ,provider} from '../Login/config'
import { signInWithPopup } from 'firebase/auth'


const Navbar = () => {
  const {getTotalCartItems} =useContext(ShopContext);
  const[menu,setMenu] =useState("shop")
  const [value,setValue] =useState('')

  const handleClick=()=>{
    signInWithPopup(auth, provider)
    .then((data) => {
      setValue(data.user.email)
      localStorage.setItem('email',data.user.email)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  const logout=()=>{
    localStorage.removeItem('email')
    setValue('')
    window.location.reload();
    // navigate('/');
  }
  useEffect(()=>{
    setValue(localStorage.getItem('email'))
  },[])
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='logo' />
        <p>CLOTHES</p>
      </div>
      <ul className='nav-menu'>
        <Link to="/" onClick={()=>setMenu("home")} className={menu==="shop"?"active":""}>Shop</Link>
        <a href='#popular' onClick={()=>setMenu("Popular")} className={menu==="Popular"?"active":""}>Popular</a>
        <a href='#new-collections' onClick={()=>setMenu("New Collection")} className={menu==="New Collection"?"active":""}>New Collections</a>
        <a href='#footer' onClick={()=>setMenu("Contact Us")} className={menu==="Contact Us"?"active":""}>Contact Us</a>
      </ul>
      <div className="nav-login-cart">
         <Link to='/cart'><img src={cart_icon} alt='cart' /></Link>
         <div className="nav-cart-count">{getTotalCartItems()}</div>
          {value?<button onClick={logout}>Logout</button>:<button onClick={handleClick}>Sign in</button>}
         {/* <Link to='/login'><button onClick={handleClick}>Sign in</button></Link> */}
      </div>
      </div>
  )
}

export default Navbar