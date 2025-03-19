import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:pt-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="../../public/icon_png.png"
              className="h-8"
              alt="Sunrise Holidays Logo"
            />
            <span className="font-kanit self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Sunrise Holidays
            </span>
          </a>
          <section className="mx-12 my-0 text-2xl">
            <a href="tel:+919578783456" role="button">
              <i class="fa-solid fa-phone mx-6"></i>
            </a>
            <a
              href="https://www.instagram.com/_sunrise_holidays_/"
              role="button"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
          </section>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {currentYear} <a className="hover:underline">Sunrise Holidays</a>.
          All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
