import { motion } from "framer-motion";
import { Brain, Heart, Globe, Users, Sparkles, DollarSign } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Your Personal Guide",
    description: [
      "24/7 AI co-founder support",
      "Strategic startup roadmaps",
      "Comprehensive business assessment",
      "Market & competitor analysis",
      "Global expansion planning"
    ],
    savings: "Save $2000+/month on consulting fees",
    costComparison: "Traditional consulting: $300-500/hour vs. Unlimited AI co-founder support across all business areas"
  },
  {
    icon: Users,
    title: "Meet Your AI Team",
    description: [
      "Connect with specialized AI experts",
      "Product development guidance",
      "Growth & marketing strategy",
      "Operations excellence",
      "Financial planning support"
    ],
    savings: "Save $15000+/month on early hires",
    costComparison: "Early startup hires: $8-15k/month each vs. Full AI founding team access"
  },
  {
    icon: Sparkles,
    title: "Founder Network",
    description: [
      "Connect with fellow founders",
      "Find potential co-founders",
      "Discover investor networks",
      "Access mentor community",
      "Join founder circles"
    ],
    savings: "Save $1000+/month on networking",
    costComparison: "Startup events & memberships: $500+/month vs. AI-powered networking & introductions"
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
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-aurora mb-4">Meet Conscious, Your AI Co-Founder</h2>
        <p className="text-xl text-muted-foreground/90 max-w-2xl mx-auto mb-12">
          Experience your dedicated Conscious AI Co-Founder - your strategic partner in building a successful startup. Get 24/7 support and expert guidance tailored to your venture. <span className="text-gradient-sunshine font-semibold">Save up to ${totalMonthlySavings}+ monthly</span> compared to traditional startup costs.
        </p>
        
        <div className="max-w-3xl mx-auto mb-16 relative">
          <div className="aspect-video rounded-2xl overflow-hidden glass border border-white/10">
            <iframe
              src="https://www.youtube.com/embed/bMmirsbJPEc"
              title="Preview Your Conscious AI Co-Founder"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <p className="text-sm text-muted-foreground/70 mt-4">See how your AI co-founder will help build and scale your startup</p>
        </div>
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