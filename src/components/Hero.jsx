import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import robotAnimation from '../assets/robot-trading.json';

export function Hero() {
  return (
    <div className="text-center relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="particles" id="particles-js"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <Player
          autoplay
          loop
          src={robotAnimation}
          style={{ height: '300px', width: '300px' }}
          className="mx-auto"
        />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="relative z-10"
      >
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Tradegent 🤖
        </h1>
        <p className="text-2xl mb-8">
          The Fastest and Simplest Way to Trade on Solana ⚡
        </p>
      </motion.div>
    </div>
  );
}