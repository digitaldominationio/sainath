import SectionTitle from "../components/common/SectionTitle";

export default function Services() {
  const services = [
    {
      title: "Soft Skill Training",
      text: "Programs that improve communication, leadership, teamwork and employability among youth.",
      icon: "🧩",
    },
    {
      title: "Farmer Support",
      text: "Guidance on sustainable farming, modern tools, agri-consulting and farm productivity.",
      icon: "🌱",
    },
    {
      title: "Child Welfare",
      text: "Orphanage support, nutrition programs, school assistance and child protection initiatives.",
      icon: "🧒",
    },
    {
      title: "CSR Collaboration",
      text: "Executing CSR projects with companies to create high-impact development outcomes.",
      icon: "🏢",
    },
    {
      title: "Environmental Activities",
      text: "Tree plantation, plastic-free awareness, waste management & climate change campaigns.",
      icon: "🌿",
    },
    {
      title: "Humanitarian Work",
      text: "Relief distribution, medical camps, senior citizen care & emergency assistance.",
      icon: "🤲",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        <SectionTitle
          title="Our Services"
          subtitle="Delivering meaningful and measurable impact across multiple social sectors."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((item) => (
            <div
              key={item.title}
              className="
                p-6 rounded-2xl bg-white border border-gray-100 shadow-md
                hover:shadow-xl hover:-translate-y-1 transition-all
              "
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-teal-100 text-3xl">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-4">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-2 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
