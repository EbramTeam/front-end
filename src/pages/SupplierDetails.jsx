// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { logo, shieldIcon } from '../assets/images'
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

// // الرئيسية: 4 مربعات مفرغة
// const HomeIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <rect x="3" y="3" width="7" height="7" rx="1.5" />
//     <rect x="14" y="3" width="7" height="7" rx="1.5" />
//     <rect x="14" y="14" width="7" height="7" rx="1.5" />
//     <rect x="3" y="14" width="7" height="7" rx="1.5" />
//   </svg>
// )

// // طلباتي: ملف مليان بزاوية مطوية
// const FileIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
//     <path
//       fillRule="evenodd"
//       clipRule="evenodd"
//       d="M4 4a2 2 0 0 1 2-2h8.586a2 2 0 0 1 1.414.586l4.414 4.414A2 2 0 0 1 21 8.414V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm10.5-.5v5a1 1 0 0 0 1 1h5l-6-6z"
//     />
//   </svg>
// )

// // طلب شراء جديد: ملف مليان مع علامة زائد مفرغة
// const FilePlusIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
//     <path
//       fillRule="evenodd"
//       clipRule="evenodd"
//       d="M4 4a2 2 0 0 1 2-2h8.586a2 2 0 0 1 1.414.586l4.414 4.414A2 2 0 0 1 21 8.414V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm10.5-.5v5a1 1 0 0 0 1 1h5l-6-6zM12 12a1 1 0 0 1 1 1v1.5h1.5a1 1 0 1 1 0 2H13V18a1 1 0 1 1-2 0v-1.5H9.5a1 1 0 1 1 0-2H11V13a1 1 0 0 1 1-1z"
//     />
//   </svg>
// )

// // الموردين (أيقونة المورد والطرود المطابقة تماماً)
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

// // البحث
// const SearchIcon = (props) => (
//   <svg {...strokeProps} strokeWidth={1.5} {...props}>
//     <circle cx="11" cy="11" r="7.5" />
//     <path d="m20.5 20.5-4-4" />
//   </svg>
// )

// // أيقونة النسخ
// const CopyIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
//     <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
//     <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
//   </svg>
// )

// // أيقونة الموقع
// const LocationPinIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
//     <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
//     <circle cx="12" cy="10" r="3" />
//   </svg>
// )

// // عناصر القائمة الجانبية
// const navItems = [
//   { id: 'home', label: 'الرئيسية', Icon: HomeIcon, path: '/dashboard' },
//   { id: 'my-orders', label: 'طلباتي', Icon: FileIcon, path: '/my-orders' },
//   { id: 'new-order', label: 'طلب شراء جديد', Icon: FilePlusIcon, path: '/new-order' },
//   { id: 'suppliers', label: 'الموردين', Icon: SupplierPersonIcon, path: '/suppliers' },
// ]

// /* ==================== محتوى القائمة الجانبية ==================== */

// function SidebarContent({ onNavigate }) {
//   const navigate = useNavigate()

//   return (
//     <div className="min-h-full flex flex-col lg:pr-[clamp(16px,2.08vw,40px)]">
//       {/* الجزء العلوي */}
//       <div className="pl-4 pr-4 lg:pr-0 pt-[clamp(16px,4.26vh,46px)]">
//         {/* الشعار + اسم المنصة */}
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

//         {/* عنوان التصنيف */}
//         <p className="my-[clamp(12px,4.35vh,47px)] px-5 2xl:px-6 text-[length:clamp(13px,1.4vh,15px)] text-slate-500 dark:text-slate-400">
//           القوائم التشغيلية
//         </p>

//         {/* أزرار القائمة */}
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

//       {/* الجزء السفلي */}
//       <div className="mt-auto pt-[clamp(12px,2vh,24px)]">
//         {/* بطاقة: النظام متصل وآمن */}
//         <div className="flex items-center gap-2 px-6 2xl:px-10 py-[clamp(10px,1.5vh,16px)] bg-[#e9f4fb] dark:bg-[#0e2740] rounded-xl mx-3">
//           <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 flex-shrink-0 animate-pulse"></span>
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

//         {/* بطاقة المستخدم د. محمد كسبة */}
//         <div className="flex items-center justify-between py-[clamp(10px,1.5vh,16px)] pr-5 2xl:pr-6 pl-5 2xl:pl-[22px] mt-[clamp(0px,3.6vh,39px)] cursor-pointer group">
//           <div className="flex items-center gap-3">
//             <i className="fa-solid fa-circle-user text-[26px] leading-none text-slate-900 dark:text-slate-200 shrink-0"></i>
//             <div className="flex flex-col gap-0.5 text-right">
//               <h4 className="text-[15px] font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
//                 د. محمد كسبة
//               </h4>
//               <p className="text-[12px] text-slate-500 dark:text-slate-400">
//                 مدير النظام العام
//               </p>
//             </div>
//           </div>
//           <i className="fa-solid fa-angle-left text-sm text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors"></i>
//         </div>
//       </div>
//     </div>
//   )
// }

// /* ==================== صفحة تفاصيل المورد ==================== */

// export default function SupplierDetails() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [copied, setCopied] = useState(false)
//   const [searchVal, setSearchVal] = useState('')

//   const handleCopyCr = () => {
//     navigator.clipboard?.writeText('1010489201')
//     setCopied(true)
//     setTimeout(() => setCopied(false), 2000)
//   }

//   return (
//     <div
//       dir="rtl"
//       className="min-h-screen bg-[#F4F5F7] dark:bg-[#071322] text-slate-800 dark:text-slate-100 flex flex-row transition-colors duration-200 selection:bg-sky-500 selection:text-white"
//       style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
//     >
//       {/* ==================== القائمة الجانبية (Sidebar) ==================== */}
//       <aside className="hidden lg:block w-[clamp(240px,18.4vw,340px)] shrink-0 bg-white dark:bg-[#0b1b2d] sticky top-0 h-screen overflow-y-auto select-none z-20 border-l border-slate-200/80 dark:border-slate-800/80">
//         <SidebarContent />
//       </aside>

//       {/* القائمة الجانبية للشاشات الصغيرة */}
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
//                 <i className="fa-solid fa-xmark text-lg"></i>
//               </button>
//             </div>
//             <SidebarContent onNavigate={() => setIsMobileMenuOpen(false)} />
//           </aside>
//         </div>
//       )}

//       {/* ==================== المحتوى الرئيسي ==================== */}
//       <div className="flex-1 flex flex-col min-w-0">
//         {/* الشريط العلوي (Header) */}
//         <header className="h-16 bg-white dark:bg-[#0b1b2d] px-4 lg:px-8 flex items-center justify-between gap-4 sticky top-0 z-10 border-b border-slate-200/70 dark:border-slate-800/80">
//           {/* يمين الهيدر: مسار التنقل (Breadcrumbs) */}
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => setIsMobileMenuOpen(true)}
//               className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
//               aria-label="القائمة"
//             >
//               <i className="fa-solid fa-bars text-lg"></i>
//             </button>

