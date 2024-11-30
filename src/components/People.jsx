import React from 'react';

const people = [
  {
    name: 'Person 1',
    imageUrl: '/images/pic5.jpg', // Replace with actual URLs
  },
  {
    name: 'Person 2',
    imageUrl: '/images/pic8.jpg',
  },
  {
    name: 'Person 3',
    imageUrl: '/images/pic9.jpg',
  },
  {
    name: 'Person 4',
    imageUrl: '/images/pic10.jpg',
  },
];

const People = () => {
  return (
    <div className="flex flex-wrap justify-center gap-0 py-10 bg-bgColor from-green-200 to-white">
      {people.map((person, index) => (
        <div
          key={index}
          className="relative w-72 h-96 transform transition-transform duration-300 rounded-[36px] border-4 shadow-lg hover:scale-105 sm:w-72 sm:h-96 xs:w-48 xs:h-64"
          style={{
            borderColor: '#2C272E', // Border color
            transform: `rotate(${index % 2 === 0 ? '-4deg' : '4deg'})`,
            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
          }}
        >
          <img
            src={person.imageUrl}
            alt={person.name}
            className="w-full h-full object-cover rounded-[32px] transition-shadow duration-300 hover:shadow-[0_20px_30px_rgba(229,153,52,0.6)]"
          />
        </div>
      ))}
    </div>
  );
};

export default People;
