import { useState } from "react";
import SectionTitle from "../components/common/SectionTitle";

export default function Gallery() {
  const gallerySections = [
    {
      title: "Social Development Activities And Field Work",
      images: [
        { src: "/gallery/9.jpg", alt: "Community outreach" },
        { src: "/gallery/8.jpeg", alt: "Community program" },
        { src: "/gallery/24.jpeg", alt: "Community program" },
        { src: "/gallery/27.jpeg", alt: "Community program" },
        { src: "/gallery/26.jpeg", alt: "Community program" },
                { src: "/gallery/25.jpeg", alt: "Community program" },
        { src: "/gallery/28.jpeg", alt: "Social event gathering" },
        { src: "/gallery/2.jpeg", alt: "Community social event" },
        { src: "/gallery/13.jpeg", alt: "Social gathering" },
        { src: "/gallery/19.jpeg", alt: "Swachh Bharat Abhiyan" },
        { src: "/gallery/23.jpg", alt: "Swachh Bharat Abhiyan" },
        { src: "/gallery/22.jpeg", alt: "Swachh Bharat Abhiyan" },
      ],
    },
    {
      title: "Charity & Humanitarian Work",
      images: [
        { src: "/gallery/14.jpeg", alt: "Volunteer team" },
        { src: "/gallery/16.jpeg", alt: "Group of volunteers" },
        { src: "/gallery/7.jpeg", alt: "Volunteers in action" },
        { src: "/gallery/15.jpeg", alt: "Charity distribution" },
        { src: "/gallery/18.jpeg", alt: "" },
        { src: "/gallery/17.jpeg", alt: "Local community event" },
      ],
    },
    {
      title: "Skill Development & Employment Drive",
      images: [
        { src: "/gallery/10.jpeg", alt: "Job placement drive" },
        { src: "/gallery/20.jpeg", alt: "" },
        { src: "/gallery/21.jpeg", alt: "" },
                { src: "/gallery/29.jpeg", alt: "Job placement drive" },
        { src: "/gallery/30.jpeg", alt: "Job placement drive" },
        { src: "/gallery/31.jpeg", alt: "Job placement drive" },


      ],
    },
    // {
    //   title: "Charity & Humanitarian Work",
    //   images: [
    //     { src: "/gallery/15.jpeg", alt: "Charity distribution" },
    //     { src: "/gallery/18.jpeg", alt: "" },
    //     { src: "/gallery/6.jpg", alt: "" },
    //   ],
    // },
    // {
    //   title: "Swachh Bharat Abhiyan",
    //   images: [
    //     { src: "/gallery/19.jpeg", alt: "Swachh Bharat Abhiyan" },
    //     { src: "/gallery/23.jpg", alt: "Swachh Bharat Abhiyan" },
    //     { src: "/gallery/22.jpeg", alt: "Swachh Bharat Abhiyan" },
    //   ],
    // },
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

          {/* <p className="text-gray-600 max-w-3xl mx-auto text-center mt-3 mb-12">
            Photos that capture training sessions, plantation drives, relief
            work, and the communities we serve.
          </p> */}

          <div className="space-y-16">
            {gallerySections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="text-2xl font-bold text-teal-700 mb-6 border-l-4 border-teal-500 pl-4">
                  {section.title}
                </h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {section.images.map((img, imgIdx) => (
                    <button
                      key={imgIdx}
                      onClick={() => setSelected(img)}
                      className="group block rounded-xl overflow-hidden shadow hover:shadow-lg focus:outline-none bg-gray-100"
                      aria-label={`Open image ${img.alt}`}
                    >
                      <div className="relative h-48 md:h-56 w-full overflow-hidden">
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="object-cover w-full h-full transform group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
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
