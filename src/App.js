//  import './App.css';
//  import AstroCircle from "./screens/AstroCircle"
// import   GetStartedScreen from "./screens/GetStartedScreen"
// import    LoginScreen from "./screens/LoginScreen"
// import  RegisterScreen from "./screens/RegisterScreen";
// import  VerificationScreen from "./screens/VerificationScreen"
// import ChatScreen from "./screens/ChatScreen"

// function App() {
//   return (
//     <div className="App">
//       {/* <AstroCircle/> */}
//     <GetStartedScreen/>
//     {/* <LoginScreen/> */}
//     {/* <RegisterScreen/> */}
//     {/* < VerificationScreen/> */}
//     {/* <ChatScreen/> */}
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import AstroCircle from "./screens/AstroCircle";
import GetStartedScreen from "./screens/GetStartedScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import VerificationScreen from "./screens/VerificationScreen";
import ChatScreen from "./screens/ChatScreen";
import AstroCircleHomeScreen from "./screens/AstroCircleHomeScreen"
import CategoryGrid from "./screens/CategoryGrid";
import TopAstrologers from "./screens/TopAstrologers";
import   Notification from "./screens/Notification";
import   HoroscopeDetail from "./screens/HoroscopeDetail";
import  ProfileScreen from "./screens/ProfileScreen";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GetStartedScreen />} />
        <Route path="/astro-circle" element={<AstroCircle />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/verification" element={<VerificationScreen />} />
        <Route path="/astroHome" element={<AstroCircleHomeScreen />} />
        <Route path="/chat" element={<ChatScreen />} />
        <Route path="/categoryGrid" element={<CategoryGrid/>} />
        <Route path="/topAstrologers" element={<TopAstrologers/>} />
        <Route path="/notification" element={<Notification/>} />
        <Route path="/horoscopeDetail" element={<HoroscopeDetail/>} />
        <Route path="/profileScreen" element={<ProfileScreen/>} />
 
      </Routes>
    </div>
  );
}

export default App;
