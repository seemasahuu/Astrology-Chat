import React from 'react';
import  flag from "../assets/world.png";
import { useNavigate } from 'react-router-dom';

function LoginScreen() {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate('/register'); // Navigate to the register page
  };

  return (
    <div 
      className="min-h-screen flex   justify-center"
      style={{ 
        backgroundImage: `linear-gradient(to bottom, #0d0e20, #0a092b), url('/background.png')`, 
        backgroundBlendMode: 'overlay' 
      }}
    >
      <div className="w-full max-w-md px-8 py-10 bg-dark-blue rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-white mt-6">Login</h2>
        
        <label className="block text-sm text-gray-300 mb-2 text-left mt-14 ml-2">Mobile number</label>
        <div className="flex items-center border rounded-md px-3 py-2 mb-4 bg-dark-gray">
          <img src={flag} alt="Flag" className="w-6 h-4 mr-2 object-center object-contain" />
          <span className="text-white text-sm">+91</span>
          <input 
            id="mobile-number" 
            type="text" 
            placeholder="Enter your mobile number" 
            className="flex-grow ml-2 bg-transparent outline-none text-white placeholder-gray-400" 
          />
        </div>
        
        <p className="text-xs text-red-500 mb-4">*we are sending OTP for verification</p>
        
        <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg text-lg font-semibold mt-10"
            onClick={goToRegister}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginScreen;
