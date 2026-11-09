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

// const FilesFilledIcon = (props) => (
//   <svg
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     stroke="currentColor"
//     strokeWidth={1.5}
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     aria-hidden="true"
//     {...props}
//   >
//     <path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z" />
//     <path d="M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8" fill="none" />
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

// const navItems = [
//   { id: 'home', label: 'الرئيسية', Icon: HomeIcon, path: '/dashboard' },
//   {
//     id: 'my-orders',
//     label: 'طلباتي',
//     Icon: FileIcon,
//     ActiveIcon: FilesFilledIcon,
//     path: '/my-orders',
//   },
//   { id: 'new-order', label: 'طلب شراء جديد', Icon: FilePlusIcon, path: '/new-order' },
//   { id: 'suppliers', label: 'الموردين', Icon: TruckIcon, path: '/dashboard' },
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
//         <p className="my-[clamp(12px,4vh,44px)] px-2 text-[length:clamp(13px,1.4vh,15px)] text-slate-500 dark:text-slate-400">
//           القوائم التشغيلية
//         </p>

//         {/* أزرار القائمة */}
//         <nav className="space-y-2">
//           {navItems.map(({ id, label, Icon, ActiveIcon, path }) => {
//             const isActive = id === 'my-orders'
//             const CurrentIcon = isActive && ActiveIcon ? ActiveIcon : Icon
//             return (
//               <button
//                 key={id}
//                 type="button"
//                 onClick={() => {
//                   onNavigate?.()
//                   navigate(path)
//                 }}
//                 className={`w-full flex items-center justify-between px-3.5 h-[clamp(44px,5vh,52px)] rounded-xl text-[length:clamp(13px,1.5vh,15px)] font-bold transition-all cursor-pointer ${
//                   isActive
//                     ? 'bg-[#00B0F0] text-white shadow-sm'
//                     : 'text-[#000000] dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
//                 }`}
//               >
//                 <span className="truncate">{label}</span>
//                 <CurrentIcon className="w-5 h-5 shrink-0" />
//               </button>
//             )
//           })}
//         </nav>
//       </div>

//       {/* الجزء السفلي */}
//       <div className="mt-auto p-4 space-y-4">
//         {/* بطاقة حالة النظام */}
//         <div className="bg-[#E9F7FE] dark:bg-sky-950/40 rounded-xl p-3 flex items-center justify-between text-xs">
//           <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
//           <div className="text-right">
//             <p className="font-semibold text-slate-800 dark:text-slate-200">
//               النظام متصل وآمن
//             </p>
//             <p className="text-[10px] text-slate-400">Sovereign Core v4.2</p>
//           </div>
//           <img
//             src={shieldIcon}
//             alt="حماية"
//             className="w-4 h-4 object-contain opacity-80"
//           />
//         </div>

//         {/* بطاقة المستخدم */}
//         <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
//           <i className="fa-solid fa-angle-left text-xs text-slate-400"></i>
//           <div className="flex items-center gap-2 text-right">
//             <div>
//               <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
//                 م. هاني وشاح
//               </p>
//               <p className="text-[10px] text-slate-400">الإدارة الطالبة</p>
//             </div>
//             <img
//               src={userHani}
//               alt="م. هاني وشاح"
//               className="w-8 h-8 rounded-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// /* ==================== صفحة تفاصيل الطلب (خزائن ملفات حديدية - بانتظار الاعتماد) ==================== */

// export default function PendingApprovalOrder() {
//   const navigate = useNavigate()
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [searchQuery, setSearchQuery] = useState('')
//   const [activeTab, setActiveTab] = useState('attachments') // افتراضياً المرفقات كالصورة

//   // بيانات الطلب
//   const orderId = 'PR-2026-0009'
//   const title = 'خزائن ملفات حديدية'
//   const department = 'كلية الهندسة'
//   const submittedBy = 'م. خالد الزهراني'
//   const statusLabel = 'بانتظار الاعتماد'
//   const statusDotColor = '#FF8A1F'

//   const whereNow = 'لدى الإدارة العليا'
//   const waitingFor = 'الإدارة العليا (الاعتماد)'
//   const nextStep = 'اعتماد الطلب أو إرجاعه للتعديل أو رفضه'
//   const delayedText = 'متأخر: بانتظار الاعتماد منذ 5 أيام'

//   // التبويبات
//   const tabs = [
//     { id: 'data', label: 'البيانات', count: null },
//     { id: 'attachments', label: 'المرفقات', count: 0 },
//     { id: 'history', label: 'سجل الإجراءات', count: 1 },
//   ]

//   // تفاصيل الطلب
//   const detailRows = [
//     { label: 'مقدم الطلب', value: 'م. خالد الزهراني' },
//     { label: 'الإدارة', value: 'كلية الهندسة' },
//     { label: 'التصنيف', value: 'أثاث مكتبي' },
//     { label: 'تاريخ الإنشاء', value: '19 أكتوبر 2026' },
//     { label: 'التاريخ المطلوب', value: '30 أكتوبر 2026' },
//     { label: 'طريقة الشراء', value: 'لم تُحدد بعد' },
//   ]

//   const items = [
//     { num: 1, name: 'خزائن ملفات حديدية', qty: '10 خزانة', unitPrice: '500 ش', total: '5,000 ش' },
//   ]

//   const totalCost = '5,000 ش'
//   const justification = 'نحتاج إلى خزائن ملفات حديدية لتنظيم وحفظ وثائق وملفات الكلية بشكل آمن ومنظم.'
//   const historyAction = 'تم تقديم الطلب وإرساله للاعتماد'
//   const historyDate = '19 أكتوبر 2026 - 09:15 ص'

//   return (
//     <div
//       dir="rtl"
//       className="min-h-screen bg-[#f5f5f5] dark:bg-[#071322] text-[#000000] dark:text-slate-100 flex flex-row transition-colors duration-200 selection:bg-sky-500 selection:text-white"
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
//         <main className="w-full flex-1 px-4 sm:px-6 lg:pl-10 lg:pr-6 pt-[50px] pb-16 space-y-6 max-w-[1400px]">
//           {/* زر الرجوع والشارات والعنوان الرئيسي */}
//           <div>
//             {/* زر الرجوع */}
//             <button
//               type="button"
//               onClick={() => navigate('/my-orders')}
//               className="inline-flex items-center gap-2 text-base font-medium text-[#000000] dark:text-slate-300 hover:text-sky-600 transition-colors cursor-pointer"
//             >
//               <i className="fa-solid fa-chevron-right text-xs"></i>
//               <span>رجوع</span>
//             </button>

//             {/* صف العنوان + الشارات + زر الإجراء */}
//             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-3">
//               <div>
//                 {/* الشارات: رقم الطلب + الحالة */}
//                 <div className="flex items-center gap-2.5">
//                   <span className="inline-flex items-center h-[26px] px-3 rounded-full text-sm font-medium bg-[#E5E5E5] dark:bg-slate-800 text-[#000000] dark:text-slate-300">
//                     {orderId}
//                   </span>
//                   <span className="inline-flex items-center gap-2 h-[26px] px-3 rounded-full text-sm font-medium bg-[#FFF3E0] text-[#F28C1E] dark:bg-amber-950/40 dark:text-amber-400">
//                     <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: statusDotColor }}></span>
//                     <span>{statusLabel}</span>
//                   </span>
//                 </div>

//                 {/* عنوان الطلب */}
//                 <h1 className="mt-2.5 text-2xl sm:text-3xl font-extrabold text-[#000000] dark:text-white">
//                   {title}
//                 </h1>
//                 <p className="mt-2 text-sm sm:text-[15px] text-[#666666] dark:text-slate-400 font-medium">
//                   {department} · {submittedBy}
//                 </p>
//               </div>

//               {/* زر الإجراء: إكمال وإرسال */}
//               <button
//                 type="button"
//                 onClick={() => navigate('/new-order')}
//                 className="h-11 px-7 rounded-2xl bg-[#00B0F0] hover:bg-[#009CD8] text-white font-bold text-sm transition-all shadow-sm cursor-pointer self-start sm:self-center"
//               >
//                 <span>إكمال وإرسال</span>
//               </button>
//             </div>
//           </div>

//           {/* ==================== كروت الحالة الثلاثة ==================== */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 !mt-6">
//             {/* كرت 1: أين الطلب الآن */}
//             <div className="bg-white dark:bg-[#0b1b2d] rounded-[18px] h-[80px] px-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex items-center gap-4">
//               <i className="fa-solid fa-location-dot text-xl text-[#000000] dark:text-slate-200 w-5 text-center"></i>
//               <div className="text-right">
//                 <h3 className="text-base font-bold text-[#000000] dark:text-white">
//                   أين الطلب الآن
//                 </h3>
//                 <p className="text-sm text-[#666666] dark:text-slate-400 font-medium mt-0.5">
//                   {whereNow}
//                 </p>
//               </div>
//             </div>

//             {/* كرت 2: بانتظار */}
//             <div className="bg-white dark:bg-[#0b1b2d] rounded-[18px] h-[80px] px-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex items-center gap-4">
//               <i className="fa-solid fa-circle-user text-xl text-[#000000] dark:text-slate-200 w-5 text-center"></i>
//               <div className="text-right">
//                 <h3 className="text-base font-bold text-[#000000] dark:text-white">
//                   بانتظار
//                 </h3>
//                 <p className="text-sm text-[#666666] dark:text-slate-400 font-medium mt-0.5">
//                   {waitingFor}
//                 </p>
//               </div>
//             </div>

