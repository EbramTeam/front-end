// import { useState } from 'react'
// import { contactInfo } from '../data/content'
// import { contactBg, logoMark } from '../assets/images'

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   })
//   const [submitted, setSubmitted] = useState(false)

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setSubmitted(true)
//     setTimeout(() => {
//       setSubmitted(false)
//       setFormData({ name: '', email: '', message: '' })
//     }, 4000)
//   }

//   return (
//     <section
//       id="contact"
//       dir="rtl"
//       className="relative py-16 sm:py-24 overflow-hidden"
//     >
//       {/* خلفية السيكشن الأصلية مع الفراشة والموجات */}
      // <img
      //   src={contactBg}
      //   alt=""
      //   aria-hidden="true"
      //   className="pointer-events-none absolute opacity-80 inset-0 h-full w-full object-cover object-left sm:object-center select-none"
      // />

//       <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
//           {/* الجانب الأيمن (معلومات الاتصال والأيقونات المخصصة) */}
//           <div className="lg:col-span-6 space-y-8 text-right">
//             <div>
//               <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r from-[#017ae2] to-[#00acf0] bg-clip-text text-transparent  lg:text-base">
                
//                  <img src={logoMark} alt="" className="h-10 w-10 object-contain select-none ml-[-10px]" />

//                 <span>تواصل معنا</span>
//                 {/* <img src={logoMark} alt="" className="h-5 w-5 object-contain select-none" /> */}
//               </div>
//               <h2 className="text-2xl font-[700] leading-snug text-[#000000] dark:text-white md:text-3xl lg:text-[37px]">
//                 لا تتردد في مراسلة إبرام في أي وقت
//               </h2>
//             </div>

//             <div className="space-y-6 pt-2">
//               {contactInfo.map((item) => (
//                 <div
//                   key={item.id}
//                   className="group flex items-center gap-4 sm:gap-5 transition-transform duration-300 hover:-translate-x-1"
//                 >
//                   {/* الدائرة الزجاجية ثلاثية الأبعاد الحاضنة للأيقونة */}
//                   <div className="h-20 w-20 sm:h-16 sm:w-16 rounded-full bg-gradient-to-b from-white to-[#d7eeff] shadow-[0_8px_20px_rgba(0,119,221,0.22)] border border-white flex items-center justify-center p-3 shrink-0 backdrop-blur-sm group-hover:scale-105 transition-transform duration-300 overflow-hidden">
//                     <img
//                       src={item.icon}
//                       alt={item.alt || item.title}
//                       className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-300"
//                       style={item.iconScale ? { transform: `scale(${item.iconScale})` } : undefined}
//                     />
//                   </div>

//                   {/* النصوص */}
//                   <div className="text-right">
//                     <h3 className="text-base sm:text-lg font-bold text-[#01203d] dark:text-white">
//                       {item.title}
//                     </h3>
//                     {item.link ? (
//                       <a
//                         href={item.link}
//                         className="text-sm sm:text-base font-semibold text-gray-600 dark:text-gray-300 hover:text-[#009ef7] transition-colors"
//                         dir="ltr"
//                       >
//                         {item.value}
//                       </a>
//                     ) : (
//                       <p className="text-sm sm:text-base font-semibold text-gray-500 dark:text-gray-400">
//                         {item.value}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* الجانب الأيسر (بطاقة النموذج) */}
//           <div className="lg:col-span-6 flex justify-center lg:justify-start">
//             <div className="w-full max-w-xl rounded-[28px] sm:rounded-[36px] bg-white p-7 sm:p-10 shadow-[0_20px_60px_-15px_rgba(0,100,200,0.18)] border border-white/80 dark:bg-[#0a3560]/85 dark:border-white/10 backdrop-blur-md">
              
//               {submitted ? (
//                 <div className="py-12 text-center">
//                   <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
//                     <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 dark:text-white">تم إرسال رسالتك بنجاح!</h3>
//                   <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">سنتواصل معك في أقرب وقت ممكن.</p>
//                 </div>
//               ) : (
              


//                 <form onSubmit={handleSubmit} className="space-y-4  sm:space-y-5 ">
//   <div>
//     <label className="mb-2 block text-xs sm:text-sm font-bold text-[#01203d] dark:text-gray-200">
//       اسمك الكامل
//     </label>
//     <input
//       type="text"
//       required
//       placeholder="ادخل اسمك الكامل"
//       value={formData.name}
//       onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//       className="w-full rounded-full border border-[#2c2c2e] bg-[#eff6ff] px-6 py-3.5 text-right text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#009ef7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#009ef7]/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500"
//     />
//   </div>

//   <div>
//     <label className="mb-2 block text-xs sm:text-sm font-bold text-[#01203d] dark:text-gray-200">
//       البريد الإلكتروني
//     </label>
//     <input
//       type="email"
//       required
//       placeholder="farahherez@gmail.com"
//       value={formData.email}
//       onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//       className="w-full rounded-full border border-[#2c2c2e] bg-[#eff6ff] px-6 py-3.5 text-right text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#009ef7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#009ef7]/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500"
//     />
//   </div>

