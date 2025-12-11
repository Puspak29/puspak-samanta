import PORTFOLIO_DATA from "../Data";
import { SectionTitle } from "./";

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <SectionTitle title="Experience" />
        
        <div className="max-w-3xl space-y-8">
          {PORTFOLIO_DATA.experience.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-0">
              {/* Timeline line for desktop */}
              <div className="hidden md:block absolute left-34 top-0 bottom-0 w-px bg-slate-800"></div>
              
              <div className="md:flex gap-12 group">
                {/* Date Side */}
                <div className="md:w-32 shrink-0 text-slate-500 font-medium pt-1 text-sm md:text-right mb-2 md:mb-0">
                  {exp.duration}
                </div>
                
                {/* Dot */}
                <div className="hidden md:block absolute left-33 top-2 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-slate-950 group-hover:ring-blue-500/20 transition-all"></div>

                {/* Content Side */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                  <div className="text-slate-400 font-medium mb-3">{exp.company}</div>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;