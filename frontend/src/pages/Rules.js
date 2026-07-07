import { motion } from "framer-motion";
import { FaCheckCircle, FaClock, FaUsers, FaTrophy, FaBan, FaAward, FaGamepad, FaExclamationTriangle } from "react-icons/fa";

const Rules = () => {
  const rules = [
    { icon: FaUsers, title: "Team Size", desc: "Squad: 4 players (Max 1 substitute)", color: "text-blue-500" },
    { icon: FaClock, title: "Match Timing", desc: "Matches start at 8 PM IST daily", color: "text-yellow-500" },
    { icon: FaGamepad, title: "Game Mode", desc: "TPP - Erangel, Miramar, Sanhok", color: "text-green-500" },
    { icon: FaTrophy, title: "Prize Distribution", desc: "1st: ₹2,000 | 2nd: ₹1,000 | 3rd: ₹500", color: "text-bgmi" },
  ];

  const generalRules = [
    "Minimum age: 15 years",
    "No hacking, cheating, or exploiting bugs",
    "Decision of admin is final",
    "Registration fee: ₹200 per team",
    "Late teams will be disqualified",
    "Use only official BGMI client",
    "Respect all players and admins",
    "Screenshot proof required for disputes",
  ];

  return (
    <div className="min-h-screen py-20 px-4 bg-darker relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl text-bgmi/5"
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, rotate: 0 }}
            animate={{ y: [0, -200, 0], x: [0, Math.random() * 100 - 50, 0], rotate: [0, 180, 360] }}
            transition={{ duration: Math.random() * 10 + 5, repeat: Infinity }}
          >
            🎮
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto relative z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl sm:text-6xl md:text-7xl text-orange-500 font-gaming text-center mb-6 glow"
          style={{ textShadow: "0 0 30px #FF4500" }}
        >
          TOURNAMENT RULES
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-400 mb-16 text-xl"
        >
          Read carefully before registering ⚠️
        </motion.p>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {rules.map((rule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(255, 69, 0, 0.3)" }}
              className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border-2 border-gray-800 hover:border-bgmi transition flex items-start gap-6"
            >
              <rule.icon className={`text-6xl ${rule.color} flex-shrink-0`} />
              <div>
                <h3 className="text-2xl font-bold mb-3 text-white">{rule.title}</h3>
                <p className="text-gray-300 text-lg">{rule.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* General Rules */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-br from-gray-900 via-gray-900 to-black p-10 rounded-2xl border-2 border-bgmi/50 mb-12 shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <FaExclamationTriangle className="text-5xl text-yellow-500" />
            <h2 className="text-4xl font-gaming text-white">General Rules</h2>
          </div>
          <ul className="space-y-4">
            {generalRules.map((rule, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="flex items-start gap-4 text-gray-300 text-lg"
              >
                <FaCheckCircle className="text-green-500 text-2xl mt-1 flex-shrink-0" />
                <span>{rule}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Prohibited Actions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="bg-gradient-to-br from-red-900/30 to-black p-10 rounded-2xl border-2 border-red-500/50 shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <FaBan className="text-5xl text-red-500" />
            <h2 className="text-4xl font-gaming text-red-400">Prohibited Actions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Hacking / Cheating",
              "Team Killing",
              "Abuse / Toxic Behavior",
              "Exploiting Bugs",
              "Third-party Software",
              "Fake Identity",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 + index * 0.1 }}
                className="bg-red-900/20 p-4 rounded-lg border border-red-500/30 text-red-300 text-lg flex items-center gap-3"
              >
                <FaBan className="text-red-500" />
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Rules;