import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes, FaGamepad } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/register", label: "Register" },
    { path: "/rules", label: "Rules" },
    { path: "/prizes", label: "Prizes" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-darker/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <FaGamepad className="text-3xl sm:text-4xl text-orange-600" />
            </motion.div>
            <span className="text-xl sm:text-2xl font-gaming font-bold text-orange-500"
              style={{ textShadow: "0 0 20px #ea580c" }}
            >
              BGMI BATTLE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base lg:text-lg font-semibold transition ${
                  location.pathname === link.path
                    ? "text-orange-500"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <Link to="/register" className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 px-6 py-2 rounded-lg font-semibold text-white text-sm lg:text-base transition shadow-lg shadow-orange-600/50 border-2 border-white/20"
            >
              Join Now
            </motion.button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition"
          >
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-gray-800"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-semibold py-2 ${
                    location.pathname === link.path
                      ? "text-orange-500"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="bg-gradient-to-r from-orange-600 to-orange-700 px-6 py-3 rounded-lg font-semibold text-white text-center mt-2 shadow-lg shadow-orange-600/50 border-2 border-white/20"
              >
                Join Now
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;