//             <nav className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-500 dark:text-slate-400">
//               <Link
//                 to="/dashboard"
//                 className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
//               >
//                 نظام إدارة المشتريات - الأزهر
//               </Link>
//               <i className="fa-solid fa-angle-left text-[10px] text-slate-400"></i>
//               <span className="font-bold text-slate-900 dark:text-white">
//                 الإدارة الطالبة
//               </span>
//               <i className="fa-solid fa-angle-left text-[10px] text-slate-400"></i>
//               <Link
//                 to="/suppliers"
//                 className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
//               >
//                 الموردين
//               </Link>
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

//           {/* يسار الهيدر: الإشعارات واللغة */}
//           <div className="flex items-center gap-3">
//             <NotificationMenu />
//             <span className="hidden sm:block w-px h-5 bg-slate-200 dark:bg-slate-700"></span>
//             <LanguageMenu />
//           </div>
//         </header>

//         {/* جسم الصفحة */}
//         <main className="w-full px-4 sm:px-6 lg:px-8 py-6 lg:py-8 max-w-[1400px]">
//           {/* عنوان الصفحة والوصف */}
//           <div className="text-right mb-6">
//             <h1 className="text-2xl lg:text-[26px] font-extrabold text-slate-900 dark:text-white tracking-tight">
//               تفاصيل الموردون
//             </h1>
//             <p className="mt-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
//               شركة الأفق للحلول التقنية المحدودة
//             </p>
//           </div>

//           {/* ==================== البطاقة العلوية (بطاقة بيانات المورد الأساسية) ==================== */}
//           <section className="bg-white dark:bg-[#0b1b2d] rounded-2xl p-6 lg:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-slate-200/70 dark:border-slate-800/80 mb-8">
//             {/* رأس البطاقة: الشعار والاسم والبادجات */}
//             <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4">
//               {/* يمين: الأيقونة والاسم */}
//               <div className="flex items-center gap-4">
//                 <div className="w-14 h-14 rounded-2xl bg-[#E6F4FE] dark:bg-sky-950/60 flex items-center justify-center shrink-0">
//                   <span className="text-[#00A3EF] font-bold text-2xl tracking-tighter">
//                     أق
//                   </span>
//                 </div>
//                 <h2 className="text-lg lg:text-xl font-bold text-slate-900 dark:text-white">
//                   شركة الأفق للحلول التقنية المحدودة
//                 </h2>
//               </div>

//               {/* يسار: بادجات التوثيق والحالة */}
//               <div className="flex items-center gap-2.5 self-start md:self-center">
//                 {/* بادج توثيق حكومي رقمي */}
//                 <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FEF9EE] dark:bg-amber-950/30 border border-[#FDE3B8] dark:border-amber-800/40 text-[#C07A00] dark:text-amber-400 text-xs font-semibold">
//                   <i className="fa-solid fa-circle-check text-[11px]"></i>
//                   <span>توثيق حكومي رقمي</span>
//                 </div>

//                 {/* بادج نشط (معتمد) */}
//                 <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#EBF8F2] dark:bg-emerald-950/30 border border-[#C6F1DB] dark:border-emerald-800/40 text-[#0B7A52] dark:text-emerald-400 text-xs font-semibold">
//                   <span className="w-1.5 h-1.5 rounded-full bg-[#0B7A52] dark:bg-emerald-400"></span>
//                   <span>نشط (معتمد)</span>
//                 </div>
//               </div>
//             </div>

//             {/* تفاصيل المورد (جدول 4 أعمدة في صفين) */}
//             <div className="pt-6 space-y-5">
//               {/* الصف الأول */}
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 text-xs sm:text-[13px]">
//                 {/* السجل التجاري */}
//                 <div className="flex items-center gap-2">
//                   <span className="text-slate-400 dark:text-slate-500 whitespace-nowrap">السجل التجاري:</span>
//                   <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white">
//                     <span>1010489201</span>
//                     <button
//                       type="button"
//                       onClick={handleCopyCr}
//                       className="text-slate-400 hover:text-[#00A3EF] dark:hover:text-[#00A3EF] transition-colors p-0.5 rounded cursor-pointer"
//                       title={copied ? 'تم النسخ' : 'نسخ السجل'}
//                     >
//                       {copied ? (
//                         <i className="fa-solid fa-check text-emerald-500 text-xs"></i>
//                       ) : (
//                         <CopyIcon className="w-3.5 h-3.5" />
//                       )}
//                     </button>
//                   </div>
//                 </div>

//                 {/* الرقم الضريبي */}
//                 <div className="flex items-center gap-2">
//                   <span className="text-slate-400 dark:text-slate-500 whitespace-nowrap">الرقم الضريبي (VAT):</span>
//                   <span className="font-bold text-slate-900 dark:text-white">310294857200003</span>
//                 </div>

//                 {/* التصنيف */}
//                 <div className="flex items-center gap-2">
//                   <span className="text-slate-400 dark:text-slate-500 whitespace-nowrap">التصنيف:</span>
//                   <span className="font-bold text-slate-900 dark:text-white">تقنية المعلومات والاتصالات</span>
//                 </div>

//                 {/* المدينة */}
//                 <div className="flex items-center gap-2">
//                   <span className="text-slate-400 dark:text-slate-500 whitespace-nowrap">المدينة:</span>
//                   <span className="font-bold text-slate-900 dark:text-white">فلسطين - غزة</span>
//                 </div>
//               </div>

//               {/* الصف الثاني */}
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 text-xs sm:text-[13px]">
//                 {/* تاريخ الانضمام */}
//                 <div className="flex items-center gap-2">
//                   <span className="text-slate-400 dark:text-slate-500 whitespace-nowrap">تاريخ الانضمام:</span>
//                   <span className="font-bold text-slate-900 dark:text-white">14 يناير 2023 م</span>
//                 </div>

//                 {/* رمز المورد */}
//                 <div className="flex items-center gap-2">
//                   <span className="text-slate-400 dark:text-slate-500 whitespace-nowrap">رمز المورد (ID):</span>
//                   <span className="font-bold text-slate-900 dark:text-white">VND-9924-SA</span>
//                 </div>

//                 {/* تاريخ آخر تدقيق */}
//                 <div className="flex items-center gap-2">
//                   <span className="text-slate-400 dark:text-slate-500 whitespace-nowrap">تاريخ آخر تدقيق:</span>
//                   <span className="font-bold text-slate-900 dark:text-white">12 يناير 2025 م</span>
//                 </div>

//                 {/* درجة المخاطر */}
//                 <div className="flex items-center gap-2">
//                   <span className="text-slate-400 dark:text-slate-500 whitespace-nowrap">درجة المخاطر:</span>
//                   <span className="font-bold text-slate-900 dark:text-white">منخفضة (AAA)</span>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* ==================== قسم بيانات التواصل ==================== */}
//           <section>
//             <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 text-right">
//               بيانات التواصل
//             </h3>

