import SectionTitle from "../components/common/SectionTitle";

export default function Donate() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">

        <SectionTitle
          title="Support Our Mission"
          subtitle="Your contribution helps us uplift children, farmers, families and entire communities across Odisha."
        />

        <p className="text-gray-700 max-w-2xl mx-auto mt-3 leading-relaxed">
          Every donation — big or small — directly fuels education programs, food
          distribution, medical aid, environmental drives and emergency relief
          initiatives. Together, we can create lasting change.
        </p>

        {/* UPI Block */}
        <div className="mt-10 bg-white shadow-md border border-gray-100 rounded-2xl p-8 mx-auto max-w-lg">
          <h3 className="text-xl font-semibold text-gray-900">
            Donate via UPI
          </h3>

          <p className="text-sm text-gray-600 mt-1">
            Fast, secure and 100% trusted.
          </p>

          <div className="mt-5 p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p className="text-lg font-bold text-teal-600">sainathtrust@upi</p>
          </div>

          <button
            className="
              mt-6 px-8 py-3 w-full rounded-full bg-teal-600 
              text-white font-semibold shadow hover:bg-teal-700 transition
            "
          >
            Copy UPI ID
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl border border-gray-100 shadow text-center">
            <h4 className="text-2xl font-bold text-teal-600">100%</h4>
            <p className="text-sm text-gray-600 mt-1">Secure Payments</p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-gray-100 shadow text-center">
            <h4 className="text-2xl font-bold text-teal-600">Tax Benefits</h4>
            <p className="text-sm text-gray-600 mt-1">80G Eligible</p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-gray-100 shadow text-center">
            <h4 className="text-2xl font-bold text-teal-600">Transparent</h4>
            <p className="text-sm text-gray-600 mt-1">Every Rupee Counted</p>
          </div>
        </div>

      </div>
    </section>
  );
}
