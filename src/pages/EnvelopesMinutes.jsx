// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { logo, shieldIcon, userHani } from '../assets/images'
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
//   <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
//     <rect x="3" y="3" width="8" height="10" rx="1.5" />
//     <rect x="3" y="15" width="8" height="6" rx="1.5" />
//     <rect x="13" y="3" width="8" height="6" rx="1.5" />
//     <rect x="13" y="11" width="8" height="10" rx="1.5" />
//   </svg>
// )

// const FileIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5z" />
//     <path d="M14 2v5h5" />
//   </svg>
// )

// const FilePlusIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5z" />
//     <path d="M14 2v5h5" />
//     <path d="M12 11v6M9 14h6" />
//   </svg>
// )

// const TruckIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
//     <path d="M15 18H9" />
//     <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
//     <circle cx="17" cy="18" r="2" />
//     <circle cx="7" cy="18" r="2" />
//   </svg>
// )

// const SearchIcon = (props) => (
//   <svg {...strokeProps} strokeWidth={1.5} {...props}>
//     <circle cx="11" cy="11" r="7.5" />
//     <path d="m20.5 20.5-4-4" />
//   </svg>
// )

// // عناصر القائمة الجانبية
// const navItems = [
//   { id: 'home', label: 'الرئيسية', Icon: HomeIcon, path: '/dashboard' },
//   { id: 'my-orders', label: 'طلباتي', Icon: FileIcon, path: '/my-orders' },
//   { id: 'new-order', label: 'طلب شراء جديد', Icon: FilePlusIcon, path: '/new-order' },
//   { id: 'suppliers', label: 'الموردين', Icon: TruckIcon, path: '/suppliers' },
// ]

// /* ==================== محتوى القائمة الجانبية ==================== */

// function SidebarContent({ onNavigate }) {
//   const navigate = useNavigate()

//   return (
//     <div className="min-h-full flex flex-col print:hidden">
//       <div className="px-4 pt-[clamp(16px,3vh,32px)]">
//         <div className="px-2">
//           <Link to="/dashboard" onClick={onNavigate} className="inline-block">
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

//         <p className="my-[clamp(12px,4vh,44px)] px-2 text-[length:clamp(13px,1.4vh,15px)] text-slate-500 dark:text-slate-400">
//           القوائم التشغيلية
//         </p>

//         <nav className="space-y-2">
//           {navItems.map(({ id, label, Icon, path }) => {
//             const isActive = id === 'my-orders'
//             return (
//               <button
//                 key={id}
//                 onClick={() => {
//                   navigate(path)
//                   onNavigate?.()
//                 }}
//                 className={`w-full h-[clamp(40px,5.2vh,56px)] flex items-center gap-3 px-5 2xl:px-6 rounded-lg text-[length:clamp(15px,1.9vh,20px)] font-bold text-right cursor-pointer transition-all ${
//                   isActive
//                     ? 'bg-[#00B0F0] text-slate-900 shadow-sm'
//                     : 'bg-[#f5f5f5] dark:bg-[#0f243a] text-slate-900 dark:text-slate-200 hover:bg-[#ececec] dark:hover:bg-[#142e4a]'
//                 }`}
//               >
//                 <Icon className="w-[1.1em] h-[1.1em] shrink-0" />
//                 <span>{label}</span>
//               </button>
//             )
//           })}
//         </nav>
//       </div>

//       <div className="mt-auto pt-[clamp(12px,2vh,24px)]">
//         {/* النظام متصل وآمن */}
//         <div className="flex items-center gap-2 px-6 2xl:px-10 py-[clamp(10px,1.5vh,16px)] bg-[#e9f4fb] dark:bg-[#0e2740]">
//           <span className="w-2.5 h-2.5 rounded-full bg-emerald-700 flex-shrink-0 animate-pulse" />
//           <div className="flex flex-col text-right flex-1">
//             <span className="whitespace-nowrap text-[15px] 2xl:text-[17px] font-bold text-slate-900 dark:text-white">
//               النظام متصل وآمن
//             </span>
//             <span className="text-[13px] 2xl:text-sm text-slate-500 dark:text-slate-400">
//               Sovereign Core v4.2
//             </span>
//           </div>
//           <img src={shieldIcon} alt="shield" className="w-5 h-5 object-contain flex-shrink-0" />
//         </div>

//         {/* بطاقة المستخدم م. هاني وشاح */}
//         <div className="flex items-center justify-between py-[clamp(10px,1.85vh,20px)] pr-6 2xl:pr-10 pl-5 2xl:pl-7 mt-[clamp(0px,3vh,32px)] mb-2 cursor-pointer group">
//           <div className="flex items-center gap-4">
//             <img
//               src={userHani}
//               alt="م. هاني وشاح"
//               className="w-10 h-10 rounded-full object-cover"
//             />
//             <div className="text-right">
//               <h4 className="text-[15px] 2xl:text-[17px] font-bold text-slate-900 dark:text-white group-hover:text-sky-600 transition-colors">
//                 م. هاني وشاح
//               </h4>
//               <p className="text-[13px] 2xl:text-sm text-slate-500 dark:text-slate-400">
//                 الإدارة الطالبة
//               </p>
//             </div>
//           </div>
//           <i className="fa-solid fa-angle-left text-sm text-slate-500 group-hover:text-slate-700 transition-colors" />
//         </div>
//       </div>
//     </div>
//   )
// }

// /* ==================== بيانات محضر فتح المظاريف ==================== */

