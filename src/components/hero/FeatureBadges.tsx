import { motion } from "framer-motion";

export const FeatureBadges = () => {
  const features = [
    { text: "AI Co-Founder" },
    { text: "Startup Strategy" },
    { text: "Product Development" },
    { text: "Growth & Fundraising" }
  ];

  return (
    <div className="mt-20 flex justify-center gap-8 flex-wrap">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 + index * 0.1 }}
          className="glass px-6 py-3 rounded-full text-base animate-float text-gray-800"
          style={{
            animationDelay: `${index * 0.2}s`
          }}
        >
          {feature.text}
        </motion.div>
      ))}
    </div>
  );
};