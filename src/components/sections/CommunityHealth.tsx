import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Users, Globe } from "lucide-react";
import { ConnectionCategory } from "../community/ConnectionCategory";
import { useState, useEffect } from "react";

const categories = [
  {
    title: "Investor Connections",
    titleText: "Meet Investor Connections",
    description: "Get added to investors' deal flow pipeline and secure funding for your startup",
    icon: Briefcase,
    iconColor: "text-emerald-500",
    matches: [
      {
        name: "Sarah Chen",
        image: "https://i.pravatar.cc/150?img=47",
        aiCoach: "Investment AI Coach",
        aiSuggestion: "Sarah's VC firm focuses on early-stage SaaS startups with $500K-$2M seed rounds. Your business model aligns with their investment thesis.",
        interests: ["SaaS", "B2B", "AI/ML"]
      },
      {
        name: "Michael Ross",
        image: "https://i.pravatar.cc/150?img=12",
        aiCoach: "Investment AI Coach",
        aiSuggestion: "Michael's angel syndicate is actively looking for AI-powered startups in your space.",
        interests: ["Deep Tech", "Enterprise", "AI"]
      }
    ]
  },
  {
    title: "Startup Talent",
    titleText: "Meet Talent",
    description: "Build your dream team with passionate professionals ready to join your startup post-funding",
    icon: Users,
    iconColor: "text-blue-500",
    matches: [
      {
        name: "David Park",
        image: "https://i.pravatar.cc/150?img=68",
        aiCoach: "Talent AI Coach",
        aiSuggestion: "David is a senior full-stack developer with startup experience, willing to join with equity + salary post-funding.",
        interests: ["Full-Stack", "AI/ML", "Product"]
      },
      {
        name: "Lisa Wong",
        image: "https://i.pravatar.cc/150?img=32",
        aiCoach: "Talent AI Coach",
        aiSuggestion: "Lisa is a product manager from a unicorn startup, interested in joining early-stage ventures.",
        interests: ["Product", "Strategy", "Growth"]
      }
    ]
  },
  {
    title: "Offshore Talent",
    titleText: "Meet Offshore Talent",
    description: "Connect with skilled international professionals for cost-effective team scaling",
    icon: Globe,
    iconColor: "text-purple-500",
    matches: [
      {
        name: "Aisha Rahman",
        image: "https://i.pravatar.cc/150?img=45",
        aiCoach: "Global Talent AI Coach",
        aiSuggestion: "Based in Malaysia, Aisha is a full-stack developer available for $1,000/month - an 85% cost saving vs. US rates ($6,500/month).",
        interests: ["React", "Node.js", "AWS"]
      },
      {
        name: "Raj Patel",
        image: "https://i.pravatar.cc/150?img=15",
        aiCoach: "Global Talent AI Coach",
        aiSuggestion: "Senior UI/UX designer from Malaysia seeking $1,200/month - significant savings compared to US rates ($8,000/month).",
        interests: ["UI/UX", "Figma", "Design Systems"]
      }
    ]
  }
];

const CommunityHealth = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeMatch, setActiveMatch] = useState<{ [key: number]: number }>({
    0: 0,
    1: 0,
    2: 0
  });

  useEffect(() => {
    // Reduced interval from 5000ms to 3000ms for more frequent transitions
    const interval = setInterval(() => {
      setActiveMatch((prev) => {
        const newState = { ...prev };
        newState[activeCategory] = (prev[activeCategory] + 1) % categories[activeCategory].matches.length;
        return newState;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [activeCategory]);

  return (
    <section className="section-padding relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <AnimatePresence mode="wait">
          <motion.h2
            key={categories[activeCategory].titleText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }} // Reduced from 0.5 to 0.3 for faster transitions
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-rainbow mb-4"
          >
            {categories[activeCategory].titleText}
          </motion.h2>
        </AnimatePresence>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Our AI coaches analyze your goals, values, and journey to connect you with like-minded individuals who can enrich your path to wellness and growth.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            onClick={() => setActiveCategory(index)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`${index}-${activeMatch[index]}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }} // Reduced from 0.5 to 0.3 for faster transitions
                className={`cursor-pointer ${activeCategory === index ? 'scale-105' : 'scale-95'} transition-all duration-300`}
              >
                <ConnectionCategory
                  title={category.title}
                  description={category.description}
                  icon={category.icon}
                  iconColor={category.iconColor}
                  match={category.matches[activeMatch[index]]}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CommunityHealth;