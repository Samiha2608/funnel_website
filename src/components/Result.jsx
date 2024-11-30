import React from 'react';

const resultsData = [
  {
    name: 'Brand 1',
    imageUrl: '/images/pic5.jpg',
    followers: 'Added over 70K+ followers',
    subscribers: '10K+ Subscribers',
    views: 'Generated 10M+ Views',
  },
  {
    name: 'Brand 2',
    imageUrl: '/images/pic8.jpg',
    followers: 'Added over 70K+ followers',
    subscribers: '10K+ Subscribers',
    views: 'Generated 10M+ Views',
  },
  {
    name: 'Brand 3',
    imageUrl: '/images/pic9.jpg',
    followers: 'Added over 70K+ followers',
    subscribers: '10K+ Subscribers',
    views: 'Generated 10M+ Views',
  },
];

const Result = () => {
  return (
    <section id="results" className="bg-bgColor py-20 text-center relative overflow-hidden">
      {/* Heading */}
      <div className="inline-block text-lg md:text-lg font-title text-primaryText mb-4 border border-white rounded-lg px-4 py-1">
  Result
</div>



      {/* Subheading */}
      <h3 className="text-2xl md:text-5xl font-title text-primaryText mb-6">
      Results speak for     <span className="text-primaryAccent">themselves.</span>
      </h3>

      {/* Description */}
      <p className="text-md md:text-xl text-primaryText/90 font-body mb-12">
      We've worked across a number of industries and have achieved some <br /> incredible results with some incredible people and brands.
      </p>

      {/* Marquee of Cards */}
      <div className="relative flex overflow-hidden">
        {/* Left and Right Blur Effect */}
        <div className="absolute top-0 left-0 h-full w-64 bg-gradient-to-r from-bgColor via-bgColor to-transparent"></div>
        <div className="absolute top-0 right-0 h-full w-64 bg-gradient-to-l from-bgColor via-bgColor to-transparent"></div>

        <div className="flex space-x-8 animate-marquee whitespace-nowrap">
          {[...resultsData, ...resultsData, ...resultsData].map((result, index) => (
            <div
              key={index}
              className="relative w-96 h-96 flex-shrink-0 overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={result.imageUrl}
                alt={result.name}
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute bottom-0 left-0 right-0 text-primaryText p-4 text-center">
                <h4 className="text-xl font-title">{result.name}</h4>
                <p className="text-base font-body mt-1">{result.followers}</p>
                <div className="flex justify-between mt-3 text-sm font-body">
                  <span className="px-4 py-1 border border-gray-300 rounded-md">
                    {result.subscribers}
                  </span>
                  <span className="px-4 py-1 border border-gray-300 rounded-md">
                    {result.views}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Result;
