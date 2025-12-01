export default function GalleryGrid({ images }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          className="rounded-xl shadow hover:scale-105 transition-all duration-300"
          alt="gallery"
        />
      ))}
    </div>
  );
}
