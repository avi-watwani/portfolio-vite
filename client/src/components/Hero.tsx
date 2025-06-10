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
            className="md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Avi Watwani</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-600 dark:text-slate-400">
              Software Development Engineer
            </h2>
            <p className="text-lg mb-8 max-w-lg">
              Experienced in building robust, scalable web applications using Ruby on Rails, Node.js and Next.js. I specialize in developing full-stack solutions with a strong focus on performance and maintainability.
            </p>
            <p className="text-lg mb-8 max-w-lg">
              AWS Certified Developer – Associate, with hands-on experience in designing and deploying secure, cloud-native applications using AWS services.
            </p>
            <div className="flex flex-wrap gap-4">
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
            <div className="flex mt-8 space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
              >
                <FaTwitter className="text-2xl" />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-primary/20 dark:bg-primary/10 rounded-full absolute top-0 left-0 -z-10 blur-3xl"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-primary/30 p-2 relative">
                <div className="absolute -top-4 -right-4 bg-secondary text-white p-2 rounded-lg shadow-lg z-10">
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
                <svg
                  className="w-full h-full rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
