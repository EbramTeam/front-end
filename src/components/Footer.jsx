// import { useState } from 'react'
// import { logo, logoMark } from '../assets/images'
// import { footerLinks } from '../data/content'

// export default function Footer() {
//   const [newsletterEmail, setNewsletterEmail] = useState('')
//   const [subscribed, setSubscribed] = useState(false)

//   const handleSubscribe = (e) => {
//     e.preventDefault()
//     if (newsletterEmail.trim()) {
//       setSubscribed(true)
//       setTimeout(() => {
//         setSubscribed(false)
//         setNewsletterEmail('')
//       }, 3500)
//     }
//   }

//   return (
//     <footer dir="rtl" className="bg-[#00172e] text-white pt-16 pb-8 border-t border-sky-950">
//       <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        
//         {/* الأقسام الرئيسية في الفوتر */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
//           {/* العمود 1: الشعار والوصف */}
//           <div className="lg:col-span-4 space-y-4">
//             <div className="flex items-center gap-3">
//               <img
//                 src={logo}
//                 alt="IBRAM"
//                 className="w-36 sm:w-44 h-auto object-contain brightness-0 invert"
//               />
//             </div>
//             <p className="text-sm leading-relaxed text-[#94a3b8] max-w-sm">
//               منصة إبرام لإدارة المشتريات، تأسست لتطوير تجربة المشتريات الرقمية وتسعى لتبسيط الإجراءات وتعزيز الكفاءة والشفافية من خلال حلول ذكية ومتكاملة.
//             </p>
//           </div>

//           {/* العمود 2: روابط سريعة */}
//           <div className="lg:col-span-2 space-y-4">
//             <h4 className="text-base font-bold text-white relative inline-block">
//               روابط سريعة
//             </h4>
//             <ul className="space-y-2.5 text-sm text-[#94a3b8]">
//               {footerLinks.quickLinks.map((link) => (
//                 <li key={link.label}>
//                   <a
//                     href={link.href}
//                     className="flex items-center gap-1.5 transition-colors duration-200 hover:text-[#009ef7]"
//                   >
//                     <span className="text-[#009ef7] font-bold">»</span>
//                     <span>{link.label}</span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* العمود 3: تواصل معنا */}
//           <div className="lg:col-span-3 space-y-4">
//             <h4 className="text-base font-bold text-white relative inline-block">
//               تواصل معنا
//             </h4>
//             <ul className="space-y-3 text-sm text-[#94a3b8]">
//               <li className="flex items-center gap-3">
//                 <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-[#009ef7]">
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                     />
//                   </svg>
//                 </span>
//                 <a
//                   href="mailto:info@ibram.com"
//                   dir="ltr"
//                   className="transition-colors hover:text-[#009ef7]"
//                 >
//                   info@ibram.com
//                 </a>
//               </li>
//               <li className="flex items-center gap-3">
//                 <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-[#009ef7]">
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                   </svg>
//                 </span>
//                 <span>فلسطين - غزة</span>
//               </li>
//             </ul>
//           </div>

//           {/* العمود 4: ابقَ على اطلاع (النشرة الإخبارية) */}
//           <div className="lg:col-span-3 space-y-4">
//             <h4 className="text-base font-bold text-white relative inline-block">
//               ابقَ على اطلاع
//             </h4>
//             <p className="text-sm text-[#94a3b8]">
//               اشترك في نشرتنا الإخبارية ليصلك جديد المنصة أولاً بأول.
//             </p>

//             <form onSubmit={handleSubscribe} className="relative">
//               <div className="relative flex items-center">
//                 <input
//                   type="email"
//                   required
//                   placeholder="أدخل بريدك الإلكتروني..."
//                   value={newsletterEmail}
//                   onChange={(e) => setNewsletterEmail(e.target.value)}
//                   className="w-full rounded-full border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-xs sm:text-sm text-white placeholder:text-gray-400 focus:border-[#009ef7] focus:outline-none focus:ring-1 focus:ring-[#009ef7]"
//                 />
//                 <button
//                   type="submit"
//                   aria-label="اشتراك"
//                   className="absolute left-1.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#009ef7] text-white shadow transition-all hover:bg-[#008be3] hover:scale-105 active:scale-95 cursor-pointer"
//                 >
//                   <svg className="w-4 h-4 -rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
//                     />
//                   </svg>
//                 </button>
//               </div>

