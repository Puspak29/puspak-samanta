import { Linkedin, Mail } from "lucide-react";
import PORTFOLIO_DATA from "../Data";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
        <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
          I'm currently looking for internships and new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6">
           <a 
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/25"
          >
            <Mail size={20} />
            Say Hello
          </a>
           <a 
            href={PORTFOLIO_DATA.personal.linkedin}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white font-semibold transition-all"
          >
            <Linkedin size={20} />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;