import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaCodeBranch } from "react-icons/fa";

export default function Projects() {
  const projectsData = [
    {
      title: "URL Shortner",
      description: "A simple URL Shortner. Used AWS Services like: Lambda to generate short url, DynamoDB to store the mappings, API Gateway for Lambda trigger, Hosted Zones for custom domain integration.",
      category: "AWS Serverless Application",
      image: (
        <div className="w-full h-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        </div>
      ),
      skills: [
        { name: "AWS Lambda", type: "tech" },
        { name: "DynamoDB", type: "tech" },
        { name: "API Gateway", type: "tech" },
        { name: "Route 53", type: "tech" }
      ],
      links: {
        live: "https://itsurl.com"
      }
    },
    {
      title: "The Chess Website",
      description: "A fullstack chess platform built with Next.js (frontend) and Node.js (backend), featuring real-time gameplay using WebSockets.",
      category: "Full-Stack Web Application",
      image: (
        <div className="w-full h-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        </div>
      ),
      skills: [
        { name: "Next.js", type: "framework" },
        { name: "Node.js", type: "language" },
        { name: "WebSockets", type: "tech" },
        { name: "Real-time", type: "tech" }
      ],
      links: {
        live: "https://chesseractindia.com"
      }
    },
    {
      title: "Notes - Web Application",
      description: "A simple and efficient note-taking app for organizing and managing notes, built with React.js, Node.js, and PostgreSQL, supporting CRUD operations and user authentication.",
      category: "Web Application",
      image: (
        <div className="w-full h-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
      ),
      skills: [
        { name: "React.js", type: "framework" },
        { name: "Node.js", type: "language" },
        { name: "PostgreSQL", type: "tech" },
        { name: "Authentication", type: "tech" }
      ],
      links: {
        github: "https://github.com"
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
