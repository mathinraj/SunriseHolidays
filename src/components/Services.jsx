// src/components/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    { title: "Custom Tours", description: "Tailored tours to suit your preferences.", icon: "fa-globe" },
    { title: "Group Tours", description: "Join our group tours and meet new people.", icon: "fa-users" },
    { title: "Adventure Tours", description: "Thrilling adventures for adrenaline junkies.", icon: "fa-mountain" },
    { title: "Luxury Tours", description: "Experience the world in luxury.", icon: "fa-gem" },
  ];

  return (
    <motion.section
      id="whyus"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-12 bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-4xl font-bold text-center text-white mb-8"
        >
          Why Choose Us?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 1 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              <i className={`fas ${service.icon} text-4xl text-blue-700 mb-4`}></i>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;