import React from 'react';

const PreviousWork = () => {
    const categories = ["UI/UX", "WEBSITE", "SEO", "LOGO DESIGN", "BANNER DESIGN", "GOOGLE ADS"];

    const portfolioImages = [
        "/src/assets/pw0.png",
        "/src/assets/pw1.png",
        "/src/assets/pw2.png",
        "/src/assets/pw3.png",
        "/src/assets/pw4.png",
        "/src/assets/pw5.png",
        "/src/assets/pw6.png",
        "/src/assets/pw7.png"
    ];

    return (
        <div className="bg-gray-100 py-16 px-6 md:px-16 relative">
            <div className="flex justify-between items-center">
                <h2 className="text-4xl font-bold">Check Our Previous Work</h2>
                <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">All Portfolio</button>
            </div>

            <div className="flex space-x-6 mt-8 text-sm uppercase">
                {categories.map((category) => (
                    <button key={category} className="text-gray-500 hover:text-blue-500">{category}</button>
                ))}
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {portfolioImages.map((image, index) => (
                    <div key={index} className="h-60 rounded-lg overflow-hidden shadow-lg">
                        <img src={image} alt={`Portfolio ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>

            <div className="relative mt-12 flex justify-center items-center">

                <div className="flex justify-center mt-8 space-x-8">
                    <button className="w-12 h-12 flex items-center justify-center border border-blue-500 text-blue-500 rounded-lg">
                        ❮
                    </button>
                    <button className="w-12 h-12 flex items-center justify-center bg-orange-500 text-white rounded-lg">
                        ❯
                    </button>
                </div>

                <div className="absolute right-0 -bottom-6 text-gray-500 text-sm flex items-center font-raleway">
                    <span className="mr-4">CREATIVE PORTFOLIO</span>
                    <span className="w-24 border-t border-gray-500"></span>
                </div>
            </div>
        </div>
    );
};

export default PreviousWork;











