import React, { useState } from "react";
import {NavLink} from "react-router-dom";


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md px-4 py-3 flex items-center justify-between md:justify-around">
      {/* Left - Logo and Name */}
      <div className="flex items-center space-x-2">
        {/* Example SVG logo */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C7 7 4 11 4 14a8 8 0 1016 0c0-3-3-7-8-12z" />
        </svg>
        <span className="text-lg font-bold text-red-600">LifeSaver System</span>
      </div>

      {/* Center - Navigation links (hidden on small screens) */}
      <nav className="hidden md:flex space-x-6 font-medium">
        <NavLink
          to={""}
          className={({ isActive }) =>
            `block px-3 py-1 rounded transition ${
              isActive
                ? 'bg-red-600 text-white px-4'
                : 'text-red-600 hover:underline hover:bg-red-50'
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            `block px-3 py-1 rounded transition ${
              isActive
                ? 'bg-red-600 text-white px-4'
                : 'text-red-600 hover:underline hover:bg-red-50'
            }`
          }
        >
          About Us
        </NavLink>

        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            `block px-3 py-1 rounded transition ${
              isActive
                ? 'bg-red-600 text-white px-4'
                : 'text-red-600 hover:underline hover:bg-red-50'
            }`
          }
        >
          Contact
        </NavLink>

        <NavLink
          to={"/login"}
          className={({ isActive }) =>
            `block px-3 py-1 rounded transition ${
              isActive
                ? 'bg-red-600 text-white px-4'
                : 'text-red-600 hover:underline hover:bg-red-50'
            }`
          }
        >
          Login
        </NavLink>

        <NavLink
          to={"/registration"}
          className={({ isActive }) =>
            `block px-3 py-1 rounded transition ${
              isActive
                ? 'bg-red-600 text-white px-4'
                : 'text-red-600 hover:underline hover:bg-red-50'
            }`
          }
        >
          Register
        </NavLink>
      </nav>



      {/* Right - Search Button (centered on small screens) */}
      <div className="hidden md:flex">
        <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300">
          Search for Donors
        </button>
      </div>

      {/* Toggle & Mobile Button */}
      <div className="flex md:hidden items-center space-x-2">
        <button className="bg-red-600 text-white px-4 py-2 rounded-md">
          Search for Donors
        </button>
        <button
          className="text-red-600 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white my-4 shadow-md py-2 px-6 flex flex-col space-y-3 md:hidden z-10 text-center">
          <a href="#" className="text-red-600">Home</a>
          <a href="#" className="text-red-600">About Us</a>
          <a href="#" className="text-red-600">Contact</a>
          <a href="#" className="text-red-600">Login</a>
          <a href="#" className="text-red-600">Register</a>
        </div>
      )}
    </header>
  );
}

export default Header;