//               {subscribed && (
//                 <p className="mt-2 text-xs font-semibold text-green-400">
//                   شكراً لاشتراكك معنا بنجاح!
//                 </p>
//               )}
//             </form>
//           </div>

//         </div>

//         {/* الشريط السفلي (حقوق النشر والروابط السفلية) */}
//         <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#94a3b8]">
          
//           {/* اليمين: حقوق النشر */}
//           <div className="order-2 md:order-1">
//             <p>© جميع الحقوق محفوظة لـ IBRAM 2026</p>
//           </div>

//           {/* اليسار: شبكات التواصل والسياسات والأيقونة الخاصة */}
//           <div className="order-1 md:order-2 flex flex-wrap items-center gap-4 sm:gap-6">
            
//             {/* روابط السياسات */}
//             <div className="flex items-center gap-4 text-xs">
//               <a href="#" className="hover:text-white transition-colors">
//                 سياسة الخصوصية
//               </a>
//               <span className="text-white/20">|</span>
//               <a href="#" className="hover:text-white transition-colors">
//                 شروط الاستخدام
//               </a>
//             </div>

//             {/* أيقونات التواصل الاجتماعي */}
//             <div className="flex items-center gap-3">
//               <a
//                 href="#"
//                 aria-label="LinkedIn"
//                 className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-gray-300 transition-all hover:bg-[#009ef7] hover:text-white"
//               >
//                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                 </svg>
//               </a>
//               <a
//                 href="#"
//                 aria-label="Facebook"
//                 className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-gray-300 transition-all hover:bg-[#009ef7] hover:text-white"
//               >
//                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.69 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z" />
//                 </svg>
//               </a>
//               <a
//                 href="#"
//                 aria-label="X"
//                 className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-gray-300 transition-all hover:bg-[#009ef7] hover:text-white"
//               >
//                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//                 </svg>
//               </a>
//               <a
//                 href="#"
//                 aria-label="RSS"
//                 className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-gray-300 transition-all hover:bg-[#009ef7] hover:text-white"
//               >
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z" />
//                 </svg>
//               </a>
//             </div>

//             {/* أيقونة إمكانية الوصول Accessibility */}
//             <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#009ef7] text-white">
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//               </svg>
//             </div>

//           </div>

//         </div>

//       </div>
//     </footer>
//   )
// }




// import { useState } from 'react'
// import { logo } from '../assets/images'
// import { footerLinks } from '../data/content'

// const strokeProps = {
//   fill: 'none',
//   stroke: 'currentColor',
//   strokeWidth: 2,
//   strokeLinecap: 'round',
//   strokeLinejoin: 'round',
// }

// const ChevronsLeft = () => (
//   <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" {...strokeProps}>
//     <path d="M11 17l-5-5 5-5M18 17l-5-5 5-5" />
//   </svg>
// )

// const ChevronsUp = () => (
//   <svg className="h-4 w-4" viewBox="0 0 24 24" {...strokeProps}>
//     <path d="M17 11l-5-5-5 5M17 18l-5-5-5 5" />
//   </svg>
// )

