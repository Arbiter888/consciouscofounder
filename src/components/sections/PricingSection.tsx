import { motion } from "framer-motion";
import { Check, Users, Crown, Brain } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$99",
    description: "Your AI Co-founder Support",
    icon: Brain,
    features: [
      "24/7 AI co-founder access",
      "Strategic startup guidance",
      "Business plan development",
      "Market analysis support",
      "Growth strategy planning"
    ],
    credits: "Unlimited AI support",
    creditValue: "Perfect for early-stage founders",
    savings: "Save $2000+/month",
    comparison: "vs. Traditional consulting fees",
    buttonColor: "text-gradient-candy"
  },
  {
    name: "Pro",
    price: "$199",
    description: "Access AI Coaches Network",
    icon: Crown,
    features: [
      "All Basic features",
      "Specialized AI coaches",
      "Product development guidance",
      "Marketing strategy support",
      "Financial planning assistance",
      "Operations optimization"
    ],
    credits: "Multiple AI coach access",
    creditValue: "Expert guidance in key areas",
    savings: "Save $5000+/month",
    comparison: "vs. Multiple specialized consultants",
    buttonColor: "text-gradient-sunshine"
  },
  {
    name: "Premium",
    price: "$299",
    description: "Complete Growth Suite",
    icon: Users,
    features: [
      "All Pro features",
      "Investor matchmaking",
      "Talent pool access",
      "Global hiring solutions",
      "Deal flow pipeline",
      "Startup team building"
    ],
    credits: "Full platform access",
    creditValue: "Complete startup solution",
    savings: "Save $10000+/month",
    comparison: "vs. Traditional startup costs",
    buttonColor: "text-gradient-aurora"
  }
];

const PricingSection = () => {
  const handleGetStarted = (planName: string) => {
    console.log(`Getting started with ${planName} plan`);
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gradient-sunshine mb-6">Choose Your Journey</h2>
        <p className="text-xl text-muted-foreground">
          Select the plan that best fits your transformation goals
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass p-8 rounded-2xl relative"
          >
            <div className="mb-8">
              <h3 className={`text-2xl font-bold ${plan.buttonColor} mb-2`}>{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
              <div className={`text-4xl font-bold ${plan.buttonColor} mb-6`}>
                {plan.price}<span className="text-lg">/month</span>
              </div>
            </div>

            <div className="glass p-4 rounded-xl mb-6">
              <p className="font-semibold mb-1">{plan.credits}</p>
              <p className="text-sm text-muted-foreground">{plan.creditValue}</p>
            </div>

            <div className="glass p-4 rounded-xl mb-6">
              <p className={`font-semibold ${plan.buttonColor} mb-1`}>{plan.savings}</p>
              <p className="text-sm text-muted-foreground">{plan.comparison}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleGetStarted(plan.name)}
              className={`w-full py-3 px-6 rounded-full glass ${plan.buttonColor} font-semibold transition-all duration-300 hover:scale-105`}
            >
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
