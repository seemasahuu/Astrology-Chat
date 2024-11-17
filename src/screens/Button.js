// Button.js
import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-purple-500 rounded-lg p-4 mt-8 text-white font-semibold hover:bg-purple-600 transition-colors"
    >
      {text}
    </button>
  );
};

export default Button;
