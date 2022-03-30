import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {

    const [open, setOpen] = useState(false);
    return (
        <nav >
            <div className='flex justify-between items-center p-6 bg-slate-900 font-bold'>
                <div>
                    <h3 className='text-3xl  text-teal-200 pb-4'>CHAITY'S WORLD</h3>
                </div>
                <div>
                    <div onClick={() => setOpen(!open)} className='w-10 h-10 text-teal-400 sm:hidden'>
                        {
                            open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>
                        }
                    </div>
                    <div className={`text-teal-400 flex  justify-between gap-4  sm:static absolute duration-500 ${open ? 'top-18 right-1' : 'top-[-120px]'}`}>
                        <Link className=' hover:text-fuchsia-400 mr-4' to={'/'}>Home</Link>
                        <Link className='hover:text-fuchsia-400 mr-4' to={'/restaurent'}>Restaurent</Link>
                        <Link className='hover:text-fuchsia-400 mr-4' to={'/smartgadgets'}>Smart Gadgets</Link>
                        <Link className='hover:text-fuchsia-400 mr-4' to={'/travels'}>Travels</Link>
                        <Link className='hover:text-fuchsia-400 ' to={'/about'}>About Us</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;