import { useState } from "react";
import MyIcon from "./MyIcon";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify'

export const EmailVerificationCode = () => {
  const [userCode, setUserCode] = useState("");
  const [count, setCount] = useState(1)
  const { verificationCode } = useSelector((state) =>state.registerSlice)
  const navigate = useNavigate();
  console.log("hy",verificationCode);  
  
  const handleBtn = () =>{
      console.log(typeof(verificationCode))
      console.log(typeof(userCode))

      if(count === 3) {
        navigate('/')
      }

      if(String(verificationCode) === userCode){
        navigate('/registration/user-data')
        toast.success("🎉 Code verified! You're all set — please continue by filling out your profile details.")
      }

      else{
        setCount((prevCount) => prevCount + 1)
        toast.error("❌ Oops! The verification code you entered is incorrect. Please double-check and try again.")
      }
  }


  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left - Icon */}
        <div className="text-red-600 flex justify-center w-full md:w-1/2">
          <MyIcon />
        </div>

        {/* Right - Form */}
        <div className="w-full md:w-1/2 text-center space-y-6 px-4">
          <h2 className="text-red-600 text-2xl font-bold">Check Your Email</h2>
          <p className="text-gray-700">
            We've sent a verification code to your email. Please enter it below to proceed.
          </p>

          {/* Input */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="text"
              placeholder="Enter your code"
              className="w-full sm:w-[300px] px-6 py-2 border border-red-300 rounded-full outline-none text-gray-800 text-center"
              value={userCode}
              onChange={(e)=>setUserCode(e.target.value)}
            />
            <button
              className="w-full sm:w-auto bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-2 rounded-full text-lg font-semibold transition-transform transform hover:scale-105"
              onClick={handleBtn}
            >
              CONTINUE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
