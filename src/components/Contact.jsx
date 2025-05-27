import React, {useState, useEffect} from "react";
import { MapPin, Phone, Mail } from "lucide-react";


// Contact Component
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send form data would go here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl font-bold mb-4">Get in <span className="text-yellow-400">Touch</span></h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions or want to know more about our models? We're here to help.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="bg-black p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Send Us a Message</h3>
            {isSubmitted && (
              <div className="mb-4 p-3 bg-green-500 text-white rounded-md text-center">
                Message sent successfully! We'll contact you soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-colors" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-colors" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Your Message</label>
                <textarea name="message" id="message" rows="4" value={formData.message} onChange={handleChange} required className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-colors"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-yellow-400 text-black font-bold py-3 px-6 rounded-md hover:bg-yellow-500 transition-colors duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin size={24} className="text-yellow-400 mr-3" />
                  <p className="text-gray-300">123 Fictional Street, Example City, ZIP 08000</p>
                </div>
                <div className="flex items-center">
                  <Phone size={24} className="text-yellow-400 mr-3" />
                  <p className="text-gray-300">+1 (555) 123-4567</p> {/* Example US number */}
                </div>
                <div className="flex items-center">
                  <Mail size={24} className="text-yellow-400 mr-3" />
                  <p className="text-gray-300">info@moveonebikes.com</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Opening Hours</h3>
              <p className="text-gray-300">Monday to Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-300">Saturdays: 10:00 AM - 2:00 PM</p>
              <p className="text-gray-300">Sundays: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;