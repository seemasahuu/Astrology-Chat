 import React from 'react';
import Input from './Input';
import userIcon from '../assets/user.png';          
import mobileIcon from '../assets/mobile-phone.png';  
import emailIcon from '../assets/email.png';    
import { useNavigate } from 'react-router-dom';    

function RegisterScreen() {
  const navigate = useNavigate();

  const goToVerification = () => {
    navigate('/verification'); // Navigate to the verification page
  };

  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div 
      className="min-h-screen flex justify-center"
      style={{ 
        backgroundImage: `linear-gradient(to bottom, #0d0e20, #0a092b), url('/background.png')`, 
        backgroundBlendMode: 'overlay' 
      }}
    >
      <div className="w-full max-w-md px-8 py-10 bg-dark-blue rounded-lg shadow-lg relative">
        <button className="absolute top-4 left-4 text-white bg-[#2E2545] w-10 h-10 rounded-md"
        onClick={goBack}

        >
          &#x2190; {/* Back arrow icon */}
        </button>
        <h2 className="text-2xl font-semibold text-center text-white mb-2 mt-10">Register</h2>
        <p className="text-center text-gray-400 mb-6">Welcome, please create your account to continue using this app</p>
        
        
        <Input label="User name" placeholder="Enter your name" icon={userIcon} />
        <Input label="Mobile number" placeholder="Enter your mobile number" icon={mobileIcon}/>
        <Input label="Email address" placeholder="Enter your email address" icon={emailIcon} />

        <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg text-lg font-semibold mt-14"
                onClick={goToVerification}

        >
          Register
        </button>
      </div>
    </div>
  );
}

export default RegisterScreen;