// const socials = [
//   {
//     label: 'LinkedIn',
//     icon: (
//       <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M4.98 3.5a2.5 2.5 0 11-.001 5.001A2.5 2.5 0 014.98 3.5zM3 9.75h4V21H3zM9.75 9.75h3.83v1.54h.05c.53-1 1.84-2.07 3.78-2.07 4.04 0 4.79 2.66 4.79 6.1V21h-4v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.58V21h-4z" />
//       </svg>
//     ),
//   },
//   {
//     label: 'Facebook',
//     icon: (
//       <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.69 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z" />
//       </svg>
//     ),
//   },
//   {
//     label: 'X',
//     icon: (
//       <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//       </svg>
//     ),
//   },
//   {
//     label: 'Instagram',
//     icon: (
//       <svg className="h-4 w-4" viewBox="0 0 24 24" {...strokeProps}>
//         <rect x="3" y="3" width="18" height="18" rx="5" />
//         <circle cx="12" cy="12" r="4" />
//         <path d="M17.5 6.5h.01" />
//       </svg>
//     ),
//   },
// ]

// export default function Footer() {
//   const [newsletterEmail, setNewsletterEmail] = useState('')
//   const [subscribed, setSubscribed] = useState(false)

//   const handleSubscribe = (e) => {
//     e.preventDefault()
//     if (newsletterEmail.trim()) {
//       setSubscribed(true)
//       setTimeout(() => {
//         setSubscribed(false)
//         setNewsletterEmail('')
//       }, 3500)
//     }
//   }

//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

//   return (
//     <footer dir="rtl" className="bg-[#01203d] text-white">
//       <div className="mx-auto max-w-[1400px] px-4 pb-10 pt-12 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
//           {/* العمود 1: الشعار والوصف */}
//           <div className="space-y-4 lg:col-span-4">
//             <img
//               src={logo}
//               alt="IBRAM"
//               className="h-auto w-32 object-contain sm:w-36"
//             />
//             <p className="max-w-xs text-[13px] font-medium leading-[1.9] text-white sm:text-sm">
//               منصة إبرام لإدارة المشتريات، تأسست لتطوير تجربة المشتريات الرقمية
//               وتسعى لتبسيط الإجراءات وتعزيز الكفاءة والشفافية من خلال حلول ذكية
//               ومتكاملة.
//             </p>
//           </div>

//           {/* العمود 2: روابط سريعة */}
//           <div className="space-y-5 lg:col-span-2">
//             <h4 className="text-base font-semibold text-[#009ef7]">روابط سريعة</h4>
//             <ul className="space-y-3 text-sm text-white">
//               {footerLinks.quickLinks.map((link) => (
//                 <li key={link.label}>
//                   <a
//                     href={link.href}
//                     className="flex items-center gap-2 transition-colors duration-200 hover:text-[#009ef7]"
//                   >
//                     <ChevronsLeft />
//                     <span>{link.label}</span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* العمود 3: تواصل معنا */}
//           <div className="space-y-5 lg:col-span-3">
//             <h4 className="text-base font-semibold text-[#009ef7]">تواصل معنا</h4>
//             <ul className="space-y-3.5 text-sm font-medium text-white">
//               <li className="flex items-center gap-2.5">
//                 <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
//                 </svg>
//                 <a
//                   href="mailto:info@ibram.com"
//                   dir="ltr"
//                   className="transition-colors hover:text-[#009ef7]"
//                 >
//                   info@ibram.com
//                 </a>
//               </li>
//               <li className="flex items-center gap-2.5">
//                 <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
//                 </svg>
//                 <span>فلسطين , غزة</span>
//               </li>
//             </ul>
//           </div>

//           {/* العمود 4: النشرة الإخبارية */}
//           <div className="space-y-5 lg:col-span-3">
//             <h4 className="text-base font-semibold text-[#009ef7]">ابقَ على اطلاع</h4>
//             <p className="text-sm font-bold text-white">
//               اشترك في نشرتنا الاخبارية ..
//             </p>

