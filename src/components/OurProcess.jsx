import React from "react";

const OurProcess = () => {
    return (
        <div className="relative bg-cover bg-center bg-no-repeat py-24 px-6 md:px-16" style={{ backgroundImage: "url('/assets/OurProcess.jpg')" }}>
            <div className="absolute inset-0 bg-[#001C6C] opacity-80"></div>

            <div className="relative text-center text-white z-10">
                <h4 className="text-sm uppercase tracking-widest font-raleway text-[#0C89FF]">How We Work</h4>
                <h2 className="text-3xl md:text-5xl font-bold mt-2 font-raleway">
                    Our Process For Delivering Results
                </h2>
                <p className="text-gray-300 mt-4 max-w-2xl mx-auto font-Barlow">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever.
                </p>
            </div>

            <div className="relative mt-16 flex flex-col items-center">
                <img src="/assets/OurProcess1.png" alt="Dashed Line" className="w-full max-w-4xl" />
            </div>

            <div className="relative z-10 text-center mt-12 font-inter">
                <button className="bg-[#FF693B] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition">
                    Contact Now
                </button>
            </div>
        </div>
    );
};

export default OurProcess;