//             {/* بطاقتان جنباً إلى جنب */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* البطاقة الأولى (اليمين): سعيد عبد العزيز راشد */}
//               <div className="bg-white dark:bg-[#0b1b2d] rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-slate-200/70 dark:border-slate-800/80">
//                 {/* رأس البطاقة */}
//                 <div className="flex items-center gap-3.5 pb-4 border-b border-slate-100 dark:border-slate-800/70">
//                   <div className="w-11 h-11 rounded-xl bg-[#E6F4FE] dark:bg-sky-950/60 flex items-center justify-center shrink-0">
//                     <span className="text-[#00A3EF] font-bold text-base">
//                       أق
//                     </span>
//                   </div>
//                   <div className="text-right">
//                     <h4 className="text-[15px] font-bold text-slate-900 dark:text-white">
//                       سعيد عبد العزيز راشد
//                     </h4>
//                     <div className="flex items-center gap-1.5 mt-0.5 text-xs text-slate-600 dark:text-slate-400">
//                       <i className="fa-solid fa-id-badge text-[#00A3EF] text-[11px]"></i>
//                       <span>تقنية المعلومات</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* حقول التواصل */}
//                 <div className="pt-4 space-y-3.5 text-xs sm:text-[13px]">
//                   <div className="flex items-center justify-between">
//                     <span className="text-slate-500 dark:text-slate-400 font-medium">رقم الهاتف :</span>
//                     <span className="font-bold text-slate-900 dark:text-white" dir="ltr">
//                       +972 591048901
//                     </span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-slate-500 dark:text-slate-400 font-medium">الجوال المعتمد :</span>
//                     <span className="font-bold text-slate-900 dark:text-white" dir="ltr">
//                       +972 59500901
//                     </span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-slate-500 dark:text-slate-400 font-medium">البريد الإلكتروني المباشر :</span>
//                     <span className="font-bold text-slate-900 dark:text-white">
//                       فلسطين
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* البطاقة الثانية (اليسار): العنوان الوطني المسجل (spl -سبل) */}
//               <div className="bg-white dark:bg-[#0b1b2d] rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-slate-200/70 dark:border-slate-800/80">
//                 {/* رأس البطاقة */}
//                 <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800/70">
//                   <div className="w-10 h-10 rounded-xl bg-[#E6F4FE] dark:bg-sky-950/60 flex items-center justify-center shrink-0 text-[#00A3EF]">
//                     <LocationPinIcon className="w-5 h-5" />
//                   </div>
//                   <h4 className="text-[15px] font-bold text-slate-900 dark:text-white">
//                     العنوان الوطني المسجل (spl -سبل)
//                   </h4>
//                 </div>

//                 {/* تفاصيل العنوان */}
//                 <div className="pt-4 space-y-3 text-xs sm:text-[13px]">
//                   <div className="flex items-center justify-between">
//                     <span className="text-slate-500 dark:text-slate-400 font-medium">الرمز البريدي:</span>
//                     <span className="font-bold text-slate-900 dark:text-white" dir="ltr">
//                       13334 - 7291
//                     </span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-slate-500 dark:text-slate-400 font-medium">المدينة والحي:</span>
//                     <span className="font-bold text-slate-900 dark:text-white">
//                       غزة ، الرمال
//                     </span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-slate-500 dark:text-slate-400 font-medium">الشارع:</span>
//                     <span className="font-bold text-slate-900 dark:text-white">
//                       اليرموك
//                     </span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-slate-500 dark:text-slate-400 font-medium">الرقم الإضافي:</span>
//                     <span className="font-bold text-slate-900 dark:text-white">
//                       4128
//                     </span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-slate-500 dark:text-slate-400 font-medium">البريد الإلكتروني للتعاقدات الرسمية:</span>
//                     <a
//                       href="mailto:contracts@alofoq-tech.sa"
//                       className="font-bold text-slate-900 dark:text-white hover:text-[#00A3EF] dark:hover:text-[#00A3EF] transition-colors"
//                       dir="ltr"
//                     >
//                       contracts@alofoq-tech.sa
//                     </a>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-slate-500 dark:text-slate-400 font-medium">الموقع الإلكتروني:</span>
//                     <a
//                       href="https://alofoq-tech.ps"
//                       target="_blank"
//                       rel="noreferrer"
//                       className="font-bold text-slate-900 dark:text-white hover:text-[#00A3EF] dark:hover:text-[#00A3EF] transition-colors"
//                       dir="ltr"
//                     >
//                       Al-Ufuq Company.com
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </main>
//       </div>
//     </div>
//   )
// }







// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { logo, shieldIcon } from '../assets/images'
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
 
// // الرئيسية: 4 مربعات مفرغة
// const HomeIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <rect x="3" y="3" width="7" height="7" rx="1.5" />
//     <rect x="14" y="3" width="7" height="7" rx="1.5" />
//     <rect x="14" y="14" width="7" height="7" rx="1.5" />
//     <rect x="3" y="14" width="7" height="7" rx="1.5" />
//   </svg>
// )
 
// // طلباتي: ملف مليان بزاوية مطوية
// const FileIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
//     <path
//       fillRule="evenodd"
//       clipRule="evenodd"
//       d="M4 4a2 2 0 0 1 2-2h8.586a2 2 0 0 1 1.414.586l4.414 4.414A2 2 0 0 1 21 8.414V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm10.5-.5v5a1 1 0 0 0 1 1h5l-6-6z"
//     />
//   </svg>
// )
 
// // طلب شراء جديد: ملف مليان مع علامة زائد مفرغة
// const FilePlusIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
//     <path
//       fillRule="evenodd"
//       clipRule="evenodd"
//       d="M4 4a2 2 0 0 1 2-2h8.586a2 2 0 0 1 1.414.586l4.414 4.414A2 2 0 0 1 21 8.414V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm10.5-.5v5a1 1 0 0 0 1 1h5l-6-6zM12 12a1 1 0 0 1 1 1v1.5h1.5a1 1 0 1 1 0 2H13V18a1 1 0 1 1-2 0v-1.5H9.5a1 1 0 1 1 0-2H11V13a1 1 0 0 1 1-1z"
//     />
//   </svg>
// )
 
// // الموردين (أيقونة المورد والطرود المطابقة تماماً)
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
 
// // البحث
// const SearchIcon = (props) => (
//   <svg {...strokeProps} strokeWidth={1.5} {...props}>
//     <circle cx="11" cy="11" r="7.5" />
//     <path d="m20.5 20.5-4-4" />
//   </svg>
// )
 
// // أيقونة النسخ
// const CopyIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
//     <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
//     <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
//   </svg>
// )
 
// // أيقونة الموقع
// const LocationPinIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
//     <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
//     <circle cx="12" cy="10" r="3" />
//   </svg>
// )
 
// // عناصر القائمة الجانبية
// const navItems = [
//   { id: 'home', label: 'الرئيسية', Icon: HomeIcon, path: '/dashboard' },
//   { id: 'my-orders', label: 'طلباتي', Icon: FileIcon, path: '/my-orders' },
//   { id: 'new-order', label: 'طلب شراء جديد', Icon: FilePlusIcon, path: '/new-order' },
//   { id: 'suppliers', label: 'الموردين', Icon: SupplierPersonIcon, path: '/suppliers' },
// ]
 
// /* ==================== محتوى القائمة الجانبية ==================== */
 
// function SidebarContent({ onNavigate }) {
//   const navigate = useNavigate()
 
