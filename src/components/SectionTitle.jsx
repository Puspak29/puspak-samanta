const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-12 text-center md:text-left">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
      <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        {title}
      </span>
    </h2>
    {subtitle && <p className="text-slate-400 text-lg max-w-2xl">{subtitle}</p>}
  </div>
);

export default SectionTitle;