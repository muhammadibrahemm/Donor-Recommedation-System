import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import Select from 'react-select';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch, useSelector} from "react-redux";
import { sendUserDataThroughRedux } from '../../features/register/registerSlice';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email,isLoading } = useSelector((state) => state.registerSlice)
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [role, setRole] = useState("");
  const [lastDonationDate, setLastDonationDate] = useState() 
  const [userObj,setUserObj] = useState(
    {
      name: "",
      bloodGroup: "",
      gender: "",
      age: "",
      phone: "",
      password: "",
      confirmPassword: ""
    }
  )

  
  const changeUserObj = (e) => {
    const { name, value } = e.target;
    setUserObj((prev) => ({
      ...prev,[name]:value
    }))
  }

  useEffect(() => {
    fetch('/cities.csv')
      .then(response => response.text())
      .then(csvText => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: function (results) {
            const cleaned = results.data
              .filter(row => row.Area_Name && row.Postal_code)
              .map(row => ({
                value: row.Area_Name.trim(),
                label: `${row.Area_Name.trim()} (${row.Postal_code.trim()})`,
                postalCode: row.Postal_code.trim()
              }));

            const unique = Array.from(new Map(cleaned.map(item => [item.value, item])).values());
            setCities(unique);
          }
        });
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedCity) {
      alert("Please select a city.");
      return;
    }

    

    const {
      name,
      bloodGroup,
      gender,
      age,
      phone,
      password,
      confirmPassword
    } = userObj;

    if(password !== confirmPassword){
      toast.error("Passwords do not match. Please make sure both fields are identical.");
      return;
    }

    const formData = {
      name,
      bloodGroup,
      gender,
      age,
      phone,
      password,
      city: selectedCity.value,
      zipcode: selectedCity.postalCode,
      role,
      lastDonationDate:(lastDonationDate) ? (lastDonationDate) : "",
      email
    };

    console.log("Form Data:", formData);
    // Submit the formData to backend or API here
    const res = await dispatch(sendUserDataThroughRedux(formData))
    const { msg, status,message} = res.payload;
    if(status === 201)
    {
      toast.success(msg);
      navigate("/login");
      return;
    }

    if(status === 200)
    {
      toast.error(message);
      navigate("/");
      return;
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-red-600 mb-4 text-center">Get Started Now</h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
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

          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm mb-1">Name</label>
            <input type="text" id="name" placeholder="Enter your name" className="p-2 border border-red-200 rounded-md outline-none" required  value={userObj.name} onChange={(event) => changeUserObj(event)} name='name'/>
          </div>

          {/* Blood Group */}
          <div className="flex flex-col">
            <label htmlFor="bloodGroup" className="text-sm mb-1">Blood Group</label>
            <select id="bloodGroup" name="bloodGroup" required className="p-2 border border-red-200 rounded-md outline-none bg-white text-gray-800" value={userObj.bloodGroup} onChange={(e) => changeUserObj(e)}>
              <option value="" disabled>Select your blood group</option>
              {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(bg => (
                <option key={bg} value={bg}>{bg}</option>
              ))}
            </select>
          </div>

          {/* Gender */}
          <div className="flex flex-col">
            <label htmlFor="gender" className="text-sm mb-1">Gender</label>
            <select id="gender" name="gender" required className="p-2 border border-red-200 rounded-md outline-none bg-white text-gray-800"
              value={userObj.gender}
              onChange={(e)=> changeUserObj(e)}
            >
              <option value="" disabled>Choose your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          {/* Age */}
          <div className="flex flex-col">
            <label htmlFor="age" className="text-sm mb-1">Age</label>
            <input type="text" id="age" placeholder="Enter your age" className="p-2 border border-red-200 rounded-md outline-none" required  value={userObj.age} onChange={(e) => changeUserObj(e)} name='age'/>
          </div>

          {/* City Dropdown */}
          <div className="flex flex-col">
            <label htmlFor="city" className="text-sm mb-1">City</label>
            <Select
              options={cities}
              value={selectedCity}
              onChange={setSelectedCity}
              placeholder="Search city..."
              className="text-black"
              isSearchable
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-sm mb-1">Phone Number</label>
            <input
              type="text"
              id="phone"
              placeholder="+92 333 4444555"
              className="p-2 border border-red-200 rounded-md outline-none"
              required
              pattern="^\+?[0-9\s]{7,20}$"
              title="Enter a valid phone number like +92 318 9118745"
              name='phone'
              value={userObj.phone}
              onChange={(e)=>changeUserObj(e)}
            />
          </div>

          {/* Donor-specific Fields */}
          {role === "donor" && (
            <>
              <div className="flex flex-col">
                <label htmlFor="lastDonation" className="text-sm mb-1">Last Donation Date</label>
                <input
                  type="date"
                  id="lastDonation"
                  name="lastDonation"
                  className="p-2 border border-red-200 rounded-md outline-none"
                  value={lastDonationDate || ''}
                  onChange={(e) => setLastDonationDate(e.target.value)}
                />
              </div>
            </>
          )}

          {/* Password */}
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm mb-1">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="p-2 border border-red-200 rounded-md outline-none"
              required
              name="password"
              value={userObj.password}
              onChange={(e)=>changeUserObj(e)}
            />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col">
            <label htmlFor="confirm-password" className="text-sm mb-1">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              className="p-2 border border-red-200 rounded-md outline-none"
              required
              name="confirmPassword"
              value={userObj.confirmPassword}
              onChange={(e)=>changeUserObj(e)}
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-40 py-2 bg-red-600 rounded-md text-white hover:bg-red-700 transition duration-300"
            disabled={isLoading}
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