//             {/* كرت 3: الخطوة التالية */}
//             <div className="bg-white dark:bg-[#0b1b2d] rounded-[18px] h-[80px] px-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex items-center gap-4">
//               <i className="fa-solid fa-circle-arrow-left text-[22px] text-[#000000] dark:text-white w-5 text-center"></i>
//               <div className="text-right">
//                 <h3 className="text-base font-bold text-[#000000] dark:text-white">
//                   الخطوة التالية
//                 </h3>
//                 <p className="text-sm text-[#666666] dark:text-slate-400 font-medium mt-0.5">
//                   {nextStep}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* ==================== شريط التنبيه بالتأخير ==================== */}
//           <div className="w-full rounded-full border border-[#FF4D4F] bg-[#FFF1F0]/70 dark:bg-rose-950/20 py-3.5 px-6 flex items-center justify-end gap-2.5 shadow-sm">
//             <span className="text-[15px] font-bold text-[#000000] dark:text-slate-200">
//               {delayedText}
//             </span>
//             <span className="w-5 h-5 rounded-full bg-[#FF4D4F] text-white flex items-center justify-center text-xs shrink-0">
//               <i className="fa-solid fa-clock text-[11px]"></i>
//             </span>
//           </div>

//           {/* ==================== مراحل الطلب (Stepper) ==================== */}
//           <div className="bg-white dark:bg-[#0b1b2d] rounded-[24px] p-6 pb-10 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
//             <h2 className="text-[17px] leading-6 font-bold text-[#000000] dark:text-white text-right pb-3 border-b border-[#E5E5E5] dark:border-slate-800">
//               مراحل الطلب
//             </h2>

//             {/* خطوات التايملاين */}
//             <div className="mt-8 flex items-start justify-between gap-0 w-full overflow-x-auto pb-4">
//               {/* الخطوة 1: كرت أخضر منجز مع أيقونة الصح */}
//               <div className="shrink-0 bg-[#EBFDF2] dark:bg-emerald-950/30 border-2 border-[#22C55E] rounded-[20px] px-5 py-3.5 flex items-center justify-between min-w-[210px] sm:min-w-[240px] h-[88px]">
//                 <div className="text-right">
//                   <span className="text-[13px] font-medium text-[#16A34A] dark:text-emerald-400 block">
//                     الخطوة 1
//                   </span>
//                   <h4 className="text-[17px] font-bold text-[#000000] dark:text-white mt-0.5">
//                     تقديم الطلب
//                   </h4>
//                   <p className="text-[12px] text-[#666666] dark:text-slate-400 mt-0.5">
//                     تم تقديم الطلب
//                   </p>
//                 </div>
//                 <div className="w-8 h-8 rounded-lg bg-[#0F5132] flex items-center justify-center text-white shrink-0 mr-3">
//                   <i className="fa-solid fa-check text-sm font-bold"></i>
//                 </div>
//               </div>

//               {/* خط الوصل 1 -> 2 */}
//               <div className="flex-1 min-w-[24px] h-[3px] bg-[#00B0F0] mt-[42px]"></div>

//               {/* الخطوة 2: الدائرة الزرقاء (نشطة) */}
//               <div className="flex flex-col items-center text-center shrink-0 min-w-[90px] sm:min-w-[120px]">
//                 <div className="mt-6 w-10 h-10 rounded-full bg-[#00B0F0] text-white flex items-center justify-center font-bold text-base shadow-sm">
//                   2
//                 </div>
//                 <span className="mt-2 text-[13px] font-medium text-slate-500 dark:text-slate-400">
//                   الخطوة 2
//                 </span>
//                 <h4 className="mt-0.5 text-[16px] font-bold text-[#000000] dark:text-white">
//                   الاعتماد
//                 </h4>
//                 <p className="mt-0.5 text-xs text-[#666666] dark:text-slate-400">
//                   الإدارة العليا
//                 </p>
//               </div>

//               {/* خط الوصل 2 -> 3 */}
//               <div className="flex-1 min-w-[24px] h-[3px] bg-[#00B0F0] mt-[42px]"></div>

//               {/* الخطوة 3: طرح العروض */}
//               <div className="flex flex-col items-center text-center shrink-0 min-w-[90px] sm:min-w-[120px]">
//                 <div className="mt-6 w-10 h-10 rounded-full bg-[#E0F2FE] dark:bg-slate-800 text-[#0090D8] dark:text-sky-400 flex items-center justify-center font-bold text-base">
//                   3
//                 </div>
//                 <span className="mt-2 text-[13px] font-medium text-slate-500 dark:text-slate-400">
//                   الخطوة 3
//                 </span>
//                 <h4 className="mt-0.5 text-[16px] font-bold text-[#000000] dark:text-white">
//                   طرح العروض
//                 </h4>
//                 <p className="mt-0.5 text-xs text-[#666666] dark:text-slate-400">
//                   قسم المشتريات
//                 </p>
//               </div>

//               {/* خط الوصل 3 -> 4 */}
//               <div className="flex-1 min-w-[24px] h-[2px] bg-[#D9EDF9] dark:bg-slate-700 mt-[43px]"></div>

//               {/* الخطوة 4: فتح المظاريف */}
//               <div className="flex flex-col items-center text-center shrink-0 min-w-[90px] sm:min-w-[120px]">
//                 <div className="mt-6 w-10 h-10 rounded-full bg-[#E0F2FE] dark:bg-slate-800 text-[#0090D8] dark:text-sky-400 flex items-center justify-center font-bold text-base">
//                   4
//                 </div>
//                 <span className="mt-2 text-[13px] font-medium text-slate-500 dark:text-slate-400">
//                   الخطوة 4
//                 </span>
//                 <h4 className="mt-0.5 text-[16px] font-bold text-[#000000] dark:text-white">
//                   فتح المظاريف
//                 </h4>
//                 <p className="mt-0.5 text-xs text-[#666666] dark:text-slate-400">
//                   لجنة فتح المظاريف
//                 </p>
//               </div>

//               {/* خط الوصل 4 -> 5 */}
//               <div className="flex-1 min-w-[24px] h-[2px] bg-[#D9EDF9] dark:bg-slate-700 mt-[43px]"></div>

//               {/* الخطوة 5: المحضر والتوقيع */}
//               <div className="flex flex-col items-center text-center shrink-0 min-w-[90px] sm:min-w-[120px]">
//                 <div className="mt-6 w-10 h-10 rounded-full bg-[#E0F2FE] dark:bg-slate-800 text-[#0090D8] dark:text-sky-400 flex items-center justify-center font-bold text-base">
//                   5
//                 </div>
//                 <span className="mt-2 text-[13px] font-medium text-slate-500 dark:text-slate-400">
//                   الخطوة 5
//                 </span>
//                 <h4 className="mt-0.5 text-[16px] font-bold text-[#000000] dark:text-white">
//                   المحضر والتوقيع
//                 </h4>
//                 <p className="mt-0.5 text-xs text-[#666666] dark:text-slate-400">
//                   لجنة فتح المظاريف
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* ==================== تبويبات البيانات والمرفقات وسجل الإجراءات ==================== */}
//           <div className="bg-white dark:bg-[#0b1b2d] rounded-[24px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] min-h-[380px]">
//             {/* شريط التبويبات العلوي */}
//             <div className="flex items-center gap-8 border-b border-[#E5E5E5] dark:border-slate-800">
//               {tabs.map((tab) => {
//                 const isActive = activeTab === tab.id
//                 return (
//                   <button
//                     key={tab.id}
//                     type="button"
//                     onClick={() => setActiveTab(tab.id)}
//                     className={`flex items-center gap-2 pb-3 text-[16px] font-bold transition-all cursor-pointer border-b-2 -mb-[1px] ${
//                       isActive
//                         ? 'border-[#00B0F0] text-[#000000] dark:text-white'
//                         : 'border-transparent text-[#666666] dark:text-slate-400 hover:text-black dark:hover:text-white'
//                     }`}
//                   >
//                     <span>{tab.label}</span>
//                     {tab.count !== null && (
//                       <span
//                         className={`min-w-6 h-6 px-1.5 rounded-full text-xs font-semibold flex items-center justify-center ${
//                           isActive
//                             ? 'bg-[#E5E5E5] dark:bg-slate-700 text-[#000000] dark:text-slate-200'
//                             : 'bg-[#EDEDED] dark:bg-slate-800 text-[#666666] dark:text-slate-400'
//                         }`}
//                       >
//                         {tab.count}
//                       </span>
//                     )}
//                   </button>
//                 )
//               })}
//             </div>

