// import { useState, useRef } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { logo, shieldIcon, userKasba } from '../assets/images'
// import LanguageMenu from '../components/LanguageMenu'
// import NotificationMenu from '../components/NotificationMenu'

// /* ==================== SVG Icons ==================== */

// const strokeProps = {
//   viewBox: '0 0 24 24',
//   fill: 'none',
//   stroke: 'currentColor',
//   strokeWidth: 2,
//   strokeLinecap: 'round',
//   strokeLinejoin: 'round',
//   'aria-hidden': true,
// }

// const HomeIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <rect x="3" y="3" width="7" height="7" rx="1.5" />
//     <rect x="14" y="3" width="7" height="7" rx="1.5" />
//     <rect x="14" y="14" width="7" height="7" rx="1.5" />
//     <rect x="3" y="14" width="7" height="7" rx="1.5" />
//   </svg>
// )

// const FileIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
//     <path
//       fillRule="evenodd"
//       clipRule="evenodd"
//       d="M4 4a2 2 0 0 1 2-2h8.586a2 2 0 0 1 1.414.586l4.414 4.414A2 2 0 0 1 21 8.414V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm10.5-.5v5a1 1 0 0 0 1 1h5l-6-6z"
//     />
//   </svg>
// )

// const FilePlusIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
//     <path
//       fillRule="evenodd"
//       clipRule="evenodd"
//       d="M4 4a2 2 0 0 1 2-2h8.586a2 2 0 0 1 1.414.586l4.414 4.414A2 2 0 0 1 21 8.414V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm10.5-.5v5a1 1 0 0 0 1 1h5l-6-6zM12 12a1 1 0 0 1 1 1v1.5h1.5a1 1 0 1 1 0 2H13V18a1 1 0 1 1-2 0v-1.5H9.5a1 1 0 1 1 0-2H11V13a1 1 0 0 1 1-1z"
//     />
//   </svg>
// )

// const SupplierPersonIcon = (props) => (
//   <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
//     <rect x="3" y="0" width="3" height="1" />
//     <rect x="2" y="1" width="5" height="1" />
//     <rect x="2" y="2" width="5" height="1" />
//     <rect x="2" y="3" width="5" height="1" />
//     <rect x="3" y="4" width="3" height="1" />
//     <rect x="2" y="6" width="9" height="1" />
//     <rect x="0" y="7" width="12" height="1" />
//     <rect x="0" y="8" width="8" height="1" />
//     <rect x="13" y="8" width="3" height="1" />
//     <rect x="0" y="9" width="7" height="1" />
//     <rect x="12" y="9" width="5" height="1" />
//     <rect x="0" y="10" width="7" height="1" />
//     <rect x="11" y="10" width="6" height="1" />
//     <rect x="0" y="11" width="7" height="1" />
//     <rect x="11" y="11" width="6" height="1" />
//     <rect x="0" y="12" width="7" height="1" />
//     <rect x="12" y="12" width="5" height="1" />
//     <rect x="0" y="13" width="4" height="1" />
//     <rect x="5" y="13" width="2" height="1" />
//     <rect x="10" y="13" width="9" height="1" />
//     <rect x="2" y="14" width="2" height="1" />
//     <rect x="5" y="14" width="2" height="1" />
//     <rect x="9" y="14" width="5" height="1" />
//     <rect x="15" y="14" width="5" height="1" />
//     <rect x="2" y="15" width="2" height="1" />
//     <rect x="5" y="15" width="2" height="1" />
//     <rect x="8" y="15" width="12" height="1" />
//     <rect x="2" y="16" width="2" height="1" />
//     <rect x="5" y="16" width="2" height="1" />
//     <rect x="8" y="16" width="12" height="1" />
//     <rect x="2" y="17" width="2" height="1" />
//     <rect x="5" y="17" width="2" height="1" />
//     <rect x="9" y="17" width="11" height="1" />
//     <rect x="2" y="18" width="2" height="1" />
//     <rect x="5" y="18" width="2" height="1" />
//     <rect x="10" y="18" width="3" height="1" />
//     <rect x="16" y="18" width="3" height="1" />
//   </svg>
// )

// const SearchIcon = (props) => (
//   <svg {...strokeProps} strokeWidth={1.5} {...props}>
//     <circle cx="11" cy="11" r="7.5" />
//     <path d="m20.5 20.5-4-4" />
//   </svg>
// )

// const CameraIcon = (props) => (
//   <svg
//     viewBox="0 0 14 12"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.1"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     aria-hidden="true"
//     {...props}
//   >
//     <rect x="0.6" y="2.6" width="12.8" height="8.8" rx="1.6" />
//     <path d="M4.4 2.6 5.2 0.7h3.6l0.8 1.9" />
//     <circle cx="7" cy="7" r="2.3" />
//   </svg>
// )

// const LockIcon = (props) => (
//   <svg
//     viewBox="0 0 10 13"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.1"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     aria-hidden="true"
//     {...props}
//   >
//     <path d="M2.6 5.3V3.7a2.4 2.4 0 0 1 4.8 0v1.6" />
//     <rect x="0.6" y="5.3" width="8.8" height="7.1" rx="1" />
//     <path d="M5 7.9v1.9" strokeWidth="1.5" />
//   </svg>
// )

// const LockClockIcon = (props) => (
//   <svg viewBox="0 0 16 18" fill="none" aria-hidden="true" {...props}>
//     <defs>
//       <mask id="lockClockMaskProf">
//         <rect width="16" height="18" fill="white" />
//         <circle cx="11.6" cy="13.4" r="5.6" fill="black" />
//       </mask>
//     </defs>
//     <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" mask="url(#lockClockMaskProf)">
//       <path d="M3.3 6.4V4.3a3.2 3.2 0 0 1 6.4 0v2.1" />
//       <rect x="0.8" y="6.6" width="11.4" height="9.8" rx="1.3" />
//     </g>
//     <circle cx="11.6" cy="13.4" r="4.4" fill="currentColor" />
//     <path
//       d="M11.6 11.1v2.5h2.1"
//       strokeWidth="1.1"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="stroke-white dark:stroke-[#0e2740]"
//     />
//   </svg>
// )

// const ShieldCheckIcon = (props) => (
//   <svg
//     viewBox="0 0 11 14"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.1"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     aria-hidden="true"
//     {...props}
//   >
//     <path d="M5.5 0.8 9.8 2.3v4.2c0 3-2 5.1-4.3 6.5C3.2 11.6 1.2 9.5 1.2 6.5V2.3z" />
//     <path d="M3.5 6.7 5 8.2l2.9-3" />
//   </svg>
// )

// const navItems = [
//   { id: 'home', label: 'الرئيسية', Icon: HomeIcon, path: '/dashboard' },
//   { id: 'my-orders', label: 'طلباتي', Icon: FileIcon, path: '/my-orders' },
//   { id: 'new-order', label: 'طلب شراء جديد', Icon: FilePlusIcon, path: '/new-order' },
//   { id: 'suppliers', label: 'الموردين', Icon: SupplierPersonIcon, path: '/suppliers' },
// ]

// const inputBase =
//   'w-full h-11 px-5 rounded-full bg-[#f4f5f7] dark:bg-[#0f243a] border border-transparent focus:border-[#00A3EF] dark:focus:border-[#00A3EF] text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white outline-none disabled:opacity-90 disabled:cursor-default transition-colors'

// function SidebarContent({ onNavigate }) {
//   const navigate = useNavigate()

//   return (
//     <div className="min-h-full flex flex-col lg:pr-[clamp(16px,2.08vw,40px)]">
//       <div className="pl-4 pr-4 lg:pr-0 pt-[clamp(16px,4.26vh,46px)]">
//         <div className="px-5 2xl:px-6">
//           <Link to="/" onClick={onNavigate} className="inline-block">
//             <img
//               src={logo}
//               alt="IBRAM إبرام للمشتريات"
//               className="h-[clamp(100px,4.6vh,50px)] w-auto object-contain"
//             />
//           </Link>
//           <p className="mt-[clamp(6px,1.1vh,12px)] text-[length:clamp(13px,1.5vh,16px)] text-slate-500 dark:text-slate-400">
//             إبرام للمشتريات
//           </p>
//         </div>

//         <p className="my-[clamp(12px,4.35vh,47px)] px-5 2xl:px-6 text-[length:clamp(13px,1.4vh,15px)] text-slate-500 dark:text-slate-400">
//           القوائم التشغيلية
//         </p>

//         <nav className="space-y-[clamp(4px,0.56vh,6px)]">
//           {navItems.map(({ id, label, Icon, path }) => {
//             const isActive = id === 'suppliers'
//             return (
//               <button
//                 key={id}
//                 onClick={() => {
//                   navigate(path)
//                   onNavigate?.()
//                 }}
//                 className={`w-full h-[clamp(40px,5.74vh,62px)] flex items-center gap-3 px-5 2xl:px-6 rounded-xl text-[length:clamp(15px,1.9vh,20px)] font-bold text-right cursor-pointer transition-all ${
//                   isActive
//                     ? 'bg-[#00A3EF] text-slate-900 shadow-sm'
//                     : 'bg-[#f4f5f7] dark:bg-[#0f243a] text-slate-900 dark:text-slate-200 hover:bg-[#eaecee] dark:hover:bg-[#142e4a]'
//                 }`}
//               >
//                 <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-slate-900' : 'text-slate-800 dark:text-slate-200'}`} />
//                 <span>{label}</span>
//               </button>
//             )
//           })}
//         </nav>
//       </div>

