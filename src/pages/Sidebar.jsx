import React, { useState, useEffect } from 'react'
import { RiDashboardLine } from 'react-icons/ri'
import { AiOutlineTag, AiOutlineCar, AiOutlineBank } from 'react-icons/ai'
import { SideBarItem } from '../components/navbar';
import { BiRocket } from 'react-icons/bi'
import { BsGraphUp } from 'react-icons/bs'

const Sidebar = () => {
    return (
        <nav className="h-screen max-h-screen flex p-4">
            <ul className="list-none">
                <SideBarItem icon={<RiDashboardLine fontSize={24} className='cursor-pointer float-left mr-2'/>} title={'Resumo'}/>
                <SideBarItem icon={<AiOutlineTag fontSize={24} className='cursor-pointer float-left mr-2'/>} title={'Oportunidades'}/>
                <SideBarItem icon={<AiOutlineCar fontSize={24} className='cursor-pointer float-left mr-2'/>} title={'Veículos'}/>
                <SideBarItem icon={<BiRocket fontSize={24} className='cursor-pointer float-left mr-2'/>} title={'Publicações'}/>
                <SideBarItem icon={<BsGraphUp fontSize={24} className='cursor-pointer float-left mr-2'/>} title={'Analytics'}/>
                <SideBarItem icon={<AiOutlineBank fontSize={24} className='cursor-pointer float-left mr-2'/>} title={'Financiamentos'}/>
            </ul>
        </nav>
    )
}

export default Sidebar;