// // أولاً: العروض المستلمة
// const RECEIVED_OFFERS = [
//   {
//     num: 1,
//     supplier: 'شركة الحلول التقنية المتقدمة',
//     date: '13 أكتوبر 2026 في 12:25 م',
//     status: 'سليم ومختوم',
//     total: '108,675 ش',
//   },
//   {
//     num: 2,
//     supplier: 'مؤسسة الرواد للتجهيزات المكتبية',
//     date: '14 أكتوبر 2026 في 12:25 م',
//     status: 'سليم ومختوم',
//     total: '114,850 ش',
//   },
//   {
//     num: 3,
//     supplier: 'شركة الخليج للتوريدات العامة',
//     date: '15 أكتوبر 2026 في 12:25 م',
//     status: 'سليم ومختوم',
//     total: '107,700 ش',
//   },
// ]

// // ثانيًا: أسعار الوحدات حسب الأصناف
// const UNIT_PRICES = [
//   {
//     item: 'جهاز حاسوب مكتبي',
//     qty: '25 جهاز',
//     p1: '4,050 ش',
//     p2: '4,300 ش',
//     p3: '3,980 ش',
//   },
//   {
//     item: 'لوحة مفاتيح وفأرة لاسلكية',
//     qty: '25 طقم',
//     p1: '165 ش',
//     p2: '150 ش',
//     p3: '190 ش',
//   },
//   {
//     item: 'جهاز عرض (بروجكتر)',
//     qty: '1 جهاز',
//     p1: '3,300 ش',
//     p2: '3,600 ش',
//     p3: '3,450 ش',
//   },
// ]

// // أعضاء اللجنة
// const COMMITTEE_MEMBERS = [
//   {
//     role: 'رئيس اللجنة',
//     name: 'د. سامي العتيبي',
//     signedAt: '17 أكتوبر 2026 في 2:25 م',
//   },
//   {
//     role: 'عضو',
//     name: 'أ. نورة الدوسري',
//     signedAt: '17 أكتوبر 2026 في 4:25 م',
//   },
//   {
//     role: 'عضو',
//     name: 'أ. فهد المالكي',
//     signedAt: '18 أكتوبر 2026 في 4:25 م',
//   },
// ]

// /* ==================== المكون الرئيسي ==================== */

// export default function EnvelopesMinutes() {
//   const navigate = useNavigate()
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [searchVal, setSearchVal] = useState('')

//   const handlePrint = () => {
//     window.print()
//   }

//   return (
//     <div
//       dir="rtl"
//       className="min-h-screen bg-[#F4F5F7] dark:bg-[#071322] text-slate-800 dark:text-slate-100 flex flex-row transition-colors duration-200 selection:bg-sky-500 selection:text-white"
//       style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
//     >
//       {/* ==================== القائمة الجانبية (Sidebar) ==================== */}
//       <aside className="hidden lg:block w-[clamp(240px,18.4vw,340px)] shrink-0 bg-white dark:bg-[#0b1b2d] sticky top-0 h-screen overflow-y-auto select-none z-20 border-l border-slate-200/80 dark:border-slate-800/80 print:hidden">
//         <SidebarContent />
//       </aside>

//       {/* القائمة الجانبية للشاشات الصغيرة */}
//       {isMobileMenuOpen && (
//         <div className="fixed inset-0 z-50 lg:hidden print:hidden">
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

//       {/* ==================== المحتوى الرئيسي ==================== */}
//       <div className="flex-1 flex flex-col min-w-0">
//         {/* الشريط العلوي (Header) */}
//         <header className="h-16 bg-white dark:bg-[#0b1b2d] px-4 lg:px-8 flex items-center justify-between gap-4 sticky top-0 z-10 border-b border-slate-200/70 dark:border-slate-800/80 print:hidden">
//           {/* يمين الهيدر: مسار التنقل (Breadcrumbs) */}
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => setIsMobileMenuOpen(true)}
//               className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
//               aria-label="القائمة"
//             >
//               <i className="fa-solid fa-bars text-lg" />
//             </button>

//             <nav className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 overflow-x-auto whitespace-nowrap">
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
//               <Link
//                 to="/my-orders"
//                 className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
//               >
//                 طلباتي
//               </Link>
//               <i className="fa-solid fa-angle-left text-[10px] text-slate-400" />
//               <Link
//                 to="/envelopes-opened"
//                 className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
//               >
//                 تم فتح المظاريف
//               </Link>
//               <i className="fa-solid fa-angle-left text-[10px] text-slate-400" />
//               <span className="text-slate-500 dark:text-slate-400">
//                 المحضر
//               </span>
//             </nav>
//           </div>

//           {/* منتصف الهيدر: شريط البحث الدائري البيضاوي */}
//           <div className="hidden md:flex flex-1 max-w-[340px]">
//             <div className="relative w-full">
//               <input
//                 type="text"
//                 value={searchVal}
//                 onChange={(e) => setSearchVal(e.target.value)}
//                 placeholder="بحث"
//                 className="w-full h-9 bg-[#fbfbfb] dark:bg-[#0f243a] border border-slate-300 dark:border-slate-700 rounded-full pr-10 pl-4 text-xs sm:text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-[#00B0F0]"
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

//           {/* يسار الهيدر: الإشعارات واللغة */}
//           <div className="flex items-center gap-3">
//             <NotificationMenu />
//             <span className="hidden sm:block w-px h-5 bg-slate-200 dark:bg-slate-700" />
//             <LanguageMenu />
//           </div>
//         </header>

