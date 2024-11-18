import React from 'react';
import { ExternalLink, FileText } from 'lucide-react';
import ProjectPDF from './ProjectPDF';

const projects = [
  {
    title: "Global Brand Launch Campaign",
    description: "Led a successful international brand launch across 12 markets, achieving 200% ROI",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800&h=400",
    tech: ["Brand Strategy", "Digital Marketing", "Market Research"],
    liveUrl: "#",
    pdfUrl: "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf"
  },
  {
    title: "Digital Transformation Initiative",
    description: "Spearheaded digital transformation strategy resulting in 150% increase in online engagement",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=400",
    tech: ["Marketing Analytics", "Content Strategy", "SEO"],
    liveUrl: "#",
    pdfUrl: "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf"
  },
  {
    title: "Customer Loyalty Program",
    description: "Developed and launched a loyalty program that increased customer retention by 45%",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&h=400",
    tech: ["CRM", "Email Marketing", "Customer Analytics"],
    liveUrl: "#",
    pdfUrl: "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf"
  }
];

const Projects = () => {
  const [selectedPDF, setSelectedPDF] = React.useState<string | null>(null);

  return (
    <section id="projects" className="bg-ash-gray/5">
      <div className="section-container">
        <h2 className="section-title">Featured Campaigns</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article 
              key={index}
              className="project-card"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-charcoal">
                  {project.title}
                </h3>
                <p className="text-dark-slate-gray mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-cambridge-blue/10 text-hookers-green rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-1 text-hookers-green hover:text-dark-slate-gray transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Campaign
                  </a>
                  <button
                    onClick={() => setSelectedPDF(project.pdfUrl)}
                    className="inline-flex items-center gap-1 text-hookers-green hover:text-dark-slate-gray transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    Case Study
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedPDF && (
        <ProjectPDF 
          url={selectedPDF} 
          onClose={() => setSelectedPDF(null)} 
        />
      )}
    </section>
  );
};

export default Projects;