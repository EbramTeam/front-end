// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { logo, userHani, shieldIcon } from '../assets/images'
// import LanguageMenu from '../components/LanguageMenu'
// import NotificationMenu from '../components/NotificationMenu'

// /* ==================== الأيقونات (SVG) ==================== */

// const strokeProps = {
//   viewBox: '0 0 24 24',
//   fill: 'none',
//   stroke: 'currentColor',
//   strokeWidth: 2,
//   strokeLinecap: 'round',
//   strokeLinejoin: 'round',
//   'aria-hidden': true,
// }

// // الرئيسية: 4 مربعات مفرغة كالموجودة في الصورة تماماً
// const HomeIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <rect x="3" y="3" width="7" height="7" rx="1.5" />
//     <rect x="14" y="3" width="7" height="7" rx="1.5" />
//     <rect x="14" y="14" width="7" height="7" rx="1.5" />
//     <rect x="3" y="14" width="7" height="7" rx="1.5" />
//   </svg>
// )

// // طلباتي: أيقونة ملف مع زاوية مطوية بلون أسود
// const FileIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
//     <path
//       fillRule="evenodd"
//       clipRule="evenodd"
//       d="M4 4a2 2 0 0 1 2-2h8.586a2 2 0 0 1 1.414.586l4.414 4.414A2 2 0 0 1 21 8.414V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm10.5-.5v5a1 1 0 0 0 1 1h5l-6-6z"
//     />
//   </svg>
// )

// // طلب شراء جديد: ملف بمخطط مع علامة زائد
// const FilePlusIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5z" />
//     <path d="M14 2v5h5" />
//     <path d="M12 11v6M9 14h6" />
//   </svg>
// )

// // الموردين: أيقونة الموردين/المستخدمين كالموجودة بالصورة
// const UsersIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//     <circle cx="9" cy="7" r="4" />
//     <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
//     <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//   </svg>
// )

// const SearchIcon = (props) => (
//   <svg {...strokeProps} strokeWidth={1.5} {...props}>
//     <circle cx="11" cy="11" r="7.5" />
//     <path d="m20.5 20.5-4-4" />
//   </svg>
// )

// const PaperclipIcon = (props) => (
//   <svg {...strokeProps} strokeWidth={1.8} {...props}>
//     <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
//   </svg>
// )

// const navItems = [
//   { id: 'home', label: 'الرئيسية', Icon: HomeIcon, path: '/dashboard' },
//   { id: 'my-orders', label: 'طلباتي', Icon: FileIcon, path: '/my-orders' },
//   { id: 'new-order', label: 'طلب شراء جديد', Icon: FilePlusIcon, path: '/new-order' },
//   { id: 'suppliers', label: 'الموردين', Icon: UsersIcon, path: '/dashboard' },
// ]

// /* ==================== محتوى القائمة الجانبية ==================== */

// function SidebarContent({ onNavigate }) {
//   const navigate = useNavigate()

//   return (
//     <div className="min-h-full flex flex-col">
//       {/* الجزء العلوي */}
//       <div className="px-4 pt-[clamp(16px,3vh,32px)]">
//         {/* الشعار + اسم المنصة */}
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

//         {/* عنوان التصنيف */}
//         <p className="my-[clamp(12px,4vh,44px)] px-2 text-[length:clamp(13px,1.4vh,15px)] text-slate-500 dark:text-slate-400 font-medium">
//           القوائم التشغيلية
//         </p>

//         {/* أزرار القائمة */}
//         <nav className="space-y-2.5">
//           {navItems.map(({ id, label, Icon, path }) => {
//             const isActive = id === 'my-orders'
//             return (
//               <button
//                 key={id}
//                 type="button"
//                 onClick={() => {
//                   navigate(path)
//                   onNavigate?.()
//                 }}
//                 className={`w-full h-[clamp(42px,5.2vh,54px)] flex items-center gap-3.5 px-5 2xl:px-6 rounded-lg text-[length:clamp(15px,1.9vh,20px)] cursor-pointer transition-all ${
//                   isActive
//                     ? 'bg-[#00A3FF] text-[#000000] font-bold shadow-sm'
//                     : 'bg-[#f5f5f5] dark:bg-[#0f243a] text-[#000000] dark:text-slate-200 hover:bg-[#ececec] dark:hover:bg-[#142e4a] font-medium'
//                 }`}
//               >
//                 <Icon className="w-[1.15em] h-[1.15em] shrink-0 text-[#000000] dark:text-slate-200" />
//                 <span className="text-right">{label}</span>
//               </button>
//             )
//           })}
//         </nav>
//       </div>

//       {/* الجزء السفلي */}
//       <div className="mt-auto pt-[clamp(12px,2vh,24px)]">
//         {/* بطاقة: النظام متصل وآمن */}
//         <div className="flex items-center gap-2 px-6 2xl:px-10 py-[clamp(10px,1.5vh,16px)] bg-[#e9f4fb] dark:bg-[#0e2740]">
//           <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0 animate-pulse"></span>
//           <div className="flex flex-col text-right flex-1">
//             <span className="whitespace-nowrap text-[15px] 2xl:text-[17px] font-bold text-[#000000] dark:text-white">
//               النظام متصل وآمن
//             </span>
//             <span className="text-[13px] 2xl:text-sm text-slate-500 dark:text-slate-400">
//               Sovereign Core v4.2
//             </span>
//           </div>
//           <img src={shieldIcon} alt="shield" className="w-5 h-5 object-contain flex-shrink-0" />
//         </div>

//         {/* بطاقة المستخدم */}
//         <div className="flex items-center justify-between py-[clamp(10px,1.85vh,20px)] pr-6 2xl:pr-10 pl-5 2xl:pl-7 mt-[clamp(0px,3vh,32px)] mb-2 cursor-pointer group">
//           <div className="flex items-center gap-4">
//             <img
//               src={userHani}
//               alt="م. هاني وشاح"
//               className="w-10 h-10 rounded-full object-cover"
//             />
//             <div className="text-right">
//               <h4 className="text-[15px] 2xl:text-[17px] font-bold text-[#000000] dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
//                 م. هاني وشاح
//               </h4>
//               <p className="text-[13px] 2xl:text-sm text-slate-500 dark:text-slate-400">
//                 الإدارة الطالبة
//               </p>
//             </div>
//           </div>
//           <i className="fa-solid fa-angle-left text-sm text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors"></i>
//         </div>
//       </div>
//     </div>
//   )
// }

// /* ==================== صفحة تفاصيل الطلب (خزائن ملفات حديدية - مسودة) ==================== */

// export default function DraftOrder() {
//   const navigate = useNavigate()
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [searchQuery, setSearchQuery] = useState('')
//   const [activeTab, setActiveTab] = useState('data') // افتراضياً البيانات كما في الصورة

//   // بيانات الطلب
//   const orderId = 'PR-2026-0009'
//   const title = 'خزائن ملفات حديدية'
//   const department = 'كلية الهندسة'
//   const submittedBy = 'م. خالد الزهراني'
//   const statusLabel = 'مسودة'
//   const statusDotColor = '#5A5A5A'

//   // كروت الحالة الثلاثة
//   const statusCards = [
//     {
//       title: 'أين الطلب الآن',
//       text: 'مسودة لم ترسل بعد',
//       icon: 'fa-location-dot',
//     },
//     {
//       title: 'بانتظار',
//       text: 'م. خالد الزهراني',
//       icon: 'fa-circle-user',
//     },
//     {
//       title: 'الخطوة التالية',
//       text: 'إكمال البيانات وإرسال الطلب للاعتماد',
//       icon: 'fa-circle-arrow-left',
//     },
//   ]

//   // التبويبات
//   const tabs = [
//     { id: 'data', label: 'البيانات', count: null },
//     { id: 'attachments', label: 'المرفقات', count: 1 },
//     { id: 'history', label: 'سجل الإجراءات', count: 1 },
//   ]

//   // مراحل الطلب مرتبة 1, 2, 3, 4, 5
//   const steps = [
//     { num: 1, label: 'تقديم الطلب', owner: 'تقديم الطلب', isActive: true },
//     { num: 2, label: 'الاعتماد', owner: 'الإدارة العليا', isActive: false },
//     { num: 3, label: 'طرح العروض', owner: 'قسم المشتريات', isActive: false },
//     { num: 4, label: 'فتح المظاريف', owner: 'لجنة فتح المظاريف', isActive: false },
//     { num: 5, label: 'المحضر والتوقيع', owner: 'لجنة فتح المظاريف', isActive: false },
//   ]

//   // بيانات الطلب التفصيلية
//   const detailRows = [
//     { label: 'مقدم الطلب', value: 'م. خالد الزهراني' },
//     { label: 'الإدارة', value: 'كلية الهندسة' },
//     { label: 'التصنيف', value: 'أجهزة حاسوب وتقنية' },
//     { label: 'تاريخ الإنشاء', value: '23 أكتوبر 2026' },
//     { label: 'التاريخ المطلوب', value: '30 أكتوبر 2026' },
//     { label: 'طريقة الشراء', value: 'لم تُحدد بعد' },
//   ]

//   // جدول الأصناف
//   const items = [
//     { num: 1, name: 'أجهزة حاسوب', qty: '20 جهاز', unitPrice: '2,500 ش', total: '50,000 ش' },
//   ]
//   const totalCost = '50,000 ش'
//   const justification = 'نحتاج الي اجهزة حاسوب'

