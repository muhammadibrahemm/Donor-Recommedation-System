function EightComponent() {
    return (
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            What Our Donors Say
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-red-500 text-4xl font-serif mb-2">"</div>
              <p className="text-gray-600 italic mb-4">
                A great initiative in Mardan. The staff made me feel at ease.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold mr-3">
                  A
                </div>
                <span className="font-medium text-gray-700">Ahmed Khan – Mardan</span>
              </div>
            </div>
  
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-red-500 text-4xl font-serif mb-2">"</div>
              <p className="text-gray-600 italic mb-4">
                I donated in UET Mardan. Everything was smooth and well managed.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold mr-3">
                  S
                </div>
                <span className="font-medium text-gray-700">Sana Fatima – UET Mardan</span>
              </div>
            </div>
  
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-red-500 text-4xl font-serif mb-2">"</div>
              <p className="text-gray-600 italic mb-4">
                The process was quick and painless. Proud to help from Peshawar.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold mr-3">
                  M
                </div>
                <span className="font-medium text-gray-700">Muhammad Ali – Peshawar</span>
              </div>
            </div>
  
            {/* Testimonial 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-red-500 text-4xl font-serif mb-2">"</div>
              <p className="text-gray-600 italic mb-4">
                Donated in Nowshera. Thank you for the care and professionalism!
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold mr-3">
                  R
                </div>
                <span className="font-medium text-gray-700">Rida Zafar – Nowshera</span>
              </div>
            </div>
          </div>
  
          {/* CTA */}
          <div className="text-center mt-12">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition duration-300">
              Share Your Experience
            </button>
          </div>
        </div>
      </section>
    );
  }
  
  export default EightComponent;
  