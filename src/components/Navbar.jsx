import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-[#190183] bg-opacity-13 font-inter p-4">
      {/* Logo as an image */}
      <img src="/src/assets/logo.png" alt="Envobyte Logo" className="w-32" />

      <ul className="hidden md:flex space-x-6 text-white">
        <li className="hover:text-[#ff693b] cursor-pointer">HOME</li>
        <li className="hover:text-[#ff693b] cursor-pointer">SERVICE</li>
        <li className="hover:text-[#ff693b] cursor-pointer">COMBO SALES</li>
        <li className="hover:text-[#ff693b] cursor-pointer">PORTFOLIO</li>
        <li className="hover:text-[#ff693b] cursor-pointer">ABOUT US</li>
        <li className="hover:text-[#ff693b] cursor-pointer">BLOGS</li>
      </ul>
      <button className="bg-[#ff693b] text-white px-4 py-2 rounded-md ">
        See Pricing
      </button>
    </nav>
  );
};

export default Navbar;