//   return (
//     <div
//       dir="rtl"
//       className="min-h-screen bg-[#F8FAFC] dark:bg-[#071322] text-[#000000] dark:text-slate-100 flex flex-row transition-colors duration-200 selection:bg-sky-500 selection:text-white"
//       style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
//     >
//       {/* ==================== القائمة الجانبية (Sidebar) ==================== */}
//       <aside className="hidden lg:block w-[clamp(240px,18.4vw,353px)] shrink-0 bg-white dark:bg-[#0b1b2d] sticky top-0 h-screen overflow-y-auto select-none z-20 dark:border-l dark:border-slate-800/80">
//         <SidebarContent />
//       </aside>

//       {/* ==================== محتوى الصفحة الرئيسي ==================== */}
//       <div className="flex-1 flex flex-col min-w-0">
//         {/* شريط علوي (Top Header Bar) */}
//         <header className="h-16 bg-white dark:bg-[#0b1b2d] px-4 lg:pl-[88px] lg:pr-6 flex items-center justify-between gap-4 sticky top-0 z-10 dark:border-b dark:border-slate-800/80">
//           {/* مسار التنقل (Breadcrumbs) */}
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => setIsMobileMenuOpen(true)}
//               className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
//               aria-label="القائمة"
//             >
//               <i className="fa-solid fa-bars text-lg"></i>
//             </button>

//             <nav className="flex items-center gap-2 text-[13px] sm:text-[15px] text-slate-500 dark:text-slate-400">
//               <Link
//                 to="/dashboard"
//                 className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
//               >
//                 نظام إدارة المشتريات - الأزهر
//               </Link>
//               <i className="fa-solid fa-angle-left text-[11px] text-slate-400"></i>
//               <Link
//                 to="/dashboard"
//                 className="font-bold text-[#000000] dark:text-slate-200 hover:text-slate-700 dark:hover:text-white transition-colors"
//               >
//                 لوحة التحكم والمتابعة
//               </Link>
//             </nav>
//           </div>

//           {/* منتصف الهيدر: شريط البحث الدائري */}
//           <div className="hidden md:flex flex-1 max-w-[345px]">
//             <div className="relative w-full">
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="بحث"
//                 className="w-full h-10 bg-[#f7f7f7] dark:bg-[#0f243a] border border-slate-300 dark:border-slate-700 rounded-full pr-12 pl-4 text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-[#01B0F5]"
//               />
//               <button
//                 type="button"
//                 aria-label="بحث"
//                 className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 dark:text-slate-400"
//               >
//                 <SearchIcon className="w-6 h-6" />
//               </button>
//             </div>
//           </div>

//           {/* يسار الهيدر: الإشعارات | اللغة */}
//           <div className="flex items-center gap-4">
//             <NotificationMenu />
//             <span className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-slate-700"></span>
//             <LanguageMenu />
//           </div>
//         </header>

//         {/* ==================== محتوى الصفحة الرئيسي ==================== */}
//         <main className="w-full flex-1 px-4 sm:px-6 lg:pl-10 lg:pr-6 pt-[60px] pb-16 space-y-6 max-w-[1400px]">
//           {/* زر الرجوع + الشارات + العنوان + زر الإجراء */}
//           <div>
//             {/* زر الرجوع */}
//             <div className="flex items-center justify-between">
//               <button
//                 type="button"
//                 onClick={() => navigate('/my-orders')}
//                 className="inline-flex items-center gap-2 text-[15px] font-bold text-[#000000] dark:text-slate-300 hover:opacity-70 transition-opacity cursor-pointer"
//               >
//                 <i className="fa-solid fa-chevron-right text-xs"></i>
//                 <span>رجوع</span>
//               </button>
//             </div>

//             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4">
//               <div>
//                 {/* الشارات: رقم الطلب + الحالة */}
//                 <div className="flex items-center gap-2.5">
//                   <span className="inline-flex items-center h-[26px] px-3.5 rounded-full text-xs sm:text-sm font-semibold bg-[#EDEDED] dark:bg-slate-800 text-[#555555] dark:text-slate-300">
//                     {orderId}
//                   </span>
//                   <span className="inline-flex items-center gap-2 h-[26px] px-3.5 rounded-full text-xs sm:text-sm font-semibold bg-[#EDEDED] dark:bg-slate-800 text-[#555555] dark:text-slate-300">
//                     <span
//                       className="w-2.5 h-2.5 rounded-full shrink-0"
//                       style={{ backgroundColor: statusDotColor }}
//                     ></span>
//                     <span>{statusLabel}</span>
//                   </span>
//                 </div>

//                 {/* عنوان الطلب */}
//                 <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#000000] dark:text-white">
//                   {title}
//                 </h1>
//                 <p className="mt-2 text-sm sm:text-[15px] text-[#555555] dark:text-slate-400 font-medium">
//                   {department} · {submittedBy}
//                 </p>
//               </div>

//               {/* زر الإجراء: إكمال وإرسال */}
//               <div>
//                 <button
//                   type="button"
//                   onClick={() => navigate('/new-order')}
//                   className="h-11 px-8 sm:px-10 rounded-full bg-[#0084F4] hover:bg-[#0074db] text-white font-bold text-sm sm:text-[15px] transition-all shadow-[0_4px_14px_rgba(0,132,244,0.3)] hover:shadow-[0_6px_20px_rgba(0,132,244,0.4)] cursor-pointer"
//                 >
//                   إكمال وإرسال
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* ==================== كروت الحالة الثلاثة ==================== */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 !mt-9">
//             {statusCards.map((card) => (
//               <div
//                 key={card.title}
//                 className="bg-white dark:bg-[#0b1b2d] rounded-2xl h-[78px] px-6 flex items-center justify-between shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
//               >
//                 <div className="text-right">
//                   <h3 className="text-base font-bold text-[#000000] dark:text-white">
//                     {card.title}
//                   </h3>
//                   <p className="text-sm text-[#555555] dark:text-slate-400 font-medium mt-0.5">
//                     {card.text}
//                   </p>
//                 </div>
//                 <i
//                   className={`fa-solid ${card.icon} text-xl text-[#000000] dark:text-slate-100 shrink-0`}
//                 ></i>
//               </div>
//             ))}
//           </div>

//           {/* ==================== مراحل الطلب (Stepper مرتب 1, 2, 3, 4, 5) ==================== */}
//           <div className="bg-white dark:bg-[#0b1b2d] rounded-[24px] p-6 pb-10 shadow-[0_2px_12px_rgba(0,0,0,0.03)] !mt-10">
//             <h2 className="text-base font-bold text-[#000000] dark:text-white text-right pb-2.5 border-b border-[#E5E5E5] dark:border-slate-800">
//               مراحل الطلب
//             </h2>

//             <div className="mt-8 px-2 sm:px-6">
//               <div className="flex items-start">
//                 {steps.map((step, idx) => {
//                   const isCurrent = step.num === 1
//                   const isLast = idx === steps.length - 1
//                   return (
//                     <div
//                       key={step.num}
//                       className="flex-1 flex flex-col items-center text-center relative"
//                     >
//                       {/* الدائرة وخطوط التوصيل */}
//                       <div className="w-full flex items-center justify-center relative">
//                         {/* خط التوصيل إلى اليسار (الخطوة التالية) */}
//                         {!isLast && (
//                           <div
//                             className={`absolute top-1/2 -translate-y-1/2 left-0 right-1/2 h-[3px] z-0 ${
//                               idx === 0
//                                 ? 'bg-[#00B0F0]'
//                                 : 'bg-[#E5EDF7] dark:bg-slate-700'
//                             }`}
//                           />
//                         )}
//                         {/* خط التوصيل من اليمين (الخطوة السابقة) */}
//                         {idx > 0 && (
//                           <div
//                             className={`absolute top-1/2 -translate-y-1/2 right-0 left-1/2 h-[3px] z-0 ${
//                               idx === 1
//                                 ? 'bg-[#00B0F0]'
//                                 : 'bg-[#E5EDF7] dark:bg-slate-700'
//                             }`}
//                           />
//                         )}
//                         {/* الدائرة مرقمة بالتسلسل 1, 2, 3, 4, 5 */}
//                         <div
//                           className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold z-10 transition-colors ${
//                             isCurrent
//                               ? 'bg-[#00B0F0] text-white shadow-sm'
//                               : 'bg-[#E8F4FD] dark:bg-[#0c2438] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700'
//                           }`}
//                         >
//                           {step.num}
//                         </div>
//                       </div>

//                       {/* النصوص التوضيحية أسفل الدائرة */}
//                       <div className="mt-3 text-center">
//                         <p
//                           className={`text-sm font-semibold ${
//                             isCurrent
//                               ? 'text-[#007DEA] dark:text-[#01B0F5]'
//                               : 'text-slate-500 dark:text-slate-400'
//                           }`}
//                         >
//                           الخطوة {step.num}
//                         </p>
//                         <h4 className="text-[16px] sm:text-[17px] font-bold text-[#000000] dark:text-white mt-1 whitespace-nowrap">
//                           {step.label}
//                         </h4>
//                         <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 whitespace-nowrap">
//                           {step.owner}
//                         </p>
//                       </div>
//                     </div>
//                   )
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* ==================== تبويبات البيانات والمرفقات وسجل الإجراءات ==================== */}
//           <div className="bg-white dark:bg-[#0b1b2d] rounded-[24px] px-6 pt-4 pb-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
//             {/* شريط التبويبات */}
//             <div className="flex items-center gap-6 flex-wrap">
//               {tabs.map((tab) => {
//                 const isActive = activeTab === tab.id
//                 return (
//                   <button
//                     key={tab.id}
//                     type="button"
//                     onClick={() => setActiveTab(tab.id)}
//                     className={`relative flex items-center gap-2 py-3 text-base font-medium transition-colors cursor-pointer ${
//                       isActive
//                         ? 'text-[#007DEA] dark:text-[#01B0F5]'
//                         : 'text-[#000000] dark:text-slate-200 hover:text-[#007DEA]'
//                     }`}
//                   >
//                     <span>{tab.label}</span>
//                     {tab.count !== null && (
//                       <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#D9D9D9] dark:bg-slate-700 text-[#000000] dark:text-slate-100 text-xs font-medium">
//                         {tab.count}
//                       </span>
//                     )}
//                     {isActive && (
//                       <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#007DEA] dark:bg-[#01B0F5]" />
//                     )}
//                   </button>
//                 )
//               })}
//             </div>

