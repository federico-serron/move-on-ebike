import React, {useEffect, useState} from "react";
import { Bike, Zap, Leaf, Shield } from "lucide-react";

// Features Component
const Features = () => {

    const featuresData = [
  {
    icon: <Bike size={40} className="text-yellow-400" />,
    title: 'Cutting-Edge Design',
    description: 'Aerodynamic lines and state-of-the-art materials for unparalleled performance and style.',
  },
  {
    icon: <Zap size={40} className="text-yellow-400" />,
    title: 'Electric Technology',
    description: 'Powerful motors and long-lasting batteries to take you further, faster, and effortlessly.',
  },
  {
    icon: <Leaf size={40} className="text-yellow-400" />,
    title: 'Sustainable Mobility',
    description: 'Contribute to a greener future with our eco-friendly electric bikes.',
  },
  {
    icon: <Shield size={40} className="text-yellow-400" />,
    title: 'Integrated Safety',
    description: 'High-quality components and advanced braking systems for your peace of mind on every journey.',
  },
];




  return (
    <section id="features" className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose <span className="text-yellow-400">MOVEONE</span>?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our bikes are designed with you in mind, combining the latest technology with a commitment to quality and sustainability.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-yellow-400/30 transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center text-yellow-400">{feature.title}</h3>
              <p className="text-gray-400 text-sm text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;