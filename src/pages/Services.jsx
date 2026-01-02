// NGO.jsx — Full NGO page with 12 services
// TailwindCSS + framer-motion only (no extra CSS)

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const SERVICES = [
  {
    key: "tree-plantation",
    title: "Tree Plantation & Environmental Protection",
    short: "Large-scale plantation, sapling drives, and community climate action.",
    details: [
      "Organize sapling distribution and community plantation events.",
      "Run plastic-free and waste management awareness campaigns.",
      "Work with schools & villages for long-term tree care and biodiversity."
    ],
    img: "/plantation.jpg"
  },
  {
    key: "old-age",
    title: "Old Age Support & Senior Care",
    short: "Home visits, medical camps, food & emotional support for the elderly.",
    details: [
      "Regular health camps and checkups for elders.",
      "Home-care visits, food kits, and mobility aids distribution.",
      "Counselling and social inclusion programs to reduce isolation."
    ],
    img: "/oldage.jpg"
  },
  {
    key: "child-welfare",
    title: "Child Welfare & Nutrition",
    short: "Holistic development of children through nutrition, health, education access, and protection for underprivileged communities.",
    details: [
      "Child Nutrition Support: Supplementary nutrition programs, balanced diets, anaemia prevention.",
      "Maternal & Early Childhood Care: Nutrition education for mothers, IYCF awareness, Anganwadi support.",
      "Health & Growth Monitoring: Regular check-ups, immunization awareness, deworming.",
      "Education & Early Learning: ECCE support, school enrollment programs, learning materials.",
      "WASH Programs: Safe drinking water, handwashing, menstrual hygiene education.",
      "Child Protection & Rights: Prevention of child labour and abuse, counseling support.",
      "Community Engagement: Parenting workshops, convergence with ASHA and Anganwadi systems."
    ],
    img: "/childwelfare.jpg"
  },
  {
    key: "disaster-relief",
    title: "Flood Relief / Disaster Relief",
    short: "Rapid-response relief, temporary shelter, medical aid and rehabilitation.",
    details: [
      "Emergency food, clean water and shelter during disasters.",
      "Coordinate with local authorities for rescue and relief.",
      "Long-term rehabilitation and reconstruction support."
    ],
    img: "/floodrelief.jpg"
  },
  {
    key: "rehabilitation",
    title: "Rehabilitation Work",
    short: "Reintegration & recovery programs for displaced or marginalized people.",
    details: [
      "Create rehabilitation pathways (skill training & livelihood support).",
      "Provide counselling and social reintegration programs.",
      "Coordinate housing and legal aid where required."
    ],
    img: "/rehabilitation.jpg"
  },
  {
    key: "women-empowerment",
    title: "Women Empowerment",
    short: "Empowering women socially, economically, and digitally for inclusive growth and leadership.",
    details: [
      "Education & Skill Development: Functional literacy, vocational skills, entrepreneurship training.",
      "Economic Empowerment: SHG formation, micro-enterprises, market linkage and branding support.",
      "Financial Inclusion: Bank accounts, digital payments (UPI), savings and credit awareness.",
      "Digital Empowerment: Smartphone literacy, WhatsApp Business, social media marketing.",
      "Health & Well-being: Reproductive health, nutrition, mental health support.",
      "Safety & Legal Awareness: Women's rights, prevention of violence, legal aid referrals.",
      "Leadership Development: Community participation, Panchayat involvement, peer mentoring."
    ],
    img: "/womenempowerment.jpg"
  },
  {
    key: "animal-welfare",
    title: "Animal Welfare",
    short: "Rescue, vaccination drives and care for street and abandoned animals.",
    details: [
      "Street animal rescue & first aid programs.",
      "Vaccination drives and community awareness on animal care.",
      "Partner with vets and shelters for long-term rehabilitation."
    ],
    img: "/animalwelfare.jpg"
  },
  {
    key: "healthcare",
    title: "Healthcare Access",
    short: "Equitable access to affordable, preventive, and quality healthcare for underserved communities.",
    details: [
      "Primary Healthcare: Free/low-cost health camps, basic diagnostics, hospital referral linkages.",
      "Preventive Healthcare: Health awareness sessions, vaccination, NCD screening.",
      "Maternal & Geriatric Care: Antenatal/postnatal care, child health, senior citizen support.",
      "Digital & Telemedicine: Tele-consultation, ABHA support, health helpline coordination.",
      "Health Insurance: Ayushman Bharat enrollment, state schemes, claim process support.",
      "Mental Health: Stress and anxiety awareness, counseling, community sensitization.",
      "Public Health & Sanitation: WASH awareness, vector-borne disease prevention, cleanliness drives."
    ],
    img: "/healthcamps.jpg"
  },
  {
    key: "community-dev",
    title: "Community Development",
    short: "Village development – WASH, infrastructure, livelihoods and microprojects.",
    details: [
      "Improve water & sanitation (WASH) infrastructure in villages.",
      "Support community-driven projects (micro-irrigation, storage, etc.).",
      "Promote participatory planning and local governance capacity."
    ],
    img: "/communitydevelopment.jpg"
  },
  {
    key: "environment",
    title: "Environmental Sustainability",
    short: "Responsible environmental practices and conservation for a cleaner, greener, climate-resilient future.",
    details: [
      "Environmental Awareness: Climate change programs, school eco-clubs, education campaigns.",
      "Tree Plantation & Biodiversity: Native tree drives, urban green spaces, medicinal plant protection.",
      "Water Conservation: Rainwater harvesting, pond revival, efficient water use awareness.",
      "Waste Management: Solid/liquid waste awareness, plastic-free campaigns, composting initiatives.",
      "Clean Energy: Solar energy promotion, clean cooking fuel, resource conservation.",
      "Community Engagement: Youth-led green drives, partnerships with schools and SHGs.",
      "Climate Action: Climate risk awareness, disaster response training, green livelihoods."
    ],
    img: "/environmentalprotection.jpg"
  },
  {
    key: "food-dist",
    title: "Food Distribution & Hunger Relief",
    short: "Community kitchens, ration kits and emergency food parcels.",
    details: [
      "Run community kitchens and meal drives for migrants & needy families.",
      "Provide ration kits to households during crises.",
      "Coordinate seasonal food programs (festivals, harvest lean periods)."
    ],
    img: "/fooddistribution.jpg"
  },
  {
    key: "skill-training",
    title: "Skill Training for Rural Youth",
    short: "Job-oriented training, digital skills and entrepreneurship programs.",
    details: [
      "Short-term employability courses and digital literacy programs.",
      "Link youth to internships, apprenticeships and local jobs.",
      "Support micro-entrepreneurship and startup mentorship."
    ],
    img: "/skilldevelopment.jpg"
  },
  {
    key: "education-digital",
    title: "Education & Digital Literacy",
    short: "Essential education and digital skills for employment and self-reliance.",
    details: [
      "Adult literacy, basic education support, and digital literacy programs.",
      "Employment-oriented digital skills and financial literacy.",
      "Entrepreneur enablement and senior citizen digital support."
    ],
    img: "/education1.jpg"
  },
  {
    key: "agriculture",
    title: "Sustainable Agriculture",
    short: "Environmentally responsible and economically viable agricultural practices for farmer income and food security.",
    details: [
      "Organic & Natural Farming: Chemical-free practices, composting, bio-fertilizers, organic certification.",
      "Soil & Water Conservation: Soil testing, rainwater harvesting, micro-irrigation, crop rotation.",
      "Climate-Resilient Agriculture: Drought/flood-resistant crops, climate-smart practices, weather planning.",
      "Farmer Training: Farmer Field Schools, demonstration plots, digital advisory services.",
      "SHG & FPO Empowerment: Formation of SHGs/FPOs, market linkages (e-NAM), digital record-keeping.",
      "Financial Support: Government schemes awareness (PMFBY, NABARD), crop loans, insurance education.",
      "Value Addition: Post-harvest management, food processing, branding, direct-to-consumer models."
    ],
    img: "/plantation.jpg"
  },
];