//   <div>
//     <label className="mb-2 block text-xs sm:text-sm font-bold text-[#01203d] dark:text-gray-200">
//       رسالتك
//     </label>
//     <textarea
//       rows="4"
//       required
//       placeholder="أخبرنا كيف يمكننا مساعدتك؟"
//       value={formData.message}
//       onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//       className="h-36 w-full resize-none rounded-[24px] border border-[#2c2c2e] bg-[#eff6ff] px-6 py-4 text-right text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#009ef7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#009ef7]/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500"
//     ></textarea>
//   </div>

//   <button
//     type="submit"
//     className="w-full cursor-pointer rounded-full bg-linear-to-r from-[#007dea] to-[#01b0f5] py-3.5 text-center text-base font-medium text-black shadow-lg shadow-sky-500/25 transition-all duration-300 hover:from-[#007dcf] hover:to-[#01b0f5] hover:shadow-sky-500/40 active:scale-[0.99] sm:py-4"
//   >
//     إرسال
//   </button>
// </form>
//               )}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }


 




// import { useState } from 'react'
// import { contactInfo } from '../data/content'
// import { contactBg, logoMark } from '../assets/images'

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   })
//   const [submitted, setSubmitted] = useState(false)

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setSubmitted(true)
//     setTimeout(() => {
//       setSubmitted(false)
//       setFormData({ name: '', email: '', message: '' })
//     }, 4000)
//   }

//   return (
//     <section
//       id="contact"
//       dir="rtl"
//       className="relative py-16 sm:py-24 overflow-hidden"
//     >
//       {/* خلفية السيكشن (الفراشة والموجات) - تحت الكرت */}
//       <img
//         src={contactBg}
//         alt=""
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-cover object-left opacity-80 sm:object-center"
//       />

//       <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
//         <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">

//           {/* الجانب الأيمن (معلومات الاتصال) */}
//           <div className="w-full space-y-8 text-right lg:w-[480px] lg:shrink-0">
//             <div>
//               <div className="mb-3 inline-flex items-center gap-2 bg-gradient-to-r from-[#017ae2] to-[#00acf0] bg-clip-text text-sm font-semibold text-transparent lg:text-base">
//                 <img src={logoMark} alt="" className="ml-[-10px] h-10 w-10 select-none object-contain" />
//                 <span>تواصل معنا</span>
//               </div>
//               <h2 className="text-2xl font-[700] leading-snug text-[#000000] dark:text-white md:text-3xl lg:text-[37px]">
//                 لا تتردد في مراسلة إبرام في أي وقت
//               </h2>
//             </div>

//             <div className="space-y-6 pt-2">
//               {contactInfo.map((item) => (
//                 <div
//                   key={item.id}
//                   className="group flex items-center gap-4 transition-transform duration-300 hover:-translate-x-1 sm:gap-5"
//                 >
//                   <div className="flex h-40 w-40 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white bg-gradient-to-b from-white to-[#d7eeff] p-3 shadow-[0_8px_20px_rgba(0,119,221,0.22)] backdrop-blur-sm transition-transform duration-300 group-hover:scale-105 sm:h-16 sm:w-16">
//                     <img
//                       src={item.icon}
//                       alt={item.alt || item.title}
//                       className="h-full w-full object-contain drop-shadow-sm filter transition-transform duration-300"
//                       style={item.iconScale ? { transform: `scale(${item.iconScale})` } : undefined}
//                     />
//                   </div>

//                   <div className="text-right">
//                     <h3 className="text-base font-bold text-[#01203d] dark:text-white sm:text-lg">
//                       {item.title}
//                     </h3>
//                     {item.link ? (
//                       <a
//                         href={item.link}
//                         className="text-sm font-semibold text-gray-600 transition-colors hover:text-[#009ef7] dark:text-gray-300 sm:text-base"
//                         dir="ltr"
//                       >
//                         {item.value}
//                       </a>
//                     ) : (
//                       <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 sm:text-base">
//                         {item.value}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* الجانب الأيسر (بطاقة النموذج) - على أقصى الشمال */}
//           <div className="relative z-10 w-full lg:w-[488px] lg:shrink-0">
//             <div className="w-full rounded-[28px] border border-white/80 bg-white px-6 py-5 shadow-[0_20px_60px_-15px_rgba(0,100,200,0.18)] backdrop-blur-md dark:border-white/10 dark:bg-[#0a3560]/85">

//               {submitted ? (
//                 <div className="py-12 text-center">
//                   <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
//                     <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 dark:text-white">تم إرسال رسالتك بنجاح!</h3>
//                   <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">سنتواصل معك في أقرب وقت ممكن.</p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-2.5">
//                   <div>
//                     <label className="mb-1 block text-[11px] font-bold text-[#01203d] dark:text-gray-200">
//                       اسمك الكامل
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       placeholder="ادخل اسمك الكامل"
//                       value={formData.name}
//                       onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                       className="w-full rounded-full border border-[#2c2c2e] bg-[#eff6ff] px-5 py-2 text-right text-xs text-gray-900 placeholder:text-gray-400 focus:border-[#009ef7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#009ef7]/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500"
//                     />
//                   </div>

