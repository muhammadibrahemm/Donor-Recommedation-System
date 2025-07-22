function SecondComponent() {
    return (
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white px-6 py-12">
        {/* Left - Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src="/images/home/secondcomponent.png"
            alt="Doctor holding baby"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
  
        {/* Right - Text */}
        <div className="w-full md:w-1/2 text-center md:text-left px-4">
          <p className="text-sm uppercase text-blue-600 font-semibold tracking-wide">
            Make an impact
          </p>
          <h2 className="text-4xl font-bold mt-2 mb-4">Who We Are</h2>
          <p className="text-lg font-medium text-gray-700 mb-4">
            We are a dedicated nonprofit blood donation center committed to saving lives and strengthening communities
          </p>
          <p className="text-gray-600 mb-6">
            We believe in the power of community and the life-saving impact of blood donation. Our mission is to ensure a steady supply of safe and accessible blood for patients in need. We are dedicated to raising awareness about the importance of blood donation and providing support to donors throughout their journey.
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded">
            Donate Now
          </button>
        </div>
      </section>
    );
  }
  
  export default SecondComponent;
  