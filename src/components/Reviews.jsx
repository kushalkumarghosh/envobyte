import React, { useState, useEffect } from "react";

const Reviews = () => {
    const [reviewsData, setReviewsData] = useState([]);

    useEffect(() => {
        fetch("/reviews.json")
            .then((response) => response.json())
            .then((data) => setReviewsData(data))
            .catch((error) => console.error("Error loading reviews:", error));
    }, []);

    return (
        <section className="py-12 bg-white text-gray-900 text-center">
            <h2 className="text-xl text-center text-[#0C89FF] uppercase font-semibold font-Raleway">
                Client Reviews
            </h2>
            <h3 className="text-4xl font-bold text-center text-gray-900 mt-2">
                Our Proud Clients
            </h3>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 justify-center">
                {reviewsData.slice(0, 6).map((review, index) => (
                    <div
                        key={review.id}
                        className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 w-[313.33px] h-[239px] mx-auto text-left"
                    >
                        <div className="flex">
                            {Array.from({ length: review.rating }, (_, i) => (
                                <img
                                    key={i}
                                    src="/assets/icons/Star.svg"
                                    alt="star"
                                    className="w-5 h-5"
                                />
                            ))}
                        </div>

                        <p className="text-gray-600 mt-3">{review.review}</p>

                        <div className="flex items-center mt-4">
                            <img
                                src={review.image}
                                alt={review.name}
                                className="w-12 h-12 rounded-full mr-3"
                            />
                            <div>
                                <h4 className="text-lg font-bold text-blue-700">{review.name}</h4>
                                <div className="flex items-center">
                                    <img
                                        src={review.platformLogo}
                                        alt={review.platform}
                                        className="w-4 h-4 mr-1"
                                    />
                                    <p className="text-gray-500 text-sm">From {review.platform}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-8 space-x-8">
                <button className="w-12 h-12 flex items-center justify-center border border-blue-500 text-blue-500 rounded-lg"> ❮ </button>
                <button className="w-12 h-12 flex items-center justify-center bg-orange-500 text-white rounded-lg"> ❯ </button>
            </div>


        </section>
    );
};

export default Reviews;

