import React, { useState, useEffect } from "react";

const FAQSection = () => {
    const [faqs, setFaqs] = useState([]);
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        fetch("/faqs.json")
            .then((response) => response.json())
            .then((data) => setFaqs(data))
            .catch((error) => console.error("Error loading FAQs:", error));
    }, []);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="max-w-2xl mx-auto my-12 p-6 font-inter">
            <h2 className="text-3xl font-bold text-center text-blue-900">
                Frequently Asked Questions
            </h2>
            <div className="mt-6 space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={faq.id}
                        className="border-b border-gray-300 cursor-pointer"
                    >
                        <div
                            className={`flex justify-between items-center py-4 ${openIndex === index ? "text-blue-700 font-bold" : "text-gray-800 font-semibold"}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="flex gap-2">
                                <span className="text-blue-600">{`0${faq.id}`}</span>
                                {faq.question}
                            </span>
                            <span className="text-lg">
                                {openIndex === index ? (
                                    <img
                                        src="/src/assets/icons/close.svg"
                                        alt="Close Icon"
                                        className="w-4 h-4 text-blue-700"
                                    />
                                ) : (
                                    <img
                                        src="/src/assets/icons/plus.svg"
                                        alt="Plus Icon"
                                        className="w-4 h-4 text-blue-700"
                                    />
                                )}
                            </span>
                        </div>
                        {openIndex === index && (
                            <p className="text-gray-600 px-4 pb-4">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQSection;
