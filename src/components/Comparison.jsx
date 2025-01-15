import React from 'react';
import { FaRegCheckCircle, FaRegTimesCircle } from 'react-icons/fa';

const Comparison = () => {
  return (
    <section className="bg-bgColor py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <div className="inline-block text-lg md:text-lg font-title text-primaryText mb-4 border border-white rounded-lg px-2 py-1">
          Comparison
        </div>

        <h2 className="text-3xl md:text-4xl font-title text-primaryAccent mb-4">
          How We Stand Out
        </h2>
        <p className="text-md md:text-lg text-primaryText/90 font-body">
          A clear contrast between typical agencies and our premium services.
        </p>
      </div>

      {/* Comparison Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-0">
        {/* Other Companies Section */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-title text-primaryAccent mb-6">
            Other Companies
          </h3>
          <div className="p-4 bg-gradient-to-tl from-gray-700 to-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 max-w-sm w-full">
            <ul className="space-y-4 text-primaryText/80 font-body">
              <li className="flex items-center gap-4 p-4 bg-secondaryButtonColor border border-dashed border-primaryAccent rounded-lg">
                <FaRegTimesCircle className="text-xl text-primaryAccent" />
                <p>One-size-fits-all solutions</p>
              </li>
              <li className="flex items-center gap-4 p-4 bg-secondaryButtonColor border border-dashed border-primaryAccent rounded-lg">
                <FaRegTimesCircle className="text-xl text-primaryAccent" />
                <p>Basic video editing with minimal creativity</p>
              </li>
              <li className="flex items-center gap-4 p-4 bg-secondaryButtonColor border border-dashed border-primaryAccent rounded-lg">
                <FaRegTimesCircle className="text-xl text-primaryAccent" />
                <p>No personalization, just templates</p>
              </li>
              <li className="flex items-center gap-4 p-4 bg-secondaryButtonColor border border-dashed border-primaryAccent rounded-lg">
                <FaRegTimesCircle className="text-xl text-primaryAccent" />
                <p>Slow turnaround times</p>
              </li>
              <li className="flex items-center gap-4 p-4 bg-secondaryButtonColor border border-dashed border-primaryAccent rounded-lg">
                <FaRegTimesCircle className="text-xl text-primaryAccent" />
                <p>Lack of strategic direction</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Our Agency Section */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-title text-primaryAccent mb-6">
            Our Agency
          </h3>
          <div className="p-4 bg-gradient-to-br from-secondaryAccent/10 via-secondaryAccent/20 to-secondaryAccent/80 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 max-w-sm w-full">
            <ul className="space-y-4 text-primaryText font-body">
              <li className="flex items-center gap-4 p-4 bg-secondaryButtonColor border border-solid border-primaryAccent rounded-lg">
                <FaRegCheckCircle className="text-xl text-primaryAccent" />
                <p>Tailored, client-specific solutions</p>
              </li>
              <li className="flex items-center gap-4 p-4 bg-secondaryButtonColor border border-solid border-primaryAccent rounded-lg">
                <FaRegCheckCircle className="text-xl text-primaryAccent" />
                <p>Creative and engaging video production</p>
              </li>
              <li className="flex items-center gap-4 p-4 bg-secondaryButtonColor border border-solid border-primaryAccent rounded-lg">
                <FaRegCheckCircle className="text-xl text-primaryAccent" />
                <p>100% personalized designs for your brand</p>
              </li>
              <li className="flex items-center gap-4 p-4 bg-secondaryButtonColor border border-solid border-primaryAccent rounded-lg">
                <FaRegCheckCircle className="text-xl text-primaryAccent" />
                <p>Fast delivery with attention to detail</p>
              </li>
              <li className="flex items-center gap-4 p-4 bg-secondaryButtonColor border border-solid border-primaryAccent rounded-lg">
                <FaRegCheckCircle className="text-xl text-primaryAccent" />
                <p>Strategic planning and execution</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