//             {/* <form onSubmit={handleSubscribe}>
//               <div className="relative flex h-[38px] w-full max-w-[260px] items-center rounded-full bg-gradient-to-r from-[#0066d9] to-[#009ef7] focus-within:ring-2 focus-within:ring-[#009ef7]/50">
//                 <input
//                   type="email"
//                   required
//                   placeholder="ادخل بريدك الالكتروني"
//                   value={newsletterEmail}
//                   onChange={(e) => setNewsletterEmail(e.target.value)}
//                   className="h-full w-[calc(100%-34px)] rounded-full bg-white px-4 text-right text-xs text-gray-700 placeholder:text-gray-500 focus:outline-none"
//                 />
//                 <button
//                   type="submit"
//                   aria-label="اشتراك"
//                   className="absolute left-0 top-0 z-10 flex h-full w-10 cursor-pointer items-center justify-center text-white transition-transform hover:scale-110 active:scale-95"
//                 >
//                   <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
//                   </svg>
//                 </button>
//               </div>

//               {subscribed && (
//                 <p className="mt-2 text-xs font-semibold text-green-400">
//                   شكراً لاشتراكك معنا بنجاح!
//                 </p>
//               )}
//             </form> */}
//             {/* <form onSubmit={handleSubscribe}>
//   <div className="relative flex h-[40px] w-full max-w-[260px] items-center overflow-hidden rounded-full bg-gradient-to-r from-[#0057c2] to-[#1a8cf0] focus-within:ring-2 focus-within:ring-[#009ef7]/50">
//     <button
//       type="submit"
//       aria-label="اشتراك"
//       className="absolute left-2 z-10 flex h-6 w-6 cursor-pointer items-center justify-center transition-transform hover:scale-110 active:scale-95"
//     >
//       <svg className="h-6 w-6" viewBox="0 0 24 24">
//         <circle cx="12" cy="12" r="12" fill="#2AABEE" />
//         <path
//           fill="#ffffff"
//           d="M17.8 7.2l-2.1 10c-.15.7-.55.87-1.1.54l-3-2.2-1.45 1.4c-.16.16-.3.3-.6.3l.2-3.05 5.55-5c.24-.2-.05-.33-.38-.13l-6.85 4.3-2.95-.92c-.64-.2-.65-.64.14-.95l11.5-4.4c.53-.2 1 .13.83.95z"
//         />
//       </svg>
//     </button>

//     <input
//       type="email"
//       required
//       placeholder="ادخل بريدك الالكتروني"
//       value={newsletterEmail}
//       onChange={(e) => setNewsletterEmail(e.target.value)}
//       className="absolute inset-y-0 left-[40px] right-0 h-full rounded-full bg-white px-4 text-right text-xs text-gray-700 placeholder:text-gray-500 focus:outline-none"
//     />
//   </div>

//   {subscribed && (
//     <p className="mt-2 text-xs font-semibold text-green-400">
//       شكراً لاشتراكك معنا بنجاح!
//     </p>
//   )}
// </form> */}

// <form onSubmit={handleSubscribe}>
//   <div className="relative flex h-[40px] w-full max-w-[260px] items-center overflow-hidden rounded-full bg-gradient-to-b from-[#00ACF1] to-[#007AE2] focus-within:ring-2 focus-within:ring-[#00ACF1]/50">
//     <button
//       type="submit"
//       aria-label="اشتراك"
//       className="absolute left-2.5 z-10 flex h-6 w-6 cursor-pointer items-center justify-center text-white transition-transform hover:scale-110 active:scale-95"
//     >
//       <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M17.8 7.2l-2.1 10c-.15.7-.55.87-1.1.54l-3-2.2-1.45 1.4c-.16.16-.3.3-.6.3l.2-3.05 5.55-5c.24-.2-.05-.33-.38-.13l-6.85 4.3-2.95-.92c-.64-.2-.65-.64.14-.95l11.5-4.4c.53-.2 1 .13.83.95z" />
//       </svg>
//     </button>

//     <input
//       type="email"
//       required
//       placeholder="ادخل بريدك الالكتروني"
//       value={newsletterEmail}
//       onChange={(e) => setNewsletterEmail(e.target.value)}
//       className="absolute inset-y-0 left-[40px] right-0 h-full rounded-full bg-white px-4 text-right text-xs text-gray-700 placeholder:text-gray-500 focus:outline-none"
//     />
//   </div>

