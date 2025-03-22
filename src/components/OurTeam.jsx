// src/components/OurTeam.jsx
import React from 'react';
import { motion } from 'framer-motion';

const OurTeam = () => {
  const Team = [
    {
      name: "Manoj K Shanmugam",
      role: "CEO / Founder",
      image: "/mathin_portrait.jfif",
      linkedin: "#",
      insta: "#",
    },
    {
      name: "Mathinraj Ramasamy",
      role: "IT Team",
      image: "/mathin_portrait.jfif",
      linkedin: "#",
      insta: "#",
    },
  ];

  return (
    <motion.section
      id="ourteam"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-16 bg-gray-900"
    >
      <div className="container mx-auto px-20">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-4xl font-bold text-center mb-8"
        >
          Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Team.map((person, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 1 }}
              className="bg-white pb-4 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-80 overflow-hidden rounded-t-lg">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mt-4">{person.name}</h4>
              <p className="text-gray-500 font-medium">{person.role}</p>
              <div className="flex justify-center gap-7 mt-4">
                <a href={person.linkedin} className="text-blue-600 text-xl hover:text-blue-800">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href={person.insta} className="text-purple-600 text-xl hover:text-purple-800">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default OurTeam;