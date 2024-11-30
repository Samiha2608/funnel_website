import React from 'react';

const companies = [
  { name: 'Company 1', logoUrl: '/images/company/company1.jpg' },
  { name: 'Company 2', logoUrl: '/images/company/company2.jpg' },
  { name: 'Company 3', logoUrl: '/images/company/company3.jpg' },
  { name: 'Company 4', logoUrl: '/images/company/company4.jpg' },
  { name: 'Company 5', logoUrl: '/images/company/company5.jpg' },
  { name: 'Company 6', logoUrl: '/images/company/comapny6.jpg' },
];

const Companies = () => {
  return (
    <div className="relative bg-bgColor py-10 overflow-hidden text-center">
   

      {/* Subheading */}
      <div className="inline-block text-lg md:text-lg font-title text-primaryText mb-4 border border-white rounded-lg px-2 py-1">
  Companies
</div>
      <h3 className="text-2xl md:text-5xl font-title text-primaryText mb-8">
      <span className="text-primaryAccent">Compaines</span> we have worked with
      </h3>

      {/* Description */}
      <p className="text-sm md:text-sm text-primaryText/50 font-body mb-12">
      you are in good hands:
      </p>
      {/* Left Blur Effect */}
      <div className="absolute top-0 left-0 h-full w-64 bg-gradient-to-r from-bgColor to-transparent z-20"></div>

      {/* Right Blur Effect */}
      <div className="absolute top-0 right-0 h-full w-64 bg-gradient-to-l from-bgColor to-transparent z-20"></div>

      <div className="flex items-center space-x-8 animate-marquee whitespace-nowrap">
        {/* Render the company logos twice to ensure continuous scrolling */}
        {companies.concat(companies).map((company, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={company.logoUrl}
              alt={company.name}
              className="h-24 w-64 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