//         {/* جسم الصفحة الرئيسي */}
//         <main className="w-full px-4 sm:px-6 lg:px-8 py-6 lg:py-8 max-w-[1400px]">
//           {/* قسم العنوان العلوي وزر الحفظ PDF وزر الرجوع */}
//           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 print:hidden">
//             {/* يمين: زر الرجوع + العنوان الرئيسي والفرعي */}
//             <div className="text-right">
//               <button
//                 type="button"
//                 onClick={() => navigate(-1)}
//                 className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 font-semibold mb-2 transition-colors cursor-pointer"
//               >
//                 <i className="fa-solid fa-angle-right text-[11px]" />
//                 <span>رجوع</span>
//               </button>
//               <h1 className="text-2xl lg:text-[28px] font-black text-slate-900 dark:text-white tracking-tight">
//                 معاينة طلب عروض الأسعار
//               </h1>
//               <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
//                 أجهزة حاسوب لمعمل الحاسب الآلي — PR-2026-0001
//               </p>
//             </div>

//             {/* يسار: زر حفظ PDF */}
//             <div>
//               <button
//                 type="button"
//                 onClick={handlePrint}
//                 className="px-8 h-10 rounded-full bg-[#00A3EF] hover:bg-[#0092d6] text-slate-900 font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
//               >
//                 <span>حفظ PDF</span>
//               </button>
//             </div>
//           </div>

//           {/* ==================== ورقة المستند الرسمية (White Sheet) ==================== */}
//           <article className="bg-white dark:bg-[#0b1b2d] rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-slate-200/80 dark:border-slate-800/80 print:shadow-none print:border-none print:p-0">
//             {/* ترويسة المستند الرسمية */}
//             <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800/80">
//               {/* يمين الترويسة */}
//               <div className="text-right flex flex-col items-start gap-0.5 order-2 md:order-1">
//                 <span className="text-[11px] text-slate-400 font-medium">فلسطين</span>
//                 <h2 className="text-xl lg:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
//                   جامعة الأفق
//                 </h2>
//                 <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
//                   وكالة الجامعة للشؤون الإدارية والمالية
//                 </p>
//                 <p className="text-xs font-bold text-[#007DEA] dark:text-[#01B0F5] mt-0.5">
//                   إدارة المشتريات والعقود
//                 </p>
//               </div>

//               {/* منتصف الترويسة: شعار الصرح الجامعي */}
//               <div className="order-1 md:order-2 flex justify-center">
//                 <div className="w-14 h-14 rounded-2xl border-2 border-slate-900 dark:border-white/90 flex items-center justify-center p-2.5 shadow-sm">
//                   <svg
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="w-8 h-8 text-slate-900 dark:text-white"
//                   >
//                     <path d="m2 9 10-6 10 6" />
//                     <path d="M4 10v9" />
//                     <path d="M10 10v9" />
//                     <path d="M14 10v9" />
//                     <path d="M20 10v9" />
//                     <path d="M2 20h20" />
//                   </svg>
//                 </div>
//               </div>

//               {/* يسار الترويسة: صندوق الأرقام المرجعية */}
//               <div className="order-3 bg-[#eef7fc] dark:bg-sky-950/40 rounded-xl p-3 sm:p-3.5 border border-sky-100 dark:border-sky-900/40 min-w-[210px] text-xs">
//                 <div className="space-y-1.5">
//                   <div className="flex items-center justify-between gap-3">
//                     <span className="text-slate-500 dark:text-slate-400">الرقم المرجعي:</span>
//                     <span className="font-bold text-slate-900 dark:text-white" dir="ltr">
//                       RFQ-2026-0001
//                     </span>
//                   </div>
//                   <div className="flex items-center justify-between gap-3">
//                     <span className="text-slate-500 dark:text-slate-400">التاريخ:</span>
//                     <span className="font-bold text-slate-900 dark:text-white">
//                       02 أكتوبر 2026 م
//                     </span>
//                   </div>
//                   <div className="flex items-center justify-between gap-3">
//                     <span className="text-slate-500 dark:text-slate-400">طلب الشراء:</span>
//                     <span className="font-bold text-[#007DEA] dark:text-[#01B0F5]" dir="ltr">
//                       PR-2026-0001
//                     </span>
//                   </div>
//                   <div className="flex items-center justify-between gap-3">
//                     <span className="text-slate-500 dark:text-slate-400">المرفقات:</span>
//                     <span className="font-bold text-slate-900 dark:text-white">
//                       لا يوجد
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* عنوان المحضر الرسمي */}
//             <div className="text-center my-8">
//               <h2 className="text-2xl lg:text-[26px] font-black text-slate-900 dark:text-white tracking-wide">
//                 محضر فتح المظاريف
//               </h2>
//               <p className="mt-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300">
//                 طلب عروض الأسعار RFQ-2026-0001 — طلب الشراء PR-2026-0001
//               </p>
//             </div>

//             {/* تمهيد وافتتاحية المحضر */}
//             <div className="text-right mb-8">
//               <p className="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
//                 إنه في يوم 17 أكتوبر 2026 الساعة 12:25 م، اجتمعت لجنة فتح المظاريف المشكّلة بموجب القرار الإداري، وذلك لفتح مظاريف العروض المقدّمة على طلب عروض الأسعار الخاص بـ «أجهزة حاسوب لمعمل الحاسب الآلي» لصالح كلية الهندسة، وقد تحققت اللجنة من سلامة المظاريف وأنها مغلقة ومختومة، وأثبتت ما يلي:
//               </p>
//             </div>

//             {/* ==================== أولاً: العروض المستلمة ==================== */}
//             <section className="mb-8">
//               <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3 text-right">
//                 أولاً: العروض المستلمة
//               </h3>

