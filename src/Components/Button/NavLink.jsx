'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
    const pathname = usePathname();

    const isActive =
        href === '/'
            ? pathname === '/'
            : pathname.startsWith(href);

    return (
        <Link
            href={href}
            className={`text-lg font-manrope font-semibold transition ${
                isActive ? 'text-primary' : 'text-gray-700'
            }`}
        >
            {children}
        </Link>
    );
};

export default NavLink;