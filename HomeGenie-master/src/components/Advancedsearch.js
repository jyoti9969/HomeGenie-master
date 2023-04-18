import React from "react";
import { FaSearchLocation } from "react-icons/fa";

const Advancedsearch = () => {
    return (
        <div
            className="relative bg-gray-100 md:min-h-[24rem]  md:h-[40vh]  bg-cover bg-center"
            style={{ backgroundImage: "url('https://assets.helloaddress.com/ui/build/images/projectDefault20190228.jpg')" }}
        >
            <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            <div className="relative max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:mr-8">
                    
                    <h2 className="text-5xl font-bold text-white mb-4 text-center">Find Your Property</h2>
                    <p className="text-lg text-white mb-6 text-center">
                        Map-based search. 100% verified listings. Real property pictures.
                    </p>
                    <form className="flex flex-col flex-wrap md:flex-row md:justify-center ">
                        <div className="mb-4 md:w-48 md:mr-4">
                            {/* <label className="block text-white font-bold mb-2" htmlFor="propertyType">
                                Property Type
                            </label> */}
                            <select className= "h-12 w-full border border-gray-400 p-2 rounded-md" id="propertyType">
                                <option value="">Property Type</option>
                                <option value="apartment">Apartment</option>
                                <option value="house">House</option>
                                <option value="townhouse">Townhouse</option>
                            </select>
                        </div>
                        <div className="mb-4 md:w-48 md:mr-4  h-6">
                            {/* <label className="block text-white font-bold mb-2" htmlFor="districts">
                                Districts
                            </label> */}
                            <select className=" h-12  w-full border border-gray-400 p-2 rounded-md" id="districts">
                                <option value="">District</option>                                <option value="central">Central</option>
                                <option value="eastern">Eastern</option>
                                <option value="northern">Northern</option>
                                <option value="southern">Southern</option>
                                <option value="western">Western</option>
                            </select>
                        </div>
                        <div className=" mb-4 md:w-48">
                            {/* <label className="block text-white font-bold mb-2" htmlFor="town">
                                Town
                            </label> */}
                            <input
                                className="h-12 w-full border border-gray-400 p-2 rounded-md"
                                type="text"
                                id="town"
                                placeholder="Enter a town or city"
                            />
                        </div>
                        <button className="w-full md:w-1/2 m-0 border-0 p-3 bg-blue-500 hover:bg-blue-700 text-white font-bold   ">
                            <FaSearchLocation className="w-8 h-8 p-1 inline" />
                        </button>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Advancedsearch;
