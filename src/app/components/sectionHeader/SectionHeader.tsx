interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
        {title}
      </h2>

      <p className="text-lg md:text-xl text-slate-500 font-medium">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
