import React, { useContext, useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Lista from './Lista';

function Listagem () {

    return (
        <div className="min-h-screen w-[100%] overflow-x-hidden">
            <Navbar/>
            <div className="grid grid-cols-6 gap-4">
                <div className='sm:hidden md:hidden lg:block w-[230px]max-h-screen'>
                    <Sidebar/>
                </div>
                <div className="w-screen bg-[rgba(100,100,100,0.05)] border-l-2 border-gray-200 ">
                    <Lista/>
                </div>
            </div>
        </div>
    )
}

export default Listagem