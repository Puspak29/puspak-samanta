import PORTFOLIO_DATA from "../Data";
import { SectionTitle } from "./";

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <SectionTitle title="Technical Arsenal" subtitle="The technologies I use to build ideas." />
        
        <div className="grid md:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.skills.map((skillGroup, index) => (
            <div key={index} className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors group">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-blue-500 rounded-full group-hover:h-12 transition-all" />
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-sm group-hover:border-slate-700 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;