import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 rounded-lg shadow-sm p-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:pt-8">
        <div className="flex justify-between items-center sm:flex-row flex-col">
          {/* Sunrise Holidays Text and Logo */}
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/icon_png.png"
              className="h-8"
              alt="Sunrise Holidays Logo"
            />
            <span className="font-kanit text-2xl font-semibold text-white">
              Sunrise Holidays
            </span>
          </a>

          {/* Social Icons and Phone in the same line */}
          <section className="flex sm:space-x-6 space-x-4 sm:text-2xl text-xl mt-4 sm:mt-0">
            <a href="tel:+919578783456" role="button" className="text-white">
              <i className="fa-solid fa-phone"></i>
            </a>
            <a
              href="https://www.instagram.com/_sunrise_holidays_/"
              role="button"
              className="text-white"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </section>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        {/* Copyright Text */}
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {currentYear} <a className="hover:underline">Team Sunrise Holidays</a>.
          All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
