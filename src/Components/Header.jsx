import React from 'react'
import '../Styles/Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
<header className="header bg-black text-gray-300 flex justify-between items-center  relative">
  <h1 className="headertitle  text-center flex-1">
    Sign up and get 20% off to your first order.{" "}
    <Link to="/signup" className="Link font-bold underline hover:text-red-500 ">
      Sign Up Now
    </Link>
  </h1>

  <button className="close absolute right-35 text-3xl text-gray-300 hover:text-red-500 cursor-pointer">
    &times;
  </button>
</header>

  )
}

export default Header