//             {/* محتوى تبويب البيانات */}
//             {activeTab === 'data' && (
//               <div className="flex flex-col lg:flex-row gap-6 items-start mt-6">
//                 {/* الجزء الأيمن: المبرر + جدول الأصناف والخدمات */}
//                 <div className="flex-1 w-full min-w-0 text-right lg:pr-[11px]">
//                   {/* المبرر */}
//                   <div>
//                     <h3 className="text-[17px] font-bold text-[#000000] dark:text-white">
//                       المبرر
//                     </h3>
//                     <p className="mt-2 text-[15px] text-[#555555] dark:text-slate-300">
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
//                             <col style={{ width: '13%' }} />
//                             <col style={{ width: '29%' }} />
//                             <col style={{ width: '17%' }} />
//                             <col style={{ width: '16.5%' }} />
//                             <col style={{ width: '24.5%' }} />
//                           </colgroup>
//                           <thead>
//                             <tr className="h-[66px] bg-[#E8F4FD] dark:bg-[#0c2438] text-[15px] text-[#666666] dark:text-slate-300">
//                               <th className="px-3 text-center font-normal">#</th>
//                               <th className="px-3 text-center font-normal">الصنف/الخدمة والمواصفات</th>
//                               <th className="px-3 text-center font-normal">الكمية</th>
//                               <th className="px-3 text-center font-normal">سعر الوحدة التقديري</th>
//                               <th className="px-3 text-center font-normal">الإجمالي التقديري</th>
//                             </tr>
//                           </thead>
//                           <tbody className="text-[15px] text-[#000000] dark:text-slate-200">
//                             {items.map((item) => (
//                               <tr key={item.num} className="h-[103px] hover:bg-slate-50/60 dark:hover:bg-[#0c1f33]/40">
//                                 <td className="px-3 text-center font-bold">{item.num}</td>
//                                 <td className="px-3 text-center font-semibold">{item.name}</td>
//                                 <td className="px-3 text-center font-semibold">{item.qty}</td>
//                                 <td className="px-3 text-center font-semibold">{item.unitPrice}</td>
//                                 <td className="px-3 text-center font-semibold">{item.total}</td>
//                               </tr>
//                             ))}
//                           </tbody>
//                         </table>
//                       </div>

//                       {/* إجمالي التكلفة التقديرية */}
//                       <div className="h-[50px] px-6 gap-6 whitespace-nowrap bg-[#F7F7F7] dark:bg-[#0c1f33]/40 flex items-center justify-between text-[15px]">
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

//                 {/* الجزء الأيسر: بطاقة بيانات الطلب التفصيلية */}
//                 <div className="w-full lg:w-[36%] lg:max-w-[512px] shrink-0 bg-[#E8F4FD] dark:bg-[#0c2438] rounded-[24px] px-6 py-6 text-right">
//                   {detailRows.map((row, idx) => (
//                     <div
//                       key={row.label}
//                       className={`flex items-center justify-between gap-4 whitespace-nowrap h-[49px] text-[15px] font-medium text-[#000000] dark:text-white ${
//                         idx < detailRows.length - 1
//                           ? 'border-b border-[#D3E3EE] dark:border-sky-900/40'
//                           : ''
//                       }`}
//                     >
//                       <span className="font-medium">{row.label}</span>
//                       <span className="font-bold">{row.value}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* محتوى تبويب المرفقات (Empty State كالصورة تماماً) */}
//             {activeTab === 'attachments' && (
//               <div className="py-20 flex flex-col items-center justify-center text-center select-none">
//                 {/* أيقونة المشبك المائل بزاوية 45 درجة */}
//                 <svg
//                   className="w-14 h-14 text-[#000000] dark:text-slate-200 stroke-current -rotate-45"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   strokeWidth="1.8"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
//                 </svg>
//                 <h3 className="mt-5 text-[17px] font-bold text-[#000000] dark:text-white">
//                   لا توجد مرفقات
//                 </h3>
//                 <p className="mt-2 text-sm text-[#777777] dark:text-slate-400 font-normal">
//                   لم تُرفق أي ملفات مع هذا الطلب.
//                 </p>
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
//                       {historyAction}
//                     </h4>
//                     <p className="text-xs text-slate-500">بواسطة {submittedBy} · {department}</p>
//                     <span className="text-[10px] text-slate-400">{historyDate}</span>
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










// 1010100100






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
 
// const FilesFilledIcon = (props) => (
//   <svg
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     stroke="currentColor"
//     strokeWidth={1.5}
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     aria-hidden="true"
//     {...props}
//   >
//     <path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z" />
//     <path d="M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8" fill="none" />
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
 
// const CheckIcon = (props) => (
//   <svg
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="3"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     aria-hidden="true"
//     {...props}
//   >
//     <polyline points="20 6 9 17 4 12" />
//   </svg>
// )
 
// const PaperclipIcon = (props) => (
//   <svg {...strokeProps} strokeWidth={1.8} {...props}>
//     <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
//   </svg>
// )
 
// const navItems = [
//   { id: 'home', label: 'الرئيسية', Icon: HomeIcon, path: '/dashboard' },
//   {
//     id: 'my-orders',
//     label: 'طلباتي',
//     Icon: FileIcon,
//     ActiveIcon: FilesFilledIcon,
//     path: '/my-orders',
//   },
//   { id: 'new-order', label: 'طلب شراء جديد', Icon: FilePlusIcon, path: '/new-order' },
//   { id: 'suppliers', label: 'الموردين', Icon: TruckIcon, path: '/dashboard' },
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
//         <p className="my-[clamp(12px,4vh,44px)] px-2 text-[length:clamp(13px,1.4vh,15px)] text-slate-500 dark:text-slate-400">
//           القوائم التشغيلية
//         </p>
 
//         {/* أزرار القائمة */}
//         <nav className="space-y-2">
//           {navItems.map(({ id, label, Icon, ActiveIcon, path }) => {
//             const isActive = id === 'my-orders'
//             const CurrentIcon = isActive && ActiveIcon ? ActiveIcon : Icon
//             return (
//               <button
//                 key={id}
//                 type="button"
//                 onClick={() => {
//                   navigate(path)
//                   onNavigate?.()
//                 }}
//                 className={`w-full h-[clamp(40px,5.2vh,56px)] flex items-center gap-3 px-5 2xl:px-6 rounded-lg text-[length:clamp(16px,2.04vh,22px)] font-medium text-right cursor-pointer transition-all ${
//                   isActive
//                     ? 'bg-[#00B0F0] text-[#000000] shadow-sm font-bold'
//                     : 'bg-[#f5f5f5] dark:bg-[#0f243a] text-[#000000] dark:text-slate-200 hover:bg-[#ececec] dark:hover:bg-[#142e4a]'
//                 }`}
//               >
//                 <CurrentIcon className="w-[1em] h-[1em] shrink-0" />
//                 <span>{label}</span>
//               </button>
//             )
//           })}
//         </nav>
//       </div>
 
//       {/* الجزء السفلي */}
//       <div className="mt-auto pt-[clamp(12px,2vh,24px)]">
//         {/* بطاقة: النظام متصل وآمن */}
//         <div className="flex items-center gap-2 px-6 2xl:px-10 py-[clamp(10px,1.5vh,16px)] bg-[#e9f4fb] dark:bg-[#0e2740]">
//           <span className="w-2.5 h-2.5 rounded-full bg-emerald-700 flex-shrink-0 animate-pulse"></span>
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
//               onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/user-hani.jpg'; }}
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
 
// /* ==================== صفحة تفاصيل الطلب (خزائن ملفات حديدية - بانتظار الاعتماد) ==================== */
 
// export default function PendingApprovalOrder() {
//   const navigate = useNavigate()
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [searchQuery, setSearchQuery] = useState('')
//   const [activeTab, setActiveTab] = useState('attachments') // افتراضياً المرفقات كالصورة
 
//   // بيانات الطلب
//   const orderId = 'PR-2026-0009'
//   const title = 'خزائن ملفات حديدية'
//   const department = 'كلية الهندسة'
//   const submittedBy = 'م. خالد الزهراني'
//   const statusLabel = 'بانتظار الاعتماد'
//   const statusDotColor = '#FF8A1F'
 
//   const whereNow = 'لدى الإدارة العليا'
//   const waitingFor = 'الإدارة العليا (الاعتماد)'
//   const nextStep = 'اعتماد الطلب أو إرجاعه للتعديل أو رفضه'
//   const delayedLabel = 'متأخر:'
//   const delayedText = 'بانتظار الاعتماد منذ 5 أيام'
 
//   // المرفقات (فارغة كما في الصورة)
//   const attachments = []
 
//   // سجل الإجراءات
//   const historyAction = 'تم تقديم الطلب وإرساله للاعتماد'
//   const historyDate = '19 أكتوبر 2026 - 09:15 ص'
 
//   // التبويبات
//   const tabs = [
//     { id: 'data', label: 'البيانات', count: null },
//     { id: 'attachments', label: 'المرفقات', count: attachments.length },
//     { id: 'history', label: 'سجل الإجراءات', count: 1 },
//   ]
 
//   // مراحل الطلب
//   const steps = [
//     { num: 1, label: 'تقديم الطلب', owner: 'تم تقديم الطلب' },
//     { num: 2, label: 'الاعتماد', owner: 'الإدارة العليا' },
//     { num: 3, label: 'طرح العروض', owner: 'قسم المشتريات' },
//     { num: 4, label: 'فتح المظاريف', owner: 'لجنة فتح المظاريف' },
//     { num: 5, label: 'المحضر والتوقيع', owner: 'لجنة فتح المظاريف' },
//   ]
//   const currentStep = 2
 
//   // تفاصيل الطلب
//   const detailRows = [
//     { label: 'مقدم الطلب', value: 'م. خالد الزهراني' },
//     { label: 'الإدارة', value: 'كلية الهندسة' },
//     { label: 'التصنيف', value: 'أثاث مكتبي' },
//     { label: 'تاريخ الإنشاء', value: '19 أكتوبر 2026' },
//     { label: 'التاريخ المطلوب', value: '30 أكتوبر 2026' },
//     { label: 'طريقة الشراء', value: 'لم تُحدد بعد' },
//   ]
 
