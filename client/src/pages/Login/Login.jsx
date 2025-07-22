function Login() {
    return (
      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Main content - Login section */}
        <div className="flex-grow flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-4xl bg-white rounded-xl shadow-md p-8 flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left - SVG Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-64 h-64 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 7a4 4 0 01-8 0m8 0a4 4 0 00-8 0M12 14a9 9 0 00-9 9h18a9 9 0 00-9-9z"
                />
              </svg>
            </div>
  
            {/* Right - Login Form */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold text-center text-red-600 mb-6">Login to Your Account</h2>
              <form className="space-y-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter your email"
                  />
                </div>
  
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter your password"
                  />
                </div>
  
                <div className="text-right">
                  <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                    Forgot password?
                  </a>
                </div>
  
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition"
                >
                  Login
                  </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Login;
  