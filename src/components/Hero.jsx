import React, {useState, useEffect} from "react";
import { ChevronRight } from "lucide-react";

// Hero Component
const Hero = () => {
  return (
    <section id="home" className="bg-black text-white min-h-screen flex items-center pt-20 md:pt-0">
      <div className="container mx-auto px-6 py-12 text-center md:text-left">
        <div className="md:flex md:items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              Revolutionize <span className="text-yellow-400">Your Mobility</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
              Discover the new era of electric bicycles. Design, power, and sustainability in every pedal stroke.
            </p>
            <a
              href="#models"
              className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-500 transition-colors duration-300 inline-flex items-center shadow-xl hover:shadow-yellow-400/50"
            >
              View Models <ChevronRight size={24} className="ml-2" />
            </a>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img 
              src="https://placehold.co/700x500/000000/facc15?text=MOVE+ONE+Bike" 
              alt="Image of a Move One electric bike" 
              className="rounded-lg shadow-2xl mx-auto"
              onError={(e) => e.target.src='https://placehold.co/700x500/000000/facc15?text=Image+Load+Error'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;