//               <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-x-auto">
//                 <table className="w-full border-collapse text-right text-xs">
//                   <thead>
//                     <tr className="bg-[#f1f2f4] dark:bg-[#0f2844] text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800">
//                       <th className="py-3 px-3 text-center font-bold w-12 border-l border-slate-200 dark:border-slate-800">
//                         م
//                       </th>
//                       <th className="py-3 px-4 text-center font-bold border-l border-slate-200 dark:border-slate-800">
//                         المورد
//                       </th>
//                       <th className="py-3 px-4 text-center font-bold border-l border-slate-200 dark:border-slate-800">
//                         تاريخ ووقت الاستلام
//                       </th>
//                       <th className="py-3 px-4 text-center font-bold border-l border-slate-200 dark:border-slate-800">
//                         حالة المظروف
//                       </th>
//                       <th className="py-3 px-4 text-center font-bold">
//                         إجمالي العرض
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-800 dark:text-slate-200">
//                     {RECEIVED_OFFERS.map((row) => (
//                       <tr
//                         key={row.num}
//                         className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors"
//                       >
//                         <td className="py-4 px-3 text-center font-bold border-l border-slate-200 dark:border-slate-800">
//                           {row.num}
//                         </td>
//                         <td className="py-4 px-4 text-center font-bold border-l border-slate-200 dark:border-slate-800">
//                           {row.supplier}
//                         </td>
//                         <td className="py-4 px-4 text-center text-slate-600 dark:text-slate-300 border-l border-slate-200 dark:border-slate-800">
//                           {row.date}
//                         </td>
//                         <td className="py-4 px-4 text-center font-medium border-l border-slate-200 dark:border-slate-800">
//                           {row.status}
//                         </td>
//                         <td className="py-4 px-4 text-center font-bold">
//                           {row.total}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </section>

//             {/* ==================== ثانيًا: أسعار الوحدات حسب الأصناف ==================== */}
//             <section className="mb-8">
//               <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3 text-right">
//                 ثانيًا: أسعار الوحدات حسب الأصناف
//               </h3>

//               <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-x-auto">
//                 <table className="w-full border-collapse text-right text-xs">
//                   <thead>
//                     <tr className="bg-[#f1f2f4] dark:bg-[#0f2844] text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800">
//                       <th className="py-3 px-4 text-center font-bold border-l border-slate-200 dark:border-slate-800">
//                         الصنف
//                       </th>
//                       <th className="py-3 px-3 text-center font-bold w-24 border-l border-slate-200 dark:border-slate-800">
//                         الكمية
//                       </th>
//                       <th className="py-3 px-4 text-center font-bold border-l border-slate-200 dark:border-slate-800">
//                         شركة الحلول التقنية المتقدمة
//                       </th>
//                       <th className="py-3 px-4 text-center font-bold border-l border-slate-200 dark:border-slate-800">
//                         مؤسسة الرواد للتجهيزات المكتبية
//                       </th>
//                       <th className="py-3 px-4 text-center font-bold">
//                         شركة الخليج للتوريدات العامة
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-800 dark:text-slate-200">
//                     {UNIT_PRICES.map((row, idx) => (
//                       <tr
//                         key={idx}
//                         className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors"
//                       >
//                         <td className="py-4 px-4 text-center font-bold border-l border-slate-200 dark:border-slate-800">
//                           {row.item}
//                         </td>
//                         <td className="py-4 px-3 text-center font-bold border-l border-slate-200 dark:border-slate-800">
//                           {row.qty}
//                         </td>
//                         <td className="py-4 px-4 text-center font-bold border-l border-slate-200 dark:border-slate-800">
//                           {row.p1}
//                         </td>
//                         <td className="py-4 px-4 text-center font-bold border-l border-slate-200 dark:border-slate-800">
//                           {row.p2}
//                         </td>
//                         <td className="py-4 px-4 text-center font-bold">
//                           {row.p3}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </section>

//             {/* ==================== ثالثًا: قرار اللجنة ==================== */}
//             <div className="text-right mb-8">
//               <p className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white leading-relaxed">
//                 ثالثًا: أثبتت اللجنة الأسعار كما وردت في العروض دون أي تعديل، وتُحال العروض إلى المرحلة التالية لدراستها فنيًا.
//               </p>
//             </div>

//             {/* ==================== أعضاء اللجنة ==================== */}
//             <section className="mb-6">
//               <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 text-right">
//                 أعضاء اللجنة
//               </h3>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 {COMMITTEE_MEMBERS.map((m, idx) => (
//                   <div key={idx} className="text-right">
//                     <p className="text-xs text-slate-400 font-medium mb-1">
//                       {m.role}
//                     </p>
//                     <p className="text-sm font-bold text-slate-900 dark:text-white mb-3">
//                       {m.name}
//                     </p>

//                     {/* بطاقة التوقيع الإلكتروني */}
//                     <div className="bg-[#eef7fc] dark:bg-sky-950/40 rounded-xl p-3 border border-sky-100/70 dark:border-sky-900/30 text-center">
//                       <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
//                         موقّع إلكترونيًا
//                       </p>
//                       <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
//                         {m.signedAt}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </section>

//             {/* الهامش السفلي للمستند (Footer bar) */}
//             <footer className="border-t border-slate-200 dark:border-slate-800/80 mt-10 pt-3.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400">
//               <p>
//                 وثيقة صادرة إلكترونيًا من نظام إبرام للمشتريات — جامعة الأزهر كلية الدراسات المتوسطة
//               </p>
//               <p dir="ltr">RFQ-2026-0001 · 1/1</p>
//             </footer>
//           </article>
//         </main>
//       </div>
//     </div>
//   )
// }