//                   <div>
//                     <label className="mb-1 block text-[11px] font-bold text-[#01203d] dark:text-gray-200">
//                       البريد الإلكتروني
//                     </label>
//                     <input
//                       type="email"
//                       required
//                       placeholder="farahherez@gmail.com"
//                       value={formData.email}
//                       onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                       className="w-full rounded-full border border-[#2c2c2e] bg-[#eff6ff] px-5 py-2 text-right text-xs text-gray-900 placeholder:text-gray-400 focus:border-[#009ef7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#009ef7]/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500"
//                     />
//                   </div>

//                   <div>
//                     <label className="mb-1 block text-[11px] font-bold text-[#01203d] dark:text-gray-200">
//                       رسالتك
//                     </label>
//                     <textarea
//                       rows="4"
//                       required
//                       placeholder="أخبرنا كيف يمكننا مساعدتك؟"
//                       value={formData.message}
//                       onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                       className="h-24 w-full resize-none rounded-[20px] border border-[#2c2c2e] bg-[#eff6ff] px-5 py-3 text-right text-xs text-gray-900 placeholder:text-gray-400 focus:border-[#009ef7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#009ef7]/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500"
//                     ></textarea>
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full cursor-pointer rounded-full bg-linear-to-r from-[#007dea] to-[#01b0f5] py-2.5 text-center text-sm font-medium text-black shadow-lg shadow-sky-500/25 transition-all duration-300 hover:from-[#007dcf] hover:to-[#01b0f5] hover:shadow-sky-500/40 active:scale-[0.99]"
//                   >
//                     إرسال
//                   </button>
//                 </form>
//               )}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }





// import { useState } from 'react'
// import { contactInfo } from '../data/content'
// import { contactBg, contactBgdark, logoMark } from '../assets/images'

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   })
//   const [submitted, setSubmitted] = useState(false)

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setSubmitted(true)
//     setTimeout(() => {
//       setSubmitted(false)
//       setFormData({ name: '', email: '', message: '' })
//     }, 4000)
//   }

//   return (
//     <section
//       id="contact"
//       dir="rtl"
//       className="relative py-16 sm:py-24 overflow-hidden"
//     >
//       {/* خلفية السيكشن (الفراشة والموجات) - تحت الكرت */}
//       <img
//         src={contactBg}
//         alt=""
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-cover object-left opacity-100xx   sm:object-center"
//       />

//          <img
//         src={contactBgdark}
//         alt=""
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-cover object-left opacity-100xx   sm:object-center"
//       />

//       <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:mb-[60px] ">
//         <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">

         
//           <div className="w-full space-y-8 text-right lg:w-[480px] lg:shrink-0">
//             <div>
//               <div className="mb-3 inline-flex items-center gap-2 bg-gradient-to-r from-[#017ae2] to-[#00acf0] bg-clip-text text-sm font-semibold text-transparent lg:text-base">
//                 <img src={logoMark} alt="" className="ml-[-10px] h-10 w-10 select-none object-contain" />
//                 <span>تواصل معنا</span>
//               </div>
             

//               <h2 className="whitespace-nowrap text-[clamp(18px,6vw,28px)] font-[700] leading-snug text-[#000000] dark:text-white md:text-3xl lg:text-[37px]">
//            لا تتردد في مراسلة إبرام في أي وقت
//            </h2>

//             </div>

//             <div className="space-y-6 pt-2">
//               {contactInfo.map((item) => (
//                 <div
//                   key={item.id}
//                   className="group flex items-center gap-4 transition-transform duration-300 hover:-translate-x-1 sm:gap-5"
//                 >
//                   <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white bg-gradient-to-b from-white to-[#d7eeff] p-3 shadow-[0_8px_20px_rgba(0,119,221,0.22)] backdrop-blur-sm transition-transform duration-300 group-hover:scale-105 sm:h-16 sm:w-16">
//                     <img
//                       src={item.icon}
//                       alt={item.alt || item.title}
//                       className="h-full w-full object-contain drop-shadow-sm filter transition-transform duration-300"
//                       style={item.iconScale ? { transform: `scale(${item.iconScale})` } : undefined}
//                     />
//                   </div>

//                   <div className="text-right">
//                     <h3 className="text-base font-bold text-[#01203d] dark:text-white sm:text-lg">
//                       {item.title}
//                     </h3>
//                     {item.link ? (
//                       <a
//                         href={item.link}
//                         className="text-sm font-semibold text-gray-600 transition-colors hover:text-[#009ef7] dark:text-gray-300 sm:text-base"
//                         dir="ltr"
//                       >
//                         {item.value}
//                       </a>
//                     ) : (
//                       <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 sm:text-base">
//                         {item.value}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

          
//           <div className="relative z-10 w-full lg:w-[488px] lg:shrink-0">
//             <div className="w-full rounded-[28px] border border-white/80 bg-white px-6 py-6 shadow-[0_20px_60px_-15px_rgba(0,100,200,0.18)] backdrop-blur-md dark:border-white/10 dark:bg-[#0a3560]/85">

//               {submitted ? (
//                 <div className="py-12 text-center">
//                   <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
//                     <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 dark:text-white">تم إرسال رسالتك بنجاح!</h3>
//                   <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">سنتواصل معك في أقرب وقت ممكن.</p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-3.5">
//                   <div>
//                     <label className="mb-1 block text-[11px] font-bold text-[#01203d] dark:text-gray-200">
//                       اسمك الكامل
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       placeholder="ادخل اسمك الكامل"
//                       value={formData.name}
//                       onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                       className="w-full rounded-full border border-[#2c2c2e] bg-[#eff6ff] px-5 py-2 text-right text-xs text-gray-900 placeholder:text-gray-400 focus:border-[#009ef7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#009ef7]/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500"
//                     />
//                   </div>

