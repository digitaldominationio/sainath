// Finance.jsx — Final Version Matching Education & Training Page Perfectly
// Uses same layout, same colors, same typography, same card design.

import React from "react";
import { motion } from "framer-motion";

export default function Finance() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO SECTION */}
      <section className="w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-teal-700 leading-tight">
              PrimeLine Finance
            </h1>

            <h2 className="text-xl font-semibold text-gray-700">
              “Your Vision, Our Expertise.”
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              PrimeLine Finance, under the 
              <span className="font-semibold text-teal-700"> Sainath Educational & Charitable Trust</span>,
              is dedicated to empowering SHGs, farmers, MSMEs, entrepreneurs, and youth across 
              Odisha by offering transparent financial guidance and complete banking support.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We connect communities to banks, government schemes, subsidies, financial literacy, 
              and career-building opportunities—ensuring financial growth and sustainable development.
            </p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center"
          >
            <img
              src="/106.jpg"
              className="w-full max-w-lg rounded-2xl shadow-lg object-cover"
              alt="PrimeLine Finance"
            />
          </motion.div>

        </div>
      </section>

     {/* WHO WE SUPPORT */}
<section className="max-w-7xl mx-auto px-6 py-20">

  <h2 className="text-3xl font-bold text-teal-700 mb-4">
    Who We Support
  </h2>

  <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-3xl">
    PrimeLine Finance is committed to supporting individuals, groups, and community-driven 
    organisations across Odisha. We focus on strengthening financial access, livelihood 
    opportunities, entrepreneurship, and growth for diverse beneficiary groups.
  </p>

  {/* GRID */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

    {/* CARD 1 */}
    <div className="bg-white p-8 rounded-2xl shadow border hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-teal-700 mb-2">
        Self Help Groups (SHGs)
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        We help SHGs access bank linkage, subsidy programs, revolving funds, and 
        financial literacy support to strengthen their livelihood activities and group sustainability.
      </p>
    </div>

    {/* CARD 2 */}
    <div className="bg-white p-8 rounded-2xl shadow border hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-teal-700 mb-2">
        MSMEs & Startup Units
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Supporting emerging entrepreneurs with documentation assistance, credit access, 
        subsidy schemes, and long-term business development support.
      </p>
    </div>

    {/* CARD 3 */}
    <div className="bg-white p-8 rounded-2xl shadow border hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-teal-700 mb-2">
        Small Scale Business Units
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        We assist micro and small enterprises with working capital, loan processing, 
        and government schemes to fuel their local business growth.
      </p>
    </div>

    {/* CARD 4 */}
    <div className="bg-white p-8 rounded-2xl shadow border hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-teal-700 mb-2">
        Farmer Producer Organizations (FPOs)
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        FPOs receive support for agri-based credit, development schemes, market linkage 
        facilitation, and collective growth opportunities across rural Odisha.
      </p>
    </div>

    {/* CARD 5 */}
    <div className="bg-white p-8 rounded-2xl shadow border hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-teal-700 mb-2">
        Individual Farmers & Agri Entrepreneurs
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Helping farmers access KCC loans, equipment finance, subsidy schemes, and 
        modern agriculture-based financial opportunities.
      </p>
    </div>

    {/* CARD 6 */}
    <div className="bg-white p-8 rounded-2xl shadow border hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-teal-700 mb-2">
        Local Entrepreneurs & Youth Groups
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Supporting young entrepreneurs and community leaders with funding guidance, 
        mentorship, and financial linkage opportunities to build sustainable futures.
      </p>
    </div>

  </div>
</section>



      {/* BANKING SUPPORT */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Banking Support & Financial Linkage
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white rounded-2xl shadow p-10 border border-gray-200">
            <p className="text-gray-700 text-lg leading-relaxed">
              We offer end-to-end support for accessing financial services and loan facilities:
            </p>

            <ul className="mt-5 space-y-3 text-gray-700 text-lg">
              <li>✔ Business Loans (Term & Working Capital)</li>
              <li>✔ Mudra, PMEGP, PMFME Schemes</li>
              <li>✔ SHG Bank Linkage & RF Support</li>
              <li>✔ KCC & Agriculture Loans</li>
              <li>✔ MSME & Housing Loans</li>
              <li>✔ Startup Funding Assistance</li>
              <li>✔ Machinery, Equipment & Vehicle Finance</li>
            </ul>
          </div>

          <img
            src="/bank.jpg"
            className="w-full rounded-2xl shadow-lg object-cover"
            alt="Banking Support"
          />
        </div>
      </section>

      {/* GOVERNMENT SCHEME ASSISTANCE */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Government Scheme Assistance
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <img
            src="/scheme.jpg"
            className="w-full rounded-2xl shadow-lg object-cover"
            alt="Government Schemes"
          />

          <div className="bg-white rounded-2xl shadow p-10 border border-gray-200">
            <p className="text-gray-700 text-lg leading-relaxed">
              We connect individuals and businesses to state and central government schemes:
            </p>

            <ul className="mt-5 space-y-3 text-gray-700 text-lg">
              <li>✔ Subsidy & Grant Schemes</li>
              <li>✔ Entrepreneurship Development Programs</li>
              <li>✔ Skill & Livelihood Schemes</li>
              <li>✔ Agriculture & FPO Support Policies</li>
              <li>✔ Women Empowerment & SHG Programs</li>
            </ul>
          </div>

        </div>
      </section>

      {/* INSTITUTIONAL COLLABORATION */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Institutional Collaborations
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white rounded-2xl shadow p-10 border border-gray-200">
            <p className="text-gray-700 text-lg leading-relaxed">
              Our collaborations enable smooth financial access and awareness:
            </p>

            <ul className="mt-5 space-y-3 text-gray-700 text-lg">
              <li>✔ Nationalized Banks</li>
              <li>✔ Private Banks</li>
              <li>✔ Microfinance Institutions</li>
              <li>✔ State Govt. Departments</li>
              <li>✔ Development Boards & Livelihood Missions</li>
            </ul>

            <p className="text-gray-600 mt-4 leading-relaxed">
              These partnerships strengthen our ability to support communities across Odisha.
            </p>
          </div>

          <img
            src="/collaboration.jpg"
            className="w-full rounded-2xl shadow-lg object-cover"
            alt="Collaborations"
          />

        </div>
      </section>

      {/* YOUTH DEVELOPMENT */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Youth Employment & Career Development
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <img
            src="/skilldevelopment.jpg"
            className="w-full rounded-2xl shadow-lg object-cover"
            alt="Youth Development"
          />

          <div className="bg-white rounded-2xl shadow p-10 border border-gray-200">
            <p className="text-gray-700 text-lg leading-relaxed">
              We prepare young individuals to build strong careers through:
            </p>

            <ul className="mt-5 space-y-3 text-gray-700 text-lg">
              <li>✔ BFSI Employment Opportunities</li>
              <li>✔ Internship & Professional Training</li>
              <li>✔ Entrepreneur Partnership Program</li>
              <li>✔ Business Associate Opportunities</li>
              <li>✔ Skill Training & Career Growth Programs</li>
            </ul>
          </div>

        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">

        <h2 className="text-4xl font-bold text-teal-700">
          Our Mission
        </h2>
        <p className="text-gray-700 mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
          To strengthen rural and urban economic development by connecting communities 
          to banking opportunities, empowering youth, and fostering sustainable business ecosystems.
        </p>

        <h2 className="text-4xl font-bold text-teal-700 mt-12">
          Our Vision
        </h2>
        <p className="text-gray-700 mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
          To become Odisha’s most trusted financial support initiative—promoting inclusive 
          financing, entrepreneurship, and long-term growth for every individual and community.
        </p>

      </section>

      {/* CORE VALUES */}
<section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <h2 className="text-3xl font-bold text-teal-700 mb-4">
      Our Core Values
    </h2>

    <p className="text-gray-600 max-w-2xl mx-auto mb-14 leading-relaxed">
      These values guide every initiative at PrimeLine Finance, ensuring trust, impact, 
      and long-term empowerment for communities across Odisha.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          title: "Transparency",
          desc: "We maintain honesty and clarity in all processes and communication.",
        },
        {
          title: "Trust",
          desc: "We build meaningful, long-term relationships with our communities.",
        },
        {
          title: "Professional Service",
          desc: "We ensure timely, respectful and efficient service delivery.",
        },
        {
          title: "Social Responsibility",
          desc: "We uplift individuals, families and communities with empathy.",
        },
        {
          title: "Capacity Building",
          desc: "We empower people with knowledge, skills, and financial literacy.",
        },
        {
          title: "Community Empowerment",
          desc: "We aim to strengthen grassroots groups and rural entrepreneurs.",
        },
      ].map((value) => (
        <div
          key={value.title}
          className="bg-gray-50 p-8 rounded-2xl shadow-sm border hover:shadow-md transition-all"
        >
          <h3 className="text-xl font-semibold text-teal-700 mb-2">
            {value.title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm">
            {value.desc}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>


      {/* FOOTER */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h3 className="text-xl text-gray-500">
          Powered by Sainath Educational & Charitable Trust
        </h3>

        <h2 className="text-4xl font-bold text-teal-700 mt-2">
          Empowering Communities, Enabling Growth
        </h2>

        <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
          Our mission is to support every individual, entrepreneur, and youth with reliable 
          financial access and sustainable opportunity pathways.
        </p>
      </section>

    </div>
  );
}