//   return (
//     <div className="min-h-full flex flex-col lg:pr-[clamp(16px,2.08vw,40px)]">
//       {/* الجزء العلوي */}
//       <div className="pl-4 pr-4 lg:pr-0 pt-[clamp(16px,4.26vh,46px)]">
//         {/* الشعار + اسم المنصة */}
//         <div className="px-5 2xl:px-6">
//           <Link to="/" onClick={onNavigate} className="inline-block">
//             <img
//               src={logo}
//               alt="IBRAM إبرام للمشتريات"
//               className="h-[clamp(40px,4.6vh,50px)] w-auto object-contain"
//             />
//           </Link>
//           <p className="mt-[clamp(6px,1.1vh,12px)] text-[length:clamp(13px,1.5vh,16px)] text-slate-500 dark:text-slate-400">
//             إبرام للمشتريات
//           </p>
//         </div>
 
//         {/* عنوان التصنيف */}
//         <p className="my-[clamp(12px,4.35vh,47px)] px-5 2xl:px-6 text-[length:clamp(13px,1.4vh,15px)] text-slate-500 dark:text-slate-400">
//           القوائم التشغيلية
//         </p>
 
//         {/* أزرار القائمة */}
//         <nav className="space-y-[clamp(6px,0.74vh,8px)]">
//           {navItems.map(({ id, label, Icon, path }) => {
//             const isActive = id === 'suppliers'
//             const heightClass =
//               id === 'my-orders'
//                 ? 'h-[clamp(36px,5.19vh,56px)]'
//                 : 'h-[clamp(40px,5.74vh,62px)]'
//             return (
//               <button
//                 key={id}
//                 onClick={() => {
//                   navigate(path)
//                   onNavigate?.()
//                 }}
//                 className={`w-full ${heightClass} flex items-center gap-3 px-5 2xl:px-6 rounded-xl text-[length:clamp(15px,1.9vh,20px)] font-bold text-right cursor-pointer transition-all ${
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
 
//       {/* الجزء السفلي */}
//       <div className="mt-auto pt-[clamp(12px,2vh,24px)]">
//         {/* بطاقة: النظام متصل وآمن */}
//         <div className="flex items-center gap-2 px-6 2xl:px-10 py-[clamp(10px,1.5vh,16px)] bg-[#e9f4fb] dark:bg-[#0e2740] rounded-xl">
//           <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 flex-shrink-0 animate-pulse"></span>
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
 
//         {/* بطاقة المستخدم د. محمد كسبة */}
//         <div className="flex items-center justify-between py-[clamp(10px,1.5vh,16px)] pr-5 2xl:pr-6 pl-5 2xl:pl-[22px] mt-[clamp(0px,3.6vh,39px)] cursor-pointer group">
//           <div className="flex items-center gap-3">
//             <i className="fa-solid fa-circle-user text-[26px] leading-none text-slate-900 dark:text-slate-200 shrink-0"></i>
//             <div className="flex flex-col gap-0.5 text-right">
//               <h4 className="text-[15px] font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
//                 د. محمد كسبة
//               </h4>
//               <p className="text-[12px] text-slate-500 dark:text-slate-400">
//                 مدير النظام العام
//               </p>
//             </div>
//           </div>
//           <i className="fa-solid fa-angle-left text-sm text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors"></i>
//         </div>
//       </div>
//     </div>
//   )
// }
 
// /* ==================== صفحة تفاصيل المورد ==================== */
 
// export default function SupplierDetails() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [copied, setCopied] = useState(false)
//   const [searchVal, setSearchVal] = useState('')
 
//   const handleCopyCr = () => {
//     navigator.clipboard?.writeText('1010489201')
//     setCopied(true)
//     setTimeout(() => setCopied(false), 2000)
//   }
 
//   return (
//     <div
//       dir="rtl"
//       className="min-h-screen bg-[#F4F5F7] dark:bg-[#071322] text-slate-800 dark:text-slate-100 flex flex-row transition-colors duration-200 selection:bg-sky-500 selection:text-white"
//       style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
//     >
//       {/* ==================== القائمة الجانبية (Sidebar) ==================== */}
//       <aside className="hidden lg:block w-[clamp(240px,18.4vw,340px)] shrink-0 bg-white dark:bg-[#0b1b2d] sticky top-0 h-screen overflow-y-auto overflow-x-hidden select-none z-20 border-l border-slate-200/80 dark:border-slate-800/80">
//         <SidebarContent />
//       </aside>
 
//       {/* القائمة الجانبية للشاشات الصغيرة */}
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
//                 <i className="fa-solid fa-xmark text-lg"></i>
//               </button>
//             </div>
//             <SidebarContent onNavigate={() => setIsMobileMenuOpen(false)} />
//           </aside>
//         </div>
//       )}
 
//       {/* ==================== المحتوى الرئيسي ==================== */}
//       <div className="flex-1 flex flex-col min-w-0">
//         {/* الشريط العلوي (Header) */}
//         <header className="h-16 bg-white dark:bg-[#0b1b2d] px-4 lg:px-8 flex items-center justify-between gap-4 sticky top-0 z-10 border-b border-slate-200/70 dark:border-slate-800/80">
//           {/* يمين الهيدر: مسار التنقل (Breadcrumbs) */}
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => setIsMobileMenuOpen(true)}
//               className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
//               aria-label="القائمة"
//             >
//               <i className="fa-solid fa-bars text-lg"></i>
//             </button>
 
//             <nav className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-500 dark:text-slate-400">
//               <Link
//                 to="/dashboard"
//                 className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
//               >
//                 نظام إدارة المشتريات - الأزهر
//               </Link>
//               <i className="fa-solid fa-angle-left text-[10px] text-slate-400"></i>
//               <span className="font-bold text-slate-900 dark:text-white">
//                 الإدارة الطالبة
//               </span>
//               <i className="fa-solid fa-angle-left text-[10px] text-slate-400"></i>
//               <Link
//                 to="/suppliers"
//                 className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
//               >
//                 الموردين
//               </Link>
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
 
//           {/* يسار الهيدر: الإشعارات واللغة */}
//           <div className="flex items-center gap-3">
//             <NotificationMenu />
//             <span className="hidden sm:block w-px h-5 bg-slate-200 dark:bg-slate-700"></span>
//             <LanguageMenu />
//           </div>
//         </header>
 
//         {/* جسم الصفحة */}
//         <main className="w-full px-4 sm:px-6 lg:px-8 py-6 lg:py-8 max-w-[1400px]">
//           {/* عنوان الصفحة والوصف */}
//           <div className="text-right mb-6">
//             <h1 className="text-2xl lg:text-[28px] font-black text-slate-900 dark:text-white tracking-tight">
//               تفاصيل الموردون
//             </h1>
//             <p className="mt-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
//               شركة الأفق للحلول التقنية المحدودة
//             </p>
//           </div>
 