//   const items = [
//     { num: 1, name: 'خزائن ملفات حديدية', qty: '10 خزانة', unitPrice: '500 ش', total: '5,000 ش' },
//   ]
 
//   const totalCost = '5,000 ش'
//   const justification = 'نحتاج إلى خزائن ملفات حديدية لتنظيم وحفظ وثائق وملفات الكلية بشكل آمن ومنظم.'
 
//   const statusCards = [
//     { title: 'أين الطلب الآن', text: whereNow, icon: 'fa-location-dot' },
//     { title: 'بانتظار', text: waitingFor, icon: 'fa-circle-user' },
//     { title: 'الخطوة التالية', text: nextStep, icon: 'fa-circle-arrow-left' },
//   ]
 
//   return (
//     <div
//       dir="rtl"
//       className="min-h-screen bg-[#f5f5f5] dark:bg-[#071322] text-[#000000] dark:text-slate-100 flex flex-row transition-colors duration-200 selection:bg-sky-500 selection:text-white"
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
//             <button
//               type="button"
//               onClick={() => navigate('/my-orders')}
//               className="inline-flex items-center gap-2 text-[15px] font-medium text-[#000000] dark:text-slate-300 hover:opacity-70 transition-opacity cursor-pointer"
//             >
//               <i className="fa-solid fa-chevron-right text-xs"></i>
//               <span>رجوع</span>
//             </button>
 
//             <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-4">
//               <div>
//                 {/* الشارات: رقم الطلب + الحالة */}
//                 <div className="flex items-center gap-3">
//                   <span className="inline-flex items-center h-[26px] px-3 rounded-lg text-sm font-medium bg-[#E5E5E5] dark:bg-slate-800 text-[#000000] dark:text-slate-300">
//                     {orderId}
//                   </span>
//                   <span className="inline-flex items-center gap-2 h-[26px] px-3 rounded-lg text-sm font-medium bg-[#FFF3E0] text-[#F28C1E] dark:bg-amber-950/40 dark:text-amber-400">
//                     <span
//                       className="w-2.5 h-2.5 rounded-full shrink-0"
//                       style={{ backgroundColor: statusDotColor }}
//                     ></span>
//                     <span>{statusLabel}</span>
//                   </span>
//                 </div>
 
//                 {/* عنوان الطلب */}
//                 <h1 className="mt-2.5 text-2xl sm:text-3xl font-extrabold text-[#000000] dark:text-white">
//                   {title}
//                 </h1>
//                 <p className="mt-3 text-sm sm:text-[15px] text-[#555555] dark:text-slate-400 font-medium">
//                   {department} · {submittedBy}
//                 </p>
//               </div>
 
//               {/* زر الإجراء: إكمال وإرسال (تدرّج + نص أسود) */}
//               <button
//                 type="button"
//                 onClick={() => navigate('/new-order')}
//                 className="h-12 w-full sm:w-[273px] rounded-full bg-gradient-to-r from-[#007DEA] to-[#01B0F5] hover:brightness-95 text-[#000000] font-bold text-sm transition-all shadow-[0_4px_14px_rgba(1,176,245,0.25)] cursor-pointer"
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
//                 className="bg-white dark:bg-[#0b1b2d] rounded-2xl h-[77px] px-5 flex items-center gap-4"
//               >
//                 <i className={`fa-solid ${card.icon} text-xl text-[#000000] dark:text-slate-100 w-5 text-center shrink-0`}></i>
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
 
//           {/* ==================== شريط التنبيه بالتأخير ==================== */}
//           <div className="w-full rounded-2xl border border-[#F26B6B] dark:border-rose-700 bg-[#FFF1F0] dark:bg-rose-950/20 px-6 py-6 flex items-center justify-start gap-4 !mt-6">
//             <i className="fa-solid fa-clock text-2xl text-[#E5333F] shrink-0"></i>
//             <p className="text-base text-[#000000] dark:text-slate-200">
//               <span className="font-bold">{delayedLabel}</span> {delayedText}
//             </p>
//           </div>
 
//           {/* ==================== مراحل الطلب (Stepper) ==================== */}
//           <div className="bg-white dark:bg-[#0b1b2d] rounded-[24px] p-6 pb-10 shadow-[0_2px_12px_rgba(0,0,0,0.03)] !mt-12">
//             <h2 className="text-base font-bold text-[#000000] dark:text-white text-right pb-2.5 border-b border-[#E5E5E5] dark:border-slate-800">
//               مراحل الطلب
//             </h2>
 
//             <div className="mt-5 flex flex-col lg:flex-row lg:items-start gap-4 overflow-x-auto pb-2">
//               {/* الخطوة 1: كرت أخضر مكتمل (الأيقونة يمين، النص على يسارها) */}
//               <div className="w-full lg:w-[336px] shrink-0 h-[112px] rounded-[20px] border border-[#2EC48A] bg-[#EBFDF5] dark:bg-emerald-950/30 dark:border-emerald-700 px-6 flex items-center gap-4">
//                 <div className="w-10 h-10 rounded-xl bg-[#0B4A32] text-white flex items-center justify-center shrink-0">
//                   <CheckIcon className="w-5 h-5" />
//                 </div>
//                 <div className="text-right">
//                   <span className="text-[13px] font-medium text-[#0B4A32] dark:text-emerald-400 block">
//                     الخطوة {steps[0].num}
//                   </span>
//                   <h4 className="text-[17px] font-bold text-[#000000] dark:text-white mt-0.5">
//                     {steps[0].label}
//                   </h4>
//                   <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
//                     {steps[0].owner}
//                   </p>
//                 </div>
//               </div>
 
//               {/* الخطوات 2 → 5 */}
//               {steps.slice(1).map((step, i, arr) => {
//                 const isCurrent = step.num === currentStep
//                 const isLast = i === arr.length - 1
//                 const lineBlue = step.num <= currentStep
//                 return (
//                   <div key={step.num} className="flex-1 min-w-[200px]">
//                     <div className="flex items-center">
//                       <div
//                         className={`w-10 h-10 shrink-0 rounded-lg flex items-center justify-center text-sm font-semibold ${
//                           isCurrent
//                             ? 'bg-[#00B0F0] border-2 border-[#007DEA] text-[#000000]'
//                             : 'bg-[#E8F4FD] dark:bg-[#0c2438] text-slate-700 dark:text-slate-200'
//                         }`}
//                       >
//                         {step.num}
//                       </div>
//                       {!isLast && (
//                         <span
//                           className={`hidden lg:block flex-1 h-[3px] rounded-full mr-2 ml-[23px] ${
//                             lineBlue ? 'bg-[#00B0F0]' : 'bg-[#E5EDF7] dark:bg-slate-700'
//                           }`}
//                         ></span>
//                       )}
//                     </div>
//                     <div className="text-right mt-3">
//                       <p className="text-sm text-slate-500 dark:text-slate-400">الخطوة {step.num}</p>
//                       <h4 className="text-[17px] font-bold text-[#000000] dark:text-white mt-1">
//                         {step.label}
//                       </h4>
//                       <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{step.owner}</p>
//                     </div>
//                   </div>
//                 )
//               })}
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
//                 {/* الجزء الأيمن: المبرر + جدول الأصناف والخدمات */}
//                 <div className="flex-1 w-full min-w-0 text-right lg:pr-[11px]">
//                   {/* المبرر */}
//                   <div>
//                     <h3 className="text-[17px] font-bold text-[#000000] dark:text-white">
//                       المبرر
//                     </h3>
//                     <p className="mt-2 text-[15px] text-[#555555] dark:text-slate-300">
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
//                             <col style={{ width: '13%' }} />
//                             <col style={{ width: '29%' }} />
//                             <col style={{ width: '17%' }} />
//                             <col style={{ width: '16.5%' }} />
//                             <col style={{ width: '24.5%' }} />
//                           </colgroup>
//                           <thead>
//                             <tr className="h-[66px] bg-[#E8F4FD] dark:bg-[#0c2438] text-[15px] text-[#666666] dark:text-slate-300">
//                               <th className="px-3 text-center font-normal">#</th>
//                               <th className="px-3 text-center font-normal">الصنف/الخدمة والمواصفات</th>
//                               <th className="px-3 text-center font-normal">الكمية</th>
//                               <th className="px-3 text-center font-normal">سعر الوحدة التقديري</th>
//                               <th className="px-3 text-center font-normal">الإجمالي التقديري</th>
//                             </tr>
//                           </thead>
//                           <tbody className="text-[15px] text-[#000000] dark:text-slate-200">
//                             {items.map((item) => (
//                               <tr key={item.num} className="h-[103px] hover:bg-slate-50/60 dark:hover:bg-[#0c1f33]/40">
//                                 <td className="px-3 text-center font-bold">{item.num}</td>
//                                 <td className="px-3 text-center font-semibold">{item.name}</td>
//                                 <td className="px-3 text-center font-semibold">{item.qty}</td>
//                                 <td className="px-3 text-center font-semibold">{item.unitPrice}</td>
//                                 <td className="px-3 text-center font-semibold">{item.total}</td>
//                               </tr>
//                             ))}
//                           </tbody>
//                         </table>
//                       </div>
 
//                       {/* إجمالي التكلفة التقديرية */}
//                       <div className="h-[50px] px-6 gap-6 whitespace-nowrap bg-[#F7F7F7] dark:bg-[#0c1f33]/40 flex items-center justify-between text-[15px]">
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
 