import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logo, shieldIcon, userHani } from '../assets/images'
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
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <rect x="3" y="3" width="8" height="10" rx="1.5" />
    <rect x="3" y="15" width="8" height="6" rx="1.5" />
    <rect x="13" y="3" width="8" height="6" rx="1.5" />
    <rect x="13" y="11" width="8" height="10" rx="1.5" />
  </svg>
)
 
const FileIcon = (props) => (
  <svg {...strokeProps} {...props}>
    <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5z" />
    <path d="M14 2v5h5" />
  </svg>
)
 
const FilePlusIcon = (props) => (
  <svg {...strokeProps} {...props}>
    <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5z" />
    <path d="M14 2v5h5" />
    <path d="M12 11v6M9 14h6" />
  </svg>
)
 
const TruckIcon = (props) => (
  <svg {...strokeProps} {...props}>
    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
    <path d="M15 18H9" />
    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
    <circle cx="17" cy="18" r="2" />
    <circle cx="7" cy="18" r="2" />
  </svg>
)
 
const SearchIcon = (props) => (
  <svg {...strokeProps} strokeWidth={1.5} {...props}>
    <circle cx="11" cy="11" r="7.5" />
    <path d="m20.5 20.5-4-4" />
  </svg>
)
 
// عناصر القائمة الجانبية
const navItems = [
  { id: 'home', label: 'الرئيسية', Icon: HomeIcon, path: '/dashboard' },
  { id: 'my-orders', label: 'طلباتي', Icon: FileIcon, path: '/my-orders' },
  { id: 'new-order', label: 'طلب شراء جديد', Icon: FilePlusIcon, path: '/new-order' },
  { id: 'suppliers', label: 'الموردين', Icon: TruckIcon, path: '/suppliers' },
]
 
/* ==================== محتوى القائمة الجانبية ==================== */
 
function SidebarContent({ onNavigate }) {
  const navigate = useNavigate()
 
  return (
    <div className="min-h-full flex flex-col lg:pr-10 print:hidden">
      <div className="px-4 pt-[clamp(16px,4.25vh,46px)]">
        <div className="px-2">
          <Link to="/dashboard" onClick={onNavigate} className="inline-block">
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
 
        <p className="my-[clamp(12px,4.4vh,48px)] px-2 text-[length:clamp(13px,1.4vh,15px)] text-slate-500 dark:text-slate-400">
          القوائم التشغيلية
        </p>
 
        <nav className="space-y-2">
          {navItems.map(({ id, label, Icon, path }) => {
            const isActive = id === 'my-orders'
            return (
              <button
                key={id}
                onClick={() => {
                  navigate(path)
                  onNavigate?.()
                }}
                className={`w-full h-[clamp(40px,5.7vh,62px)] flex items-center gap-3 px-5 2xl:px-6 rounded-lg text-[length:clamp(15px,1.9vh,20px)] font-bold text-right cursor-pointer transition-all ${
                  isActive
                    ? 'bg-[#00B0F0] text-slate-900 shadow-sm'
                    : 'bg-[#f5f5f5] dark:bg-[#0f243a] text-slate-900 dark:text-slate-200 hover:bg-[#ececec] dark:hover:bg-[#142e4a]'
                }`}
              >
                <Icon className="w-[1.1em] h-[1.1em] shrink-0" />
                <span>{label}</span>
              </button>
            )
          })}
        </nav>
      </div>
 
      <div className="mt-auto pt-[clamp(12px,2vh,24px)]">
        {/* النظام متصل وآمن */}
        <div className="flex items-center gap-2 px-6 2xl:px-10 py-[clamp(10px,1.8vh,20px)] bg-[#e9f4fb] dark:bg-[#0e2740]">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-700 flex-shrink-0 animate-pulse" />
          <div className="flex flex-col text-right flex-1">
            <span className="whitespace-nowrap text-[15px] 2xl:text-[18px] font-bold text-slate-900 dark:text-white">
              النظام متصل وآمن
            </span>
            <span className="text-[13px] text-slate-500 dark:text-slate-400">
              Sovereign Core v4.2
            </span>
          </div>
          <img src={shieldIcon} alt="shield" className="w-5 h-5 object-contain flex-shrink-0" />
        </div>
 
        {/* بطاقة المستخدم م. هاني وشاح */}
        <div className="flex items-center justify-between py-[clamp(10px,1.4vh,15px)] pr-4 pl-5 2xl:pl-7 mt-[clamp(0px,4.4vh,48px)] mb-2 cursor-pointer group">
          <div className="flex items-center gap-4">
            <img
              src={userHani}
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/user-hani.jpg'; }}
              alt="م. هاني وشاح"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="text-right">
              <h4 className="text-[15px] 2xl:text-[17px] font-bold text-slate-900 dark:text-white group-hover:text-sky-600 transition-colors">
                م. هاني وشاح
              </h4>
              <p className="text-[13px] text-slate-500 dark:text-slate-400">
                الإدارة الطالبة
              </p>
            </div>
          </div>
          <i className="fa-solid fa-angle-left text-sm text-slate-500 group-hover:text-slate-700 transition-colors" />
        </div>
      </div>
    </div>
  )
}
 
/* ==================== بيانات محضر فتح المظاريف ==================== */
 
