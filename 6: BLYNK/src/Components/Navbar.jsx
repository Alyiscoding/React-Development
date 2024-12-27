import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logoo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 100; // Adjust scroll offset if needed
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false); // Close the menu after scroll
  };

  const navigateOrScroll = (e, path, targetId) => {
    e.preventDefault();

    if (location.pathname === "/") {
      // If already on the homepage, scroll to the section
      handleScroll(targetId);
    } else {
      // Navigate to the homepage and scroll after navigation
      navigate(path, { state: { targetId } });
    }
  };

  return (
    <nav className="fixed top-0 left-0 z-10 w-full bg-[#0C042A]">
      <div className="lg:ml-[100px] md:ml-[80px] flex items-center justify-between w-full p-4 lg:w-full lg:max-w-full lg:shadow-lg">
        {/* Logo */}
        <Link to="/">
          <img className="w-40" src={logo} alt="Logo" width={160} height={55} />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-6 ml-auto mr-[140px] list-none">
          <a
            href="#"
            className="text-white text-sm hover:opacity-50 no-underline"
            onClick={(e) => navigateOrScroll(e, "/", "home")}
          >
            Home
          </a>
          <a
            href="#"
            className="text-white text-sm hover:opacity-50 no-underline"
            onClick={(e) => navigateOrScroll(e, "/", "about")}
          >
            About Us
          </a>
          <a
            href="#"
            className="text-white text-sm hover:opacity-50 no-underline"
            onClick={(e) => navigateOrScroll(e, "/", "features")}
          >
            Features
          </a>
          <a
            href="#"
            className="text-white text-sm hover:opacity-50 no-underline"
            onClick={(e) => navigateOrScroll(e, "/", "pricing")}
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-white text-sm hover:opacity-50 no-underline"
            onClick={(e) => navigateOrScroll(e, "/", "faqs")}
          >
            FAQs
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <FaTimes className="text-white" />
            ) : (
              <FaBars className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMobileMenuOpen && (
        <div className="w-full backdrop-blur-lg lg:hidden">
          <a
            href="#"
            className="block p-4 uppercase tracking-tighter text-white no-underline"
            onClick={(e) => navigateOrScroll(e, "/", "home")}
          >
            Home
          </a>
          <a
            href="#"
            className="block p-4 uppercase tracking-tighter text-white no-underline"
            onClick={(e) => navigateOrScroll(e, "/", "about")}
          >
            About Us
          </a>
          <a
            href="#"
            className="block p-4 uppercase tracking-tighter text-white no-underline"
            onClick={(e) => navigateOrScroll(e, "/", "features")}
          >
            Features
          </a>
          <a
            href="#"
            className="block p-4 uppercase tracking-tighter text-white no-underline"
            onClick={(e) => navigateOrScroll(e, "/", "pricing")}
          >
            Pricing
          </a>
          <a
            href="#"
            className="block p-4 uppercase tracking-tighter text-white no-underline"
            onClick={(e) => navigateOrScroll(e, "/", "faqs")}
          >
            FAQs
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
