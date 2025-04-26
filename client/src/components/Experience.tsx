import { BriefcaseIcon, GraduationCapIcon, BuildingIcon, CalendarIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-100 dark:bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Work Experience</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            My professional journey as a software engineer spanning nearly 3 years.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative border-l-4 border-primary ml-4 md:ml-0 pl-8 md:pl-0">
            {/* Experience Item 1 */}
            <motion.div 
              className="mb-16 md:ml-12 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -left-14 md:-left-12 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <BriefcaseIcon className="text-white h-4 w-4" />
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl md:text-2xl font-bold">Software Development Engineer</h3>
                  <div className="flex items-center mt-2 md:mt-0">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      Current
                    </span>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center text-slate-600 dark:text-slate-400 mb-6">
                  <div className="flex items-center mb-2 md:mb-0">
                    <BuildingIcon className="mr-2 h-4 w-4" />
                    <span className="font-medium">HowNow</span>
                  </div>
                  <span className="hidden md:block mx-3">•</span>
                  <div className="flex items-center">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    <span>April 2023 - Present</span>
                  </div>
                </div>
                <ul className="space-y-2 ml-6 list-disc text-slate-700 dark:text-slate-300">
                  <li>Developing and maintaining learning management platform using React.js and Node.js</li>
                  <li>Implementing scalable backend services with AWS serverless architecture</li>
                  <li>Leading migration from monolithic architecture to microservices</li>
                  <li>Collaborating with cross-functional teams to deliver high-quality features</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded-full text-sm">React.js</span>
                  <span className="bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded-full text-sm">AWS</span>
                  <span className="bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded-full text-sm">MongoDB</span>
                </div>
              </div>
            </motion.div>

            {/* Experience Item 2 */}
            <motion.div 
              className="mb-16 md:ml-12 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute -left-14 md:-left-12 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <BriefcaseIcon className="text-white h-4 w-4" />
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl md:text-2xl font-bold">Full Stack Developer</h3>
                </div>
                <div className="flex flex-col md:flex-row md:items-center text-slate-600 dark:text-slate-400 mb-6">
                  <div className="flex items-center mb-2 md:mb-0">
                    <BuildingIcon className="mr-2 h-4 w-4" />
                    <span className="font-medium">TechInnovate Solutions</span>
                  </div>
                  <span className="hidden md:block mx-3">•</span>
                  <div className="flex items-center">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    <span>June 2022 - March 2023</span>
                  </div>
                </div>
                <ul className="space-y-2 ml-6 list-disc text-slate-700 dark:text-slate-300">
                  <li>Designed and developed web applications using Ruby on Rails and React</li>
                  <li>Implemented RESTful APIs and database architecture</li>
                  <li>Improved application performance by 40% through code optimization</li>
                  <li>Participated in code reviews and mentored junior developers</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded-full text-sm">Ruby on Rails</span>
                  <span className="bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                  <span className="bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded-full text-sm">Redis</span>
                </div>
              </div>
            </motion.div>

            {/* Education Item */}
            <motion.div 
              className="md:ml-12 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="absolute -left-14 md:-left-12 top-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                <GraduationCapIcon className="text-white h-4 w-4" />
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl md:text-2xl font-bold">B.Tech in Computer Science</h3>
                </div>
                <div className="flex flex-col md:flex-row md:items-center text-slate-600 dark:text-slate-400 mb-6">
                  <div className="flex items-center mb-2 md:mb-0">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 mr-2" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" 
                      />
                    </svg>
                    <span className="font-medium">Delhi Technological University</span>
                  </div>
                  <span className="hidden md:block mx-3">•</span>
                  <div className="flex items-center">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    <span>2018 - 2022</span>
                  </div>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  Graduated with honors in Computer Science with focus on algorithms, data structures, and software engineering principles. Active member of the university coding club and participated in multiple hackathons.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
