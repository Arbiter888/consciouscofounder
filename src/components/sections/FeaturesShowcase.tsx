import { motion } from "framer-motion";
import { Brain, Heart, Globe, Users, Sparkles, DollarSign } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Co-founder",
    description: [
      "24/7 strategic guidance and support",
      "Business plan development",
      "Market analysis insights",
      "Growth strategy planning",
      "Risk assessment and mitigation"
    ],
    savings: "Save $2,000+ in consulting fees",
    costComparison: "Traditional consulting: $500/hour vs. Unlimited AI support"
  },
  {
    icon: Heart,
    title: "AI Coaches Network",
    description: [
      "Access specialized AI coaches",
      "Product development guidance",
      "Marketing strategy support",
      "Financial planning assistance",
      "Operations optimization"
    ],
    savings: "Save $5,000+ in coaching fees",
    costComparison: "Professional coaches: $300/hour vs. Multiple AI coaches access"
  },
  {
    icon: Globe,
    title: "Complete Growth Suite",
    description: [
      "Full platform capabilities",
      "Investor matchmaking access",
      "Startup team building",
      "Global talent solutions",
      "Comprehensive support system"
    ],
    savings: "Save $10,000+ in total costs",
    costComparison: "Traditional startup costs vs. Integrated AI solution"
  }
];

const FeaturesShowcase = () => {
  const totalMonthlySavings = features.reduce((acc, feature) => {
    const savingsMatch = feature.savings.match(/\$(\d+)/);
    return acc + (savingsMatch ? parseInt(savingsMatch[1]) : 0);
  }, 0);

  return (
    <section className="section-padding bg-muted relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-accent/5 to-tertiary/5" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-aurora mb-4">Your AI Support System</h2>
        <p className="text-xl text-muted-foreground/90 max-w-2xl mx-auto mb-12">
          Experience comprehensive startup support with our AI-powered platform. From strategic guidance to specialized coaching, we're here to help you succeed.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            className="group relative"
          >
            <div className="glass rounded-2xl p-8 h-full border border-white/10 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col items-start">
                <feature.icon className="w-12 h-12 text-gradient-aurora transform group-hover:scale-110 transition-transform duration-500" />
                
                <h3 className="text-xl font-semibold text-gradient-aurora mb-3 group-hover:text-gradient-rainbow transition-all duration-500">
                  {feature.title}
                </h3>
                
                <ul className="space-y-2 mb-6">
                  {feature.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground/90 group-hover:text-muted-foreground transition-colors duration-500">
                      <span className="text-secondary mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 p-4 glass rounded-xl bg-white/5">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5 text-gradient-sunshine" />
                    <p className="font-semibold text-gradient-sunshine">{feature.savings}</p>
                  </div>
                  <p className="text-sm text-muted-foreground/80">{feature.costComparison}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesShowcase;