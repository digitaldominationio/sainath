export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-12 animate-fadeIn">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}

      <div className="w-20 h-1 bg-teal-600 mx-auto mt-4 rounded-full"></div>
    </div>
  );
}
