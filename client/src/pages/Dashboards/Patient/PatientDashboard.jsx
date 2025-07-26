import React from "react";

const currentPatientName = "Manahil Iftikhar";

function PatientDashboard() {
  return (
    <section className="min-h-screen bg-blue-700 text-white">
      <div className="mx-auto rounded-xl p-8 shadow-lg bg-blue-800 bg-opacity-40">
        <h1 className="text-2xl font-bold mb-4 bg-red-600 mt-12 px-4 py-2 rounded inline-block">
          Welcome, {currentPatientName}
        </h1>
        <p>This is your personal patient dashboard.</p>
        <p className="text-lg mb-6">
          Search for nearby blood donors and filter by blood group or city.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="bg-white text-black rounded-lg px-6 py-3 shadow font-semibold">
            🩸 Total Donors Found: {/* You can show count from API response */}
          </div>
          <div className="bg-white text-black rounded-lg px-6 py-3 shadow font-semibold">
            🟢 Available Now: {/* You can show available count from API */}
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-semibold">
            Post Blood Requirement
          </button>
        </div>

        {/* Success Stories */}
        <div className="bg-white text-black rounded-lg p-4 mb-10">
          <h3 className="text-xl font-semibold mb-2">Recent Success Story</h3>
          <p className="italic">
            Muhammad Zaigham received O+ in just 3 hours! Thank you donors 🙌
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
          <select className="text-black p-2 rounded w-full md:w-1/3">
            <option value="">All Blood Groups</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>

          <input
            type="text"
            placeholder="Search by city"
            className="text-black p-2 rounded w-full md:w-1/3"
          />

          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded font-semibold">
            Search
          </button>
        </div>

        {/* Donor Cards (You can fetch and map API data here) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Example static donor card */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-6 text-center text-white">
            <img
              src={`https://api.dicebear.com/8.x/thumbs/svg?seed=Ali`}
              alt="Donor"
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"
            />
            <div className="flex items-center justify-center space-x-2 mb-1">
              <span className="text-xl font-semibold">Ali Khan</span>
              <span
                className="w-3 h-3 rounded-full bg-green-400"
                title="Available"
              ></span>
            </div>
            <p className="text-gray-400">A+ • Lahore</p>
            <p className="text-sm mt-1">📞 03001234567</p>
            <p className="text-sm mt-1">🩸 Donations: 5</p>
            <p className="text-sm">📅 Last Donation: 2024-12-10</p>
            <div className="mt-4 flex justify-center space-x-4">
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-medium">
                Request
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded font-medium">
                Message
              </button>
            </div>
          </div>

          {/* Add more donor cards dynamically here */}
        </div>
      </div>
    </section>
  );
}

export default PatientDashboard;
