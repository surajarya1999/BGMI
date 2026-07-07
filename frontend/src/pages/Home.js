import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaGamepad, FaTrophy, FaUsers, FaChevronLeft, FaChevronRight, FaMobileAlt } from "react-icons/fa";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "b1.jpg",
      title: "BGMI BATTLE ROYALE",
      subtitle: "Survive, Fight, Win!",
    },
    {
      image: "b4.jpg",
      title: "SQUAD TOURNAMENT",
      subtitle: "Team Up & Conquer",
    },
    {
      image: "b3.jpg",
      title: "WIN CASH PRIZES",
      subtitle: "Up to ₹50,000",
    },
    {
      image: "b5.jpg",
      title: "PRO LEAGUE",
      subtitle: "Become a Legend",
    },
  ];

  // Auto Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const features = [
    { icon: FaGamepad, title: "Play & Win", desc: "Compete in BGMI tournaments" },
    { icon: FaTrophy, title: "Prize Pool", desc: "Win cash prizes up to ₹50,000" },
    { icon: FaUsers, title: "Team Up", desc: "Form squads with friends" },
    { icon: FaMobileAlt, title: "Instant Join", desc: "Join via WhatsApp instantly" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-darker">
      {/* Hero Slider */}
      <div className="relative h-screen w-full overflow-hidden">
        <AnimatePresence>
          {slides.map((slide, index) => (
            index === currentSlide && (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full"
              >
                <div
                  className="absolute inset-0 w-full h-full"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-darker" />
                <div className="absolute inset-0 bg-black/50" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 md:px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="bg-darker/70 backdrop-blur-md px-6 py-4 sm:px-8 sm:py-6 md:px-12 md:py-8 rounded-2xl border-2 border-orange-600/60 max-w-3xl sm:max-w-4xl md:max-w-5xl w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%]"
                  >
                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-gaming font-black text-white mb-3 sm:mb-4"
                      style={{
                        textShadow: "0 0 15px #ea580c, 0 0 30px #ea580c, 0 0 45px #ea580c, 0 4px 8px rgba(0,0,0,1)",
                      }}
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                      className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 text-gray-100 font-bold"
                      style={{ textShadow: "0 2px 10px rgba(0,0,0,1)" }}
                    >
                      {slide.subtitle}
                    </motion.p>
                  </motion.div>

                  {/* Buttons */}
                  <motion.div
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 sm:mt-10 md:mt-12"
                  >
                    <Link to="/register" className="w-full sm:w-auto">
                      <motion.button
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-xl font-black text-lg sm:text-xl md:text-2xl text-white transition shadow-2xl shadow-orange-600/60 border-2 border-white/20"
                      >
                        🚀 REGISTER NOW
                      </motion.button>
                    </Link>
                    <Link to="/rules" className="w-full sm:w-auto">
                      <motion.button
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-xl font-black text-lg sm:text-xl md:text-2xl text-white transition shadow-2xl border-2 border-orange-600/50"
                      >
                        📜 RULES
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Slider Controls */}
        <motion.button
          onClick={prevSlide}
          whileHover={{ scale: 1.15, backgroundColor: "#ea580c" }}
          className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-orange-600/90 hover:bg-orange-600 p-3 sm:p-4 md:p-5 rounded-full transition shadow-2xl backdrop-blur-sm"
        >
          <FaChevronLeft className="text-xl sm:text-2xl md:text-3xl text-white" />
        </motion.button>
        
        <motion.button
          onClick={nextSlide}
          whileHover={{ scale: 1.15, backgroundColor: "#ea580c" }}
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-orange-600/90 hover:bg-orange-600 p-3 sm:p-4 md:p-5 rounded-full transition shadow-2xl backdrop-blur-sm"
        >
          <FaChevronRight className="text-xl sm:text-2xl md:text-3xl text-white" />
        </motion.button>

        {/* Slider Indicators */}
        <div className="absolute bottom-8 sm:bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3 md:gap-4">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              whileHover={{ scale: 1.2 }}
              className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-orange-600 shadow-lg shadow-orange-600/80 scale-125"
                  : "bg-gray-500/70 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Features Section - Same as before */}
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-darker relative">
        {/* Animated Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl sm:text-5xl md:text-6xl text-orange-600/10"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                rotate: 0,
              }}
              animate={{
                y: [0, -150, 0],
                x: [0, Math.random() * 100 - 50, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: Math.random() * 8 + 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🎮
            </motion.div>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-orange-500 font-gaming text-center mb-12 sm:mb-16 md:mb-20 relative z-10 px-4"
          style={{ textShadow: "0 0 20px #ea580c" }}
        >
          WHY CHOOSE US?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto relative z-10 px-2 sm:px-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotateY: 180 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{
                scale: 1.05,
                rotateY: 8,
                boxShadow: "0 0 25px rgba(234, 88, 12, 0.4)",
              }}
              className="bg-gradient-to-br from-gray-900 via-gray-900 to-black p-6 sm:p-8 md:p-10 rounded-2xl border-2 border-gray-800 hover:border-orange-600 transition-all duration-300 transform-style-3d cursor-pointer group"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.15 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <feature.icon className="text-5xl sm:text-6xl md:text-7xl text-orange-600 mx-auto group-hover:text-white transition duration-300" />
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-gaming font-bold mb-3 sm:mb-4 text-center text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-center text-base sm:text-lg">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tournament Banner */}
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 via-transparent to-orange-600/30" />
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-600/40 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [0, -200, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 4 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl sm:max-w-5xl md:max-w-6xl mx-auto bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 p-8 sm:p-12 md:p-16 rounded-3xl relative z-10 shadow-2xl border-4 border-white/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10">
            <div className="text-center md:text-left">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-gaming font-black mb-4 sm:mb-6 text-white"
              >
                🏆 TOURNAMENT STARTING SOON!
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 font-bold"
              >
                Registration closes in 48 hours. Don't miss out!
              </motion.p>
            </div>
            <Link to="/register" className="w-full md:w-auto">
              <motion.button
                whileHover={{ scale: 1.1, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto bg-white text-orange-600 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-xl font-black text-lg sm:text-xl md:text-2xl hover:bg-gray-100 transition shadow-2xl"
              >
                🔥 JOIN NOW
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="py-12 sm:py-16 px-4 text-center text-gray-500 border-t border-gray-800 bg-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-orange-600/10 to-transparent" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-gaming text-orange-600 mb-4 sm:mb-6"
          >
            BGMI BATTLE
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-400"
          >
            India's Premier BGMI Esports Platform
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8"
          >
            <Link to="/register" className="hover:text-orange-600 transition text-base sm:text-lg">Register</Link>
            <Link to="/rules" className="hover:text-orange-600 transition text-base sm:text-lg">Rules</Link>
            <Link to="/prizes" className="hover:text-orange-600 transition text-base sm:text-lg">Prizes</Link>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-sm sm:text-base"
          >
            © 2026 BGMI Battle. All rights reserved.
          </motion.p>
        </div>
      </footer>
    </div>
  );
};

export default Home;