// أولاً: العروض المستلمة
const RECEIVED_OFFERS = [
  {
    num: 1,
    supplier: 'شركة الحلول التقنية المتقدمة',
    date: '13 أكتوبر 2026 في 12:25 م',
    status: 'سليم ومختوم',
    total: '108,675 ش',
  },
  {
    num: 2,
    supplier: 'مؤسسة الرواد للتجهيزات المكتبية',
    date: '14 أكتوبر 2026 في 12:25 م',
    status: 'سليم ومختوم',
    total: '114,850 ش',
  },
  {
    num: 3,
    supplier: 'شركة الخليج للتوريدات العامة',
    date: '15 أكتوبر 2026 في 12:25 م',
    status: 'سليم ومختوم',
    total: '107,700 ش',
  },
]
 
// ثانيًا: أسعار الوحدات حسب الأصناف
const UNIT_PRICES = [
  {
    item: 'جهاز حاسوب مكتبي',
    qty: '25 جهاز',
    p1: '4,050 ش',
    p2: '4,300 ش',
    p3: '3,980 ش',
  },
  {
    item: 'لوحة مفاتيح وفأرة لاسلكية',
    qty: '25 طقم',
    p1: '165 ش',
    p2: '150 ش',
    p3: '190 ش',
  },
  {
    item: 'جهاز عرض (بروجكتر)',
    qty: '1 جهاز',
    p1: '3,300 ش',
    p2: '3,600 ش',
    p3: '3,450 ش',
  },
]
 
// أعضاء اللجنة
const COMMITTEE_MEMBERS = [
  {
    role: 'رئيس اللجنة',
    name: 'د. سامي العتيبي',
    signedAt: '17 أكتوبر 2026 في 2:25 م',
  },
  {
    role: 'عضو',
    name: 'أ. نورة الدوسري',
    signedAt: '17 أكتوبر 2026 في 4:25 م',
  },
  {
    role: 'عضو',
    name: 'أ. فهد المالكي',
    signedAt: '18 أكتوبر 2026 في 4:25 م',
  },
]
 
/* ==================== المكون الرئيسي ==================== */
 
