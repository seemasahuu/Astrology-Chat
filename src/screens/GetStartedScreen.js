import React from 'react';
import { useNavigate } from 'react-router-dom';

const  GetStartedScreen = () => {
    const navigate = useNavigate();

    const goToLogin = () => {
      navigate('/login'); // Navigate to the login page
    };
    return (
        <div 
            className="h-screen bg-cover bg-center flex flex-col justify-end items-center text-center relative"
            style={{ backgroundImage: `url('/background.png')` }} // Replace with the actual path to your background image
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0   "
            style={{ 
                backgroundImage: `linear-gradient(to bottom, #0d0e20, #0a092b), url('/background.png')`, 
                backgroundBlendMode: 'overlay' 
            }}
            ></div>
            
            <div className="relative z-10 max-w-md pb-28">
                <h1 className="text-3xl font-bold text-white mb-4">The Astrology</h1>
                <p className="text-gray-300 text-sm mb-10 px-4">
                    your personal horoscope in your mobile. know more about your self with our expert calculation.
                </p>
                <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-28 rounded-md"
                 onClick={goToLogin}
                >
                    Get started
                </button>
            </div>
        </div>
    );
};

export default  GetStartedScreen;

  
