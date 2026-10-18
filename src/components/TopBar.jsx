// import { xIcon } from '../assets/images'

// export default function TopBar() {
//   return (
//     <div className="w-full bg-gradient-to-r from-blue-500 to-sky-400 text-white py-2 px-4 sm:px-8 shadow-md">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-xs sm:text-sm">
//         <div className="flex items-center gap-4 sm:gap-4 flex-wrap justify-center md:justify-start">
//           <div className="flex items-center gap-2 md:ml-[-290px]">
//             <span className="text-[#ffffff] font-[500]">فلسطين ، غزة</span>
//             <i className="fa-solid fa-location-dot text-white/100 transition-transform duration-300 hover:scale-125 hover:-translate-y-0.5 cursor-pointer"></i>
//           </div>

//           <div className="hidden sm:block h-4 w-[1px] bg-white/50"></div>

//           <div className="flex items-center gap-2">
//             <span className="font-[500] text-[#ffffff]">info@ibram.com</span>
//             <i className="fa-solid fa-envelope text-white/100 transition-transform duration-300 hover:scale-125 hover:rotate-6 cursor-pointer"></i>
//           </div>
//         </div>

//         <div className="flex items-center gap-3 md:mr-[-290px] justify-center md:justify-end flex-wrap">
//           <div className="flex items-center gap-3 text-sm">
//             <a
//               href="#"
//               className="hover:text-white/80 transition-all duration-300 hover:scale-125 hover:-rotate-12 inline-block"
//               aria-label="X"
//             >
//               <img className="w-3.5 h-3.5" src={xIcon} alt="#twitter" />
//             </a>

//             <a
//               href="#"
//               className="hover:text-white/80 transition-all duration-300 hover:scale-125 hover:-translate-y-1 inline-block"
//               aria-label="LinkedIn"
//             >
//               <i className="fa-brands fa-linkedin-in cls text-[#ffffff] font-[900]"></i>
//             </a>

//             <a
//               href="#"
//               className="hover:text-white/80 transition-all duration-300 hover:scale-125 hover:rotate-12 inline-block"
//               aria-label="Instagram"
//             >
//               <i className="fa-brands fa-instagram"></i>
//             </a>

//             <a
//               href="#"
//               className="hover:text-white/80 transition-all duration-300 hover:scale-125 inline-block"
//               aria-label="Facebook"
//             >
//               <i className="fa-brands fa-facebook-f"></i>
//             </a>
//           </div>
//           <span className="font-medium">: تابعونا على </span>
//         </div>
//       </div>
//     </div>
//   )
// }

import { xIcon } from '../assets/images'

export default function TopBar() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-500 to-sky-400 text-white py-2 px-4 sm:px-8 md:px-10 shadow-md">
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3 text-xs sm:text-sm">
        <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
          <div className="flex items-center gap-2">
            <span className="text-white font-medium">فلسطين ، غزة</span>
            <i className="fa-solid fa-location-dot text-white transition-transform duration-300 hover:scale-125 hover:-translate-y-0.5 cursor-pointer"></i>
          </div>

          <div className="hidden sm:block h-4 w-[1px] bg-white/50"></div>

          <div className="flex items-center gap-2">
            <span className="font-medium text-white">info@ibram.com</span>
            <i className="fa-solid fa-envelope text-white transition-transform duration-300 hover:scale-125 hover:rotate-6 cursor-pointer"></i>
          </div>
        </div>

        <div className="flex items-center gap-3 justify-center md:justify-end flex-wrap">
          <div className="flex items-center gap-3 text-sm">
            <a
              href="#"
              className="hover:text-white/80 transition-all duration-300 hover:scale-125 hover:-rotate-12 inline-block"
              aria-label="X"
            >
              <img className="w-3.5 h-3.5" src={xIcon} alt="X" />
            </a>

            <a
              href="#"
              className="hover:text-white/80 transition-all duration-300 hover:scale-125 hover:-translate-y-1 inline-block"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in text-white"></i>
            </a>

            <a
              href="#"
              className="hover:text-white/80 transition-all duration-300 hover:scale-125 hover:rotate-12 inline-block"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a
              href="#"
              className="hover:text-white/80 transition-all duration-300 hover:scale-125 inline-block"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </div>
          <span className="font-medium">: تابعونا على </span>
        </div>
      </div>
    </div>
  )
};