//       <div className="mt-auto pt-[clamp(12px,2vh,24px)]">
//         <div className="flex items-center gap-2 px-6 2xl:px-10 py-[clamp(10px,1.5vh,16px)] bg-[#e9f4fb] dark:bg-[#0e2740] rounded-xl mx-3">
//           <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 flex-shrink-0 animate-pulse" />
//           <div className="flex flex-col gap-1 text-right flex-1">
//             <span className="whitespace-nowrap text-[14px] 2xl:text-[16px] font-bold text-slate-900 dark:text-white">
//               النظام متصل وآمن
//             </span>
//             <span className="text-[12px] 2xl:text-xs text-slate-500 dark:text-slate-400">
//               Sovereign Core v4.2
//             </span>
//           </div>
//           <img src={shieldIcon} alt="shield" className="w-5 h-5 object-contain flex-shrink-0" />
//         </div>

//         <div
//           onClick={() => {
//             navigate('/profile')
//             onNavigate?.()
//           }}
//           className="flex items-center justify-between py-[clamp(10px,1.5vh,16px)] pr-5 2xl:pr-6 pl-5 2xl:pl-[22px] mt-[clamp(0px,3.6vh,39px)] cursor-pointer group hover:bg-slate-50 dark:hover:bg-slate-800/40 rounded-xl transition-colors"
//         >
//           <div className="flex items-center gap-3">
//             <i className="fa-solid fa-circle-user text-[40px] leading-none text-slate-900 dark:text-white shrink-0" />
//             <div className="flex flex-col gap-0.5 text-right">
//               <h4 className="text-[15px] font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
//                 د. محمد كسبة
//               </h4>
//               <p className="text-[12px] text-slate-500 dark:text-slate-400">
//                 مدير النظام العام
//               </p>
//             </div>
//           </div>
//           <i className="fa-solid fa-angle-left text-sm text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default function Profile() {
//   const navigate = useNavigate()
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [searchVal, setSearchVal] = useState('')
//   const fileInputRef = useRef(null)

//   const [avatar, setAvatar] = useState(() => {
//     try {
//       return localStorage.getItem('user_avatar_kasba') || userKasba
//     } catch {
//       return userKasba
//     }
//   })

//   const [formData, setFormData] = useState({
//     fullName: 'د . محمد كسبة',
//     email: 't.almansoor@org.gov.sa',
//     phone: '+972 590 492 8812',
//     internalRole: 'مهندس أنظمة ومسؤول طلبات',
//     department: 'الإدارة العامة لتقنية المعلومات - قسم البنية التحتية',
//     empId: 'EMP-34190',
//     username: 't.almansoor@org.gov.sa',
//     password: '••••••••••••••••',
//   })

//   const handleImageChange = (e) => {
//     const file = e.target.files?.[0]
//     if (file) {
//       const reader = new FileReader()
//       reader.onload = (event) => {
//         const result = event.target?.result
//         if (result) {
//           setAvatar(result)
//           try {
//             localStorage.setItem('user_avatar_kasba', result)
//           } catch {
//             /* التخزين غير متاح */
//           }
//         }
//       }
//       reader.readAsDataURL(file)
//     }
//   }

//   const triggerFileInput = () => {
//     fileInputRef.current?.click()
//   }

//   return (
//     <div
//       dir="rtl"
//       className="min-h-screen bg-[#F4F5F7] dark:bg-[#071322] text-slate-800 dark:text-slate-100 flex flex-row transition-colors duration-200 selection:bg-sky-500 selection:text-white"
//       style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
//     >
//       <input
//         type="file"
//         ref={fileInputRef}
//         onChange={handleImageChange}
//         accept="image/*"
//         className="hidden"
//       />

//       <aside className="hidden lg:block w-[clamp(240px,18.4vw,340px)] shrink-0 bg-white dark:bg-[#0b1b2d] sticky top-0 h-screen overflow-y-auto select-none z-20 border-l border-slate-200/80 dark:border-slate-800/80">
//         <SidebarContent />
//       </aside>

//       {isMobileMenuOpen && (
//         <div className="fixed inset-0 z-50 lg:hidden">
//           <div
//             className="fixed inset-0 bg-black/50 backdrop-blur-sm"
//             onClick={() => setIsMobileMenuOpen(false)}
//           />
//           <aside className="fixed top-0 right-0 bottom-0 w-[280px] bg-white dark:bg-[#0b1b2d] z-10 shadow-2xl overflow-y-auto">
//             <div className="p-4 flex justify-between items-center border-b border-slate-100 dark:border-slate-800">
//               <span className="font-bold text-sm">القائمة</span>
//               <button
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="p-1 rounded text-slate-500 hover:text-slate-800 dark:text-slate-400"
//               >
//                 <i className="fa-solid fa-xmark text-lg" />
//               </button>
//             </div>
//             <SidebarContent onNavigate={() => setIsMobileMenuOpen(false)} />
//           </aside>
//         </div>
//       )}

//       <div className="flex-1 flex flex-col min-w-0">
//         <header className="h-16 bg-white dark:bg-[#0b1b2d] px-4 lg:px-8 flex items-center justify-between gap-4 sticky top-0 z-10 border-b border-slate-200/70 dark:border-slate-800/80">
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => setIsMobileMenuOpen(true)}
//               className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
//               aria-label="القائمة"
//             >
//               <i className="fa-solid fa-bars text-lg" />
//             </button>

//             <nav className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-500 dark:text-slate-400">
//               <Link
//                 to="/dashboard"
//                 className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
//               >
//                 نظام إدارة المشتريات - الأزهر
//               </Link>
//               <i className="fa-solid fa-angle-left text-[10px] text-slate-400" />
//               <span className="font-bold text-slate-900 dark:text-white">
//                 الإدارة الطالبة
//               </span>
//               <i className="fa-solid fa-angle-left text-[10px] text-slate-400" />
//               <span className="text-slate-500 dark:text-slate-400">
//                 الملف الشخصي
//               </span>
//             </nav>
//           </div>

//           <div className="hidden md:flex flex-1 max-w-[340px]">
//             <div className="relative w-full">
//               <input
//                 type="text"
//                 value={searchVal}
//                 onChange={(e) => setSearchVal(e.target.value)}
//                 placeholder="بحث"
//                 className="w-full h-9 bg-[#fbfbfb] dark:bg-[#0f243a] border border-slate-300 dark:border-slate-700 rounded-full pr-10 pl-4 text-xs sm:text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-[#00A3EF]"
//               />
//               <button
//                 type="button"
//                 aria-label="بحث"
//                 className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:text-slate-400"
//               >
//                 <SearchIcon className="w-4 h-4" />
//               </button>
//             </div>
//           </div>

//           <div className="flex items-center gap-3">
//             <NotificationMenu />
//             <span className="hidden sm:block w-px h-5 bg-slate-200 dark:bg-slate-700" />
//             <LanguageMenu />
//           </div>
//         </header>

//         <main className="w-full px-4 sm:px-6 lg:px-8 py-6 lg:py-8 max-w-[1400px]">
//           <div className="text-right mb-6">
//             <h1 className="text-2xl lg:text-[28px] font-black text-slate-900 dark:text-white tracking-tight">
//               الملف الشخصي
//             </h1>
//             <p className="mt-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
//               إدارة بياناتك الشخصية والوظيفية وتفضيلات الإشعارات وإعدادات الأمان الخاصة بحسابك في منصة إبرام
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
//             <div className="lg:col-span-8 bg-white dark:bg-[#0b1b2d] rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-slate-200/80 dark:border-slate-800/80 overflow-hidden flex flex-col lg:min-h-[clamp(560px,62.8vh,760px)]">
//               <div className="bg-[#eef7fc] dark:bg-sky-950/40 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-sky-100/70 dark:border-sky-900/40">
//                 <div className="flex items-center gap-4">
//                   <div className="relative shrink-0">
//                     <img
//                       src={avatar}
//                       alt="د . محمد كسبة"
//                       className="w-20 h-20 rounded-xl object-cover border-2 border-white dark:border-slate-800"
//                     />
//                     <button
//                       type="button"
//                       onClick={triggerFileInput}
//                       className="absolute -bottom-1 -left-1.5 w-7 h-7 rounded-lg bg-[#0f243a] hover:bg-sky-600 text-white flex items-center justify-center transition-transform active:scale-90 cursor-pointer"
//                       title="اضغط لتغيير الصورة الشخصية من جهازك"
//                       aria-label="تغيير الصورة الشخصية"
//                     >
//                       <CameraIcon className="w-[15px] h-[13px]" />
//                     </button>
//                   </div>

//                   <div className="text-right">
//                     <h2 className="text-lg lg:text-xl font-black text-slate-900 dark:text-white">
//                       د . محمد كسبة
//                     </h2>
//                     <p className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-0.5">
//                       مهندس أنظمة ومسؤول طلبات الشراء — تقنية المعلومات
//                     </p>
//                     <button
//                       type="button"
//                       onClick={triggerFileInput}
//                       className="inline-flex items-center gap-1 text-xs font-bold text-[#007DEA] dark:text-[#01B0F5] hover:underline mt-1.5 cursor-pointer"
//                     >
//                       <i className="fa-solid fa-arrow-up-from-bracket text-[11px]" />
//                       <span>تغيير الصورة الشخصية</span>
//                     </button>
//                   </div>
//                 </div>

//                 <button
//                   type="button"
//                   onClick={() => navigate('/edit-profile')}
//                   className="px-4 py-2 rounded-xl bg-white dark:bg-[#0f243a] border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm flex items-center gap-2 cursor-pointer self-end sm:self-center"
//                 >
//                   <i className="fa-solid fa-pen text-[11px]" />
//                   <span>تعديل البيانات</span>
//                 </button>
//               </div>

//               <div className="p-6 sm:p-8 space-y-5 flex-1">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                   <div className="text-right">
//                     <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
//                       الاسم الكامل *
//                     </label>
//                     <input
//                       type="text"
//                       disabled
//                       value={formData.fullName}
//                       className={inputBase}
//                     />
//                   </div>

