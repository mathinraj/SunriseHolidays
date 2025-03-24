import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CallbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    planningLocation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const { name, phone, planningLocation } = formData;
  
    // Construct the WhatsApp API URL with pre-filled message
    const whatsappUrl = `https://wa.me/919489214415?text=${encodeURIComponent(
      `Hello, my name is ${name}. My phone number is ${phone}, and I'm planning for a location at ${planningLocation}.`
    )}`;
  
    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");
  };
  

  return (
    <motion.section
      id="callbackform"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-gray-900 py-16"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-8"
        >
          Request a Callback
        </motion.h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="planningLocation">
              Planning Location
            </label>
            <input
              type="text"
              id="planningLocation"
              name="planningLocation"
              value={formData.planningLocation}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
          >
            <i className="fa-solid fa-phone"></i> Request Callback
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default CallbackForm;