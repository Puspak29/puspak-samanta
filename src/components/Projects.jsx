import { Code2, ExternalLink, Github } from "lucide-react";
import { SectionTitle } from "./";
import PORTFOLIO_DATA from "../Data";

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <SectionTitle title="Featured Projects" subtitle="Some things I've built." />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div key={project.id} className="group relative bg-slate-950 rounded-xl overflow-hidden border border-slate-800 hover:-translate-y-2 transition-transform duration-300">
              {/* Card Header Gradient */}
              <div className={`h-2 bg-linear-to-r ${project.color}`} />
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-linear-to-br ${project.color} opacity-20 group-hover:opacity-100 transition-opacity flex items-center justify-center mb-4`}>
                    <Code2 className="text-white opacity-100" size={24} />
                  </div>
                  <div className="flex gap-4">
                    <a href={project.links.code} className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
                    <a href={project.links.demo} className="text-slate-400 hover:text-white transition-colors"><ExternalLink size={20} /></a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href={PORTFOLIO_DATA.personal.github} className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors">
            View Full Project Archive <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;