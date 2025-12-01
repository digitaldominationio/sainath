import { useState } from "react";
import SectionTitle from "../components/common/SectionTitle";

export default function Gallery() {
  const images = [
    { src: "/gallery/1.jpg", alt: "Community event 1" },
    { src: "/gallery/2.jpg", alt: "Community event 2" },
    { src: "/gallery/3.jpg", alt: "Training session" },
    { src: "/gallery/4.jpg", alt: "Plantation drive" },
    { src: "/gallery/5.jpg", alt: "Medical camp" },
    { src: "/gallery/6.jpg", alt: "Volunteer group" },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <>
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Gallery"
            subtitle="Moments from our community initiatives and programs."
          />

          <p className="text-gray-600 max-w-3xl mx-auto text-center mt-3">
            Photos that capture training sessions, plantation drives, relief work,
            and the communities we serve.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelected(img)}
                className="group block rounded-xl overflow-hidden shadow hover:shadow-lg focus:outline-none"
                aria-label={`Open image ${img.alt}`}
              >
                <div className="relative h-48 md:h-56 w-full">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="p-3 bg-white">
                  <p className="text-sm text-gray-700 truncate">{img.alt}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelected(null)}
        >
          <div
            className="max-w-5xl w-full rounded-xl overflow-hidden bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selected.src}
                alt={selected.alt}
                className="w-full object-contain max-h-[80vh] bg-black"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 bg-white/90 rounded-full p-2 shadow hover:scale-105 transition"
                aria-label="Close image"
              >
                ✕
              </button>
            </div>

            <div className="p-4">
              <p className="text-sm text-gray-700">{selected.alt}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
