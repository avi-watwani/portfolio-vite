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
                I'm a passionate Software Engineer with nearly 3 years of experience building scalable and efficient web applications. Currently working as a Software Development Engineer at HowNow, where I contribute to developing innovative learning solutions.
              </p>
              <p className="mb-6">
                My expertise spans across full-stack development, with a strong foundation in both frontend and backend technologies. I'm dedicated to writing clean, maintainable code and staying up-to-date with the latest industry trends.
              </p>
              <div className="flex items-center">
                <svg 
                  className="h-16 mr-4 text-primary" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" />
                  <path d="M15 9L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <h4 className="font-medium text-lg">AWS Certified Developer</h4>
                  <p className="text-slate-600 dark:text-slate-400">Associate Level</p>
                </div>
              </div>
              <div className="mt-6">
                <Button variant="link" className="text-primary font-medium hover:underline p-0">
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
                </Button>
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
                  Technical Expertise
                </h3>
                <p>Full-stack developer with a passion for creating scalable and efficient web applications. Skilled in both frontend and backend technologies.</p>
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
