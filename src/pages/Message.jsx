import React from "react";
// import chairmanImg from "/101.png; // <-- update with correct path

const Message = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-teal-700 mb-10">
        Chairman's Message
      </h1>

      {/* Main Wrapper */}
      <div className="flex flex-col md:flex-row items-center gap-10 bg-white shadow-md rounded-xl p-6 md:p-10">

        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={"/101.png"}
            alt="Chairman"
            className="w-56 h-56 md:w-64 md:h-64 rounded-xl object-cover shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Er. Mihir Ku. Brahma
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Founder-cum-Chairman, Sainath Educational & Charitable Trust (Since
            2013) | Social Impact Leader | Engineer | Former Assistant Professor
            | Entrepreneur.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Er. Mihir Ku. Brahma is an impact-driven professional dedicated to
            community development, youth empowerment, and inclusive growth in
            Odisha. With a B.Tech, Master’s degree, and diverse experience
            across engineering, teaching, and corporate roles, he brings a
            unique blend of technical insight and human-centered leadership.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            In 2013, he founded the Sainath Educational & Charitable Trust,
            leading programs in education support, skills training, humanitarian
            relief, environmental care, and child welfare. He also serves as
            Joint Secretary (State Board) with the Department of Social Justice
            & Empowerment, International Human Rights Council.
          </p>

          <p className="text-gray-800 font-semibold italic">
            “Mission: Empower people. Strengthen communities. Create lasting
            social impact.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Message;
