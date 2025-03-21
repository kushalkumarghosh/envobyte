import React from "react";

const Contact = () => {
    return (
        <div className=" bg-[#190183] text-white py-16 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                <div className="bg-[#0A2C8C] p-6 rounded-lg shadow-lg">
                    <form className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-300 mb-1">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-white/10 p-3 rounded-md text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 mb-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="support@envobyte.com"
                                    className="w-full bg-white/10 p-3 rounded-md text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-300 mb-1">Phone</label>
                                <input
                                    type="tel"
                                    placeholder="+1 (667) 777 2477"
                                    className="w-full bg-white/10 p-3 rounded-md text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 mb-1">Company</label>
                                <input
                                    type="text"
                                    placeholder="Envobyte"
                                    className="w-full bg-white/10 p-3 rounded-md text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-300 mb-1">Message</label>
                            <textarea
                                placeholder="Type your message here..."
                                className="w-full bg-white/10 p-3 rounded-md text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 h-28"
                            ></textarea>
                        </div>
                        <div className="flex justify-start">
                            <button className="bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-md text-white font-semibold flex items-center justify-center transition-all text-sm">
                                Send message →
                            </button>
                        </div>
                    </form>

                </div>

                <div>
                    <h2 className="text-3xl font-bold">Let us know what you think!</h2>
                    <p className="text-gray-300 mt-2">
                        Got something on your mind? Share it with us! Drop a message, and we'll respond quickly to assist you.
                    </p>

                    <div className="mt-6 space-y-4">
                        <div className="flex items-center space-x-4">
                            <img src="/src/assets/icons/mail_.svg" alt="Email Icon" className="w-6 h-6" />
                            <span className="text-gray-300">
                                <strong>Business:</strong> <a href="mailto:support@envobyte.com" className="text-blue-400">support@envobyte.com</a>
                            </span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <img src="/src/assets/icons/whatsapp_.svg" alt="WhatsApp Icon" className="w-6 h-6" />
                            <span className="text-gray-300">
                                <strong>WhatsApp:</strong> <a href="tel:+16677772477" className="text-blue-400">+1 (667) 777 2477</a>
                            </span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <img src="/src/assets/icons/linkedin_.svg" alt="LinkedIn Icon" className="w-6 h-6" />
                            <span className="text-gray-300">
                                <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/company/envobyte" className="text-blue-400">www.linkedin.com/company/envobyte</a>
                            </span>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Contact;


