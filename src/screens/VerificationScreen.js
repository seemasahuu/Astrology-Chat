 import React, { useState, useRef } from 'react';
 import { useNavigate } from 'react-router-dom';


function VerificationScreen() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to the next input if a digit is entered
    if (value && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index] === "") {
        // Move focus to the previous input if empty
        if (index > 0) {
          inputRefs.current[index - 1].focus();
        }
      } else {
        // Clear the current input and keep focus
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
  };

  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const goToAstroHome = () => {
    navigate('/astroHome'); // Navigate to the AstroHome page
  };


  return (
    <div 
      className="min-h-screen flex "
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
        <h2 className="text-2xl font-semibold text-center text-white  mt-14">Verification</h2>
        <p className="text-center text-gray-400 mb-6">
          Confirmation code has been sent to you on your mobile no +91 1234567890
        </p>

        {/* OTP Input Boxes */}
        <div className="flex justify-center space-x-4 mb-6 mt-14">
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={value}
              ref={(el) => (inputRefs.current[index] = el)} // Set ref for each input
              onChange={(e) => handleOtpChange(e.target.value, index)}
              onKeyDown={(e) => handleBackspace(e, index)} // Handle backspace
              className="w-12 h-12 text-center bg-[#2E2545] text-white rounded-md text-2xl outline-none"
            />
          ))}
        </div>

        {/* Timer */}
        <p className="text-center text-white mb-6 mt-14">00:57</p>

        {/* Verify Button */}
        <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg text-lg font-semibold mb-4"
                onClick={goToAstroHome}
        >
          Verify
        </button>

        {/* Resend Option */}
        <p className="text-center text-gray-400 cursor-pointer">Resend</p>
      </div>
    </div>
  );
}

export default VerificationScreen;
