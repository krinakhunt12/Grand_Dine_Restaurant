import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuItems = ["Home", "About", "Menu", "Events", "Gallery", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-yellow-400 bg-opacity-90 backdrop-blur-sm"
          : "bg-black bg-opacity-70"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-white md:text-yellow-400">GRAND DINE</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-sm text-white">
          {menuItems.map((item) => (
            <a
              href={`#${item.toLowerCase()}`}
              key={item}
              className="hover:text-yellow-400 transition font-medium"
            >
              {item}
            </a>
          ))}

          {/* Buttons */}
          <button
            type="button"
            className="ml-4 px-4 py-1 border border-white rounded text-white font-medium hover:bg-white hover:text-black transition"
          >
            Login
          </button>
          <button
            type="button"
            className="ml-2 px-4 py-1 bg-white rounded text-black font-medium hover:bg-gray-200 transition"
          >
            Signup
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-6 relative">
            <span
              className={`block absolute h-0.5 w-6 bg-white rounded transform transition duration-300 ease-in-out ${
                mobileMenuOpen ? "rotate-45 top-2.5" : "top-1"
              }`}
            />
            <span
              className={`block absolute h-0.5 w-6 bg-white rounded transition duration-300 ease-in-out ${
                mobileMenuOpen ? "opacity-0" : "top-3"
              }`}
            />
            <span
              className={`block absolute h-0.5 w-6 bg-white rounded transform transition duration-300 ease-in-out ${
                mobileMenuOpen ? "-rotate-45 top-2.5" : "top-5"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`md:hidden fixed top-[64px] left-0 right-0 bg-yellow-400 text-black shadow-lg transform transition-transform duration-300 ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 py-6 text-lg font-semibold">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={handleNavClick}
                className="hover:text-yellow-600 transition"
              >
                {item}
              </a>
            </li>
          ))}

          {/* Mobile Buttons */}
          <li>
            <button
              onClick={handleNavClick}
              className="w-32 px-4 py-2 border border-black rounded text-black font-medium hover:bg-gray-200 transition"
            >
              Login
            </button>
          </li>
          <li>
            <button
              onClick={handleNavClick}
              className="w-32 px-4 py-2 bg-black rounded text-white font-medium hover:bg-gray-800 transition"
            >
              Signup
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
