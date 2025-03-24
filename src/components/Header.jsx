import React, { useState, useEffect } from "react";

function Header() {
  const [activeLink, setActiveLink] = useState("");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        setActiveLink(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-gray-800 fixed w-full z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <a href="#hero">
                <img
                  className="h-8 w-auto rounded border-white border-2"
                  src="/logo.png"
                  alt="Sunrise Holidays"
                />
              </a>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-2">
                <a
                  href="#whyus"
                  onClick={() => scrollToSection("whyus")}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    activeLink === "whyus"
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  Why Us?
                </a>
                <a
                  href="#gallery"
                  onClick={() => scrollToSection("gallery")}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    activeLink === "gallery"
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  Gallery
                </a>
                <a
                  href="#ourteam"
                  onClick={() => scrollToSection("ourteam")}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    activeLink === "ourteam"
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  Our Team
                </a>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => scrollToSection("callbackform")}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2"
          >
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;