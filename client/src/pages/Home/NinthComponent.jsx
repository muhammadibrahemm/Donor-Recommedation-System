function NineComponent() {
    return (
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Become a Blood Donor</h2>
        <p className="text-lg mb-8">
          Help save lives by joining our blood donation mission today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-700 transition">
            Donate Now
          </button>
          <button className="border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition">
            Learn More
          </button>
        </div>
      </section>
    );
  }
  
  export default NineComponent;
  