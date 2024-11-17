import React from 'react'
import { useNavigate } from 'react-router-dom';

function Notification() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);  
      }
  return (
    <div className="min-h-screen   bg-[#0d0e20] p-4">
      <div className='flex flex-row'>
        <button className="   text-white bg-[#2E2545] w-10 h-10 rounded-md"
        onClick={goBack}
        >
          &#x2190; 
        </button>
      <h1 className="block text-lg text-gray-300 text-left ml-4 mt-2">Notification</h1>
        </div>
        </div>
  )
}

export default Notification