//                   <div className="text-right">
//                     <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
//                       البريد الإلكتروني المؤسسي *
//                     </label>
//                     <input
//                       type="email"
//                       dir="ltr"
//                       disabled
//                       value={formData.email}
//                       className={`${inputBase} text-right`}
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                   <div className="text-right">
//                     <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
//                       رقم الهاتف الجوال *
//                     </label>
//                     <input
//                       type="text"
//                       dir="ltr"
//                       disabled
//                       value={formData.phone}
//                       className={`${inputBase} text-right`}
//                     />
//                   </div>

//                   <div className="text-right">
//                     <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
//                       المسمى الوظيفي الداخلي *
//                     </label>
//                     <input
//                       type="text"
//                       disabled
//                       value={formData.internalRole}
//                       className={inputBase}
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                   <div className="text-right">
//                     <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
//                       الإدارة / القسم
//                     </label>
//                     <input
//                       type="text"
//                       disabled
//                       value={formData.department}
//                       className={inputBase}
//                     />
//                   </div>

//                   <div className="text-right">
//                     <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
//                       الرقم الوظيفي
//                     </label>
//                     <div className="relative">
//                       <input
//                         type="text"
//                         disabled
//                         value={formData.empId}
//                         className="w-full h-11 pr-5 pl-14 rounded-full bg-[#eef7fc] dark:bg-sky-950/40 border border-transparent text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white outline-none cursor-default"
//                       />
//                       <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[11px] font-bold text-slate-400 dark:text-slate-500">
//                         (ثابت)
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
//                   <div className="text-right">
//                     <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
//                       اسم المستخدم وبريد الدخول
//                     </label>
//                     <div className="relative">
//                       <input
//                         type="text"
//                         dir="ltr"
//                         disabled
//                         value={formData.username}
//                         className="w-full h-11 pr-5 pl-32 rounded-full bg-[#f4f5f7] dark:bg-[#0f243a] border border-transparent text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white text-right outline-none cursor-default"
//                       />
//                       <span className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center px-2 py-0.5 rounded-lg bg-[#eaf8f1] dark:bg-emerald-950/50 text-[#0b7a52] dark:text-emerald-400 text-[11px] font-bold">
//                         مرتبط بالنظام
//                       </span>
//                     </div>
//                     <p className="mt-1.5 text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
//                       <i className="fa-solid fa-circle-info text-amber-500 text-[10px]" />
//                       <span>يتطلب تغيير البريد الإلكتروني المعتمد للدخول مراجعة مسؤول المنظومة.</span>
//                     </p>
//                   </div>