//             {/* محتوى تبويب البيانات */}
//             {activeTab === 'data' && (
//               <div className="flex flex-col lg:flex-row gap-6 items-start mt-8">
//                 {/* الجزء الأيمن: بطاقة بيانات الطلب التفصيلية */}
//                 <div className="w-full lg:w-[320px] 2xl:w-[340px] shrink-0 bg-[#E8F4FD] dark:bg-[#0c2438] rounded-[24px] px-6 py-6 text-right">
//                   {detailRows.map((row, idx) => (
//                     <div
//                       key={row.label}
//                       className={`flex items-center justify-between gap-4 whitespace-nowrap h-[49px] text-[15px] font-medium text-[#000000] dark:text-white ${
//                         idx < detailRows.length - 1
//                           ? 'border-b border-[#D3E3EE] dark:border-sky-900/40'
//                           : ''
//                       }`}
//                     >
//                       <span className="font-bold text-[#000000] dark:text-white">
//                         {row.label}
//                       </span>
//                       <span className="font-semibold text-[#000000] dark:text-slate-200">
//                         {row.value}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* الجزء الأيسر: المبرر + جدول الأصناف والخدمات */}
//                 <div className="flex-1 w-full min-w-0 text-right">
//                   {/* المبرر */}
//                   <div>
//                     <h3 className="text-[17px] font-bold text-[#000000] dark:text-white">
//                       المبرر
//                     </h3>
//                     <p className="mt-2 text-[15px] text-[#555555] dark:text-slate-300 font-medium">
//                       {justification}
//                     </p>
//                   </div>

//                   {/* الأصناف والخدمات */}
//                   <div className="mt-7">
//                     <h3 className="text-[17px] font-bold text-[#000000] dark:text-white">
//                       الأصناف والخدمات
//                     </h3>

//                     <div className="mt-4 rounded-[20px] overflow-hidden border border-[#E0E0E0] dark:border-slate-800">
//                       <div className="overflow-x-auto">
//                         <table className="w-full table-auto whitespace-nowrap border-collapse text-center">
//                           <colgroup>
//                             <col style={{ width: '10%' }} />
//                             <col style={{ width: '32%' }} />
//                             <col style={{ width: '18%' }} />
//                             <col style={{ width: '20%' }} />
//                             <col style={{ width: '20%' }} />
//                           </colgroup>
//                           <thead>
//                             <tr className="h-[66px] bg-[#E8F4FD] dark:bg-[#0c2438] text-[15px] text-[#666666] dark:text-slate-300">
//                               <th className="px-3 text-center font-normal">#</th>
//                               <th className="px-3 text-center font-normal">
//                                 الصنف/ الخدمة/المواصفات
//                               </th>
//                               <th className="px-3 text-center font-normal">الكمية</th>
//                               <th className="px-3 text-center font-normal">
//                                 سعر الوحدة التقديري
//                               </th>
//                               <th className="px-3 text-center font-normal">
//                                 الإجمالي التقديري
//                               </th>
//                             </tr>
//                           </thead>
//                           <tbody className="text-[15px] text-[#000000] dark:text-slate-200">
//                             {items.map((item) => (
//                               <tr
//                                 key={item.num}
//                                 className="h-[95px] hover:bg-slate-50/60 dark:hover:bg-[#0c1f33]/40"
//                               >
//                                 <td className="px-3 text-center font-bold">{item.num}</td>
//                                 <td className="px-3 text-center font-semibold">{item.name}</td>
//                                 <td className="px-3 text-center font-semibold">{item.qty}</td>
//                                 <td className="px-3 text-center font-semibold">
//                                   {item.unitPrice}
//                                 </td>
//                                 <td className="px-3 text-center font-semibold">{item.total}</td>
//                               </tr>
//                             ))}
//                           </tbody>
//                         </table>
//                       </div>

//                       {/* إجمالي التكلفة التقديرية */}
//                       <div className="h-[52px] px-6 gap-6 whitespace-nowrap bg-[#F7F7F7] dark:bg-[#0c1f33]/40 flex items-center justify-between text-[15px]">
//                         <span className="font-medium text-[#666666] dark:text-slate-400">
//                           إجمالي التكلفة التقديرية
//                         </span>
//                         <span className="font-bold text-[#000000] dark:text-white">
//                           {totalCost}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* محتوى تبويب المرفقات */}
//             {activeTab === 'attachments' && (
//               <div className="mt-6 p-4">
//                 <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0c1f33]/40 max-w-xl">
//                   <div className="flex items-center gap-3">
//                     <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#007DEA] flex items-center justify-center">
//                       <PaperclipIcon className="w-5 h-5" />
//                     </div>
//                     <div className="text-right">
//                       <h4 className="font-bold text-sm text-[#000000] dark:text-white">
//                         مواصفات_أجهزة_الحاسوب.pdf
//                       </h4>
//                       <p className="text-xs text-slate-500">
//                         1.8 ميجابايت · بواسطة {submittedBy}
//                       </p>
//                     </div>
//                   </div>
//                   <button
//                     type="button"
//                     className="text-xs font-bold text-[#007DEA] hover:underline"
//                   >
//                     عرض الملف
//                   </button>
//                 </div>
//               </div>
//             )}

//             {/* محتوى تبويب سجل الإجراءات */}
//             {activeTab === 'history' && (
//               <div className="mt-6 space-y-4">
//                 <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-[#0c1f33] text-right">
//                   <div className="w-8 h-8 rounded-full bg-sky-100 text-[#007DEA] flex items-center justify-center shrink-0">
//                     <i className="fa-solid fa-file-circle-plus text-sm"></i>
//                   </div>
//                   <div className="space-y-1">
//                     <h4 className="font-bold text-sm text-[#000000] dark:text-white">
//                       تم إنشاء وحفظ مسودة الطلب
//                     </h4>
//                     <p className="text-xs text-slate-500">
//                       بواسطة {submittedBy} · {department}
//                     </p>
//                     <span className="text-[10px] text-slate-400">
//                       23 أكتوبر 2026 - 10:30 ص
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </main>
//       </div>

//       {/* ==================== القائمة الجانبية للشاشات الصغيرة ==================== */}
//       <div
//         className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ease-in-out ${
//           isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
//         }`}
//       >
//         <div
//           className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
//             isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
//           }`}
//           onClick={() => setIsMobileMenuOpen(false)}
//         ></div>

//         <div
//           className={`fixed top-0 right-0 w-[300px] max-w-[85vw] h-full bg-white dark:bg-[#0b1b2d] shadow-2xl z-10 overflow-y-auto select-none transition-transform duration-300 ease-in-out ${
//             isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
//           }`}
//         >
//           <button
//             onClick={() => setIsMobileMenuOpen(false)}
//             aria-label="إغلاق القائمة"
//             className="absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-10"
//           >
//             <i className="fa-solid fa-xmark text-lg"></i>
//           </button>

//           <SidebarContent onNavigate={() => setIsMobileMenuOpen(false)} />
//         </div>
//       </div>
//     </div>
//   )
// }










// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { logo, userHani, shieldIcon } from '../assets/images'
// import LanguageMenu from '../components/LanguageMenu'
// import NotificationMenu from '../components/NotificationMenu'
 
// /* ==================== الأيقونات (SVG) ==================== */
 
// const strokeProps = {
//   viewBox: '0 0 24 24',
//   fill: 'none',
//   stroke: 'currentColor',
//   strokeWidth: 2,
//   strokeLinecap: 'round',
//   strokeLinejoin: 'round',
//   'aria-hidden': true,
// }
 
// // الرئيسية: 4 مربعات مفرغة كالموجودة في الصورة تماماً
// const HomeIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <rect x="3" y="3" width="7" height="7" rx="1.5" />
//     <rect x="14" y="3" width="7" height="7" rx="1.5" />
//     <rect x="14" y="14" width="7" height="7" rx="1.5" />
//     <rect x="3" y="14" width="7" height="7" rx="1.5" />
//   </svg>
// )
 
// // طلباتي: أيقونة ملف مع زاوية مطوية بلون أسود
// const FileIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
//     <path
//       fillRule="evenodd"
//       clipRule="evenodd"
//       d="M4 4a2 2 0 0 1 2-2h8.586a2 2 0 0 1 1.414.586l4.414 4.414A2 2 0 0 1 21 8.414V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm10.5-.5v5a1 1 0 0 0 1 1h5l-6-6z"
//     />
//   </svg>
// )
 
// // طلب شراء جديد: ملف بمخطط مع علامة زائد
// const FilePlusIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5z" />
//     <path d="M14 2v5h5" />
//     <path d="M12 11v6M9 14h6" />
//   </svg>
// )
 
// // الموردين: أيقونة الموردين/المستخدمين كالموجودة بالصورة
// const UsersIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//     <circle cx="9" cy="7" r="4" />
//     <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
//     <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//   </svg>
// )
 
// const SearchIcon = (props) => (
//   <svg {...strokeProps} strokeWidth={1.5} {...props}>
//     <circle cx="11" cy="11" r="7.5" />
//     <path d="m20.5 20.5-4-4" />
//   </svg>
// )
 
