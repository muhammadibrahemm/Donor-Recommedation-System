function SevenComponent() {
    return (
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Column - Image */}
            <div className="h-80 md:h-full">
              <img
                src="/images/home/sevencomponent/donor-day.png" // Replace with your actual image 
                alt="Blood Donation in Pakistan"
                className="w-full h-full object-cover"
              />
            </div>
  
            {/* Right Column - Text Content */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
                WORLD BLOOD DONOR DAY
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                World Blood Donor Day celebrates the lifesaving contributions of blood donors and raises awareness of the ongoing need for safe blood donations worldwide.
              </p>
  
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Get Started Today!</h2>
  
              {/* Event Details */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <span className="inline-block w-6 h-6 rounded-full border border-gray-400 mr-3 mt-1 flex-shrink-0"></span>
                  <span className="text-gray-700">
                    Mardan, Peshawar, Lahore, Karachi, Islamabad – Active across Pakistan
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-6 h-6 rounded-full bg-red-600 border border-red-600 mr-3 mt-1 flex-shrink-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700 font-medium">14 June</span>
                </div>
                <div className="flex items-start">
                  <span className="inline-block w-6 h-6 rounded-full border border-gray-400 mr-3 mt-1 flex-shrink-0"></span>
                  <span className="text-gray-700">Open 24/7 for all cities</span>
                </div>
              </div>
  
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 w-full sm:w-auto">
                  Login
                </button>
                <button className="bg-white border border-red-600 hover:bg-red-50 text-red-600 font-semibold px-6 py-3 rounded-lg transition duration-300 w-full sm:w-auto">
                  Register
                </button>
              </div>
            </div>
          </div>
  
          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 text-center border-t">
            <p className="text-sm text-gray-500">
              Join LifeSaver in celebrating this important day and help save lives across Pakistan!
            </p>
          </div>
        </div>
      </section>
    );
  }
  
  export default SevenComponent;
  