// import React from "react";
// import { Row, Col } from "antd";
// import {
//   BookOutlined,
//   HeartOutlined,
//   BankOutlined,
//   UserOutlined,
//   CarOutlined,
//   MedicineBoxOutlined,
//   BulbOutlined,
// } from "@ant-design/icons";
// import aries from "../assets/aries.png";
// import  taurus  from "../assets/taurus.png";
// import   gemini from "../assets/gemini.png";
// import cancer   from "../assets/cancer.png";
// import  leo  from "../assets/leo.png";
// import vigro   from "../assets/virgo.png";
// import  libra  from "../assets/balance.png";
// import  scorpio  from "../assets/scorpio.png";
// import   sagittarius from "../assets/sagittarius.png";
// import  capricorn  from "../assets/capricorn.png";
// import  aquarius  from "../assets/aquarius.png";
// import pisces   from "../assets/pisces.png";


// import { useNavigate } from "react-router-dom";

// const categories = [
//   { key: "aries", label: "Aries", icon:  aries },
//   { key: "taurus ", label: "Taurus ", icon:  taurus  },
//   { key: "gemini", label: "Gemini", icon: gemini },
//   { key: "cancer", label: "Cancer ", icon: cancer },
//   { key: "leo", label: "Leo", icon: leo },
//   { key: "vigro", label: "Vigro", icon: vigro  },
//   { key: "libra", label: "Libra", icon: libra },
//   { key: "scorpio ", label: "Scorpio ", icon:  scorpio  },
//   { key: "sagittarius", label: "Sagittarius", icon: sagittarius },
//   { key: "capricorn ", label: "Capricorn ", icon:   capricorn },
//   { key: "aquarius", label: "Aquarius", icon:  aquarius },
//   { key: "pisces ", label: "Pisces", icon:   pisces  }
// ];

// function CategoryGrid({ setActiveCategory, activeCategory,style }) {
//   const navigate = useNavigate();

//   const handleHorscopeDetails =()=>{
//     navigate("./horoscopeDetail")
//   }

//   return (
//     <div>
//       <div>
//         <Row gutter={[8, 8]}>
//           {categories.map((category) => (
//             <Col key={category.key} style={style}>
//               <div
//                 className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer transition-all duration-200 
//                   ${
//                     activeCategory === category.key
//                       ? "bg-orange-500 text-black"
//                       : "bg-[#2E2545] hover:bg-purple-500"
//                   }`}
//                onClick={handleHorscopeDetails}
//               >
//                 <div
//                   className={`text-sm ${
//                     activeCategory === category.key
//                       ? "text-white"
//                       : "text-gray-600"
//                   }`}
//                 >
//                   <img src={category.icon} className="w-[40px] h-[40px]" />
                
//                 </div>
//                 <div
//                   className={`mt-2 text-xs font-semibold text-center ${
//                     activeCategory === category.key
                    
//                   }`}
//                 >
//                   {category.label}
//                 </div>
//               </div>
//             </Col>
//           ))}
//         </Row>
//       </div>
//     </div>
//   );
// }

// export default CategoryGrid;


import React from "react";
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import aries from "../assets/aries.png";
import taurus from "../assets/taurus.png";
import gemini from "../assets/gemini.png";
import cancer from "../assets/cancer.png";
import leo from "../assets/leo.png";
import virgo from "../assets/virgo.png";
import libra from "../assets/balance.png";
import scorpio from "../assets/scorpio.png";
import sagittarius from "../assets/sagittarius.png";
import capricorn from "../assets/capricorn.png";
import aquarius from "../assets/aquarius.png";
import pisces from "../assets/pisces.png";

const categories = [
  { key: "aries", label: "Aries", icon: aries },
  { key: "taurus", label: "Taurus", icon: taurus },
  { key: "gemini", label: "Gemini", icon: gemini },
  { key: "cancer", label: "Cancer", icon: cancer },
  { key: "leo", label: "Leo", icon: leo },
  { key: "virgo", label: "Virgo", icon: virgo },
  { key: "libra", label: "Libra", icon: libra },
  { key: "scorpio", label: "Scorpio", icon: scorpio },
  { key: "sagittarius", label: "Sagittarius", icon: sagittarius },
  { key: "capricorn", label: "Capricorn", icon: capricorn },
  { key: "aquarius", label: "Aquarius", icon: aquarius },
  { key: "pisces", label: "Pisces", icon: pisces },
];

function CategoryGrid({ setActiveCategory, activeCategory, style }) {
  const navigate = useNavigate();

  const handleHorscopeDetails = (category) => {
    // Navigate to the HoroscopeDetail page with the selected category
    navigate(`/horoscopeDetail`, { state: { label: category.label, icon: category.icon } });
  };

  return (
    <div>
      <Row gutter={[8, 8]}>
        {categories.map((category) => (
          <Col key={category.key} style={style}>
            <div
              onClick={() => handleHorscopeDetails(category)}
              className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer transition-all duration-200 
                ${
                  activeCategory === category.key
                    ? "bg-orange-500 text-black"
                    : "bg-[#2E2545] hover:bg-purple-500"
                }`}
            >
              <div className={`text-sm ${activeCategory === category.key ? "text-white" : "text-gray-600"}`}>
                <img src={category.icon} className="w-[40px] h-[40px]" alt={`${category.label} icon`} />
              </div>
              <div className={`mt-2 text-xs font-semibold text-center`}>
                {category.label}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CategoryGrid;
