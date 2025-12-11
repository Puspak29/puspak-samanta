import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import PORTFOLIO_DATA from "../Data";
import { TypingEffect } from "./";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-slate-950">
      {/* Background Gradients */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
        <div className="md:flex items-center justify-between">
          <div className="md:w-3/5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-blue-400 text-sm font-medium animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Available for Hire
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-100 leading-tight">
              Hello, I'm <br />
              <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </h1>
            
            {/* NEW: Typing Effect for the role */}
            <TypingEffect text="Fullstack Developer" />

            <p className="text-xl text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
              {PORTFOLIO_DATA.personal.tagline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <a href="#projects" className="px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25">
                View My Work
              </a>
              <a href="#contact" className="px-8 py-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-all border border-slate-700">
                Contact Me
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-6 pt-6 text-slate-400">
              <a href={PORTFOLIO_DATA.personal.github} className="hover:text-white transition-colors"><Github size={24} /></a>
              <a href={PORTFOLIO_DATA.personal.linkedin} className="hover:text-white transition-colors"><Linkedin size={24} /></a>
              <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="hover:text-white transition-colors"><Mail size={24} /></a>
            </div>
          </div>
          
          {/* Decorative Code Block / Visual - Now using Data Configuration */}
          <div className="hidden md:block md:w-2/5 relative mt-12 md:mt-0">
            <div className="relative z-10 bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex">
                  <span className="text-pink-400 mr-2">const</span>
                  <span className="text-blue-300 mr-2">developer</span>
                  <span className="text-slate-400">=</span>
                  <span className="text-yellow-300 ml-2">{`{`}</span>
                </div>
                
                {/* Dynamic Code Lines from PORTFOLIO_DATA */}
                {PORTFOLIO_DATA.personal.heroCodeLines.map((line, index) => (
                  <div key={index} className="pl-4">
                    <span className="text-slate-300">{line.key}:</span>
                    <span className={`${line.color} ml-2`}>
                      {line.value}
                    </span>
                    <span className="text-yellow-300">,</span>
                  </div>
                ))}
                
                <div className="text-yellow-300">{`}`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};
export default Hero;