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
            My professional journey as a software engineer spanning over 3 years.
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
                  <h3 className="text-xl md:text-2xl font-bold">Software Engineer</h3>
                  <div className="flex items-center mt-2 md:mt-0">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      June 2022 - October 2025
                    </span>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center text-slate-600 dark:text-slate-400 mb-6">
                  <div className="flex items-center mb-2 md:mb-0">
                    <BuildingIcon className="mr-2 h-4 w-4" />
                    <span className="font-medium">HowNow Technologies Pvt. Ltd.</span>
                  </div>
                </div>
                <ul className="space-y-2 ml-6 list-disc text-slate-700 dark:text-slate-300">
                  <li>
                    Engineered and optimized RESTful APIs, reducing average response times by 20% and improving backend–frontend integration across core product features
                  </li>
                  <li>
                    Architected and led a Mixpanel-based event tracking and analytics solution, enabling data-driven decisions and improving feature adoption by 35% through user behavior insights
                  </li>
                  <li>
                    Built reusable middleware modules and backend utilities, reducing development effort by 30% and enforcing code consistency
                  </li>
                  <li>
                    Integrated Gemini LLM APIs into backend services to power AI-driven features, handling prompt design, response validation, retries, and error handling
                  </li>
                  <li>
                    Built a Retrieval-Augmented Generation (RAG) pipeline using embeddings and vector search to generate grounded responses with source attribution, reducing hallucinations
                  </li>
                  <li>
                    Built high-throughput data ingestion pipelines for third-party providers, improving data accuracy by 70% while reducing manual intervention to near zero
                  </li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded-full text-sm">Ruby on Rails</span>
                  <span className="bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded-full text-sm">Python</span>
                  <span className="bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded-full text-sm">MySQL</span>
                  <span className="bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded-full text-sm">MongoDB</span>
                  <span className="bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded-full text-sm">GraphQL</span>
                  <span className="bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded-full text-sm">Gen AI</span>
                  <span className="bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded-full text-sm">GitHub Actions</span>
                  <span className="bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded-full text-sm">Mixpanel</span>
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
                  <h3 className="text-xl md:text-2xl font-bold">B.E. Computer Engineering</h3>
                  <div className="flex items-center mt-2 md:mt-0">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      2017 - 2021 | CGPA - 8.10
                    </span>
                  </div>
                </div>
                <div className="flex items-center text-slate-600 dark:text-slate-400 mb-6">
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
                  <span className="font-medium">Vivekanand Education Society's Institute of Technology, Chembur, Mumbai</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  Graduated with a Bachelor's degree in Computer Engineering with a CGPA of 8.10. Focused on algorithms, data structures, software engineering principles, and modern web technologies.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
