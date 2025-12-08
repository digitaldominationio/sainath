import { useState } from "react";
import SectionTitle from "../components/common/SectionTitle";

export default function Donate() {
  const [previewImage, setPreviewImage] = useState(null);

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">

        <SectionTitle
          title="Support Our Mission"
          subtitle="Your contribution enables transparent and impactful work—your trust matters to us."
        />

        <p className="text-gray-700 max-w-2xl mx-auto mt-3 leading-relaxed">
          We maintain complete transparency in all financial and operational processes. 
          The ID proofs below verify that we are a legally registered and government-recognized trust.
        </p>

        {/* ID Proof Section */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-gray-900">
            Trust Verification Documents
          </h3>

          <p className="text-sm text-gray-600 mt-1">
            Click on the documents below to verify the authenticity of our trust.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* PAN Card */}
            <div
              className="p-6 bg-white rounded-xl border border-gray-100 shadow cursor-pointer hover:shadow-lg transition"
              onClick={() => setPreviewImage("/pan.jpg")}
            >
              <img
                src="/pancard.jpeg"
                alt="PAN Card"
                className="w-full h-40 object-contain hover:scale-105 transition-transform"
              />
              <p className="text-sm text-gray-700 mt-2 font-medium">PAN Card (Trust Proof)</p>
            </div>

            {/* Aadhar Card */}
            <div
              className="p-6 bg-white rounded-xl border border-gray-100 shadow cursor-pointer hover:shadow-lg transition"
              onClick={() => setPreviewImage("/aadhar.jpg")}
            >
              <img
                src="/aadhar.jpeg"
                alt="Aadhar Card"
                className="w-full h-40 object-contain hover:scale-105 transition-transform"
              />
              <p className="text-sm text-gray-700 mt-2 font-medium">Aadhar Card (Trust Address Proof)</p>
            </div>
          </div>
        </div>

        {/* UPI Block */}
        <div className="mt-12 bg-white shadow-md border border-gray-100 rounded-2xl p-8 mx-auto max-w-lg">
          <h3 className="text-xl font-semibold text-gray-900">Donate via UPI</h3>

          <p className="text-sm text-gray-600 mt-1">Fast, secure and fully transparent.</p>

          <div className="mt-5 p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p className="text-lg font-bold text-teal-600">sainathtrust@upi</p>
          </div>

          <button
            className="mt-6 px-8 py-3 w-full rounded-full bg-teal-600 text-white font-semibold shadow hover:bg-teal-700 transition"
          >
            Copy UPI ID
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl border border-gray-100 shadow text-center">
            <h4 className="text-2xl font-bold text-teal-600">100%</h4>
            <p className="text-sm text-gray-600 mt-1">Genuine Documentation</p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-gray-100 shadow text-center">
            <h4 className="text-2xl font-bold text-teal-600">Govt Verified</h4>
            <p className="text-sm text-gray-600 mt-1">PAN & Aadhar Registered</p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-gray-100 shadow text-center">
            <h4 className="text-2xl font-bold text-teal-600">Transparent</h4>
            <p className="text-sm text-gray-600 mt-1">Every Rupee Counted</p>
          </div>
        </div>
      </div>

      {/* Modal Preview */}
      {previewImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 bg-white text-black px-3 py-1 rounded-full shadow-lg font-bold hover:bg-gray-200 transition"
            onClick={() => setPreviewImage(null)}
          >
            ✕
          </button>

          <img
            src={previewImage}
            alt="Document Preview"
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
          />

        </div>
      )}
    </section>
  );
}
