import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import bg_footer from "../assets/bg_footer.png"; // Background image
import logo from "../assets/logoo.png"; // Logo image

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 100; // Adjust scroll offset if needed
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const navigateOrScroll = (e, path, targetId) => {
    e.preventDefault();

    if (location.pathname === "/") {
      // If already on the homepage, scroll to the section
      handleScroll(targetId);
    } else {
      // Navigate to the homepage and scroll after navigation
      navigate(path, { state: { targetId } });
      // handleScroll(navigate);
      // if(navigate ){
      //   screenTop();
      // }
      // console.log(targetId);
    }
  };

  return (
    <div
      id="footer"
      className="relative bg-cover bg-center pb-0 overflow-x-hidden "
      style={{ backgroundImage: `url(${bg_footer})`, backgroundSize: "cover" }}
    >

      {/* Footer Content with Columns */}
      <div className="flex flex-wrap justify-between px-16 py-8 sm:justify-center sm:px-0  ">
        {/* First Column */}
        <div className="w-full md:w-[23%]">
          <img src={logo} alt="Logo" className="w-40 mb-3" />
          <p className="text-white">
            10X Your LinkedIn <br />
            Outreach with <br />
            Automation & Social Listening.
          </p>
        </div>

        {/* Second Column (Company Links) */}
        <div className="w-full md:w-[23%] text-left">
          <h3 className="text-white text-lg font-semibold mb-2">Company</h3>
          <ul className="text-gray-700 list-none space-y-2">
            <li>
              <a
                href="#"
                className="text-white no-underline lg:ml-[-30px] md:ml-[-30px]"
                onClick={(e) => navigateOrScroll(e, "/", "home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white no-underline lg:ml-[-30px] md:ml-[-30px]"
                onClick={(e) => navigateOrScroll(e, "/", "about")}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white no-underline lg:ml-[-30px] md:ml-[-30px]"
                onClick={(e) => navigateOrScroll(e, "/", "features")}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white no-underline lg:ml-[-30px] md:ml-[-30px]"
                onClick={(e) => navigateOrScroll(e, "/", "pricing")}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white no-underline lg:ml-[-30px] md:ml-[-30px]"
                onClick={(e) => navigateOrScroll(e, "/", "faqs")}
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Third Column (Get to know us) */}
        <div className="w-full md:w-[23%] text-left">
          <h3 className="text-white text-lg font-semibold mb-2">Get to know us</h3>
          <ul className="text-gray-700 list-none space-y-2">
            <li>
              <Link to="/terms" className="text-white no-underline lg:ml-[-30px] md:ml-[-30px]" >
                Terms
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-white no-underline lg:ml-[-30px] md:ml-[-30px]">
                Privacy
              </Link>
            </li>
          </ul>
        </div>

        {/* Fourth Column (Connect with us) */}
        <div className="w-full md:w-[23%] text-left">
          <h3 className="text-white text-lg font-semibold mb-2">Connect with us</h3>
          <ul className="text-gray-700 list-none space-y-2">
            <li>
              <a href="#" className="text-white no-underline lg:ml-[-30px] md:ml-[-30px]">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="text-white no-underline lg:ml-[-30px] md:ml-[-30px]">
                YouTube
              </a>
            </li>
            <li>
              <a href="#" className="text-white no-underline lg:ml-[-30px] md:ml-[-30px]">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="text-white no-underline lg:ml-[-30px] md:ml-[-30px] ">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="border-t-2 border-white w-[91%] mx-auto" />

      {/* Footer Bottom Text */}
      <div className="text-center py-4">
        <p className="text-white">Copyright © 2024. Lead Generator</p>
      </div>
    </div>
  );
};

export default Footer;
