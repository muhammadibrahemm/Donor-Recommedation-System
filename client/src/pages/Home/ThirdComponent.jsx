function ThirdComponent() {
    return (
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <p className="text-blue-600 uppercase text-sm font-semibold tracking-wide">
            Get Involved
          </p>
          <h2 className="text-4xl font-bold mt-2 mb-4">
            Your Support is Invaluable
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            There are many ways you can contribute to our mission of saving lives through blood donation.
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden text-left">
            <img src="/images/home/thirdcomponet/donateblood.png" alt="Donate Blood" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Donate Blood</h3>
              <p className="text-gray-600 mb-4">
                The most direct way to make a difference is by donating blood. Every donation has the potential to save multiple lives.
              </p>
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded">
                Learn More
              </button>
            </div>
          </div>
  
          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden text-left">
            <img src="/images/home/thirdcomponet/volunteer.jpeg" alt="Volunteer Team" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Volunteer Team</h3>
              <p className="text-gray-600 mb-4">
                Join our team of volunteers to assist with events, outreach efforts, and administrative tasks. Your time and skills can greatly impact our mission.
              </p>
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded">
                Learn More
              </button>
            </div>
          </div>
  
          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden text-left">
            <img src="/images/home/thirdcomponet/raiseawareness.jpg" alt="Spread Awareness" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Spread Awareness</h3>
              <p className="text-gray-600 mb-4">
                Share information about the importance of blood donation with friends and family. Use social media to raise awareness and encourage others to donate.
              </p>
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default ThirdComponent;
  