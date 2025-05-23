import React from 'react'
import {useState} from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadlow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <li className="text-3xl font-bold mr-4 sm:text-4xl">
                        <Link to="/">Fabriq.</Link>
                    </li>
                    <ul className='hidden md:flex'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/wardrobe">Wardrobe</Link></li>
                        <li><Link to="/outfits">Outfits</Link></li>
                    </ul>
                </div>
                <div className = 'hidden md:flex pr-4'>
                    <button className = 'border-non bg-transparent text-black mr-4 px-8 py-3'>
                        Sign In
                    </button>
                    <button className = 'px-8 py-3'>Sign Up</button>
                </div>
                <div className='md:hidden' onClick={handleClick}>
                    {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}

                </div>
            </div>

            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
                <li className='border-b-2 border-zinc-300 w-full'>
                    <Link to="/" onClick={() => setNav(false)}>Home</Link>
                </li>
                <li className='border-b-2 border-zinc-300 w-full'>
                    <Link to="/wardrobe" onClick={() => setNav(false)}>Wardrobe</Link>
                </li>
                <li className='border-b-2 border-zinc-300 w-full'>
                    <Link to="/new-outfit" onClick={() => setNav(false)}>New Outfit</Link>
                </li>
                <li className='border-b-2 border-zinc-300 w-full'>
                    <Link to="/outfits" onClick={() => setNav(false)}>Outfits</Link>
                </li>
                <div className='flex flex-col my-4'>
                    <button className='bg-transparent text-indigo-600 border border-black-600 px-8 py-3 mb-4'>Sign In</button>
                    <button className='px-8 py-3'>Sign up</button>
                </div>
            </ul>

        </div>
    );
};
    
export default Navbar