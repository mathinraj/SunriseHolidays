import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    { boldText: "Corporate Team Outings", icon: "fa-users" },
    { boldText: "College Trips", icon: "fa-graduation-cap" },
    { boldText: "Family Tours", icon: "fa-home" },
    { boldText: "Industrial Visits", icon: "fa-industry" },
    { boldText: "Devotional Trips", icon: "fa-pray" },
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
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-8"
        >
          What We Offer?
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 1 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              <i
                className={`fas ${service.icon} text-4xl text-blue-700 mb-4`}
              ></i>
              {/* <h3 className="text-xl font-bold mb-2 text-gray-900">
                {service.title}
              </h3> */}
              <p className="text-gray-600">{service.boldText}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
