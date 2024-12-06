import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ChatPreview = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-3xl p-8 max-w-3xl mx-auto backdrop-blur-xl bg-black/40"
    >
      <div className="space-y-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-start gap-4"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex-shrink-0 animate-pulse flex items-center justify-center">
            <span className="text-white text-xl">🤖</span>
          </div>
          <div className="flex flex-col space-y-1 max-w-[80%]">
            <p className="text-lg bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Hello! I'm your AI wellness coach. I can help you create a balanced lifestyle that nurtures your mind, body, and spirit. What would you like to focus on today?
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-start gap-4 justify-end"
        >
          <div className="flex flex-col space-y-1 max-w-[80%]">
            <div className="relative glass rounded-2xl p-4 bg-white/5">
              <p className="text-lg bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                I've been feeling stressed lately and would like to improve my overall well-being.
              </p>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center">
            <span className="text-white text-xl">👤</span>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-start gap-4"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex-shrink-0 animate-pulse flex items-center justify-center">
            <span className="text-white text-xl">🤖</span>
          </div>
          <div className="flex flex-col space-y-4 max-w-[80%]">
            <p className="text-lg bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              I understand you're dealing with stress. Let me assess your situation:
            </p>
            <ul className="space-y-2">
              <li className="text-lg bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                1. You're seeking overall well-being improvement
              </li>
              <li className="text-lg bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                2. Stress is affecting your daily life
              </li>
              <li className="text-lg bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                3. You're ready to make positive changes
              </li>
            </ul>
            <p className="text-lg bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Based on this, I recommend starting with stress management techniques and building a holistic wellness routine. To provide you with the most personalized support:
            </p>
          </div>
        </motion.div>
      </div>
      
      <div className="mt-8 flex gap-3">
        <input 
          type="text" 
          placeholder="Type your message..." 
          className="flex-1 glass rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all text-lg bg-white/5"
        />
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="glass p-4 rounded-full hover:bg-white/10 transition-colors group"
        >
          <Send className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ChatPreview;