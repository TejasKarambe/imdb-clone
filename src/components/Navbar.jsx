import React from 'react'

import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-8 py-2'>
      
      <img className='w-[50px]' src={Logo} alt="" />
      <div className='flex space-x-8 items-center text-2xl font-bold text-blue-500'>
      <Link to="/">Home</Link>
      <Link to="/watchlist">Watchlist</Link>
      </div>
    </div>
  )
}

export default Navbar
