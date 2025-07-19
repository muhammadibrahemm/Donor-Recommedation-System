import MyIcon from "./MyIcon";

function Registration_Email() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left - Icon */}
        <div className="text-red-600 flex justify-center w-full md:w-1/2">
          <MyIcon />
        </div>

        {/* Right - Form */}
        <div className="w-full md:w-1/2 text-center space-y-6 px-4">
          <h2 className="text-red-600 text-2xl font-bold">Create an Account</h2>
          <p className="text-gray-700">
            Enter your email address to begin the registration process.
          </p>

          {/* Input */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-[300px] px-6 py-2 border border-red-300 rounded-full outline-none text-gray-800 text-center"
            />
            <button
              className="w-full sm:w-auto bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-2 rounded-full text-lg font-semibold transition-transform transform hover:scale-105"
            >
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration_Email;
