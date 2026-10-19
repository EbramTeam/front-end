// import { useEffect, useState } from 'react'
// import { ctaBusinessman, logoMark } from '../assets/images'

// export default function CtaBanner() {
//   const [cutoutSrc, setCutoutSrc] = useState(ctaBusinessman)

//   useEffect(() => {
//     const img = new Image()
//     img.src = ctaBusinessman
//     img.onload = () => {
//       try {
//         const canvas = document.createElement('canvas')
//         canvas.width = img.width
//         canvas.height = img.height
//         const ctx = canvas.getContext('2d')
//         ctx.drawImage(img, 0, 0)
//         const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
//         const data = imgData.data

//         for (let i = 0; i < data.length; i += 4) {
//           const r = data[i]
//           const g = data[i + 1]
//           const b = data[i + 2]
//           // إزالة الخلفية البيضاء لدمج صورة رجل الأعمال بسلاسة مع خلفية البانر
//           if (r > 235 && g > 235 && b > 235) {
//             const avg = (r + g + b) / 3
//             if (avg > 248) {
//               data[i + 3] = 0
//             } else {
//               data[i + 3] = Math.round(((248 - avg) / 13) * 255)
//             }
//           }
//         }
//         ctx.putImageData(imgData, 0, 0)
//         setCutoutSrc(canvas.toDataURL('image/png'))
//       } catch (err) {
//         // في حال حدوث أي خطأ، تبقى الصورة الأصلية
//       }
//     }
//   }, [])

//   return (
//     <section dir="rtl" className="relative py-12 lg:py-20 bg-white dark:bg-[#002649] overflow-hidden">
//       <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
//         <div className="relative overflow-hidden rounded-[32px] lg:rounded-[40px] bg-gradient-to-r from-[#00529e] via-[#0074d9] to-[#009ef7] p-8 sm:p-12 lg:p-16 shadow-2xl shadow-blue-500/20">
          
//           {/* زخرفة الفراشة الكريستالية في الخلفية */}
//           <div className="pointer-events-none absolute left-10 -bottom-10 opacity-15 w-96 h-96 select-none">
//             <img src={logoMark} alt="" className="w-full h-full object-contain filter drop-shadow-[0_0_40px_rgba(255,255,255,0.8)]" />
//           </div>

//           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
//             {/* المحتوى النصي على اليمين */}
//             <div className="lg:col-span-7 space-y-6 text-right">
//               <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white leading-tight">
//                 ابدأ بتنظيم مشترياتك مع إبرام
//               </h2>
//               <p className="text-sm sm:text-base lg:text-lg text-blue-100 max-w-xl leading-relaxed">
//                 أنشئ حساب جهتك في دقائق، وابدأ بأول طلب شراء ضمن مسار واضح وموثّق.
//               </p>
//               <div>
//                 <a
//                   href="#contact"
//                   className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-3.5 text-sm sm:text-base font-bold text-[#0066cc] shadow-xl hover:shadow-2xl hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all duration-300"
//                 >
//                   <span>ابدأ الآن</span>
//                   <svg
//                     className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2.5"
//                       d="M19 12H5m7-7-7 7 7 7"
//                     />
//                   </svg>
//                 </a>
//               </div>
//             </div>

//             {/* صورة رجل الأعمال على اليسار */}
//             <div className="lg:col-span-5 flex justify-center lg:justify-start">
//               <div className="relative w-[280px] sm:w-[320px] lg:w-[360px] -mb-8 sm:-mb-12 lg:-mb-16">
//                 <img
//                   src={cutoutSrc}
//                   alt="إبرام - شريكك في تنظيم المشتريات"
//                   className="w-full h-auto object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.35)]"
//                 />
//               </div>
//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }






import { ctaBusinessman, ctaBg } from '../assets/images'

const butterflyMask = {
  WebkitMaskImage:
    'linear-gradient(to left, #000 55%, transparent 100%), linear-gradient(to bottom, #000 55%, transparent 100%)',
  maskImage:
    'linear-gradient(to left, #000 55%, transparent 100%), linear-gradient(to bottom, #000 55%, transparent 100%)',
  WebkitMaskComposite: 'source-in',
  maskComposite: 'intersect',
}

export default function CtaBanner() {
  return (
    <section
      dir="rtl"
      style={{ '--h': 'clamp(150px, 15.4vw, 210px)' }}
      className="relative overflow-hidden bg-white dark:bg-[#002649] pt-16 sm:pt-20 lg:pt-[calc(var(--h)*0.9+40px)] pb-0 transition-colors duration-300"
    >
      {/* الفراشة: أعلى اليمين، تتلاشى من اليسار ومن الأسفل */}
      <img
        src={ctaBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none opacity-60 absolute top-0 right-0 z-0 h-auto w-[150px] sm:w-[200px] lg:w-[16%] lg:min-w-[200px] mix-blend-multiply dark:mix-blend-normal dark:opacity-20"
        style={butterflyMask}
      />

      <div className="relative z-10 mx-auto max-w-[1600px] px-[4%]">
        {/* البطاقة: زوايا علوية فقط، وملتصقة بأسفل السكشن */}
        <div
          className="relative flex flex-col lg:flex-row items-center rounded-t-[24px]  lg:rounded-t-[28px] pt-8 px-6 pb-0 lg:py-0 lg:px-[4%] lg:h-[var(--h)]"
          style={{
            background: 'linear-gradient(180deg, #004784 0%, #007EEA 100%)',
          }}
        >
          {/* النص: يمين */}
          <div className="relative z-10 w-full lg:w-[50%] text-right space-y-2.5 pb-6 lg:pb-0">
            <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-white leading-tight">
              ابدأ بتنظيم مشترياتك مع إبرام
            </h2>
            <p className="max-w-xl text-xs sm:text-sm lg:text-[14px] font-normal leading-relaxed text-white/95">
              أنشئ حساب جهتك في دقائق، وابدأ بأول طلب شراء ضمن مسار واضح وموثّق.
            </p>
            <div className="pt-1.5">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 sm:px-6 py-2 text-xs sm:text-sm font-bold text-black shadow-md transition-all duration-300 hover:bg-gray-100 hover:scale-105 active:scale-95"
              >
                <span>ابدأ الآن</span>
                <svg
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M19 12H5m7-7-7 7 7 7"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* الرجل: يسار، قاعدته على حافة البطاقة وراسه فوقها */}
          <img
            src={ctaBusinessman}
            alt="إبرام - شريكك في تنظيم المشتريات"
            className="pointer-events-none select-none relative z-20 h-[220px] sm:h-[260px] w-auto max-w-none object-contain lg:absolute lg:bottom-0 lg:left-[6%] lg:h-[190%]"
          />
        </div>
      </div>
    </section>
  )
}