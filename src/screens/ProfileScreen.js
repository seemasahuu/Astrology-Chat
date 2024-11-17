import React from 'react';
import { useNavigate } from 'react-router-dom';
import profilePic from '../assets/woman.png'; // Replace with the actual image path

function ProfileScreen() {
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Astrologers', icon: '🧑‍🔮' },
    { label: 'Compatibility', icon: '🤝' },
    { label: 'Numerology', icon: '🔢' },
    { label: 'Palm reader', icon: '✋' },
    { label: 'Natal chart', icon: '📊' },
    { label: 'Language', icon: '🌐' },
    { label: 'About us', icon: 'ℹ️' },
    { label: 'Subscribe', icon: '💎' },
  ];

  return (
    <div className="min-h-screen bg-[#0d0e20] text-white p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-lg font-bold">Profile</h1>
        <button className="text-white text-lg">&#9998;</button> {/* Edit Icon */}
      </div>

      {/* Profile Information */}
      <div className="flex items-center space-x-4 mb-8">
        <img src={profilePic} alt="Profile" className="w-16 h-16 rounded-full" />
        <div>
          <p className="font-bold">Leslie Alexander</p>
          <p className="text-sm text-gray-400">+91 (9876543210)</p>
        </div>
      </div>

      {/* Menu Options */}
      <div className="space-y-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 p-3 rounded-lg hover:bg-[#2E2545] cursor-pointer"
            onClick={() => navigate(`/${item.label.toLowerCase().replace(' ', '-')}`)}
          >
            <span className="text-lg">{item.icon}</span>
            <p className="text-sm">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Logout Button */}
      <div
        className="flex items-center space-x-4 p-3 mt-8 text-red-500 cursor-pointer"
        onClick={() => navigate('/logout')}
      >
        <span className="text-lg">↩️</span>
        <p className="text-sm">Logout</p>
      </div>
    </div>
  );
}

export default ProfileScreen;
