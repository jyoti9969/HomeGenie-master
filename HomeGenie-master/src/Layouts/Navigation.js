import React, { Fragment } from 'react';
import { useLocation } from "react-router-dom";
import Dashboard from '../components/Dashboard/Dashboard';

import {Link} from 'react-router-dom'
const Navigation = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const { pathname } = useLocation();
    return (
        <nav className="bg-gray-900 py-3">
            <div className=" mx-auto px-4 pb-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

                {/* <!-- Logo or Name of Website --> */}
                <div className="flex items-center">
                    <Link to="/" className="text-white font-bold text-xl decoration-transparent">HomeGenie</Link>
                </div>

               
                
                {/* <!-- Login and List Your Property --> */}
                <div className="hidden md:flex items-center">
                    <Link to="/sign-in" className="text-gray-300 hover:text-white px-3 py-2 decoration-transparent">Login</Link>
                    <Link to="/Dashboard" className="text-gray-300 hover:text-white px-3 py-2 decoration-transparent">Dashboard</Link>
                    <Link to="/admin" className="bg-blue-500 text-white px-4 py-2 rounded-full decoration-transparent">List Your Property</Link>
                </div>

                {/* <!-- Hamburger Icon for Mobile --> */}
                               <div className="md:hidden " onClick={(e) => setIsOpen(!isOpen)}>

                    <button className="text-white hover:text-gray-300 focus:outline-none">
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                        </svg>
                    </button>
                </div>

            </div>

            {/* <!-- Mobile Navigation Menu --> */}
            <div className={`${!isOpen ? "hidden" : ""} md:hidden bg-gray-800`}>
                <div className="px-2 py-3 space-y-1">
                    <Link to="/sign-in" className="text-white hover:text-gray-300 block px-3 py-2">Login</Link>
                    <Link to="/dashboard" className="text-white hover:text-gray-300 block px-3 py-2">dashboard</Link>
                    <Link to="/admin" className="bg-blue-500 text-white block px-3 py-2 rounded-full">List Your Property</Link>
                </div>
            </div>
        </nav>

    );
}

export default Navigation;
