import React from 'react'

const Footer = () => {
    return (
        <div className=' bg-[#190183] text-white py-16 px-6'>
            <hr className="border-gray-600 mt-6" />
            <div className="mt-12 pt-6 grid md:grid-cols-5 gap-8 text-sm text-gray-300 max-w-6xl mx-auto">
                <div>
                    <img src='/src/assets/logo.png' alt='Envobyte Logo' className='w-32' />
                    <p className="mt-2">We are an IT Company. We help businesses bring ideas to life easily and affordably.</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white">Company</h3>
                    <ul className="mt-2 space-y-2">
                        <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                        <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-blue-400">Refund Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white">Learn More</h3>
                    <ul className="mt-2 space-y-2">
                        <li><a href="#" className="hover:text-blue-400">Combo Offer</a></li>
                        <li><a href="#" className="hover:text-blue-400">Service Industries</a></li>
                        <li><a href="#" className="hover:text-blue-400">Envobyte Apps</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white">Support</h3>
                    <ul className="mt-2 space-y-2">
                        <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
                        <li><a href="#" className="hover:text-blue-400">FAQ</a></li>
                        <li><a href="#" className="hover:text-blue-400">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
                    <ul className="mt-2 space-y-2">
                        <li className="flex items-center space-x-3">
                            <img src="/src/assets/icons/mail1.svg" alt="Email" className="w-5 h-5" />
                            <a href="mailto:support@envobyte.com" className="hover:text-blue-400">support@envobyte.com</a>
                        </li>
                        <li className="flex items-center space-x-3">
                            <img src="/src/assets/icons/whatsapp1.svg" alt="WhatsApp" className="w-5 h-5" />
                            <a href="tel:+16677772477" className="hover:text-blue-400">+1 (667) 777 2477</a>
                        </li>
                    </ul>
                    {/* Social Media Links */}
                    <div className="mt-4 flex justify-center space-x-4 mr-8">
                        <a href="#" className="text-white text-xl hover:text-blue-400">
                            <img src="/src/assets/icons/fb.svg" alt="Facebook" className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-white text-xl hover:text-blue-400">
                            <img src="/src/assets/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-white text-xl hover:text-blue-400">
                            <img src="/src/assets/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-white text-xl hover:text-blue-400">
                            <img src="/src/assets/icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-white text-xl hover:text-blue-400">
                            <img src="/src/assets/icons/pinterest.svg" alt="Pinterest" className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>

            <hr className="border-gray-600 mt-6" />

            <p className="mt-6 text-center text-gray-400 text-sm">@2025 - ENVOBYTE, All rights are reserved.</p>
        </div>
    )
}

export default Footer







