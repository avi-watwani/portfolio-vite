import { RectangleEllipsis, MapPinIcon } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactInfo() {
  return (
    <motion.div 
      className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-8"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
            <RectangleEllipsis className="text-primary text-lg" />
          </div>
          <div>
            <h4 className="font-medium mb-1">Email</h4>
            <a href="mailto:contact@aviwatwani.com" className="text-primary hover:underline">
              contact@aviwatwani.com
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
            <MapPinIcon className="text-primary text-lg" />
          </div>
          <div>
            <h4 className="font-medium mb-1">Location</h4>
            <p className="text-slate-600 dark:text-slate-400">London, United Kingdom</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
            <FaLinkedin className="text-primary text-lg" />
          </div>
          <div>
            <h4 className="font-medium mb-1">LinkedIn</h4>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              linkedin.com/in/aviwatwani
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
            <FaGithub className="text-primary text-lg" />
          </div>
          <div>
            <h4 className="font-medium mb-1">GitHub</h4>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              github.com/aviwatwani
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
