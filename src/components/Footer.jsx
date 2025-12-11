import PORTFOLIO_DATA from "../Data";

const Footer = () => {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center">
      <div className="text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All rights reserved.</p>
        <p className="mt-2">Built with React & Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;