export default function EnvelopesMinutes() {
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchVal, setSearchVal] = useState('')
 
  const handlePrint = () => {
    window.print()
  }
 
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#F3F3F3] dark:bg-[#071322] text-slate-800 dark:text-slate-100 flex flex-row transition-colors duration-200 selection:bg-sky-500 selection:text-white"
      style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
    >
      {/* ==================== القائمة الجانبية (Sidebar) ==================== */}
      <aside className="hidden lg:block w-[clamp(240px,18.4vw,360px)] shrink-0 bg-white dark:bg-[#0b1b2d] sticky top-0 h-screen overflow-y-auto select-none z-20 dark:border-l dark:border-slate-800/80 print:hidden">
        <SidebarContent />
      </aside>
 
      {/* القائمة الجانبية للشاشات الصغيرة */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden print:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <aside className="fixed top-0 right-0 bottom-0 w-[280px] bg-white dark:bg-[#0b1b2d] z-10 shadow-2xl overflow-y-auto">
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
 
      {/* ==================== المحتوى الرئيسي ==================== */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* الشريط العلوي (Header) */}
        <header className="h-16 bg-white dark:bg-[#0b1b2d] sticky top-0 z-10 border-b border-transparent dark:border-slate-800/80 print:hidden">
          <div className="h-full w-full max-w-[1508px] px-4 lg:px-6 flex items-center justify-between gap-4">
            {/* يمين الهيدر: مسار التنقل (Breadcrumbs) */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                aria-label="القائمة"
              >
                <i className="fa-solid fa-bars text-lg" />
              </button>
 
              <nav className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 overflow-x-auto whitespace-nowrap">
                <Link
                  to="/dashboard"
                  className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
                >
                  نظام إدارة المشتريات - الأزهر
                </Link>
                <i className="fa-solid fa-angle-left text-[10px] text-slate-500" />
                <span className="font-bold text-slate-900 dark:text-white">
                  الإدارة الطالبة
                </span>
                <i className="fa-solid fa-angle-left text-[10px] text-slate-500" />
                <Link
                  to="/my-orders"
                  className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
                >
                  طلباتي
                </Link>
                <i className="fa-solid fa-angle-left text-[10px] text-slate-500" />
                <Link
                  to="/envelopes-opened"
                  className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
                >
                  تم فتح المظاريف
                </Link>
                <i className="fa-solid fa-angle-left text-[10px] text-slate-500" />
                <span className="text-slate-600 dark:text-slate-400">
                  المحضر
                </span>
              </nav>
            </div>
 
            {/* منتصف الهيدر: شريط البحث الدائري البيضاوي */}
            <div className="hidden md:flex flex-1 max-w-[346px]">
              <div className="relative w-full">
                <input
                  type="text"
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  placeholder="بحث"
                  className="w-full h-10 bg-[#fbfbfb] dark:bg-[#0f243a] border border-slate-400 dark:border-slate-700 rounded-full pr-12 pl-4 text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-[#00B0F0]"
                />
                <button
                  type="button"
                  aria-label="بحث"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-800 dark:text-slate-400"
                >
                  <SearchIcon className="w-[22px] h-[22px]" />
                </button>
              </div>
            </div>
 
            {/* يسار الهيدر: الإشعارات واللغة */}
            <div className="flex items-center gap-3">
              <NotificationMenu />
              <span className="hidden sm:block w-px h-5 bg-slate-200 dark:bg-slate-700" />
              <LanguageMenu />
            </div>
          </div>
        </header>
 
        {/* جسم الصفحة الرئيسي */}
        <main className="w-full max-w-[1508px] px-4 lg:px-6 pt-8 lg:pt-10 pb-10 lg:pb-32 print:p-0 print:max-w-none">
          {/* قسم العنوان العلوي وزر الحفظ PDF وزر الرجوع */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 lg:mb-14 print:hidden">
            {/* يمين: زر الرجوع + العنوان الرئيسي والفرعي */}
            <div className="text-right">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="flex w-fit items-center gap-3 text-base text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 font-medium mb-3 transition-colors cursor-pointer"
              >
                <i className="fa-solid fa-angle-right text-sm" />
                <span>رجوع</span>
              </button>
              <h1 className="text-2xl lg:text-[28px] font-black text-slate-900 dark:text-white tracking-tight">
                معاينة طلب عروض الأسعار
              </h1>
              <p className="mt-3 text-[15px] text-slate-700 dark:text-slate-400 font-medium">
                أجهزة حاسوب لمعمل الحاسب الآلي — PR-2026-0001
              </p>
            </div>
 
            {/* يسار: زر حفظ PDF */}
            <div>
              <button
                type="button"
                onClick={handlePrint}
                className="w-full sm:w-[273px] h-12 rounded-full bg-gradient-to-r from-[#007DEA] to-[#01B0F5] hover:from-[#006bd0] hover:to-[#00a0e0] text-slate-900 font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>حفظ PDF</span>
              </button>
            </div>
          </div>
 
          {/* ==================== ورقة المستند الرسمية (White Sheet) ==================== */}
          <article className="bg-white dark:bg-[#0b1b2d] rounded-2xl lg:rounded-3xl p-6 dark:border dark:border-slate-800/80 print:shadow-none print:border-none print:p-0">
            {/* ترويسة المستند الرسمية (3 أقسام: اليمين - المنتصف - اليسار) */}
            <div className="grid grid-cols-1 justify-items-center md:grid-cols-[1fr_auto_1fr] items-center gap-6 pb-7 border-b border-slate-300 dark:border-slate-800/80">
              {/* يمين الترويسة */}
              <div className="order-2 md:order-1 md:justify-self-start text-right flex flex-col items-start gap-0.5">
                <span className="text-xs text-slate-500 font-medium">فلسطين</span>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  جامعة الأفق
                </h2>
                <p className="text-xs text-slate-700 dark:text-slate-400 font-medium">
                  وكالة الجامعة للشؤون الإدارية والمالية
                </p>
                <p className="text-xs font-medium text-[#007DEA] dark:text-[#01B0F5] mt-0.5">
                  إدارة المشتريات والعقود
                </p>
              </div>
 
              {/* منتصف الترويسة: شعار الصرح الجامعي */}
              <div className="order-1 md:order-2 flex justify-center">
                <div className="w-16 h-16 rounded-2xl bg-[#E6F4FC] dark:bg-sky-950/40 border-2 border-[#0B1B2D] dark:border-white/90 ring-1 ring-[#00B0F0] flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8 text-[#0B1B2D] dark:text-white"
                  >
                    <path d="m2 9 10-6 10 6" />
                    <path d="M4 10v9" />
                    <path d="M10 10v9" />
                    <path d="M14 10v9" />
                    <path d="M20 10v9" />
                    <path d="M2 20h20" />
                  </svg>
                </div>
              </div>
 
              {/* يسار الترويسة: صندوق الأرقام المرجعية */}
              <div className="order-3 md:justify-self-end bg-[#eef7fc] dark:bg-sky-950/40 rounded-md p-3 min-w-[225px] text-xs">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-slate-500 dark:text-slate-400">الرقم المرجعي:</span>
                    <span className="font-bold text-slate-900 dark:text-white" dir="ltr">
                      RFQ-2026-0001
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-slate-500 dark:text-slate-400">التاريخ:</span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      02 أكتوبر 2026 م
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-slate-500 dark:text-slate-400">طلب الشراء:</span>
                    <span className="font-bold text-[#007DEA] dark:text-[#01B0F5]" dir="ltr">
                      PR-2026-0001
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-slate-500 dark:text-slate-400">المرفقات:</span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      لا يوجد
                    </span>
                  </div>
                </div>
              </div>
            </div>
 
            {/* عنوان المحضر الرسمي */}
            <div className="text-center mt-8 mb-4">
              <h2 className="text-2xl lg:text-[28px] font-black text-slate-900 dark:text-white tracking-wide">
                محضر فتح المظاريف
              </h2>
              <p className="text-lg lg:text-[22px] font-medium text-slate-500 dark:text-slate-300">
                طلب عروض الأسعار RFQ-2026-0001 — طلب الشراء PR-2026-0001
              </p>
            </div>
 
            {/* تمهيد وافتتاحية المحضر */}
            <div className="text-center mb-8">
              <p className="text-base lg:text-lg leading-[26px] text-slate-800 dark:text-slate-300 font-medium">
                إنه في يوم 17 أكتوبر 2026 الساعة 12:25 م، اجتمعت لجنة فتح المظاريف المشكّلة بموجب القرار الإداري، وذلك لفتح مظاريف العروض المقدّمة على طلب عروض الأسعار الخاص بـ «أجهزة حاسوب لمعمل الحاسب الآلي» لصالح كلية الهندسة، وقد تحققت اللجنة من سلامة المظاريف وأنها مغلقة ومختومة، وأثبتت ما يلي:
              </p>
            </div>
 
            {/* ==================== أولاً: العروض المستلمة ==================== */}
            <section className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 text-right">
                أولاً: العروض المستلمة
              </h3>
 
              <div className="border border-slate-300 dark:border-slate-800 rounded-[14px] overflow-x-auto">
                <table className="w-full min-w-[720px] table-fixed border-collapse text-right text-xs">
                  <thead>
                    <tr className="h-[105px] bg-[#f0f0f0] dark:bg-[#0f2844] text-slate-900 dark:text-white border-b border-slate-300 dark:border-slate-800">
                      <th className="px-3 text-center font-bold text-base border-l border-slate-300 dark:border-slate-800">
                        م
                      </th>
                      <th className="px-4 text-center font-bold text-base border-l border-slate-300 dark:border-slate-800">
                        المورد
                      </th>
                      <th className="px-4 text-center font-bold text-base border-l border-slate-300 dark:border-slate-800">
                        تاريخ ووقت الاستلام
                      </th>
                      <th className="px-4 text-center font-bold text-base border-l border-slate-300 dark:border-slate-800">
                        حالة المظروف
                      </th>
                      <th className="px-4 text-center font-bold text-base">
                        إجمالي العرض
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-300 dark:divide-slate-800 text-slate-800 dark:text-slate-200">
                    {RECEIVED_OFFERS.map((row) => (
                      <tr
                        key={row.num}
                        className="h-[105px] hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors"
                      >
                        <td className="px-3 text-center text-[13px] font-bold border-l border-slate-300 dark:border-slate-800">
                          {row.num}
                        </td>
                        <td className="px-4 text-center text-[13px] font-bold border-l border-slate-300 dark:border-slate-800">
                          {row.supplier}
                        </td>
                        <td className="px-4 text-center text-xs text-slate-700 dark:text-slate-300 border-l border-slate-300 dark:border-slate-800">
                          {row.date}
                        </td>
                        <td className="px-4 text-center text-[13px] border-l border-slate-300 dark:border-slate-800">
                          {row.status}
                        </td>
                        <td className="px-4 text-center text-xs">
                          {row.total}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
 
            {/* ==================== ثانيًا: أسعار الوحدات حسب الأصناف ==================== */}
            <section className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 text-right">
                ثانيًا: أسعار الوحدات حسب الأصناف
              </h3>
 
              <div className="border border-slate-300 dark:border-slate-800 rounded-[14px] overflow-x-auto">
                <table className="w-full min-w-[720px] table-fixed border-collapse text-right text-xs">
                  <thead>
                    <tr className="h-[105px] bg-[#f0f0f0] dark:bg-[#0f2844] text-slate-900 dark:text-white border-b border-slate-300 dark:border-slate-800">
                      <th className="px-4 text-center font-bold text-base border-l border-slate-300 dark:border-slate-800">
                        الصنف
                      </th>
                      <th className="px-3 text-center font-bold text-base border-l border-slate-300 dark:border-slate-800">
                        الكمية
                      </th>
                      <th className="px-4 text-center font-bold text-base border-l border-slate-300 dark:border-slate-800">
                        شركة الحلول التقنية المتقدمة
                      </th>
                      <th className="px-4 text-center font-bold text-base border-l border-slate-300 dark:border-slate-800">
                        مؤسسة الرواد للتجهيزات المكتبية
                      </th>
                      <th className="px-4 text-center font-bold text-base">
                        شركة الخليج للتوريدات العامة
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-300 dark:divide-slate-800 text-slate-800 dark:text-slate-200">
                    {UNIT_PRICES.map((row, idx) => (
                      <tr
                        key={idx}
                        className="h-[105px] hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors"
                      >
                        <td className="px-4 text-center text-[13px] font-bold border-l border-slate-300 dark:border-slate-800">
                          {row.item}
                        </td>
                        <td className="px-3 text-center text-xs border-l border-slate-300 dark:border-slate-800">
                          {row.qty}
                        </td>
                        <td className="px-4 text-center text-xs border-l border-slate-300 dark:border-slate-800">
                          {row.p1}
                        </td>
                        <td className="px-4 text-center text-xs border-l border-slate-300 dark:border-slate-800">
                          {row.p2}
                        </td>
                        <td className="px-4 text-center text-xs">
                          {row.p3}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
 
            {/* ==================== ثالثًا: قرار اللجنة ==================== */}
            <div className="text-right mb-8">
              <p className="text-lg font-bold text-slate-900 dark:text-white">
                ثالثًا: أثبتت اللجنة الأسعار كما وردت في العروض دون أي تعديل، وتُحال العروض إلى المرحلة التالية لدراستها فنيًا.
              </p>
            </div>
 
            {/* ==================== أعضاء اللجنة ==================== */}
            <section className="mb-6">
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-3 text-right">
                أعضاء اللجنة
              </h3>
 
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2.5 gap-y-4">
                {COMMITTEE_MEMBERS.map((m, idx) => (
                  <div key={idx} className="text-right">
                    <p className="text-base text-slate-500 dark:text-slate-400 mb-1.5">
                      {m.role}
                    </p>
                    <p className="text-lg font-medium text-slate-900 dark:text-white mb-3">
                      {m.name}
                    </p>
 
                    {/* بطاقة التوقيع الإلكتروني */}
                    <div className="bg-[#eef7fc] dark:bg-sky-950/40 rounded-lg h-14 px-3 flex flex-col justify-center text-right">
                      <p className="text-xs font-bold text-slate-900 dark:text-slate-200">
                        موقّع إلكترونيًا
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {m.signedAt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
 
            {/* الهامش السفلي للمستند (Footer bar) */}
            <footer className="border-t border-slate-200 dark:border-slate-800/80 mt-6 pt-2.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-slate-500">
              <p>
                وثيقة صادرة إلكترونيًا من نظام إبرام للمشتريات — جامعة الأزهر كلية الدراسات المتوسطة
              </p>
              <p dir="ltr">RFQ-2026-0001 · 1/1</p>
            </footer>
          </article>
        </main>
      </div>
    </div>
  )
}
 