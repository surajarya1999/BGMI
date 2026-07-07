import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGamepad, FaDiscord, FaInstagram, FaTwitter, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: "/register", label: "Register" },
    { path: "/rules", label: "Rules" },
    { path: "/prizes", label: "Prizes" },
  ];

  const socialLinks = [
    { icon: FaDiscord, url: "https://discord.com", label: "Discord" },
    { icon: FaInstagram, url: "https://instagram.com", label: "Instagram" },
    { icon: FaTwitter, url: "https://twitter.com", label: "Twitter" },
    { icon: FaYoutube, url: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className="bg-darker border-t border-gray-800 pt-16 pb-8 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-600/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <FaGamepad className="text-4xl text-orange-600" />
              </motion.div>
              <span className="text-2xl font-gaming font-bold text-orange-500"
               
              >
                BGMI BATTLE
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              India's premier BGMI esports platform. Join thousands of players and compete for real cash prizes.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="bg-gray-800 hover:bg-orange-600 p-3 rounded-lg transition shadow-lg shadow-orange-600/50 border-2 border-white/20"
                >
                  <social.icon className="text-xl text-white" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-orange-500 mb-6"
             
            >
              Quick Links
            </h3>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-gray-400 hover:text-orange-500 transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-orange-500 mb-6"
              
            >
              Contact Us
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-gray-400">
                <FaEnvelope className="text-orange-600" />
                <span>mystle199@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FaPhone className="text-orange-600" />
                <span>+91 9340334187</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-orange-600" />
                <span>Gwalior, Madhya Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-orange-500 mb-6"
              
            >
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe for tournament updates and exclusive offers.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-600"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 px-4 py-2 rounded-lg font-semibold text-white transition shadow-lg shadow-orange-600/50 border-2 border-white/20"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} BGMI Battle. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-gray-500 hover:text-orange-500 transition">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-orange-500 transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;