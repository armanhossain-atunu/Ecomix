import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavLink from '../Button/NavLink';

const Navbar = () => {
    const nav = <>
        <li> <NavLink href={'/'}>Home</NavLink></li>
        <li> <NavLink href={'/about'}>About</NavLink></li>
        <li> <NavLink href={'/contact'}>Contact</NavLink></li>
        <li> <NavLink href={'/products'}>Product</NavLink></li>
    </>
    return (
        <div>
            <div className="w-11/12 mx-auto navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>

                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <Link href="/">
                                <Image src="/ecomix.png" width={100} height={100} alt="logo" className='ml-2' />
                            </Link>
                            {nav}
                        </ul>
                    </div>
                    <Link href="/">
                        <Image src="/ecomix.png" width={100} height={100} alt="logo" className='ml-2 hidden lg:block' />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {nav}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <a className="btn btn-primary btn-outline">Login</a> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;