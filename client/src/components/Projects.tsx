import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaCodeBranch } from "react-icons/fa";

export default function Projects() {
  const projectsData = [
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
      title: "E-Commerce Coffee Store",
      description: "Built a full-stack e-commerce platform for a coffee brand using Next.js and Firebase, integrating Razorpay (sandbox) for payments and AWS Lambda for handling webhook events.",
      category: "E-Commerce Platform",
      image: (
        <div className="w-full h-full bg-gradient-to-r from-amber-600 to-amber-800 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white -mt-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
      ),
      skills: [
        { name: "Next.js", type: "framework" as const },
        { name: "Firebase", type: "tech" as const },
        { name: "Razorpay", type: "tech" as const },
        { name: "AWS Lambda", type: "tech" as const }
      ],
      links: {
        live: "https://coffee.itsurl.com"
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
        live: "https://chesseractindia.com"
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
      title: "Simple Blog",
      description: "A simple blog built with PHP Laravel featuring an admin dashboard for managing posts and a public-facing blog for sharing content. Authentication implemented with Laravel Breeze.",
      category: "Laravel Web Application",
      image: (
        <div className="w-full h-full bg-gradient-to-r from-red-600 to-rose-700 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white -mt-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            {/* Newspaper / blog */}
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h11a2 2 0 012 2v13a1 1 0 01-1 1H6a2 2 0 01-2-2V6z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 8h1a0 0 0 010 0v10a2 2 0 01-2 2h0" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h8M7 11h8M7 14h6" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17h4" />
          </svg>
        </div>
      ),
      skills: [
        { name: "PHP", type: "language" as const },
        { name: "Laravel", type: "framework" as const },
        { name: "Laravel Breeze", type: "tool" as const },
        { name: "MySQL", type: "tech" as const }
      ],
      links: {
        github: "https://github.com/avi-watwani/avi-laravel-blog"
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
