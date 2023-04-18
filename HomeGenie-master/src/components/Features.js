import React from "react";
import { FaSearch, FaCheck, FaRegEnvelope, FaMapMarkedAlt, FaBuilding } from "react-icons/fa";

import image1 from "../images/BuyPropertySearch.svg";
import image2 from "../images/NewLaunch.svg";
import image3 from "../images/ExploreSG.svg";
import image4 from "../images/24-hours-support.png";
import image5 from "../images/PropertyRentals.svg";

const Features = () => {
    return (
        <section className="py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Us?</h2>
                <div className="flex flex-wrap -mx-4 justify-center">
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div className="bg-white rounded-lg shadow h-full overflow-hidden">
                            <img src={image1} alt="Easy Search" className="w-full h-56 object-cover" />
                            
                            <div className="p-6">
                                <div className="rounded-full bg-blue-100 p-4 mb-4 inline-block">
                                    <FaSearch className="text-blue-500 w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Search</h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Our website makes it easy to search for rental properties that fit your needs and budget.
                                </p>
                                {/* <a href="#" className="text-blue-500 font-bold hover:underline">Learn more &rarr;</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div className="bg-white rounded-lg shadow h-full overflow-hidden">
                            <img src={image5} alt="Verified Listings" className="w-full h-56 object-cover" />
                            <div className="p-6">
                                <div className="rounded-full bg-blue-100 p-4 mb-4 inline-block">
                                    <FaCheck className="text-blue-500 w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Verified Listings</h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    All rental properties on our website are verified and come with detailed descriptions and photos.
                                </p>
                                {/* <a href="#" className="text-blue-500 font-bold hover:underline">Learn more &rarr;</a> */}
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div className="bg-white rounded-lg shadow h-full overflow-hidden">
                            <img src={image3} alt="Map Search" className="w-full h-56 object-cover" />
                            <div className="p-6">
                                <div className="rounded-full bg-blue-100 p-4 mb-4 inline-block">
                                    <FaMapMarkedAlt className="text-blue-500 w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Map Search</h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Our website offers a map search feature to help you easily find rental properties in your desired location.
                                </p>
                                {/* <a href="#" className="text-blue-500 font-bold hover:underline">Learn more &rarr;</a> */}
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div className="bg-white rounded-lg shadow h-full overflow-hidden">
                            <img src={image2} alt="Multiple Options" className="w-full h-56 object-cover" />
                            <div className="p-6">
                                <div className="rounded-full bg-blue-100 p-4 mb-4 inline-block">
                                    <FaBuilding className="text-blue-500 w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Multiple Options</h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    We offer a wide variety of rental properties, including apartments, houses, and townhouses, to meet your needs.
                                </p>
                                {/* <a href="#" className="text-blue-500 font-bold hover:underline">Learn more &rarr;</a> */}
                            </div>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                        <div className="bg-white rounded-lg shadow h-full overflow-hidden">
                            <img src={image4} alt="24/7 Support" className="w-full h-52 object-contain pt-2" />
                            <div className="p-6">
                                <div className="rounded-full bg-blue-100 p-4 mb-4 inline-block">
                                    <FaRegEnvelope className="text-blue-500 w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    All rental properties on our website are verified and come with detailed descriptions and photos.
                                </p>
                                {/* <a href="#" className="text-blue-500 font-bold hover:underline">Learn more &rarr;</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};





// import React from "react";
// import { FaSearch, FaCheck, FaRegEnvelope } from "react-icons/fa";

// const Features = () => {
//     return (
//         <section className="py-12 bg-gray-100">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Us?</h2>
//                 <div className="flex flex-wrap -mx-4">
//                     <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
//                         <div className="bg-white rounded-lg shadow p-6 h-full flex flex-col justify-between">
//                             <div>
//                                 <div className="rounded-full bg-blue-100 p-4 mb-4 inline-block">
//                                     <FaSearch className="text-blue-500 w-8 h-8" />
//                                 </div>
//                                 <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Search</h3>
//                                 <p className="text-gray-700 leading-relaxed mb-3">
//                                     Our website makes it easy to search for rental properties that fit your needs and budget.
//                                 </p>
//                             </div>
//                             <a href="#" className="text-blue-500 font-bold hover:underline">Learn more &rarr;</a>
//                         </div>
//                     </div>
//                     <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
//                         <div className="bg-white rounded-lg shadow p-6 h-full flex flex-col justify-between">
//                             <div>
//                                 <div className="rounded-full bg-blue-100 p-4 mb-4 inline-block">
//                                     <FaCheck className="text-blue-500 w-8 h-8" />
//                                 </div>
//                                 <h3 className="text-xl font-bold text-gray-900 mb-3">Verified Listings</h3>
//                                 <p className="text-gray-700 leading-relaxed mb-3">
//                                     All rental properties on our website are verified and come with detailed descriptions and photos.
//                                 </p>
//                             </div>
//                             <a href="#" className="text-blue-500 font-bold hover:underline">Learn more &rarr;</a>
//                         </div>
//                     </div>
//                     <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
//                         <div className="bg-white rounded-lg shadow p-6 h-full flex flex-col justify-between">
//                             <div>
//                                 <div className="rounded-full bg-blue-100 p-4 mb-4 inline-block">
//                                     <FaRegEnvelope className="text-blue-500 w-8 h-8" />
//                                 </div>
//                                 <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
//                                 <p className="text-gray-700 leading-relaxed mb-3">
//                                     Our customer support team is available 24/7 to help you with any questions or concerns.
//                                 </p>
//                             </div>
//                             <a href="#" className="text-blue-500 font-bold hover:underline">Learn more &rarr;</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

export default Features;
