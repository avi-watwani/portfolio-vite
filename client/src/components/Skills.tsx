import { ServerIcon, LaptopIcon, CloudIcon, DatabaseIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: ServerIcon,
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { name: "Node.js", level: "Expert" },
        { name: "Ruby on Rails", level: "Expert" },
        { name: "NestJS", level: "Advanced" },
        { name: "Python", level: "Advanced" }
      ]
    },
    {
      title: "Frontend Development", 
      icon: LaptopIcon,
      iconColor: "text-secondary",
      bgColor: "bg-secondary/10",
      skills: [
        { name: "Next.js", level: "Advanced" },
        { name: "JavaScript / TypeScript", level: "Advanced" },
        { name: "React.js", level: "Familiar" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: CloudIcon,
      iconColor: "text-accent",
      bgColor: "bg-accent/10", 
      skills: [
        { name: "AWS Services", level: "Advanced" },
        { name: "GitHub Actions", level: "Advanced" },
        { name: "Docker", level: "Familiar" },
        { name: "Kubernetes", level: "Familiar" }
      ]
    },
    {
      title: "Database & Tools",
      icon: DatabaseIcon,
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { name: "MySQL", level: "Expert" },
        { name: "MongoDB", level: "Advanced" },
        { name: "Firebase", level: "Advanced" },
        { name: "PostgreSQL", level: "Advanced" },
        { name: "GraphQL", level: "Familiar" },
        { name: "SupabaseDB", level: "Familiar" },
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "Advanced":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case "Familiar":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Technical Skills</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            A comprehensive showcase of my technical expertise and proficiency levels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <span className={`w-12 h-12 ${category.bgColor} flex items-center justify-center rounded-lg mr-4`}>
                  <category.icon className={`${category.iconColor} text-xl`} />
                </span>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-4 max-h-[240px] overflow-y-auto pr-2 custom-scrollbar">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors duration-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                  >
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      {skill.name}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
