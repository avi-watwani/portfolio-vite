import { motion } from "framer-motion";
import { AwardIcon, ExternalLinkIcon } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      title: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "June 2025",
      description: "Validates technical expertise in developing and maintaining applications on the AWS platform.",
      url: "https://www.credly.com/badges/0b1dd0bd-d5af-402a-8469-b27a3596d33f",
      icon: (
        <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      )
    },
    {
      title: "Docker & Kubernetes",
      issuer: "Udemy",
      date: "June 2025",
      description: "Comprehensive course covering containerization with Docker and orchestration with Kubernetes.",
      url: "https://ude.my/UC-ca67c19c-daa5-4247-b71f-8c224c16a472",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-100 dark:bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Certifications</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Professional certifications that validate my expertise in cloud technologies and modern development practices.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center mr-4">
                      {cert.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                        {cert.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 font-medium">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-blue-600 transition-colors"
                    title="View Certificate"
                  >
                    <ExternalLinkIcon className="w-5 h-5" />
                  </a>
                </div>
                
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  {cert.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    Issued: {cert.date}
                  </span>
                  <div className="flex items-center text-primary">
                    <AwardIcon className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">Verified</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