//                   <div>
//                     <label className="mb-1 block text-[11px] font-bold text-[#01203d] dark:text-gray-200">
//                       البريد الإلكتروني
//                     </label>
//                     <input
//                       type="email"
//                       required
//                       placeholder="farahherez@gmail.com"
//                       value={formData.email}
//                       onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                       className="w-full rounded-full border border-[#2c2c2e] bg-[#eff6ff] px-5 py-2 text-right text-xs text-gray-900 placeholder:text-gray-400 focus:border-[#009ef7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#009ef7]/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500"
//                     />
//                   </div>

//                   <div>
//                     <label className="mb-1 block text-[11px] font-bold text-[#01203d] dark:text-gray-200">
//                       رسالتك
//                     </label>
//                     <textarea
//                       rows="4"
//                       required
//                       placeholder="أخبرنا كيف يمكننا مساعدتك؟"
//                       value={formData.message}
//                       onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                       className="h-32 w-full resize-none rounded-[20px] border border-[#2c2c2e] bg-[#eff6ff] px-5 py-3 text-right text-xs text-gray-900 placeholder:text-gray-400 focus:border-[#009ef7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#009ef7]/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500"
//                     ></textarea>
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full cursor-pointer rounded-full bg-linear-to-r from-[#007dea] to-[#01b0f5] py-2.5 text-center text-sm font-medium text-black shadow-lg shadow-sky-500/25 transition-all duration-300 hover:from-[#007dcf] hover:to-[#01b0f5] hover:shadow-sky-500/40 active:scale-[0.99]"
//                   >
//                     إرسال
//                   </button>
//                 </form>
//               )}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }








// import { useState } from 'react'
// import { contactInfo } from '../data/content'
// import { contactBgdark, logoMark } from '../assets/images'

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   })
//   const [submitted, setSubmitted] = useState(false)

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setSubmitted(true)
//     setTimeout(() => {
//       setSubmitted(false)
//       setFormData({ name: '', email: '', message: '' })
//     }, 4000)
//   }

//   return (
//     <section
//       id="contact"
//       dir="rtl"
//       className="relative py-16 sm:py-24 overflow-hidden"
//     >
//       {/* خلفية السيكشن: نفس صورة الفراشة للوضعين وبنفس الموضع */}
//       <img
//         src={contactBgdark}
//         alt=""
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 z-0 h-[670px] w-[1926px] select-none object-cover object-[left_12%]"
//       />

     

//       <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[52px]">
//         <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">

//           <div className="w-full space-y-8 text-right lg:w-[480px] lg:shrink-0">
//             <div>
//               <div className="mb-3 inline-flex items-center gap-2 bg-gradient-to-r from-[#017ae2] to-[#00acf0] bg-clip-text text-sm font-semibold text-transparent lg:text-base">
//                 <img src={logoMark} alt="" className="ml-[-10px] h-10 w-10 select-none object-contain" />
//                 <span>تواصل معنا</span>
//               </div>

//               <h2 className="whitespace-nowrap text-[clamp(18px,6vw,28px)] font-[700] leading-snug text-[#000000] dark:text-white md:text-3xl lg:text-[37px]">
//                 لا تتردد في مراسلة إبرام في أي وقت
//               </h2>
//             </div>

//             <div className="space-y-6 pt-2 sm:space-y-7">
//               {contactInfo.map((item) => (
//                 <div
//                   key={item.id}
//                   className="group flex items-center gap-4 transition-transform duration-300 hover:-translate-x-1 sm:gap-3"
//                 >
//                   <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white bg-gradient-to-b from-white to-[#d7eeff] p-3 shadow-[0_8px_20px_rgba(0,119,221,0.22)] backdrop-blur-sm transition-transform duration-300 group-hover:scale-105 dark:border-transparent dark:from-[#7b8090] dark:to-[#7b8090] dark:shadow-none sm:h-[53px] sm:w-[53px]">
//                     <img
//                       src={item.icon}
//                       alt={item.alt || item.title}
//                       className="h-full w-full object-contain drop-shadow-sm filter transition-transform duration-300"
//                       style={item.iconScale ? { transform: `scale(${item.iconScale})` } : undefined}
//                     />
//                   </div>

//                   <div className="text-right">
//                     <h3 className="text-base font-bold text-[#01203d] dark:text-white sm:text-lg">
//                       {item.title}
//                     </h3>
//                     {item.link ? (
//                       <a
//                         href={item.link}
//                         className="text-sm font-semibold text-gray-600 transition-colors hover:text-[#009ef7] dark:text-gray-200 sm:text-base"
//                         dir="ltr"
//                       >
//                         {item.value}
//                       </a>
//                     ) : (
//                       <p className="text-sm font-semibold text-gray-500 dark:text-gray-200 sm:text-base">
//                         {item.value}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="relative z-10 w-full lg:-mt-6 lg:w-[551px] lg:shrink-0">
//             <div className="w-full rounded-[28px] border border-white/80 bg-white px-6 py-6 shadow-[0_20px_60px_-15px_rgba(0,100,200,0.18)] backdrop-blur-md dark:border-transparent dark:bg-[#0a3560] dark:px-5 dark:py-[18px]">

