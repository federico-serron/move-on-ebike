import React, {useState, useEffect} from "react";

// Models Component
const Models = () => {

    const bikeModelsData = [
  {
    name: 'Urban Glide X1',
    image: 'https://placehold.co/600x400/1a1a1a/facc15?text=Urban+Glide+X1',
    alt: 'Image of Urban Glide X1 bike',
    description: 'Perfect for the city, agile and stylish. Ideal for your daily commutes.',
    price: '$1,299',
  },
  {
    name: 'Trail Blazer Pro',
    image: 'https://placehold.co/600x400/1a1a1a/facc15?text=Trail+Blazer+Pro',
    alt: 'Image of Trail Blazer Pro bike',
    description: 'Conquer any terrain. Robust, powerful, and ready for adventure.',
    price: '$2,499',
  },
  {
    name: 'Eco Commuter S',
    image: 'https://placehold.co/600x400/1a1a1a/facc15?text=Eco+Commuter+S',
    alt: 'Image of Eco Commuter S bike',
    description: 'The smart and ecological option for your travels. Efficiency and comfort.',
    price: '$999',
  },
];


  return (
    <section id="models" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl font-bold mb-4">Our <span className="text-yellow-400">Models</span></h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our range of electric bikes, each designed for a superior riding experience.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bikeModelsData.map((model) => (
            <div key={model.name} className="bg-black rounded-lg shadow-xl overflow-hidden flex flex-col group">
              <img 
                src={model.image} 
                alt={model.alt} 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => e.target.src='https://placehold.co/600x400/1a1a1a/facc15?text=Image+Error'}
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-2 text-yellow-400">{model.name}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{model.description}</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-2xl font-bold text-yellow-400">{model.price}</span>
                  <a
                    href="#contact"
                    className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded-md hover:bg-yellow-500 transition-colors duration-300 text-sm"
                  >
                    More Info
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Models;