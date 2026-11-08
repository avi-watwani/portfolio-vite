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
          <img
            src="/pulseone-logo.png"
            alt="PulseOne Pharmacy Store"
            className="h-16 w-16 -mt-8 object-contain drop-shadow"
          />
        </div>
      ),
      skills: [
        { name: "React", type: "framework" as const },
        { name: "Firebase", type: "tech" as const },
        { name: "Tailwind CSS", type: "framework" as const },
        { name: "E-Commerce", type: "tech" as const },
      ],
      links: {
        live: "https://pulseone.co.in",
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

        <div className={`grid grid-cols-1 ${clientProjects.length > 1 ? "md:grid-cols-2 max-w-5xl" : "max-w-xl"} gap-8 mx-auto`}>
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
