import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaCodeBranch } from "react-icons/fa";

export default function Projects() {
  const projectsData = [
    {
      title: "CDR Viewer",
      description: "Android app for viewing CDR files on mobile with export to PDF and JPG — clean, ad-free experience.",
      category: "Android Application",
      image: (
        <div className="w-full h-full bg-gradient-to-r from-green-600 to-emerald-700 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white -mt-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
      ),
      skills: [
        { name: "Android", type: "tech" as const },
        { name: "Expo", type: "framework" as const },
        { name: "React Native", type: "framework" as const },
        { name: "TypeScript", type: "language" as const },
      ],
      links: {
        live: "/cdr-viewer"
      }
    },
    {
      title: "AI Quiz Maker",
      description: "Implemented a Generative AI document-to-quiz system using OpenAI LLM integration and a RAG pipeline (vector embeddings + retrieval) to generate grounded quizzes from PDFs and doc files, and publish them via shareable URLs.",
      category: "GenAI / RAG Application",
      image: (
        <div className="w-full h-full bg-gradient-to-r from-fuchsia-600 to-indigo-700 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white -mt-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5h6m-6 4h6m-6 4h6M7 4h10a2 2 0 012 2v14a1 1 0 01-1 1H6a1 1 0 01-1-1V6a2 2 0 012-2z" />
          </svg>
        </div>
      ),
      skills: [
        { name: "OpenAI", type: "tech" as const },
        { name: "RAG Pipeline", type: "tech" as const },
        { name: "Vector Embeddings", type: "tech" as const },
        { name: "LLM Integration", type: "tech" as const }
      ],
      links: {
        live: "https://quiz.itsurl.com"
      }
    },
    {
      title: "URL Shortner",
      description: "A simple URL Shortner. Used AWS Services like: Lambda to generate short url, DynamoDB to store the mappings, API Gateway for Lambda trigger, Hosted Zones for custom domain integration.",
      category: "AWS Serverless Application",
      image: (
        <div className="w-full h-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white -mt-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        </div>
      ),
      skills: [
        { name: "AWS Lambda", type: "tech" as const },
        { name: "DynamoDB", type: "tech" as const },
        { name: "API Gateway", type: "tech" as const }
      ],
      links: {
        live: "https://itsurl.com"
      }
    },
    {
      title: "The Chess Website",
      description: "A full-stack chess platform built with Next.js and Node.js, featuring real-time gameplay via WebSockets. Players can create accounts, challenge opponents, track game history, and enjoy live move synchronization with a responsive interface.",
      category: "Full-Stack Web Application",
      image: (
        <div className="w-full h-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white -mt-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {/* Chessboard Pattern */}
            <rect x="4" y="4" width="16" height="16" strokeWidth="2" rx="1"/>
            <rect x="4" y="4" width="4" height="4" fill="currentColor" opacity="0.3"/>
            <rect x="12" y="4" width="4" height="4" fill="currentColor" opacity="0.3"/>
            <rect x="8" y="8" width="4" height="4" fill="currentColor" opacity="0.3"/>
            <rect x="16" y="8" width="4" height="4" fill="currentColor" opacity="0.3"/>
            <rect x="4" y="12" width="4" height="4" fill="currentColor" opacity="0.3"/>
            <rect x="12" y="12" width="4" height="4" fill="currentColor" opacity="0.3"/>
            <rect x="8" y="16" width="4" height="4" fill="currentColor" opacity="0.3"/>
            <rect x="16" y="16" width="4" height="4" fill="currentColor" opacity="0.3"/>
          </svg>
        </div>
      ),
      skills: [
        { name: "Next.js", type: "framework" as const },
        { name: "Node.js", type: "language" as const },
        { name: "WebSockets", type: "tech" as const },
        { name: "SupabaseDB", type: "tech" as const }
      ],
      links: {
        live: "https://chess-360.vercel.app"
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
            onClick={() => window.open("https://github.com/avi-watwani", "_blank")}
          >
            <FaCodeBranch className="mr-2" />
            View More Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
