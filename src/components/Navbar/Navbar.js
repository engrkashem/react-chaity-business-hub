import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [open, setOpen] = useState(false)
    return (
        <nav >
            <div className='grid grid-cols-1 sm:grid-cols-2 items-center p-6 bg-slate-900 font-bold'>
                <div>
                    <h3 className='text-3xl  text-teal-200 pb-4'>CHAITY'S WORLD</h3>
                </div>
                <div>
                    <div></div>
                    <div className='text-teal-400 flex  justify-between gap-4'>
                        <Link className=' hover:text-fuchsia-400 ' to={'/'}>Home</Link>
                        <Link className='hover:text-fuchsia-400 ' to={'/restaurent'}>Restaurent</Link>
                        <Link className='hover:text-fuchsia-400 ' to={'/smartgadgets'}>Smart Gadgets</Link>
                        <Link className='hover:text-fuchsia-400 ' to={'/travels'}>Travels</Link>
                        <Link className='hover:text-fuchsia-400 ' to={'/about'}>About Us</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;