//                 {/* الجزء الأيسر: بطاقة بيانات الطلب التفصيلية */}
//                 <div className="w-full lg:w-[36%] lg:max-w-[512px] shrink-0 bg-[#E8F4FD] dark:bg-[#0c2438] rounded-[24px] px-6 py-6 text-right">
//                   {detailRows.map((row, idx) => (
//                     <div
//                       key={row.label}
//                       className={`flex items-center justify-between gap-4 whitespace-nowrap h-[49px] text-[15px] font-medium text-[#000000] dark:text-white ${
//                         idx < detailRows.length - 1
//                           ? 'border-b border-[#D3E3EE] dark:border-sky-900/40'
//                           : ''
//                       }`}
//                     >
//                       <span className="font-medium">{row.label}</span>
//                       <span className="font-bold">{row.value}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
 
//             {/* محتوى تبويب المرفقات (حالة فارغة كما في الصورة) */}
//             {activeTab === 'attachments' && (
//               <div className="min-h-[324px] flex flex-col items-center justify-center text-center select-none">
//                 <PaperclipIcon className="w-10 h-10 text-[#000000] dark:text-slate-200" />
//                 <h3 className="mt-5 text-[15px] font-bold text-[#000000] dark:text-white">
//                   لا توجد مرفقات
//                 </h3>
//                 <p className="mt-3 text-sm text-[#555555] dark:text-slate-400 font-normal">
//                   لم تُرفق أي ملفات مع هذا الطلب.
//                 </p>
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
//                       {historyAction}
//                     </h4>
//                     <p className="text-xs text-slate-500">بواسطة {submittedBy} · {department}</p>
//                     <span className="text-[10px] text-slate-400">{historyDate}</span>
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
 
// // الرئيسية: 4 مربعات مفرغة كما في الصورة
// const HomeIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <rect x="3" y="3" width="7" height="7" rx="1.5" />
//     <rect x="14" y="3" width="7" height="7" rx="1.5" />
//     <rect x="14" y="14" width="7" height="7" rx="1.5" />
//     <rect x="3" y="14" width="7" height="7" rx="1.5" />
//   </svg>
// )
 
// const FileIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5z" />
//     <path d="M14 2v5h5" />
//   </svg>
// )
 
// const FilesFilledIcon = (props) => (
//   <svg
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     stroke="currentColor"
//     strokeWidth={1.5}
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     aria-hidden="true"
//     {...props}
//   >
//     <path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z" />
//     <path d="M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8" fill="none" />
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
 
// const CheckIcon = (props) => (
//   <svg
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="3"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     aria-hidden="true"
//     {...props}
//   >
//     <polyline points="20 6 9 17 4 12" />
//   </svg>
// )
 
// const PaperclipIcon = (props) => (
//   <svg {...strokeProps} strokeWidth={1.8} {...props}>
//     <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
//   </svg>
// )
 
// const navItems = [
//   { id: 'home', label: 'الرئيسية', Icon: HomeIcon, path: '/dashboard' },
//   {
//     id: 'my-orders',
//     label: 'طلباتي',
//     Icon: FileIcon,
//     ActiveIcon: FilesFilledIcon,
//     path: '/my-orders',
//   },
//   { id: 'new-order', label: 'طلب شراء جديد', Icon: FilePlusIcon, path: '/new-order' },
//   { id: 'suppliers', label: 'الموردين', Icon: TruckIcon, path: '/dashboard' },
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
//         <p className="my-[clamp(12px,4vh,44px)] px-2 text-[length:clamp(13px,1.4vh,15px)] text-slate-500 dark:text-slate-400">
//           القوائم التشغيلية
//         </p>
 
//         {/* أزرار القائمة */}
//         <nav className="space-y-2">
//           {navItems.map(({ id, label, Icon, ActiveIcon, path }) => {
//             const isActive = id === 'my-orders'
//             const CurrentIcon = isActive && ActiveIcon ? ActiveIcon : Icon
//             return (
//               <button
//                 key={id}
//                 type="button"
//                 onClick={() => {
//                   navigate(path)
//                   onNavigate?.()
//                 }}
//                 className={`w-full h-[clamp(40px,5.2vh,56px)] flex items-center gap-3 px-5 2xl:px-6 rounded-lg text-[length:clamp(16px,2.04vh,22px)] font-medium text-right cursor-pointer transition-all ${
//                   isActive
//                     ? 'bg-[#00B0F0] text-[#000000] shadow-sm font-bold'
//                     : 'bg-[#f5f5f5] dark:bg-[#0f243a] text-[#000000] dark:text-slate-200 hover:bg-[#ececec] dark:hover:bg-[#142e4a]'
//                 }`}
//               >
//                 <CurrentIcon className="w-[1em] h-[1em] shrink-0" />
//                 <span>{label}</span>
//               </button>
//             )
//           })}
//         </nav>
//       </div>
 
//       {/* الجزء السفلي */}
//       <div className="mt-auto pt-[clamp(12px,2vh,24px)]">
//         {/* بطاقة: النظام متصل وآمن */}
//         <div className="flex items-center gap-2 px-6 2xl:px-10 py-[clamp(10px,1.5vh,16px)] bg-[#e9f4fb] dark:bg-[#0e2740]">
//           <span className="w-2.5 h-2.5 rounded-full bg-emerald-700 flex-shrink-0 animate-pulse"></span>
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
//               onError={(e) => {
//                 e.currentTarget.onerror = null
//                 e.currentTarget.src = '/user-hani.jpg'
//               }}
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
 
// /* ==================== صفحة تفاصيل الطلب (خزائن ملفات حديدية - بانتظار الاعتماد) ==================== */
 
// export default function PendingApprovalOrder() {
//   const navigate = useNavigate()
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [searchQuery, setSearchQuery] = useState('')
//   const [activeTab, setActiveTab] = useState('attachments') // افتراضياً المرفقات كالصورة
 
//   // بيانات الطلب
//   const orderId = 'PR-2026-0009'
//   const title = 'خزائن ملفات حديدية'
//   const department = 'كلية الهندسة'
//   const submittedBy = 'م. خالد الزهراني'
//   const statusLabel = 'بانتظار الاعتماد'
//   const statusDotColor = '#FF8A1F'
 
//   const whereNow = 'لدى الإدارة العليا'
//   const waitingFor = 'الإدارة العليا (الاعتماد)'
//   const nextStep = 'اعتماد الطلب أو إرجاعه للتعديل أو رفضه'
//   const delayedLabel = 'متأخر:'
//   const delayedText = 'بانتظار الاعتماد منذ 5 أيام'
 
//   // المرفقات (فارغة كما في الصورة)
//   const attachments = []
 
//   // سجل الإجراءات
//   const historyAction = 'تم تقديم الطلب وإرساله للاعتماد'
//   const historyDate = '19 أكتوبر 2026 - 09:15 ص'
 
//   // التبويبات
//   const tabs = [
//     { id: 'data', label: 'البيانات', count: null },
//     { id: 'attachments', label: 'المرفقات', count: attachments.length },
//     { id: 'history', label: 'سجل الإجراءات', count: 1 },
//   ]
 
//   // مراحل الطلب
//   const steps = [
//     { num: 1, label: 'تقديم الطلب', owner: 'تم تقديم الطلب' },
//     { num: 2, label: 'الاعتماد', owner: 'الإدارة العليا' },
//     { num: 3, label: 'طرح العروض', owner: 'قسم المشتريات' },
//     { num: 4, label: 'فتح المظاريف', owner: 'لجنة فتح المظاريف' },
//     { num: 5, label: 'المحضر والتوقيع', owner: 'لجنة فتح المظاريف' },
//   ]
//   const currentStep = 2
 
//   // تفاصيل الطلب
//   const detailRows = [
//     { label: 'مقدم الطلب', value: 'م. خالد الزهراني' },
//     { label: 'الإدارة', value: 'كلية الهندسة' },
//     { label: 'التصنيف', value: 'أثاث مكتبي' },
//     { label: 'تاريخ الإنشاء', value: '19 أكتوبر 2026' },
//     { label: 'التاريخ المطلوب', value: '30 أكتوبر 2026' },
//     { label: 'طريقة الشراء', value: 'لم تُحدد بعد' },
//   ]
 
//   const items = [
//     { num: 1, name: 'خزائن ملفات حديدية', qty: '10 خزانة', unitPrice: '500 ش', total: '5,000 ش' },
//   ]
 
//   const totalCost = '5,000 ش'
//   const justification =
//     'نحتاج إلى خزائن ملفات حديدية لتنظيم وحفظ وثائق وملفات الكلية بشكل آمن ومنظم.'
 
//   const statusCards = [
//     { title: 'أين الطلب الآن', text: whereNow, icon: 'fa-location-dot' },
//     { title: 'بانتظار', text: waitingFor, icon: 'fa-circle-user' },
//     { title: 'الخطوة التالية', text: nextStep, icon: 'fa-circle-arrow-left' },
//   ]
 
