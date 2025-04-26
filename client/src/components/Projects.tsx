import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaCodeBranch } from "react-icons/fa";

export default function Projects() {
  const projectsData = [
    {
      title: "Modern LMS Platform",
      description: "A comprehensive learning management system with course creation, progress tracking, and interactive assessments.",
      category: "Learning Management System",
      image: (
        <div className="w-full h-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
      ),
      skills: [
        { name: "Next.js", type: "framework" },
        { name: "Node.js", type: "language" },
        { name: "MongoDB", type: "tech" },
        { name: "AWS", type: "tool" }
      ],
      links: {
        github: "https://github.com",
        live: "https://example.com"
      }
    },
    {
      title: "ShopSmart",
      description: "A full-featured e-commerce platform with payment integration, inventory management, and analytics dashboard.",
      category: "E-commerce Platform",
      image: (
        <div className="w-full h-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
      ),
      skills: [
        { name: "React.js", type: "framework" },
        { name: "Ruby on Rails", type: "language" },
        { name: "PostgreSQL", type: "tech" },
        { name: "Stripe API", type: "tool" }
      ],
      links: {
        github: "https://github.com",
        live: "https://example.com"
      }
    },
    {
      title: "DevToolbox",
      description: "A suite of developer tools for code formatting, API testing, and documentation generation with AWS integration.",
      category: "Developer Toolkit",
      image: (
        <div className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
      ),
      skills: [
        { name: "React.js", type: "framework" },
        { name: "Python", type: "language" },
        { name: "AWS Lambda", type: "tech" },
        { name: "API Gateway", type: "tool" }
      ],
      links: {
        github: "https://github.com",
        live: "https://example.com"
      }
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Featured Projects</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            A selection of my recent work showcasing my expertise and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              category={project.category}
              skills={project.skills}
              links={project.links}
            />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button 
            size="lg" 
            className="bg-primary text-white hover:bg-blue-600 inline-flex items-center"
            onClick={() => window.open("https://github.com", "_blank")}
          >
            <FaCodeBranch className="mr-2" />
            View More Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
