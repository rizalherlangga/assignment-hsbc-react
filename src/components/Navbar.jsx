import React from 'react'
import Logo from '../assets/img/Vector.png'
import User from '../assets/img/user.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <header className="bg-pink-400 h-[64px] w-screen">
        <nav className="max-w-[1120px] h-full mx-auto flex justify-between items-center md:px[50px]">
           <img src={Logo} alt="" className="w-auto h-[28px]"/>
           <div className="flex">
               <ul className="flex gap-[48px] text-[20px] font-semibold text-[#ffff]">
                   <li className="hover:text-pink-800"><Link to="/">Home</Link></li>
                   <li className="hover:text-pink-800"><Link to="/about">About</Link></li>
                   <li className="hover:text-pink-800"><Link to="/article">Article</Link></li>
                   <li className="hover:text-pink-800"><Link to="/upload">Uploads</Link></li>
               </ul>
           </div>
           <div id="containLog" className='flex flex-row gap-2 items-center'>
               <button id="userButton" className="bg-[#DB2777] py-[5px] px-[20px] rounded-[40px] text-[#ffff] text-[16px] font-semibold"><img src={User} alt="" className='w-[25px]' /></button>
            </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
