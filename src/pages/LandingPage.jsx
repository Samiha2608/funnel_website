import React from 'react';
import Header from '../components/Header';
import ShortForm from '../components/ShortForm';
import Result from '../components/Result';
import Services from '../components/Services';
import Process from '../components/Process';
import FAQs from '../components/FAQs';
import FoldSection from '../components/FoldSection';
import People from '../components/People';
import Companies from '../components/Companies';
import VisionStatement from '../components/VisionStatement';
import Testimonial from '../components/Testimonial';
import Comparison from '../components/Comparison';
import FaqSection from '../components/FaqSection';

const LandingPage = () => {
  return (
    <div className="bg-bgColor">
      <Header />
      <main>
        <FoldSection />
        <People />
        <Companies />
        <VisionStatement />
        <Result />
        <Services />
        <Testimonial />
        <Comparison />
        <FaqSection />
        <ShortForm />
      
    
        <Process />
        <FAQs />
      </main>
    </div>
  );
};

export default LandingPage;
