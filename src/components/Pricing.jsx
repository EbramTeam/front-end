// import { pricingPlans } from '../data/content'
// import { logoMark } from '../assets/images'

// export default function Pricing() {
//   return (
//     <section id="pricing" dir="rtl" className="relative py-16 sm:py-24 bg-white dark:bg-[#002649] overflow-hidden">
//       <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        
//         {/* عنوان القسم والشارة المحدثة */}
//         <div className="mb-12 text-center lg:mb-16">
//           <div className="mb-3 inline-flex items-center gap-2 select-none">
//             <img src={logoMark} alt="" className="h-5 w-5 sm:h-6 sm:w-6 object-contain" />
//             <span
//               className="text-base sm:text-lg font-bold"
//               style={{
//                 background: 'linear-gradient(90deg, #01b0f5 0%, #007dea 100%)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//               }}
//             >
//               باقات تناسب حجم عملك
//             </span>
//           </div>

//           <h2 className="text-2xl font-black leading-relaxed text-[#01203d] dark:text-white md:text-3xl lg:text-[40px]">
//             اختر ما يناسب احتياجك وابدأ <span className="text-[#009ef7]">بتنظيم مشترياتك</span>
//           </h2>
//         </div>

//         {/* كروت الخطط الثلاث */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-6">
//           {pricingPlans.map((plan) => {
//             const isPro = plan.isPopular

//             return (
//               <div
//                 key={plan.id}
//                 style={
//                   isPro
//                     ? {
//                         background: 'linear-gradient(180deg, #008aff 0%, #005399 100%)',
//                       }
//                     : undefined
//                 }
//                 className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
//                   isPro
//                     ? 'text-white shadow-2xl shadow-blue-500/35 md:-translate-y-4 hover:-translate-y-6'
//                     : 'bg-[#edf6fd] dark:bg-[#0a3560]/60 text-[#01203d] dark:text-white border border-sky-100 dark:border-white/10 hover:-translate-y-2 hover:shadow-xl'
//                 }`}
//               >
//                 {/* شارة الأكثر طلباً على أعلى يسار الكارت كما في الصورة تماماً */}
//                 {plan.badge && (
//                   <div className="absolute -top-3.5 -left-3 sm:-left-4 z-20 bg-[#ffcc00] text-[#000000] text-xs sm:text-sm font-black px-4 py-2 rounded-xl sm:rounded-2xl shadow-lg border border-yellow-300/40 select-none">
//                     {plan.badge}
//                   </div>
//                 )}

//                 <div>
//                   {/* رأس الكارت */}
//                   <div className="mb-4">
//                     <h3
//                       className={`text-xl font-bold ${
//                         isPro ? 'text-white' : 'text-[#008aff] dark:text-[#38bdf8]'
//                       }`}
//                     >
//                       {plan.name}
//                     </h3>
//                     <p
//                       className={`mt-1.5 text-xs sm:text-sm leading-relaxed min-h-[38px] ${
//                         isPro ? 'text-white/90' : 'text-gray-500 dark:text-gray-300'
//                       }`}
//                     >
//                       {plan.subtitle}
//                     </p>
//                   </div>

//                   {/* السعر: علامة الدولار والرقم يميناً وبجانبهما / شهرياً يساراً */}
//                   <div className="mb-6 flex items-baseline justify-end gap-2" dir="ltr">
//                     <span
//                       className={`text-xs sm:text-sm font-medium ${
//                         isPro ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'
//                       }`}
//                     >
//                       / {plan.period}
//                     </span>
//                     <div
//                       className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight flex items-baseline gap-0.5 ${
//                         isPro ? 'text-white' : 'text-[#000000] dark:text-white'
//                       }`}
//                     >
//                       <span className="text-2xl sm:text-3xl lg:text-4xl font-black">$</span>
//                       <span>{plan.price}</span>
//                     </div>
//                   </div>

//                   {/* فاصل */}
//                   <div
//                     className={`my-6 border-t ${
//                       isPro ? 'border-white/20' : 'border-[#d3e9f9] dark:border-white/10'
//                     }`}
//                   />

//                   {/* قائمة المزايا */}
//                   <ul className="space-y-3.5 mb-8">
//                     {plan.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-medium">
//                         <span
//                           className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md ${
//                             isPro
//                               ? 'bg-white text-[#008aff]'
//                               : 'bg-[#008aff] text-white'
//                           }`}
//                         >
//                           <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
//                             <path
//                               fillRule="evenodd"
//                               d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                               clipRule="evenodd"
//                             />
//                           </svg>
//                         </span>
//                         <span className={isPro ? 'text-white' : 'text-gray-700 dark:text-gray-200'}>
//                           {feature}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* زر الإجراء: تدرج لوني ونص #000000 للأطراف، وخلفية #ffffff ونص #000000 للمنتصف */}
//                 <button
//                   type="button"
//                   style={
//                     isPro
//                       ? {
//                           backgroundColor: '#ffffff',
//                           color: '#000000',
//                         }
//                       : {
//                           background: 'linear-gradient(90deg, #01b0f5 0%, #007dea 100%)',
//                           color: '#000000',
//                         }
//                   }
//                   className="w-full py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base shadow-md hover:shadow-lg active:scale-95 transition-all duration-300 cursor-pointer"
//                 >
//                   {plan.ctaText}
//                 </button>
//               </div>
//             )
//           })}
//         </div>

