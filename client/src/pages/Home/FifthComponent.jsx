function FifthComponent() {
    return (
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Ways to Help</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join the LifeSaver System in transforming lives through smart, compassionate donation.
            </p>
          </div>
  
          {/* Grid of Contributions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Inspiring people to give blood
              </h3>
              <p className="text-gray-600">
                Our platform uses real-time data and smart alerts to encourage timely donations when they’re needed most.
              </p>
            </div>
  
            {/* Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Producing a safe and ready blood supply
              </h3>
              <p className="text-gray-600">
                LifeSaver ensures high-quality matches between donors and recipients, minimizing waste and boosting safety.
              </p>
            </div>
  
            {/* Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Increasing communication with our members
              </h3>
              <p className="text-gray-600">
                We keep donors engaged with smart reminders, feedback, and transparent tracking of their impact.
              </p>
            </div>
  
            {/* Card 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Offering specialized patient services
              </h3>
              <p className="text-gray-600">
                Our algorithm supports rare blood type requests, ensuring every patient receives compatible and timely support.
              </p>
            </div>
  
            {/* Card 5 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Specialist blood donors and clinical supervision
              </h3>
              <p className="text-gray-600">
                The system identifies high-value donors for critical cases, all under expert medical oversight.
              </p>
            </div>
  
            {/* Card 6 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                High quality assessment, diagnosis and treatment
              </h3>
              <p className="text-gray-600">
                From eligibility checks to donation analytics, LifeSaver reinforces every step with technology and care.
              </p>
            </div>
          </div>
  
          {/* CTA Button */}
          <div className="text-center mt-12">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition duration-300">
              Become a Donor Today
            </button>
          </div>
        </div>
      </section>
    );
  }
  
  export default FifthComponent;
  