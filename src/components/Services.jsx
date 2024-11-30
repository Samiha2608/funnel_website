import React from 'react';

const servicesData = [
  {
    title: 'YouTube Videos',
    description: 'YouTube videos made more engaging than ever for longer watch time and more subscribers.',
  },
  {
    title: 'Short Form Videos',
    description: 'Nail your Reels, TikToks and YouTube shorts to optimize engagement and shareability.',
  },
  {
    title: 'Thumbnail Design',
    description: 'Upto 80% higher click-through rates with top-notch graphics that lead to more views.',
  },
  {
    title: 'Channel Management',
    description: 'End-to-end growth strategy, SEO, maintenance, and analytics to grow your channel.',
  },
];

const Services = () => {
  return (
    <section className="bg-bgColor py-20 text-center">
      {/* Heading */}
      <div className="inline-block text-lg md:text-lg font-title text-primaryText mb-4 border border-white rounded-lg px-2 py-1">
Services
</div>

      {/* Subheading */}
      <h3 className="text-2xl md:text-5xl font-title text-primaryText mb-4">
      How can we help     <span className="text-primaryAccent">you?</span>
      </h3>

      {/* Description */}
      <p className="text-lg md:text-xl text-primaryText/90 font-body mb-12">
        From short-form videos, to long-form videos, to ad creatives, and VSLs, we've got you covered on every front.
      </p>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="p-8 rounded-lg shadow-lg text-center bg-gradient-to-tr from-secondaryAccent/20 via-secondaryAccent/80 to-secondaryAccent/20 text-primaryText transition-transform transform hover:scale-105"
          >
            <h4 className="text-3xl font-title mb-4">{service.title}</h4>
            <p className="text-lg font-body">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