//   {subscribed && (
//     <p className="mt-2 text-xs font-semibold text-green-400">
//       شكراً لاشتراكك معنا بنجاح!
//     </p>
//   )}
// </form>
//           </div>
//         </div>
//       </div>

//       {/* الشريط السفلي: الخط الفاصل بعرض الصفحة كاملة */}
//       <div className="border-t border-white/10">
//         <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-4 py-4 text-xs sm:px-6 md:flex-row lg:px-8">
//           {/* اليمين: حقوق النشر */}
        
//           <p className="text-white">
//   © جميع الحقوق محفوظة{' '}
//   <span className="inline-block  bg-[#0b57d0] px-1 text-white">IBRAM</span>{' '}
//   <span className="inline-block">2026</span>
// </p>

//           {/* الوسط: السوشيال */}
//           <div className="flex items-center gap-6 text-white">
//             {socials.map((s) => (
//               <a
//                 key={s.label}
//                 href="#"
//                 aria-label={s.label}
//                 className="transition-colors hover:text-[#009ef7]"
//               >
//                 {s.icon}
//               </a>
//             ))}
//           </div>

//           {/* اليسار: السياسات + زر الصعود لفوق */}
//           <div className="flex items-center gap-5">
//             <a href="#" className="text-slate-300 underline underline-offset-2 transition-colors hover:text-white">
//               سياسة الخصوصية
//             </a>
//             <a href="#" className="text-slate-300 underline underline-offset-2 transition-colors hover:text-white">
//               شروط الاستخدام
//             </a>
//             <button
//               type="button"
//               onClick={scrollToTop}
//               aria-label="العودة للأعلى"
//               className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-[#009ef7] text-white shadow transition-all  hover:bg-[#008be3] hover:scale-105 active:scale-95"
//             >
//               <ChevronsUp />
//             </button>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }




import { useEffect, useState } from 'react'
import { logo } from '../assets/images'
import { footerLinks } from '../data/content'

const strokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const ChevronsLeft = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" {...strokeProps}>
    <path d="M11 17l-5-5 5-5M18 17l-5-5 5-5" />
  </svg>
)

const ChevronsUp = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" {...strokeProps}>
    <path d="M17 11l-5-5-5 5M17 18l-5-5-5 5" />
  </svg>
)

