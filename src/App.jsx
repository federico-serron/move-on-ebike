import Navbar from './components/navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Models from './components/Models';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CallToActionBanner from './components/CallToActionBanner';
import Testimonials from './components/Testimonials';

import React, { useState, useEffect } from 'react';

// This component is ready to be used in a Vite + React project.
// Ensure you have Tailwind CSS configured in your Vite project:
// 1. Install Tailwind: `npm install -D tailwindcss postcss autoprefixer`
// 2. Initialize Tailwind: `npx tailwindcss init -p`
// 3. Configure `tailwind.config.js` content paths: `content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]`
// 4. Add Tailwind directives to your main CSS file (e.g., `src/index.css`):
//    `@tailwind base; @tailwind components; @tailwind utilities;`
// 5. Import this CSS file in `src/main.jsx`: `import './index.css';`


// Main App Component
function App() {
  // Effect for smooth scroll
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="font-sans bg-black">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Models />
      <Testimonials />
      <CallToActionBanner />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
