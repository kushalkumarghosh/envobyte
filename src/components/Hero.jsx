import React from "react";
import WebsiteIcon from "../assets/icons/icon0.svg";
import SatisfactionIcon from "../assets/icons/icon1.svg";
import TeamIcon from "../assets/icons/icon2.svg";
import ClientsIcon from "../assets/icons/icon3.svg";


const Hero = () => {
    return (
        <section className="bg-[#190183] bg-opacity-13 text-white pt-0 pb-12 px-4 md:px-16 pt-8">
            <div className="">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold uppercase font-raleway">
                        DIGITAL SERVICES
                    </h2>
                    <p className="text-lg mt-2 font-extrabold font-raleway">BUILDING YOUR EMPIRE DIGITALLY</p>
                    <div className="flex justify-center gap-4 mt-6 font-inter font-semibold	">
                        <button className="bg-[#ff693b] px-6 py-2 rounded-md min-w-[238px]">
                            SEE PRICING
                        </button>
                        <button className="border border-white px-6 py-2 rounded-md min-w-[238px]">
                            BOOK AN APPOINTMENT
                        </button>
                    </div>
                </div>

                {/* Stats Section */}

                <div className="flex flex-wrap justify-center items-center text-[#FFFFFF] mt-12 font-inter font-semibold">
                    <div className="flex items-center space-x-3 px-6">
                        <img src={WebsiteIcon} alt="Websites Built" className="w-11 h-11" />
                        <div>
                            <span className="text-2xl font-bold">2K+</span>
                            <p className="text-sm">Websites built</p>
                        </div>
                    </div>

                    <div className="hidden md:block h-10 w-px bg-gray-500"></div>

                    <div className="flex items-center space-x-3 px-6">
                        <img src={SatisfactionIcon} alt="Client Satisfaction" className="w-11 h-11" />
                        <div>
                            <span className="text-2xl font-bold">97%</span>
                            <p className="text-sm">Client satisfaction</p>
                        </div>
                    </div>

                    <div className="hidden md:block h-10 w-px bg-gray-500"></div>

                    <div className="flex items-center space-x-3 px-6">
                        <img src={TeamIcon} alt="Team Members" className="w-11 h-11" />
                        <div>
                            <span className="text-2xl font-bold">25+</span>
                            <p className="text-sm ">Team members</p>
                        </div>
                    </div>

                    <div className="hidden md:block h-10 w-px bg-gray-500"></div>

                    <div className="flex items-center space-x-3 px-6">
                        <img src={ClientsIcon} alt="Amazing Clients" className="w-11 h-11" />
                        <div>
                            <span className="text-2xl font-bold">500+</span>
                            <p className="text-sm">Amazing clients</p>
                        </div>
                    </div>
                </div>

                {/* Image */}
                <div className="mt-12 flex justify-center">
                    <img
                        src="/src/assets/hero_image.png"
                        alt="Envobyte Team"
                        className="rounded-lg shadow-lg w-full md:w-3/4"
                    />
                </div>
            </div>
        </section >
    );
};

export default Hero;



