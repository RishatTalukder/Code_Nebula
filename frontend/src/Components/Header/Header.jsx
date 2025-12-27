import React from 'react'
import headerArray from './headeritem'

const Header = () => {
    return (
        <div className='bg-gray-700 p-10'>
            <div className='flex items-center max-w-6xl mx-auto justify-between'>
                <div>
                    <h1 className='text-2xl font-bold text-white'>CodeNebula</h1>
                </div>
                <ul className='flex space-x-7 items-center'>
                    {
                        headerArray.map((items) => (

                            <li className='text-white transition-all hover:bg-white hover:text-black p-2 rounded-2xl'><a href={items.href}>{items.name}</a></li>
                        ))
                    }
                </ul>
                
            </div>
        </div>
    )
}

export default Header