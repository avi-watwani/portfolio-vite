import ProjectCard from "./ProjectCard";

export default function ClientWork() {
  const clientProjects = [
    {
      title: "PulseOne Pharmacy Store",
      description:
        "Developed a full-featured e-commerce website for a pharmacy brand, enabling online product catalog, cart, and checkout for health and wellness products.",
      category: "E-Commerce Platform",
      image: (
        <div className="w-full h-full bg-gradient-to-r from-teal-600 to-cyan-700 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-white -mt-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
      ),
      skills: [
        { name: "E-Commerce", type: "tech" as const },
        { name: "Next.js", type: "framework" as const },
        { name: "Payments", type: "tech" as const },
      ],
      links: {
        live: "https://pulseone.co.in",
      },
    },
    {
      title: "KOKO Coffee Roasters",
      description:
        "Built a full-stack e-commerce platform for a coffee brand using Next.js and Firebase, integrating Razorpay for payments.",
      category: "E-Commerce Platform",
      image: (
        <div className="w-full h-full bg-gradient-to-r from-amber-600 to-amber-800 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-white -mt-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </div>
      ),
      skills: [
        { name: "Next.js", type: "framework" as const },
        { name: "Firebase", type: "tech" as const },
        { name: "Razorpay", type: "tech" as const },
        { name: "AWS Lambda", type: "tech" as const },
      ],
      links: {
        live: "https://kokocoffeeroasters.in",
      },
    }
  ];

  return (
    <section id="client-work" className="py-20 bg-slate-100 dark:bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Client Work</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            E-commerce and digital platforms built for brands and businesses I&apos;ve partnered with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {clientProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              category={project.category}
              skills={project.skills}
              links={project.links}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
