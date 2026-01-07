import { useState } from "react";
import SectionTitle from "../components/common/SectionTitle";

export default function Donate() {
  const [previewImage, setPreviewImage] = useState(null);

  return (
    <section className="py-24 px-6 bg-slate-50 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <SectionTitle
            title="Support Our Mission"
            subtitle="Your contribution enables transparent and impactful work—your trust matters to us."
          />
          <p className="text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed text-lg">
            We maintain complete transparency in all financial and operational processes.
            Every contribution helps us reach more people in need.
          </p>
        </div>

        {/* Top Section: PAN Verification */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">

          {/* Left: PAN Image */}
          <div
            className="group relative bg-white rounded-3xl p-4 shadow-xl border border-slate-100 cursor-pointer overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
            onClick={() => setPreviewImage("/pancard.jpeg")}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end justify-center pb-6">
              <span className="bg-white/90 text-slate-900 px-6 py-2 rounded-full font-bold shadow-lg backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">
                View Original Document
              </span>
            </div>
            <img
              src="/pancard.jpeg"
              alt="PAN Card"
              className="w-full h-auto object-cover rounded-2xl shadow-sm"
            />
          </div>

          {/* Right: PAN Details & Badges */}
          <div className="space-y-8">
            <div className="bg-teal-50 rounded-3xl p-8 border border-teal-100">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-white text-teal-600 p-2 rounded-lg shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
                <h3 className="text-2xl font-bold text-teal-900">Legal Verification</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Registered Name</p>
                  <p className="text-xl text-slate-800 font-bold">Sainath Education and Charitable Trust</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Permanent Account Number</p>
                  <p className="text-xl text-slate-800 font-mono font-bold tracking-wide">AAQTS0493M</p>
                </div>
                <div className="flex items-center gap-2 text-teal-700 font-medium bg-white/50 p-3 rounded-xl border border-teal-100/50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Government Registered & Verified
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-md text-center">
                <div className="text-teal-600 font-bold text-xl mb-1">100%</div>
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Genuine</div>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-md text-center">
                <div className="text-teal-600 font-bold text-xl mb-1">Govt</div>
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Verified</div>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-md text-center">
                <div className="text-teal-600 font-bold text-xl mb-1">Tax</div>
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Benefits</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Bank Details */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl text-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-teal-500 opacity-10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                <div>
                  <h3 className="text-3xl font-bold tracking-tight">Bank Transfer Details</h3>
                  <p className="text-slate-400 mt-2">Use these details to make a direct bank transfer.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-6">
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">Beneficiary Name</p>
                    <p className="text-xl font-semibold tracking-wide">Sainath Education and Charitable Trust</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">Bank Name</p>
                    <p className="text-xl font-medium">Bandhan Bank</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">Account Number</p>
                    <div className="flex items-center gap-4 group">
                      <p className="text-2xl font-mono tracking-widest text-white group-hover:text-teal-400 transition-colors">1022 0004 8920 23</p>
                      <button
                        onClick={() => navigator.clipboard.writeText("10220004892023")}
                        className="opacity-0 group-hover:opacity-100 bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-all"
                        title="Copy Account Number"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">IFSC Code</p>
                    <div className="flex items-center gap-4 group">
                      <p className="text-xl font-mono tracking-wider text-white group-hover:text-teal-400 transition-colors">BDBL0002215</p>
                      <button
                        onClick={() => navigator.clipboard.writeText("BDBL0002215")}
                        className="opacity-0 group-hover:opacity-100 bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-all"
                        title="Copy IFSC Code"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Modal Preview */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setPreviewImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <button
              className="absolute -top-12 right-0 text-white hover:text-teal-400 transition"
              onClick={() => setPreviewImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={previewImage}
              alt="Document Preview"
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl bg-white"
            />
          </div>
        </div>
      )}
    </section>
  );
}
