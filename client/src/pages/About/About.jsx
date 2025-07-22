import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
          About LifeSaver System
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto mb-12 text-lg">
          LifeSaver System is committed to saving lives through intelligent donor-recipient matching. We believe in the power of technology to connect those in need with those who are ready to help.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Mission */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center justify-center mb-4">
            <svg
              className="w-16 h-16 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2C7 7 4 11 4 14a8 8 0 1016 0c0-3-3-7-8-12z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-center text-red-600 mb-2">Our Mission</h3>
          <p className="text-gray-600 text-center">
            To build a reliable, fast, and transparent system for matching donors with recipients to save as many lives as possible.
          </p>
        </div>

        {/* Team */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center justify-center mb-4">
            <svg
              className="w-16 h-16 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-3-3h-4m-6 5H2v-2a3 3 0 013-3h4m6-4a4 4 0 100-8 4 4 0 000 8zm-6 0a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-center text-red-600 mb-2">Our Team</h3>
          <p className="text-gray-600 text-center">
            Founded by Muhammad Ibraheem, Safiullah and Muhammad Ashiq, our passionate team is driven by a mission to help humanity.
          </p>
        </div>

        {/* Support */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center justify-center mb-4">
            <svg
              className="w-16 h-16 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636a9 9 0 11-12.728 0m12.728 0A9 9 0 005.636 18.364m12.728-12.728L5.636 18.364" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-center text-red-600 mb-2">24/7 Support</h3>
          <p className="text-gray-600 text-center">
            Whether you are a donor or recipient, we’re here to support you anytime. Reach us at <a href="mailto:support@lifesaver.com" className="text-red-500 underline">support@lifesaver.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