//                   <div className="text-right">
//                     <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
//                       كلمة المرور الحالية
//                     </label>
//                     <input
//                       type="text"
//                       disabled
//                       value={formData.password}
//                       className="w-full h-11 px-5 rounded-full bg-[#f4f5f7] dark:bg-[#0f243a] border border-transparent text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white outline-none cursor-default tracking-widest"
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-[#e9f4fb] dark:bg-[#0e2740] px-6 py-3 border-t border-sky-100/70 dark:border-sky-900/40 flex items-center justify-center gap-2 text-center">
//                 <ShieldCheckIcon className="w-[11px] h-[14px] shrink-0 text-[#0077FF] dark:text-[#01B0F5]" />
//                 <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
//                   يتم تدقيق كافة تعديلات بيانات الاتصال وتوثيقها تلقائياً في سجل الرقابة المالي والإداري
//                 </span>
//               </div>
//             </div>

//             <div className="lg:col-span-4 bg-white dark:bg-[#0b1b2d] rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-slate-200/80 dark:border-slate-800/80 overflow-hidden flex flex-col justify-between lg:min-h-[clamp(560px,62.8vh,760px)]">
//               <div className="p-6">
//                 <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
//                   <h3 className="text-[15px] font-black text-slate-900 dark:text-white">
//                     المعلومات الوظيفية والصلاحيات
//                   </h3>
//                   <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#eaf5fc] dark:bg-sky-950/50 text-[#404946] dark:text-slate-300 text-[11px] font-bold">
//                     <LockIcon className="w-[10px] h-[13px] shrink-0 text-[#404946] dark:text-slate-300" />
//                     <span>للعرض فقط</span>
//                   </div>
//                 </div>

//                 <div className="py-4 space-y-4 text-right">
//                   <div className="pb-3 border-b border-slate-100 dark:border-slate-800">
//                     <p className="text-xs text-slate-400 dark:text-slate-500 mb-1">
//                       المؤسسة / الجهة الحكومية
//                     </p>
//                     <p className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white">
//                       جامعة الأزهر / المنظومة المؤسسية
//                     </p>
//                   </div>

//                   <div className="pb-3 border-b border-slate-100 dark:border-slate-800">
//                     <p className="text-xs text-slate-400 dark:text-slate-500 mb-1">
//                       الإدارة التابع لها
//                     </p>
//                     <p className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
//                       <span className="w-1.5 h-1.5 rounded-full bg-[#0077FF]" />
//                       <span>الإدارة الطالبة (تقنية المعلومات)</span>
//                     </p>
//                   </div>

//                   <div className="pb-3 border-b border-slate-100 dark:border-slate-800">
//                     <p className="text-xs text-slate-400 dark:text-slate-500 mb-1">
//                       المسمى الوظيفي المعتمد
//                     </p>
//                     <p className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white">
//                       مهندس نظم وتطبيقات أول
//                     </p>
//                   </div>

//                   <div className="pb-3 border-b border-slate-100 dark:border-slate-800">
//                     <p className="text-xs text-slate-400 dark:text-slate-500 mb-1.5">
//                       دور المستخدم في المنظومة
//                     </p>
//                     <div className="inline-block px-3 py-1.5 rounded-lg bg-[#eaf5fc] dark:bg-sky-950/50 text-slate-900 dark:text-slate-200 text-xs font-bold">
//                       منشئ طلبات شراء معتمد
//                     </div>
//                   </div>

//                   <div>
//                     <p className="text-xs text-slate-400 dark:text-slate-500 mb-1">
//                       تاريخ إنشاء الحساب وتفعيله
//                     </p>
//                     <p className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
//                       <i className="fa-regular fa-calendar text-slate-400 text-xs" />
//                       <span>1444/03/12 هـ (2022/10/08 م)</span>
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-[#e9f4fb] dark:bg-[#0e2740] p-4 border-t border-sky-100/70 dark:border-sky-900/40 flex items-start gap-2.5">
//                 <LockClockIcon className="w-4 h-[18px] shrink-0 mt-0.5 text-[#0B2A4A] dark:text-slate-200" />
//                 <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed text-right font-medium">
//                   تُدار البيانات الوظيفية والصلاحيات الممنوحة بواسطة مسؤول النظام وإدارة الموارد البشرية وفق مصفوفة الصلاحيات المعتمدة.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }






// import { useState, useRef } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { logo, shieldIcon, userKasba } from '../assets/images'
// import LanguageMenu from '../components/LanguageMenu'
// import NotificationMenu from '../components/NotificationMenu'
 
// /* ==================== SVG Icons ==================== */
 
// const strokeProps = {
//   viewBox: '0 0 24 24',
//   fill: 'none',
//   stroke: 'currentColor',
//   strokeWidth: 2,
//   strokeLinecap: 'round',
//   strokeLinejoin: 'round',
//   'aria-hidden': true,
// }
 
// const HomeIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <rect x="3" y="3" width="7" height="7" rx="1.5" />
//     <rect x="14" y="3" width="7" height="7" rx="1.5" />
//     <rect x="14" y="14" width="7" height="7" rx="1.5" />
//     <rect x="3" y="14" width="7" height="7" rx="1.5" />
//   </svg>
// )
 
// const FileIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
//     <path
//       fillRule="evenodd"
//       clipRule="evenodd"
//       d="M4 4a2 2 0 0 1 2-2h8.586a2 2 0 0 1 1.414.586l4.414 4.414A2 2 0 0 1 21 8.414V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm10.5-.5v5a1 1 0 0 0 1 1h5l-6-6z"
//     />
//   </svg>
// )
 
// const FilePlusIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
//     <path
//       fillRule="evenodd"
//       clipRule="evenodd"
//       d="M4 4a2 2 0 0 1 2-2h8.586a2 2 0 0 1 1.414.586l4.414 4.414A2 2 0 0 1 21 8.414V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm10.5-.5v5a1 1 0 0 0 1 1h5l-6-6zM12 12a1 1 0 0 1 1 1v1.5h1.5a1 1 0 1 1 0 2H13V18a1 1 0 1 1-2 0v-1.5H9.5a1 1 0 1 1 0-2H11V13a1 1 0 0 1 1-1z"
//     />
//   </svg>
// )
 
// const SupplierPersonIcon = (props) => (
//   <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
//     <rect x="3" y="0" width="3" height="1" />
//     <rect x="2" y="1" width="5" height="1" />
//     <rect x="2" y="2" width="5" height="1" />
//     <rect x="2" y="3" width="5" height="1" />
//     <rect x="3" y="4" width="3" height="1" />
//     <rect x="2" y="6" width="9" height="1" />
//     <rect x="0" y="7" width="12" height="1" />
//     <rect x="0" y="8" width="8" height="1" />
//     <rect x="13" y="8" width="3" height="1" />
//     <rect x="0" y="9" width="7" height="1" />
//     <rect x="12" y="9" width="5" height="1" />
//     <rect x="0" y="10" width="7" height="1" />
//     <rect x="11" y="10" width="6" height="1" />
//     <rect x="0" y="11" width="7" height="1" />
//     <rect x="11" y="11" width="6" height="1" />
//     <rect x="0" y="12" width="7" height="1" />
//     <rect x="12" y="12" width="5" height="1" />
//     <rect x="0" y="13" width="4" height="1" />
//     <rect x="5" y="13" width="2" height="1" />
//     <rect x="10" y="13" width="9" height="1" />
//     <rect x="2" y="14" width="2" height="1" />
//     <rect x="5" y="14" width="2" height="1" />
//     <rect x="9" y="14" width="5" height="1" />
//     <rect x="15" y="14" width="5" height="1" />
//     <rect x="2" y="15" width="2" height="1" />
//     <rect x="5" y="15" width="2" height="1" />
//     <rect x="8" y="15" width="12" height="1" />
//     <rect x="2" y="16" width="2" height="1" />
//     <rect x="5" y="16" width="2" height="1" />
//     <rect x="8" y="16" width="12" height="1" />
//     <rect x="2" y="17" width="2" height="1" />
//     <rect x="5" y="17" width="2" height="1" />
//     <rect x="9" y="17" width="11" height="1" />
//     <rect x="2" y="18" width="2" height="1" />
//     <rect x="5" y="18" width="2" height="1" />
//     <rect x="10" y="18" width="3" height="1" />
//     <rect x="16" y="18" width="3" height="1" />
//   </svg>
// )
 
// const SearchIcon = (props) => (
//   <svg {...strokeProps} strokeWidth={1.5} {...props}>
//     <circle cx="11" cy="11" r="7.5" />
//     <path d="m20.5 20.5-4-4" />
//   </svg>
// )
 
// const CameraIcon = (props) => (
//   <svg
//     viewBox="0 0 14 12"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.1"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     aria-hidden="true"
//     {...props}
//   >
//     <rect x="0.6" y="2.6" width="12.8" height="8.8" rx="1.6" />
//     <path d="M4.4 2.6 5.2 0.7h3.6l0.8 1.9" />
//     <circle cx="7" cy="7" r="2.3" />
//   </svg>
// )
 
// const LockIcon = (props) => (
//   <svg
//     viewBox="0 0 10 13"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.1"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     aria-hidden="true"
//     {...props}
//   >
//     <path d="M2.6 5.3V3.7a2.4 2.4 0 0 1 4.8 0v1.6" />
//     <rect x="0.6" y="5.3" width="8.8" height="7.1" rx="1" />
//     <path d="M5 7.9v1.9" strokeWidth="1.5" />
//   </svg>
// )
 
// const LockClockIcon = (props) => (
//   <svg viewBox="0 0 16 18" fill="none" aria-hidden="true" {...props}>
//     <defs>
//       <mask id="lockClockMaskProf">
//         <rect width="16" height="18" fill="white" />
//         <circle cx="11.6" cy="13.4" r="5.6" fill="black" />
//       </mask>
//     </defs>
//     <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" mask="url(#lockClockMaskProf)">
//       <path d="M3.3 6.4V4.3a3.2 3.2 0 0 1 6.4 0v2.1" />
//       <rect x="0.8" y="6.6" width="11.4" height="9.8" rx="1.3" />
//     </g>
//     <circle cx="11.6" cy="13.4" r="4.4" fill="currentColor" />
//     <path
//       d="M11.6 11.1v2.5h2.1"
//       strokeWidth="1.1"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="stroke-white dark:stroke-[#0e2740]"
//     />
//   </svg>
// )
 
// const ShieldCheckIcon = (props) => (
//   <svg
//     viewBox="0 0 11 14"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.1"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     aria-hidden="true"
//     {...props}
//   >
//     <path d="M5.5 0.8 9.8 2.3v4.2c0 3-2 5.1-4.3 6.5C3.2 11.6 1.2 9.5 1.2 6.5V2.3z" />
//     <path d="M3.5 6.7 5 8.2l2.9-3" />
//   </svg>
// )
 
// const navItems = [
//   { id: 'home', label: 'الرئيسية', Icon: HomeIcon, path: '/dashboard' },
//   { id: 'my-orders', label: 'طلباتي', Icon: FileIcon, path: '/my-orders' },
//   { id: 'new-order', label: 'طلب شراء جديد', Icon: FilePlusIcon, path: '/new-order' },
//   { id: 'suppliers', label: 'الموردين', Icon: SupplierPersonIcon, path: '/suppliers' },
// ]
 
// const inputBase =
//   'w-full h-11 px-5 rounded-full bg-[#f4f5f7] dark:bg-[#0f243a] border border-transparent focus:border-[#00A3EF] dark:focus:border-[#00A3EF] text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white outline-none disabled:opacity-90 disabled:cursor-default transition-colors'
 
// function SidebarContent({ onNavigate }) {
//   const navigate = useNavigate()
 
//   return (
//     <div className="min-h-full flex flex-col lg:pr-[clamp(16px,2.08vw,40px)]">
//       <div className="pl-4 pr-4 lg:pr-0 pt-[clamp(16px,4.26vh,46px)]">
//         <div className="px-5 2xl:px-6">
//           <Link to="/" onClick={onNavigate} className="inline-block">
//             <img
//               src={logo}
//               alt="IBRAM إبرام للمشتريات"
//               className="h-[clamp(100px,4.6vh,50px)] w-auto object-contain"
//             />
//           </Link>
//           <p className="mt-[clamp(6px,1.1vh,12px)] text-[length:clamp(13px,1.5vh,16px)] text-slate-500 dark:text-slate-400">
//             إبرام للمشتريات
//           </p>
//         </div>
 
//         <p className="my-[clamp(12px,4.35vh,47px)] px-5 2xl:px-6 text-[length:clamp(13px,1.4vh,15px)] text-slate-500 dark:text-slate-400">
//           القوائم التشغيلية
//         </p>
 
//         <nav className="space-y-[clamp(6px,0.74vh,8px)]">
//           {navItems.map(({ id, label, Icon, path }) => {
//             const isActive = id === 'suppliers'
//             return (
//               <button
//                 key={id}
//                 onClick={() => {
//                   navigate(path)
//                   onNavigate?.()
//                 }}
//                 className={`w-full h-[clamp(40px,5.74vh,62px)] flex items-center gap-3 px-5 2xl:px-6 rounded-xl text-[length:clamp(15px,1.9vh,20px)] font-bold text-right cursor-pointer transition-all ${
//                   isActive
//                     ? 'bg-[#00A3EF] text-slate-900 shadow-sm'
//                     : 'bg-[#f4f5f7] dark:bg-[#0f243a] text-slate-900 dark:text-slate-200 hover:bg-[#eaecee] dark:hover:bg-[#142e4a]'
//                 }`}
//               >
//                 <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-slate-900' : 'text-slate-800 dark:text-slate-200'}`} />
//                 <span>{label}</span>
//               </button>
//             )
//           })}
//         </nav>
//       </div>
 
//       <div className="mt-auto pt-[clamp(12px,2vh,24px)]">
//         {/* بطاقة: النظام متصل وآمن */}
//         <div className="flex items-center gap-2 px-4 xl:px-5 2xl:px-6 py-[clamp(10px,1.5vh,16px)] bg-[#e9f4fb] dark:bg-[#0e2740] rounded-xl">
//           <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 flex-shrink-0 animate-pulse" />
//           <div className="flex flex-col gap-1 text-right flex-1 min-w-0">
//             <span className="whitespace-nowrap text-[13px] xl:text-[14px] 2xl:text-[16px] font-bold text-slate-900 dark:text-white">
//               النظام متصل وآمن
//             </span>
//             <span className="text-[11px] xl:text-[12px] 2xl:text-xs text-slate-500 dark:text-slate-400">
//               Sovereign Core v4.2
//             </span>
//           </div>
//           <img src={shieldIcon} alt="shield" className="w-5 h-5 object-contain flex-shrink-0" />
//         </div>
 
//         <div
//           onClick={() => {
//             navigate('/profile')
//             onNavigate?.()
//           }}
//           className="flex items-center justify-between py-[clamp(10px,1.5vh,16px)] pr-5 2xl:pr-6 pl-5 2xl:pl-[22px] mt-[clamp(0px,3.6vh,39px)] cursor-pointer group hover:bg-slate-50 dark:hover:bg-slate-800/40 rounded-xl transition-colors"
//         >
//           <div className="flex items-center gap-3">
//             <i className="fa-solid fa-circle-user text-[40px] leading-none text-slate-900 dark:text-white shrink-0" />
//             <div className="flex flex-col gap-0.5 text-right">
//               <h4 className="text-[15px] font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
//                 د. محمد كسبة
//               </h4>
//               <p className="text-[12px] text-slate-500 dark:text-slate-400">
//                 مدير النظام العام
//               </p>
//             </div>
//           </div>
//           <i className="fa-solid fa-angle-left text-sm text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" />
//         </div>
//       </div>
//     </div>
//   )
// }
 
// export default function Profile() {
//   const navigate = useNavigate()
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [searchVal, setSearchVal] = useState('')
//   const fileInputRef = useRef(null)
 
//   const [avatar, setAvatar] = useState(() => {
//     try {
//       return localStorage.getItem('user_avatar_kasba') || userKasba
//     } catch {
//       return userKasba
//     }
//   })
 
//   const [formData, setFormData] = useState({
//     fullName: 'د . محمد كسبة',
//     email: 't.almansoor@org.gov.sa',
//     phone: '+972 590 492 8812',
//     internalRole: 'مهندس أنظمة ومسؤول طلبات',
//     department: 'الإدارة العامة لتقنية المعلومات - قسم البنية التحتية',
//     empId: 'EMP-34190',
//     username: 't.almansoor@org.gov.sa',
//     password: '••••••••••••••••',
//   })
 
//   const handleImageChange = (e) => {
//     const file = e.target.files?.[0]
//     if (file) {
//       const reader = new FileReader()
//       reader.onload = (event) => {
//         const result = event.target?.result
//         if (result) {
//           setAvatar(result)
//           try {
//             localStorage.setItem('user_avatar_kasba', result)
//           } catch {
//             /* التخزين غير متاح */
//           }
//         }
//       }
//       reader.readAsDataURL(file)
//     }
//   }
 
//   const triggerFileInput = () => {
//     fileInputRef.current?.click()
//   }
 
//   return (
//     <div
//       dir="rtl"
//       className="min-h-screen bg-[#F4F5F7] dark:bg-[#071322] text-slate-800 dark:text-slate-100 flex flex-row transition-colors duration-200 selection:bg-sky-500 selection:text-white"
//       style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
//     >
//       <input
//         type="file"
//         ref={fileInputRef}
//         onChange={handleImageChange}
//         accept="image/*"
//         className="hidden"
//       />
 
//       <aside className="hidden lg:block w-[clamp(240px,18.4vw,340px)] shrink-0 bg-white dark:bg-[#0b1b2d] sticky top-0 h-screen overflow-y-auto overflow-x-hidden select-none z-20 border-l border-slate-200/80 dark:border-slate-800/80">
//         <SidebarContent />
//       </aside>
 
//       {isMobileMenuOpen && (
//         <div className="fixed inset-0 z-50 lg:hidden">
//           <div
//             className="fixed inset-0 bg-black/50 backdrop-blur-sm"
//             onClick={() => setIsMobileMenuOpen(false)}
//           />
//           <aside className="fixed top-0 right-0 bottom-0 w-[280px] bg-white dark:bg-[#0b1b2d] z-10 shadow-2xl overflow-y-auto overflow-x-hidden">
//             <div className="p-4 flex justify-between items-center border-b border-slate-100 dark:border-slate-800">
//               <span className="font-bold text-sm">القائمة</span>
//               <button
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="p-1 rounded text-slate-500 hover:text-slate-800 dark:text-slate-400"
//               >
//                 <i className="fa-solid fa-xmark text-lg" />
//               </button>
//             </div>
//             <SidebarContent onNavigate={() => setIsMobileMenuOpen(false)} />
//           </aside>
//         </div>
//       )}
 
//       <div className="flex-1 flex flex-col min-w-0">
//         <header className="h-16 bg-white dark:bg-[#0b1b2d] px-4 lg:px-8 flex items-center justify-between gap-4 sticky top-0 z-10 border-b border-slate-200/70 dark:border-slate-800/80">
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => setIsMobileMenuOpen(true)}
//               className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
//               aria-label="القائمة"
//             >
//               <i className="fa-solid fa-bars text-lg" />
//             </button>
 
//             <nav className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-500 dark:text-slate-400">
//               <Link
//                 to="/dashboard"
//                 className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
//               >
//                 نظام إدارة المشتريات - الأزهر
//               </Link>
//               <i className="fa-solid fa-angle-left text-[10px] text-slate-400" />
//               <span className="font-bold text-slate-900 dark:text-white">
//                 الإدارة الطالبة
//               </span>
//               <i className="fa-solid fa-angle-left text-[10px] text-slate-400" />
//               <span className="text-slate-500 dark:text-slate-400">
//                 الملف الشخصي
//               </span>
//             </nav>
//           </div>
 
//           <div className="hidden md:flex flex-1 max-w-[340px]">
//             <div className="relative w-full">
//               <input
//                 type="text"
//                 value={searchVal}
//                 onChange={(e) => setSearchVal(e.target.value)}
//                 placeholder="بحث"
//                 className="w-full h-9 bg-[#fbfbfb] dark:bg-[#0f243a] border border-slate-300 dark:border-slate-700 rounded-full pr-10 pl-4 text-xs sm:text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-[#00A3EF]"
//               />
//               <button
//                 type="button"
//                 aria-label="بحث"
//                 className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:text-slate-400"
//               >
//                 <SearchIcon className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
 
//           <div className="flex items-center gap-3">
//             <NotificationMenu />
//             <span className="hidden sm:block w-px h-5 bg-slate-200 dark:bg-slate-700" />
//             <LanguageMenu />
//           </div>
//         </header>
 
//         <main className="w-full px-4 sm:px-6 lg:px-8 py-6 lg:py-8 max-w-[1400px]">
//           <div className="text-right mb-6">
//             <h1 className="text-2xl lg:text-[28px] font-black text-slate-900 dark:text-white tracking-tight">
//               الملف الشخصي
//             </h1>
//             <p className="mt-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
//               إدارة بياناتك الشخصية والوظيفية وتفضيلات الإشعارات وإعدادات الأمان الخاصة بحسابك في منصة إبرام
//             </p>
//           </div>
 
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
//             <div className="lg:col-span-8 bg-white dark:bg-[#0b1b2d] rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-slate-200/80 dark:border-slate-800/80 overflow-hidden flex flex-col lg:min-h-[clamp(560px,62.8vh,760px)]">
//               <div className="bg-[#eef7fc] dark:bg-sky-950/40 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-sky-100/70 dark:border-sky-900/40">
//                 <div className="flex items-center gap-4">
//                   <div className="relative shrink-0">
//                     <img
//                       src={avatar}
//                       alt="د . محمد كسبة"
//                       className="w-20 h-20 rounded-xl object-cover border-2 border-white dark:border-slate-800"
//                     />
//                     <button
//                       type="button"
//                       onClick={triggerFileInput}
//                       className="absolute -bottom-1 -left-1.5 w-7 h-7 rounded-lg bg-[#0f243a] hover:bg-sky-600 text-white flex items-center justify-center transition-transform active:scale-90 cursor-pointer"
//                       title="اضغط لتغيير الصورة الشخصية من جهازك"
//                       aria-label="تغيير الصورة الشخصية"
//                     >
//                       <CameraIcon className="w-[15px] h-[13px]" />
//                     </button>
//                   </div>
 
//                   <div className="text-right">
//                     <h2 className="text-lg lg:text-xl font-black text-slate-900 dark:text-white">
//                       د . محمد كسبة
//                     </h2>
//                     <p className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-0.5">
//                       مهندس أنظمة ومسؤول طلبات الشراء — تقنية المعلومات
//                     </p>
//                     <button
//                       type="button"
//                       onClick={triggerFileInput}
//                       className="inline-flex items-center gap-1 text-xs font-bold text-[#007DEA] dark:text-[#01B0F5] hover:underline mt-1.5 cursor-pointer"
//                     >
//                       <i className="fa-solid fa-arrow-up-from-bracket text-[11px]" />
//                       <span>تغيير الصورة الشخصية</span>
//                     </button>
//                   </div>
//                 </div>
 
//                 <button
//                   type="button"
//                   onClick={() => navigate('/edit-profile')}
//                   className="px-4 py-2 rounded-xl bg-white dark:bg-[#0f243a] border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm flex items-center gap-2 cursor-pointer self-end sm:self-center"
//                 >
//                   <i className="fa-solid fa-pen text-[11px]" />
//                   <span>تعديل البيانات</span>
//                 </button>
//               </div>
 
//               <div className="p-6 sm:p-8 space-y-5 flex-1">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                   <div className="text-right">
//                     <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
//                       الاسم الكامل *
//                     </label>
//                     <input
//                       type="text"
//                       disabled
//                       value={formData.fullName}
//                       className={inputBase}
//                     />
//                   </div>
 
//                   <div className="text-right">
//                     <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
//                       البريد الإلكتروني المؤسسي *
//                     </label>
//                     <input
//                       type="email"
//                       dir="ltr"
//                       disabled
//                       value={formData.email}
//                       className={`${inputBase} text-right`}
//                     />
//                   </div>
//                 </div>
 
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                   <div className="text-right">
//                     <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
//                       رقم الهاتف الجوال *
//                     </label>
//                     <input
//                       type="text"
//                       dir="ltr"
//                       disabled
//                       value={formData.phone}
//                       className={`${inputBase} text-right`}
//                     />
//                   </div>
 
//                   <div className="text-right">
//                     <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
//                       المسمى الوظيفي الداخلي *
//                     </label>
//                     <input
//                       type="text"
//                       disabled
//                       value={formData.internalRole}
//                       className={inputBase}
//                     />
//                   </div>
//                 </div>
 
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                   <div className="text-right">
//                     <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
//                       الإدارة / القسم
//                     </label>
//                     <input
//                       type="text"
//                       disabled
//                       value={formData.department}
//                       className={inputBase}
//                     />
//                   </div>
 
//                   <div className="text-right">
//                     <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
//                       الرقم الوظيفي
//                     </label>
//                     <div className="relative">
//                       <input
//                         type="text"
//                         disabled
//                         value={formData.empId}
//                         className="w-full h-11 pr-5 pl-14 rounded-full bg-[#eef7fc] dark:bg-sky-950/40 border border-transparent text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white outline-none cursor-default"
//                       />
//                       <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[11px] font-bold text-slate-400 dark:text-slate-500">
//                         (ثابت)
//                       </span>
//                     </div>
//                   </div>
//                 </div>
 
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start pt-[22px]">
//                   <div className="text-right">
//                     <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
//                       اسم المستخدم وبريد الدخول
//                     </label>
//                     <div className="relative">
//                       <input
//                         type="text"
//                         dir="ltr"
//                         disabled
//                         value={formData.username}
//                         className="w-full h-12 pr-5 pl-32 rounded-full bg-[#f4f5f7] dark:bg-[#0f243a] border border-transparent text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white text-right outline-none cursor-default"
//                       />
//                       <span className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center px-2 py-0.5 rounded-lg bg-[#eaf8f1] dark:bg-emerald-950/50 text-[#0b7a52] dark:text-emerald-400 text-[11px] font-bold">
//                         مرتبط بالنظام
//                       </span>
//                     </div>
//                     <p className="mt-1.5 text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
//                       <i className="fa-solid fa-circle-info text-amber-500 text-[10px]" />
//                       <span>يتطلب تغيير البريد الإلكتروني المعتمد للدخول مراجعة مسؤول المنظومة.</span>
//                     </p>
//                   </div>
 
//                   <div className="text-right">
//                     <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
//                       كلمة المرور الحالية
//                     </label>
//                     <input
//                       type="text"
//                       disabled
//                       value={formData.password}
//                       className="w-full h-12 px-5 rounded-full bg-[#f4f5f7] dark:bg-[#0f243a] border border-transparent text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white outline-none cursor-default tracking-widest"
//                     />
//                   </div>
//                 </div>
//               </div>
 
//               <div className="bg-[#e9f4fb] dark:bg-[#0e2740] px-6 py-3 border-t border-sky-100/70 dark:border-sky-900/40 flex items-center justify-center gap-2 text-center">
//                 <ShieldCheckIcon className="w-[11px] h-[14px] shrink-0 text-[#0077FF] dark:text-[#01B0F5]" />
//                 <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
//                   يتم تدقيق كافة تعديلات بيانات الاتصال وتوثيقها تلقائياً في سجل الرقابة المالي والإداري
//                 </span>
//               </div>
//             </div>
 
//             <div className="lg:col-span-4 bg-white dark:bg-[#0b1b2d] rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-slate-200/80 dark:border-slate-800/80 overflow-hidden flex flex-col justify-between lg:min-h-[clamp(560px,62.8vh,760px)]">
//               <div className="p-6">
//                 <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
//                   <h3 className="text-[20px] leading-[1.35] font-black text-slate-900 dark:text-white">
//                     المعلومات الوظيفية والصلاحيات
//                   </h3>
//                   <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#eaf5fc] dark:bg-sky-950/50 text-[#404946] dark:text-slate-300 text-[11px] font-bold shrink-0">
//                     <LockIcon className="w-[10px] h-[13px] shrink-0 text-[#404946] dark:text-slate-300" />
//                     <span>للعرض فقط</span>
//                   </div>
//                 </div>
 
//                 <div className="py-4 space-y-4 text-right">
//                   <div className="pb-3 border-b border-slate-100 dark:border-slate-800">
//                     <p className="text-[13px] text-slate-400 dark:text-slate-500 mb-1">
//                       المؤسسة / الجهة الحكومية
//                     </p>
//                     <p className="text-base font-bold text-slate-900 dark:text-white">
//                       جامعة الأزهر / المنظومة المؤسسية
//                     </p>
//                   </div>
 
//                   <div className="pb-3 border-b border-slate-100 dark:border-slate-800">
//                     <p className="text-[13px] text-slate-400 dark:text-slate-500 mb-1">
//                       الإدارة التابع لها
//                     </p>
//                     <p className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
//                       <span className="w-1.5 h-1.5 rounded-full bg-[#0077FF]" />
//                       <span>الإدارة الطالبة (تقنية المعلومات)</span>
//                     </p>
//                   </div>
 
//                   <div className="pb-3 border-b border-slate-100 dark:border-slate-800">
//                     <p className="text-[13px] text-slate-400 dark:text-slate-500 mb-1">
//                       المسمى الوظيفي المعتمد
//                     </p>
//                     <p className="text-base font-bold text-slate-900 dark:text-white">
//                       مهندس نظم وتطبيقات أول
//                     </p>
//                   </div>
 
//                   <div className="pb-3 border-b border-slate-100 dark:border-slate-800">
//                     <p className="text-[13px] text-slate-400 dark:text-slate-500 mb-1">
//                       دور المستخدم في المنظومة
//                     </p>
//                     <div className="inline-block px-3 py-1.5 rounded-lg bg-[#eaf5fc] dark:bg-sky-950/50 text-slate-900 dark:text-slate-200 text-[13px] font-bold">
//                       منشئ طلبات شراء معتمد
//                     </div>
//                   </div>
 
//                   <div>
//                     <p className="text-[13px] text-slate-400 dark:text-slate-500 mb-1">
//                       تاريخ إنشاء الحساب وتفعيله
//                     </p>
//                     <p className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
//                       <i className="fa-regular fa-calendar text-slate-400 text-xs" />
//                       <span>1444/03/12 هـ (2022/10/08 م)</span>
//                     </p>
//                   </div>
//                 </div>
//               </div>
 
//               <div className="bg-[#e9f4fb] dark:bg-[#0e2740] p-4 border-t border-sky-100/70 dark:border-sky-900/40 flex items-start gap-2.5">
//                 <LockClockIcon className="w-4 h-[18px] shrink-0 mt-0.5 text-[#0B2A4A] dark:text-slate-200" />
//                 <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed text-right font-medium">
//                   تُدار البيانات الوظيفية والصلاحيات الممنوحة بواسطة مسؤول النظام وإدارة الموارد البشرية وفق مصفوفة الصلاحيات المعتمدة.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }



// zXZXZX





import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logo, shieldIcon, userKasba } from '../assets/images'
import LanguageMenu from '../components/LanguageMenu'
import NotificationMenu from '../components/NotificationMenu'
 
