import React, { useContext, useState } from 'react';
import { BiSearch } from 'react-icons/bi'
import { AiOutlinePlus } from 'react-icons/ai'
import { IoIosOptions } from 'react-icons/io'

import car from '../../images/car.png'
import { Linha } from '../components/tables'

import { Whitebutton, Bluebutton } from '../components/forms';
function Lista () {
    const data = [{
        "title": "NISSAN MARCH",
        "description": "S 1.6V FLEX",
        "fab": "2013/2014",
        "gas": "Etanol/Gasolina",
        "km": "70.000 km",
        "price": "30900",
        "refe": "L4GVEI",
        "placa": "FTF5178",
        "data": "24/07/2020"
    },
    {
        "title": "CHREVOLET SONIC",
        "description": "LT 1.6V FLEX",
        "fab": "2016/2016",
        "gas": "Etanol/Gasolina",
        "km": "107.300 km",
        "price": "36800",
        "refe": "SRQAAUF",
        "placa": "IND2020",
        "data": "24/07/2020"
    },
    {
        "title": "CHREVOLET SONIC",
        "description": "LT 1.6V FLEX",
        "fab": "2016/2016",
        "gas": "Etanol/Gasolina",
        "km": "107.300 km",
        "price": "36800",
        "refe": "SRQAAUF",
        "placa": "IND2020",
        "data": "24/07/2020"
    },
    {
        "title": "CHREVOLET SONIC",
        "description": "LT 1.6V FLEX",
        "fab": "2016/2016",
        "gas": "Etanol/Gasolina",
        "km": "107.300 km",
        "price": "36800",
        "refe": "SRQAAUF",
        "placa": "IND2020",
        "data": "24/07/2020"
    },
    {
        "title": "CHREVOLET SONIC",
        "description": "LT 1.6V FLEX",
        "fab": "2016/2016",
        "gas": "Etanol/Gasolina",
        "km": "107.300 km",
        "price": "36800",
        "refe": "SRQAAUF",
        "placa": "IND2020",
        "data": "24/07/2020"
    },
    {
        "title": "CHREVOLET SONIC",
        "description": "LT 1.6V FLEX",
        "fab": "2016/2016",
        "gas": "Etanol/Gasolina",
        "km": "107.300 km",
        "price": "36800",
        "refe": "SRQAAUF",
        "placa": "IND2020",
        "data": "24/07/2020"
    },
    {
        "title": "CHREVOLET SONIC",
        "description": "LT 1.6V FLEX",
        "fab": "2016/2016",
        "gas": "Etanol/Gasolina",
        "km": "107.300 km",
        "price": "36800",
        "refe": "SRQAAUF",
        "placa": "IND2020",
        "data": "24/07/2020"
    },
    {
        "title": "CHREVOLET SONIC",
        "description": "LT 1.6V FLEX",
        "fab": "2016/2016",
        "gas": "Etanol/Gasolina",
        "km": "107.300 km",
        "price": "36800",
        "refe": "SRQAAUF",
        "placa": "IND2020",
        "data": "24/07/2020"
    },
    {
        "title": "CHREVOLET SONIC",
        "description": "LT 1.6V FLEX",
        "fab": "2016/2016",
        "gas": "Etanol/Gasolina",
        "km": "107.300 km",
        "price": "36800",
        "refe": "SRQAAUF",
        "placa": "IND2020",
        "data": "24/07/2020"
    }]
    return (
        <div class="grid">
            <div className='w-screen mt-10 ml-10 pr-3'>
                <div className='md:flex-[1] flex-initial justify-center items-center'>
                    <h1 className='text-2xl font-bold float-left'>Veículos</h1>

                    <input type="text" className='w-[250px] h-[35px] ml-5 border-2 border-gray-200 float-left rounded p-2' placeholder='Buscar...'/>
                    <BiSearch fontSize={28} color={'rgba(100,100,100,0.3)'} className='cursor-pointer mt-[6px] h-[22px] ml-[-32px]  float-left' />
                
                </div>
                
                <div className="w-[40%] float-right flex-row justify-between flex-end">
                    <Whitebutton title={'Filtrar'} icon={<IoIosOptions   fontSize={24} className='cursor-pointer mr-3 float-left'/>}/>
                    <Bluebutton title={'Adicionar'} icon={<AiOutlinePlus fontSize={24} className='cursor-pointer mr-3 float-left'/>}/>
                </div>
            </div>
            <table className="xl:w-[77%] md:w-[91%] sm:w-[91%] mr-10 ml-5 mt-5 table text-[rgba(100,100,100,0.4)] bg-white">
                <thead className="text-left flex-start border-b-2 border-gray-200">
                    <th>Dados do veículo</th>
                    <th>REF</th>
                    <th>Placa</th>
                    <th>Data</th>
                </thead>
            </table>
            <table className="xl:w-[77%] md:w-[91%] sm:w-[91%] ml-5 table justify-between text-[rgba(100,100,100,0.4)] bg-white">
                    {data.map((c, index) => (
                        <Linha key={index} img={car} title={c.title} desc={c.description} fab={c.fab} gas={c.gas} km={c.km} price={c.price} refe={c.refe} placa={c.placa} data={c.data}/>   
                    ))}
            </table>
        </div>
    )
}

export default Lista