export default function NGO() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-teal-700 leading-tight">
              What Our NGO Does
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Sainath Educational & Charitable Trust works across sectors — environment, health, disaster relief,
              education and livelihood — to create resilient communities and sustainable impact in Odisha.
            </p>

            <p className="text-gray-600">
              We design programs that are participatory, scalable and aligned to local needs — from tree plantation
              drives to skill training and emergency relief.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="flex justify-center">
            <img src="/education.jpg" className="w-full max-w-lg rounded-2xl shadow-lg object-cover" alt="NGO Banner" />
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID (overview cards) */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Programs</h2>
        <p className="text-gray-600 max-w-3xl mb-10 leading-relaxed">
          Below are the main areas where we focus our work. Click or scroll to read more about each program and how we implement impact on the ground.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center text-2xl font-semibold text-teal-700 mb-4">
                {s.title.split(" ").slice(0, 2).map(w => w[0]).join("")}
              </div>

              <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">{s.short}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DETAILED SECTIONS (alternating layout) */}
      <section className="max-w-7xl mx-auto px-6 py-8 space-y-20">
        {SERVICES.map((s, idx) => (
          <div key={s.key} id={s.key} className="grid md:grid-cols-2 gap-10 items-center scroll-mt-24">
            {/* alternate image position */}
            {idx % 2 === 0 ? (
              <>
                <img src={s.img} alt={s.title} className="rounded-2xl shadow-lg object-cover w-full h-64 md:h-80" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{s.title}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">{s.short}</p>
                  <ul className="list-disc ml-6 space-y-2 text-gray-700">
                    {s.details.map((d, i) => <li key={i}>{d}</li>)}
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{s.title}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">{s.short}</p>
                  <ul className="list-disc ml-6 space-y-2 text-gray-700">
                    {s.details.map((d, i) => <li key={i}>{d}</li>)}
                  </ul>
                </div>
                <img src={s.img} alt={s.title} className="rounded-2xl shadow-lg object-cover w-full h-64 md:h-80" />
              </>
            )}
          </div>
        ))}
      </section>

      {/* IMPACT CALL-TO-ACTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-teal-700 mb-4">Join Us — Volunteer or Donate</h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
          Your support helps us plant trees, feed families, rehabilitate communities and empower youth.
          Help us touch more lives — donate, volunteer, or partner with Sainath Trust.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/donate" className="px-6 py-3 rounded-full bg-teal-700 text-white font-semibold shadow hover:bg-teal-800 transition">
            Donate Now
          </a>
          <a href="/contact" className="px-6 py-3 rounded-full border border-teal-700 text-teal-700 font-semibold hover:bg-teal-50 transition">
            Volunteer With Us
          </a>
        </div>
      </section>

      {/* FOOTER MESSAGE */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h3 className="text-xl text-gray-500">Serving Odisha with heart & skill</h3>
        <h2 className="text-4xl font-bold text-teal-700 mt-2">Create impact — One community at a time</h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
          We follow transparent processes, community consultation and evidence-based approaches to deliver real change.
        </p>
      </section>

    </div>
  );
}
