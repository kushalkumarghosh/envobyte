import React, { useState, useEffect } from "react";

const Services = () => {
    const [activeService, setActiveService] = useState("WEBSITE");
    const [serviceCards, setServiceCards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const servicesPerPage = 3;

    const services = ["WEBSITE", "UI/UX", "SEO", "LOGO DESIGN", "BANNER DESIGN", "GOOGLE ADS"];

    useEffect(() => {
        fetch("/services.json")
            .then((response) => response.json())
            .then((data) => setServiceCards(data))
            .catch((error) => console.error("Error loading services:", error));
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % serviceCards.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + serviceCards.length) % serviceCards.length);
    };

    return (
        <div className="bg-[#190183] text-white py-12 px-6 md:px-16 relative">
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-[#FF693B] uppercase text-sm font-semibold font-raleway">Digital Services</p>
                    <h2 className="text-4xl font-bold mt-2 font-inter">Check Our Available Services</h2>
                </div>
                <button className="bg-[#ff693b] text-white px-4 py-2 rounded-md font-inter font-semibold">
                    All Services
                </button>
            </div>

            {/* Service Navigation */}
            <div className="border-b border-gray-700 mt-6">
                <ul className="flex space-x-6 text-gray-400 uppercase text-sm font-medium">
                    {services.map((service) => (
                        <li
                            key={service}
                            className={`cursor-pointer pb-3 ${activeService === service ? "text-blue-500 font-bold border-b-2 border-blue-500" : ""}`}
                            onClick={() => setActiveService(service)}
                        >
                            {service}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Service Cards */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 font-inter">
                {serviceCards.slice(currentIndex, currentIndex + servicesPerPage).map((card, index) => (
                    <div key={index} className="bg-[#3158C733] p-6 rounded-2xl shadow-lg text-center relative">
                        <img src={card.image} alt={card.title} className="mx-auto mb-6 max-w-full h-auto" />
                        <h3 className="text-2xl font-semibold mb-2 text-[#FFFFFF]">{card.title}</h3>
                        <p className="text-[#FFFFFF] mb-6 font-normal">{card.description}</p>
                        <div className="flex justify-center space-x-4">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">Portfolio</button>
                            <button className="bg-transparent border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 px-4 py-2 rounded-full">Order</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center mt-8 space-x-8">
                <button onClick={prevSlide} className="w-12 h-12 flex items-center justify-center border border-blue-500 text-blue-500 rounded-lg">
                    ❮
                </button>
                <button onClick={nextSlide} className="w-12 h-12 flex items-center justify-center bg-orange-500 text-white rounded-lg">
                    ❯
                </button>
            </div>
        </div>
    );
};

export default Services;
