import React, {useState, useEffect} from "react";

// About Component
const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About <span className="text-yellow-400">MOVEONE</span></h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            At MOVEONE, we are committed to transforming urban mobility. We believe in a future where transportation is efficient, ecological, and exciting. Our electric bikes are the result of years of research, innovative design, and a passion for excellence.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img 
              src="https://placehold.co/600x400/1a1a1a/FFFFFF?text=MOVEONE+Team" 
              alt="Move One team working on designs" 
              className="rounded-lg shadow-xl"
              onError={(e) => e.target.src='https://placehold.co/600x400/1a1a1a/FFFFFF?text=Image+Error'}
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-yellow-400">Our Vision</h3>
            <p className="text-gray-300">
              To be leaders in the micromobility revolution, offering personal transport solutions that are not only practical but also inspiring. We want every journey to be a unique experience.
            </p>
            <h3 className="text-3xl font-semibold text-yellow-400">Our Values</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><span className="font-medium text-yellow-500">Innovation:</span> We constantly seek new technologies and designs.</li>
              <li><span className="font-medium text-yellow-500">Sustainability:</span> Committed to the environment every step of the way.</li>
              <li><span className="font-medium text-yellow-500">Quality:</span> Top-quality materials and components for durability and performance.</li>
              <li><span className="font-medium text-yellow-500">Customer:</span> Your satisfaction is our priority.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;