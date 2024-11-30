import React from 'react';

const VisionStatement = () => {
  return (
    <section className="bg-gradient-to-r from-bgColor to-secondaryButtonColor py-20 text-center relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 flex justify-center items-center">
        <div className="bg-gradient-to-r from-primaryAccent via-secondaryAccent to-primaryAccent w-96 h-96 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Vision Statement */}
        
        <h3 className="text-2xl md:text-5xl font-title text-primaryText mb-6">
    Our    <span className="text-primaryAccent">Vision</span>
      </h3>
        <p className="mt-6 text-lg md:text-xl text-primaryText/90 font-body leading-relaxed">
          To be the leading provider of innovative solutions, empowering businesses
          and individuals to achieve their goals with unmatched excellence and 
          dedication.
        </p>

        {/* Book a Call Button */}
        <button className="mt-10 bg-buttonColor text-primaryText px-8 py-3 rounded-lg font-body text-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_8px_15px_rgba(229,153,52,0.3)] active:scale-95 active:shadow-[0_4px_10px_rgba(229,153,52,0.5)]">
          Book a Call
        </button>
      </div>
    </section>
  );
};

export default VisionStatement;
