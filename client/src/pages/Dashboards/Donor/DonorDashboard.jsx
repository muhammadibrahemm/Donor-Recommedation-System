import React, { useState } from "react";

const currentDonorName = "Tariq Mehmood";

const mockDonorInfo = {
  lastDonationDate: "2025-01-30",
  available: false,
  donationCount: [
    { date: "2024-05-10", location: "Lahore" },
    { date: "2024-09-15", location: "Multan" },
    { date: "2025-01-30", location: "Peshawar" },
  ],
  userProfile: {
    name: "Tariq Mehmood",
    email: "tariq@example.com",
    bloodGroup: "O-",
    gender: "male",
    age: 29,
    city: "Peshawar",
    phone: "03219876543",
    zipcode: "25000",
  },
};

function DonorDashboard() {
  const [available, setAvailable] = useState(mockDonorInfo.available);
  const [certificate, setCertificate] = useState(null);

  const handleAvailabilityToggle = () => {
    setAvailable((prev) => !prev);
    // Future: API call to update availability
  };

  const handleCertificateUpload = (e) => {
    const file = e.target.files[0];
    setCertificate(file);
    // Future: File upload logic
  };

  return (
    <section className="min-h-screen bg-blue-700 text-white py-10 px-4">
      <div className="max-w-5xl mx-auto bg-blue-800 bg-opacity-40 rounded-xl p-8 shadow-lg">
        <h1 className="text-2xl font-bold mb-4 bg-red-600 px-4 py-2 rounded inline-block">
          Welcome, {currentDonorName}
        </h1>
        <p className="mb-4">This is your personal donor dashboard.</p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="bg-white text-black rounded-lg px-6 py-3 shadow font-semibold">
            🩸 Total Donations: {mockDonorInfo.donationCount.length}
          </div>
          <div className="bg-white text-black rounded-lg px-6 py-3 shadow font-semibold">
            📅 Last Donated: {mockDonorInfo.lastDonationDate}
          </div>
          <div className="bg-white text-black rounded-lg px-6 py-3 shadow font-semibold">
            {available ? "🟢 Available for Donation" : "🔴 Not Available"}
          </div>
        </div>

        {/* Upload Certificate */}
        <div className="bg-white text-black rounded-lg p-4 mb-6">
          <h3 className="text-xl font-semibold mb-2">Upload Donation Certificate</h3>
          <input
            type="file"
            onChange={handleCertificateUpload}
            className="block w-full text-sm"
          />
          {certificate && (
            <p className="text-green-700 mt-2">Uploaded: {certificate.name}</p>
          )}
        </div>

        {/* Toggle Availability */}
        <div className="mb-8">
          <button
            onClick={handleAvailabilityToggle}
            className={`px-6 py-2 rounded font-semibold transition ${
              available
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {available ? "Set as Unavailable" : "Set as Available"}
          </button>
        </div>

        {/* Profile Details */}
        <div className="bg-white text-black rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Your Profile</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Detail label="Name" value={mockDonorInfo.userProfile.name} />
            <Detail label="Email" value={mockDonorInfo.userProfile.email} />
            <Detail label="Phone" value={mockDonorInfo.userProfile.phone} />
            <Detail label="Blood Group" value={mockDonorInfo.userProfile.bloodGroup} />
            <Detail label="Gender" value={mockDonorInfo.userProfile.gender} />
            <Detail label="Age" value={mockDonorInfo.userProfile.age} />
            <Detail label="City" value={mockDonorInfo.userProfile.city} />
            <Detail label="Zip Code" value={mockDonorInfo.userProfile.zipcode} />
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable field for profile
const Detail = ({ label, value }) => (
  <div>
    <label className="font-semibold block mb-1">{label}</label>
    <input
      className="bg-gray-200 text-black w-full p-2 rounded"
      value={value}
      readOnly
    />
  </div>
);

export default DonorDashboard;
