import { motion } from "framer-motion";
import { FaTrophy, FaAward, FaGift, FaCoins, FaCrown } from "react-icons/fa";

const Prizes = () => {
  const prizes = [
    { rank: "🥇 1st Place", prize: "₹2000", icon: FaCrown, color: "text-yellow-400", bg: "from-yellow-600/20" },
    { rank: "🥈 2nd Place", prize: "₹1000", icon: FaTrophy, color: "text-gray-300", bg: "from-gray-500/20" },
    { rank: "⭐ 3rd Place", prize: "₹500", icon: FaAward, color: "text-bgmi", bg: "from-bgmi/20" },
  ];

  const additionalPrizes = [
    { title: "Best Sniper", prize: "₹100", icon: FaGift },
    { title: "Top Frag", prize: "₹200", icon: FaCoins },
    { title: "Clutch Master", prize: "₹500", icon: FaAward },
  ];

  return (
    <div className="min-h-screen py-20 px-4 bg-darker relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-bgmi to-yellow-500 rounded-full"
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, opacity: 0 }}
            animate={{ y: [0, -300, 0], opacity: [0, 0.6, 0] }}
            transition={{ duration: Math.random() * 6 + 4, repeat: Infinity, delay: Math.random() * 3 }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl sm:text-6xl md:text-7xl text-orange-500 font-gaming text-center mb-6 glow"
          style={{ textShadow: "0 0 30px #FF4500" }}
        >
          PRIZE POOL
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-400 mb-16 text-2xl"
        >
          Total: <span className="text-bgmi font-bold">₹50,000+</span> in Cash Prizes 🏆
        </motion.p>

        {/* Main Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {prizes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotateY: 180 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.08, rotateY: 10 }}
              className={`bg-gradient-to-br ${item.bg} to-black p-10 rounded-2xl border-2 border-gray-800 hover:border-bgmi transition text-center shadow-2xl group`}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                <item.icon className={`text-7xl ${item.color} mx-auto mb-6 group-hover:text-white transition`} />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-white">{item.rank}</h3>
              <motion.p
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className={`text-4xl md:text-5xl font-gaming ${item.color} font-black`}
              >
                {item.prize}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Additional Prizes */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-gradient-to-br from-gray-900 via-gray-900 to-black p-10 rounded-2xl border-2 border-bgmi/50 mb-12 shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <FaGift className="text-5xl text-bgmi" />
            <h2 className="text-4xl font-gaming text-white">Special Awards</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalPrizes.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.15 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-bgmi/10 to-black p-6 rounded-xl border border-bgmi/30 text-center"
              >
                <award.icon className="text-5xl text-bgmi mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">{award.title}</h3>
                <p className="text-3xl font-gaming text-bgmi">{award.prize}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How to Win */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="bg-gradient-to-r from-bgmi/20 via-orange-600/20 to-bgmi/20 p-10 rounded-2xl border-2 border-bgmi/50 shadow-2xl"
        >
          <h2 className="text-4xl font-gaming text-center mb-8 text-white">How to Win</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: "1", title: "Win Matches", desc: "More match wins = More points" },
              { step: "2", title: "Get Kills", desc: "Each kill gives bonus points" },
              { step: "3", title: "Top 3", desc: "Top 3 teams qualify for finals" },
              { step: "4", title: "Finals", desc: "Winner gets ₹2000 cash prize" },
              { step: "5", title: "MVP", desc: "Highest kills = MVP award" },
              { step: "6", title: "Consistency", desc: "Perform in all matches" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 + index * 0.1 }}
                className="bg-black/40 p-6 rounded-xl border border-bgmi/30"
              >
                <div className="text-5xl font-gaming text-bgmi mb-3">{item.step}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Prizes;