// const PaperclipIcon = (props) => (
//   <svg {...strokeProps} strokeWidth={1.8} {...props}>
//     <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
//   </svg>
// )
 
// const navItems = [
//   { id: 'home', label: 'الرئيسية', Icon: HomeIcon, path: '/dashboard' },
//   { id: 'my-orders', label: 'طلباتي', Icon: FileIcon, path: '/my-orders' },
//   { id: 'new-order', label: 'طلب شراء جديد', Icon: FilePlusIcon, path: '/new-order' },
//   { id: 'suppliers', label: 'الموردين', Icon: UsersIcon, path: '/dashboard' },
// ]
 
// /* ==================== محتوى القائمة الجانبية ==================== */
 
// function SidebarContent({ onNavigate }) {
//   const navigate = useNavigate()
 
//   return (
//     <div className="min-h-full flex flex-col">
//       {/* الجزء العلوي */}
//       <div className="px-4 pt-[clamp(16px,3vh,32px)]">
//         {/* الشعار + اسم المنصة */}
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
 
//         {/* عنوان التصنيف */}
//         <p className="my-[clamp(12px,4vh,44px)] px-2 text-[length:clamp(13px,1.4vh,15px)] text-slate-500 dark:text-slate-400 font-medium">
//           القوائم التشغيلية
//         </p>
 
//         {/* أزرار القائمة */}
//         <nav className="space-y-2.5">
//           {navItems.map(({ id, label, Icon, path }) => {
//             const isActive = id === 'my-orders'
//             return (
//               <button
//                 key={id}
//                 type="button"
//                 onClick={() => {
//                   navigate(path)
//                   onNavigate?.()
//                 }}
//                 className={`w-full h-[clamp(42px,5.2vh,54px)] flex items-center gap-3.5 px-5 2xl:px-6 rounded-lg text-[length:clamp(15px,1.9vh,20px)] cursor-pointer transition-all ${
//                   isActive
//                     ? 'bg-gradient-to-l from-[#00B8F5] to-[#00A6F0] text-[#000000] font-bold shadow-sm'
//                     : 'bg-[#f5f5f5] dark:bg-[#0f243a] text-[#000000] dark:text-slate-200 hover:bg-[#ececec] dark:hover:bg-[#142e4a] font-medium'
//                 }`}
//               >
//                 <Icon className="w-[1.15em] h-[1.15em] shrink-0 text-[#000000] dark:text-slate-200" />
//                 <span className="text-right">{label}</span>
//               </button>
//             )
//           })}
//         </nav>
//       </div>
 
//       {/* الجزء السفلي */}
//       <div className="mt-auto pt-[clamp(12px,2vh,24px)]">
//         {/* بطاقة: النظام متصل وآمن */}
//         <div className="flex items-center gap-2 px-6 2xl:px-10 py-[clamp(10px,1.5vh,16px)] bg-[#e9f4fb] dark:bg-[#0e2740]">
//           <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0 animate-pulse"></span>
//           <div className="flex flex-col text-right flex-1">
//             <span className="whitespace-nowrap text-[15px] 2xl:text-[17px] font-bold text-[#000000] dark:text-white">
//               النظام متصل وآمن
//             </span>
//             <span className="text-[13px] 2xl:text-sm text-slate-500 dark:text-slate-400">
//               Sovereign Core v4.2
//             </span>
//           </div>
//           <img src={shieldIcon} alt="shield" className="w-5 h-5 object-contain flex-shrink-0" />
//         </div>
 
//         {/* بطاقة المستخدم */}
//         <div className="flex items-center justify-between py-[clamp(10px,1.85vh,20px)] pr-6 2xl:pr-10 pl-5 2xl:pl-7 mt-[clamp(0px,3vh,32px)] mb-2 cursor-pointer group">
//           <div className="flex items-center gap-4">
//             <img
//               src={userHani}
//               alt="م. هاني وشاح"
//               className="w-10 h-10 rounded-full object-cover"
//             />
//             <div className="text-right">
//               <h4 className="text-[15px] 2xl:text-[17px] font-bold text-[#000000] dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
//                 م. هاني وشاح
//               </h4>
//               <p className="text-[13px] 2xl:text-sm text-slate-500 dark:text-slate-400">
//                 الإدارة الطالبة
//               </p>
//             </div>
//           </div>
//           <i className="fa-solid fa-angle-left text-sm text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors"></i>
//         </div>
//       </div>
//     </div>
//   )
// }
 
// /* ==================== صفحة تفاصيل الطلب (خزائن ملفات حديدية - مسودة) ==================== */
 
// export default function DraftOrder() {
//   const navigate = useNavigate()
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [searchQuery, setSearchQuery] = useState('')
//   const [activeTab, setActiveTab] = useState('data') // افتراضياً البيانات كما في الصورة
 
//   // بيانات الطلب
//   const orderId = 'PR-2026-0009'
//   const title = 'خزائن ملفات حديدية'
//   const department = 'كلية الهندسة'
//   const submittedBy = 'م. خالد الزهراني'
//   const statusLabel = 'مسودة'
//   const statusDotColor = '#5A5A5A'
 
//   // كروت الحالة الثلاثة
//   const statusCards = [
//     {
//       title: 'أين الطلب الآن',
//       text: 'مسودة لم ترسل بعد',
//       icon: 'fa-location-dot',
//     },
//     {
//       title: 'بانتظار',
//       text: 'م. خالد الزهراني',
//       icon: 'fa-circle-user',
//     },
//     {
//       title: 'الخطوة التالية',
//       text: 'إكمال البيانات وإرسال الطلب للاعتماد',
//       icon: 'fa-circle-arrow-left',
//     },
//   ]
 
//   // التبويبات
//   const tabs = [
//     { id: 'data', label: 'البيانات', count: null },
//     { id: 'attachments', label: 'المرفقات', count: 1 },
//     { id: 'history', label: 'سجل الإجراءات', count: 1 },
//   ]
 
//   // مراحل الطلب مرتبة 1, 2, 3, 4, 5
//   const steps = [
//     { num: 1, label: 'تقديم الطلب', owner: 'تقديم الطلب', isActive: true },
//     { num: 2, label: 'الاعتماد', owner: 'الإدارة العليا', isActive: false },
//     { num: 3, label: 'طرح العروض', owner: 'قسم المشتريات', isActive: false },
//     { num: 4, label: 'فتح المظاريف', owner: 'لجنة فتح المظاريف', isActive: false },
//     { num: 5, label: 'المحضر والتوقيع', owner: 'لجنة فتح المظاريف', isActive: false },
//   ]
 
//   // بيانات الطلب التفصيلية
//   const detailRows = [
//     { label: 'مقدم الطلب', value: 'م. خالد الزهراني' },
//     { label: 'الإدارة', value: 'كلية الهندسة' },
//     { label: 'التصنيف', value: 'أجهزة حاسوب وتقنية' },
//     { label: 'تاريخ الإنشاء', value: '23 أكتوبر 2026' },
//     { label: 'التاريخ المطلوب', value: '30 أكتوبر 2026' },
//     { label: 'طريقة الشراء', value: 'لم تُحدد بعد' },
//   ]
 
//   // جدول الأصناف
//   const items = [
//     { num: 1, name: 'أجهزة حاسوب', qty: '20 جهاز', unitPrice: '2,500 ش', total: '50,000 ش' },
//   ]
//   const totalCost = '50,000 ش'
//   const justification = 'نحتاج الي اجهزة حاسوب'
 
//   return (
//     <div
//       dir="rtl"
//       className="min-h-screen bg-[#F2F2F2] dark:bg-[#071322] text-[#000000] dark:text-slate-100 flex flex-row transition-colors duration-200 selection:bg-sky-500 selection:text-white"
//       style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
//     >
//       {/* ==================== القائمة الجانبية (Sidebar) ==================== */}
//       <aside className="hidden lg:block w-[clamp(240px,18.4vw,353px)] shrink-0 bg-white dark:bg-[#0b1b2d] sticky top-0 h-screen overflow-y-auto select-none z-20 dark:border-l dark:border-slate-800/80">
//         <SidebarContent />
//       </aside>
 
//       {/* ==================== محتوى الصفحة الرئيسي ==================== */}
//       <div className="flex-1 flex flex-col min-w-0">
//         {/* شريط علوي (Top Header Bar) */}
//         <header className="h-16 bg-white dark:bg-[#0b1b2d] px-4 lg:pl-[88px] lg:pr-6 flex items-center justify-between gap-4 sticky top-0 z-10 dark:border-b dark:border-slate-800/80">
//           {/* مسار التنقل (Breadcrumbs) */}
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => setIsMobileMenuOpen(true)}
//               className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
//               aria-label="القائمة"
//             >
//               <i className="fa-solid fa-bars text-lg"></i>
//             </button>
 
//             <nav className="flex items-center gap-2 text-[13px] sm:text-[15px] text-slate-500 dark:text-slate-400">
//               <Link
//                 to="/dashboard"
//                 className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
//               >
//                 نظام إدارة المشتريات - الأزهر
//               </Link>
//               <i className="fa-solid fa-angle-left text-[11px] text-slate-400"></i>
//               <Link
//                 to="/dashboard"
//                 className="font-bold text-[#000000] dark:text-slate-200 hover:text-slate-700 dark:hover:text-white transition-colors"
//               >
//                 لوحة التحكم والمتابعة
//               </Link>
//             </nav>
//           </div>
 
