import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { ArrowUpIcon } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-slate-800 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-white">
              <span className="text-primary">Avi</span>Watwani
            </a>
            <p className="mt-2 text-slate-400">Software Engineer & AWS Certified Developer</p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-white transition-colors"
            >
              <FaGithub className="text-xl" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-white transition-colors"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-white transition-colors"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a 
              href="mailto:contact@aviwatwani.com" 
              className="text-slate-400 hover:text-white transition-colors"
            >
              <FaEnvelope className="text-xl" />
            </a>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Avi Watwani. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="bg-slate-700 hover:bg-slate-600 text-white p-3 rounded-full transition-colors"
          >
            <ArrowUpIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
