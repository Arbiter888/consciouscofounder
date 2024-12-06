import { motion } from "framer-motion";
import { Check, Users, Crown } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$99",
    description: "Get started with your AI Co-founder",
    icon: Users,
    features: [
      "24/7 AI Co-founder access",
      "Strategic planning assistance",
      "Business model validation",
      "Market analysis",
      "Decision support system"
    ],
    credits: "Unlimited AI interactions",
    creditValue: "Perfect for early-stage founders",
    savings: "Save $10,000+ in consulting fees",
    comparison: "vs. Traditional business consulting",
    buttonColor: "text-gradient-candy"
  },
  {
    name: "Pro",
    price: "$199",
    description: "Access our network of AI coaches",
    icon: Crown,
    features: [
      "All Basic features",
      "Access to specialized AI coaches",
      "Leadership development",
      "Industry-specific guidance",
      "Performance optimization",
      "Growth strategy planning"
    ],
    credits: "Full coaches network access",
    creditValue: "Accelerate your growth",
    savings: "Save $20,000+ in coaching fees",
    comparison: "vs. Professional coaching services",
    buttonColor: "text-gradient-sunshine"
  },
  {
    name: "Premium",
    price: "$299",
    description: "Complete suite with matchmaking",
    icon: Users,
    features: [
      "All Pro features",
      "Investor matchmaking",
      "Talent pool access",
      "Strategic partnerships",
      "Global network access",
      "Priority support"
    ],
    credits: "Full platform access",
    creditValue: "Everything you need to scale",
    savings: "Save $50,000+ in annual fees",
    comparison: "vs. Traditional accelerator programs",
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
