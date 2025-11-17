import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-3/5 mb-12 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Avi Watwani</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-600 dark:text-slate-400">
              Software Engineer | AWS Certified Developer
            </h2>
            <p className="text-lg mb-8 max-w-xl">
              Software Engineer with expertise in Node.js, Next.js, NestJS, and SupabaseDB. Passionate about building scalable, high-performance web applications.
            </p>
            <p className="text-lg mb-8 max-w-xl">
              Skilled in RESTful APIs, database optimization, and cloud solutions. Ex - Software Engineer at HowNow Technologies Pvt. Ltd.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8">
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-primary text-white hover:bg-blue-600 px-6"
                  onClick={() => scrollToSection("#projects")}
                >
                  View My Work
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6"
                  onClick={() => scrollToSection("#contact")}
                >
                  Contact Me
                </Button>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <span className="text-sm font-medium">Connect:</span>
                <a
                  href="https://linkedin.com/in/avi-watwani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
                  title="LinkedIn"
                >
                  <FaLinkedin className="text-2xl w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:w-2/5 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-primary/20 dark:bg-primary/10 rounded-full absolute top-0 left-0 -z-10 blur-3xl"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-primary/30 p-2 relative overflow-hidden">
                <img
                  src="/avi-watwani-photo.png"
                  alt="Avi Watwani - Software Engineer"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-2 bg-secondary text-white p-2 rounded-lg shadow-lg z-10">
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  AWS Certified
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
