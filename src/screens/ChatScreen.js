// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import woman from "../assets/woman.png";

// function ChatScreen() {
//   const navigate = useNavigate();
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   // Handle input change
//   const handleInputChange = (e) => {
//     setInput(e.target.value);
//   };

//   // Send message
//   const sendMessage = () => {
//     if (input.trim()) {
//       const newMessage = {
//         id: messages.length + 1,
//         text: input,
//         time: new Date().toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         }),
//         type: "sent",
//       };
//       setMessages([...messages, newMessage]);
//       setInput("");
//     }
//   };

//   const goBack = () => {
//     navigate(-1);
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-[#0d0e20] p-4">
//       {/* Header */}
//       <div className="flex items-center space-x-4 py-2">
//         <button
//           className="text-white bg-[#2E2545] w-10 h-10 rounded-md"
//           onClick={goBack}
//         >
//           &#x2190;
//         </button>
//         <img src={woman} alt="User Avatar" className="w-10 h-10 rounded-full" />
//         <div>
//           <h2 className="text-lg text-white font-semibold">Jaxson Shah</h2>
//           <p className="text-sm text-green-400">Active now</p>
//         </div>
//       </div>

//       {/* Chat Messages */}
//       <div className="flex-1 overflow-y-auto mt-3 mb-0 space-y-4">
//         {messages.map((message) => (
//           <div
//             key={message.id}
//             className="flex justify-end items-end space-x-2"
//           >
//             <div className="flex flex-col items-end">
//               <div
//                 className="max-w-xs px-4 py-2   text-sm bg-purple-500 text-white"
//                 style={{
//                   borderTopLeftRadius: "0.75rem",
//                   borderBottomLeftRadius: "0.75rem",
//                   borderTopRightRadius: "0.75rem",
//                 }}
//               >
//                 {message.text}
//               </div>
//               <span className="text-xs text-gray-400 mt-1">{message.time}</span>
//             </div>
//             <img
//               src={woman}
//               alt="User Avatar"
//               className="w-6 h-6 rounded-full"
//             />
//           </div>
//         ))}
//       </div>

//       <div className="flex items-center p-4  space-x-2 ">
//         <input
//           type="text"
//           value={input}
//           onChange={handleInputChange}
//           placeholder="Type your text here..."
//           className="flex-1 px-4 py-2 rounded-full bg-[#2E2545] text-white outline-none placeholder-gray-400"
//         />

//         <button
//           className="text-gray-400 bg-[#2E2545] w-10 h-10 rounded-full"
//           onClick={sendMessage}
//         >
//           &#9658;
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ChatScreen;

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import woman from "../assets/woman.png";

function ChatScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const astrologerName = location.state?.name || "Astrologer"; // Use the name from state or a default name

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Send message
  const sendMessage = () => {
    if (input.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: input,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        type: "sent",
      };
      setMessages([...messages, newMessage]);
      setInput("");
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0d0e20] p-4">
      {/* Header */}
      <div className="flex items-center space-x-4 py-2">
        <button
          className="text-white bg-[#2E2545] w-10 h-10 rounded-md"
          onClick={goBack}
        >
          &#x2190;
        </button>
        <img src={woman} alt="User Avatar" className="w-10 h-10 rounded-full" />
        <div>
          <h2 className="text-lg text-white font-semibold">{astrologerName}</h2>
          <p className="text-sm text-green-400">Active now</p>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto mt-3 mb-0 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="flex justify-end items-end space-x-2">
            <div className="flex flex-col items-end">
              <div
                className="max-w-xs px-4 py-2 text-sm bg-purple-500 text-white"
                style={{
                  borderTopLeftRadius: "0.75rem",
                  borderBottomLeftRadius: "0.75rem",
                  borderTopRightRadius: "0.75rem",
                }}
              >
                {message.text}
              </div>
              <span className="text-xs text-gray-400 mt-1">{message.time}</span>
            </div>
            <img src={woman} alt="User Avatar" className="w-6 h-6 rounded-full" />
          </div>
        ))}
      </div>

      <div className="flex items-center p-4 space-x-2">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your text here..."
          className="flex-1 px-4 py-2 rounded-full bg-[#2E2545] text-white outline-none placeholder-gray-400"
        />

        <button
          className="text-gray-400 bg-[#2E2545] w-10 h-10 rounded-full"
          onClick={sendMessage}
        >
          &#9658;
        </button>
      </div>
    </div>
  );
}

export default ChatScreen;
