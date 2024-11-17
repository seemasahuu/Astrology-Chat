 import React from 'react';

function Input({ label, placeholder, icon }) {
  return (
    <div className="mb-4">
      <label className="block text-sm text-gray-300 mb-2 text-left">{label}</label>
      <div className="flex items-center   rounded-md px-3 py-2  bg-[#2E2545]">
        {icon && <img src={icon} alt="icon" className="w-5 h-5 mr-2 object-contain filter invert" />}
        <input 
          type="text" 
          placeholder={placeholder} 
          className="flex-grow bg-transparent outline-none   text-white placeholder-gray-400"
        />
      </div>
    </div>
  );
}

export default Input;

