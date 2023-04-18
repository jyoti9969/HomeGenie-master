import React, { Fragment } from 'react';
import { useLocation } from "react-router-dom";

const Navigation = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const { pathname } = useLocation();
    return (
        <nav class="bg-gray-900 py-3">
            <div class=" mx-auto px-4 pb-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

                {/* <!-- Logo or Name of Website --> */}
                <div class="flex items-center">
                    <a href="#" class="text-white font-bold text-xl">HomeGenie</a>
                </div>

                {/* <!-- Select option with city of India option with search Input and search Option --> */}
                {/* {pathname !== "/" && <Fragment>
                    <div class="flex-grow hidden md:block">
                        <form action="#" method="GET">
                            <div class="flex items-center bg-white rounded-full px-2">
                                <select name="city" id="city" class="bg-white outline-none border-none">
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Bangalore">Bangalore</option>
                                    <option value="Hyderabad">Hyderabad</option>
                                    <option value="Chennai">Chennai</option>
                                </select>
                                <input type="text" placeholder="Search rental listings" class="bg-white outline-none border-none ml-2 flex-grow" />
                                <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-full">Search</button>
                            </div>
                        </form>
                    </div>

                    
                    
                    </Fragment>} */}
                
                {/* <!-- Login and List Your Property --> */}
                <div class="hidden md:flex items-center">
                    <a href="#" class="text-gray-300 hover:text-white px-3 py-2">Login</a>
                    <a href="#" class="bg-blue-500 text-white px-4 py-2 rounded-full">List Your Property</a>
                </div>

                {/* <!-- Hamburger Icon for Mobile --> */}
                               <div class="md:hidden " onClick={(e) => setIsOpen(!isOpen)}>

                    <button class="text-white hover:text-gray-300 focus:outline-none">
                        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                        </svg>
                    </button>
                </div>

            </div>

            {/* <!-- Mobile Navigation Menu --> */}
            <div class={`${!isOpen ? "hidden" : ""} md:hidden bg-gray-800`}>
                <div class="px-2 py-3 space-y-1">
                    <a href="#" class="text-white hover:text-gray-300 block px-3 py-2">Login</a>
                    <a href="#" class="bg-blue-500 text-white block px-3 py-2 rounded-full">List Your Property</a>
                </div>
            </div>
        </nav>

    );
}

export default Navigation;
