import { motion } from "framer-motion";
import { AnimatedBackground } from "../hero/AnimatedBackground";
import { FloatingParticles } from "../hero/FloatingParticles";
import { FeatureBadges } from "../hero/FeatureBadges";
import { Bot, UserPlus, Users } from "lucide-react";

const HeroWithFeatures = () => {
  const handleEmailClick = (type: 'signup' | 'referral') => {
    const subject = type === 'signup' 
      ? 'Early Access Request for Conscious AI Co-Founder'
      : 'Conscious AI Co-Founder Referral';
    
    const body = type === 'signup'
      ? 'Hello,\n\nI would like to request early access to my personal Conscious AI Co-Founder.'
      : 'Hello,\n\nI have a referral for Conscious AI Co-Founder program.';
    
    const mailtoLink = `mailto:membership@conscious.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="min-h-screen section-padding relative overflow-hidden flex items-center">
      <AnimatedBackground />
      <FloatingParticles />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Bot className="w-5 h-5 text-gradient-rainbow" />
          <span className="text-gradient-rainbow text-sm font-medium">Meet Conscious Co-Founder & Your AI Founding Team</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <span className="text-2xl md:text-3xl font-medium inline-block">
            Build your dream startup with <span className="text-gradient-sunshine">Conscious</span>
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-tight"
        >
          Your Journey to
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gradient-aurora block mt-2 relative"
          >
            Startup Success
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-xl md:text-2xl text-muted-foreground/90 max-w-2xl mx-auto leading-relaxed glass p-6 rounded-xl"
        >
          Join <span className="text-gradient-rainbow font-medium">Conscious Co-Founder</span> and your carefully chosen 
          <span className="text-gradient-aurora font-medium"> AI Founding Team</span> on an entrepreneurial journey. 
          Connect with <span className="text-gradient-candy font-medium">like-minded founders</span> to build together 
          as they guide you through <span className="text-gradient-sunshine font-medium">strategy</span>, 
          <span className="text-gradient-neon font-medium"> product</span>, 
          <span className="text-gradient-mystic font-medium"> growth</span>, 
          <span className="text-gradient-ocean font-medium"> operations</span>, and 
          <span className="text-gradient-cosmic font-medium"> fundraising</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex items-center justify-center gap-6 flex-wrap"
        >
          <motion.button
            onClick={() => handleEmailClick('signup')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass px-8 py-4 rounded-full font-medium hover-lift flex items-center gap-2 group text-lg relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20"
              animate={{
                x: ["0%", "100%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <UserPlus className="w-5 h-5" />
            <span className="relative z-10">Start Your Startup Journey</span>
          </motion.button>
          
          <motion.button
            onClick={() => handleEmailClick('referral')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full font-medium border border-white/10 hover:bg-white/5 transition-colors text-lg relative overflow-hidden flex items-center gap-2"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-tertiary/20 to-highlight/20"
              animate={{
                x: ["0%", "100%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: 1.5,
              }}
            />
            <Users className="w-5 h-5" />
            <span className="relative z-10">I Have a Referral</span>
          </motion.button>
        </motion.div>

        <FeatureBadges />
      </motion.div>
    </section>
  );
};

export default HeroWithFeatures;