//               {submitted ? (
//                 <div className="py-12 text-center">
//                   <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
//                     <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 dark:text-white">تم إرسال رسالتك بنجاح!</h3>
//                   <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">سنتواصل معك في أقرب وقت ممكن.</p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-3.5 dark:space-y-2">
//                   <div>
//                     <label className="mb-1 block text-[11px] font-bold text-[#01203d] dark:text-gray-200">
//                       اسمك الكامل
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       placeholder="ادخل اسمك الكامل"
//                       value={formData.name}
//                       onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                       className="h-9 w-full rounded-full border border-[#2c2c2e] bg-[#eff6ff] px-2.5 py-2 text-right text-xs text-gray-900 placeholder:text-gray-400 focus:border-[#009ef7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#009ef7]/20 dark:border-transparent dark:bg-[#dbe3f0] dark:text-gray-900 dark:placeholder:text-gray-500"
//                     />
//                   </div>

//                   <div>
//                     <label className="mb-1 block text-[11px] font-bold text-[#01203d] dark:text-gray-200">
//                       البريد الإلكتروني
//                     </label>
//                     <input
//                       type="email"
//                       required
//                       placeholder="farahherez@gmail.com"
//                       value={formData.email}
//                       onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                       className="h-9 w-full rounded-full border border-[#2c2c2e] bg-[#eff6ff] px-2.5 py-2 text-right text-xs text-gray-900 placeholder:text-gray-400 focus:border-[#009ef7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#009ef7]/20 dark:border-transparent dark:bg-[#dbe3f0] dark:text-gray-900 dark:placeholder:text-gray-500"
//                     />
//                   </div>

//                   <div className="pb-2 dark:pb-3">
//                     <label className="mb-1 block text-[11px] font-bold text-[#01203d] dark:text-gray-200">
//                       رسالتك
//                     </label>
//                     <textarea
//                       rows="4"
//                       required
//                       placeholder="أخبرنا كيف يمكننا مساعدتك؟"
//                       value={formData.message}
//                       onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                       className="h-32 w-full resize-none rounded-[20px] border border-[#2c2c2e] bg-[#eff6ff] px-2.5 py-3 text-right text-xs text-gray-900 placeholder:text-gray-400 focus:border-[#009ef7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#009ef7]/20 dark:border-transparent dark:bg-[#dbe3f0] dark:text-gray-900 dark:placeholder:text-gray-500"
//                     ></textarea>
//                   </div>

//                   <button
//                     type="submit"
//                     className="h-9 w-full cursor-pointer rounded-full bg-linear-to-r from-[#007dea] to-[#01b0f5] py-0 text-center text-sm font-medium text-black shadow-lg shadow-sky-500/25 transition-all duration-300 hover:from-[#007dcf] hover:to-[#01b0f5] hover:shadow-sky-500/40 active:scale-[0.99] dark:text-white"
//                   >
//                     إرسال
//                   </button>
//                 </form>
//               )}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }






// import { useState } from 'react'
// import { contactInfo } from '../data/content'
// import { contactBgdark,contactBg, logoMark } from '../assets/images'

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   })
//   const [submitted, setSubmitted] = useState(false)

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setSubmitted(true)
//     setTimeout(() => {
//       setSubmitted(false)
//       setFormData({ name: '', email: '', message: '' })
//     }, 4000)
//   }

//   return (
//     <section
//       id="contact"
//       dir="rtl"
//       className="relative py-16 sm:py-24 overflow-hidden"
//     >
//       {/* خلفية السيكشن: نفس صورة الفراشة للوضعين وبنفس الموضع */}

     
      
//       <img
//         src={contactBgdark}
//         alt=""
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 z-0 h-[670px] w-[1926px] select-none object-cover object-[left_12%]"
//       />
 

//       <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[52px]">
//         <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">

//           <div className="w-full space-y-8 text-right lg:w-[480px] lg:shrink-0">
//             <div>
//               <div className="mb-3 inline-flex items-center gap-2 bg-gradient-to-r from-[#017ae2] to-[#00acf0] bg-clip-text text-sm font-semibold text-transparent lg:text-base">
//                 <img src={logoMark} alt="" className="ml-[-10px] h-10 w-10 select-none object-contain" />
//                 <span>تواصل معنا</span>
//               </div>

//               <h2 className="whitespace-nowrap text-[clamp(18px,6vw,28px)] font-[700] leading-snug text-[#000000] dark:text-white md:text-3xl lg:text-[37px]">
//                 لا تتردد في مراسلة إبرام في أي وقت
//               </h2>
//             </div>

