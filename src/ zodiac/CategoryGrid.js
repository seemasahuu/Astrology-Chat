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
// // import    from "../assets/ .png";
// // import    from "../assets/ .png";
// // import    from "../assets/ .png";


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
// //   { key: "health", label: "Health", icon: health },
// ];

// function CategoryGrid({ setActiveCategory, activeCategory,style }) {
//   const navigate = useNavigate();
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
//                       ? "bg-orange-500 text-white"
//                       : "bg-gray-200 hover:bg-gray-300"
//                   }`}
               
//               >
//                 <div
//                   className={`text-sm ${
//                     activeCategory === category.key
//                       ? "text-white"
//                       : "text-gray-600"
//                   }`}
//                 >
//                   <img src={category.icon} className="w-[30px] h-[30px]" />
//                   {/* {category.icon} */}
//                 </div>
//                 <div
//                   className={`mt-2 text-xs font-semibold text-center ${
//                     activeCategory === category.key
//                       ? "text-white"
//                       : "text-gray-600"
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
