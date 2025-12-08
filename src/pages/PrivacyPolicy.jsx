// import React from 'react';

// export default function PrivacyPolicy() {
//   return (
//     <section className="py-16 px-6 bg-gray-50">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-4xl font-bold text-center mb-8">
//           Privacy Policy
//         </h1>
//         <p className="text-gray-600 mb-6">
//           This Privacy Policy outlines how Sainath Charitable Trust (“we”, “our”, “us”) collects, uses, maintains, and protects the information of users (“you”) who visit our website or engage with our services.
//         </p>

//         <h2 className="text-2xl font-semibold mt-8 mb-3">1. Information We Collect</h2>
//         <p className="text-gray-600 mb-4">
//           We may collect personal information such as name, email address, phone number, and payment details when you donate, subscribe to updates, or fill out a form on our website.
//         </p>

//         <h2 className="text-2xl font-semibold mt-8 mb-3">2. How We Use Your Information</h2>
//         <p className="text-gray-600 mb-4">
//           The information we collect is used to:
//         </p>
//         <ul className="list-disc pl-6 text-gray-600 mb-4">
//           <li>Process donations and issue receipts</li>
//           <li>Respond to your queries and provide support</li>
//           <li>Improve our website and communication</li>
//           <li>Share updates about our social initiatives</li>
//         </ul>

//         <h2 className="text-2xl font-semibold mt-8 mb-3">3. Donation & Payment Security</h2>
//         <p className="text-gray-600 mb-4">
//           All payment transactions are securely processed through trusted third-party payment gateways. We do not store your credit/debit card details on our servers.
//         </p>

//         <h2 className="text-2xl font-semibold mt-8 mb-3">4. Cookies</h2>
//         <p className="text-gray-600 mb-4">
//           Our website may use cookies to improve user experience. You can choose to disable cookies in your browser settings.
//         </p>

//         <h2 className="text-2xl font-semibold mt-8 mb-3">5. Sharing of Information</h2>
//         <p className="text-gray-600 mb-4">
//           We do not sell, trade, or share your personal information with external parties, except trusted partners who assist in operating our trust activities or comply with legal obligations.
//         </p>

//         <h2 className="text-2xl font-semibold mt-8 mb-3">6. Data Protection</h2>
//         <p className="text-gray-600 mb-4">
//           We implement strict security measures to safeguard your personal information from unauthorized access, alteration, or misuse.
//         </p>

//         <h2 className="text-2xl font-semibold mt-8 mb-3">7. Third-Party Links</h2>
//         <p className="text-gray-600 mb-4">
//           Our website may contain links to external websites. We are not responsible for the privacy practices of those websites.
//         </p>

//         <h2 className="text-2xl font-semibold mt-8 mb-3">8. Your Consent</h2>
//         <p className="text-gray-600 mb-4">
//           By using our website, you consent to the terms of this Privacy Policy.
//         </p>

//         <h2 className="text-2xl font-semibold mt-8 mb-3">9. Changes to This Policy</h2>
//         <p className="text-gray-600 mb-4">
//           We may update this policy from time to time. Changes will be posted on this page with an updated revision date.
//         </p>

//         <h2 className="text-2xl font-semibold mt-8 mb-3">10. Contact Us</h2>
//         <p className="text-gray-600 mb-4">
//           If you have any questions regarding this Privacy Policy or your personal data, please contact us at:
//         </p>
//         <p className="text-gray-700 font-medium">
//           Sainath Charitable Trust<br />
//           Address: [Add your Trust Address]<br />
//           Email: [your-email@example.com]<br />
//           Phone: [your-phone-number]
//         </p>

//         <p className="text-gray-600 mt-8 text-sm text-center">
//           Last Updated: {new Date().toLocaleDateString()}
//         </p>
//       </div>
//     </section>
//   );
// }

import React from 'react';

export default function PrivacyPolicy() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-10 text-teal-700">
          Privacy Policy
        </h1>

        <p className="text-gray-700 leading-relaxed mb-6">
          This Privacy Policy explains how Sainath Charitable Trust (“we”, “our”, “us”)
          collects, uses, protects, and manages the information of individuals (“you”)
          who visit our website or engage with our services.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold text-teal-700 mt-8 mb-3">
          1. Information We Collect
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We may collect personal information including your name, phone number,
          email address, and payment details when you make a donation, fill a form,
          or interact with our website.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold text-teal-700 mt-8 mb-3">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          We use your data to:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
          <li>Process donations and issue receipts</li>
          <li>Respond to your queries</li>
          <li>Improve our website and communication services</li>
          <li>Share updates about our charitable activities</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold text-teal-700 mt-8 mb-3">
          3. Donation & Payment Security
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          All online donations are processed securely through verified payment gateways.
          We do not store your debit or credit card details.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold text-teal-700 mt-8 mb-3">
          4. Cookies
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our website may use cookies to enhance user experience. You may disable
          cookies anytime in your browser settings.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold text-teal-700 mt-8 mb-3">
          5. Sharing of Information
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We never sell or trade your information. We may share data only with trusted
          partners who help operate our activities or comply with legal requirements.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold text-teal-700 mt-8 mb-3">
          6. Data Protection
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We follow strict security measures to protect your data from unauthorized
          access or misuse.
        </p>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold text-teal-700 mt-8 mb-3">
          7. Third-Party Links
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our website may contain external links. We are not responsible for the
          privacy practices of those websites.
        </p>

        {/* Section 8 */}
        <h2 className="text-2xl font-semibold text-teal-700 mt-8 mb-3">
          8. Your Consent
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          By using our website, you agree to our Privacy Policy.
        </p>

        {/* Section 9 */}
        <h2 className="text-2xl font-semibold text-teal-700 mt-8 mb-3">
          9. Updates to This Policy
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We may revise this Privacy Policy periodically. Changes will be updated
          on this page.
        </p>

        {/* Contact Section */}
        {/* <h2 className="text-2xl font-semibold text-teal-700 mt-8 mb-3">
          10. Contact Us
        </h2>
        <p className="text-gray-700 leading-relaxed mb-2">
          For any questions or concerns, contact us:
        </p>
        <p className="text-gray-800 font-medium leading-relaxed">
          Sainath Charitable Trust <br />
          Address: [Your Trust Address] <br />
          Email: info@sainathcharitabletrust.org <br />
          Phone: +91-XXXXXXXXXX
        </p> */}

        {/* Footer */}
        <p className="text-gray-500 mt-10 text-sm text-center">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </section>
  );
}
