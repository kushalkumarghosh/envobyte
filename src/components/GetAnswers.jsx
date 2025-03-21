import React, { useEffect, useState } from 'react';

const GetAnswers = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('/getAnswers.json')
            .then((response) => response.json())
            .then((data) => setCards(data))
            .catch((error) => console.error('Error loading answers:', error));
    }, []);

    return (
        <div className="bg-white text-black py-16 px-6 md:px-16">
            <div className="text-center">
                <p className="text-blue-500 uppercase text-sm font-bold">More Details</p>
                <h2 className="text-4xl text-[#0A2C8C] font-bold mt-2">Get Your Answers</h2>
            </div>

            {/* Cards Section */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 font-inter">
                {cards.map((item, index) => (
                    <div
                        key={index}
                        className={`p-8 rounded-2xl shadow-lg text-center ${index === 0 ? 'bg-[#0A2C8C] text-white' : 'bg-white'}`}
                    >
                        {item.img && <img src={item.img} alt={item.title} className="mx-auto mb-4" />}
                        <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                        <p className={`${index === 0 ? 'text-[#65B5FF]' : 'text-[#002AA3]'} mb-4`}>{item.subtitle}</p>
                        <p className={`${index === 0 ? 'text-gray-200' : 'text-gray-600'}`}>{item.description}</p>
                    </div>
                ))}
            </div>

            {/* Button Section */}
            <div className="text-center mt-12">
                <button className="bg-[#ff693b] text-white px-4 py-2 rounded-md ">
                    See Pricing
                </button>
            </div>
        </div>
    );
};

export default GetAnswers;



