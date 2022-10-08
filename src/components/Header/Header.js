import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/t-shirt-logo.png';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='flex items-center justify-between bg-gray-300 px-10 md:px-20 w-full'>
            <div className='cursor-pointer'>
                <Link to='/'>
                    <img className='w-20 h-20' src={logo} alt="" />
                </Link>
            </div>
            
            <div>
                <div className={`text-2xl md:text-xl font-semibold list-none md:flex md:items-center  bg-gray-300 w-full md:w-auto absolute md:static ${open ? 'visible top-20 left-0 md:pt-0 pt-3 md:pb-0 pb-5' : 'hidden'}`}>
                    <li className='mx-5 md:mx-0 py-2 md:px-5 md:py-1 rounded-md hover:bg-gray-500 hover:text-white'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='mx-5 md:mx-0 py-2 md:px-5 md:py-1 rounded-md hover:bg-gray-500 hover:text-white'>
                        <Link to='/grandpa'>Grandpa</Link>
                    </li>
                    <li className='mx-5 md:mx-0 py-2 md:px-5 md:py-1 rounded-md hover:bg-gray-500 hover:text-white'>
                        <Link to='/product'>Products</Link>
                    </li>
                    <li className='mx-5 md:mx-0 py-2 md:px-5 md:py-1 rounded-md hover:bg-gray-500 hover:text-white'>
                        <Link to='/orders'>Orders</Link>
                    </li>
                    <li className='mx-5 md:mx-0 py-2 md:px-5 md:py-1 rounded-md hover:bg-gray-500 hover:text-white'>
                        <Link to='/about'>About</Link>
                    </li>
                </div>

                <div onClick={() => setOpen(!open)} className='w-10 h-10 cursor-pointer md:hidden'>
                    {
                        open ? <XMarkIcon/> : <Bars3Icon/>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Header;