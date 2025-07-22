function FirstComponent() {
    return (
      <section className="min-h-screen bg-blue-700 text-white flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <p className="uppercase text-sm tracking-wider mb-2">Let's Donate</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Blood Donation Matters. Give Today!
          </h1>
          <p className="text-lg mb-8">
            All types of blood are needed to help patients.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded font-semibold">
              Donation Process
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-blue-700 px-6 py-3 rounded font-semibold">
              Eligibility Criteria
            </button>
          </div>
        </div>
      </section>
    );
  }
  
  export default FirstComponent;
  