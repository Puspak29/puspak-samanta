import { Code2, Cpu, Globe, GraduationCap, Terminal, User } from "lucide-react";
import PORTFOLIO_DATA from "../Data";
import { SectionTitle } from "./";

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle title="About Me" />
            <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
              <p>{PORTFOLIO_DATA.personal.about}</p>
              
              <div className="flex flex-col gap-4 pt-4">
                <div className="flex items-center gap-4 bg-slate-900/50 p-4 rounded-lg border border-slate-800">
                  <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Education</h4>
                    <p className="text-sm text-slate-400">{PORTFOLIO_DATA.personal.university}</p>
                    <p className="text-xs text-slate-500">{PORTFOLIO_DATA.personal.graduation}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-slate-900/50 p-4 rounded-lg border border-slate-800">
                  <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                    <Code2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Focus</h4>
                    <p className="text-sm text-slate-400">Full Stack Web Development & Low Level System Design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-48 rounded-2xl bg-linear-to-br from-blue-500/20 to-purple-500/20 border border-slate-800 backdrop-blur-sm flex items-center justify-center">
                <Terminal size={48} className="text-blue-400 opacity-50" />
              </div>
              <div className="h-32 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                 <Cpu size={32} className="text-slate-600" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-32 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                <Globe size={32} className="text-slate-600" />
              </div>
              <div className="h-48 rounded-2xl bg-linear-to-br from-purple-500/20 to-pink-500/20 border border-slate-800 backdrop-blur-sm flex items-center justify-center">
                <User size={48} className="text-purple-400 opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;