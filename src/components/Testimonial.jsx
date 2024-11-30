import React from 'react';

const testimonialsData = [
  {
    text: "Sannan is the best video editor I have ever had here on Upwork. He is editing my long-form and short-form YouTube videos and they are top quality. He is very intelligent, doesn't rush and ensures that every minute of the edit is top quality. If you have a chance to work with Sannan, please don't hesitate - start right away (I just hired him again).",
    name: "Peter Garety",
  },
  {
    text: "It was great working with Sannan. He's a very talented video editor, can follow instructions, and is very independent and creative when you need him to be. This experience has helped me save tons of time and mental effort, so I can focus on creating good video concepts, while he fully handles the video editing process with very little guidance and supervision on my part. Would highly recommend!",
    name: "Eduard Stinga",
  },
  {
    text: "Sannan is an extremely skilled video editor. Not only is he great at his work but he's also a very good communicator and a professional. I definitely hope to work with him regularly in the future when my YouTube channel develops further.",
    name: "Jiri Warkonsky",
  },
  {
    text: "I am a YouTube blogger and I enjoy working with Sannan because he’s very fast and skilful in his work. All of my requests were able to be done on time, and he’s also intuitive on how to make the footages better than I can personally imagine. Leveraging on his skill has made my videos posting much more consistent and the content has become cleaner too. Very appreciative of the work he’s providing.",
    name: "Joyce Tan",
  },
];

const Testimonial = () => {
  return (
    <section className="relative bg-bgColor py-20 text-center">
      {/* Heading */}
      <div className="inline-block text-lg md:text-lg font-title text-primaryText mb-4 border border-white rounded-lg px-2 py-1">
  Testimonials
</div>

      {/* Subheading */}
      <h3 className="text-2xl md:text-5xl font-body text-primaryText mb-10">
      There's a reason people <br /> are <span className="text-primaryAccent">raving</span> about us.
      </h3>

      {/* Testimonials Section */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Column 1 */}
        <div className="relative h-96 overflow-hidden">
          <div className="animate-scroll space-y-6">
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="p-4 bg-secondaryAccent/5 rounded-md shadow-lg">
                <p className="text-lg font-body text-primaryText/90">
                  "{testimonial.text}"
                </p>
                <p className="text-primaryAccent mt-2">
                  - {testimonial.name}
                </p>
              </div>
            ))}
            {testimonialsData.map((testimonial, index) => (
              <div key={`dup-${index}`} className="p-4 bg-secondaryAccent/5 rounded-md shadow-lg">
                <p className="text-lg font-body text-primaryText/90">
                  "{testimonial.text}"
                </p>
                <p className="text-primaryAccent mt-2">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div className="relative h-96 overflow-hidden">
          <div className="animate-scrollReverse space-y-6">
            {[
              testimonialsData[2], 
              testimonialsData[3], 
              testimonialsData[0], 
              testimonialsData[1]
            ].map((testimonial, index) => (
              <div key={index} className="p-4 bg-secondaryAccent/5 rounded-md shadow-lg">
                <p className="text-lg font-body text-primaryText/90">
                  "{testimonial.text}"
                </p>
                <p className="text-primaryAccent mt-2">
                  - {testimonial.name}
                </p>
              </div>
            ))}
            {[
              testimonialsData[2], 
              testimonialsData[3], 
              testimonialsData[0], 
              testimonialsData[1]
            ].map((testimonial, index) => (
              <div key={`dup-${index}`} className="p-4 bg-secondaryAccent/5 rounded-md shadow-lg">
                <p className="text-lg font-body text-primaryText/90">
                  "{testimonial.text}"
                </p>
                <p className="text-primaryAccent mt-2">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3 */}
        <div className="relative h-96 overflow-hidden">
          <div className="animate-scroll space-y-6">
            {[
              testimonialsData[3], 
              testimonialsData[1], 
              testimonialsData[2], 
              testimonialsData[0]
            ].map((testimonial, index) => (
              <div key={index} className="p-4 bg-secondaryAccent/5 rounded-md shadow-lg">
                <p className="text-lg font-body text-primaryText/90">
                  "{testimonial.text}"
                </p>
                <p className="text-primaryAccent mt-2">
                  - {testimonial.name}
                </p>
              </div>
            ))}
            {[
              testimonialsData[3], 
              testimonialsData[1], 
              testimonialsData[2], 
              testimonialsData[0]
            ].map((testimonial, index) => (
              <div key={`dup-${index}`} className="p-4 bg-secondaryAccent/5 rounded-md shadow-lg">
                <p className="text-lg font-body text-primaryText/90">
                  "{testimonial.text}"
                </p>
                <p className="text-primaryAccent mt-2">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Blur overlays */}
        <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-bgColor/80 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-bgColor/80 to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Testimonial;