//   return (
//     <div
//       dir="rtl"
//       className="min-h-screen bg-[#f5f5f5] dark:bg-[#071322] text-[#000000] dark:text-slate-100 flex flex-row transition-colors duration-200 selection:bg-sky-500 selection:text-white"
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
//               <span className="font-bold text-[#000000] dark:text-slate-200">الإدارة الطالبة</span>
//               <i className="fa-solid fa-angle-left text-[11px] text-slate-400"></i>
//               <Link
//                 to="/my-orders"
//                 className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
//               >
//                 طلباتي
//               </Link>
//               <i className="fa-solid fa-angle-left text-[11px] text-slate-400"></i>
//               <span>{statusLabel}</span>
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
//             <button
//               type="button"
//               onClick={() => navigate('/my-orders')}
//               className="inline-flex items-center gap-2 text-[15px] font-bold text-[#000000] dark:text-slate-300 hover:opacity-70 transition-opacity cursor-pointer"
//             >
//               <i className="fa-solid fa-chevron-right text-xs"></i>
//               <span>رجوع</span>
//             </button>
 
//             <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-4">
//               <div>
//                 {/* الشارات: رقم الطلب + الحالة */}
//                 <div className="flex items-center gap-3">
//                   <span className="inline-flex items-center h-[26px] px-3 rounded-lg text-sm font-medium bg-[#E5E5E5] dark:bg-slate-800 text-[#000000] dark:text-slate-300">
//                     {orderId}
//                   </span>
//                   <span className="inline-flex items-center gap-2 h-[26px] px-3 rounded-lg text-sm font-medium bg-[#FFF3E0] text-[#F28C1E] dark:bg-amber-950/40 dark:text-amber-400">
//                     <span
//                       className="w-2.5 h-2.5 rounded-full shrink-0"
//                       style={{ backgroundColor: statusDotColor }}
//                     ></span>
//                     <span>{statusLabel}</span>
//                   </span>
//                 </div>
 
//                 {/* عنوان الطلب */}
//                 <h1 className="mt-2.5 text-2xl sm:text-3xl font-extrabold text-[#000000] dark:text-white">
//                   {title}
//                 </h1>
//                 <p className="mt-3 text-sm sm:text-[15px] text-[#555555] dark:text-slate-400 font-medium">
//                   {department} · {submittedBy}
//                 </p>
//               </div>
 
//               {/* زر الإجراء: إكمال وإرسال (تدرّج + نص أسود) */}
//               <button
//                 type="button"
//                 onClick={() => navigate('/new-order')}
//                 className="h-12 w-full sm:w-[273px] rounded-full bg-gradient-to-r from-[#007DEA] to-[#01B0F5] hover:brightness-95 text-[#000000] font-bold text-sm transition-all shadow-[0_4px_14px_rgba(1,176,245,0.25)] cursor-pointer"
//               >
//                 إكمال وإرسال
//               </button>
//             </div>
//           </div>
 
//           {/* ==================== كروت الحالة الثلاثة ==================== */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 !mt-5">
//             {statusCards.map((card) => (
//               <div
//                 key={card.title}
//                 className="bg-white dark:bg-[#0b1b2d] rounded-2xl h-[86px] px-6 flex items-center gap-4"
//               >
//                 <i
//                   className={`fa-solid ${card.icon} text-xl text-[#000000] dark:text-slate-100 w-5 text-center shrink-0`}
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
 
//           {/* ==================== شريط التنبيه بالتأخير ==================== */}
//           <div className="w-full rounded-2xl border border-[#F26B6B] dark:border-rose-700 bg-[#FFF1F0] dark:bg-rose-950/20 px-6 py-6 flex items-center justify-start gap-4 !mt-5">
//             <i className="fa-solid fa-clock text-2xl text-[#E5333F] shrink-0"></i>
//             <p className="text-base text-[#000000] dark:text-slate-200">
//               <span className="font-bold">{delayedLabel}</span> {delayedText}
//             </p>
//           </div>
 
//           {/* ==================== مراحل الطلب (Stepper) ==================== */}
//           <div className="bg-white dark:bg-[#0b1b2d] rounded-[24px] p-6 pb-10 shadow-[0_2px_12px_rgba(0,0,0,0.03)] !mt-12">
//             <h2 className="text-base font-bold text-[#000000] dark:text-white text-right pb-2.5 border-b border-[#E5E5E5] dark:border-slate-800">
//               مراحل الطلب
//             </h2>
 
//             <div className="mt-5 flex flex-col lg:flex-row lg:items-start gap-4 overflow-x-auto pb-2">
//               {/* الخطوة 1: كرت أخضر مكتمل (الأيقونة يمين، النص على يسارها) */}
//               <div className="w-full lg:w-[336px] shrink-0 h-[112px] rounded-[20px] border border-[#2EC48A] bg-[#EBFDF5] dark:bg-emerald-950/30 dark:border-emerald-700 px-6 flex items-center gap-4">
//                 <div className="w-10 h-10 rounded-xl bg-[#0B4A32] text-white flex items-center justify-center shrink-0">
//                   <CheckIcon className="w-5 h-5" />
//                 </div>
//                 <div className="text-right">
//                   <span className="text-[13px] font-medium text-[#0B4A32] dark:text-emerald-400 block">
//                     الخطوة {steps[0].num}
//                   </span>
//                   <h4 className="text-[17px] font-bold text-[#000000] dark:text-white mt-0.5">
//                     {steps[0].label}
//                   </h4>
//                   <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
//                     {steps[0].owner}
//                   </p>
//                 </div>
//               </div>
 
//               {/* الخطوات 2 → 5 */}
//               {steps.slice(1).map((step, i, arr) => {
//                 const isCurrent = step.num === currentStep
//                 const isLast = i === arr.length - 1
//                 const lineBlue = step.num <= currentStep
//                 return (
//                   <div key={step.num} className="flex-1 min-w-[200px]">
//                     <div className="flex items-center">
//                       <div
//                         className={`w-10 h-10 shrink-0 rounded-lg flex items-center justify-center text-sm font-semibold ${
//                           isCurrent
//                             ? 'bg-[#00B0F0] border-2 border-[#007DEA] text-[#000000]'
//                             : 'bg-[#E8F4FD] dark:bg-[#0c2438] text-slate-700 dark:text-slate-200'
//                         }`}
//                       >
//                         {step.num}
//                       </div>
//                       {!isLast && (
//                         <span
//                           className={`hidden lg:block flex-1 h-[3px] rounded-full mr-2 ml-[23px] ${
//                             lineBlue ? 'bg-[#00B0F0]' : 'bg-[#E5EDF7] dark:bg-slate-700'
//                           }`}
//                         ></span>
//                       )}
//                     </div>
//                     <div className="text-right mt-3">
//                       <p className="text-sm text-slate-500 dark:text-slate-400">الخطوة {step.num}</p>
//                       <h4 className="text-[17px] font-bold text-[#000000] dark:text-white mt-1">
//                         {step.label}
//                       </h4>
//                       <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{step.owner}</p>
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>
 
//           {/* ==================== تبويبات البيانات والمرفقات وسجل الإجراءات ==================== */}
//           <div className="bg-white dark:bg-[#0b1b2d] rounded-[24px] px-6 pt-4 pb-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] !mt-3">
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
//                       <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#007DEA] dark:bg-[#01B0F5]" />
//                     )}
//                   </button>
//                 )
//               })}
//             </div>
 
//             {/* محتوى تبويب البيانات */}
//             {activeTab === 'data' && (
//               <div className="flex flex-col lg:flex-row gap-6 items-start mt-8">
//                 {/* الجزء الأيمن: المبرر + جدول الأصناف والخدمات */}
//                 <div className="flex-1 w-full min-w-0 text-right lg:pr-[11px]">
//                   {/* المبرر */}
//                   <div>
//                     <h3 className="text-[17px] font-bold text-[#000000] dark:text-white">
//                       المبرر
//                     </h3>
//                     <p className="mt-2 text-[15px] text-[#555555] dark:text-slate-300">
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
//                             <col style={{ width: '13%' }} />
//                             <col style={{ width: '29%' }} />
//                             <col style={{ width: '17%' }} />
//                             <col style={{ width: '16.5%' }} />
//                             <col style={{ width: '24.5%' }} />
//                           </colgroup>
//                           <thead>
//                             <tr className="h-[66px] bg-[#E8F4FD] dark:bg-[#0c2438] text-[15px] text-[#666666] dark:text-slate-300">
//                               <th className="px-3 text-center font-normal">#</th>
//                               <th className="px-3 text-center font-normal">الصنف/الخدمة والمواصفات</th>
//                               <th className="px-3 text-center font-normal">الكمية</th>
//                               <th className="px-3 text-center font-normal">سعر الوحدة التقديري</th>
//                               <th className="px-3 text-center font-normal">الإجمالي التقديري</th>
//                             </tr>
//                           </thead>
//                           <tbody className="text-[15px] text-[#000000] dark:text-slate-200">
//                             {items.map((item) => (
//                               <tr
//                                 key={item.num}
//                                 className="h-[103px] hover:bg-slate-50/60 dark:hover:bg-[#0c1f33]/40"
//                               >
//                                 <td className="px-3 text-center font-bold">{item.num}</td>
//                                 <td className="px-3 text-center font-semibold">{item.name}</td>
//                                 <td className="px-3 text-center font-semibold">{item.qty}</td>
//                                 <td className="px-3 text-center font-semibold">{item.unitPrice}</td>
//                                 <td className="px-3 text-center font-semibold">{item.total}</td>
//                               </tr>
//                             ))}
//                           </tbody>
//                         </table>
//                       </div>
 
//                       {/* إجمالي التكلفة التقديرية */}
//                       <div className="h-[50px] px-6 gap-6 whitespace-nowrap bg-[#F7F7F7] dark:bg-[#0c1f33]/40 flex items-center justify-between text-[15px]">
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
 
