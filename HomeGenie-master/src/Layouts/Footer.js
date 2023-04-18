import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="max-w-5xl mx-auto flex flex-wrap justify-between px-4 sm:px-6 lg:px-8">
                <div className="w-full sm:w-auto mb-8 sm:mb-0">
                    <h3 className="text-2xl font-bold mb-2">Logo</h3>
                    <p className="text-gray-400">Tagline goes here</p>
                </div>
                <div className="w-full sm:w-1/4 mb-8 sm:mb-0">
                    <h3 className="text-xl font-bold mb-4">Navigation</h3>
                    <ul className="list-none">
                        <li className="mb-2">
                            <a href="#" className="text-gray-400 hover:text-white">
                                Home
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-400 hover:text-white">
                                About Us
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-400 hover:text-white">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="w-full sm:w-1/4 mb-8 sm:mb-0">
                    <h3 className="text-xl font-bold mb-4">Social Media</h3>
                    <ul className="list-none">
                        <li className="mb-2">
                            <a href="#" className="text-gray-400 hover:text-white">
                                Facebook
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-400 hover:text-white">
                                Twitter
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-400 hover:text-white">
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="w-full sm:w-1/4 mb-8 sm:mb-0">
                    <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                    <form className="flex flex-col">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="border border-gray-400 p-2 mb-2 rounded"
                        />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
                <p className="text-gray-400 text-sm">© 2022 HomeGenie. All rights reserved.</p>
                <ul className="list-none flex flex-wrap">
                    <li className="mb-2 mr-4">
                        <a href="#" className="text-gray-400 hover:text-white">
                            Terms of Use
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="text-gray-400 hover:text-white">
                            Privacy Policy
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};




export default Footer