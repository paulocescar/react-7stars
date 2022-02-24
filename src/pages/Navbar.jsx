import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { HiHome, HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';

import logo from '../../images/logo.png';
import houseicon from '../../images/House-Circle.png';

import { Select } from '../components/forms';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <nav className="w-[100%] flex p-4 border-2 border-gray-200 overflow-x-hidden">
            <div className="md:flex-[1] flex-initial justify-center items-center">
                <img src={logo} alt="logo" className="cursor-pointer float-left" /> 
                <img src={houseicon} alt="houseicon" className="ml-2 cursor-pointer float-left" />
                <Select/>
               
            </div>
            <ul className="md:flex hidden list-none flex-row justify-between flex-end">
                <IoMdNotificationsOutline fontSize={28} className='cursor-pointer ' />
                <FiSettings fontSize={28} className='cursor-pointer ml-5' />
                <CgProfile fontSize={28} className='cursor-pointer ml-5' />
            </ul>
            <div className="flex relative">
                    {toggleMenu 
                        ? <AiOutlineClose fontSize={28} className='md:hidden cursor-pointer' onClick={() => setToggleMenu(false)}/>
                        : <HiMenuAlt4  fontSize={28} className='md:hidden cursor-pointer' onClick={() => setToggleMenu(true)}/>
                    }

                    {toggleMenu && (
                        <ul className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'>
                            <li className="text-xl w-full my-2">
                                <AiOutlineClose onClick={() => setToggleMenu(false)}/>
                            </li>
                            {["Market", "Exchange", "Tutorials", "Wallet"].map( (item, index) => (
                                <NavbarItem key={item + index} title={item} classProps="my-2 text-lg"/>
                            ))}
                        </ul>
                    )}
                </div>
        </nav>
    )
}

export default Navbar;