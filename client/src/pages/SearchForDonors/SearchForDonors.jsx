import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SearchForDonor() {
  const [donors, setDonors] = useState([]);
  const [totalDonors, setTotalDonors] = useState(0);
  const [availableCount, setAvailableCount] = useState(0);
  const [notAvailableCount, setNotAvailableCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const navigate = useNavigate();

  const fetchDonors = async (page = 1) => {
    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:5000/api/donors/all?page=${page}`);
      const { donors, totalDonors, availability, nonAvailability, totalPages } = res.data;

      setDonors(donors);
      setTotalDonors(totalDonors);
      setAvailableCount(availability);
      setNotAvailableCount(nonAvailability);
      setTotalPages(totalPages);
    } catch (err) {
      console.error("Failed to fetch donors:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDonors(pageNum);
  }, [pageNum]);

  const handlePrevBtn = () => {
    if (pageNum > 1) setPageNum((prev) => prev - 1);
  };

  const handleNextBtn = () => {
    if (pageNum < totalPages) setPageNum((prev) => prev + 1);
  };

  const handleRedirectToCompatibilitySearch = () => {
    navigate("/compatible-search");
  };

  return (
    <section className="min-h-screen bg-blue-700 text-white">
      <div className="mx-auto rounded-xl p-8 shadow-lg bg-blue-800 bg-opacity-40">

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="bg-white text-black rounded-lg px-6 py-3 shadow font-semibold">
            🩸 Total Donors Found: {totalDonors}
          </div>
          <div className="bg-white text-black rounded-lg px-6 py-3 shadow font-semibold">
            🟢 Available: {availableCount}
          </div>
          <div className="bg-white text-black rounded-lg px-6 py-3 shadow font-semibold">
            🔴 Not Available: {notAvailableCount}
          </div>
        </div>

        {/* Compatibility and Proximity Search */}
        <div className="text-center mb-10">
          <p className="text-lg font-medium mb-4">
            🔍 Do you want to search based on <span className="font-bold">Blood Compatibility</span> and <span className="font-bold">Proximity of Location</span>?
          </p>
          <button
            onClick={handleRedirectToCompatibilitySearch}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded font-semibold"
          >
            Go to Compatibility Search
          </button>
        </div>

        {/* Donor Cards */}
        {loading ? (
          <p className="text-center">Loading donors...</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {donors.map((donor) => (
              <div
                key={donor._id}
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
                    className={`w-3 h-3 rounded-full ${
                      donor.available ? "bg-green-400" : "bg-red-500"
                    }`}
                    title={donor.available ? "Available" : "Not Available"}
                  ></span>
                </div>
                <p className="text-gray-400">
                  {donor.bloodGroup} • {donor.city}
                </p>
                <p className="text-sm mt-1">📞 {donor.phone}</p>
                <p className="text-sm mt-1">
                  🩸 Donations: {donor.donationCount?.length || 0}
                </p>
                <p className="text-sm">
                  📅 Last Donation:{" "}
                  {donor.lastDonationDate
                    ? new Date(donor.lastDonationDate).toLocaleDateString()
                    : "Not Donated Yet"}
                </p>
                <p>{donor.available ? "Available" : "Not Available"}</p>
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

        {/* Pagination + Page Number */}
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
      </div>
    </section>
  );
}

export default SearchForDonor;