//           {/* ==================== البطاقة العلوية (بطاقة بيانات المورد الأساسية) ==================== */}
//           <section className="bg-white dark:bg-[#0b1b2d] rounded-3xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-slate-200/70 dark:border-slate-800/80 mb-6">
//             <div className="flex items-start gap-4">
//               {/* أيقونة المورد (يمين) */}
//               <div className="w-16 h-16 rounded-xl bg-[#E6F4FE] dark:bg-sky-950/60 flex items-center justify-center shrink-0">
//                 <span className="text-[#00A3EF] font-medium text-[30px] leading-none">
//                   أق
//                 </span>
//               </div>
 
//               {/* العمود: الاسم + البادجات + التفاصيل */}
//               <div className="flex-1 min-w-0">
//                 {/* صف الاسم والبادجات */}
//                 <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
//                   <h2 className="text-lg lg:text-xl leading-[30px] font-bold text-slate-900 dark:text-white">
//                     شركة الأفق للحلول التقنية المحدودة
//                   </h2>
 
//                   {/* يسار: بادجات التوثيق والحالة */}
//                   <div className="flex items-center gap-2 self-start">
//                     {/* بادج توثيق حكومي رقمي */}
//                     <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FEF9EE] dark:bg-amber-950/30 border border-[#FDE3B8] dark:border-amber-800/40 text-[#C07A00] dark:text-amber-400 text-xs font-semibold">
//                       <i className="fa-solid fa-circle-check text-[11px]"></i>
//                       <span>توثيق حكومي رقمي</span>
//                     </div>
 
//                     {/* بادج نشط (معتمد) */}
//                     <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#EBF8F2] dark:bg-emerald-950/30 border border-[#C6F1DB] dark:border-emerald-800/40 text-[#0B7A52] dark:text-emerald-400 text-xs font-semibold">
//                       <span className="w-1.5 h-1.5 rounded-full bg-[#0B7A52] dark:bg-emerald-400"></span>
//                       <span>نشط (معتمد)</span>
//                     </div>
//                   </div>
//                 </div>
 
//                 {/* تفاصيل المورد (4 أعمدة في صفين) */}
//                 <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-6 auto-rows-[60px] items-center text-xs">
//                   {/* السجل التجاري */}
//                   <div className="flex items-center gap-2">
//                     <span className="text-slate-400 dark:text-slate-500 whitespace-nowrap">السجل التجاري:</span>
//                     <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white">
//                       <span>1010489201</span>
//                       <button
//                         type="button"
//                         onClick={handleCopyCr}
//                         className="text-slate-400 hover:text-[#00A3EF] dark:hover:text-[#00A3EF] transition-colors p-0.5 rounded cursor-pointer"
//                         title={copied ? 'تم النسخ' : 'نسخ السجل'}
//                       >
//                         {copied ? (
//                           <i className="fa-solid fa-check text-emerald-500 text-xs"></i>
//                         ) : (
//                           <CopyIcon className="w-3.5 h-3.5" />
//                         )}
//                       </button>
//                     </div>
//                   </div>
 
//                   {/* الرقم الضريبي */}
//                   <div className="flex items-center gap-2">
//                     <span className="text-slate-400 dark:text-slate-500 whitespace-nowrap">الرقم الضريبي (VAT):</span>
//                     <span className="font-bold text-slate-900 dark:text-white">310294857200003</span>
//                   </div>
 
//                   {/* التصنيف */}
//                   <div className="flex items-center gap-2">
//                     <span className="text-slate-400 dark:text-slate-500 whitespace-nowrap">التصنيف:</span>
//                     <span className="font-bold text-slate-900 dark:text-white">تقنية المعلومات والاتصالات</span>
//                   </div>
 
//                   {/* المدينة */}
//                   <div className="flex items-center gap-2">
//                     <span className="text-slate-400 dark:text-slate-500 whitespace-nowrap">المدينة:</span>
//                     <span className="font-bold text-slate-900 dark:text-white">فلسطين - غزة</span>
//                   </div>
 
//                   {/* تاريخ الانضمام */}
//                   <div className="flex items-center gap-2">
//                     <span className="text-slate-400 dark:text-slate-500 whitespace-nowrap">تاريخ الانضمام:</span>
//                     <span className="font-bold text-slate-900 dark:text-white">14 يناير 2023 م</span>
//                   </div>
 
//                   {/* رمز المورد */}
//                   <div className="flex items-center gap-2">
//                     <span className="text-slate-400 dark:text-slate-500 whitespace-nowrap">رمز المورد (ID):</span>
//                     <span className="font-bold text-slate-900 dark:text-white">VND-9924-SA</span>
//                   </div>
 
//                   {/* تاريخ آخر تدقيق */}
//                   <div className="flex items-center gap-2">
//                     <span className="text-slate-400 dark:text-slate-500 whitespace-nowrap">تاريخ آخر تدقيق:</span>
//                     <span className="font-bold text-slate-900 dark:text-white">12 يناير 2025 م</span>
//                   </div>
 
//                   {/* درجة المخاطر */}
//                   <div className="flex items-center gap-2">
//                     <span className="text-slate-400 dark:text-slate-500 whitespace-nowrap">درجة المخاطر:</span>
//                     <span className="font-bold text-slate-900 dark:text-white">منخفضة (AAA)</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
 
//           {/* ==================== قسم بيانات التواصل ==================== */}
//           <section className="bg-white dark:bg-[#0b1b2d] rounded-3xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-slate-200/70 dark:border-slate-800/80">
//             <h3 className="text-base font-bold text-slate-900 dark:text-white pb-2 text-right border-b border-slate-100 dark:border-slate-800/70">
//               بيانات التواصل
//             </h3>
 
//             {/* بطاقتان جنباً إلى جنب */}
//             <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
//               {/* البطاقة الأولى (اليمين): سعيد عبد العزيز راشد */}
//               <div className="bg-white dark:bg-[#0b1b2d] rounded-2xl p-5 border border-slate-200 dark:border-slate-800/80">
//                 {/* رأس البطاقة */}
//                 <div className="flex items-center gap-3 pb-3 border-b border-slate-100 dark:border-slate-800/70">
//                   <div className="w-12 h-12 rounded-xl bg-[#E6F4FE] dark:bg-sky-950/60 flex items-center justify-center shrink-0">
//                     <span className="text-[#00A3EF] font-medium text-xl leading-none">
//                       أق
//                     </span>
//                   </div>
//                   <div className="flex flex-col gap-1 text-right">
//                     <h4 className="text-lg leading-6 font-bold text-slate-900 dark:text-white">
//                       سعيد عبد العزيز راشد
//                     </h4>
//                     <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
//                       <i className="fa-solid fa-id-badge text-[#00A3EF] text-[11px]"></i>
//                       <span>تقنية المعلومات</span>
//                     </div>
//                   </div>
//                 </div>
 
//                 {/* حقول التواصل */}
//                 <div className="pt-3 space-y-2.5 text-xs">
//                   <div className="flex items-center justify-between">
//                     <span className="text-slate-500 dark:text-slate-400 font-medium">رقم الهاتف :</span>
//                     <span className="font-bold text-slate-900 dark:text-white" dir="ltr">
//                       +972 591048901
//                     </span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-slate-500 dark:text-slate-400 font-medium">الجوال المعتمد :</span>
//                     <span className="font-bold text-slate-900 dark:text-white" dir="ltr">
//                       +972 59500901
//                     </span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-slate-500 dark:text-slate-400 font-medium">البريد الإلكتروني المباشر :</span>
//                     <span className="font-bold text-slate-900 dark:text-white">
//                       فلسطين
//                     </span>
//                   </div>
//                 </div>
//               </div>
 
