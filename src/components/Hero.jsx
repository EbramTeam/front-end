// const startGradient = { background: 'linear-gradient(135deg, #00ADF1 0%, #0079E2 100%)' }

// export default function Hero() {
//   return (
//     <>
//       <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 mt-10 sm:mt-16 lg:mt-20 pb-10 text-center flex flex-col items-center">
//         <h1 className="text-[1.65rem] leading-snug sm:text-4xl md:text-5xl lg:text-6xl font-black  sm:leading-tight tracking-tight max-w-4xl">
//           نظّم مشترياتك وتابع طلباتك <br className="hidden sm:block" />
//           واجمع إجراءاتك <span className="text-[#009ef7]">في مكانٍ واحد</span>
//         </h1>

//         <p className="text-[#595959] mt-[25px] ">
//           إبرام منصة موحّدة لتنظيم دورة المشتريات من أولها إلى آخرها بدلًا من المعاملات الورقية
//           والملفات <br />
//           المتفرقة، نجمع مراحل الشراء في مسار واحد واضح يمكن متابعته في أي وقت .
//         </p>
//       </section>

//       <section>
//         <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-4 z-20 relative mb-8 sm:mb-[60px]">
//           <a
//             href="#"
//             className="inline-flex items-center rounded-full
//               px-6 sm:px-8 py-2.5 sm:py-3
//               text-sm sm:text-base font-bold text-gray-900
//               bg-white hover:bg-gray-50
//               shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
//           >
//             تعرف على المنصة
//           </a>

//           <a
//             href="#"
//             className="group inline-flex items-center gap-2 rounded-full
//               px-6 sm:px-8 py-2.5 sm:py-3
//               text-sm sm:text-base font-bold text-white
//               shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
//             style={startGradient}
//           >
//             <svg
//               className="text-[#000000] w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-x-1.5"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2.5"
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m7-7-7 7 7 7"></path>
//             </svg>
//             <span className="text-[#000000]">ابدأ الآن</span>
//           </a>
//         </div>
//       </section>
//     </>
//   )
// }






const startGradient = { background: 'linear-gradient(135deg, #00ADF1 0%, #0079E2 100%)' }

export default function Hero() {
  return (
    <>
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-8 lg:px-16 mt-10 sm:mt-16 lg:mt-14 pb-10 text-center flex flex-col items-center">
        <h1 className="text-[1.65rem] leading-snug sm:text-4xl md:text-5xl lg:text-6xl font-black  sm:leading-tight tracking-tight max-w-4xl">
          نظّم مشترياتك وتابع طلباتك <br className="hidden sm:block" />
          واجمع إجراءاتك <span className="text-[#009ef7]">في مكانٍ واحد</span>
        </h1>

        <p className="text-[#595959] mt-[25px] ">
          إبرام منصة موحّدة لتنظيم دورة المشتريات من أولها إلى آخرها بدلًا من المعاملات الورقية
          والملفات <br />
          المتفرقة، نجمع مراحل الشراء في مسار واحد واضح يمكن متابعته في أي وقت .
        </p>
      </section>

      <section>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-4 sm:px-8 lg:px-16 z-20 relative mb-8 sm:mb-[60px]">
          <a
            href="#"
            className="inline-flex items-center rounded-full
              px-6 sm:px-8 py-2.5 sm:py-3
              text-sm sm:text-base font-bold text-gray-900
              bg-white hover:bg-gray-50
              shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            تعرف على المنصة
          </a>

          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full
              px-6 sm:px-8 py-2.5 sm:py-3
              text-sm sm:text-base font-bold text-white
              shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            style={startGradient}
          >
            <svg
              className="text-[#000000] w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-x-1.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m7-7-7 7 7 7"></path>
            </svg>
            <span className="text-[#000000]">ابدأ الآن</span>
          </a>
        </div>
      </section>
    </>
  )
}             