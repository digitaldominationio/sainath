export default function Button({ text, className = "", onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 active:scale-95 transition-all duration-200 ${className}`}
    >
      {text}
    </button>
  );
}