//                 {/* الجزء الأيسر: بطاقة بيانات الطلب التفصيلية */}
//                 <div className="w-full lg:w-[36%] lg:max-w-[512px] shrink-0 bg-[#E8F4FD] dark:bg-[#0c2438] rounded-[24px] px-6 py-6 text-right">
//                   {detailRows.map((row, idx) => (
//                     <div
//                       key={row.label}
//                       className={`flex items-center justify-between gap-4 whitespace-nowrap h-[49px] text-[15px] font-medium text-[#000000] dark:text-white ${
//                         idx < detailRows.length - 1
//                           ? 'border-b border-[#D3E3EE] dark:border-sky-900/40'
//                           : ''
//                       }`}
//                     >
//                       <span className="font-medium">{row.label}</span>
//                       <span className="font-bold">{row.value}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
 
//             {/* محتوى تبويب المرفقات (حالة فارغة كما في الصورة) */}
//             {activeTab === 'attachments' && (
//               <div className="min-h-[324px] flex flex-col items-center justify-center text-center select-none">
//                 <PaperclipIcon className="w-10 h-10 text-[#000000] dark:text-slate-200" />
//                 <h3 className="mt-5 text-[15px] font-bold text-[#000000] dark:text-white">
//                   لا توجد مرفقات
//                 </h3>
//                 <p className="mt-3 text-sm text-[#555555] dark:text-slate-400 font-normal">
//                   لم تُرفق أي ملفات مع هذا الطلب.
//                 </p>
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
//                       {historyAction}
//                     </h4>
//                     <p className="text-xs text-slate-500">
//                       بواسطة {submittedBy} · {department}
//                     </p>
//                     <span className="text-[10px] text-slate-400">{historyDate}</span>
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
 
// الرئيسية: 4 مربعات مفرغة كما في الصورة
const HomeIcon = (props) => (
  <svg {...strokeProps} {...props}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
  </svg>
)
 
const FileIcon = (props) => (
  <svg {...strokeProps} {...props}>
    <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5z" />
    <path d="M14 2v5h5" />
  </svg>
)
 
const FilesFilledIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z" />
    <path d="M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8" fill="none" />
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
 
const CheckIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
)
 
const PaperclipIcon = (props) => (
  <svg {...strokeProps} strokeWidth={1.8} {...props}>
    <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
  </svg>
)
 