//             <div className="space-y-6 pt-2 sm:space-y-7">
//               {contactInfo.map((item) => (
//                 <div
//                   key={item.id}
//                   className="group flex items-center gap-4 transition-transform duration-300 hover:-translate-x-1 sm:gap-3"
//                 >
//                   <div className="flex h-[53px] w-[53px] min-h-[53px] min-w-[53px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-white bg-gradient-to-b from-white to-[#d7eeff] shadow-[0_8px_20px_rgba(0,119,221,0.22)] backdrop-blur-sm transition-transform duration-300 group-hover:scale-105 dark:border-transparent dark:from-[#7b8090] dark:to-[#7b8090] dark:shadow-none">
//                     <img
//                       src={item.icon}
//                       alt={item.alt || item.title}
//                       className="h-[30px] w-[30px] object-contain drop-shadow-sm filter transition-transform duration-300"
//                       style={item.iconScale ? { transform: `scale(${item.iconScale})` } : undefined}
//                     />
//                   </div>

//                   <div className="text-right">
//                     <h3 className="text-base font-bold text-[#01203d] dark:text-white sm:text-lg">
//                       {item.title}
//                     </h3>
//                     {item.link ? (
//                       <a
//                         href={item.link}
//                         className="text-sm font-semibold text-gray-600 transition-colors hover:text-[#009ef7] dark:text-gray-200 sm:text-base"
//                         dir="ltr"
//                       >
//                         {item.value}
//                       </a>
//                     ) : (
//                       <p className="text-sm font-semibold text-gray-500 dark:text-gray-200 sm:text-base">
//                         {item.value}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="relative z-10 w-full lg:-mt-6 lg:w-[551px] lg:shrink-0">
//             <div className="w-full rounded-[28px] border border-white/80 bg-white px-6 py-6 shadow-[0_20px_60px_-15px_rgba(0,100,200,0.18)] backdrop-blur-md dark:border-transparent dark:bg-[#0a3560] dark:px-5 dark:py-[18px]">

//               {submitted ? (
//                 <div className="py-12 text-center">
//                   <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
//                     <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 dark:text-white">تم إرسال رسالتك بنجاح!</h3>
//                   <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">سنتواصل معك في أقرب وقت ممكن.</p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-3.5 dark:space-y-2">
//                   <div>
//                     <label className="mb-1 block text-[11px] font-bold text-[#01203d] dark:text-gray-200">
//                       اسمك الكامل
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       placeholder="ادخل اسمك الكامل"
//                       value={formData.name}
//                       onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                       className="h-9 w-full rounded-full border border-[#2c2c2e] bg-[#eff6ff] px-2.5 py-2 text-right text-xs text-gray-900 placeholder:text-gray-400 focus:border-[#009ef7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#009ef7]/20 dark:border-transparent dark:bg-[#dbe3f0] dark:text-gray-900 dark:placeholder:text-gray-500"
//                     />
//                   </div>

//                   <div>
//                     <label className="mb-1 block text-[11px] font-bold text-[#01203d] dark:text-gray-200">
//                       البريد الإلكتروني
//                     </label>
//                     <input
//                       type="email"
//                       required
//                       placeholder="farahherez@gmail.com"
//                       value={formData.email}
//                       onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                       className="h-9 w-full rounded-full border border-[#2c2c2e] bg-[#eff6ff] px-2.5 py-2 text-right text-xs text-gray-900 placeholder:text-gray-400 focus:border-[#009ef7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#009ef7]/20 dark:border-transparent dark:bg-[#dbe3f0] dark:text-gray-900 dark:placeholder:text-gray-500"
//                     />
//                   </div>

//                   <div className="pb-2 dark:pb-3">
//                     <label className="mb-1 block text-[11px] font-bold text-[#01203d] dark:text-gray-200">
//                       رسالتك
//                     </label>
//                     <textarea
//                       rows="4"
//                       required
//                       placeholder="أخبرنا كيف يمكننا مساعدتك؟"
//                       value={formData.message}
//                       onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                       className="h-32 w-full resize-none rounded-[20px] border border-[#2c2c2e] bg-[#eff6ff] px-2.5 py-3 text-right text-xs text-gray-900 placeholder:text-gray-400 focus:border-[#009ef7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#009ef7]/20 dark:border-transparent dark:bg-[#dbe3f0] dark:text-gray-900 dark:placeholder:text-gray-500"
//                     ></textarea>
//                   </div>

//                   <button
//                     type="submit"
//                     className="h-9 w-full cursor-pointer rounded-full bg-linear-to-r from-[#007dea] to-[#01b0f5] py-0 text-center text-sm font-medium text-black shadow-lg shadow-sky-500/25 transition-all duration-300 hover:from-[#007dcf] hover:to-[#01b0f5] hover:shadow-sky-500/40 active:scale-[0.99] dark:text-white"
//                   >
//                     إرسال
//                   </button>
//                 </form>
//               )}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }






