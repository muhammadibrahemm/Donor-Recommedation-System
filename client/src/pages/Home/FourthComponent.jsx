function FourthComponent() {
    return (
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white px-6 py-12 md:py-24">
        {/* Left - Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Commitment to Saving Lives
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            LifeSaver System is committed to revolutionizing blood donation with smart technology and a compassionate approach.
          </p>
          <p className="text-gray-600 mb-6">
            We believe that every drop counts. Our intelligent donor recommendation system matches recipients with the most suitable donors based on real-time availability, blood type compatibility, and location.
          </p>
          <p className="text-gray-600 mb-8">
            Through innovation, community engagement, and transparency, we aim to eliminate delays in critical situations and ensure a seamless donation experience for both donors and recipients across the country.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition duration-300">
            Learn More
          </button>
        </div>
  
        {/* Right - Image */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 px-4">
          <img
            src="/images/home/fourthcomponent/1.png" 
            alt="LifeSaver System Commitment"
            className="rounded-lg shadow-lg w-full h-96 md:h-[500px] object-cover"
          />
          <p className="text-gray-500 text-sm mt-2 italic">
            Empowering communities through intelligent blood donation technology.
          </p>
        </div>
      </section>
    );
  }
  
  export default FourthComponent;
  