//       </div>
//     </section>
//   )
// }



import { pricingPlans } from '../data/content'
import { logoMark } from '../assets/images'

export default function Pricing() {
  return (
    <section
      id="pricing"
      dir="rtl"
      className="relative overflow-hidden bg-white py-16 dark:bg-[#002649] sm:py-24"
    >
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* عنوان القسم */}
        <div className="mb-12 text-center lg:mb-16">
          <div className="mb-3 inline-flex select-none items-center gap-2">
            <img src={logoMark} alt="" className="h-5 w-5 object-contain sm:h-6 sm:w-6" />
            <span
              className="text-base font-bold sm:text-lg"
              style={{
                background: 'linear-gradient(90deg, #017ae2 0%, #00acf0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              باقات تناسب حجم عملك
            </span>
          </div>

          <h2 className="text-2xl font-black leading-relaxed text-black dark:text-white md:text-3xl lg:text-4xl">
            اختر ما يناسب احتياجك وابدأ بتنظيم مشترياتك
          </h2>
        </div>

        {/* كروت الخطط */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {pricingPlans.map((plan) => {
            const isPro = plan.isPopular

            return (
              <div
                key={plan.id}
                style={
                  isPro
                    ? {
                        background: 'linear-gradient(180deg, #005399 0%, #008aff 100%)',
                        boxShadow: '0 8px 40px rgba(100, 210, 255, 0.55)',
                      }
                    : undefined
                }
                className={`relative flex flex-col justify-between rounded-[20px] p-6 transition-all duration-300 hover:-translate-y-1.5 ${
                  isPro
                    ? 'text-white'
                    : 'bg-[#eef5fe] text-[#01203d] dark:bg-[#0a3560]/60 dark:text-white'
                }`}
              >

                
      {plan.badge && (
  <div className="absolute -left-4 top-2.5 z-30 select-none">
    {/* القطعة الخلفية 46×54: بتبين بس خارج حافة الكارد، وبتتلاشى لتحت */}
    <div
      aria-hidden="true"
      className="absolute left-0 top-1 h-[54px] w-[46px]"
      style={{
        background:
          'linear-gradient(to bottom, #FFD600 75%, rgba(255, 214, 0, 0) 100%)',
        borderRadius: '20px 11px 11px 11px',
        clipPath: 'inset(0 30px 0 0)',
      }}
    />

   
    <div
      className="relative flex h-[42.5px] items-center bg-[#FFD600] px-8 text-base font-[600] leading-none text-[#000000]"
      style={{
        // borderRadius: '20px 999px 999px 20px',
      borderRadius: '20px 20px  20px 0px',
        boxShadow: '0 2px 4px  rgba(0, 0, 0, 0.40)',
     

       
      }}
    >
      {plan.badge}
    </div>
  </div>
)}               
   




                <div>
                  {/* رأس الكارد */}
                  <div className="mb-4">
                    <h3
                      className={`text-lg font-bold ${
                        isPro ? 'text-white' : 'text-[#008aff] dark:text-[#38bdf8]'
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className={`mt-1.5 min-h-[38px] text-xs leading-relaxed sm:text-[13px] ${
                        isPro
                          ? 'font-medium text-white'
                          : 'text-gray-500 dark:text-gray-300'
                      }`}
                    >
                      {plan.subtitle}
                    </p>
                  </div>

                  {/* السعر: $ بنفس حجم الرقم */}
                  <div className="mb-5 flex items-baseline justify-end gap-1.5" dir="ltr">
                    <span
                      className={`text-xs font-medium sm:text-sm ${
                        isPro ? 'text-white/90' : 'text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      / {plan.period}
                    </span>
                    <div
                      className={`flex items-baseline text-4xl font-black leading-none tracking-tight ${
                        isPro ? 'text-white' : 'text-black dark:text-white'
                      }`}
                    >
                      <span>$</span>
                      <span>{plan.price}</span>
                    </div>
                  </div>

                  {/* فاصل */}
                  <div
                    className="my-5 h-px"
                    style={{
                      background: isPro
                        ? 'linear-gradient(90deg, rgba(255,255,255,0.85), rgba(255,255,255,0.1))'
                        : '#dbe7f5',
                    }}
                  />

                  {/* المزايا */}
                  <ul className="mb-7 space-y-3.5">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm font-medium">
                        <span
                          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] ${
                            isPro ? 'bg-white text-[#008aff]' : 'bg-[#008aff] text-white'
                          }`}
                        >
                          <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className={isPro ? 'text-white' : 'text-gray-700 dark:text-gray-200'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* الزر */}
                <button
                  type="button"
                  style={
                    isPro
                      ? { backgroundColor: '#ffffff', color: '#000000' }
                      : {
                          background: 'linear-gradient(90deg, #007dea 0%, #01b0f5 100%)',
                          color: '#000000',
                        }
                  }
                  className="w-full cursor-pointer rounded-full py-2.5 text-sm font-bold transition-all duration-300 hover:shadow-lg active:scale-95"
                >
                  {plan.ctaText}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}