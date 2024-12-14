import { motion } from 'framer-motion';
import { FaRobot, FaHourglassHalf, FaChartLine } from 'react-icons/fa';
import { Player } from '@lottiefiles/react-lottie-player';
import tradingEmotionAnimation from '../assets/trading-emotion.json';
import slowExecutionAnimation from '../assets/slow-execution.json';
import priceDifferenceAnimation from '../assets/price-difference.json';

const problems = [
  {
    icon: <FaRobot className="text-4xl text-primary mb-4" />,
    title: "Emotional Trading 😢",
    desc: "Users making irrational decisions based on emotions",
    animation: tradingEmotionAnimation
  },
  {
    icon: <FaHourglassHalf className="text-4xl text-primary mb-4" />,
    title: "Slow Execution ⏰",
    desc: "Missing opportunities due to delayed trade execution",
    animation: slowExecutionAnimation
  },
  {
    icon: <FaChartLine className="text-4xl text-primary mb-4" />,
    title: "High Slippage 📉",
    desc: "Significant price differences between expected and executed trades",
    animation: priceDifferenceAnimation
  }
];

export function Problems() {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Problems We Solve 🎯
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {problems.map((problem, index) => (
          <motion.div
            key={index}
            className="bg-dark/50 p-8 rounded-2xl backdrop-blur-lg border border-secondary/20 hover:border-primary/50 transition-all duration-300"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10 }}
          >
            {problem.icon}
            <h3 className="text-2xl font-bold mb-4 text-primary">{problem.title}</h3>
            <p className="text-gray-300">{problem.desc}</p>
            <Player
              autoplay
              loop
              src={problem.animation}
              style={{ height: '150px' }}
              className="mt-4"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}