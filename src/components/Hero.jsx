import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <motion.section
      id="hero"
      transition={{ duration: 1 }}
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative z-10 text-white px-4"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Explore the World with Us</h1>
        <p className="text-lg sm:text-xl mb-8">Your dream vacation is just a click away</p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#"
          onClick={() => scrollToSection("callbackform")}
          className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800"
        >
          <i className="fa-solid fa-phone"></i> Request Callback
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;