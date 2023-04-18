import React from "react";
import { Link } from "react-router-dom";

const PremiumPropertyListings = ({ image, title, location, price, tags }) => {
    return (
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-64 object-cover object-center" src={image} alt={title} />
            <div className="px-6 py-4">
                <div className="mb-2">
                    <h2 className="text-xl font-bold text-gray-900">{title}</h2>
                    <p className="text-sm text-gray-700">{location}</p>
                </div>
                <div className="mb-2">
                    <p className="text-lg font-bold text-gray-900">&#x20B9; {price}/month</p>
                </div>
                <div className="mb-4">
                    {tags.map((tag) => (
                        <span key={tag} className="mr-2 mt-2 inline-flex items-center px-3 py-0.5 rounded-full bg-gray-200 text-gray-800">
                            {tag}
                        </span>
                    ))}
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <Link to="/list">View Details</Link>
                </button>
            </div>
        </div>
    );
};

export default PremiumPropertyListings;
