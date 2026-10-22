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










import { waveLight, waveDark, dashboardLight, dashboardDark } from '../assets/images'

export default function PlatformPreview() {
  return (
    <section
      id="platform"
      aria-label="عرض المنصة"
      className="relative overflow-hidden mt-0 pt-0 dark:bg-[#] lg:pt-14"
    >
      <img
        src={waveLight}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none select-none dark:hidden"
      />
      <img
        src={waveDark}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none select-none hidden dark:block"
      />

      <div className="relative z-10 pt-2">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-16 pt-4 sm:pt-6">
          <div
            className="rounded-t-[2rem] sm:rounded-t-[3.5rem] lg:rounded-t-[4.5rem]
              border border-b-0 border-white/60 dark:border-white/20
              bg-white/20 dark:bg-white/[0.05] backdrop-blur-md
              px-2 pt-2 pb-0 sm:px-3 sm:pt-3 lg:px-4 lg:pt-4 shadow-2xl"
          >
            <div className="aspect-[2.65/1] overflow-hidden rounded-t-[1.5rem] sm:rounded-t-[2.8rem] lg:rounded-t-[3.8rem] border border-b-0 border-white/30 dark:border-white/10">
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
      </div>
    </section>
  )
}