import React, { useState } from 'react'
import headerArray from './headeritem'
import { Menu } from 'lucide-react'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleMenuBar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='bg-gray-700 p-10'>
            <div className='flex items-center max-w-6xl mx-auto justify-between'>
                <div>
                    <h1 className='text-2xl font-bold text-white'>CodeNebula</h1>
                </div>
                <ul className=' hidden md:flex space-x-7 items-center'>
                    {
                        headerArray.map((items) => (

                            <li className='text-white transition-all hover:bg-white hover:text-black p-2 rounded-2xl'><a href={items.href}>{items.name}</a></li>
                        ))
                    }
                </ul>

                {/* sm version menu Button */}
                <button className='md:hidden cursor-pointer text-white text-2xl z-10'
                    onClick={handleMenuBar}
                >
                    <Menu />
                </button>

            </div>

            {/* sm version navbar items */}
            {isOpen && (
                <div className='fixed top-20 left-0 w-full h-screen'>
                    <ul className='md:hidden bg-gray-800 flex flex-col gap-3 px-6 pb-4 py-3'>
                        {
                            headerArray.map((items) => (
                                <li  key={items.id}  className='text-white transition-all '>
                                    <a onClick={handleMenuBar} href={items.href}>{items.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            )}

        </div>
    )
}

export default Header