//           {/* منتصف الهيدر: شريط البحث الدائري */}
//           <div className="hidden md:flex flex-1 max-w-[345px]">
//             <div className="relative w-full">
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="بحث"
//                 className="w-full h-10 bg-[#f7f7f7] dark:bg-[#0f243a] border border-slate-300 dark:border-slate-700 rounded-full pr-12 pl-4 text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-[#01B0F5]"
//               />
//               <button
//                 type="button"
//                 aria-label="بحث"
//                 className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 dark:text-slate-400"
//               >
//                 <SearchIcon className="w-6 h-6" />
//               </button>
//             </div>
//           </div>
 
//           {/* يسار الهيدر: الإشعارات | اللغة */}
//           <div className="flex items-center gap-4">
//             <NotificationMenu />
//             <span className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-slate-700"></span>
//             <LanguageMenu />
//           </div>
//         </header>
 
//         {/* ==================== محتوى الصفحة الرئيسي ==================== */}
//         <main className="w-full flex-1 px-4 sm:px-6 lg:pl-20 lg:pr-6 pt-[60px] pb-16 space-y-6">
//           {/* زر الرجوع + الشارات + العنوان + زر الإجراء */}
//           <div>
//             {/* زر الرجوع */}
//             <div className="flex items-center justify-between">
//               <button
//                 type="button"
//                 onClick={() => navigate('/my-orders')}
//                 className="inline-flex items-center gap-2 text-[15px] font-bold text-[#000000] dark:text-slate-300 hover:opacity-70 transition-opacity cursor-pointer"
//               >
//                 <i className="fa-solid fa-chevron-right text-xs"></i>
//                 <span>رجوع</span>
//               </button>
//             </div>
 
//             {/* الشارات: رقم الطلب + الحالة */}
//             <div className="flex items-center gap-2.5 mt-4">
//               <span className="inline-flex items-center h-[26px] px-3.5 rounded-full text-xs sm:text-sm font-semibold bg-[#EDEDED] dark:bg-slate-800 text-[#555555] dark:text-slate-300">
//                 {orderId}
//               </span>
//               <span className="inline-flex items-center gap-2 h-[26px] px-3.5 rounded-full text-xs sm:text-sm font-semibold bg-[#EDEDED] dark:bg-slate-800 text-[#555555] dark:text-slate-300">
//                 <span
//                   className="w-2.5 h-2.5 rounded-full shrink-0"
//                   style={{ backgroundColor: statusDotColor }}
//                 ></span>
//                 <span>{statusLabel}</span>
//               </span>
//             </div>
 
//             {/* العنوان + زر الإجراء */}
//             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-3">
//               <div>
//                 <h1 className="text-2xl sm:text-3xl font-extrabold text-[#000000] dark:text-white">
//                   {title}
//                 </h1>
//                 <p className="mt-2 text-sm sm:text-[15px] text-[#555555] dark:text-slate-400 font-medium">
//                   {department} · {submittedBy}
//                 </p>
//               </div>
 
//               <button
//                 type="button"
//                 onClick={() => navigate('/new-order')}
//                 className="h-11 w-full sm:w-[230px] 2xl:w-[273px] rounded-full bg-gradient-to-l from-[#00B8F5] to-[#0078EC] text-[#000000] font-bold text-sm sm:text-[15px] shadow-[0_4px_14px_rgba(0,132,244,0.3)] hover:brightness-95 transition-all cursor-pointer"
//               >
//                 إكمال وإرسال
//               </button>
//             </div>
//           </div>
 
//           {/* ==================== كروت الحالة الثلاثة ==================== */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 !mt-9">
//             {statusCards.map((card) => (
//               <div
//                 key={card.title}
//                 className="bg-white dark:bg-[#0b1b2d] rounded-2xl h-[86px] px-6 flex items-center gap-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
//               >
//                 <i
//                   className={`fa-solid ${card.icon} text-xl text-[#000000] dark:text-slate-100 shrink-0`}
//                 ></i>
//                 <div className="text-right">
//                   <h3 className="text-base font-bold text-[#000000] dark:text-white">
//                     {card.title}
//                   </h3>
//                   <p className="text-sm text-[#555555] dark:text-slate-400 font-medium mt-0.5">
//                     {card.text}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
 
//           {/* ==================== مراحل الطلب (Stepper مرتب 1, 2, 3, 4, 5) ==================== */}
//           <div className="bg-white dark:bg-[#0b1b2d] rounded-[24px] p-6 pb-10 shadow-[0_2px_12px_rgba(0,0,0,0.03)] !mt-10">
//             <h2 className="text-base font-bold text-[#000000] dark:text-white text-right pb-2.5 border-b border-[#E5E5E5] dark:border-slate-800">
//               مراحل الطلب
//             </h2>
 
//             <div className="mt-8 px-2 sm:px-6">
//               <div className="flex items-start">
//                 {steps.map((step, idx) => {
//                   const isCurrent = step.num === 1
//                   const isLast = idx === steps.length - 1
//                   return (
//                     <div
//                       key={step.num}
//                       className="flex-1 min-w-0 flex flex-col items-start text-right"
//                     >
//                       {/* المربع + خط التوصيل للخطوة التالية */}
//                       <div className="w-full flex items-center">
//                         <div
//                           className={`w-10 h-10 shrink-0 rounded-[10px] flex items-center justify-center text-sm font-bold transition-colors ${
//                             isCurrent
//                               ? 'bg-[#00B0F0] text-[#000000] shadow-[0_0_0_4px_rgba(0,176,240,0.25)]'
//                               : 'bg-[#E8F4FD] dark:bg-[#0c2438] text-slate-700 dark:text-slate-200'
//                           }`}
//                         >
//                           {step.num}
//                         </div>
//                         {!isLast && (
//                           <div
//                             className={`flex-1 h-[3px] mx-3 rounded-full ${
//                               idx === 0
//                                 ? 'bg-[#00B0F0]'
//                                 : 'bg-[#E5EDF7] dark:bg-slate-700'
//                             }`}
//                           />
//                         )}
//                       </div>
 
//                       {/* النصوص التوضيحية أسفل المربع */}
//                       <div className="mt-3">
//                         <p
//                           className={`text-sm font-semibold ${
//                             isCurrent
//                               ? 'text-[#007DEA] dark:text-[#01B0F5]'
//                               : 'text-slate-500 dark:text-slate-400'
//                           }`}
//                         >
//                           الخطوة {step.num}
//                         </p>
//                         <h4 className="text-[16px] sm:text-[17px] font-bold text-[#000000] dark:text-white mt-1 whitespace-nowrap">
//                           {step.label}
//                         </h4>
//                         <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 whitespace-nowrap">
//                           {step.owner}
//                         </p>
//                       </div>
//                     </div>
//                   )
//                 })}
//               </div>
//             </div>
//           </div>
 
//           {/* ==================== تبويبات البيانات والمرفقات وسجل الإجراءات ==================== */}
//           <div className="bg-white dark:bg-[#0b1b2d] rounded-[24px] px-6 pt-4 pb-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
//             {/* شريط التبويبات */}
//             <div className="flex items-center gap-6 flex-wrap">
//               {tabs.map((tab) => {
//                 const isActive = activeTab === tab.id
//                 return (
//                   <button
//                     key={tab.id}
//                     type="button"
//                     onClick={() => setActiveTab(tab.id)}
//                     className={`relative flex items-center gap-2 py-3 text-base font-medium transition-colors cursor-pointer ${
//                       isActive
//                         ? 'text-[#000000] dark:text-white'
//                         : 'text-[#000000] dark:text-slate-200 hover:opacity-70'
//                     }`}
//                   >
//                     <span>{tab.label}</span>
//                     {tab.count !== null && (
//                       <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#D9D9D9] dark:bg-slate-700 text-[#000000] dark:text-slate-100 text-xs font-medium">
//                         {tab.count}
//                       </span>
//                     )}
//                     {isActive && (
//                       <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#000000] dark:bg-white" />
//                     )}
//                   </button>
//                 )
//               })}
//             </div>
 
//             {/* محتوى تبويب البيانات */}
//             {activeTab === 'data' && (
//               <div className="flex flex-col lg:flex-row gap-6 lg:items-stretch mt-8">
//                 {/* اليمين: المبرر + جدول الأصناف والخدمات */}
//                 <div className="flex-1 w-full min-w-0 text-right">
//                   {/* المبرر */}
//                   <div>
//                     <h3 className="text-[17px] font-bold text-[#000000] dark:text-white">
//                       المبرر
//                     </h3>
//                     <p className="mt-2 text-[15px] text-[#555555] dark:text-slate-300 font-medium">
//                       {justification}
//                     </p>
//                   </div>
 
//                   {/* الأصناف والخدمات */}
//                   <div className="mt-7">
//                     <h3 className="text-[17px] font-bold text-[#000000] dark:text-white">
//                       الأصناف والخدمات
//                     </h3>
 
//                     <div className="mt-4 rounded-[20px] overflow-hidden border border-[#E0E0E0] dark:border-slate-800">
//                       <div className="overflow-x-auto">
//                         <table className="w-full table-auto whitespace-nowrap border-collapse text-center">
//                           <colgroup>
//                             <col style={{ width: '10%' }} />
//                             <col style={{ width: '32%' }} />
//                             <col style={{ width: '18%' }} />
//                             <col style={{ width: '20%' }} />
//                             <col style={{ width: '20%' }} />
//                           </colgroup>
//                           <thead>
//                             <tr className="h-[66px] bg-[#E8F4FD] dark:bg-[#0c2438] text-[15px] text-[#666666] dark:text-slate-300">
//                               <th className="px-3 text-center font-normal">#</th>
//                               <th className="px-3 text-center font-normal">
//                                 الصنف/ الخدمة/المواصفات
//                               </th>
//                               <th className="px-3 text-center font-normal">الكمية</th>
//                               <th className="px-3 text-center font-normal">
//                                 سعر الوحدة التقديري
//                               </th>
//                               <th className="px-3 text-center font-normal">
//                                 الإجمالي التقديري
//                               </th>
//                             </tr>
//                           </thead>
//                           <tbody className="text-[15px] text-[#000000] dark:text-slate-200">
//                             {items.map((item) => (
//                               <tr
//                                 key={item.num}
//                                 className="h-[95px] hover:bg-slate-50/60 dark:hover:bg-[#0c1f33]/40"
//                               >
//                                 <td className="px-3 text-center font-bold">{item.num}</td>
//                                 <td className="px-3 text-center font-semibold">{item.name}</td>
//                                 <td className="px-3 text-center font-semibold">{item.qty}</td>
//                                 <td className="px-3 text-center font-semibold">
//                                   {item.unitPrice}
//                                 </td>
//                                 <td className="px-3 text-center font-semibold">{item.total}</td>
//                               </tr>
//                             ))}
//                           </tbody>
//                         </table>
//                       </div>
 
