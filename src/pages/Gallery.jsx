import { useState } from "react";
import SectionTitle from "../components/common/SectionTitle";

export default function Gallery() {
  const images = [
    { src: "/gallery/1.jpeg", alt: "Social event" },
    { src: "/gallery/2.jpeg", alt: "Social event" },
    { src: "/gallery/13.jpeg", alt: "Social Event" },
    { src: "/gallery/14.jpeg", alt: "Volunteer group" },
    { src: "/gallery/15.jpeg", alt: "Charity Work" },
    { src: "/gallery/16.jpeg", alt: "Volunteer group" },
    { src: "/gallery/7.jpeg", alt: "Volunteer group" },
    { src: "/gallery/8.jpeg", alt: "Community Event" },
    { src: "/gallery/9.jpg", alt: "Community Event" },
    { src: "/gallery/10.jpeg", alt: "Placement Drive" },
    { src: "/gallery/17.jpeg", alt: "Community Event" },
    { src: "/gallery/18.jpeg", alt: "Humanitarian Work" },
    { src: "/gallery/19.jpeg", alt: "Cleanliness Drive" },
    { src: "/gallery/20.jpeg", alt: "Placement Drive" },
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