const navItems = [
  { id: 'home', label: 'الرئيسية', Icon: HomeIcon, path: '/dashboard' },
  {
    id: 'my-orders',
    label: 'طلباتي',
    Icon: FileIcon,
    ActiveIcon: FilesFilledIcon,
    path: '/my-orders',
  },
  { id: 'new-order', label: 'طلب شراء جديد', Icon: FilePlusIcon, path: '/new-order' },
  { id: 'suppliers', label: 'الموردين', Icon: TruckIcon, path: '/dashboard' },
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
        <p className="my-[clamp(12px,4vh,44px)] px-2 text-[length:clamp(13px,1.4vh,15px)] text-slate-500 dark:text-slate-400">
          القوائم التشغيلية
        </p>
 
        {/* أزرار القائمة */}
        <nav className="space-y-2">
          {navItems.map(({ id, label, Icon, ActiveIcon, path }) => {
            const isActive = id === 'my-orders'
            const CurrentIcon = isActive && ActiveIcon ? ActiveIcon : Icon
            return (
              <button
                key={id}
                type="button"
                onClick={() => {
                  navigate(path)
                  onNavigate?.()
                }}
                className={`w-full h-[clamp(40px,5.2vh,56px)] flex items-center gap-3 px-5 2xl:px-6 rounded-lg text-[length:clamp(16px,2.04vh,22px)] font-medium text-right cursor-pointer transition-all ${
                  isActive
                    ? 'bg-[#00B0F0] text-[#000000] shadow-sm font-bold'
                    : 'bg-[#f5f5f5] dark:bg-[#0f243a] text-[#000000] dark:text-slate-200 hover:bg-[#ececec] dark:hover:bg-[#142e4a]'
                }`}
              >
                <CurrentIcon className="w-[1em] h-[1em] shrink-0" />
                <span>{label}</span>
              </button>
            )
          })}
        </nav>
      </div>
 
      {/* الجزء السفلي */}
      <div className="mt-auto pt-[clamp(12px,2vh,24px)]">
        {/* بطاقة: النظام متصل وآمن */}
        <div className="flex items-center gap-2 px-6 2xl:px-10 py-[clamp(10px,1.5vh,16px)] bg-[#e9f4fb] dark:bg-[#0e2740]">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-700 flex-shrink-0 animate-pulse"></span>
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
              onError={(e) => {
                e.currentTarget.onerror = null
                e.currentTarget.src = '/user-hani.jpg'
              }}
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
 
/* ==================== صفحة تفاصيل الطلب (خزائن ملفات حديدية - بانتظار الاعتماد) ==================== */
 
export default function PendingApprovalOrder() {
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState('attachments') // افتراضياً المرفقات كالصورة
 
  // بيانات الطلب
  const orderId = 'PR-2026-0009'
  const title = 'خزائن ملفات حديدية'
  const department = 'كلية الهندسة'
  const submittedBy = 'م. خالد الزهراني'
  const statusLabel = 'بانتظار الاعتماد'
  const statusDotColor = '#FF8A1F'
 
  const whereNow = 'لدى الإدارة العليا'
  const waitingFor = 'الإدارة العليا (الاعتماد)'
  const nextStep = 'اعتماد الطلب أو إرجاعه للتعديل أو رفضه'
  const delayedLabel = 'متأخر:'
  const delayedText = 'بانتظار الاعتماد منذ 5 أيام'
 
  // المرفقات (فارغة كما في الصورة)
  const attachments = []
 
  // سجل الإجراءات
  const historyAction = 'تم تقديم الطلب وإرساله للاعتماد'
  const historyDate = '19 أكتوبر 2026 - 09:15 ص'
 
  // التبويبات
  const tabs = [
    { id: 'data', label: 'البيانات', count: null },
    { id: 'attachments', label: 'المرفقات', count: attachments.length },
    { id: 'history', label: 'سجل الإجراءات', count: 1 },
  ]
 
  // مراحل الطلب
  const steps = [
    { num: 1, label: 'تقديم الطلب', owner: 'تم تقديم الطلب' },
    { num: 2, label: 'الاعتماد', owner: 'الإدارة العليا' },
    { num: 3, label: 'طرح العروض', owner: 'قسم المشتريات' },
    { num: 4, label: 'فتح المظاريف', owner: 'لجنة فتح المظاريف' },
    { num: 5, label: 'المحضر والتوقيع', owner: 'لجنة فتح المظاريف' },
  ]
  const currentStep = 2
 
  // تفاصيل الطلب
  const detailRows = [
    { label: 'مقدم الطلب', value: 'م. خالد الزهراني' },
    { label: 'الإدارة', value: 'كلية الهندسة' },
    { label: 'التصنيف', value: 'أثاث مكتبي' },
    { label: 'تاريخ الإنشاء', value: '19 أكتوبر 2026' },
    { label: 'التاريخ المطلوب', value: '30 أكتوبر 2026' },
    { label: 'طريقة الشراء', value: 'لم تُحدد بعد' },
  ]
 
  const items = [
    { num: 1, name: 'خزائن ملفات حديدية', qty: '10 خزانة', unitPrice: '500 ش', total: '5,000 ش' },
  ]
 
  const totalCost = '5,000 ش'
  const justification =
    'نحتاج إلى خزائن ملفات حديدية لتنظيم وحفظ وثائق وملفات الكلية بشكل آمن ومنظم.'
 
  const statusCards = [
    { title: 'أين الطلب الآن', text: whereNow, icon: 'fa-location-dot' },
    { title: 'بانتظار', text: waitingFor, icon: 'fa-circle-user' },
    { title: 'الخطوة التالية', text: nextStep, icon: 'fa-circle-arrow-left' },
  ]
 
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#f5f5f5] dark:bg-[#071322] text-[#000000] dark:text-slate-100 flex flex-row transition-colors duration-200 selection:bg-sky-500 selection:text-white"
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
              <span className="font-bold text-[#000000] dark:text-slate-200">الإدارة الطالبة</span>
              <i className="fa-solid fa-angle-left text-[11px] text-slate-400"></i>
              <Link
                to="/my-orders"
                className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
              >
                طلباتي
              </Link>
              <i className="fa-solid fa-angle-left text-[11px] text-slate-400"></i>
              <span>{statusLabel}</span>
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
            <button
              type="button"
              onClick={() => navigate('/my-orders')}
              className="inline-flex items-center gap-2 text-[15px] font-bold text-[#000000] dark:text-slate-300 hover:opacity-70 transition-opacity cursor-pointer"
            >
              <i className="fa-solid fa-chevron-right text-xs"></i>
              <span>رجوع</span>
            </button>
 
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-4">
              <div>
                {/* الشارات: رقم الطلب + الحالة */}
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center h-[26px] px-3 rounded-lg text-sm font-medium bg-[#E5E5E5] dark:bg-slate-800 text-[#000000] dark:text-slate-300">
                    {orderId}
                  </span>
                  <span className="inline-flex items-center gap-2 h-[26px] px-3 rounded-lg text-sm font-medium bg-[#FFF3E0] text-[#F28C1E] dark:bg-amber-950/40 dark:text-amber-400">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: statusDotColor }}
                    ></span>
                    <span>{statusLabel}</span>
                  </span>
                </div>
 
                {/* عنوان الطلب */}
                <h1 className="mt-2.5 text-2xl sm:text-3xl font-extrabold text-[#000000] dark:text-white">
                  {title}
                </h1>
                <p className="mt-3 text-sm sm:text-[15px] text-[#555555] dark:text-slate-400 font-medium">
                  {department} · {submittedBy}
                </p>
              </div>
 
              {/* زر الإجراء: إكمال وإرسال (تدرّج + نص أسود) */}
              <button
                type="button"
                onClick={() => navigate('/new-order')}
                className="h-12 w-full sm:w-[273px] rounded-full bg-gradient-to-r from-[#007DEA] to-[#01B0F5] hover:brightness-95 text-[#000000] font-bold text-sm transition-all shadow-[0_4px_14px_rgba(1,176,245,0.25)] cursor-pointer"
              >
                إكمال وإرسال
              </button>
            </div>
          </div>
 
          {/* ==================== كروت الحالة الثلاثة ==================== */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 !mt-5">
            {statusCards.map((card) => (
              <div
                key={card.title}
                className="bg-white dark:bg-[#0b1b2d] rounded-2xl h-[86px] px-6 flex items-center gap-4"
              >
                <i
                  className={`fa-solid ${card.icon} text-xl text-[#000000] dark:text-slate-100 w-5 text-center shrink-0`}
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
 
          {/* ==================== شريط التنبيه بالتأخير ==================== */}
          <div className="w-full rounded-2xl border border-[#F26B6B] dark:border-rose-700 bg-[#FFF1F0] dark:bg-rose-950/20 px-6 py-6 flex items-center justify-start gap-4 !mt-5">
            <i className="fa-solid fa-clock text-2xl text-[#E5333F] shrink-0"></i>
            <p className="text-base text-[#000000] dark:text-slate-200">
              <span className="font-bold">{delayedLabel}</span> {delayedText}
            </p>
          </div>
 
          {/* ==================== مراحل الطلب (Stepper) ==================== */}
          <div className="bg-white dark:bg-[#0b1b2d] rounded-[24px] p-6 pb-10 shadow-[0_2px_12px_rgba(0,0,0,0.03)] !mt-12">
            <h2 className="text-base font-bold text-[#000000] dark:text-white text-right pb-2.5 border-b border-[#E5E5E5] dark:border-slate-800">
              مراحل الطلب
            </h2>
 
            <div className="mt-5 flex flex-col lg:flex-row lg:items-start gap-4 overflow-x-auto lg:overflow-visible pb-2">
              {/* الخطوة 1: كرت أخضر مكتمل (الأيقونة يمين، النص على يسارها) */}
              <div className="w-full lg:w-[clamp(240px,17.5vw,336px)] shrink-0 h-[112px] rounded-[20px] border border-[#2EC48A] bg-[#EBFDF5] dark:bg-emerald-950/30 dark:border-emerald-700 px-4 2xl:px-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0B4A32] text-white flex items-center justify-center shrink-0">
                  <CheckIcon className="w-5 h-5" />
                </div>
                <div className="text-right">
                  <span className="text-[13px] font-medium text-[#0B4A32] dark:text-emerald-400 block">
                    الخطوة {steps[0].num}
                  </span>
                  <h4 className="text-[17px] font-bold text-[#000000] dark:text-white mt-0.5">
                    {steps[0].label}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {steps[0].owner}
                  </p>
                </div>
              </div>
 
              {/* الخطوات 2 → 5 */}
              {steps.slice(1).map((step, i, arr) => {
                const isCurrent = step.num === currentStep
                const isLast = i === arr.length - 1
                const lineBlue = step.num <= currentStep
                return (
                  <div key={step.num} className="flex-1 min-w-[200px] lg:min-w-0">
                    <div className="flex items-center">
                      <div
                        className={`w-10 h-10 shrink-0 rounded-lg flex items-center justify-center text-sm font-semibold ${
                          isCurrent
                            ? 'bg-[#00B0F0] border-2 border-[#007DEA] text-[#000000]'
                            : 'bg-[#E8F4FD] dark:bg-[#0c2438] text-slate-700 dark:text-slate-200'
                        }`}
                      >
                        {step.num}
                      </div>
                      {!isLast && (
                        <span
                          className={`hidden lg:block flex-1 h-[3px] rounded-full mr-2 ml-3 2xl:ml-[23px] ${
                            lineBlue ? 'bg-[#00B0F0]' : 'bg-[#E5EDF7] dark:bg-slate-700'
                          }`}
                        ></span>
                      )}
                    </div>
                    <div className="text-right mt-3">
                      <p className="text-sm text-slate-500 dark:text-slate-400">الخطوة {step.num}</p>
                      <h4 className="text-[17px] font-bold text-[#000000] dark:text-white mt-1">
                        {step.label}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{step.owner}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
 
          {/* ==================== تبويبات البيانات والمرفقات وسجل الإجراءات ==================== */}
          <div className="bg-white dark:bg-[#0b1b2d] rounded-[24px] px-6 pt-4 pb-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] !mt-3">
            {/* شريط التبويبات */}
            <div className="flex items-center gap-6 flex-wrap">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex items-center gap-2 py-3 text-base font-medium transition-colors cursor-pointer ${
                      isActive
                        ? 'text-[#000000] dark:text-white'
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
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#007DEA] dark:bg-[#01B0F5]" />
                    )}
                  </button>
                )
              })}
            </div>
 
            {/* محتوى تبويب البيانات */}
            {activeTab === 'data' && (
              <div className="flex flex-col lg:flex-row gap-6 items-start mt-8">
                {/* الجزء الأيمن: المبرر + جدول الأصناف والخدمات */}
                <div className="flex-1 w-full min-w-0 text-right lg:pr-[11px]">
                  {/* المبرر */}
                  <div>
                    <h3 className="text-[17px] font-bold text-[#000000] dark:text-white">
                      المبرر
                    </h3>
                    <p className="mt-2 text-[15px] text-[#555555] dark:text-slate-300">
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
                            <col style={{ width: '13%' }} />
                            <col style={{ width: '29%' }} />
                            <col style={{ width: '17%' }} />
                            <col style={{ width: '16.5%' }} />
                            <col style={{ width: '24.5%' }} />
                          </colgroup>
                          <thead>
                            <tr className="h-[66px] bg-[#E8F4FD] dark:bg-[#0c2438] text-[15px] text-[#666666] dark:text-slate-300">
                              <th className="px-3 text-center font-normal">#</th>
                              <th className="px-3 text-center font-normal">الصنف/الخدمة والمواصفات</th>
                              <th className="px-3 text-center font-normal">الكمية</th>
                              <th className="px-3 text-center font-normal">سعر الوحدة التقديري</th>
                              <th className="px-3 text-center font-normal">الإجمالي التقديري</th>
                            </tr>
                          </thead>
                          <tbody className="text-[15px] text-[#000000] dark:text-slate-200">
                            {items.map((item) => (
                              <tr
                                key={item.num}
                                className="h-[103px] hover:bg-slate-50/60 dark:hover:bg-[#0c1f33]/40"
                              >
                                <td className="px-3 text-center font-bold">{item.num}</td>
                                <td className="px-3 text-center font-semibold">{item.name}</td>
                                <td className="px-3 text-center font-semibold">{item.qty}</td>
                                <td className="px-3 text-center font-semibold">{item.unitPrice}</td>
                                <td className="px-3 text-center font-semibold">{item.total}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
 
                      {/* إجمالي التكلفة التقديرية */}
                      <div className="h-[50px] px-6 gap-6 whitespace-nowrap bg-[#F7F7F7] dark:bg-[#0c1f33]/40 flex items-center justify-between text-[15px]">
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
 
                {/* الجزء الأيسر: بطاقة بيانات الطلب التفصيلية */}
                <div className="w-full lg:w-[36%] lg:max-w-[512px] shrink-0 bg-[#E8F4FD] dark:bg-[#0c2438] rounded-[24px] px-6 py-6 text-right">
                  {detailRows.map((row, idx) => (
                    <div
                      key={row.label}
                      className={`flex items-center justify-between gap-4 whitespace-nowrap h-[49px] text-[15px] font-medium text-[#000000] dark:text-white ${
                        idx < detailRows.length - 1
                          ? 'border-b border-[#D3E3EE] dark:border-sky-900/40'
                          : ''
                      }`}
                    >
                      <span className="font-medium">{row.label}</span>
                      <span className="font-bold">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
 
            {/* محتوى تبويب المرفقات (حالة فارغة كما في الصورة) */}
            {activeTab === 'attachments' && (
              <div className="min-h-[324px] flex flex-col items-center justify-center text-center select-none">
                <PaperclipIcon className="w-10 h-10 text-[#000000] dark:text-slate-200" />
                <h3 className="mt-5 text-[15px] font-bold text-[#000000] dark:text-white">
                  لا توجد مرفقات
                </h3>
                <p className="mt-3 text-sm text-[#555555] dark:text-slate-400 font-normal">
                  لم تُرفق أي ملفات مع هذا الطلب.
                </p>
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
                      {historyAction}
                    </h4>
                    <p className="text-xs text-slate-500">
                      بواسطة {submittedBy} · {department}
                    </p>
                    <span className="text-[10px] text-slate-400">{historyDate}</span>
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