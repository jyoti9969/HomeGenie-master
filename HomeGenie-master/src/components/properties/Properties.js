import React from "react";
import PremiumPropertyListings from "./PremiumPropertyListings";

import Residentail_1 from "../../images/Residentail/Residentail11.jpg"
import Residentail_2 from "../../images/Residentail/Residentail21.jpg"

const properties = [
    {
        id: 1,
        image: Residentail_1,
        title: "Luxury Apartment in Mumbai",
        location: "Bandra, Mumbai",
        price: 3000,
        tags: ["2 Bedrooms", "2 Bathrooms", "Balcony"],
    },
    {
        id: 2,
        image: Residentail_2,
        title: "Modern Townhouse in Bangalore",
        location: "Koramangala, Bangalore",
        price: 2500,
        tags: ["3 Bedrooms", "2 Bathrooms", "Parking"],
    },
    {
        id: 3,
        image: Residentail_1,
        title: "Spacious Villa in Goa",
        location: "Candolim, Goa",
        price: 4000,
        tags: ["4 Bedrooms", "4 Bathrooms", "Swimming Pool"],
    },
    {
        id: 4,
        image: Residentail_1,
        title: "Luxury Apartment in Mumbai",
        location: "Bandra, Mumbai",
        price: 3000,
        tags: ["2 Bedrooms", "2 Bathrooms", "Balcony"],
    },
    {
        id: 5,
        image: Residentail_2,
        title: "Modern Townhouse in Bangalore",
        location: "Koramangala, Bangalore",
        price: 2500,
        tags: ["3 Bedrooms", "2 Bathrooms", "Parking"],
    },
    {
        id: 6,
        image: Residentail_1,
        title: "Spacious Villa in Goa",
        location: "Candolim, Goa",
        price: 4000,
        tags: ["4 Bedrooms", "4 Bathrooms", "Swimming Pool"],
    },
];

const Properties = () => {
    return (
        <div className="container mx-auto py-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Premium Property Listings</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {properties.map((property) => (
                    <PremiumPropertyListings
                        key={property.id}
                        image={property.image}
                        title={property.title}
                        location={property.location}
                        price={property.price}
                        tags={property.tags}
                    />
                ))}
            </div>
        </div>
    );
};

export default Properties;
