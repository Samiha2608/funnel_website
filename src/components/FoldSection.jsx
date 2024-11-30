import React from 'react';
import { FaStar, FaYoutube, FaInstagram, FaTiktok, FaLinkedin } from 'react-icons/fa';

const FoldSection = () => {
  const people = [
    'https://randomuser.me/api/portraits/men/32.jpg',
    'https://randomuser.me/api/portraits/women/44.jpg',
    'https://randomuser.me/api/portraits/men/43.jpg',
  ];

  return (
    <section className="relative bg-bgColor text-primaryText py-16 px-8 text-center overflow-hidden">
      {/* People Images */}
      <div className="mb-4 flex justify-center space-x-4">
        {people.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Person ${index + 1}`}
            className="w-12 h-12 rounded-full border-2 border-primaryAccent transform transition-transform duration-300 ease-in-out hover:scale-110"
          />
        ))}
      </div>

      {/* 5-Star Rating Block */}
      <div className="mb-4 flex justify-center">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="text-primaryAccent text-3xl" />
        ))}
      </div>

      {/* Trusted Text */}
      <p className="font-body text-lg mb-8">
        Trusted by <span className="text-primaryAccent">20+</span> brands & creators
      </p>

      {/* Title */}
      <h1 className="font-title font-bold text-5xl mb-4">
        We Solve problems of <span className="text-primaryAccent">Creators</span> <br /> who want to scale
      </h1>

      {/* Subtitle */}
      <p className="font-body text-lg mb-8">
        Scale your presence across Linkdln & Youtube strategic <br /> video content and a learn that has generated 50M+ organic views
      </p>

      {/* Buttons */}
      <div className="flex justify-center space-x-4">
        {/* Book a Call Button */}
        <button className="bg-buttonColor text-primaryText px-6 py-3 rounded-lg font-body transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_8px_15px_rgba(255,77,79,0.3)] active:scale-95 active:shadow-[0_4px_10px_rgba(255,77,79,0.5)]">
          Book a Call
        </button>

        {/* Tell Me More Button with Glassy Background */}
        <button className="backdrop-blur-lg bg-white/5 bg-opacity-50 text-primaryText px-6 py-3 rounded-lg font-body transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_8px_15px_rgba(255,77,79,0.3)] active:scale-95 active:shadow-[0_4px_10px_rgba(255,77,79,0.5)]">
          Tell Me More
        </button>
      </div>

      {/* Floating Icons with CSS animation */}
      <FaYoutube className="icon-move-youtube absolute text-red-600 text-5xl" />
      <FaInstagram className="icon-move-instagram absolute text-pink-500 text-5xl" />
      <FaTiktok className="icon-move-messenger absolute text-black-900 text-5xl" />
      <FaLinkedin className="icon-move-linkedin absolute text-blue-600 text-5xl" />
    </section>
  );
};

export default FoldSection;
