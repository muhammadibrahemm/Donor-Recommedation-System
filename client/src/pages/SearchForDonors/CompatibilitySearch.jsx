import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CompatibilitySearch() {
  const [bloodGroup, setBloodGroup] = useState('');
  const [city, setCity] = useState('');
  const [donors, setDonors] = useState([]);
  const [totalDonors, setTotalDonors] = useState(0); 
  const [availableCount, setAvailableCount] = useState(0); 
  const [allDonors, setAllDonors] = useState(0)
  const [loading, setLoading] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();

  const fetchSpecificDonors = async (obj, page = 1) => {
    try {
      setLoading(true);
      const res = await axios.post(`http://localhost:5000/api/donors/nearest/byzipcode?page=${page}`, obj);
      const {
        donors,
        totalCompatibleDonors,
        totalEligibleDonors,
        totalPages,
        totalDonors
      } = res.data;

      setDonors(donors);
      setTotalDonors(totalCompatibleDonors);
      setAvailableCount(totalEligibleDonors);
      setTotalPages(totalPages);
      setAllDonors(totalDonors);
    } catch (err) {
      console.error("Failed to fetch compatible donors:", err);
      navigate('compatible-search');
    } finally {
      setLoading(false);
    }
  };

  const handleSearchBtn = () => {
    if (!bloodGroup || !city) {
      alert("Please select a blood group and enter a city.");
      return;
    }

    const obj = { bloodGroup, city };
    fetchSpecificDonors(obj, 1);
    setPageNum(1);
  };

  const handlePrevBtn = () => {
    if (pageNum > 1) {
      const obj = { bloodGroup, city };
      fetchSpecificDonors(obj, pageNum - 1);
      setPageNum((prev) => prev - 1);
    }
  };

  const handleNextBtn = () => {
    if (pageNum < totalPages) {
      const obj = { bloodGroup, city };
      fetchSpecificDonors(obj, pageNum + 1);
      setPageNum((prev) => prev + 1);
    }
  };

  return (
    <section className="min-h-screen text-white bg-blue-800">
      <div className="mx-auto  p-12  bg-blue-800 bg-opacity-100 ">

        <h2 className="text-2xl font-bold mb-6 text-center">
          🔍 Compatibility & Proximity-Based Donor Search
        </h2>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
          <select
            className="text-black p-2 rounded w-full md:w-1/3"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          >
            <option value="">Select Blood Group</option>
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
            placeholder="Enter your city"
            className="text-black p-2 rounded w-full md:w-1/3"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <button
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded font-semibold"
            onClick={handleSearchBtn}
          >
            Search
          </button>
        </div>

        {/* Stats */}
        {donors.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-white text-black rounded-lg px-6 py-3 shadow font-semibold">
              🩸 Total Donors: {allDonors}
            </div>

            <div className="bg-white text-black rounded-lg px-6 py-3 shadow font-semibold">
              🩸 Total Compatible Donors: {totalDonors}
            </div>
            <div className="bg-white text-black rounded-lg px-6 py-3 shadow font-semibold">
              🟢 Available to Donate: {availableCount}
            </div>
          </div>
        )}

        {/* Donor Cards */}
        {loading ? (
          <p className="text-center">Loading donors...</p>
        ) : donors.length === 0 ? (
          <p className="text-center text-gray-200">No donors found. Try different filters.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {donors.map((donor, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg shadow-lg p-6 text-center text-white"
              >
                <img
                  src={`https://api.dicebear.com/8.x/thumbs/svg?seed=${donor.name}`}
                  alt={donor.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"
                />
                <div className="flex items-center justify-center space-x-2 mb-1">
                  <span className="text-xl font-semibold">{donor.name}</span>
                  <span
                    className="w-3 h-3 rounded-full bg-green-400"
                    title="Available"
                  ></span>
                </div>
                <p className="text-gray-400">{donor.bloodGroup} • {donor.city}</p>
                <p className="text-sm mt-1">📞 {donor.phone}</p>
                <p className="text-sm mt-1">🩸 Donations: {donor.donationCount}</p>
                <p className="text-sm">
                  📅 Last Donation:{" "}
                  {donor.lastDonationDate
                    ? new Date(donor.lastDonationDate).toLocaleDateString()
                    : "Not Donated Yet"}
                </p>
                <div className="mt-4 flex justify-center space-x-4">
                  <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-medium">
                    Request
                  </button>
                  <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded font-medium">
                    Message
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {donors.length > 0 && (
          <div className="flex flex-col items-center gap-2 mt-8">
            <div className="flex justify-center gap-4">
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-medium"
                disabled={pageNum === 1}
                onClick={handlePrevBtn}
              >
                Prev
              </button>
              <button
                className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded font-medium"
                disabled={pageNum === totalPages}
                onClick={handleNextBtn}
              >
                Next
              </button>
            </div>

            <div className="text-center text-white font-semibold">
              Page {pageNum} of {totalPages}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default CompatibilitySearch;
