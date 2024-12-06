import { motion } from "framer-motion";

interface BulletListProps {
  items: string[];
  gradient: string;
}

export const BulletList = ({ items, gradient }: BulletListProps) => {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center space-x-3 text-white/90"
        >
          <div className={`w-2 h-2 rounded-full ${gradient}`} />
          <span>{item}</span>
        </motion.li>
      ))}
    </ul>
  );
};