import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='bg-red-700 p-3'>
           <div className="container mx-auto">
               <div className='sm:flex justify-around'>
                   <a target="_blank" rel="noreferrer" href="https://majestic-sprite-6cec97.netlify.app/" className='text-white text-3xl font-bold p-3'>HEALTH SIMPLE</a>

                    <ul className='text-gray-400 sm:self-center text-xl border-t sm:border-none'>
                    <li className='sm:inline-block'>
                        <NavLink style={({ isActive }) => isActive ? {textDecoration: 'underline'} : undefined} className='p-3 hover:text-white' to="/">Home</NavLink>
                    </li>
                    <li className='sm:inline-block'>
                        <NavLink style={({ isActive }) => isActive ? {textDecoration: 'underline'} : undefined} className='p-3 hover:text-white' to="/review">Review</NavLink>
                    </li>
                    <li className='sm:inline-block'>
                        <NavLink style={({ isActive }) => isActive ? {textDecoration: 'underline'} : undefined} className='p-3 hover:text-white' to="/dashboard">Dashboard</NavLink>
                    </li>
                    <li className='sm:inline-block'>
                        <NavLink style={({ isActive }) => isActive ? {textDecoration: 'underline'} : undefined} className='p-3 hover:text-white' to="/blogs">Blogs</NavLink>
                    </li>
                    <li className='sm:inline-block'>
                        <NavLink style={({ isActive }) => isActive ? {textDecoration: 'underline'} : undefined} className='p-3 hover:text-white' to="/about">About</NavLink>
                    </li>
                </ul>
               </div>
           </div>
        </nav>
    );
};

export default Navbar;