import { useState } from 'react'
import { contactInfo } from '../data/content'
import { contactBgdark,contactBg, logoMark } from '../assets/images'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 4000)
  }

  return (
    <section
      id="contact"
      dir="rtl"
      className="relative py-16 sm:py-24 overflow-hidden"
    >
      {/* خلفية الوضع الفاتح */}
      <img
        src={contactBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-cover object-left sm:object-center dark:hidden"
      />

      {/* خلفية الوضع الداكن */}
      <img
        src={contactBgdark}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 hidden h-[670px] w-[1926px] select-none object-cover object-[left_12%] dark:block"
      />
 

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[52px]">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">

          <div className="w-full space-y-8 text-right lg:w-[480px] lg:shrink-0">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 bg-gradient-to-r from-[#017ae2] to-[#00acf0] bg-clip-text text-sm font-semibold text-transparent lg:text-base">
                <img src={logoMark} alt="" className="ml-[-10px] h-10 w-10 select-none object-contain" />
                <span>تواصل معنا</span>
              </div>

              <h2 className="whitespace-nowrap text-[clamp(18px,6vw,28px)] font-[700] leading-snug text-[#000000] dark:text-white md:text-3xl lg:text-[37px]">
                لا تتردد في مراسلة إبرام في أي وقت
              </h2>
            </div>

            <div className="space-y-6 pt-2 sm:space-y-7">
              {contactInfo.map((item) => (
                <div
                  key={item.id}
                  className="group flex items-center gap-4 transition-transform duration-300 hover:-translate-x-1 sm:gap-3"
                >
                  <div className="flex h-[53px] w-[53px] min-h-[53px] min-w-[53px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-white bg-gradient-to-b from-white to-[#d7eeff] shadow-[0_8px_20px_rgba(0,119,221,0.22)] backdrop-blur-sm transition-transform duration-300 group-hover:scale-105 dark:border-transparent dark:from-[#7b8090] dark:to-[#7b8090] dark:shadow-none">
                    <img
                      src={item.icon}
                      alt={item.alt || item.title}
                      className="h-[30px] w-[30px] object-contain drop-shadow-sm filter transition-transform duration-300"
                      style={item.iconScale ? { transform: `scale(${item.iconScale})` } : undefined}
                    />
                  </div>

                  <div className="text-right">
                    <h3 className="text-base font-bold text-[#01203d] dark:text-white sm:text-lg">
                      {item.title}
                    </h3>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-sm font-semibold text-gray-600 transition-colors hover:text-[#009ef7] dark:text-gray-200 sm:text-base"
                        dir="ltr"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-gray-500 dark:text-gray-200 sm:text-base">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 w-full lg:-mt-6 lg:w-[551px] lg:shrink-0">
            <div className="w-full rounded-[28px] border border-white/80 bg-white px-6 py-6 shadow-[0_20px_60px_-15px_rgba(0,100,200,0.18)] backdrop-blur-md dark:border-transparent dark:bg-[#0a3560] dark:px-5 dark:py-[18px]">

              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">تم إرسال رسالتك بنجاح!</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">سنتواصل معك في أقرب وقت ممكن.</p>
                </div>
              ) : (
                // <form onSubmit={handleSubmit} className="space-y-3.5 dark:space-y-2">
                //   <div>
                //     <label className="mb-1 block text-[11px] font-bold text-[#01203d] dark:text-gray-200">
                //       اسمك الكامل
                //     </label>
                //     <input
                //       type="text"
                //       required
                //       placeholder="ادخل اسمك الكامل"
                //       value={formData.name}
                //       onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                //       className="h-9 w-full rounded-full border border-[#2c2c2e] bg-[#eff6ff] px-2.5 py-2 text-right text-xs text-gray-900 placeholder:text-gray-400 focus:border-[#009ef7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#009ef7]/20 dark:border-transparent dark:bg-[#dbe3f0] dark:text-gray-900 dark:placeholder:text-gray-500"
                //     />
                //   </div>

                //   <div>
                //     <label className="mb-1 block text-[11px] font-bold text-[#01203d] dark:text-gray-200">
                //       البريد الإلكتروني
                //     </label>
                //     <input
                //       type="email"
                //       required
                //       placeholder="farahherez@gmail.com"
                //       value={formData.email}
                //       onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                //       className="h-9 w-full rounded-full border border-[#2c2c2e] bg-[#eff6ff] px-2.5 py-2 text-right text-xs text-gray-900 placeholder:text-gray-400 focus:border-[#009ef7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#009ef7]/20 dark:border-transparent dark:bg-[#dbe3f0] dark:text-gray-900 dark:placeholder:text-gray-500"
                //     />
                //   </div>

                //   <div className="pb-2 dark:pb-3">
                //     <label className="mb-1 block text-[11px] font-bold text-[#01203d] dark:text-gray-200">
                //       رسالتك
                //     </label>
                //     <textarea
                //       rows="4"
                //       required
                //       placeholder="أخبرنا كيف يمكننا مساعدتك؟"
                //       value={formData.message}
                //       onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                //       className="h-32 w-full resize-none rounded-[20px] border border-[#2c2c2e] bg-[#eff6ff] px-2.5 py-3 text-right text-xs text-gray-900 placeholder:text-gray-400 focus:border-[#009ef7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#009ef7]/20 dark:border-transparent dark:bg-[#dbe3f0] dark:text-gray-900 dark:placeholder:text-gray-500"
                //     ></textarea>
                //   </div>

                //   <button
                //     type="submit"
                //     className="h-9 w-full cursor-pointer rounded-full bg-linear-to-r from-[#007dea] to-[#01b0f5] py-0 text-center text-sm font-medium text-black shadow-lg shadow-sky-500/25 transition-all duration-300 hover:from-[#007dcf] hover:to-[#01b0f5] hover:shadow-sky-500/40 active:scale-[0.99] dark:text-white"
                //   >
                //     إرسال
                //   </button>
                // </form>

                <form onSubmit={handleSubmit} className="space-y-4">
  {/* الاسم */}
  <div className="group">
    <label
      htmlFor="contact-name"
      className="mb-1.5 block text-xs font-bold text-[#01203d] transition-colors group-focus-within:text-[#0b7fe0] dark:text-gray-200 dark:group-focus-within:text-[#38bdf8]"
    >
      اسمك الكامل
    </label>
    <div className="relative">
      <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#0b7fe0]/60 transition-colors group-focus-within:text-[#0b7fe0] dark:text-[#38bdf8]/60 dark:group-focus-within:text-[#38bdf8]">
        <svg className="h-4.5 w-4.5  text-[#00acf0]/100 " fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </span>
      <input
        id="contact-name"
        type="text"
        required
        placeholder="ادخل اسمك الكامل"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="h-16 w-full rounded-2xl border border-[#cfe4fa] bg-[#f3f8ff] pr-11 pl-4  text-right text-sm text-[#01203d] shadow-sm transition-all duration-300 placeholder:text-gray-400 hover:border-[#8ac4f5] focus:border-[#0b7fe0] focus:bg-white focus:shadow-[0_0_0_4px_rgba(11,127,224,0.15)] focus:outline-none dark:border-white/10 dark:bg-[#0d2f55] dark:text-white dark:placeholder:text-gray-400 dark:hover:border-[#38bdf8]/50 dark:focus:border-[#38bdf8] dark:focus:bg-[#0f3a69] dark:focus:shadow-[0_0_0_4px_rgba(56,189,248,0.18)]"
      />
    </div>
  </div>

  {/* البريد */}
  <div className="group">
    <label
      htmlFor="contact-email"
      className="mb-1.5 block text-xs font-bold text-[#01203d] transition-colors group-focus-within:text-[#0b7fe0] dark:text-gray-200 dark:group-focus-within:text-[#38bdf8]"
    >
      البريد الإلكتروني
    </label>
    <div className="relative">
      <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center  transition-colors group-focus-within:text-[#0b7fe0] dark:text-[#38bdf8]/60 dark:group-focus-within:text-[#38bdf8]">
        <svg className="h-4.5 w-4.5  text-[#00acf0]/100 " fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>

      
      </span>
      <input
        id="contact-email"
        type="email"
        required
        placeholder="farahherez@gmail.com"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="h-16 w-full rounded-2xl border border-[#cfe4fa] bg-[#f3f8ff] pr-11 pl-4 text-right text-sm text-[#01203d] shadow-sm transition-all duration-300 placeholder:text-gray-400 hover:border-[#8ac4f5] focus:border-[#0b7fe0] focus:bg-white focus:shadow-[0_0_0_4px_rgba(11,127,224,0.15)] focus:outline-none dark:border-white/10 dark:bg-[#0d2f55] dark:text-white dark:placeholder:text-gray-400 dark:hover:border-[#38bdf8]/50 dark:focus:border-[#38bdf8] dark:focus:bg-[#0f3a69] dark:focus:shadow-[0_0_0_4px_rgba(56,189,248,0.18)]"
      />
    </div>
  </div>

  {/* الرسالة */}
  <div className="group">
    <label
      htmlFor="contact-message"
      className="mb-1.5 block text-xs font-bold text-[#01203d] transition-colors group-focus-within:text-[#0b7fe0] dark:text-gray-200 dark:group-focus-within:text-[#38bdf8]"
    >
      رسالتك
    </label>
    <div className="relative">
      <span className="pointer-events-none absolute right-4 top-3.5 text-[#0b7fe0]/60 transition-colors group-focus-within:text-[#0b7fe0] dark:text-[#38bdf8]/60 dark:group-focus-within:text-[#38bdf8]">
        <svg className="h-4.5 w-4.5  text-[#00acf0]/100 " fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h8M8 14h5m-9 6l3-3h11a3 3 0 003-3V7a3 3 0 00-3-3H7a3 3 0 00-3 3v13z" />
        </svg>
   
      </span>
      <textarea
        id="contact-message"
        rows="4"
        required
        placeholder="أخبرنا كيف يمكننا مساعدتك؟"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="h-36 w-full resize-none rounded-2xl border border-[#cfe4fa] bg-[#f3f8ff] py-3 pr-11 pl-4 text-right text-sm text-[#01203d] shadow-sm transition-all duration-300 placeholder:text-gray-400 hover:border-[#8ac4f5] focus:border-[#0b7fe0] focus:bg-white focus:shadow-[0_0_0_4px_rgba(11,127,224,0.15)] focus:outline-none dark:border-white/10 dark:bg-[#0d2f55] dark:text-white dark:placeholder:text-gray-400 dark:hover:border-[#38bdf8]/50 dark:focus:border-[#38bdf8] dark:focus:bg-[#0f3a69] dark:focus:shadow-[0_0_0_4px_rgba(56,189,248,0.18)]"
      ></textarea>
    </div>
  </div>

  {/* الزر */}
  <button
    type="submit"
    className="group/btn flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#007dea] to-[#01b0f5] text-sm font-bold text-white shadow-lg shadow-sky-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sky-500/50 active:translate-y-0 active:scale-[0.99]"
  >
    <span>إرسال</span>
    <svg
      className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-x-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m7-7l-7 7 7 7" />
    </svg>

  </button>
</form>


              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}