/* ==================== SVG Icons ==================== */
 
const strokeProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}
 
const HomeIcon = (props) => (
  <svg {...strokeProps} {...props}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
  </svg>
)
 
const FileIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 4a2 2 0 0 1 2-2h8.586a2 2 0 0 1 1.414.586l4.414 4.414A2 2 0 0 1 21 8.414V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm10.5-.5v5a1 1 0 0 0 1 1h5l-6-6z"
    />
  </svg>
)
 
const FilePlusIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 4a2 2 0 0 1 2-2h8.586a2 2 0 0 1 1.414.586l4.414 4.414A2 2 0 0 1 21 8.414V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm10.5-.5v5a1 1 0 0 0 1 1h5l-6-6zM12 12a1 1 0 0 1 1 1v1.5h1.5a1 1 0 1 1 0 2H13V18a1 1 0 1 1-2 0v-1.5H9.5a1 1 0 1 1 0-2H11V13a1 1 0 0 1 1-1z"
    />
  </svg>
)
 
const SupplierPersonIcon = (props) => (
  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
    <rect x="3" y="0" width="3" height="1" />
    <rect x="2" y="1" width="5" height="1" />
    <rect x="2" y="2" width="5" height="1" />
    <rect x="2" y="3" width="5" height="1" />
    <rect x="3" y="4" width="3" height="1" />
    <rect x="2" y="6" width="9" height="1" />
    <rect x="0" y="7" width="12" height="1" />
    <rect x="0" y="8" width="8" height="1" />
    <rect x="13" y="8" width="3" height="1" />
    <rect x="0" y="9" width="7" height="1" />
    <rect x="12" y="9" width="5" height="1" />
    <rect x="0" y="10" width="7" height="1" />
    <rect x="11" y="10" width="6" height="1" />
    <rect x="0" y="11" width="7" height="1" />
    <rect x="11" y="11" width="6" height="1" />
    <rect x="0" y="12" width="7" height="1" />
    <rect x="12" y="12" width="5" height="1" />
    <rect x="0" y="13" width="4" height="1" />
    <rect x="5" y="13" width="2" height="1" />
    <rect x="10" y="13" width="9" height="1" />
    <rect x="2" y="14" width="2" height="1" />
    <rect x="5" y="14" width="2" height="1" />
    <rect x="9" y="14" width="5" height="1" />
    <rect x="15" y="14" width="5" height="1" />
    <rect x="2" y="15" width="2" height="1" />
    <rect x="5" y="15" width="2" height="1" />
    <rect x="8" y="15" width="12" height="1" />
    <rect x="2" y="16" width="2" height="1" />
    <rect x="5" y="16" width="2" height="1" />
    <rect x="8" y="16" width="12" height="1" />
    <rect x="2" y="17" width="2" height="1" />
    <rect x="5" y="17" width="2" height="1" />
    <rect x="9" y="17" width="11" height="1" />
    <rect x="2" y="18" width="2" height="1" />
    <rect x="5" y="18" width="2" height="1" />
    <rect x="10" y="18" width="3" height="1" />
    <rect x="16" y="18" width="3" height="1" />
  </svg>
)
 
