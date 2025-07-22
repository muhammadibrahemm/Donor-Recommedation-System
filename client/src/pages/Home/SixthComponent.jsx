function SixthComponent() {
    return (
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Donation Information
          </h2>
  
          {/* Three Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Donation Locations */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Donation Locations</h3>
              </div>
              <p className="text-gray-600 mb-4">
                LifeSaver recommends the nearest donation centers based on your current location and real-time demand.
              </p>
              <div className="mt-4 bg-red-50 p-4 rounded">
                <h4 className="font-medium text-red-700 mb-2">LOCATIONS</h4>
                <p className="text-sm text-gray-600">Coming soon: Interactive LifeSaver location and availability finder.</p>
              </div>
            </div>
  
            {/* Donation Process */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">The Donation Process</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Register quickly through the LifeSaver platform</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Streamlined health screening & eligibility checks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Smart queueing and appointment scheduling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Recovery and feedback via donor dashboard</span>
                </li>
              </ul>
            </div>
  
            {/* Eligibility Requirements */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Eligibility Requirements</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Minimum age 17 (or 16 with consent)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Weigh 110 lbs or more</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>General good health</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>No recent tattoos/piercings (may vary)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Photo ID required</span>
                </li>
              </ul>
            </div>
          </div>
  
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300">
              Find a Location
            </button>
            <button className="bg-white hover:bg-gray-50 text-red-600 font-semibold px-6 py-3 rounded-lg border border-red-600 shadow-sm transition duration-300">
              Check Eligibility
            </button>
          </div>
        </div>
      </section>
    );
  }
  
  export default SixthComponent;
  