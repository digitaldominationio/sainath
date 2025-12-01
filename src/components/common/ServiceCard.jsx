import React from "react";

export default function ServiceCard({ image, title, description }) {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden group cursor-pointer border border-gray-200 hover:-translate-y-2">

      {/* LEFT — IMAGE (FIXED SIZE) */}
      <div className="relative md:w-1/2 w-full h-72"> 
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition duration-300"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <h3 className="text-white text-2xl font-bold tracking-wide drop-shadow-lg">{title}</h3>
        </div>
      </div>

      {/* RIGHT — CONTENT */}
      <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">{title}</h2>

        <p className="text-gray-600 leading-relaxed mb-6">
          {description}
        </p>

        <button className="bg-teal-600 text-white px-6 py-2 rounded-lg shadow hover:bg-teal-700 hover:shadow-lg transition duration-300 w-fit">
          Learn More
        </button>
      </div>
    </div>
  );
}