//               {/* البطاقة الثانية (اليسار): العنوان الوطني المسجل (spl -سبل) */}
//               <div className="bg-white dark:bg-[#0b1b2d] rounded-2xl p-5 pb-7 border border-slate-200 dark:border-slate-800/80">
//                 {/* رأس البطاقة */}
//                 <div className="flex items-center gap-3 pb-3 border-b border-slate-100 dark:border-slate-800/70">
//                   <div className="w-12 h-12 rounded-xl bg-[#E6F4FE] dark:bg-sky-950/60 flex items-center justify-center shrink-0 text-[#00A3EF]">
//                     <LocationPinIcon className="w-5 h-5" />
//                   </div>
//                   <h4 className="text-lg leading-6 font-bold text-slate-900 dark:text-white">
//                     العنوان الوطني المسجل (spl -سبل)
//                   </h4>
//                 </div>
 
//                 {/* تفاصيل العنوان */}
//                 <div className="pt-3 text-xs">
//                   <div className="space-y-2.5">
//                     <div className="flex items-center justify-between">
//                       <span className="text-slate-500 dark:text-slate-400 font-medium">الرمز البريدي:</span>
//                       <span className="font-bold text-slate-900 dark:text-white" dir="ltr">
//                         13334 - 7291
//                       </span>
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <span className="text-slate-500 dark:text-slate-400 font-medium">المدينة والحي:</span>
//                       <span className="font-bold text-slate-900 dark:text-white">
//                         غزة ، الرمال
//                       </span>
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <span className="text-slate-500 dark:text-slate-400 font-medium">الشارع:</span>
//                       <span className="font-bold text-slate-900 dark:text-white">
//                         اليرموك
//                       </span>
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <span className="text-slate-500 dark:text-slate-400 font-medium">الرقم الإضافي:</span>
//                       <span className="font-bold text-slate-900 dark:text-white">
//                         4128
//                       </span>
//                     </div>
//                   </div>
 
//                   <div className="mt-3.5 pt-2 border-t border-slate-100 dark:border-slate-800/70 space-y-2.5">
//                     <div className="flex items-center justify-between">
//                       <span className="text-slate-500 dark:text-slate-400 font-medium">البريد الإلكتروني للتعاقدات الرسمية:</span>
//                       <a
//                         href="mailto:contracts@alofoq-tech.sa"
//                         className="font-bold text-slate-900 dark:text-white hover:text-[#00A3EF] dark:hover:text-[#00A3EF] transition-colors"
//                         dir="ltr"
//                       >
//                         contracts@alofoq-tech.sa
//                       </a>
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <span className="text-slate-500 dark:text-slate-400 font-medium">الموقع الإلكتروني:</span>
//                       <a
//                         href="https://alofoq-tech.ps"
//                         target="_blank"
//                         rel="noreferrer"
//                         className="font-bold text-slate-900 dark:text-white hover:text-[#00A3EF] dark:hover:text-[#00A3EF] transition-colors"
//                         dir="ltr"
//                       >
//                         Al-Ufuq Company.com
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </main>
//       </div>
//     </div>
//   )
// }










import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logo, shieldIcon } from '../assets/images'
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
 
// الرئيسية: 4 مربعات مفرغة
const HomeIcon = (props) => (
  <svg {...strokeProps} {...props}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
  </svg>
)
 
// طلباتي: ملف مليان بزاوية مطوية
const FileIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 4a2 2 0 0 1 2-2h8.586a2 2 0 0 1 1.414.586l4.414 4.414A2 2 0 0 1 21 8.414V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm10.5-.5v5a1 1 0 0 0 1 1h5l-6-6z"
    />
  </svg>
)
 
// طلب شراء جديد: ملف مليان مع علامة زائد مفرغة
const FilePlusIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 4a2 2 0 0 1 2-2h8.586a2 2 0 0 1 1.414.586l4.414 4.414A2 2 0 0 1 21 8.414V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm10.5-.5v5a1 1 0 0 0 1 1h5l-6-6zM12 12a1 1 0 0 1 1 1v1.5h1.5a1 1 0 1 1 0 2H13V18a1 1 0 1 1-2 0v-1.5H9.5a1 1 0 1 1 0-2H11V13a1 1 0 0 1 1-1z"
    />
  </svg>
)
 
// الموردين (أيقونة المورد والطرود المطابقة تماماً)
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
 
// البحث
const SearchIcon = (props) => (
  <svg {...strokeProps} strokeWidth={1.5} {...props}>
    <circle cx="11" cy="11" r="7.5" />
    <path d="m20.5 20.5-4-4" />
  </svg>
)
 
// أيقونة النسخ
const CopyIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
)
 
// أيقونة الموقع
const LocationPinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)
 
// عناصر القائمة الجانبية
const navItems = [
  { id: 'home', label: 'الرئيسية', Icon: HomeIcon, path: '/dashboard' },
  { id: 'my-orders', label: 'طلباتي', Icon: FileIcon, path: '/my-orders' },
  { id: 'new-order', label: 'طلب شراء جديد', Icon: FilePlusIcon, path: '/new-order' },
  { id: 'suppliers', label: 'الموردين', Icon: SupplierPersonIcon, path: '/suppliers' },
]
 
/* ==================== محتوى القائمة الجانبية ==================== */
 
