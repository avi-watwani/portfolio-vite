import { ServerIcon, LaptopIcon, CloudIcon, DatabaseIcon } from "lucide-react";
import SkillBar from "./SkillBar";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Technical Skills</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            A comprehensive showcase of my technical expertise and the technologies I work with.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div 
            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-lg mr-3">
                <ServerIcon className="text-primary" />
              </span>
              Backend Development
            </h3>
            <div className="space-y-5">
              <SkillBar name="Ruby on Rails" percentage={95} />
              <SkillBar name="Node.js" percentage={90} />
              <SkillBar name="Python" percentage={85} />
              <SkillBar name="MongoDB" percentage={85} />
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-10 h-10 bg-secondary/10 flex items-center justify-center rounded-lg mr-3">
                <LaptopIcon className="text-secondary" />
              </span>
              Frontend Development
            </h3>
            <div className="space-y-5">
              <SkillBar name="Next.js" percentage={95} color="bg-secondary" />
              <SkillBar name="React.js" percentage={90} color="bg-secondary" />
              <SkillBar name="JavaScript/TypeScript" percentage={85} color="bg-secondary" />
              <SkillBar name="CSS/SCSS/Tailwind" percentage={90} color="bg-secondary" />
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-10 h-10 bg-accent/10 flex items-center justify-center rounded-lg mr-3">
                <CloudIcon className="text-accent" />
              </span>
              Cloud & DevOps
            </h3>
            <div className="space-y-5">
              <SkillBar name="AWS Services" percentage={90} color="bg-accent" />
              <SkillBar name="Docker" percentage={85} color="bg-accent" />
              <SkillBar name="CI/CD Pipelines" percentage={80} color="bg-accent" />
              <SkillBar name="Kubernetes" percentage={70} color="bg-accent" />
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-lg mr-3">
                <DatabaseIcon className="text-primary" />
              </span>
              Database & Tools
            </h3>
            <div className="space-y-5">
              <SkillBar name="PostgreSQL" percentage={85} />
              <SkillBar name="Redis" percentage={75} />
              <SkillBar name="Git/GitHub" percentage={90} />
              <SkillBar name="RESTful APIs" percentage={90} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
