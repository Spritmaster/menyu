import React from 'react'
import Logo from '../images/NB-compony.png'
import {NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex w-[100%] bg-[#f0f1effd] px-[10rem] py-[1rem] justify-between items-center'>

        <div className='flex gap-2 '>
        <img src={Logo} alt="Logo" width={40}/> 
        <h1 className='brend flex gap-[1rem] items-center text-[3rem] font-bold'>Emirates</h1>
        </div>

        <nav className='flex gap-[4rem] text-[2rem] font-bold'>
          <NavLink className="active:text-[#ffb667]" to={"/"}>HOME</NavLink>
          <NavLink className="active:text-[#ffb667]" to={"contact"}>CONTACT</NavLink>
        </nav>
    </div>
  )
}

export default Header