//                       {/* إجمالي التكلفة التقديرية */}
//                       <div className="h-[52px] px-6 gap-6 whitespace-nowrap bg-[#F7F7F7] dark:bg-[#0c1f33]/40 flex items-center justify-between text-[15px]">
//                         <span className="font-medium text-[#666666] dark:text-slate-400">
//                           إجمالي التكلفة التقديرية
//                         </span>
//                         <span className="font-bold text-[#000000] dark:text-white">
//                           {totalCost}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
 
//                 {/* اليسار: بطاقة بيانات الطلب التفصيلية */}
//                 <div className="w-full lg:w-[clamp(320px,26.8vw,514px)] shrink-0 bg-[#E8F4FD] dark:bg-[#0c2438] rounded-[24px] px-6 py-6 text-right flex flex-col justify-center">
//                   {detailRows.map((row, idx) => (
//                     <div
//                       key={row.label}
//                       className={`flex items-center justify-between gap-4 whitespace-nowrap h-[49px] text-[15px] text-[#000000] dark:text-white ${
//                         idx < detailRows.length - 1
//                           ? 'border-b border-[#D3E3EE] dark:border-sky-900/40'
//                           : ''
//                       }`}
//                     >
//                       <span className="font-medium text-[#333333] dark:text-slate-300">
//                         {row.label}
//                       </span>
//                       <span className="font-bold text-[#000000] dark:text-white">
//                         {row.value}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
 
//             {/* محتوى تبويب المرفقات */}
//             {activeTab === 'attachments' && (
//               <div className="mt-6 p-4">
//                 <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0c1f33]/40 max-w-xl">
//                   <div className="flex items-center gap-3">
//                     <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#007DEA] flex items-center justify-center">
//                       <PaperclipIcon className="w-5 h-5" />
//                     </div>
//                     <div className="text-right">
//                       <h4 className="font-bold text-sm text-[#000000] dark:text-white">
//                         مواصفات_أجهزة_الحاسوب.pdf
//                       </h4>
//                       <p className="text-xs text-slate-500">
//                         1.8 ميجابايت · بواسطة {submittedBy}
//                       </p>
//                     </div>
//                   </div>
//                   <button
//                     type="button"
//                     className="text-xs font-bold text-[#007DEA] hover:underline"
//                   >
//                     عرض الملف
//                   </button>
//                 </div>
//               </div>
//             )}
 
//             {/* محتوى تبويب سجل الإجراءات */}
//             {activeTab === 'history' && (
//               <div className="mt-6 space-y-4">
//                 <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-[#0c1f33] text-right">
//                   <div className="w-8 h-8 rounded-full bg-sky-100 text-[#007DEA] flex items-center justify-center shrink-0">
//                     <i className="fa-solid fa-file-circle-plus text-sm"></i>
//                   </div>
//                   <div className="space-y-1">
//                     <h4 className="font-bold text-sm text-[#000000] dark:text-white">
//                       تم إنشاء وحفظ مسودة الطلب
//                     </h4>
//                     <p className="text-xs text-slate-500">
//                       بواسطة {submittedBy} · {department}
//                     </p>
//                     <span className="text-[10px] text-slate-400">
//                       23 أكتوبر 2026 - 10:30 ص
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </main>
//       </div>
 
//       {/* ==================== القائمة الجانبية للشاشات الصغيرة ==================== */}
//       <div
//         className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ease-in-out ${
//           isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
//         }`}
//       >
//         <div
//           className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
//             isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
//           }`}
//           onClick={() => setIsMobileMenuOpen(false)}
//         ></div>
 
//         <div
//           className={`fixed top-0 right-0 w-[300px] max-w-[85vw] h-full bg-white dark:bg-[#0b1b2d] shadow-2xl z-10 overflow-y-auto select-none transition-transform duration-300 ease-in-out ${
//             isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
//           }`}
//         >
//           <button
//             onClick={() => setIsMobileMenuOpen(false)}
//             aria-label="إغلاق القائمة"
//             className="absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-10"
//           >
//             <i className="fa-solid fa-xmark text-lg"></i>
//           </button>
 
//           <SidebarContent onNavigate={() => setIsMobileMenuOpen(false)} />
//         </div>
//       </div>
//     </div>
//   )
// }





import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logo, userHani, shieldIcon } from '../assets/images'
import LanguageMenu from '../components/LanguageMenu'
import NotificationMenu from '../components/NotificationMenu'
 
/* ==================== الأيقونات (SVG) ==================== */
 
const strokeProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}
 
// الرئيسية: 4 مربعات مفرغة كالموجودة في الصورة تماماً
const HomeIcon = (props) => (
  <svg {...strokeProps} {...props}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
  </svg>
)
 
// طلباتي: أيقونة ملف مع زاوية مطوية بلون أسود
const FileIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 4a2 2 0 0 1 2-2h8.586a2 2 0 0 1 1.414.586l4.414 4.414A2 2 0 0 1 21 8.414V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm10.5-.5v5a1 1 0 0 0 1 1h5l-6-6z"
    />
  </svg>
)
 
// طلب شراء جديد: ملف بمخطط مع علامة زائد
const FilePlusIcon = (props) => (
  <svg {...strokeProps} {...props}>
    <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5z" />
    <path d="M14 2v5h5" />
    <path d="M12 11v6M9 14h6" />
  </svg>
)
 
