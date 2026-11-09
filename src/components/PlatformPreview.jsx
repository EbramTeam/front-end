// import { waveLight, waveDark, dashboardLight, dashboardDark } from '../assets/images'

// export default function PlatformPreview() {
//   return (
//     <section
//       id="platform"
//       aria-label="عرض المنصة"
//       className="relative overflow-hidden mt-0 pt-0 dark:bg-[#021a33]"
//     >
//       <img
//         src={waveLight}
//         alt=""
//         aria-hidden="true"
//         className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none select-none dark:hidden"
//       />
//       <img
//         src={waveDark}
//         alt=""
//         aria-hidden="true"
//         className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none select-none hidden dark:block"
//       />

//       <div className="relative z-10 pt-2">
//         <div className="w-[94%] sm:w-[92%] max-w-[1600px] mx-auto pt-4 sm:pt-6">
//           <div
//             className="rounded-t-[2rem] sm:rounded-t-[3.5rem] lg:rounded-t-[4.5rem]
//               border border-b-0 border-white/60 dark:border-white/20
//               bg-white/20 dark:bg-white/[0.05] backdrop-blur-md
//               p-2 sm:p-3 lg:p-4 shadow-2xl"
//           >
//             <div className="overflow-hidden rounded-t-[1.5rem] sm:rounded-t-[2.8rem] lg:rounded-t-[3.8rem] border border-b-0 border-white/30 dark:border-white/10">
//               <img
//                 src={dashboardLight}
//                 alt="لوحة تحكم IBRAM"
//                 className="w-full h-auto  block dark:hidden select-none"
//               />
//               <img
//                 src={dashboardDark}
//                 alt="لوحة تحكم IBRAM"
//                 className="w-full h-auto   hidden dark:block select-none"
//               />
//             </div>



//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }












// 


import { waveLight, waveDark, dashboardLight, dashboardDark } from '../assets/images'
 
/*
  مقاسات مأخوذة من التصميم (شاشة 1920px):
  - الموجة تبدأ خلف أزرار الـ Hero (تطلع فوق القسم بمقدار ~110px)
  - بين بداية الموجة وبداية إطار الداشبورد ~120px
  - الإطار يبعد ~94px عن طرفي الشاشة فتظهر الموجات على الجانبين
*/
 
export default function PlatformPreview() {
  return (
    <section
      id="platform"
      aria-label="عرض المنصة"
      className="relative pointer-events-none
        -mt-[clamp(48px,5.7vw,110px)]
        pt-[clamp(64px,6.25vw,120px)]"
    >
      {/* ==================== خلفية الموجات ==================== */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <img
          src={waveLight}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-top select-none dark:hidden"
        />
        <img
          src={waveDark}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-top select-none hidden dark:block"
        />
      </div>
 
      {/* ==================== إطار الداشبورد ==================== */}
      <div className="relative z-10 pointer-events-auto px-4 sm:px-8 lg:px-[clamp(48px,4.9vw,94px)]">
        {/* الإطار الزجاجي الخارجي */}
        <div
          className="rounded-t-[20px] sm:rounded-t-[26px] lg:rounded-t-[32px]
            border border-b-0 border-white/80 dark:border-white/15
            bg-white/35 dark:bg-white/[0.05] backdrop-blur-md
            shadow-[0_-8px_40px_rgba(0,119,255,0.08)]
            px-2 pt-3 sm:px-4 sm:pt-6 lg:px-[clamp(16px,1.6vw,31px)] lg:pt-[clamp(24px,2.7vw,52px)]"
        >
          {/* صورة الداشبورد (الجزء العلوي فقط) */}
          <div className="aspect-[2.7/1] overflow-hidden rounded-t-[12px] sm:rounded-t-[16px] lg:rounded-t-[20px] border border-b-0 border-white/70 dark:border-white/10 bg-white dark:bg-[#0b1b2d]">
            <img
              src={dashboardLight}
              alt="لوحة تحكم IBRAM"
              className="w-full h-full object-cover object-top block dark:hidden select-none"
            />
            <img
              src={dashboardDark}
              alt="لوحة تحكم IBRAM"
              className="w-full h-full object-cover object-top hidden dark:block select-none"
            />
          </div>
        </div>
      </div>
    </section>
  )
}