import SectionTitle from "../components/common/SectionTitle";
import ContactForm from "../components/forms/ContactForm";

export default function Contact() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          title="Contact Us"
          subtitle="We’re here to support, collaborate and guide. Reach out anytime."
        />

        <div className="grid md:grid-cols-2 gap-12 mt-12">

          {/* LEFT: CONTACT INFO */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
            <h3 className="text-2xl font-semibold text-gray-900">Get in Touch</h3>

            <p className="text-gray-600 mt-3 leading-relaxed">
              Whether you want to volunteer, donate, collaborate, or simply learn more about our work,
              we would love to hear from you.
            </p>

            <div className="mt-8 space-y-4 text-gray-700">

              <p>
                <span className="font-semibold">🏢 Office Address:</span><br />
                Sainath Educational and Charitable Trust,<br />
                12 of PS-08, Fourth Floor,<br />
                Symphony Mall, Hanspal,<br />
                Bhubaneswar, Odisha – 752101
              </p>

              <p>
                <span className="font-semibold">📍 Registered Address:</span><br />
                Sainath Educational & Charitable Trust,<br />
                Lanjipalli, Brahmapur, Ganjam , 760001<br />
                Odisha, India.
              </p>

              <p>
                <span className="font-semibold">📞 Phone:</span>
                +91 8280955389
              </p>

              <p>
                <span className="font-semibold">📧 Email:</span><br />
                info@sainathtrust.in
              </p>

              <p>
                <span className="font-semibold">🌐 Website:</span><br />
                sainathtrust.in
              </p>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}
