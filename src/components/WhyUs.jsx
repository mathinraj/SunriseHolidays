import React from 'react';
import { motion } from 'framer-motion';

const WhyUs = () => {
  const points = [
    { boldText: "Corporate Team Outings", icon: "fa-users" },
    { boldText: "College Trips", icon: "fa-graduation-cap" },
    { boldText: "Family Tours", icon: "fa-home" },
    { boldText: "Industrial Visits", icon: "fa-industry" },
    { boldText: "Devotional Trips", icon: "fa-pray" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-10 bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-8"
        >
          What We Offer?
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 1 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              <i className={`fas ${point.icon} text-4xl text-blue-700 mb-4`}></i>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{point.boldText}</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyUs;