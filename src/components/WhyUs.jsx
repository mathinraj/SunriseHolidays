import React from 'react';
import { motion } from 'framer-motion';

const WhyUs = () => {
  const points = [
    {
      boldText: "Expertise in Travel Planning",
      description: "With years of experience, we specialize in organizing seamless trips for college tours, industrial visits, corporate outings, and devotional trips.",
      icon: "fa-map",
    },
    {
      boldText: "Customized Itineraries",
      description: "We create personalized travel plans based on your preferences, ensuring every detail is tailored to your needs.",
      icon: "fa-calendar-check",
    },
    {
      boldText: "Strong Partnerships",
      description: "We’ve partnered with trusted bus owners and local vendors to provide reliable and comfortable transportation.",
      icon: "fa-handshake",
    },
    {
      boldText: "Hassle-Free Experience",
      description: "From planning to execution, we handle all the logistics so you can focus on enjoying your trip.",
      icon: "fa-check-circle",
    },
    {
      boldText: "Affordable Packages",
      description: "We offer competitive pricing without compromising on quality, making travel accessible for everyone.",
      icon: "fa-tag",
    },
    {
      boldText: "Local Knowledge",
      description: "Our team knows the best places to visit, ensuring you get the most out of your trip.",
      icon: "fa-map-marker-alt",
    },
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
          Why Choose Us?
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
              <p className="text-gray-600">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyUs;