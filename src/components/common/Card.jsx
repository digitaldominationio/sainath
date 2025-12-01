export default function Card({ icon, title, text }) {
  return (
    <div className="rounded-xl p-6 bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100">
      
      <div className="text-5xl mb-4">{icon}</div>

      <h3 className="text-xl font-semibold text-slate-800 mb-2">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed">
        {text}
      </p>
    </div>
  );
}
