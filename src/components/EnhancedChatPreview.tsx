import { motion } from "framer-motion";
import { useState } from "react";
import { PreviewCard } from "./chat-preview/PreviewCard";
import { BulletList } from "./chat-preview/BulletList";
import { TestimonialCard } from "./chat-preview/TestimonialCard";
import { CoachSelector } from "./chat-preview/CoachSelector";
import { Coach } from "./chat-preview/types";

interface EnhancedChatPreviewProps {
  onServiceChange: (service: string) => void;
}

const coaches: Coach[] = [
  { 
    id: "strategy", 
    name: "Sophia",
    title: "Strategy Lead",
    gradient: "from-green-400 via-cyan-500 to-blue-500",
    bgGradient: "bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500",
    examples: [
      "How do I validate my startup idea?",
      "What's my target market size?",
      "How to create a business model?"
    ],
    capabilities: [
      "Market analysis",
      "Business model design",
      "Strategic planning"
    ]
  },
  { 
    id: "product", 
    name: "Isabella",
    title: "Product Lead",
    gradient: "from-pink-500 via-purple-500 to-indigo-500",
    bgGradient: "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500",
    examples: [
      "How to build an MVP?",
      "What features should I prioritize?",
      "User feedback analysis?"
    ],
    capabilities: [
      "Product roadmap",
      "Feature prioritization",
      "User experience design"
    ]
  },
  { 
    id: "growth", 
    name: "Olivia",
    title: "Growth Lead",
    gradient: "from-yellow-400 via-orange-500 to-red-500",
    bgGradient: "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500",
    examples: [
      "How to acquire first users?",
      "Best marketing channels?",
      "Sales strategy for B2B?"
    ],
    capabilities: [
      "Growth strategy",
      "Marketing planning",
      "Sales optimization"
    ]
  },
  { 
    id: "operations", 
    name: "Emma",
    title: "Operations Lead",
    gradient: "from-lime-400 via-emerald-500 to-teal-500",
    bgGradient: "bg-gradient-to-r from-lime-400 via-emerald-500 to-teal-500",
    examples: [
      "How to structure my team?",
      "Best tools for startups?",
      "Legal compliance needs?"
    ],
    capabilities: [
      "Team structure",
      "Process optimization",
      "Legal compliance"
    ]
  },
  { 
    id: "finance", 
    name: "Ava",
    title: "Finance Lead",
    gradient: "from-blue-400 via-indigo-500 to-purple-500",
    bgGradient: "bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500",
    examples: [
      "How to raise seed funding?",
      "Pitch deck feedback?",
      "Cap table structure?"
    ],
    capabilities: [
      "Fundraising strategy",
      "Financial modeling",
      "Investor relations"
    ]
  },
];

const EnhancedChatPreview = ({ onServiceChange }: EnhancedChatPreviewProps) => {
  const [activeCoach, setActiveCoach] = useState(coaches[0]);

  const handleCoachChange = (coach: Coach) => {
    setActiveCoach(coach);
    onServiceChange(coach.id);
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <CoachSelector 
        coaches={coaches}
        activeCoach={activeCoach}
        onCoachChange={handleCoachChange}
      />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <PreviewCard title="Example Questions" gradient={activeCoach.gradient}>
          <BulletList items={activeCoach.examples} gradient={activeCoach.bgGradient} />
        </PreviewCard>

        <PreviewCard title="How I Can Help" gradient={activeCoach.gradient}>
          <BulletList items={activeCoach.capabilities} gradient={activeCoach.bgGradient} />
        </PreviewCard>

        <PreviewCard title="Expert Network" gradient={activeCoach.gradient}>
          <BulletList 
            items={[
              "Startup Founders",
              "Industry Experts",
              "Venture Capitalists"
            ]} 
            gradient={activeCoach.bgGradient}
          />
        </PreviewCard>

        <PreviewCard title="Founder Testimonial" gradient={activeCoach.gradient}>
          <TestimonialCard
            quote={`${activeCoach.name} helped me transform my startup journey. The strategic guidance and expert connections made all the difference!`}
            author="Sarah Chen"
            initials="SC"
            gradient={activeCoach.bgGradient}
          />
        </PreviewCard>
      </motion.div>
    </div>
  );
};

export default EnhancedChatPreview;