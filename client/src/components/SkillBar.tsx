import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  percentage: number;
  color?: string;
}

export default function SkillBar({ name, percentage, color = "bg-primary" }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
        <motion.div 
          className={`${color} h-2.5 rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    </div>
  );
}
