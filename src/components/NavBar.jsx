import React, { useState } from 'react'
import Button from './Button'


function NavBar() {
    let Links = [

        { name: "About", link: "/" },
        { name: "Service", link: "/" },
        { name: "Product", link: "/" },
        { name: "Blog", link: "/" },

    ];
    const [open, setOpen] = useState(false);
    return (
        <nav className=' top-0 left-0 ml-20'>
            <div className='md:flex container mx-auto items-center justify-between bg-white py-4 \'>
                <div className='font-bold text-2xl gap-3 cursor-pointer flex items-center font-sans 
        text-gray-800'>
                    <span className=' flex  items-center justify-center w-10 h-10 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full gap-10'>
                        <img className="inline-block w-8 h-8 bg-transparent rounded-full" src={require("../assets/images/main-logo.png")} alt="Main Logo" />
                    </span>
                    Business
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center gap-7 md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[10] left-0 w-full md:w-auto md:pl-0 pl-9 mr-20 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className=' text-[14px] md:my-0 my-7 font-semibold mx-4'>
                                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                            </li>
                        ))
                    }
                    <Button className='ml-16'>
                        Contact Us
                    </Button>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar