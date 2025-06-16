import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [donors, setDonors] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchDonors = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/users/findDonors', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      // Filter only available donors (optional)
      const availableDonors = res.data.filter(d => d.available === true);
      setDonors(availableDonors);
      setLoading(false);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch donors');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDonors();
  }, []);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2>Available Donors</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {donors.length === 0 && !loading && <p>No donors available.</p>}

      {donors.map((donor) => (
        <div key={donor._id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <p><strong>Name:</strong> {donor.name}</p>
          <p><strong>Blood Group:</strong> {donor.bloodGroup}</p>
          <p><strong>City:</strong> {donor.city}</p>
          <p><strong>Phone:</strong> {donor.phone}</p>
          <p><strong>Available:</strong> {donor.available ? 'Yes' : 'No'}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