const socials = [
  {
    label: 'LinkedIn',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5a2.5 2.5 0 11-.001 5.001A2.5 2.5 0 014.98 3.5zM3 9.75h4V21H3zM9.75 9.75h3.83v1.54h.05c.53-1 1.84-2.07 3.78-2.07 4.04 0 4.79 2.66 4.79 6.1V21h-4v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.58V21h-4z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.69 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z" />
      </svg>
    ),
  },
  {
    label: 'X',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" {...strokeProps}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </svg>
    ),
  },
]

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (newsletterEmail.trim()) {
      setSubscribed(true)
      setTimeout(() => {
        setSubscribed(false)
        setNewsletterEmail('')
      }, 3500)
    }
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer dir="rtl" className="bg-[#01203d] text-white">
      <div className="mx-auto max-w-[1400px] px-4 pb-10 pt-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* العمود 1: الشعار والوصف */}
          <div className="space-y-4 lg:col-span-4">
            <img
              src={logo}
              alt="IBRAM"
              className="h-auto w-32 object-contain sm:w-36 cursor-pointer"
            />
            <p className="max-w-xs text-[13px] font-medium leading-[1.9] text-white sm:text-sm">
              منصة إبرام لإدارة المشتريات، تأسست لتطوير تجربة المشتريات الرقمية
              وتسعى لتبسيط الإجراءات وتعزيز الكفاءة والشفافية من خلال حلول ذكية
              ومتكاملة.
            </p>
          </div>

          {/* العمود 2: روابط سريعة */}
          <div className="space-y-5 lg:col-span-2">
            <h4 className="text-base font-semibold text-[#009ef7]">روابط سريعة</h4>
            <ul className="space-y-3 text-sm text-white">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 transition-colors duration-200 hover:text-[#009ef7]"
                  >
                    <ChevronsLeft />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* العمود 3: تواصل معنا */}
          <div className="space-y-5 lg:col-span-3">
            <h4 className="text-base font-semibold text-[#009ef7]">تواصل معنا</h4>
            <ul className="space-y-3.5 text-sm font-medium text-white">
              <li className="flex items-center gap-2.5">
                <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a
                  href="mailto:info@ibram.com"
                  dir="ltr"
                  className="transition-colors hover:text-[#009ef7]"
                >
                  info@ibram.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span>فلسطين , غزة</span>
              </li>
            </ul>
          </div>

          {/* العمود 4: النشرة الإخبارية */}
          <div className="space-y-5 lg:col-span-3">
            <h4 className="text-base font-semibold text-[#009ef7]">ابقَ على اطلاع</h4>
            <p className="text-sm font-bold text-white">
              اشترك في نشرتنا الاخبارية ..
            </p>

            <form onSubmit={handleSubscribe}>
              <div className="relative flex h-[40px] w-full max-w-[260px] items-center overflow-hidden rounded-full bg-gradient-to-b from-[#00ACF1] to-[#007AE2] focus-within:ring-2 focus-within:ring-[#00ACF1]/50">
                <button
                  type="submit"
                  aria-label="اشتراك"
                  className="absolute left-2.5 z-10 flex h-6 w-6 cursor-pointer items-center justify-center text-white transition-transform hover:scale-110 active:scale-95"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.8 7.2l-2.1 10c-.15.7-.55.87-1.1.54l-3-2.2-1.45 1.4c-.16.16-.3.3-.6.3l.2-3.05 5.55-5c.24-.2-.05-.33-.38-.13l-6.85 4.3-2.95-.92c-.64-.2-.65-.64.14-.95l11.5-4.4c.53-.2 1 .13.83.95z" />
                  </svg>
                </button>

                <input
                  type="email"
                  required
                  placeholder="ادخل بريدك الالكتروني"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="absolute inset-y-0 left-[40px] right-0 h-full rounded-full bg-white px-4 text-right text-xs text-gray-700 placeholder:text-gray-500 focus:outline-none"
                />
              </div>

              {subscribed && (
                <p className="mt-2 text-xs font-semibold text-green-400">
                  شكراً لاشتراكك معنا بنجاح!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* الشريط السفلي: الخط الفاصل بعرض الصفحة كاملة */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-4 py-4 text-xs sm:px-6 md:flex-row lg:px-8">
          {/* اليمين: حقوق النشر */}
          <p className="text-white">
            © جميع الحقوق محفوظة{' '}
            <span className="inline-block bg-[#0b57d0] px-1 text-white">IBRAM</span>{' '}
            <span className="inline-block">2026</span>
          </p>

          {/* الوسط: السوشيال */}
          <div className="flex items-center gap-6 text-white">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="transition-colors hover:text-[#009ef7]"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* اليسار: السياسات */}
          <div className="flex items-center gap-5">
            <a href="#" className="text-slate-300 underline underline-offset-2 transition-colors hover:text-white">
              سياسة الخصوصية
            </a>
            <a href="#" className="text-slate-300 underline underline-offset-2 transition-colors hover:text-white">
              شروط الاستخدام
            </a>
          </div>
        </div>
      </div>

      {/* زر العودة للأعلى: ثابت أسفل اليسار، يظهر عند النزول بالصفحة */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="العودة للأعلى"
        className={`fixed bottom-[52px] left-6 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#009ef7] text-white shadow-lg transition-all duration-300 hover:bg-[#008be3] hover:scale-110 active:scale-95 ${
          showTop
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <ChevronsUp />
      </button>
    </footer>
  )
}