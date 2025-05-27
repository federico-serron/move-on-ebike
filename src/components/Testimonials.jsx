import React from "react";
import { Star } from "lucide-react";

// Testimonials Component
const Testimonials = () => {
  const testimonialsData = [
    {
      quote: "My MoveOne has changed the way I get around the city! It's fast, comfortable, and the design is incredible.",
      name: "Ana Pérez", // Names can be kept or localized as preferred
      city: "Mexico City",
      avatar: "https://placehold.co/100x100/4A5568/FFFFFF?text=AP"
    },
    {
      quote: "The best investment I've made. The battery lasts a very long time and climbing hills is no longer a problem.",
      name: "Carlos Gómez",
      city: "Madrid",
      avatar: "https://placehold.co/100x100/4A5568/FFFFFF?text=CG"
    },
     {
      quote: "Excellent quality and customer service. I'm delighted with my Trail Blazer Pro, it's a beast!",
      name: "Laura Fernández",
      city: "Buenos Aires",
      avatar: "https://placehold.co/100x100/4A5568/FFFFFF?text=LF"
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our <span className="text-yellow-400">Customers Say</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={`Avatar of ${testimonial.name}`} 
                  className="w-16 h-16 rounded-full mr-4 border-2 border-yellow-400"
                  onError={(e) => e.target.src='https://placehold.co/100x100/4A5568/FFFFFF?text=??'}
                />
                <div>
                  <h4 className="text-lg font-semibold text-yellow-400">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.city}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;