const SearchIcon = (props) => (
  <svg {...strokeProps} strokeWidth={1.5} {...props}>
    <circle cx="11" cy="11" r="7.5" />
    <path d="m20.5 20.5-4-4" />
  </svg>
)
 
const CameraIcon = (props) => (
  <svg
    viewBox="0 0 14 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.1"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <rect x="0.6" y="2.6" width="12.8" height="8.8" rx="1.6" />
    <path d="M4.4 2.6 5.2 0.7h3.6l0.8 1.9" />
    <circle cx="7" cy="7" r="2.3" />
  </svg>
)
 
const LockIcon = (props) => (
  <svg
    viewBox="0 0 10 13"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.1"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M2.6 5.3V3.7a2.4 2.4 0 0 1 4.8 0v1.6" />
    <rect x="0.6" y="5.3" width="8.8" height="7.1" rx="1" />
    <path d="M5 7.9v1.9" strokeWidth="1.5" />
  </svg>
)
 
const LockClockIcon = (props) => (
  <svg viewBox="0 0 16 18" fill="none" aria-hidden="true" {...props}>
    <defs>
      <mask id="lockClockMaskProf">
        <rect width="16" height="18" fill="white" />
        <circle cx="11.6" cy="13.4" r="5.6" fill="black" />
      </mask>
    </defs>
    <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" mask="url(#lockClockMaskProf)">
      <path d="M3.3 6.4V4.3a3.2 3.2 0 0 1 6.4 0v2.1" />
      <rect x="0.8" y="6.6" width="11.4" height="9.8" rx="1.3" />
    </g>
    <circle cx="11.6" cy="13.4" r="4.4" fill="currentColor" />
    <path
      d="M11.6 11.1v2.5h2.1"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-white dark:stroke-[#0e2740]"
    />
  </svg>
)
 
const ShieldCheckIcon = (props) => (
  <svg
    viewBox="0 0 11 14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.1"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M5.5 0.8 9.8 2.3v4.2c0 3-2 5.1-4.3 6.5C3.2 11.6 1.2 9.5 1.2 6.5V2.3z" />
    <path d="M3.5 6.7 5 8.2l2.9-3" />
  </svg>
)
 
const navItems = [
  { id: 'home', label: 'الرئيسية', Icon: HomeIcon, path: '/dashboard' },
  { id: 'my-orders', label: 'طلباتي', Icon: FileIcon, path: '/my-orders' },
  { id: 'new-order', label: 'طلب شراء جديد', Icon: FilePlusIcon, path: '/new-order' },
  { id: 'suppliers', label: 'الموردين', Icon: SupplierPersonIcon, path: '/suppliers' },
]
 
/* حقول البيانات الأساسية: ارتفاع 48px، نص رمادي صغير بخط متوسط */
const inputBase =
  'w-full h-12 px-4 rounded-full bg-[#f4f5f7] dark:bg-[#0f243a] border border-transparent focus:border-[#00A3EF] dark:focus:border-[#00A3EF] text-xs font-medium text-slate-500 dark:text-slate-400 outline-none disabled:opacity-90 disabled:cursor-default transition-colors'
 
function SidebarContent({ onNavigate }) {
  const navigate = useNavigate()
 
  return (
    <div className="min-h-full flex flex-col lg:pr-[clamp(16px,2.08vw,40px)]">
      <div className="pl-4 pr-4 lg:pr-0 pt-[clamp(16px,4.26vh,46px)]">
        <div className="px-5 2xl:px-6">
          <Link to="/" onClick={onNavigate} className="inline-block">
            {/* تصحيح: كانت clamp(100px,4.6vh,50px) فيصير الحد الأدنى أكبر من الأعلى والشعار يطلع 100px */}
            <img
              src={logo}
              alt="IBRAM إبرام للمشتريات"
              className="h-[clamp(100px,4.6vh,50px)] w-auto object-contain"
            />
          </Link>
          <p className="mt-[clamp(6px,1.1vh,12px)] text-[length:clamp(13px,1.5vh,16px)] text-slate-500 dark:text-slate-400">
            إبرام للمشتريات
          </p>
        </div>
 
        <p className="my-[clamp(12px,4.35vh,47px)] px-5 2xl:px-6 text-[length:clamp(13px,1.4vh,15px)] text-slate-500 dark:text-slate-400">
          القوائم التشغيلية
        </p>
 
        <nav className="space-y-[clamp(6px,0.74vh,8px)]">
          {navItems.map(({ id, label, Icon, path }) => {
            const isActive = id === 'suppliers'
            return (
              <button
                key={id}
                onClick={() => {
                  navigate(path)
                  onNavigate?.()
                }}
                className={`w-full h-[clamp(40px,5.74vh,62px)] flex items-center gap-3 px-5 2xl:px-6 rounded-xl text-[length:clamp(15px,1.9vh,20px)] font-bold text-right cursor-pointer transition-all ${
                  isActive
                    ? 'bg-[#00A3EF] text-slate-900 shadow-sm'
                    : 'bg-[#f4f5f7] dark:bg-[#0f243a] text-slate-900 dark:text-slate-200 hover:bg-[#eaecee] dark:hover:bg-[#142e4a]'
                }`}
              >
                <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-slate-900' : 'text-slate-800 dark:text-slate-200'}`} />
                <span>{label}</span>
              </button>
            )
          })}
        </nav>
      </div>
 
      <div className="mt-auto pt-[clamp(12px,2vh,24px)]">
        {/* بطاقة: النظام متصل وآمن */}
        <div className="flex items-center gap-2 px-[clamp(16px,2.08vw,40px)] py-[clamp(10px,1.5vh,16px)] bg-[#e9f4fb] dark:bg-[#0e2740] rounded-xl">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-800 flex-shrink-0" />
          <div className="flex flex-col gap-1.5 text-right flex-1 min-w-0">
            <span className="whitespace-nowrap text-[length:clamp(14px,1.67vh,18px)] font-bold text-slate-900 dark:text-white">
              النظام متصل وآمن
            </span>
            <span className="text-[length:clamp(11px,1.2vh,13px)] text-slate-500 dark:text-slate-400">
              Sovereign Core v4.2
            </span>
          </div>
          <img src={shieldIcon} alt="shield" className="w-5 h-5 object-contain flex-shrink-0" />
        </div>
 
        <div
          onClick={() => {
            navigate('/profile')
            onNavigate?.()
          }}
          className="flex items-center justify-between py-[clamp(10px,1.5vh,16px)] pr-5 2xl:pr-6 pl-5 2xl:pl-6 mt-[clamp(0px,3.6vh,39px)] cursor-pointer group hover:bg-slate-50 dark:hover:bg-slate-800/40 rounded-xl transition-colors"
        >
          <div className="flex items-center gap-6">
            <i className="fa-solid fa-circle-user text-[24px] leading-none text-slate-900 dark:text-white shrink-0" />
            <div className="flex flex-col gap-1.5 text-right">
              <h4 className="text-[length:clamp(14px,1.67vh,18px)] font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                د. محمد كسبة
              </h4>
              <p className="text-[length:clamp(12px,1.4vh,15px)] text-slate-500 dark:text-slate-400">
                مدير النظام العام
              </p>
            </div>
          </div>
          <i className="fa-solid fa-angle-left text-sm text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" />
        </div>
      </div>
    </div>
  )
}
 
export default function Profile() {
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchVal, setSearchVal] = useState('')
  const fileInputRef = useRef(null)
 
  const [avatar, setAvatar] = useState(() => {
    try {
      return localStorage.getItem('user_avatar_kasba') || userKasba
    } catch {
      return userKasba
    }
  })
 
  const [formData, setFormData] = useState({
    fullName: 'د . محمد كسبة',
    email: 't.almansoor@org.gov.sa',
    phone: '+972 590 492 8812',
    internalRole: 'مهندس أنظمة ومسؤول طلبات',
    department: 'الإدارة العامة لتقنية المعلومات - قسم البنية التحتية',
    empId: 'EMP-34190',
    username: 't.almansoor@org.gov.sa',
    password: '••••••••••••••••',
  })
 
  const handleImageChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const result = event.target?.result
        if (result) {
          setAvatar(result)
          try {
            localStorage.setItem('user_avatar_kasba', result)
          } catch {
            /* التخزين غير متاح */
          }
        }
      }
      reader.readAsDataURL(file)
    }
  }
 
  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }
 
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#F4F5F7] dark:bg-[#071322] text-slate-800 dark:text-slate-100 flex flex-row transition-colors duration-200 selection:bg-sky-500 selection:text-white"
      style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
        accept="image/*"
        className="hidden"
      />
 
      <aside className="hidden lg:block w-[clamp(240px,18.4vw,340px)] shrink-0 bg-white dark:bg-[#0b1b2d] sticky top-0 h-screen overflow-y-auto overflow-x-hidden select-none z-20 border-l border-slate-200/80 dark:border-slate-800/80">
        <SidebarContent />
      </aside>
 
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <aside className="fixed top-0 right-0 bottom-0 w-[280px] bg-white dark:bg-[#0b1b2d] z-10 shadow-2xl overflow-y-auto overflow-x-hidden">
            <div className="p-4 flex justify-between items-center border-b border-slate-100 dark:border-slate-800">
              <span className="font-bold text-sm">القائمة</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 rounded text-slate-500 hover:text-slate-800 dark:text-slate-400"
              >
                <i className="fa-solid fa-xmark text-lg" />
              </button>
            </div>
            <SidebarContent onNavigate={() => setIsMobileMenuOpen(false)} />
          </aside>
        </div>
      )}
 
      <div className="flex-1 flex flex-col min-w-0">
        {/* الهيدر: يمين 24px ويسار ~80px كما في الصورة */}
        <header className="h-16 bg-white dark:bg-[#0b1b2d] px-4 sm:px-6 lg:pr-6 lg:pl-[clamp(32px,4.17vw,80px)] flex items-center justify-between gap-4 sticky top-0 z-10 border-b border-slate-200/70 dark:border-slate-800/80">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label="القائمة"
            >
              <i className="fa-solid fa-bars text-lg" />
            </button>
 
            <nav className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-500 dark:text-slate-400">
              <Link
                to="/dashboard"
                className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
              >
                نظام إدارة المشتريات - الأزهر
              </Link>
              <i className="fa-solid fa-angle-left text-[10px] text-slate-400" />
              <span className="font-bold text-slate-900 dark:text-white">
                الإدارة الطالبة
              </span>
              <i className="fa-solid fa-angle-left text-[10px] text-slate-400" />
              <span className="text-slate-500 dark:text-slate-400">
                الملف الشخصي
              </span>
            </nav>
          </div>
 
          <div className="hidden md:flex flex-1 max-w-[340px]">
            <div className="relative w-full">
              <input
                type="text"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                placeholder="بحث"
                className="w-full h-10 bg-[#fbfbfb] dark:bg-[#0f243a] border border-slate-300 dark:border-slate-700 rounded-full pr-12 pl-4 text-xs sm:text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-[#00A3EF]"
              />
              <button
                type="button"
                aria-label="بحث"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 dark:text-slate-400"
              >
                <SearchIcon className="w-[22px] h-[22px]" />
              </button>
            </div>
          </div>
 
          <div className="flex items-center gap-3">
            <NotificationMenu />
            <span className="hidden sm:block w-px h-5 bg-slate-200 dark:bg-slate-700" />
            <LanguageMenu />
          </div>
        </header>
 
        {/* المحتوى: يمين 24px ويسار ~80px، بدون حد أقصى للعرض */}
        <main className="w-full px-4 sm:px-6 lg:pr-6 lg:pl-[clamp(32px,4.17vw,80px)] pt-6 lg:pt-9 pb-8">
          <div className="text-right mb-7">
            <h1 className="text-2xl lg:text-[28px] font-black text-slate-900 dark:text-white tracking-tight">
              الملف الشخصي
            </h1>
            <p className="mt-3.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
              إدارة بياناتك الشخصية والوظيفية وتفضيلات الإشعارات وإعدادات الأمان الخاصة بحسابك في منصة إبرام
            </p>
          </div>
 
          {/* العمود الأول (يمين) مرن، والثاني (يسار) عرضه ثابت تقريباً 421px على شاشة 1920 */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_clamp(320px,21.93vw,440px)] gap-6 items-stretch">
            <div className="bg-white dark:bg-[#0b1b2d] rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-slate-200/80 dark:border-slate-800/80 overflow-hidden flex flex-col lg:min-h-[clamp(560px,62.8vh,760px)]">
              <div className="bg-[#eef7fc] dark:bg-sky-950/40 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-sky-100/70 dark:border-sky-900/40">
                <div className="flex items-center gap-4">
                  <div className="relative shrink-0">
                    <img
                      src={avatar}
                      alt="د . محمد كسبة"
                      className="w-20 h-20 rounded-xl object-cover border-2 border-white dark:border-slate-800"
                    />
                    <button
                      type="button"
                      onClick={triggerFileInput}
                      className="absolute -bottom-1 -left-1.5 w-7 h-7 rounded-lg bg-[#0f243a] hover:bg-sky-600 text-white flex items-center justify-center transition-transform active:scale-90 cursor-pointer"
                      title="اضغط لتغيير الصورة الشخصية من جهازك"
                      aria-label="تغيير الصورة الشخصية"
                    >
                      <CameraIcon className="w-[15px] h-[13px]" />
                    </button>
                  </div>
 
                  <div className="text-right">
                    <h2 className="text-lg lg:text-xl font-black text-slate-900 dark:text-white">
                      د . محمد كسبة
                    </h2>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-0.5">
                      مهندس أنظمة ومسؤول طلبات الشراء — تقنية المعلومات
                    </p>
                    <button
                      type="button"
                      onClick={triggerFileInput}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#007DEA] dark:text-[#01B0F5] hover:underline mt-1.5 cursor-pointer"
                    >
                      <i className="fa-solid fa-arrow-up-from-bracket text-[11px]" />
                      <span>تغيير الصورة الشخصية</span>
                    </button>
                  </div>
                </div>
 
                <button
                  type="button"
                  onClick={() => navigate('/edit-profile')}
                  className="px-4 py-2 rounded-xl bg-white dark:bg-[#0f243a] border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm flex items-center gap-2 cursor-pointer self-end sm:self-center"
                >
                  <i className="fa-solid fa-pen text-[11px]" />
                  <span>تعديل البيانات</span>
                </button>
              </div>
 
              {/* الحقول: padding 24px، والمسافة العمودية بين الصفوف 16px */}
              <div className="p-6 space-y-4 flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="text-right">
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      disabled
                      value={formData.fullName}
                      className={inputBase}
                    />
                  </div>
 
                  <div className="text-right">
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                      البريد الإلكتروني المؤسسي *
                    </label>
                    <input
                      type="email"
                      dir="ltr"
                      disabled
                      value={formData.email}
                      className={`${inputBase} text-right`}
                    />
                  </div>
                </div>
 
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="text-right">
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                      رقم الهاتف الجوال *
                    </label>
                    <input
                      type="text"
                      dir="ltr"
                      disabled
                      value={formData.phone}
                      className={`${inputBase} text-right`}
                    />
                  </div>
 
                  <div className="text-right">
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                      المسمى الوظيفي الداخلي *
                    </label>
                    <input
                      type="text"
                      disabled
                      value={formData.internalRole}
                      className={inputBase}
                    />
                  </div>
                </div>
 
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="text-right">
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                      الإدارة / القسم
                    </label>
                    <input
                      type="text"
                      disabled
                      value={formData.department}
                      className={inputBase}
                    />
                  </div>
 
                  <div className="text-right">
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                      الرقم الوظيفي
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        disabled
                        value={formData.empId}
                        className="w-full h-12 pr-4 pl-14 rounded-full bg-[#eef7fc] dark:bg-sky-950/40 border border-transparent text-sm font-bold text-slate-900 dark:text-white outline-none cursor-default"
                      />
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[11px] font-bold text-slate-400 dark:text-slate-500">
                        (ثابت)
                      </span>
                    </div>
                  </div>
                </div>
 
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start pt-[22px]">
                  <div className="text-right">
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                      اسم المستخدم وبريد الدخول
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        dir="ltr"
                        disabled
                        value={formData.username}
                        className="w-full h-12 pr-3 pl-32 rounded-full bg-[#f4f5f7] dark:bg-[#0f243a] border border-transparent text-sm font-bold text-slate-900 dark:text-white text-right outline-none cursor-default"
                      />
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center px-2 py-0.5 rounded-lg bg-[#eaf8f1] dark:bg-emerald-950/50 text-[#0b7a52] dark:text-emerald-400 text-[11px] font-bold">
                        مرتبط بالنظام
                      </span>
                    </div>
                    <p className="mt-1.5 text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <i className="fa-solid fa-circle-info text-amber-500 text-[10px]" />
                      <span>يتطلب تغيير البريد الإلكتروني المعتمد للدخول مراجعة مسؤول المنظومة.</span>
                    </p>
                  </div>
 
                  <div className="text-right">
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                      كلمة المرور الحالية
                    </label>
                    <input
                      type="text"
                      disabled
                      value={formData.password}
                      className="w-full h-12 px-4 rounded-full bg-[#f4f5f7] dark:bg-[#0f243a] border border-transparent text-xs font-medium text-slate-500 dark:text-slate-400 outline-none cursor-default tracking-widest"
                    />
                  </div>
                </div>
              </div>
 
              <div className="bg-[#e9f4fb] dark:bg-[#0e2740] px-6 py-3 border-t border-sky-100/70 dark:border-sky-900/40 flex items-center justify-center gap-2 text-center">
                <ShieldCheckIcon className="w-[11px] h-[14px] shrink-0 text-[#0077FF] dark:text-[#01B0F5]" />
                <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                  يتم تدقيق كافة تعديلات بيانات الاتصال وتوثيقها تلقائياً في سجل الرقابة المالي والإداري
                </span>
              </div>
            </div>
 
            <div className="bg-white dark:bg-[#0b1b2d] rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-slate-200/80 dark:border-slate-800/80 overflow-hidden flex flex-col justify-between lg:min-h-[clamp(560px,62.8vh,760px)]">
              <div className="p-6">
                <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <h3 className="text-[20px] leading-[1.3] font-black text-slate-900 dark:text-white">
                    المعلومات الوظيفية والصلاحيات
                  </h3>
                  <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#eaf5fc] dark:bg-sky-950/50 text-[#404946] dark:text-slate-300 text-xs font-bold shrink-0">
                    <LockIcon className="w-[10px] h-[13px] shrink-0 text-[#404946] dark:text-slate-300" />
                    <span>للعرض فقط</span>
                  </div>
                </div>
 
                <div className="py-5 space-y-4 text-right">
                  <div className="pb-3 border-b border-slate-100 dark:border-slate-800">
                    <p className="text-xs text-slate-400 dark:text-slate-500 mb-0.5">
                      المؤسسة / الجهة الحكومية
                    </p>
                    <p className="text-base font-bold text-slate-900 dark:text-white">
                      جامعة الأزهر / المنظومة المؤسسية
                    </p>
                  </div>
 
                  <div className="pb-3 border-b border-slate-100 dark:border-slate-800">
                    <p className="text-xs text-slate-400 dark:text-slate-500 mb-0.5">
                      الإدارة التابع لها
                    </p>
                    <p className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0077FF]" />
                      <span>الإدارة الطالبة (تقنية المعلومات)</span>
                    </p>
                  </div>
 
                  <div className="pb-3 border-b border-slate-100 dark:border-slate-800">
                    <p className="text-xs text-slate-400 dark:text-slate-500 mb-0.5">
                      المسمى الوظيفي المعتمد
                    </p>
                    <p className="text-base font-bold text-slate-900 dark:text-white">
                      مهندس نظم وتطبيقات أول
                    </p>
                  </div>
 
                  <div className="pb-4 border-b border-slate-100 dark:border-slate-800">
                    <p className="text-xs text-slate-400 dark:text-slate-500 mb-0.5">
                      دور المستخدم في المنظومة
                    </p>
                    <div className="mt-2.5 inline-block min-w-[197px] px-3 py-1 rounded-lg bg-[#eaf5fc] dark:bg-sky-950/50 text-slate-900 dark:text-slate-200 text-[13px] leading-[18px] font-bold text-right">
                      منشئ طلبات شراء معتمد
                    </div>
                  </div>
 
                  <div>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mb-0.5">
                      تاريخ إنشاء الحساب وتفعيله
                    </p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <i className="fa-regular fa-calendar text-slate-400 text-xs" />
                      <span>1444/03/12 هـ (2022/10/08 م)</span>
                    </p>
                  </div>
                </div>
              </div>
 
              <div className="bg-[#e9f4fb] dark:bg-[#0e2740] p-4 border-t border-sky-100/70 dark:border-sky-900/40 flex items-start gap-2.5">
                <LockClockIcon className="w-4 h-[18px] shrink-0 mt-0.5 text-[#0B2A4A] dark:text-slate-200" />
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed text-right font-medium">
                  تُدار البيانات الوظيفية والصلاحيات الممنوحة بواسطة مسؤول النظام وإدارة الموارد البشرية وفق مصفوفة الصلاحيات المعتمدة.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}