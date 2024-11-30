import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-4 z-50 bg-bgColor/10 text-primaryText py-2 mx-auto w-11/12 max-w-4xl rounded-2xl flex justify-between items-center px-2 md:px-3 backdrop-blur-md">
      <div className="font-title text-xl mr-4">Funnel</div>
      
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          className="focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-5 h-5 text-primaryText"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className={`md:flex flex-1 justify-center items-center ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-0 md:space-x-2 font-body list-none mt-2 md:mt-0">
          <li><a href="#short-form" className="hover:text-secondaryAccent">Short-form</a></li>
          <li><a href="#results" className="hover:text-secondaryAccent">Results</a></li>
          <li><a href="#services" className="hover:text-secondaryAccent">Services</a></li>
          <li><a href="#process" className="hover:text-secondaryAccent">Process</a></li>
          <li><a href="#faqs" className="hover:text-secondaryAccent">FAQs</a></li>
        </ul>
      </nav>
      
      {/* Button */}
      <button className="hidden md:inline-block bg-buttonColor text-primaryText px-4 py-2 ml-3 rounded-lg font-body transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_8px_15px_rgba(255,77,79,0.3)] active:scale-95 active:shadow-[0_4px_10px_rgba(255,77,79,0.5)]">
        Book a Call
      </button>
    </header>
  );
};

export default Header;
