import React from "react";

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4">MOVE<span className="text-white">ONE</span></h3>
            <p className="text-sm">Revolutionizing urban mobility with style, power, and sustainability.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-yellow-400 transition-colors">About Us</a></li>
              <li><a href="#models" className="hover:text-yellow-400 transition-colors">Models</a></li>
              <li><a href="#features" className="hover:text-yellow-400 transition-colors">Features</a></li>
              <li><a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-yellow-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-yellow-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2.014a.828.828 0 01.57 0 11.954 11.954 0 013.852.993c1.466.498 2.518 1.55 3.016 3.016.494 1.398.993 2.87.993 3.852a.828.828 0 010 .57 11.956 11.956 0 01-.993 3.852c-.498 1.466-1.55 2.518-3.016 3.016a11.956 11.956 0 01-3.852.993.828.828 0 01-.57 0 11.956 11.956 0 01-3.852-.993c-1.466-.498-2.518-1.55-3.016-3.016a11.956 11.956 0 01-.993-3.852.828.828 0 010-.57 11.954 11.954 0 01.993-3.852c.498-1.466 1.55-2.518 3.016-3.016.982-.332 2.354-.738 3.852-.993zm2.176 1.494a10.463 10.463 0 00-2.746-.723.678.678 0 00-.54 0 10.463 10.463 0 00-2.746.723 2.085 2.085 0 00-1.26.913 10.43 10.43 0 00-.724 2.746.678.678 0 000 .54 10.43 10.43 0 00.724 2.746c.26.703.71 1.26.912 1.26a10.463 10.463 0 002.746.723.678.678 0 00.54 0 10.463 10.463 0 002.746-.723c.703-.26 1.26-.71 1.26-.912a10.43 10.43 0 00.724-2.746.678.678 0 000-.54 10.43 10.43 0 00-.724-2.746 2.085 2.085 0 00-.913-1.26zm-4.837 7.177a3.666 3.666 0 107.332 0 3.666 3.666 0 00-7.332 0zm5.908 0a2.241 2.241 0 11-4.482 0 2.241 2.241 0 014.482 0zM17.25 7.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" clipRule="evenodd" /></svg>
              </a>
               <a href="#" aria-label="Twitter" className="hover:text-yellow-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} MOVEONE Bikes. All rights reserved.</p>
          <p>Designed with <span className="text-yellow-400">&hearts;</span> for a future in motion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;