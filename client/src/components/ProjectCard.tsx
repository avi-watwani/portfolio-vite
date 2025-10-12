import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: React.ReactNode;
  category: string;
  skills: Array<{ name: string; type: "tech" | "framework" | "language" | "tool" }>;
  links: {
    github?: string;
    live?: string;
  };
}

export default function ProjectCard({ 
  title, 
  description, 
  image, 
  category, 
  skills, 
  links 
}: ProjectCardProps) {
  return (
    <motion.div 
      className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-48 overflow-hidden">
        {image}
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
          <span className="text-white font-medium">{category}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className={`skill-bg-${skill.type} skill-badge`}
            >
              {skill.name}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {links?.github && (
            <a 
              href={links.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:text-primary/80 font-medium flex items-center"
            >
              <FaGithub className="mr-1" /> Code
            </a>
          )}
          {links?.live && (
            <a 
              href={links.live} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:text-primary/80 font-medium flex items-center"
            >
              <FaExternalLinkAlt className="mr-1" /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
