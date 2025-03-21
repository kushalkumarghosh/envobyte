import React, { useState, useEffect } from "react";

const TeamMembers = () => {
    const [teamMembersData, setTeamMembersData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const membersPerPage = 4;

    useEffect(() => {
        fetch("/teamMembers.json")
            .then((response) => response.json())
            .then((data) => setTeamMembersData(data))
            .catch((error) => console.error("Error loading team members data:", error));
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % teamMembersData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + teamMembersData.length) % teamMembersData.length);
    };

    return (
        <section className="py-12 bg-white text-gray-900">
            <h2 className="text-xl text-center text-blue-600 uppercase font-semibold font-raleway">
                Experienced Team
            </h2>
            <h3 className="text-4xl font-bold text-center text-gray-900 mt-2 font-inter">
                Our Team Members
            </h3>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                {teamMembersData.slice(currentIndex, currentIndex + membersPerPage).map((member) => (
                    <div key={member.id} className="shadow-lg rounded-lg overflow-hidden">
                        <img src={member.image} alt={member.name} className="w-full h-80 object-cover"
                            style={{ objectPosition: "center 10%" }} />
                        <div className="bg-blue-800 text-white p-4 font-inter">
                            <h4 className="text-lg font-bold">{member.name}</h4>
                            <p className="text-sm">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-8 space-x-8">
                <button
                    onClick={prevSlide}
                    className="w-12 h-12 flex items-center justify-center border border-blue-500 text-blue-500 rounded-lg"> ❮ </button>
                <button
                    onClick={nextSlide}
                    className="w-12 h-12 flex items-center justify-center bg-orange-500 text-white rounded-lg"> ❯ </button>
            </div>
        </section>
    );
};

export default TeamMembers;
