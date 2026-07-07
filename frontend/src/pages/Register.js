import { motion } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp, FaUser, FaIdCard, FaEnvelope, FaUsers, FaPhone } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    bgmiId: "",
    playerName: "",
    teamName: "",
    whatsapp: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // WhatsApp Message with Entry Fee
    const message = `🎮 *BGMI Tournament Registration*%0A%0A🆔 *BGMI ID:* ${formData.bgmiId}%0A👤 *Player Name:* ${formData.playerName}%0A🎯 *Team Name:* ${formData.teamName}%0A📱 *WhatsApp:* ${formData.whatsapp}%0A📧 *Email:* ${formData.email}%0A%0A💰 *Entry Fee:* ₹200 (Squad)`;
    
    const whatsappNumber = "919876543210"; // Your number
    const groupLink = "https://chat.whatsapp.com/IRJqDMjZs8fIhdEgrdhNbo"; // Your WhatsApp Group Link

    // WhatsApp message ke liye data save karo
    localStorage.setItem('whatsappMessage', message);
    localStorage.setItem('whatsappNumber', whatsappNumber);
    
    setSubmitted(true);
    setFormData({ bgmiId: "", playerName: "", teamName: "", whatsapp: "", email: "" });

    // DIRECT GROUP JOIN (pehle link open)
    window.open(groupLink, "_blank");
  };

  return (
    <div className="min-h-screen py-20 px-4 relative bg-darker">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-bgmi/10 via-transparent to-transparent">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-bgmi/30 rounded-full"
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
            animate={{ y: [0, -100, 0], x: [0, Math.random() * 50, 0] }}
            transition={{ duration: Math.random() * 5 + 3, repeat: Infinity }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto bg-gradient-to-br from-gray-900 to-black backdrop-blur-lg p-6 sm:p-8 md:p-10 rounded-2xl border-2 border-bgmi/50 relative z-10 shadow-2xl"
      >
        {/* Header with Entry Fee */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl sm:text-5xl font-gaming text-center mb-3 glow" style={{ textShadow: "0 0 20px #FF4500" }}>
            REGISTER NOW
          </h1>
          <p className="text-center text-gray-400 mb-4 text-base sm:text-lg">
            Fill details & join via WhatsApp instantly 🚀
          </p>

          {/* Entry Fee Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 bg-bgmi/20 border-2 border-bgmi px-6 py-3 rounded-xl mx-auto"
          >
            <div className="text-2xl font-bold text-bgmi">₹</div>
            <div>
              <p className="text-xs text-gray-400 uppercase font-semibold">Entry Fee</p>
              <p className="text-2xl font-black text-white">200 <span className="text-sm font-normal text-gray-400">/ Squad</span></p>
            </div>
          </motion.div>
        </motion.div>

        {/* Success Message */}
        {submitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-600/20 border-2 border-green-500 text-green-400 px-6 py-4 rounded-lg mb-6 text-center font-bold flex items-center justify-center gap-2"
          >
            ✅ Registration Successful! Joining WhatsApp Group...
          </motion.div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* BGMI ID */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <FaIdCard className="absolute left-4 top-1/2 -translate-y-1/2 text-bgmi text-xl" />
            <input
              type="text"
              name="bgmiId"
              placeholder="BGMI ID (e.g., 5123456789)"
              value={formData.bgmiId}
              onChange={handleChange}
              className="w-full pl-14 pr-4 py-4 bg-gray-900/70 border-2 border-gray-700 rounded-xl focus:outline-none focus:border-bgmi transition text-white text-lg"
              required
            />
          </motion.div>

          {/* Player Name */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-bgmi text-xl" />
            <input
              type="text"
              name="playerName"
              placeholder="Player Name (In-game Name)"
              value={formData.playerName}
              onChange={handleChange}
              className="w-full pl-14 pr-4 py-4 bg-gray-900/70 border-2 border-gray-700 rounded-xl focus:outline-none focus:border-bgmi transition text-white text-lg"
              required
            />
          </motion.div>

          {/* Team Name */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <FaUsers className="absolute left-4 top-1/2 -translate-y-1/2 text-bgmi text-xl" />
            <input
              type="text"
              name="teamName"
              placeholder="Team Name (Optional)"
              value={formData.teamName}
              onChange={handleChange}
              className="w-full pl-14 pr-4 py-4 bg-gray-900/70 border-2 border-gray-700 rounded-xl focus:outline-none focus:border-bgmi transition text-white text-lg"
            />
          </motion.div>

          {/* WhatsApp Number */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-green-500 text-xl" />
            <input
              type="tel"
              name="whatsapp"
              placeholder="WhatsApp Number (e.g., 9876543210)"
              value={formData.whatsapp}
              onChange={handleChange}
              className="w-full pl-14 pr-4 py-4 bg-gray-900/70 border-2 border-gray-700 rounded-xl focus:outline-none focus:border-bgmi transition text-white text-lg"
              required
            />
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="relative"
          >
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-bgmi text-xl" />
            <input
              type="email"
              name="email"
              placeholder="Gmail Address (Optional)"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-14 pr-4 py-4 bg-gray-900/70 border-2 border-gray-700 rounded-xl focus:outline-none focus:border-bgmi transition text-white text-lg"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-gradient-to-r from-bgmi to-orange-600 hover:from-orange-600 hover:to-orange-700 py-5 rounded-xl font-black text-xl flex items-center justify-center gap-3 transition shadow-2xl shadow-bgmi/50 border-2 border-white/20"
          >
            <FaWhatsapp className="text-3xl" />
            Join via WhatsApp
          </motion.button>
        </form>

        {/* Terms Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-center text-gray-500 mt-6 text-sm"
        >
          By registering, you agree to our terms & conditions. Entry fee is non-refundable.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Register;