import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  author: string;
  initials: string;
  gradient: string;
}

export const TestimonialCard = ({ quote, author, initials, gradient }: TestimonialCardProps) => {
  return (
    <div className="space-y-4">
      <motion.blockquote
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-white/90 italic"
      >
        "{quote}"
      </motion.blockquote>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="flex items-center space-x-2 text-white/70"
      >
        <div className={`w-8 h-8 rounded-full ${gradient} flex items-center justify-center`}>
          <span className="text-white text-sm">{initials}</span>
        </div>
        <span>{author}</span>
      </motion.div>
    </div>
  );
};