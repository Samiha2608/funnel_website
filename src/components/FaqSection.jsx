import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
  {
    question: 'What services does your agency provide?',
    answer:
      'We specialize in video editing, YouTube channel management, short-form and long-form video production, ad creatives, and more.',
  },
  {
    question: 'How long does it take to complete a project?',
    answer:
      'The turnaround time depends on the complexity of the project, but we pride ourselves on delivering high-quality work within tight deadlines.',
  },
  {
    question: 'What makes your agency different?',
    answer:
      'Our agency is known for tailoring services to individual client needs, delivering creative and engaging video content with a strategic approach.',
  },
  {
    question: 'How can I contact your agency?',
    answer:
      'You can contact us via our contact form on the website or reach us through email and phone. We respond promptly to all inquiries.',
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if clicked again
    } else {
      setActiveIndex(index); // Open the clicked one
    }
  };

  return (
    <section className="bg-bgColor py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          
          <h2 className="text-3xl md:text-4xl font-title text-primaryAccent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-md md:text-lg text-primaryText/90 font-body">
            Got questions? We’ve got answers. Here’s everything you need to know.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div key={index} className="border border-primaryAccent rounded-lg shadow-lg">
              <div
                className="flex justify-between items-center cursor-pointer p-4"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg md:text-xl font-body text-primaryText">{faq.question}</h3>
                <span className="text-primaryAccent">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </div>

              {/* Dropdown Answer */}
              <div
                className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="p-4 text-primaryText/80 font-body">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