// الموردين: أيقونة الموردين/المستخدمين كالموجودة بالصورة
const UsersIcon = (props) => (
  <svg {...strokeProps} {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)
 
const SearchIcon = (props) => (
  <svg {...strokeProps} strokeWidth={1.5} {...props}>
    <circle cx="11" cy="11" r="7.5" />
    <path d="m20.5 20.5-4-4" />
  </svg>
)
 
const DownloadIcon = (props) => (
  <svg {...strokeProps} strokeWidth={1.8} {...props}>
    <path d="M12 3v12" />
    <path d="m7 11 5 5 5-5" />
    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
  </svg>
)
 
const navItems = [
  { id: 'home', label: 'الرئيسية', Icon: HomeIcon, path: '/dashboard' },
  { id: 'my-orders', label: 'طلباتي', Icon: FileIcon, path: '/my-orders' },
  { id: 'new-order', label: 'طلب شراء جديد', Icon: FilePlusIcon, path: '/new-order' },
  { id: 'suppliers', label: 'الموردين', Icon: UsersIcon, path: '/suppliers' },
]
 
/* ==================== محتوى القائمة الجانبية ==================== */
 
function SidebarContent({ onNavigate }) {
  const navigate = useNavigate()
 
  return (
    <div className="min-h-full flex flex-col">
      {/* الجزء العلوي */}
      <div className="px-4 pt-[clamp(16px,3vh,32px)]">
        {/* الشعار + اسم المنصة */}
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
 
        {/* عنوان التصنيف */}
        <p className="my-[clamp(12px,4vh,44px)] px-2 text-[length:clamp(13px,1.4vh,15px)] text-slate-500 dark:text-slate-400 font-medium">
          القوائم التشغيلية
        </p>
 
        {/* أزرار القائمة */}
        <nav className="space-y-2.5">
          {navItems.map(({ id, label, Icon, path }) => {
            const isActive = id === 'my-orders'
            return (
              <button
                key={id}
                type="button"
                onClick={() => {
                  navigate(path)
                  onNavigate?.()
                }}
                className={`w-full h-[clamp(42px,5.2vh,54px)] flex items-center gap-3.5 px-5 2xl:px-6 rounded-lg text-[length:clamp(15px,1.9vh,20px)] cursor-pointer transition-all ${
                  isActive
                    ? 'bg-gradient-to-l from-[#00B8F5] to-[#00A6F0] text-[#000000] font-bold shadow-sm'
                    : 'bg-[#f5f5f5] dark:bg-[#0f243a] text-[#000000] dark:text-slate-200 hover:bg-[#ececec] dark:hover:bg-[#142e4a] font-medium'
                }`}
              >
                <Icon className="w-[1.15em] h-[1.15em] shrink-0 text-[#000000] dark:text-slate-200" />
                <span className="text-right">{label}</span>
              </button>
            )
          })}
        </nav>
      </div>
 
      {/* الجزء السفلي */}
      <div className="mt-auto pt-[clamp(12px,2vh,24px)]">
        {/* بطاقة: النظام متصل وآمن */}
        <div className="flex items-center gap-2 px-6 2xl:px-10 py-[clamp(10px,1.5vh,16px)] bg-[#e9f4fb] dark:bg-[#0e2740]">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0 animate-pulse"></span>
          <div className="flex flex-col text-right flex-1">
            <span className="whitespace-nowrap text-[15px] 2xl:text-[17px] font-bold text-[#000000] dark:text-white">
              النظام متصل وآمن
            </span>
            <span className="text-[13px] 2xl:text-sm text-slate-500 dark:text-slate-400">
              Sovereign Core v4.2
            </span>
          </div>
          <img src={shieldIcon} alt="shield" className="w-5 h-5 object-contain flex-shrink-0" />
        </div>
 
        {/* بطاقة المستخدم */}
        <div className="flex items-center justify-between py-[clamp(10px,1.85vh,20px)] pr-6 2xl:pr-10 pl-5 2xl:pl-7 mt-[clamp(0px,3vh,32px)] mb-2 cursor-pointer group">
          <div className="flex items-center gap-4">
            <img
              src={userHani}
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/user-hani.jpg'; }}
              alt="م. هاني وشاح"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="text-right">
              <h4 className="text-[15px] 2xl:text-[17px] font-bold text-[#000000] dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                م. هاني وشاح
              </h4>
              <p className="text-[13px] 2xl:text-sm text-slate-500 dark:text-slate-400">
                الإدارة الطالبة
              </p>
            </div>
          </div>
          <i className="fa-solid fa-angle-left text-sm text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors"></i>
        </div>
      </div>
    </div>
  )
}
 
/* ==================== صفحة تفاصيل الطلب (خزائن ملفات حديدية - مسودة) ==================== */
 
export default function DraftOrder() {
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState('data') // افتراضياً البيانات كما في الصورة
 
  // بيانات الطلب
  const orderId = 'PR-2026-0009'
  const title = 'خزائن ملفات حديدية'
  const department = 'كلية الهندسة'
  const submittedBy = 'م. خالد الزهراني'
  const statusLabel = 'مسودة'
  const statusDotColor = '#5A5A5A'
 
  // كروت الحالة الثلاثة
  const statusCards = [
    {
      title: 'أين الطلب الآن',
      text: 'مسودة لم ترسل بعد',
      icon: 'fa-location-dot',
    },
    {
      title: 'بانتظار',
      text: 'م. خالد الزهراني',
      icon: 'fa-circle-user',
    },
    {
      title: 'الخطوة التالية',
      text: 'إكمال البيانات وإرسال الطلب للاعتماد',
      icon: 'fa-circle-arrow-left',
    },
  ]
 
  // التبويبات
  const tabs = [
    { id: 'data', label: 'البيانات', count: null },
    { id: 'attachments', label: 'المرفقات', count: 1 },
    { id: 'history', label: 'سجل الإجراءات', count: 1 },
  ]
 
  // مراحل الطلب مرتبة 1, 2, 3, 4, 5
  const steps = [
    { num: 1, label: 'تقديم الطلب', owner: 'تقديم الطلب', isActive: true },
    { num: 2, label: 'الاعتماد', owner: 'الإدارة العليا', isActive: false },
    { num: 3, label: 'طرح العروض', owner: 'قسم المشتريات', isActive: false },
    { num: 4, label: 'فتح المظاريف', owner: 'لجنة فتح المظاريف', isActive: false },
    { num: 5, label: 'المحضر والتوقيع', owner: 'لجنة فتح المظاريف', isActive: false },
  ]
 
  // بيانات الطلب التفصيلية
  const detailRows = [
    { label: 'مقدم الطلب', value: 'م. خالد الزهراني' },
    { label: 'الإدارة', value: 'كلية الهندسة' },
    { label: 'التصنيف', value: 'أجهزة حاسوب وتقنية' },
    { label: 'تاريخ الإنشاء', value: '23 أكتوبر 2026' },
    { label: 'التاريخ المطلوب', value: '30 أكتوبر 2026' },
    { label: 'طريقة الشراء', value: 'لم تُحدد بعد' },
  ]
 
  // جدول الأصناف
  const items = [
    { num: 1, name: 'أجهزة حاسوب', qty: '20 جهاز', unitPrice: '2,500 ش', total: '50,000 ش' },
  ]
  const totalCost = '50,000 ش'
  const justification = 'نحتاج الي اجهزة حاسوب'
 
  // المرفقات
  const attachments = [
    {
      id: 1,
      name: 'مواصفات_أجهزة_المعمل.pdf',
      meta: `1.2 م.ب · أرفقه ${submittedBy} · 25 سبتمبر 2026`,
    },
  ]
 
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#F2F2F2] dark:bg-[#071322] text-[#000000] dark:text-slate-100 flex flex-row transition-colors duration-200 selection:bg-sky-500 selection:text-white"
      style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
    >
      {/* ==================== القائمة الجانبية (Sidebar) ==================== */}
      <aside className="hidden lg:block w-[clamp(240px,18.4vw,353px)] shrink-0 bg-white dark:bg-[#0b1b2d] sticky top-0 h-screen overflow-y-auto select-none z-20 dark:border-l dark:border-slate-800/80">
        <SidebarContent />
      </aside>
 
      {/* ==================== محتوى الصفحة الرئيسي ==================== */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* شريط علوي (Top Header Bar) */}
        <header className="h-16 bg-white dark:bg-[#0b1b2d] px-4 lg:pl-[88px] lg:pr-6 flex items-center justify-between gap-4 sticky top-0 z-10 dark:border-b dark:border-slate-800/80">
          {/* مسار التنقل (Breadcrumbs) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label="القائمة"
            >
              <i className="fa-solid fa-bars text-lg"></i>
            </button>
 
            <nav className="flex items-center gap-2 text-[13px] sm:text-[15px] text-slate-500 dark:text-slate-400">
              <Link
                to="/dashboard"
                className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
              >
                نظام إدارة المشتريات - الأزهر
              </Link>
              <i className="fa-solid fa-angle-left text-[11px] text-slate-400"></i>
              <Link
                to="/dashboard"
                className="font-bold text-[#5e5e5e] dark:text-slate-200 hover:text-slate-700 dark:hover:text-white transition-colors"
              >
               طلباتي
              </Link>
            </nav>
          </div>
 
          {/* منتصف الهيدر: شريط البحث الدائري */}
          <div className="hidden md:flex flex-1 max-w-[345px]">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="بحث"
                className="w-full h-10 bg-[#f7f7f7] dark:bg-[#0f243a] border border-slate-300 dark:border-slate-700 rounded-full pr-12 pl-4 text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-[#01B0F5]"
              />
              <button
                type="button"
                aria-label="بحث"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 dark:text-slate-400"
              >
                <SearchIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
 
          {/* يسار الهيدر: الإشعارات | اللغة */}
          <div className="flex items-center gap-4">
            <NotificationMenu />
            <span className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-slate-700"></span>
            <LanguageMenu />
          </div>
        </header>
 
        {/* ==================== محتوى الصفحة الرئيسي ==================== */}
        <main className="w-full flex-1 px-4 sm:px-6 lg:pl-20 lg:pr-6 pt-[60px] pb-16 space-y-6">
          {/* زر الرجوع + الشارات + العنوان + زر الإجراء */}
          <div>
            {/* زر الرجوع */}
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => navigate('/my-orders')}
                className="inline-flex items-center gap-2 text-[15px] font-bold text-[#000000] dark:text-slate-300 hover:opacity-70 transition-opacity cursor-pointer"
              >
                <i className="fa-solid fa-chevron-right text-xs"></i>
                <span>رجوع</span>
              </button>
            </div>
 
            {/* الشارات: رقم الطلب + الحالة */}
            <div className="flex items-center gap-2.5 mt-4">
              <span className="inline-flex items-center h-[26px] px-3.5 rounded-full text-xs sm:text-sm font-semibold bg-[#EDEDED] dark:bg-slate-800 text-[#555555] dark:text-slate-300">
                {orderId}
              </span>
              <span className="inline-flex items-center gap-2 h-[26px] px-3.5 rounded-full text-xs sm:text-sm font-semibold bg-[#EDEDED] dark:bg-slate-800 text-[#555555] dark:text-slate-300">
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: statusDotColor }}
                ></span>
                <span>{statusLabel}</span>
              </span>
            </div>
 
            {/* العنوان + زر الإجراء */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-3">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#000000] dark:text-white">
                  {title}
                </h1>
                <p className="mt-2 text-sm sm:text-[15px] text-[#555555] dark:text-slate-400 font-medium">
                  {department} · {submittedBy}
                </p>
              </div>
 
              <button
                type="button"
                onClick={() => navigate('/new-order')}
                className="h-11 w-full sm:w-[230px] 2xl:w-[273px] rounded-full bg-gradient-to-l from-[#00B8F5] to-[#0078EC] text-[#000000] font-bold text-sm sm:text-[15px] shadow-[0_4px_14px_rgba(0,132,244,0.3)] hover:brightness-95 transition-all cursor-pointer"
              >
                إكمال وإرسال
              </button>
            </div>
          </div>
 
          {/* ==================== كروت الحالة الثلاثة ==================== */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 !mt-9">
            {statusCards.map((card) => (
              <div
                key={card.title}
                className="bg-white dark:bg-[#0b1b2d] rounded-2xl h-[86px] px-6 flex items-center gap-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
              >
                <i
                  className={`fa-solid ${card.icon} text-xl text-[#000000] dark:text-slate-100 shrink-0`}
                ></i>
                <div className="text-right">
                  <h3 className="text-base font-bold text-[#000000] dark:text-white">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#555555] dark:text-slate-400 font-medium mt-0.5">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
 
          {/* ==================== مراحل الطلب (Stepper مرتب 1, 2, 3, 4, 5) ==================== */}
          <div className="bg-white dark:bg-[#0b1b2d] rounded-[24px] p-6 pb-10 shadow-[0_2px_12px_rgba(0,0,0,0.03)] !mt-10">
            <h2 className="text-base font-bold text-[#000000] dark:text-white text-right pb-2.5 border-b border-[#E5E5E5] dark:border-slate-800">
              مراحل الطلب
            </h2>
 
            <div className="mt-8 px-2 sm:px-6">
              <div className="flex items-start">
                {steps.map((step, idx) => {
                  const isCurrent = step.num === 1
                  const isLast = idx === steps.length - 1
                  return (
                    <div
                      key={step.num}
                      className="flex-1 min-w-0 flex flex-col items-start text-right"
                    >
                      {/* المربع + خط التوصيل للخطوة التالية */}
                      <div className="w-full flex items-center">
                        <div
                          className={`w-10 h-10 shrink-0 rounded-[10px] flex items-center justify-center text-sm font-bold transition-colors ${
                            isCurrent
                              ? 'bg-[#00B0F0] text-[#000000] shadow-[0_0_0_4px_rgba(0,176,240,0.25)]'
                              : 'bg-[#E8F4FD] dark:bg-[#0c2438] text-slate-700 dark:text-slate-200'
                          }`}
                        >
                          {step.num}
                        </div>
                        {!isLast && (
                          <div
                            className={`flex-1 h-[3px] mx-3 rounded-full ${
                              idx === 0
                                ? 'bg-[#00B0F0]'
                                : 'bg-[#E5EDF7] dark:bg-slate-700'
                            }`}
                          />
                        )}
                      </div>
 
                      {/* النصوص التوضيحية أسفل المربع */}
                      <div className="mt-3">
                        <p
                          className={`text-sm font-semibold ${
                            isCurrent
                              ? 'text-[#007DEA] dark:text-[#01B0F5]'
                              : 'text-slate-500 dark:text-slate-400'
                          }`}
                        >
                          الخطوة {step.num}
                        </p>
                        <h4 className="text-[16px] sm:text-[17px] font-bold text-[#000000] dark:text-white mt-1 whitespace-nowrap">
                          {step.label}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 whitespace-nowrap">
                          {step.owner}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
 
          {/* ==================== تبويبات البيانات والمرفقات وسجل الإجراءات ==================== */}
          <div className="bg-white dark:bg-[#0b1b2d] rounded-[24px] px-6 pt-4 pb-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
            {/* شريط التبويبات */}
            <div className="flex items-center gap-6 flex-wrap">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id
                // البيانات: أسود | المرفقات وسجل الإجراءات: أزرق (حسب الصور)
                const activeText =
                  tab.id === 'data'
                    ? 'text-[#000000] dark:text-white'
                    : 'text-[#007DEA] dark:text-[#01B0F5]'
                const activeLine =
                  tab.id === 'data'
                    ? 'bg-[#000000] dark:bg-white'
                    : 'bg-[#007DEA] dark:bg-[#01B0F5]'
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex items-center gap-2 py-3 text-base font-medium transition-colors cursor-pointer ${
                      isActive
                        ? activeText
                        : 'text-[#000000] dark:text-slate-200 hover:opacity-70'
                    }`}
                  >
                    <span>{tab.label}</span>
                    {tab.count !== null && (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#D9D9D9] dark:bg-slate-700 text-[#000000] dark:text-slate-100 text-xs font-medium">
                        {tab.count}
                      </span>
                    )}
                    {isActive && (
                      <span className={`absolute bottom-0 left-0 right-0 h-[2px] ${activeLine}`} />
                    )}
                  </button>
                )
              })}
            </div>
 
            {/* محتوى تبويب البيانات */}
            {activeTab === 'data' && (
              <div className="flex flex-col lg:flex-row gap-6 lg:items-stretch mt-8">
                {/* اليمين: المبرر + جدول الأصناف والخدمات */}
                <div className="flex-1 w-full min-w-0 text-right">
                  {/* المبرر */}
                  <div>
                    <h3 className="text-[17px] font-bold text-[#000000] dark:text-white">
                      المبرر
                    </h3>
                    <p className="mt-2 text-[15px] text-[#555555] dark:text-slate-300 font-medium">
                      {justification}
                    </p>
                  </div>
 
                  {/* الأصناف والخدمات */}
                  <div className="mt-7">
                    <h3 className="text-[17px] font-bold text-[#000000] dark:text-white">
                      الأصناف والخدمات
                    </h3>
 
                    <div className="mt-4 rounded-[20px] overflow-hidden border border-[#E0E0E0] dark:border-slate-800">
                      <div className="overflow-x-auto">
                        <table className="w-full table-auto whitespace-nowrap border-collapse text-center">
                          <colgroup>
                            <col style={{ width: '10%' }} />
                            <col style={{ width: '32%' }} />
                            <col style={{ width: '18%' }} />
                            <col style={{ width: '20%' }} />
                            <col style={{ width: '20%' }} />
                          </colgroup>
                          <thead>
                            <tr className="h-[66px] bg-[#E8F4FD] dark:bg-[#0c2438] text-[15px] text-[#666666] dark:text-slate-300">
                              <th className="px-3 text-center font-normal">#</th>
                              <th className="px-3 text-center font-normal">
                                الصنف/ الخدمة/المواصفات
                              </th>
                              <th className="px-3 text-center font-normal">الكمية</th>
                              <th className="px-3 text-center font-normal">
                                سعر الوحدة التقديري
                              </th>
                              <th className="px-3 text-center font-normal">
                                الإجمالي التقديري
                              </th>
                            </tr>
                          </thead>
                          <tbody className="text-[15px] text-[#000000] dark:text-slate-200">
                            {items.map((item) => (
                              <tr
                                key={item.num}
                                className="h-[95px] hover:bg-slate-50/60 dark:hover:bg-[#0c1f33]/40"
                              >
                                <td className="px-3 text-center font-bold">{item.num}</td>
                                <td className="px-3 text-center font-semibold">{item.name}</td>
                                <td className="px-3 text-center font-semibold">{item.qty}</td>
                                <td className="px-3 text-center font-semibold">
                                  {item.unitPrice}
                                </td>
                                <td className="px-3 text-center font-semibold">{item.total}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
 
                      {/* إجمالي التكلفة التقديرية */}
                      <div className="h-[52px] px-6 gap-6 whitespace-nowrap bg-[#F7F7F7] dark:bg-[#0c1f33]/40 flex items-center justify-between text-[15px]">
                        <span className="font-medium text-[#666666] dark:text-slate-400">
                          إجمالي التكلفة التقديرية
                        </span>
                        <span className="font-bold text-[#000000] dark:text-white">
                          {totalCost}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
 
                {/* اليسار: بطاقة بيانات الطلب التفصيلية */}
                <div className="w-full lg:w-[clamp(320px,26.8vw,514px)] shrink-0 bg-[#E8F4FD] dark:bg-[#0c2438] rounded-[24px] px-6 py-6 text-right flex flex-col justify-center">
                  {detailRows.map((row, idx) => (
                    <div
                      key={row.label}
                      className={`flex items-center justify-between gap-4 whitespace-nowrap h-[49px] text-[15px] text-[#000000] dark:text-white ${
                        idx < detailRows.length - 1
                          ? 'border-b border-[#D3E3EE] dark:border-sky-900/40'
                          : ''
                      }`}
                    >
                      <span className="font-medium text-[#333333] dark:text-slate-300">
                        {row.label}
                      </span>
                      <span className="font-bold text-[#000000] dark:text-white">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
 
            {/* محتوى تبويب المرفقات */}
            {activeTab === 'attachments' && (
              <div className="mt-6 space-y-3">
                {attachments.map((file) => (
                  <div
                    key={file.id}
                    className="flex items-center justify-between gap-4 h-[82px] px-6 rounded-2xl bg-[#E8F4FD] dark:bg-[#0c2438]"
                  >
                    {/* الأيقونة + الاسم + التفاصيل */}
                    <div className="flex items-center gap-4 min-w-0">
                      <FileIcon className="w-6 h-6 shrink-0 text-[#0084F4]" />
                      <div className="text-right min-w-0">
                        <h4 className="text-[17px] font-bold text-[#000000] dark:text-white truncate">
                          {file.name}
                        </h4>
                        <p className="mt-0.5 text-[13px] font-medium text-[#6B7A90] dark:text-slate-400">
                          {file.meta}
                        </p>
                      </div>
                    </div>
 
                    {/* زر التحميل */}
                    <button
                      type="button"
                      aria-label="تحميل الملف"
                      className="shrink-0 text-[#6B7280] hover:text-[#000000] dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
                    >
                      <DownloadIcon className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
 
            {/* محتوى تبويب سجل الإجراءات */}
            {activeTab === 'history' && (
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-[#0c1f33] text-right">
                  <div className="w-8 h-8 rounded-full bg-sky-100 text-[#007DEA] flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-file-circle-plus text-sm"></i>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-sm text-[#000000] dark:text-white">
                      تم إنشاء وحفظ مسودة الطلب
                    </h4>
                    <p className="text-xs text-slate-500">
                      بواسطة {submittedBy} · {department}
                    </p>
                    <span className="text-[10px] text-slate-400">
                      23 أكتوبر 2026 - 10:30 ص
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
 
      {/* ==================== القائمة الجانبية للشاشات الصغيرة ==================== */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
 
        <div
          className={`fixed top-0 right-0 w-[300px] max-w-[85vw] h-full bg-white dark:bg-[#0b1b2d] shadow-2xl z-10 overflow-y-auto select-none transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="إغلاق القائمة"
            className="absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-10"
          >
            <i className="fa-solid fa-xmark text-lg"></i>
          </button>
 
          <SidebarContent onNavigate={() => setIsMobileMenuOpen(false)} />
        </div>
      </div>
    </div>
  )
}
 