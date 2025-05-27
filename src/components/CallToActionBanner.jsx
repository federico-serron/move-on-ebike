import React from "react";

// CallToActionBanner Component
const CallToActionBanner = () => {
  return (
    <section className="py-12 md:py-20 bg-yellow-400 text-black">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the MOVEONE Revolution?</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Don't wait any longer to experience the freedom and excitement of a MOVEONE electric bike.
        </p>
        <a
          href="#contact"
          className="bg-black text-yellow-400 font-bold py-3 px-10 rounded-lg text-lg hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-black/30"
        >
          Contact Us Now
        </a>
      </div>
    </section>
  );
};

export default CallToActionBanner;