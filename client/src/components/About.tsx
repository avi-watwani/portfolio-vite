import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { LaptopIcon, BrainIcon, UsersIcon } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-100 dark:bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">About Me</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-8 transform transition duration-500 hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="mb-4">
                It began over three years ago at an e-learning startup, HowNow Technologies, where I dove headfirst into the world of backend development. What started as curiosity soon became passion for building systems that power real learning experiences.              </p>
              <p className="mb-6">
                Through countless lines of code and late-night debugging, I grew into a developer who loves solving problems and shaping ideas into scalable, reliable systems. Along the way, I've built a strong foundation in Ruby on Rails, Node.js, Python, MySQL, MongoDB, and AWS, and discovered that growth isn't just about writing better code, it's about learning, unlearning, and building with purpose.              </p>
              <div className="mt-6">
                <a 
                  href="/Avi-Watwani-Resume.pdf" 
                  download="Avi-Watwani-Resume.pdf"
                  className="inline-flex items-center text-primary font-medium hover:underline p-0"
                >
                  <svg 
                    className="h-5 w-5 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                    />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <LaptopIcon className="text-primary mr-2" />
                  Backend Expertise
                </h3>
                <p>Backend developer with a passion for creating scalable and efficient web applications. Skilled in Ruby on Rails, Node.js, Python, and cloud technologies.</p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <BrainIcon className="text-primary mr-2" />
                  Problem Solver
                </h3>
                <p>I enjoy tackling complex challenges and finding elegant solutions through creative thinking and analytical approaches.</p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <UsersIcon className="text-primary mr-2" />
                  Team Collaborator
                </h3>
                <p>Effective team player with strong communication skills and experience working in agile environments to deliver high-quality products.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
