import React, {useState} from "react";
import { Menu, X } from "lucide-react";

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


// Sample Data (English)
const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#models', label: 'Models' },
  { href: '#contact', label: 'Contact' },
];

  return (
    <nav className="bg-black bg-opacity-80 backdrop-blur-md text-white p-4 fixed w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-3xl font-bold text-yellow-400">
          MOVE<span className="text-white">ONE</span>
        </a>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-yellow-400 transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Open menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-black bg-opacity-95 rounded-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-4 py-3 text-center hover:bg-yellow-400 hover:text-black transition-colors duration-300 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;