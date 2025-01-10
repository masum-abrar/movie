import React from 'react'
import logo from '../../../public/logo.png'
import Image from 'next/image'
import { IoSearchOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div className='container max-w-5xl mx-auto'>
        <div className="navbar ">
  <div className="navbar-start text-white">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-neutral-700 rounded-box z-[1] mt-3 w-52 p-2 shadow text-gray-400 hover:text-white">
        <li><a>FLIMS</a></li>
        <li><a>LISTS</a></li>
        <li><a>MEMBERS</a></li>
        <li><a>JOURNALS</a></li>
        <li><a className="btn px-8 py-0 border-none text-white bg-[#00ac1c] font-bold"> <span><FaPlus style={{ color: 'white' }}></FaPlus></span> LOG </a></li>
      </ul>
    </div>
   <div className='flex items-center space-x-2'>
    <Image src={logo} alt="logo" width={100} height={100} />
    
   <a className="btn btn-ghost text-xl">Letterboxd</a>
   </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-gray-400 hover:text-white">
    <li><a>FLIMS</a></li>
        <li><a>LISTS</a></li>
        <li><a>MEMBERS</a></li>
        <li><a>JOURNALS</a></li>
    </ul>
  </div>
 
  {/* <CiSearch className='bg-white' /> */}

  <div className="navbar-end ">
  <IoSearchOutline style={{ color: 'white' }} className=' size-6 mr-5'/>
    <a className="btn px-8 py-0 border-none text-white bg-[#00ac1c] font-bold"> <span><FaPlus style={{ color: 'white' }}></FaPlus></span> LOG </a>
  </div>
</div>
    </div>
  )
}

export default Navbar