function SidebarContent({ onNavigate }) {
  const navigate = useNavigate()
 
  return (
    <div className="min-h-full flex flex-col lg:pr-[clamp(16px,2.08vw,40px)]">
      {/* الجزء العلوي */}
      <div className="pl-4 pr-4 lg:pr-0 pt-[clamp(16px,4.26vh,46px)]">
        {/* الشعار + اسم المنصة */}
        <div className="px-5 2xl:px-6">
          <Link to="/" onClick={onNavigate} className="inline-block">
            <img
              src={logo}
              alt="IBRAM إبرام للمشتريات"
              className="h-[clamp(110px,4.6vh,50px)] w-auto object-contain"
            />
          </Link>
          <p className="mt-[clamp(6px,1.1vh,12px)] text-[length:clamp(13px,1.5vh,16px)] text-slate-500 dark:text-slate-400">
            إبرام للمشتريات
          </p>
        </div>
 
        {/* عنوان التصنيف */}
        <p className="my-[clamp(12px,4.35vh,47px)] px-5 2xl:px-6 text-[length:clamp(13px,1.4vh,15px)] text-slate-500 dark:text-slate-400">
          القوائم التشغيلية
        </p>
 
        {/* أزرار القائمة */}
        <nav className="space-y-[clamp(6px,0.74vh,8px)]">
          {navItems.map(({ id, label, Icon, path }) => {
            const isActive = id === 'suppliers'
            const heightClass =
              id === 'my-orders'
                ? 'h-[clamp(36px,5.19vh,56px)]'
                : 'h-[clamp(40px,5.74vh,62px)]'
            return (
              <button
                key={id}
                onClick={() => {
                  navigate(path)
                  onNavigate?.()
                }}
                className={`w-full ${heightClass} flex items-center gap-3 px-5 2xl:px-6 rounded-xl text-[length:clamp(15px,1.9vh,20px)] font-bold text-right cursor-pointer transition-all ${
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
 
      {/* الجزء السفلي */}
      <div className="mt-auto pt-[clamp(12px,2vh,24px)]">
        {/* بطاقة: النظام متصل وآمن */}
        <div className="flex items-center gap-2 px-6 2xl:px-10 py-[clamp(10px,1.5vh,16px)] bg-[#e9f4fb] dark:bg-[#0e2740] rounded-xl">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 flex-shrink-0 animate-pulse"></span>
          <div className="flex flex-col gap-1 text-right flex-1">
            <span className="whitespace-nowrap text-[14px] 2xl:text-[16px] font-bold text-slate-900 dark:text-white">
              النظام متصل وآمن
            </span>
            <span className="text-[12px] 2xl:text-xs text-slate-500 dark:text-slate-400">
              Sovereign Core v4.2
            </span>
          </div>
          <img src={shieldIcon} alt="shield" className="w-5 h-5 object-contain flex-shrink-0" />
        </div>
 
        {/* بطاقة المستخدم د. محمد كسبة */}
        <div className="flex items-center justify-between py-[clamp(10px,1.5vh,16px)] pr-5 2xl:pr-6 pl-5 2xl:pl-[22px] mt-[clamp(0px,3.6vh,39px)] cursor-pointer group">
          <div className="flex items-center gap-3">
            <i className="fa-solid fa-circle-user text-[26px] leading-none text-slate-900 dark:text-slate-200 shrink-0"></i>
            <div className="flex flex-col gap-0.5 text-right">
              <h4 className="text-[15px] font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                د. محمد كسبة
              </h4>
              <p className="text-[12px] text-slate-500 dark:text-slate-400">
                مدير النظام العام
              </p>
            </div>
          </div>
          <i className="fa-solid fa-angle-left text-sm text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors"></i>
        </div>
      </div>
    </div>
  )
}
 
/* ==================== صفحة تفاصيل المورد ==================== */
 
export default function SupplierDetails() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [searchVal, setSearchVal] = useState('')
 
  const handleCopyCr = () => {
    navigator.clipboard?.writeText('1010489201')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
 
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#F4F5F7] dark:bg-[#071322] text-slate-800 dark:text-slate-100 flex flex-row transition-colors duration-200 selection:bg-sky-500 selection:text-white"
      style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
    >
      {/* ==================== القائمة الجانبية (Sidebar) ==================== */}
      <aside className="hidden lg:block w-[clamp(240px,18.4vw,340px)] shrink-0 bg-white dark:bg-[#0b1b2d] sticky top-0 h-screen overflow-y-auto overflow-x-hidden select-none z-20 border-l border-slate-200/80 dark:border-slate-800/80">
        <SidebarContent />
      </aside>
 
      {/* القائمة الجانبية للشاشات الصغيرة */}
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
                <i className="fa-solid fa-xmark text-lg"></i>
              </button>
            </div>
            <SidebarContent onNavigate={() => setIsMobileMenuOpen(false)} />
          </aside>
        </div>
      )}
 
      {/* ==================== المحتوى الرئيسي ==================== */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* الشريط العلوي (Header) */}
        <header className="h-16 bg-white dark:bg-[#0b1b2d] px-4 lg:px-8 flex items-center justify-between gap-4 sticky top-0 z-10 border-b border-slate-200/70 dark:border-slate-800/80">
          {/* يمين الهيدر: مسار التنقل (Breadcrumbs) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label="القائمة"
            >
              <i className="fa-solid fa-bars text-lg"></i>
            </button>
 
            <nav className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-500 dark:text-slate-400">
              <Link
                to="/dashboard"
                className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
              >
                نظام إدارة المشتريات - الأزهر
              </Link>
              <i className="fa-solid fa-angle-left text-[10px] text-slate-400"></i>
              <span className="font-bold text-slate-900 dark:text-white">
                الإدارة الطالبة
              </span>
              <i className="fa-solid fa-angle-left text-[10px] text-slate-400"></i>
              <Link
                to="/suppliers"
                className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
              >
                الموردين
              </Link>
            </nav>
          </div>
 
          {/* منتصف الهيدر: شريط البحث الدائري البيضاوي */}
          <div className="hidden md:flex flex-1 max-w-[340px]">
            <div className="relative w-full">
              <input
                type="text"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                placeholder="بحث"
                className="w-full h-9 bg-[#fbfbfb] dark:bg-[#0f243a] border border-slate-300 dark:border-slate-700 rounded-full pr-10 pl-4 text-xs sm:text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-[#00A3EF]"
              />
              <button
                type="button"
                aria-label="بحث"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:text-slate-400"
              >
                <SearchIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
 
          {/* يسار الهيدر: الإشعارات واللغة */}
          <div className="flex items-center gap-3">
            <NotificationMenu />
            <span className="hidden sm:block w-px h-5 bg-slate-200 dark:bg-slate-700"></span>
            <LanguageMenu />
          </div>
        </header>
 
        {/* جسم الصفحة */}
        <main className="w-full px-4 sm:px-6 lg:px-8 py-6 lg:py-8 max-w-[1400px]">
          {/* عنوان الصفحة والوصف */}
          <div className="text-right mb-6">
            <h1 className="text-2xl lg:text-[28px] font-black text-slate-900 dark:text-white tracking-tight">
              تفاصيل الموردون
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
              شركة الأفق للحلول التقنية المحدودة
            </p>
          </div>
 
          {/* ==================== البطاقة العلوية (بطاقة بيانات المورد الأساسية) ==================== */}
          <section className="bg-white dark:bg-[#0b1b2d] rounded-3xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-slate-200/70 dark:border-slate-800/80 mb-6">
            <div className="flex items-start gap-4">
              {/* أيقونة المورد (يمين) */}
              <div className="w-16 h-16 rounded-xl bg-[#E6F4FE] dark:bg-sky-950/60 flex items-center justify-center shrink-0">
                <span className="text-[#00A3EF] font-medium text-[30px] leading-none">
                  أق
                </span>
              </div>
 
              {/* العمود: الاسم + البادجات + التفاصيل */}
              <div className="flex-1 min-w-0">
                {/* صف الاسم والبادجات */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
                  <h2 className="text-lg lg:text-xl leading-[30px] font-bold text-slate-900 dark:text-white">
                    شركة الأفق للحلول التقنية المحدودة
                  </h2>
 
                  {/* يسار: بادجات التوثيق والحالة */}
                  <div className="flex items-center gap-2 self-start">
                    {/* بادج توثيق حكومي رقمي */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FEF9EE] dark:bg-amber-950/30 border border-[#FDE3B8] dark:border-amber-800/40 text-[#C07A00] dark:text-amber-400 text-xs font-semibold">
                      <i className="fa-solid fa-circle-check text-[11px]"></i>
                      <span>توثيق حكومي رقمي</span>
                    </div>
 
                    {/* بادج نشط (معتمد) */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#EBF8F2] dark:bg-emerald-950/30 border border-[#C6F1DB] dark:border-emerald-800/40 text-[#0B7A52] dark:text-emerald-400 text-xs font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0B7A52] dark:bg-emerald-400"></span>
                      <span>نشط (معتمد)</span>
                    </div>
                  </div>
                </div>
 
                {/* تفاصيل المورد (4 أعمدة في صفين) */}
                <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-6 auto-rows-[60px] items-center text-xs">
                  {/* السجل التجاري */}
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 dark:text-slate-500 whitespace-nowrap">السجل التجاري:</span>
                    <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white">
                      <span>1010489201</span>
                      <button
                        type="button"
                        onClick={handleCopyCr}
                        className="text-slate-400 hover:text-[#00A3EF] dark:hover:text-[#00A3EF] transition-colors p-0.5 rounded cursor-pointer"
                        title={copied ? 'تم النسخ' : 'نسخ السجل'}
                      >
                        {copied ? (
                          <i className="fa-solid fa-check text-emerald-500 text-xs"></i>
                        ) : (
                          <CopyIcon className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
 
                  {/* الرقم الضريبي */}
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 dark:text-slate-500 whitespace-nowrap">الرقم الضريبي (VAT):</span>
                    <span className="font-bold text-slate-900 dark:text-white">310294857200003</span>
                  </div>
 
                  {/* التصنيف */}
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 dark:text-slate-500 whitespace-nowrap">التصنيف:</span>
                    <span className="font-bold text-slate-900 dark:text-white">تقنية المعلومات والاتصالات</span>
                  </div>
 
                  {/* المدينة */}
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 dark:text-slate-500 whitespace-nowrap">المدينة:</span>
                    <span className="font-bold text-slate-900 dark:text-white">فلسطين - غزة</span>
                  </div>
 
                  {/* تاريخ الانضمام */}
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 dark:text-slate-500 whitespace-nowrap">تاريخ الانضمام:</span>
                    <span className="font-bold text-slate-900 dark:text-white">14 يناير 2023 م</span>
                  </div>
 
                  {/* رمز المورد */}
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 dark:text-slate-500 whitespace-nowrap">رمز المورد (ID):</span>
                    <span className="font-bold text-slate-900 dark:text-white">VND-9924-SA</span>
                  </div>
 
                  {/* تاريخ آخر تدقيق */}
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 dark:text-slate-500 whitespace-nowrap">تاريخ آخر تدقيق:</span>
                    <span className="font-bold text-slate-900 dark:text-white">12 يناير 2025 م</span>
                  </div>
 
                  {/* درجة المخاطر */}
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 dark:text-slate-500 whitespace-nowrap">درجة المخاطر:</span>
                    <span className="font-bold text-slate-900 dark:text-white">منخفضة (AAA)</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
 
          {/* ==================== قسم بيانات التواصل ==================== */}
          <section className="bg-white dark:bg-[#0b1b2d] rounded-3xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-slate-200/70 dark:border-slate-800/80">
            <h3 className="text-base font-bold text-slate-900 dark:text-white pb-2 text-right border-b border-slate-100 dark:border-slate-800/70">
              بيانات التواصل
            </h3>
 
            {/* بطاقتان جنباً إلى جنب */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* البطاقة الأولى (اليمين): سعيد عبد العزيز راشد */}
              <div className="bg-white dark:bg-[#0b1b2d] rounded-2xl p-5 border border-slate-200 dark:border-slate-800/80">
                {/* رأس البطاقة */}
                <div className="flex items-center gap-3 pb-3 border-b border-slate-100 dark:border-slate-800/70">
                  <div className="w-12 h-12 rounded-xl bg-[#E6F4FE] dark:bg-sky-950/60 flex items-center justify-center shrink-0">
                    <span className="text-[#00A3EF] font-medium text-xl leading-none">
                      أق
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 text-right">
                    <h4 className="text-lg leading-6 font-bold text-slate-900 dark:text-white">
                      سعيد عبد العزيز راشد
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                      <i className="fa-solid fa-id-badge text-[#00A3EF] text-[11px]"></i>
                      <span>تقنية المعلومات</span>
                    </div>
                  </div>
                </div>
 
                {/* حقول التواصل */}
                <div className="pt-3 space-y-2.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">رقم الهاتف :</span>
                    <span className="font-bold text-slate-900 dark:text-white" dir="ltr">
                      +972 591048901
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">الجوال المعتمد :</span>
                    <span className="font-bold text-slate-900 dark:text-white" dir="ltr">
                      +972 59500901
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">البريد الإلكتروني المباشر :</span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      فلسطين
                    </span>
                  </div>
                </div>
              </div>
 
              {/* البطاقة الثانية (اليسار): العنوان الوطني المسجل (spl -سبل) */}
              <div className="bg-white dark:bg-[#0b1b2d] rounded-2xl p-5 pb-7 border border-slate-200 dark:border-slate-800/80">
                {/* رأس البطاقة */}
                <div className="flex items-center gap-3 pb-3 border-b border-slate-100 dark:border-slate-800/70">
                  <div className="w-12 h-12 rounded-xl bg-[#E6F4FE] dark:bg-sky-950/60 flex items-center justify-center shrink-0 text-[#00A3EF]">
                    <LocationPinIcon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg leading-6 font-bold text-slate-900 dark:text-white">
                    العنوان الوطني المسجل (spl -سبل)
                  </h4>
                </div>
 
                {/* تفاصيل العنوان */}
                <div className="pt-3 text-xs">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 dark:text-slate-400 font-medium">الرمز البريدي:</span>
                      <span className="font-bold text-slate-900 dark:text-white" dir="ltr">
                        13334 - 7291
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 dark:text-slate-400 font-medium">المدينة والحي:</span>
                      <span className="font-bold text-slate-900 dark:text-white">
                        غزة ، الرمال
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 dark:text-slate-400 font-medium">الشارع:</span>
                      <span className="font-bold text-slate-900 dark:text-white">
                        اليرموك
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 dark:text-slate-400 font-medium">الرقم الإضافي:</span>
                      <span className="font-bold text-slate-900 dark:text-white">
                        4128
                      </span>
                    </div>
                  </div>
 
                  <div className="mt-3.5 pt-2 border-t border-slate-100 dark:border-slate-800/70 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 dark:text-slate-400 font-medium">البريد الإلكتروني للتعاقدات الرسمية:</span>
                      <a
                        href="mailto:contracts@alofoq-tech.sa"
                        className="font-bold text-slate-900 dark:text-white hover:text-[#00A3EF] dark:hover:text-[#00A3EF] transition-colors"
                        dir="ltr"
                      >
                        contracts@alofoq-tech.sa
                      </a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 dark:text-slate-400 font-medium">الموقع الإلكتروني:</span>
                      <a
                        href="https://alofoq-tech.ps"
                        target="_blank"
                        rel="noreferrer"
                        className="font-bold text-slate-900 dark:text-white hover:text-[#00A3EF] dark:hover:text-[#00A3EF] transition-colors"
                        dir="ltr"
                      >
                        Al-Ufuq Company.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}