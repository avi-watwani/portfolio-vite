import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { Link } from "wouter";
import { MoonIcon, SunIcon, MenuIcon, XIcon } from "lucide-react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(sectionId);
    if (element) {
      // Sections already have top padding (e.g. `py-20` / `pt-20`), so subtracting a fixed
      // header offset can create either too much or too little gap depending on layout.
      // We compute a dynamic offset that:
      // - accounts for the actual header height
      // - accounts for the section's own padding-top
      // - leaves a small intentional gap below the header
      const headerEl = document.querySelector("header");
      const headerHeight = headerEl?.getBoundingClientRect().height ?? 0;
      const sectionPaddingTop =
        Number.parseFloat(getComputedStyle(element).paddingTop) || 0;
      const DESIRED_GAP_PX = 24;
      const scrollOffset = Math.max(
        0,
        headerHeight + DESIRED_GAP_PX - sectionPaddingTop,
      );
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset - scrollOffset;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold">
          <span className="text-slate-800 dark:text-white">Avi</span>
          <span className="text-primary">Watwani</span>
        </a>
        
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full hover:bg-slate-200 dark:hover:bg-slate-800"
          >
            {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </Button>
          
          <Button
            className="bg-primary text-white hover:bg-blue-600 transition-colors hidden md:flex"
            onClick={() => scrollToSection("#contact")}
          >
            Get in Touch
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="md:hidden"
          >
            {mobileMenuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </Button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-white dark:bg-slate-900 py-4 px-6 shadow-lg`}>
        <div className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
          <Button
            className="bg-primary text-white hover:bg-blue-600 transition-colors w-full justify-center"
            onClick={() => scrollToSection("#contact")}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </header>
  );
}
