import React, { useState } from 'react';

const Register = () => {
  const [role, setRole] = useState("");
  const [availability, setAvailability] = useState(0);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-red-600 mb-4 text-center">Get Started Now</h2>


        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Role Selection */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm mb-1">Select Role</label>
            <div className="flex space-x-6">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="donor"
                  required
                  className="accent-red-500"
                  onChange={() => setRole("donor")}
                />
                <span>Donor</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="patient"
                  required
                  className="accent-red-500"
                  onChange={() => setRole("patient")}
                />
                <span>Patient</span>
              </label>
            </div>
          </div>

          {/* Fields */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm mb-1">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="p-2 border border-red-200 rounded-md outline-none"
              required
              name="name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="bloodGroup" className="text-sm mb-1">Blood Group</label>
            <select
              id="bloodGroup"
              name="bloodGroup"
              required
              className="p-2 border border-red-200 rounded-md outline-none bg-white text-gray-800"
            >
              <option value="" disabled>Select your blood group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="gender" className="text-sm mb-1">Gender</label>
            <select 
              id="gender"
              name="gender"
              required
              className="p-2 border border-red-200 rounded-md outline-none bg-white text-gray-800"
            >
              <option value="" disabled>Choose your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="age" className="text-sm mb-1">Age</label>
            <input
              type="number"
              id="age"
              placeholder="Enter your age"
              className="p-2 border border-red-200 rounded-md outline-none"
              required
              name="age"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="city" className="text-sm mb-1">City</label>
            <input
              type="text"
              id="city"
              placeholder="Choose your city"
              className="p-2 border border-red-200 rounded-md outline-none"
              required
              name="city"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="text-sm mb-1">Phone Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="+92 333 4444555"
              className="p-2 border border-red-200 rounded-md outline-none"
              required
              name="phone"
              pattern="^\+?[0-9\s]{7,20}$"
              title="Enter a valid phone number like +92 318 9118745"
            />
          </div>

          {/* Availability (Only for Donor) */}
          {role === "donor" && (
            <>
            <div className="flex flex-col">
              <label className="text-sm mb-1">Availability</label>
              <select
                name="availability"
                value={availability}
                onChange={(e) => setAvailability(Number(e.target.value))}
                className="p-2 border border-red-200 rounded-md outline-none bg-white text-gray-800"
              >
                <option value={1}>Available</option>
                <option value={0}>Not Available</option>
              </select>
            </div>

            <div className="flex flex-col">
      <label htmlFor="lastDonation" className="text-sm mb-1">Last Donation Date</label>
      <input
        type="date"
        id="lastDonation"
        name="lastDonation"
        className="p-2 border border-red-200 rounded-md outline-none"
        required
      />
    </div>
            </>
            
          )}

          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm mb-1">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="p-2 border border-red-200 rounded-md outline-none"
              required
              name="password"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="confirm-password" className="text-sm mb-1">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              className="p-2 border border-red-200 rounded-md outline-none"
              required
              name="confirmPassword"
            />
          </div>

          {/* Submit button full-width */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-40 py-2 bg-red-600 rounded-md text-white hover:bg-red-700 transition duration-300"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
