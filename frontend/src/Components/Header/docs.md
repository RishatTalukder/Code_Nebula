# Documentation for Navbar 
# CodeNebula Navbar Documentation


This is the documentation for thr `header` componets it bulit react and tailwind css
and works on desktop and mobile version,  mobile version Toggle feature for example

## Example Code

```jsx'
import React, { useState } from 'react'
import headerArray from './headeritem'
import { Menu } from 'lucide-react'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleMenuBar = () => {
        setIsOpen(!isOpen)
    }

    First, I used useState to set something up.
     Then I created a function
      What’s happening here:
     When someone clicks the button below, the function runs and sets setOpen to true.
     then isOpen value true 


   

    return (
        <div className='bg-gray-700 p-10'>
            <div className='flex items-center max-w-6xl mx-auto justify-between'>
                <h1 className='text-2xl font-bold text-white'>CodeNebula</h1>

                <ul className='hidden md:flex space-x-7 items-center'>
                    {headerArray.map((item) => (
                        <li key={item.id} className='text-white transition-all hover:bg-white hover:text-black p-2 rounded-2xl'>
                            <a href={item.href}>{item.name}</a>
                        </li>
                    ))}
                </ul>

                 <!-- button example  -->
                <button className='md:hidden cursor-pointer text-white text-2xl z-10'
                    onClick={handleMenuBar}
                >
                    <Menu />
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                when isopen true this is works 
                <div className='fixed top-20 left-0 w-full h-screen'>
                    <ul className='md:hidden bg-gray-800 flex flex-col gap-3 px-6 pb-4 py-3'>
                        {headerArray.map((item) => (
                            <li key={item.id} className='text-white transition-all'>
                                <a onClick={handleMenuBar} href={item.href}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

             When i click the toggle Button , the menu is opens ; when i click the toggle  Button again , it closes

        </div>
    )
}

export default Header'

