import { motion } from "framer-motion";

interface PreviewCardProps {
  title: string;
  gradient: string;
  children: React.ReactNode;
}

export const PreviewCard = ({ title, gradient, children }: PreviewCardProps) => {
  return (
    <div className="glass rounded-3xl p-6 space-y-4">
      <h3 className={`text-xl font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
        {title}
      </h3>
      {children}
    </div>
  );
};