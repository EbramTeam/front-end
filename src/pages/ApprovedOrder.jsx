











// import { useState, useRef } from 'react'
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
 
// // أيقونة الرئيسية (شبكة 4 مربعات مفرّغة — كما في التصميم)
// const GridOutlineIcon = (props) => (
//   <svg {...strokeProps} strokeWidth={1.8} {...props}>
//     <rect x="3.5" y="3.5" width="7" height="7" rx="1" />
//     <rect x="13.5" y="3.5" width="7" height="7" rx="1" />
//     <rect x="3.5" y="13.5" width="7" height="7" rx="1" />
//     <rect x="13.5" y="13.5" width="7" height="7" rx="1" />
//   </svg>
// )
 
// // أيقونة الرئيسية في حالة التفعيل (شبكة 4 مربعات ممتلئة)
// const GridFilledIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
//     <rect x="3" y="3" width="8" height="8" rx="1.5" />
//     <rect x="13" y="3" width="8" height="8" rx="1.5" />
//     <rect x="3" y="13" width="8" height="8" rx="1.5" />
//     <rect x="13" y="13" width="8" height="8" rx="1.5" />
//   </svg>
// )
 
// // أيقونة طلب إحتياج (مستند مفرّغ)
// const NeedRequestIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5z" />
//     <path d="M14 2v5h5" />
//   </svg>
// )
 
// // أيقونة طلب إحتياج في حالة التفعيل (ملفات ممتلئة)
// const FilesFilledIcon = (props) => (
//   <svg
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     stroke="currentColor"
//     strokeWidth="1.2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     aria-hidden="true"
//     {...props}
//   >
//     <path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z" />
//     <path d="M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8" fill="none" />
//   </svg>
// )
 
// // أيقونة البحث
// const SearchIcon = (props) => (
//   <svg {...strokeProps} strokeWidth={1.5} {...props}>
//     <circle cx="11" cy="11" r="7.5" />
//     <path d="m20.5 20.5-4-4" />
//   </svg>
// )
 
// // سهم صغير لليسار (فواصل المسار + بطاقة المستخدم)
// const ChevronLeftIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <path d="m15 18-6-6 6-6" />
//   </svg>
// )
 
// // زر القائمة للجوال
// const MenuIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <path d="M4 6h16M4 12h16M4 18h16" />
//   </svg>
// )
 
// // أيقونة المبنى (الجهة الطالبة) — مبنى ممتلئ بنوافذ وباب كما في التصميم
// const BuildingIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
//     <path d="M17 11V3H7v4H3v14h8v-4h2v4h8V11h-4ZM7 19H5v-2h2v2Zm0-4H5v-2h2v2Zm0-4H5V9h2v2Zm4 4H9v-2h2v2Zm0-4H9V9h2v2Zm0-4H9V5h2v2Zm4 8h-2v-2h2v2Zm0-4h-2V9h2v2Zm0-4h-2V5h2v2Zm4 12h-2v-2h2v2Zm0-4h-2v-2h2v2Z" />
//   </svg>
// )
 
// // أيقونة المستخدم داخل دائرة ممتلئة (مقدم الطلب)
// const UserCircleIcon = (props) => (
//   <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
//     <circle cx="12" cy="12" r="10" fill="currentColor" />
//     <circle cx="12" cy="9.5" r="3.4" fill="white" className="dark:fill-[#0b1b2d]" />
//     <path
//       d="M5.6 18.2A7.8 7.8 0 0 1 12 15c2.6 0 4.9 1.25 6.4 3.2A9.9 9.9 0 0 1 12 22a9.9 9.9 0 0 1-6.4-3.8Z"
//       fill="white"
//       className="dark:fill-[#0b1b2d]"
//     />
//   </svg>
// )
 
// // أيقونة التقويم (التاريخ)
// const CalendarIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
//     <rect x="3.5" y="5" width="17" height="15.5" rx="2" stroke="currentColor" strokeWidth="2" />
//     <path d="M3.5 7a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v3h-17V7Z" fill="currentColor" />
//     <path d="M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//     <rect x="7" y="13" width="3" height="3" rx="0.6" fill="currentColor" />
//   </svg>
// )
 
// // أيقونة ملف PDF (أحمر)
// const PdfFileIcon = (props) => (
//   <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
//     <path d="M6 2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" fill="#E5262A" />
//     <path d="M14.5 2v4a1.5 1.5 0 0 0 1.5 1.5h4" fill="#F8A5A7" />
//     <text
//       x="12"
//       y="17"
//       textAnchor="middle"
//       fontSize="5.2"
//       fontWeight="800"
//       fill="white"
//       fontFamily="Arial, sans-serif"
//     >
//       PDF
//     </text>
//   </svg>
// )
 
// // أيقونة التحميل (سهم لأسفل فوق صينية)
// const DownloadIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <path d="M12 3.5v11" />
//     <path d="m7.5 10.5 4.5 4.5 4.5-4.5" />
//     <path d="M4 15.5v3A2 2 0 0 0 6 20.5h12a2 2 0 0 0 2-2v-3" />
//   </svg>
// )
 
// // مؤشر التحميل
// const SpinnerIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
//     <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
//     <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
//   </svg>
// )
 
// // عناصر القائمة الجانبية
// const navItems = [
//   { id: 'home', label: 'الرئيسية', Icon: GridOutlineIcon, ActiveIcon: GridFilledIcon, route: '/dashboard' },
//   { id: 'need-requests', label: 'طلب إحتياج', Icon: NeedRequestIcon, ActiveIcon: FilesFilledIcon, route: '/my-orders' },
// ]
 
// /* ==================== حركات (Keyframes) ==================== */
 
// const AnimationStyles = () => (
//   <style>{`
//     @keyframes ao-fade-up {
//       from { opacity: 0; transform: translateY(14px); }
//       to   { opacity: 1; transform: translateY(0); }
//     }
//     @keyframes ao-pop {
//       0%   { transform: scale(1); }
//       40%  { transform: scale(1.18) rotate(-6deg); }
//       100% { transform: scale(1.1) rotate(0); }
//     }
//     @keyframes ao-bounce-down {
//       0%, 100% { transform: translateY(0); }
//       50%      { transform: translateY(3px); }
//     }
//     .ao-enter { animation: ao-fade-up .55s cubic-bezier(.22,1,.36,1) both; }
//     .group:hover .ao-icon-pop { animation: ao-pop .45s ease-out forwards; }
//     .group:hover .ao-icon-bounce { animation: ao-bounce-down .8s ease-in-out infinite; }
//     @media (prefers-reduced-motion: reduce) {
//       .ao-enter, .group:hover .ao-icon-pop, .group:hover .ao-icon-bounce { animation: none; }
//     }
//   `}</style>
// )
 
// /* ==================== محتوى القائمة الجانبية (Sidebar) ==================== */
 
// function SidebarContent({ activeTab, setActiveTab, onNavigate }) {
//   const navigate = useNavigate()
//   return (
//     <div className="min-h-full flex flex-col bg-white dark:bg-[#0b1b2d] pr-[clamp(16px,2.08vw,40px)]">
//       {/* الجزء العلوي */}
//       <div className="pl-4 pt-[clamp(20px,3vh,32px)]">
//         {/* الشعار + اسم المنصة */}
//         <div className="pr-6">
//           <Link to="/dashboard" onClick={onNavigate} className="inline-block">
//             <img
//               src={logo}
//               alt="IBRAM إبرام للمشتريات"
//               className="h-[clamp(100px,4.7vh,52px)] w-auto object-contain"
//             />
//           </Link>
//           <p className="mt-2 text-base text-[#565e74] dark:text-slate-400 font-semibold">
//             إبرام للمشتريات
//           </p>
//         </div>
 
//         {/* عنوان التصنيف */}
//         <p className="pr-6 mt-[clamp(40px,6.5vh,64px)] mb-[clamp(28px,4.3vh,44px)] text-[15px] text-[#565e74] dark:text-slate-500 font-medium">
//           القوائم التشغيلية
//         </p>
 
//         {/* أزرار القائمة */}
//         <nav className="space-y-2">
//           {navItems.map(({ id, label, Icon, ActiveIcon, route }) => {
//             const isActive = activeTab === id
//             const CurrentIcon = isActive ? ActiveIcon : Icon
//             return (
//               <button
//                 key={id}
//                 onClick={() => {
//                   setActiveTab(id)
//                   navigate(route)
//                   onNavigate?.()
//                 }}
//                 className={`w-full h-[clamp(52px,5.8vh,62px)] flex items-center gap-3 px-6 rounded-lg text-xl font-medium text-right cursor-pointer transition-all ${
//                   isActive
//                     ? 'bg-[#00B4F0] text-black shadow-sm'
//                     : 'bg-[#f4f4f4] dark:bg-[#0f243a] text-black dark:text-slate-200 hover:bg-[#ebebeb] dark:hover:bg-[#142e4a]'
//                 }`}
//               >
//                 <CurrentIcon className="w-[22px] h-[22px] shrink-0" />
//                 <span>{label}</span>
//               </button>
//             )
//           })}
//         </nav>
//       </div>
 
//       {/* الجزء السفلي */}
//       <div className="mt-auto pt-6">
//         {/* بطاقة: النظام متصل وآمن */}
//         <div className="flex items-center gap-2 h-[86px] px-[clamp(16px,calc(4.33vw-43px),40px)] bg-[#e8f6ff] dark:bg-[#0e2740]">
//           <span className="w-2.5 h-2.5 rounded-full bg-emerald-800 flex-shrink-0 animate-pulse"></span>
//           <div className="flex flex-col text-right flex-1 min-w-0">
//             <span className="whitespace-nowrap text-[clamp(13px,0.89vw,16px)] font-bold text-[#131e1a] dark:text-white">
//               النظام متصل وآمن
//             </span>
//             <span className="text-[clamp(11px,0.68vw,13px)] text-[#404946] dark:text-slate-400">
//               Sovereign Core v4.2
//             </span>
//           </div>
//           <img src={shieldIcon} alt="shield" className="w-5 h-5 object-contain flex-shrink-0" />
//         </div>
 
//         {/* بطاقة المستخدم */}
//         <div
//           onClick={() => navigate('/profile')}
//           className="flex items-center justify-between pt-[clamp(20px,5.9vh,63px)] pb-5 pr-4 pl-6 cursor-pointer group transition-colors"
//         >
//           <div className="flex items-center gap-3">
//             <img
//               src={userHani}
//               onError={(e) => {
//                 e.currentTarget.onerror = null
//                 e.currentTarget.src = '/user-hani.jpg'
//               }}
//               alt="م. هاني وشاح"
//               className="w-10 h-10 rounded-full object-cover shrink-0"
//             />
//             <div className="text-right">
//               <h4 className="text-base font-bold text-black dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
//                 م. هاني وشاح
//               </h4>
//               <p className="text-sm text-[#565e74] dark:text-slate-400">الإدارة الطالبة</p>
//             </div>
//           </div>
//           <ChevronLeftIcon className="w-4 h-4 text-slate-800 dark:text-slate-300 group-hover:-translate-x-1 transition-transform" />
//         </div>
//       </div>
//     </div>
//   )
// }
 
// /* ==================== البيانات ==================== */
 
// const infoCards = [
//   { id: 'dept', title: 'الجهة الطالبة', value: 'عمادة تقنية المعلومات والتحول الرقمي', Icon: BuildingIcon },
//   { id: 'owner', title: 'مقدم / مشرف الطلب', value: 'م فهد الأسطل (مدير إدارة مراكز البيانات)', Icon: UserCircleIcon },
//   { id: 'date', title: 'تاريخ التقديم والإعتماد', value: '24 أكتوبر 2025', Icon: CalendarIcon },
// ]
 
// const steps = [
//   { n: 1, title: 'تقديم الإحتياج', desc: 'مكتمل ومعتمد من العميد', done: true },
//   { n: 2, title: 'التدقيق الفني', desc: 'تم إجازة المواصفات الفنية', done: false },
//   { n: 3, title: 'التدقيق المالي', desc: 'تم حجز التكاليف والميزانية', done: false },
//   { n: 4, title: 'التعميد والطرح', desc: 'جاهز لطرح المنافسة العامة', done: false },
// ]
 
// const attachments = [
//   { id: 1, name: 'كراسة_المواصفات_الفنية_المعتمدة.pdf', status: 'تم الفحص الأمني', size: '2.8 MB' },
//   { id: 2, name: 'جدول_الكميات_والتسعير_الاسترشادي', status: 'تم الاعتماد المالي', size: '480 KB' },
// ]
 
// const items = [
//   { id: 1, name: 'جهاز حاسوب مكتبي', quantity: '25 جهاز', unit: 'جهاز متكامل' },
//   { id: 2, name: 'لوحة مفاتيح وفأرة لاسلكية', quantity: '25 طقم', unit: 'جهاز متكامل' },
// ]
 
// /* ==================== صفحة تفاصيل الطلب المعتمد ==================== */
 
// export default function ApprovedOrder() {
//   const [activeTab, setActiveTab] = useState('need-requests')
//   const [searchQuery, setSearchQuery] = useState('')
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
 
//   /* ── تصدير PDF ── */
//   const exportRef = useRef(null)
//   const [exporting, setExporting] = useState(false)
//   const [exportError, setExportError] = useState('')
 
//   const handleExportPdf = async () => {
//     if (!exportRef.current || exporting) return
//     setExporting(true)
//     setExportError('')
//     try {
//       // تحميل المكتبات عند الحاجة فقط
//       const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
//         import('html2canvas-pro'),
//         import('jspdf'),
//       ])
 
//       const isDark = document.documentElement.classList.contains('dark')
//       const canvas = await html2canvas(exportRef.current, {
//         scale: 2,
//         useCORS: true,
//         backgroundColor: isDark ? '#071322' : '#f3f3f3',
//         windowWidth: exportRef.current.scrollWidth,
//       })
 
//       const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
//       const margin = 8
//       const pageW = pdf.internal.pageSize.getWidth()
//       const pageH = pdf.internal.pageSize.getHeight()
//       const imgW = pageW - margin * 2
//       const imgH = (canvas.height * imgW) / canvas.width
//       const usableH = pageH - margin * 2
//       const img = canvas.toDataURL('image/png')
 
//       // تقسيم الصورة على عدة صفحات إذا كانت أطول من صفحة A4
//       let offset = 0
//       pdf.addImage(img, 'PNG', margin, margin, imgW, imgH)
//       while (imgH - offset > usableH) {
//         offset += usableH
//         pdf.addPage()
//         pdf.addImage(img, 'PNG', margin, margin - offset, imgW, imgH)
//       }
 
//       pdf.setProperties({ title: 'PR-2026-0009 - طلب معتمد' })
//       pdf.save('PR-2026-0009.pdf')
//     } catch (err) {
//       console.error('PDF export failed:', err)
//       setExportError('تعذّر تصدير الملف، حاول مرة أخرى.')
//     } finally {
//       setExporting(false)
//     }
//   }
 
//   return (
//     <div
//       dir="rtl"
//       className="min-h-screen bg-[#f3f3f3] dark:bg-[#071322] text-slate-800 dark:text-slate-100 flex flex-row overflow-x-hidden selection:bg-sky-500 selection:text-white"
//       style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
//     >
//       <AnimationStyles />
 
//       {/* ==================== القائمة الجانبية للشاشات الكبيرة ==================== */}
//       <aside className="hidden lg:block sticky top-0 h-screen overflow-y-auto w-[clamp(260px,18.4vw,353px)] shrink-0 bg-white dark:bg-[#0b1b2d] border-l border-slate-100 dark:border-slate-800">
//         <SidebarContent activeTab={activeTab} setActiveTab={setActiveTab} />
//       </aside>
 
//       {/* ==================== المحتوى الرئيسي ==================== */}
//       <div className="flex-1 flex flex-col min-w-0">
//         {/* ==================== شريط الرأس العلوي ==================== */}
//         <header className="h-16 bg-white dark:bg-[#0b1b2d] border-b border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4 px-4 sm:px-6 lg:ps-6 lg:pe-[clamp(24px,4.6vw,88px)] shrink-0 z-20">
//           {/* اليمين: زر القائمة للموبايل + مسار التنقل */}
//           <div className="flex items-center gap-3 min-w-0">
//             <button
//               type="button"
//               onClick={() => setIsMobileMenuOpen(true)}
//               className="lg:hidden w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-200"
//               aria-label="فتح القائمة"
//             >
//               <MenuIcon className="w-5 h-5" />
//             </button>
 
//             <nav aria-label="Breadcrumb" className="truncate">
//               <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-[#545f73] dark:text-slate-400">
//                 <li className="hidden sm:block">نظام إدارة المشتريات - الأزهر</li>
//                 <li className="hidden sm:block"><ChevronLeftIcon className="w-3.5 h-3.5" /></li>
//                 <li className="font-bold text-slate-900 dark:text-white">الإدارة الطالبة</li>
//                 <li><ChevronLeftIcon className="w-3.5 h-3.5" /></li>
//                 <li>
//                   <Link to="/my-orders" className="hover:text-sky-600 transition-colors">
//                     طلباتي
//                   </Link>
//                 </li>
//               </ol>
//             </nav>
//           </div>
 
//           {/* الوسط: حقل البحث */}
//           <div className="relative hidden md:block w-[clamp(220px,18vw,345px)]">
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               placeholder="بحث"
//               className="w-full h-10 rounded-full bg-[#f4f4f4] dark:bg-[#0f243a] border border-[#d4d4d4] dark:border-slate-700 pr-11 pl-4 text-sm text-slate-800 dark:text-slate-200 placeholder-[#828282] focus:outline-none focus:border-[#00B4F0] focus:bg-white dark:focus:bg-[#0f243a] transition-all"
//             />
//             <SearchIcon className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#828282]" />
//           </div>
 
//           {/* اليسار: الإشعارات + اللغة */}
//           <div className="flex items-center gap-2 sm:gap-3">
//             <NotificationMenu />
//             <span className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-slate-700"></span>
//             <LanguageMenu />
//           </div>
//         </header>
 
//         {/* ==================== محتوى الصفحة ==================== */}
//         <main className="flex-1 px-4 sm:px-6 lg:ps-6 lg:pe-[clamp(24px,4.15vw,80px)] pt-8 lg:pt-[60px] space-y-5 w-full">
//           <div ref={exportRef} className="space-y-5">
//           {/* ==================== ترويسة الطلب ==================== */}
//           <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
//             <div className="ao-enter sm:pt-[18px]">
//               <div className="flex items-center gap-2.5">
//                 <h1 className="px-3 py-1 rounded-full bg-[#ececec] dark:bg-slate-800 text-sm sm:text-[15px] font-bold text-slate-900 dark:text-white tracking-wide">
//                   PR-2026-0009
//                 </h1>
//                 <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eefff3] dark:bg-emerald-500/15 text-[#34c759] dark:text-emerald-400 font-bold text-sm">
//                   <span className="w-2.5 h-2.5 rounded-full bg-[#34c759] dark:bg-emerald-400"></span>
//                   <span>معتمد</span>
//                 </span>
//               </div>
//               <p className="mt-3 text-sm sm:text-[15px] text-slate-800 dark:text-slate-300 font-medium">
//                 تفاصيل واستحقاقات طلب الإحتياج والمشتريات المؤسسية
//               </p>
//             </div>
 
//             {/* زر إكمال وإرسال */}
//             <button
//               type="button"
//               data-html2canvas-ignore="true"
//               className="w-full sm:w-[273px] h-12 rounded-full bg-[linear-gradient(to_left,#01B0F5,#0066F0)] text-black font-bold text-[15px] hover:brightness-105 hover:shadow-lg hover:shadow-sky-500/30 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
//             >
//               إكمال وإرسال
//             </button>
//           </div>
 
//           {/* ==================== البطاقات الثلاث (مع حركات) ==================== */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 pt-6">
//             {infoCards.map(({ id, title, value, Icon }, i) => (
//               <div key={id} className="ao-enter" style={{ animationDelay: `${120 + i * 110}ms` }}>
//                 <div className="group h-full min-h-[86px] bg-white dark:bg-[#0b1b2d] rounded-2xl px-5 py-4 flex items-center gap-4 border border-transparent hover:border-sky-200 dark:hover:border-sky-800 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300 cursor-default">
//                   <span className="shrink-0 text-slate-900 dark:text-slate-100 group-hover:text-[#0095FF] transition-colors duration-300">
//                     <Icon className="ao-icon-pop w-6 h-6" />
//                   </span>
//                   <div className="min-w-0">
//                     <h3 className="text-base sm:text-[17px] font-bold text-slate-900 dark:text-white leading-snug">
//                       {title}
//                     </h3>
//                     <p className="mt-1 text-sm text-[#545f73] dark:text-slate-400 truncate">{value}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
 
//           {/* ==================== الحاوية البيضاء الكبيرة ==================== */}
//           <div className="bg-white dark:bg-[#0b1b2d] rounded-3xl p-4 space-y-6 pb-7">
//             {/* 1) مسار ومراحل الاعتماد النظامي */}
//             <div className="rounded-2xl border border-slate-200 dark:border-slate-700 px-5 sm:px-6 pt-6 pb-[50px]">
//               <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white pb-2.5 border-b border-slate-200 dark:border-slate-700">
//                 مسار ومراحل الاعتماد النظامي
//               </h2>
 
//               <ol className="grid grid-cols-1 sm:grid-cols-4 gap-8 sm:gap-0 mt-[26px]">
//                 {steps.map((s, i) => (
//                   <li key={s.n} className="ao-enter" style={{ animationDelay: `${250 + i * 100}ms` }}>
//                     {/* المربع + الخط الواصل (مسافة متساوية من الطرفين) */}
//                     <div className="flex items-center gap-2">
//                       <span
//                         className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold text-slate-900 transition-transform duration-300 hover:scale-110 ${
//                           s.done
//                             ? 'bg-[#01B0F5] ring-2 ring-[#0095FF] ring-offset-2 ring-offset-white dark:ring-offset-[#0b1b2d]'
//                             : 'bg-[#e6f4fd] dark:bg-sky-950/60 dark:text-sky-300'
//                         }`}
//                       >
//                         {s.n}
//                       </span>
//                       {i < steps.length - 1 && (
//                         <span
//                           className={`hidden sm:block flex-1 rounded-full ms-1 me-8 ${
//                             s.done ? 'h-1 bg-[#01B0F5]' : 'h-[3px] bg-[#e6f4fd] dark:bg-sky-950/60'
//                           }`}
//                         ></span>
//                       )}
//                     </div>
 
//                     {/* النصوص */}
//                     <div className="mt-3">
//                       <span
//                         className={`block text-sm leading-none ${
//                           s.done ? 'text-[#0095FF] font-semibold' : 'text-slate-500 dark:text-slate-400'
//                         }`}
//                       >
//                         الخطوة {s.n}
//                       </span>
//                       <h3 className="mt-4 text-base font-bold leading-none text-slate-900 dark:text-white">
//                         {s.title}
//                       </h3>
//                       <p className="mt-2.5 text-xs leading-none text-slate-500 dark:text-slate-400">{s.desc}</p>
//                     </div>
//                   </li>
//                 ))}
//               </ol>
//             </div>
 
//             {/* 2) المواصفات الفنية المعتمدة */}
//             <section className="space-y-2.5">
//               <h2 className="text-base font-bold text-slate-900 dark:text-white">المواصفات الفنية المعتمدة</h2>
//               <div className="rounded-xl bg-[#eaf6fd] dark:bg-sky-950/20 border border-sky-300/70 dark:border-sky-900/50 px-4 py-3 text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
//                 تجديد خوادم مركز البيانات السحابي الرئيسي توريد وحدات معالجة فائقة السرعة مع وحدات تخزين SAN ممتدة لبيئة المحاكاة
//               </div>
//             </section>
 
//             {/* 3) المبررات والأثر التشغيلي */}
//             <section className="space-y-2.5">
//               <h2 className="text-base font-bold text-slate-900 dark:text-white">المبررات والأثر التشغيلي</h2>
//               <div className="rounded-xl bg-white dark:bg-slate-800/40 border border-slate-300 dark:border-slate-700 px-4 py-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
//                 استيعاب الضغط المتزايد على المنصات الأكاديمية ونظام إبرام وبلاك بورد وتوفير سعات احتياطية تفي بمتطلبات التحول الرقمي مع توفير حماية تخزين SAN ومواصفات موثوقية عالية تواكب المعايير الوطنية.
//               </div>
//             </section>
 
//             {/* 4) المرفقات (كروت صغيرة مع حركات) */}
//             <section className="space-y-2.5">
//               <h2 className="text-base font-bold text-slate-900 dark:text-white">المرفقات والمسوغات الفنية المسجلة</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {attachments.map((f, i) => (
//                   <div key={f.id} className="ao-enter" style={{ animationDelay: `${400 + i * 110}ms` }}>
//                     <div className="group h-[80px] rounded-xl bg-[#e8f4fd] dark:bg-sky-950/20 border border-transparent hover:border-sky-300 dark:hover:border-sky-800 hover:bg-[#dff0fc] hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/10 px-4 flex items-center justify-between gap-3 transition-all duration-300">
//                       <div className="flex items-center gap-3 min-w-0">
//                         <span className="shrink-0 w-8 h-8 rounded-md bg-rose-50 dark:bg-rose-950/30 flex items-center justify-center">
//                           <PdfFileIcon className="ao-icon-pop w-5 h-5" />
//                         </span>
//                         <div className="min-w-0">
//                           <p className="text-sm sm:text-[15px] font-bold text-slate-900 dark:text-white truncate">{f.name}</p>
//                           <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
//                             {f.status} • <span dir="ltr">{f.size}</span>
//                           </p>
//                         </div>
//                       </div>
//                       <button
//                         type="button"
//                         aria-label={`تحميل ${f.name}`}
//                         className="shrink-0 w-10 h-10 rounded-full text-slate-900 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 hover:text-[#0095FF] flex items-center justify-center transition-colors cursor-pointer"
//                       >
//                         <DownloadIcon className="ao-icon-bounce w-6 h-6" />
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </section>
 
//             {/* 5) درجة الأولوية والأهمية التشغيلية */}
//             <section>
//               <h2 className="text-base font-bold text-slate-900 dark:text-white mb-6 sm:mb-10">
//                 درجة الأولوية والأهمية التشغيلية
//               </h2>
//               <div className="border border-slate-300 dark:border-slate-700 rounded-2xl overflow-x-auto">
//                 <table className="w-full min-w-[480px] text-center text-sm">
//                   <thead>
//                     <tr className="bg-[#f0f0f0] dark:bg-[#0f243a] text-slate-900 dark:text-slate-200 h-[72px] sm:h-[104px]">
//                       <th className="px-4 font-bold border-e border-slate-300 dark:border-slate-700 w-1/4">م</th>
//                       <th className="px-4 font-bold border-e border-slate-300 dark:border-slate-700 w-1/4">اسم الصنف</th>
//                       <th className="px-4 font-bold border-e border-slate-300 dark:border-slate-700 w-1/4">الكمية</th>
//                       <th className="px-4 font-bold w-1/4">وحدة القياس</th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white dark:bg-[#0b1b2d]">
//                     {items.map((item) => (
//                       <tr
//                         key={item.id}
//                         className="h-[72px] sm:h-[104px] border-t border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-bold hover:bg-sky-50/60 dark:hover:bg-slate-800/40 transition-colors"
//                       >
//                         <td className="px-4 border-e border-slate-300 dark:border-slate-700">{item.id}</td>
//                         <td className="px-4 border-e border-slate-300 dark:border-slate-700">{item.name}</td>
//                         <td className="px-4 border-e border-slate-300 dark:border-slate-700">{item.quantity}</td>
//                         <td className="px-4">{item.unit}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </section>
//           </div>
//           </div>{/* end exportRef */}
 
//           {/* ==================== أزرار الإجراء السفلية ==================== */}
//           <div className="sticky bottom-0 z-10 !mt-[52px] bg-white dark:bg-[#0b1b2d] px-4 py-4 flex flex-col sm:flex-row sm:justify-end gap-4 sm:gap-6 shadow-[0_-4px_20px_rgba(15,23,42,0.04)]">
//             {exportError && (
//               <p role="alert" className="self-center sm:me-auto text-sm font-medium text-[#E5262A]">
//                 {exportError}
//               </p>
//             )}
//             <button
//               type="button"
//               onClick={handleExportPdf}
//               disabled={exporting}
//               aria-busy={exporting}
//               className="w-full sm:w-[300px] h-12 rounded-full inline-flex items-center justify-center gap-2 bg-[linear-gradient(to_left,#01B0F5,#0066F0)] text-black font-bold text-[15px] hover:brightness-105 hover:shadow-lg hover:shadow-sky-500/30 active:scale-[0.98] disabled:opacity-70 disabled:cursor-wait disabled:active:scale-100 transition-all cursor-pointer whitespace-nowrap"
//             >
//               {exporting && <SpinnerIcon className="w-5 h-5 animate-spin" />}
//               {exporting ? 'جاري التصدير...' : 'تصدير PDF معتمد'}
//             </button>
//             <button
//               type="button"
//               onClick={() => window.print()}
//               className="w-full sm:w-[300px] h-12 rounded-full border border-[#0066F0] text-[#0066F0] bg-white dark:bg-transparent dark:border-sky-400 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-950/30 active:scale-[0.98] font-bold text-[15px] transition-all cursor-pointer whitespace-nowrap"
//             >
//               طباعة تفاصيل الطلب
//             </button>
//           </div>
//         </main>
//       </div>
 
//       {/* ==================== القائمة الجانبية للجوال ==================== */}
//       {isMobileMenuOpen && (
//         <div className="fixed inset-0 z-50 lg:hidden flex">
//           <div
//             className="fixed inset-0 bg-black/50 backdrop-blur-sm"
//             onClick={() => setIsMobileMenuOpen(false)}
//           />
//           <div className="relative w-[280px] max-w-[80%] h-full bg-white dark:bg-[#0b1b2d] shadow-2xl z-10 overflow-y-auto">
//             <SidebarContent
//               activeTab={activeTab}
//               setActiveTab={setActiveTab}
//               onNavigate={() => setIsMobileMenuOpen(false)}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }







// import { useState, useRef } from 'react'
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
 
// // أيقونة الرئيسية (شبكة 4 مربعات مفرّغة — كما في التصميم)
// const GridOutlineIcon = (props) => (
//   <svg {...strokeProps} strokeWidth={1.8} {...props}>
//     <rect x="3.5" y="3.5" width="7" height="7" rx="1" />
//     <rect x="13.5" y="3.5" width="7" height="7" rx="1" />
//     <rect x="3.5" y="13.5" width="7" height="7" rx="1" />
//     <rect x="13.5" y="13.5" width="7" height="7" rx="1" />
//   </svg>
// )
 
// // أيقونة الرئيسية في حالة التفعيل (شبكة 4 مربعات ممتلئة)
// const GridFilledIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
//     <rect x="3" y="3" width="8" height="8" rx="1.5" />
//     <rect x="13" y="3" width="8" height="8" rx="1.5" />
//     <rect x="3" y="13" width="8" height="8" rx="1.5" />
//     <rect x="13" y="13" width="8" height="8" rx="1.5" />
//   </svg>
// )
 
// // أيقونة طلب إحتياج (مستند مفرّغ)
// const NeedRequestIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5z" />
//     <path d="M14 2v5h5" />
//   </svg>
// )
 
// // أيقونة طلب إحتياج في حالة التفعيل (ملفات ممتلئة)
// const FilesFilledIcon = (props) => (
//   <svg
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     stroke="currentColor"
//     strokeWidth="1.2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     aria-hidden="true"
//     {...props}
//   >
//     <path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z" />
//     <path d="M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8" fill="none" />
//   </svg>
// )
 
// // أيقونة البحث
// const SearchIcon = (props) => (
//   <svg {...strokeProps} strokeWidth={1.5} {...props}>
//     <circle cx="11" cy="11" r="7.5" />
//     <path d="m20.5 20.5-4-4" />
//   </svg>
// )
 
// // سهم صغير لليسار (فواصل المسار + بطاقة المستخدم)
// const ChevronLeftIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <path d="m15 18-6-6 6-6" />
//   </svg>
// )
 
// // زر إغلاق القائمة للجوال
// const CloseIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <path d="M18 6 6 18M6 6l12 12" />
//   </svg>
// )
 
// // زر القائمة للجوال
// const MenuIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <path d="M4 6h16M4 12h16M4 18h16" />
//   </svg>
// )
 
// // أيقونة المبنى (الجهة الطالبة) — مبنى ممتلئ بنوافذ وباب كما في التصميم
// const BuildingIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
//     <path d="M17 11V3H7v4H3v14h8v-4h2v4h8V11h-4ZM7 19H5v-2h2v2Zm0-4H5v-2h2v2Zm0-4H5V9h2v2Zm4 4H9v-2h2v2Zm0-4H9V9h2v2Zm0-4H9V5h2v2Zm4 8h-2v-2h2v2Zm0-4h-2V9h2v2Zm0-4h-2V5h2v2Zm4 12h-2v-2h2v2Zm0-4h-2v-2h2v2Z" />
//   </svg>
// )
 
// // أيقونة المستخدم داخل دائرة ممتلئة (مقدم الطلب)
// const UserCircleIcon = (props) => (
//   <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
//     <circle cx="12" cy="12" r="10" fill="currentColor" />
//     <circle cx="12" cy="9.5" r="3.4" fill="white" className="dark:fill-[#0b1b2d]" />
//     <path
//       d="M5.6 18.2A7.8 7.8 0 0 1 12 15c2.6 0 4.9 1.25 6.4 3.2A9.9 9.9 0 0 1 12 22a9.9 9.9 0 0 1-6.4-3.8Z"
//       fill="white"
//       className="dark:fill-[#0b1b2d]"
//     />
//   </svg>
// )
 
// // أيقونة التقويم (التاريخ)
// const CalendarIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
//     <rect x="3.5" y="5" width="17" height="15.5" rx="2" stroke="currentColor" strokeWidth="2" />
//     <path d="M3.5 7a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v3h-17V7Z" fill="currentColor" />
//     <path d="M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//     <rect x="7" y="13" width="3" height="3" rx="0.6" fill="currentColor" />
//   </svg>
// )
 
// // أيقونة ملف PDF (أحمر)
// const PdfFileIcon = (props) => (
//   <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
//     <path d="M6 2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" fill="#E5262A" />
//     <path d="M14.5 2v4a1.5 1.5 0 0 0 1.5 1.5h4" fill="#F8A5A7" />
//     <text
//       x="12"
//       y="17"
//       textAnchor="middle"
//       fontSize="5.2"
//       fontWeight="800"
//       fill="white"
//       fontFamily="Arial, sans-serif"
//     >
//       PDF
//     </text>
//   </svg>
// )
 
// // أيقونة التحميل (سهم لأسفل فوق صينية)
// const DownloadIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <path d="M12 3.5v11" />
//     <path d="m7.5 10.5 4.5 4.5 4.5-4.5" />
//     <path d="M4 15.5v3A2 2 0 0 0 6 20.5h12a2 2 0 0 0 2-2v-3" />
//   </svg>
// )
 
// // مؤشر التحميل
// const SpinnerIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
//     <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
//     <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
//   </svg>
// )
 
// // عناصر القائمة الجانبية
// const navItems = [
//   { id: 'home', label: 'الرئيسية', Icon: GridOutlineIcon, ActiveIcon: GridFilledIcon, route: '/dashboard' },
//   { id: 'need-requests', label: 'طلب إحتياج', Icon: NeedRequestIcon, ActiveIcon: FilesFilledIcon, route: '/my-orders' },
// ]
 
// /* ==================== حركات (Keyframes) ==================== */
 
// const AnimationStyles = () => (
//   <style>{`
//     @keyframes ao-fade-up {
//       from { opacity: 0; transform: translateY(14px); }
//       to   { opacity: 1; transform: translateY(0); }
//     }
//     @keyframes ao-pop {
//       0%   { transform: scale(1); }
//       40%  { transform: scale(1.18) rotate(-6deg); }
//       100% { transform: scale(1.1) rotate(0); }
//     }
//     @keyframes ao-bounce-down {
//       0%, 100% { transform: translateY(0); }
//       50%      { transform: translateY(3px); }
//     }
//     .ao-enter { animation: ao-fade-up .55s cubic-bezier(.22,1,.36,1) both; }
//     .group:hover .ao-icon-pop { animation: ao-pop .45s ease-out forwards; }
//     .group:hover .ao-icon-bounce { animation: ao-bounce-down .8s ease-in-out infinite; }
//     @media (prefers-reduced-motion: reduce) {
//       .ao-enter, .group:hover .ao-icon-pop, .group:hover .ao-icon-bounce { animation: none; }
//     }
//   `}</style>
// )
 
// /* ==================== محتوى القائمة الجانبية (Sidebar) ==================== */
 
// function SidebarContent({ activeTab, setActiveTab, onNavigate }) {
//   const navigate = useNavigate()
//   return (
//     <div className="min-h-full flex flex-col bg-white dark:bg-[#0b1b2d] pr-[clamp(16px,2.08vw,40px)]">
//       {/* الجزء العلوي */}
//       <div className="pl-4 pt-[clamp(20px,3vh,32px)]">
//         {/* الشعار + اسم المنصة */}
//         <div className="pr-6">
//           <Link to="/dashboard" onClick={onNavigate} className="inline-block">
//             <img
//               src={logo}
//               alt="IBRAM إبرام للمشتريات"
//               className="h-[clamp(100px,4.7vh,52px)] w-auto object-contain"
//             />
//           </Link>
//           <p className="mt-2 text-base text-[#565e74] dark:text-slate-400 font-semibold">
//             إبرام للمشتريات
//           </p>
//         </div>
 
//         {/* عنوان التصنيف */}
//         <p className="pr-6 mt-[clamp(40px,6.5vh,64px)] mb-[clamp(28px,4.3vh,44px)] text-[15px] text-[#565e74] dark:text-slate-500 font-medium">
//           القوائم التشغيلية
//         </p>
 
//         {/* أزرار القائمة */}
//         <nav className="space-y-2">
//           {navItems.map(({ id, label, Icon, ActiveIcon, route }) => {
//             const isActive = activeTab === id
//             const CurrentIcon = isActive ? ActiveIcon : Icon
//             return (
//               <button
//                 key={id}
//                 onClick={() => {
//                   setActiveTab(id)
//                   navigate(route)
//                   onNavigate?.()
//                 }}
//                 className={`w-full h-[clamp(52px,5.8vh,62px)] flex items-center gap-3 px-6 rounded-lg text-xl font-medium text-right cursor-pointer transition-all ${
//                   isActive
//                     ? 'bg-[#00B4F0] text-black shadow-sm'
//                     : 'bg-[#f4f4f4] dark:bg-[#0f243a] text-black dark:text-slate-200 hover:bg-[#ebebeb] dark:hover:bg-[#142e4a]'
//                 }`}
//               >
//                 <CurrentIcon className="w-[22px] h-[22px] shrink-0" />
//                 <span>{label}</span>
//               </button>
//             )
//           })}
//         </nav>
//       </div>
 
//       {/* الجزء السفلي */}
//       <div className="mt-auto pt-6">
//         {/* بطاقة: النظام متصل وآمن */}
//         <div className="flex items-center gap-2 h-[86px] px-[clamp(16px,calc(4.33vw-43px),40px)] bg-[#e8f6ff] dark:bg-[#0e2740]">
//           <span className="w-2.5 h-2.5 rounded-full bg-emerald-800 flex-shrink-0 animate-pulse"></span>
//           <div className="flex flex-col text-right flex-1 min-w-0">
//             <span className="whitespace-nowrap text-[clamp(13px,0.89vw,16px)] font-bold text-[#131e1a] dark:text-white">
//               النظام متصل وآمن
//             </span>
//             <span className="text-[clamp(11px,0.68vw,13px)] text-[#404946] dark:text-slate-400">
//               Sovereign Core v4.2
//             </span>
//           </div>
//           <img src={shieldIcon} alt="shield" className="w-5 h-5 object-contain flex-shrink-0" />
//         </div>
 
//         {/* بطاقة المستخدم */}
//         <div
//           onClick={() => navigate('/profile')}
//           className="flex items-center justify-between pt-[clamp(20px,5.9vh,63px)] pb-5 pr-4 pl-6 cursor-pointer group transition-colors"
//         >
//           <div className="flex items-center gap-3">
//             <img
//               src={userHani}
//               onError={(e) => {
//                 e.currentTarget.onerror = null
//                 e.currentTarget.src = '/user-hani.jpg'
//               }}
//               alt="م. هاني وشاح"
//               className="w-10 h-10 rounded-full object-cover shrink-0"
//             />
//             <div className="text-right">
//               <h4 className="text-base font-bold text-black dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
//                 م. هاني وشاح
//               </h4>
//               <p className="text-sm text-[#565e74] dark:text-slate-400">الإدارة الطالبة</p>
//             </div>
//           </div>
//           <ChevronLeftIcon className="w-4 h-4 text-slate-800 dark:text-slate-300 group-hover:-translate-x-1 transition-transform" />
//         </div>
//       </div>
//     </div>
//   )
// }
 
// /* ==================== البيانات ==================== */
 
// const infoCards = [
//   { id: 'dept', title: 'الجهة الطالبة', value: 'عمادة تقنية المعلومات والتحول الرقمي', Icon: BuildingIcon },
//   { id: 'owner', title: 'مقدم / مشرف الطلب', value: 'م فهد الأسطل (مدير إدارة مراكز البيانات)', Icon: UserCircleIcon },
//   { id: 'date', title: 'تاريخ التقديم والإعتماد', value: '24 أكتوبر 2025', Icon: CalendarIcon },
// ]
 
// const steps = [
//   { n: 1, title: 'تقديم الإحتياج', desc: 'مكتمل ومعتمد من العميد', done: true },
//   { n: 2, title: 'التدقيق الفني', desc: 'تم إجازة المواصفات الفنية', done: false },
//   { n: 3, title: 'التدقيق المالي', desc: 'تم حجز التكاليف والميزانية', done: false },
//   { n: 4, title: 'التعميد والطرح', desc: 'جاهز لطرح المنافسة العامة', done: false },
// ]
 
// const attachments = [
//   { id: 1, name: 'كراسة_المواصفات_الفنية_المعتمدة.pdf', status: 'تم الفحص الأمني', size: '2.8 MB' },
//   { id: 2, name: 'جدول_الكميات_والتسعير_الاسترشادي', status: 'تم الاعتماد المالي', size: '480 KB' },
// ]
 
// const items = [
//   { id: 1, name: 'جهاز حاسوب مكتبي', quantity: '25 جهاز', unit: 'جهاز متكامل' },
//   { id: 2, name: 'لوحة مفاتيح وفأرة لاسلكية', quantity: '25 طقم', unit: 'جهاز متكامل' },
// ]
 
// /* ==================== صفحة تفاصيل الطلب المعتمد ==================== */
 
// export default function ApprovedOrder() {
//   const [activeTab, setActiveTab] = useState('need-requests')
//   const [searchQuery, setSearchQuery] = useState('')
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
 
//   /* ── تصدير PDF ── */
//   const exportRef = useRef(null)
//   const [exporting, setExporting] = useState(false)
//   const [exportError, setExportError] = useState('')
 
//   const handleExportPdf = async () => {
//     if (!exportRef.current || exporting) return
//     setExporting(true)
//     setExportError('')
//     try {
//       // تحميل المكتبات عند الحاجة فقط
//       const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
//         import('html2canvas-pro'),
//         import('jspdf'),
//       ])
 
//       const isDark = document.documentElement.classList.contains('dark')
//       const canvas = await html2canvas(exportRef.current, {
//         scale: 2,
//         useCORS: true,
//         backgroundColor: isDark ? '#071322' : '#f3f3f3',
//         windowWidth: exportRef.current.scrollWidth,
//       })
 
//       const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
//       const margin = 8
//       const pageW = pdf.internal.pageSize.getWidth()
//       const pageH = pdf.internal.pageSize.getHeight()
//       const imgW = pageW - margin * 2
//       const imgH = (canvas.height * imgW) / canvas.width
//       const usableH = pageH - margin * 2
//       const img = canvas.toDataURL('image/png')
 
//       // تقسيم الصورة على عدة صفحات إذا كانت أطول من صفحة A4
//       let offset = 0
//       pdf.addImage(img, 'PNG', margin, margin, imgW, imgH)
//       while (imgH - offset > usableH) {
//         offset += usableH
//         pdf.addPage()
//         pdf.addImage(img, 'PNG', margin, margin - offset, imgW, imgH)
//       }
 
//       pdf.setProperties({ title: 'PR-2026-0009 - طلب معتمد' })
//       pdf.save('PR-2026-0009.pdf')
//     } catch (err) {
//       console.error('PDF export failed:', err)
//       setExportError('تعذّر تصدير الملف، حاول مرة أخرى.')
//     } finally {
//       setExporting(false)
//     }
//   }
 
//   return (
//     <div
//       dir="rtl"
//       className="min-h-screen bg-[#f3f3f3] dark:bg-[#071322] text-slate-800 dark:text-slate-100 flex flex-row overflow-x-hidden selection:bg-sky-500 selection:text-white"
//       style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
//     >
//       <AnimationStyles />
 
//       {/* ==================== القائمة الجانبية للشاشات الكبيرة ==================== */}
//       <aside className="hidden lg:block sticky top-0 h-screen overflow-y-auto w-[clamp(260px,18.4vw,353px)] shrink-0 bg-white dark:bg-[#0b1b2d] border-l border-slate-100 dark:border-slate-800">
//         <SidebarContent activeTab={activeTab} setActiveTab={setActiveTab} />
//       </aside>
 
//       {/* ==================== المحتوى الرئيسي ==================== */}
//       <div className="flex-1 flex flex-col min-w-0">
//         {/* ==================== شريط الرأس العلوي ==================== */}
//         <header className="h-16 bg-white dark:bg-[#0b1b2d] border-b border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4 px-4 sm:px-6 lg:ps-6 lg:pe-[clamp(24px,4.6vw,88px)] shrink-0 z-20">
//           {/* اليمين: زر القائمة للموبايل + مسار التنقل */}
//           <div className="flex items-center gap-3 min-w-0">
//             <button
//               type="button"
//               onClick={() => setIsMobileMenuOpen(true)}
//               className="lg:hidden w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-200"
//               aria-label="فتح القائمة"
//             >
//               <MenuIcon className="w-5 h-5" />
//             </button>
 
//             <nav aria-label="Breadcrumb" className="truncate">
//               <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-[#545f73] dark:text-slate-400">
//                 <li className="hidden sm:block">نظام إدارة المشتريات - الأزهر</li>
//                 <li className="hidden sm:block"><ChevronLeftIcon className="w-3.5 h-3.5" /></li>
//                 <li className="font-bold text-slate-900 dark:text-white">الإدارة الطالبة</li>
//                 <li><ChevronLeftIcon className="w-3.5 h-3.5" /></li>
//                 <li>
//                   <Link to="/my-orders" className="hover:text-sky-600 transition-colors">
//                     طلباتي
//                   </Link>
//                 </li>
//               </ol>
//             </nav>
//           </div>
 
//           {/* الوسط: حقل البحث */}
//           <div className="relative hidden lg:block shrink-0 w-[clamp(200px,18vw,345px)]">
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               placeholder="بحث"
//               className="w-full h-10 rounded-full bg-[#f4f4f4] dark:bg-[#0f243a] border border-[#d4d4d4] dark:border-slate-700 pr-11 pl-4 text-sm text-slate-800 dark:text-slate-200 placeholder-[#828282] focus:outline-none focus:border-[#00B4F0] focus:bg-white dark:focus:bg-[#0f243a] transition-all"
//             />
//             <SearchIcon className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#828282]" />
//           </div>
 
//           {/* اليسار: الإشعارات + اللغة */}
//           <div className="flex items-center gap-2 sm:gap-3 shrink-0 whitespace-nowrap">
//             <NotificationMenu />
//             <span className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-slate-700"></span>
//             <LanguageMenu />
//           </div>
//         </header>
 
//         {/* ==================== محتوى الصفحة ==================== */}
//         <main className="flex-1 px-4 sm:px-6 lg:ps-6 lg:pe-[clamp(24px,4.15vw,80px)] pt-6 sm:pt-8 lg:pt-[60px] space-y-5 w-full min-w-0">
//           <div ref={exportRef} className="space-y-5">
//           {/* ==================== ترويسة الطلب ==================== */}
//           <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
//             <div className="ao-enter sm:pt-[18px]">
//               <div className="flex flex-wrap items-center gap-2.5">
//                 <h1 className="px-3 py-1 rounded-full bg-[#ececec] dark:bg-slate-800 text-sm sm:text-[15px] font-bold text-slate-900 dark:text-white tracking-wide">
//                   PR-2026-0009
//                 </h1>
//                 <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eefff3] dark:bg-emerald-500/15 text-[#34c759] dark:text-emerald-400 font-bold text-sm">
//                   <span className="w-2.5 h-2.5 rounded-full bg-[#34c759] dark:bg-emerald-400"></span>
//                   <span>معتمد</span>
//                 </span>
//               </div>
//               <p className="mt-3 text-sm sm:text-[15px] text-slate-800 dark:text-slate-300 font-medium">
//                 تفاصيل واستحقاقات طلب الإحتياج والمشتريات المؤسسية
//               </p>
//             </div>
 
//             {/* زر إكمال وإرسال */}
//             <button
//               type="button"
//               data-html2canvas-ignore="true"
//               className="w-full sm:w-[273px] h-12 rounded-full bg-[linear-gradient(to_left,#01B0F5,#0066F0)] text-black font-bold text-[15px] hover:brightness-105 hover:shadow-lg hover:shadow-sky-500/30 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
//             >
//               إكمال وإرسال
//             </button>
//           </div>
 
//           {/* ==================== البطاقات الثلاث (مع حركات) ==================== */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 pt-2 sm:pt-6">
//             {infoCards.map(({ id, title, value, Icon }, i) => (
//               <div
//                 key={id}
//                 className={`ao-enter ${i === infoCards.length - 1 ? 'sm:col-span-2 xl:col-span-1' : ''}`}
//                 style={{ animationDelay: `${120 + i * 110}ms` }}
//               >
//                 <div className="group h-full min-h-[86px] bg-white dark:bg-[#0b1b2d] rounded-2xl px-5 py-4 flex items-center gap-4 border border-transparent hover:border-sky-200 dark:hover:border-sky-800 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300 cursor-default">
//                   <span className="shrink-0 text-slate-900 dark:text-slate-100 group-hover:text-[#0095FF] transition-colors duration-300">
//                     <Icon className="ao-icon-pop w-6 h-6" />
//                   </span>
//                   <div className="min-w-0">
//                     <h3 className="text-[15px] sm:text-base 2xl:text-[17px] font-bold text-slate-900 dark:text-white leading-snug">
//                       {title}
//                     </h3>
//                     <p className="mt-1 text-sm text-[#545f73] dark:text-slate-400 truncate">{value}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
 
//           {/* ==================== الحاوية البيضاء الكبيرة ==================== */}
//           <div className="bg-white dark:bg-[#0b1b2d] rounded-2xl sm:rounded-3xl p-3 sm:p-4 space-y-6 pb-6 sm:pb-7">
//             {/* 1) مسار ومراحل الاعتماد النظامي */}
//             <div className="rounded-2xl border border-slate-200 dark:border-slate-700 px-4 sm:px-6 pt-5 sm:pt-6 pb-6 sm:pb-10 lg:pb-[50px]">
//               <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white pb-2.5 border-b border-slate-200 dark:border-slate-700">
//                 مسار ومراحل الاعتماد النظامي
//               </h2>
 
//               <ol className="grid grid-cols-1 sm:grid-cols-4 gap-6 sm:gap-0 mt-5 sm:mt-[26px]">
//                 {steps.map((s, i) => (
//                   <li
//                     key={s.n}
//                     className="ao-enter relative flex sm:block items-start gap-4"
//                     style={{ animationDelay: `${250 + i * 100}ms` }}
//                   >
//                     {/* خط عمودي يربط الخطوات على الجوال */}
//                     {i < steps.length - 1 && (
//                       <span
//                         aria-hidden="true"
//                         className={`sm:hidden absolute top-12 -bottom-4 start-[18.5px] w-[3px] rounded-full ${
//                           s.done ? 'bg-[#01B0F5]' : 'bg-[#e6f4fd] dark:bg-sky-950/60'
//                         }`}
//                       ></span>
//                     )}
//                     {/* المربع + الخط الواصل (مسافة متساوية من الطرفين) */}
//                     <div className="flex items-center gap-2 shrink-0 sm:shrink">
//                       <span
//                         className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold text-slate-900 transition-transform duration-300 hover:scale-110 ${
//                           s.done
//                             ? 'bg-[#01B0F5] ring-2 ring-[#0095FF] ring-offset-2 ring-offset-white dark:ring-offset-[#0b1b2d]'
//                             : 'bg-[#e6f4fd] dark:bg-sky-950/60 dark:text-sky-300'
//                         }`}
//                       >
//                         {s.n}
//                       </span>
//                       {i < steps.length - 1 && (
//                         <span
//                           className={`hidden sm:block flex-1 rounded-full ms-1 me-4 lg:me-8 ${
//                             s.done ? 'h-1 bg-[#01B0F5]' : 'h-[3px] bg-[#e6f4fd] dark:bg-sky-950/60'
//                           }`}
//                         ></span>
//                       )}
//                     </div>
 
//                     {/* النصوص */}
//                     <div className="pt-1 sm:pt-0 sm:mt-3 sm:pe-2">
//                       <span
//                         className={`block text-sm leading-none ${
//                           s.done ? 'text-[#0095FF] font-semibold' : 'text-slate-500 dark:text-slate-400'
//                         }`}
//                       >
//                         الخطوة {s.n}
//                       </span>
//                       <h3 className="mt-3 sm:mt-4 text-[15px] lg:text-base font-bold leading-tight text-slate-900 dark:text-white">
//                         {s.title}
//                       </h3>
//                       <p className="mt-2 sm:mt-2.5 text-xs leading-snug text-slate-500 dark:text-slate-400">{s.desc}</p>
//                     </div>
//                   </li>
//                 ))}
//               </ol>
//             </div>
 
//             {/* 2) المواصفات الفنية المعتمدة */}
//             <section className="space-y-2.5">
//               <h2 className="text-base font-bold text-slate-900 dark:text-white">المواصفات الفنية المعتمدة</h2>
//               <div className="rounded-xl bg-[#eaf6fd] dark:bg-sky-950/20 border border-sky-300/70 dark:border-sky-900/50 px-4 py-3 text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
//                 تجديد خوادم مركز البيانات السحابي الرئيسي توريد وحدات معالجة فائقة السرعة مع وحدات تخزين SAN ممتدة لبيئة المحاكاة
//               </div>
//             </section>
 
//             {/* 3) المبررات والأثر التشغيلي */}
//             <section className="space-y-2.5">
//               <h2 className="text-base font-bold text-slate-900 dark:text-white">المبررات والأثر التشغيلي</h2>
//               <div className="rounded-xl bg-white dark:bg-slate-800/40 border border-slate-300 dark:border-slate-700 px-4 py-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
//                 استيعاب الضغط المتزايد على المنصات الأكاديمية ونظام إبرام وبلاك بورد وتوفير سعات احتياطية تفي بمتطلبات التحول الرقمي مع توفير حماية تخزين SAN ومواصفات موثوقية عالية تواكب المعايير الوطنية.
//               </div>
//             </section>
 
//             {/* 4) المرفقات (كروت صغيرة مع حركات) */}
//             <section className="space-y-2.5">
//               <h2 className="text-base font-bold text-slate-900 dark:text-white">المرفقات والمسوغات الفنية المسجلة</h2>
//               <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-4">
//                 {attachments.map((f, i) => (
//                   <div key={f.id} className="ao-enter" style={{ animationDelay: `${400 + i * 110}ms` }}>
//                     <div className="group min-h-[80px] py-3 rounded-xl bg-[#e8f4fd] dark:bg-sky-950/20 border border-transparent hover:border-sky-300 dark:hover:border-sky-800 hover:bg-[#dff0fc] hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/10 px-4 flex items-center justify-between gap-3 transition-all duration-300">
//                       <div className="flex items-center gap-3 min-w-0">
//                         <span className="shrink-0 w-8 h-8 rounded-md bg-rose-50 dark:bg-rose-950/30 flex items-center justify-center">
//                           <PdfFileIcon className="ao-icon-pop w-5 h-5" />
//                         </span>
//                         <div className="min-w-0">
//                           <p className="text-sm sm:text-[15px] font-bold text-slate-900 dark:text-white break-all line-clamp-2">{f.name}</p>
//                           <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
//                             {f.status} • <span dir="ltr">{f.size}</span>
//                           </p>
//                         </div>
//                       </div>
//                       <button
//                         type="button"
//                         aria-label={`تحميل ${f.name}`}
//                         className="shrink-0 w-10 h-10 rounded-full text-slate-900 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 hover:text-[#0095FF] flex items-center justify-center transition-colors cursor-pointer"
//                       >
//                         <DownloadIcon className="ao-icon-bounce w-6 h-6" />
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </section>
 
//             {/* 5) درجة الأولوية والأهمية التشغيلية */}
//             <section>
//               <h2 className="text-base font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 lg:mb-10">
//                 درجة الأولوية والأهمية التشغيلية
//               </h2>
//               {/* الجوال: كل صنف في بطاقة */}
//               <ul className="sm:hidden space-y-3">
//                 {items.map((item) => (
//                   <li
//                     key={item.id}
//                     className="rounded-xl border border-slate-300 dark:border-slate-700 overflow-hidden"
//                   >
//                     <div className="flex items-center gap-3 px-4 py-3 bg-[#f0f0f0] dark:bg-[#0f243a]">
//                       <span className="shrink-0 w-7 h-7 rounded-md bg-white dark:bg-[#0b1b2d] flex items-center justify-center text-sm font-bold text-slate-900 dark:text-white">
//                         {item.id}
//                       </span>
//                       <span className="text-sm font-bold text-slate-900 dark:text-white">{item.name}</span>
//                     </div>
//                     <dl className="grid grid-cols-2 divide-x divide-x-reverse divide-slate-300 dark:divide-slate-700 bg-white dark:bg-[#0b1b2d]">
//                       <div className="px-4 py-3">
//                         <dt className="text-xs text-slate-500 dark:text-slate-400">الكمية</dt>
//                         <dd className="mt-1 text-sm font-bold text-slate-900 dark:text-slate-100">{item.quantity}</dd>
//                       </div>
//                       <div className="px-4 py-3">
//                         <dt className="text-xs text-slate-500 dark:text-slate-400">وحدة القياس</dt>
//                         <dd className="mt-1 text-sm font-bold text-slate-900 dark:text-slate-100">{item.unit}</dd>
//                       </div>
//                     </dl>
//                   </li>
//                 ))}
//               </ul>
 
//               {/* التابلت وما فوق: جدول */}
//               <div className="hidden sm:block border border-slate-300 dark:border-slate-700 rounded-2xl overflow-x-auto">
//                 <table className="w-full text-center text-sm">
//                   <thead>
//                     <tr className="bg-[#f0f0f0] dark:bg-[#0f243a] text-slate-900 dark:text-slate-200 h-[72px] lg:h-[104px]">
//                       <th className="px-4 font-bold border-e border-slate-300 dark:border-slate-700 w-1/4">م</th>
//                       <th className="px-4 font-bold border-e border-slate-300 dark:border-slate-700 w-1/4">اسم الصنف</th>
//                       <th className="px-4 font-bold border-e border-slate-300 dark:border-slate-700 w-1/4">الكمية</th>
//                       <th className="px-4 font-bold w-1/4">وحدة القياس</th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white dark:bg-[#0b1b2d]">
//                     {items.map((item) => (
//                       <tr
//                         key={item.id}
//                         className="h-[72px] lg:h-[104px] border-t border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-bold hover:bg-sky-50/60 dark:hover:bg-slate-800/40 transition-colors"
//                       >
//                         <td className="px-4 border-e border-slate-300 dark:border-slate-700">{item.id}</td>
//                         <td className="px-4 border-e border-slate-300 dark:border-slate-700">{item.name}</td>
//                         <td className="px-4 border-e border-slate-300 dark:border-slate-700">{item.quantity}</td>
//                         <td className="px-4">{item.unit}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </section>
//           </div>
//           </div>{/* end exportRef */}
 
//           {/* ==================== أزرار الإجراء السفلية ==================== */}
//           <div className="sticky bottom-0 z-10 !mt-8 lg:!mt-[52px] -mx-4 sm:mx-0 bg-white dark:bg-[#0b1b2d] px-4 pt-3 sm:pt-4 pb-[max(12px,env(safe-area-inset-bottom))] sm:pb-4 grid grid-cols-2 sm:flex sm:justify-end gap-3 sm:gap-6 shadow-[0_-4px_20px_rgba(15,23,42,0.06)]">
//             {exportError && (
//               <p role="alert" className="col-span-2 order-last sm:order-none self-center sm:me-auto text-sm font-medium text-[#E5262A]">
//                 {exportError}
//               </p>
//             )}
//             <button
//               type="button"
//               onClick={handleExportPdf}
//               disabled={exporting}
//               aria-busy={exporting}
//               className="w-full sm:w-[min(300px,45%)] lg:w-[300px] h-11 sm:h-12 px-2 rounded-full inline-flex items-center justify-center gap-2 bg-[linear-gradient(to_left,#01B0F5,#0066F0)] text-black font-bold text-[13px] sm:text-[15px] hover:brightness-105 hover:shadow-lg hover:shadow-sky-500/30 active:scale-[0.98] disabled:opacity-70 disabled:cursor-wait disabled:active:scale-100 transition-all cursor-pointer whitespace-nowrap"
//             >
//               {exporting && <SpinnerIcon className="w-5 h-5 animate-spin" />}
//               {exporting ? 'جاري التصدير...' : 'تصدير PDF معتمد'}
//             </button>
//             <button
//               type="button"
//               onClick={() => window.print()}
//               className="w-full sm:w-[min(300px,45%)] lg:w-[300px] h-11 sm:h-12 px-2 rounded-full border border-[#0066F0] text-[#0066F0] bg-white dark:bg-transparent dark:border-sky-400 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-950/30 active:scale-[0.98] font-bold text-[13px] sm:text-[15px] transition-all cursor-pointer whitespace-nowrap"
//             >
//               طباعة تفاصيل الطلب
//             </button>
//           </div>
//         </main>
//       </div>
 
//       {/* ==================== القائمة الجانبية للجوال ==================== */}
//       {isMobileMenuOpen && (
//         <div className="fixed inset-0 z-50 lg:hidden flex">
//           <div
//             className="fixed inset-0 bg-black/50 backdrop-blur-sm"
//             onClick={() => setIsMobileMenuOpen(false)}
//           />
//           <div className="relative w-[300px] max-w-[85%] h-full bg-white dark:bg-[#0b1b2d] shadow-2xl z-10 overflow-y-auto">
//             <button
//               type="button"
//               onClick={() => setIsMobileMenuOpen(false)}
//               aria-label="إغلاق القائمة"
//               className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-200"
//             >
//               <CloseIcon className="w-4 h-4" />
//             </button>
//             <SidebarContent
//               activeTab={activeTab}
//               setActiveTab={setActiveTab}
//               onNavigate={() => setIsMobileMenuOpen(false)}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }





// 1010101010




// import { useState, useRef, useEffect } from 'react'
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
 
// // أيقونة الرئيسية (شبكة 4 مربعات مفرّغة — كما في التصميم)
// const GridOutlineIcon = (props) => (
//   <svg {...strokeProps} strokeWidth={1.8} {...props}>
//     <rect x="3.5" y="3.5" width="7" height="7" rx="1" />
//     <rect x="13.5" y="3.5" width="7" height="7" rx="1" />
//     <rect x="3.5" y="13.5" width="7" height="7" rx="1" />
//     <rect x="13.5" y="13.5" width="7" height="7" rx="1" />
//   </svg>
// )
 
// // أيقونة الرئيسية في حالة التفعيل (شبكة 4 مربعات ممتلئة)
// const GridFilledIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
//     <rect x="3" y="3" width="8" height="8" rx="1.5" />
//     <rect x="13" y="3" width="8" height="8" rx="1.5" />
//     <rect x="3" y="13" width="8" height="8" rx="1.5" />
//     <rect x="13" y="13" width="8" height="8" rx="1.5" />
//   </svg>
// )
 
// // أيقونة طلب إحتياج (مستند مفرّغ)
// const NeedRequestIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5z" />
//     <path d="M14 2v5h5" />
//   </svg>
// )
 
// // أيقونة طلب إحتياج في حالة التفعيل (ملفات ممتلئة)
// const FilesFilledIcon = (props) => (
//   <svg
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     stroke="currentColor"
//     strokeWidth="1.2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     aria-hidden="true"
//     {...props}
//   >
//     <path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z" />
//     <path d="M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8" fill="none" />
//   </svg>
// )
 
// // أيقونة البحث
// const SearchIcon = (props) => (
//   <svg {...strokeProps} strokeWidth={1.5} {...props}>
//     <circle cx="11" cy="11" r="7.5" />
//     <path d="m20.5 20.5-4-4" />
//   </svg>
// )
 
// // سهم صغير لليسار (فواصل المسار + بطاقة المستخدم)
// const ChevronLeftIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <path d="m15 18-6-6 6-6" />
//   </svg>
// )
 
// // زر إغلاق القائمة للجوال
// const CloseIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <path d="M18 6 6 18M6 6l12 12" />
//   </svg>
// )
 
// // زر القائمة للجوال
// const MenuIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <path d="M4 6h16M4 12h16M4 18h16" />
//   </svg>
// )
 
// // أيقونة المبنى (الجهة الطالبة) — مبنى ممتلئ بنوافذ وباب كما في التصميم
// const BuildingIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
//     <path d="M17 11V3H7v4H3v14h8v-4h2v4h8V11h-4ZM7 19H5v-2h2v2Zm0-4H5v-2h2v2Zm0-4H5V9h2v2Zm4 4H9v-2h2v2Zm0-4H9V9h2v2Zm0-4H9V5h2v2Zm4 8h-2v-2h2v2Zm0-4h-2V9h2v2Zm0-4h-2V5h2v2Zm4 12h-2v-2h2v2Zm0-4h-2v-2h2v2Z" />
//   </svg>
// )
 
// // أيقونة المستخدم داخل دائرة ممتلئة (مقدم الطلب)
// const UserCircleIcon = (props) => (
//   <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
//     <circle cx="12" cy="12" r="10" fill="currentColor" />
//     <circle cx="12" cy="9.5" r="3.4" fill="white" className="dark:fill-[#0b1b2d]" />
//     <path
//       d="M5.6 18.2A7.8 7.8 0 0 1 12 15c2.6 0 4.9 1.25 6.4 3.2A9.9 9.9 0 0 1 12 22a9.9 9.9 0 0 1-6.4-3.8Z"
//       fill="white"
//       className="dark:fill-[#0b1b2d]"
//     />
//   </svg>
// )
 
// // أيقونة التقويم (التاريخ)
// const CalendarIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
//     <rect x="3.5" y="5" width="17" height="15.5" rx="2" stroke="currentColor" strokeWidth="2" />
//     <path d="M3.5 7a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v3h-17V7Z" fill="currentColor" />
//     <path d="M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//     <rect x="7" y="13" width="3" height="3" rx="0.6" fill="currentColor" />
//   </svg>
// )
 
// // أيقونة ملف PDF (أحمر)
// const PdfFileIcon = (props) => (
//   <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
//     <path d="M6 2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" fill="#E5262A" />
//     <path d="M14.5 2v4a1.5 1.5 0 0 0 1.5 1.5h4" fill="#F8A5A7" />
//     <text
//       x="12"
//       y="17"
//       textAnchor="middle"
//       fontSize="5.2"
//       fontWeight="800"
//       fill="white"
//       fontFamily="Arial, sans-serif"
//     >
//       PDF
//     </text>
//   </svg>
// )
 
// // أيقونة التحميل (سهم لأسفل فوق صينية)
// const DownloadIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <path d="M12 3.5v11" />
//     <path d="m7.5 10.5 4.5 4.5 4.5-4.5" />
//     <path d="M4 15.5v3A2 2 0 0 0 6 20.5h12a2 2 0 0 0 2-2v-3" />
//   </svg>
// )
 
// // أيقونة إرسال (طائرة ورقية)
// const SendIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <path d="M22 2 11 13" />
//     <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
//   </svg>
// )
 
// // أيقونة صح
// const CheckIcon = (props) => (
//   <svg {...strokeProps} strokeWidth={2.5} {...props}>
//     <path d="M20 6 9 17l-5-5" />
//   </svg>
// )
 
// // أيقونة تنبيه
// const AlertIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <circle cx="12" cy="12" r="10" />
//     <path d="M12 8v4M12 16h.01" />
//   </svg>
// )
 
// // مؤشر التحميل
// const SpinnerIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
//     <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
//     <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
//   </svg>
// )
 
// // عناصر القائمة الجانبية
// const navItems = [
//   { id: 'home', label: 'الرئيسية', Icon: GridOutlineIcon, ActiveIcon: GridFilledIcon, route: '/dashboard' },
//   { id: 'need-requests', label: 'طلب إحتياج', Icon: NeedRequestIcon, ActiveIcon: FilesFilledIcon, route: '/my-orders' },
// ]
 
// /* ==================== حركات (Keyframes) ==================== */
 
// const AnimationStyles = () => (
//   <style>{`
//     @keyframes ao-fade-up {
//       from { opacity: 0; transform: translateY(14px); }
//       to   { opacity: 1; transform: translateY(0); }
//     }
//     @keyframes ao-pop {
//       0%   { transform: scale(1); }
//       40%  { transform: scale(1.18) rotate(-6deg); }
//       100% { transform: scale(1.1) rotate(0); }
//     }
//     @keyframes ao-bounce-down {
//       0%, 100% { transform: translateY(0); }
//       50%      { transform: translateY(3px); }
//     }
//     @keyframes ao-toast-in {
//       from { opacity: 0; transform: translate(-50%, 12px); }
//       to   { opacity: 1; transform: translate(-50%, 0); }
//     }
//     @keyframes ao-modal-in {
//       from { opacity: 0; transform: scale(.95) translateY(8px); }
//       to   { opacity: 1; transform: scale(1) translateY(0); }
//     }
//     .ao-toast { animation: ao-toast-in .3s ease-out both; }
//     .ao-modal { animation: ao-modal-in .25s cubic-bezier(.22,1,.36,1) both; }
//     .ao-enter { animation: ao-fade-up .55s cubic-bezier(.22,1,.36,1) both; }
//     .group:hover .ao-icon-pop { animation: ao-pop .45s ease-out forwards; }
//     .group:hover .ao-icon-bounce { animation: ao-bounce-down .8s ease-in-out infinite; }
//     @media (prefers-reduced-motion: reduce) {
//       .ao-enter, .ao-toast, .ao-modal, .group:hover .ao-icon-pop, .group:hover .ao-icon-bounce { animation: none; }
//     }
//   `}</style>
// )
 
// /* ==================== محتوى القائمة الجانبية (Sidebar) ==================== */
 
// function SidebarContent({ activeTab, setActiveTab, onNavigate }) {
//   const navigate = useNavigate()
//   return (
//     <div className="min-h-full flex flex-col bg-white dark:bg-[#0b1b2d] pr-[clamp(16px,2.08vw,40px)]">
//       {/* الجزء العلوي */}
//       <div className="pl-4 pt-[clamp(20px,3vh,32px)]">
//         {/* الشعار + اسم المنصة */}
//         <div className="pr-6">
//           <Link to="/dashboard" onClick={onNavigate} className="inline-block">
//             <img
//               src={logo}
//               alt="IBRAM إبرام للمشتريات"
//               className="h-[clamp(100px,4.7vh,52px)] w-auto object-contain"
//             />
//           </Link>
//           <p className="mt-2 text-base text-[#565e74] dark:text-slate-400 font-semibold">
//             إبرام للمشتريات
//           </p>
//         </div>
 
//         {/* عنوان التصنيف */}
//         <p className="pr-6 mt-[clamp(40px,6.5vh,64px)] mb-[clamp(28px,4.3vh,44px)] text-[15px] text-[#565e74] dark:text-slate-500 font-medium">
//           القوائم التشغيلية
//         </p>
 
//         {/* أزرار القائمة */}
//         <nav className="space-y-2">
//           {navItems.map(({ id, label, Icon, ActiveIcon, route }) => {
//             const isActive = activeTab === id
//             const CurrentIcon = isActive ? ActiveIcon : Icon
//             return (
//               <button
//                 key={id}
//                 onClick={() => {
//                   setActiveTab(id)
//                   navigate(route)
//                   onNavigate?.()
//                 }}
//                 className={`w-full h-[clamp(52px,5.8vh,62px)] flex items-center gap-3 px-6 rounded-lg text-xl font-medium text-right cursor-pointer transition-all ${
//                   isActive
//                     ? 'bg-[#00B4F0] text-black shadow-sm'
//                     : 'bg-[#f4f4f4] dark:bg-[#0f243a] text-black dark:text-slate-200 hover:bg-[#ebebeb] dark:hover:bg-[#142e4a]'
//                 }`}
//               >
//                 <CurrentIcon className="w-[22px] h-[22px] shrink-0" />
//                 <span>{label}</span>
//               </button>
//             )
//           })}
//         </nav>
//       </div>
 
//       {/* الجزء السفلي */}
//       <div className="mt-auto pt-6">
//         {/* بطاقة: النظام متصل وآمن */}
//         <div className="flex items-center gap-2 h-[86px] px-[clamp(16px,calc(4.33vw-43px),40px)] bg-[#e8f6ff] dark:bg-[#0e2740]">
//           <span className="w-2.5 h-2.5 rounded-full bg-emerald-800 flex-shrink-0 animate-pulse"></span>
//           <div className="flex flex-col text-right flex-1 min-w-0">
//             <span className="whitespace-nowrap text-[clamp(13px,0.89vw,16px)] font-bold text-[#131e1a] dark:text-white">
//               النظام متصل وآمن
//             </span>
//             <span className="text-[clamp(11px,0.68vw,13px)] text-[#404946] dark:text-slate-400">
//               Sovereign Core v4.2
//             </span>
//           </div>
//           <img src={shieldIcon} alt="shield" className="w-5 h-5 object-contain flex-shrink-0" />
//         </div>
 
//         {/* بطاقة المستخدم */}
//         <div
//           onClick={() => navigate('/profile')}
//           className="flex items-center justify-between pt-[clamp(20px,5.9vh,63px)] pb-5 pr-4 pl-6 cursor-pointer group transition-colors"
//         >
//           <div className="flex items-center gap-3">
//             <img
//               src={userHani}
//               onError={(e) => {
//                 e.currentTarget.onerror = null
//                 e.currentTarget.src = '/user-hani.jpg'
//               }}
//               alt="م. هاني وشاح"
//               className="w-10 h-10 rounded-full object-cover shrink-0"
//             />
//             <div className="text-right">
//               <h4 className="text-base font-bold text-black dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
//                 م. هاني وشاح
//               </h4>
//               <p className="text-sm text-[#565e74] dark:text-slate-400">الإدارة الطالبة</p>
//             </div>
//           </div>
//           <ChevronLeftIcon className="w-4 h-4 text-slate-800 dark:text-slate-300 group-hover:-translate-x-1 transition-transform" />
//         </div>
//       </div>
//     </div>
//   )
// }
 
// /* ==================== نافذة تأكيد الإرسال ==================== */
 
// function ConfirmSendDialog({ open, sending, onCancel, onConfirm }) {
//   const confirmRef = useRef(null)
 
//   useEffect(() => {
//     if (!open) return
//     confirmRef.current?.focus()
//     const onKey = (e) => { if (e.key === 'Escape' && !sending) onCancel() }
//     document.addEventListener('keydown', onKey)
//     document.body.style.overflow = 'hidden'
//     return () => {
//       document.removeEventListener('keydown', onKey)
//       document.body.style.overflow = ''
//     }
//   }, [open, sending, onCancel])
 
//   if (!open) return null
 
//   return (
//     <div
//       className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4"
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="confirm-send-title"
//     >
//       <div
//         className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
//         onClick={() => !sending && onCancel()}
//       />
//       <div className="ao-modal relative w-full sm:max-w-[460px] bg-white dark:bg-[#0b1b2d] rounded-t-3xl sm:rounded-3xl shadow-2xl p-6 sm:p-7 pb-[max(24px,env(safe-area-inset-bottom))]">
//         <div className="w-14 h-14 rounded-2xl bg-[#e6f4fd] dark:bg-sky-950/50 text-[#0066F0] dark:text-sky-400 flex items-center justify-center mb-4">
//           <SendIcon className="w-7 h-7" />
//         </div>
//         <h2 id="confirm-send-title" className="text-lg font-bold text-slate-900 dark:text-white">
//           تأكيد إكمال وإرسال الطلب
//         </h2>
//         <p className="mt-2 text-sm leading-relaxed text-[#545f73] dark:text-slate-400">
//           سيتم إرسال الطلب <span dir="ltr" className="font-bold text-slate-900 dark:text-white">PR-2026-0009</span>{' '}
//           إلى المرحلة التالية (التدقيق الفني). لن تتمكن من تعديله بعد الإرسال، هل تريد المتابعة؟
//         </p>
 
//         <div className="mt-6 grid grid-cols-2 gap-3">
//           <button
//             type="button"
//             onClick={onCancel}
//             disabled={sending}
//             className="h-12 rounded-full border border-[#0066F0] text-[#0066F0] dark:border-sky-400 dark:text-sky-400 font-bold text-sm hover:bg-sky-50 dark:hover:bg-sky-950/30 disabled:opacity-50 transition-all cursor-pointer"
//           >
//             إلغاء
//           </button>
//           <button
//             ref={confirmRef}
//             type="button"
//             onClick={onConfirm}
//             disabled={sending}
//             aria-busy={sending}
//             className="h-12 rounded-full inline-flex items-center justify-center gap-2 bg-[linear-gradient(to_left,#01B0F5,#0066F0)] text-black font-bold text-sm hover:brightness-105 disabled:opacity-70 disabled:cursor-wait transition-all cursor-pointer"
//           >
//             {sending && <SpinnerIcon className="w-5 h-5 animate-spin" />}
//             {sending ? 'جاري الإرسال...' : 'تأكيد الإرسال'}
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }
 
// /* ==================== البيانات ==================== */
 
// const infoCards = [
//   { id: 'dept', title: 'الجهة الطالبة', value: 'عمادة تقنية المعلومات والتحول الرقمي', Icon: BuildingIcon },
//   { id: 'owner', title: 'مقدم / مشرف الطلب', value: 'م فهد الأسطل (مدير إدارة مراكز البيانات)', Icon: UserCircleIcon },
//   { id: 'date', title: 'تاريخ التقديم والإعتماد', value: '24 أكتوبر 2025', Icon: CalendarIcon },
// ]
 
// const steps = [
//   { n: 1, title: 'تقديم الإحتياج', desc: 'مكتمل ومعتمد من العميد', done: true },
//   { n: 2, title: 'التدقيق الفني', desc: 'تم إجازة المواصفات الفنية', done: false },
//   { n: 3, title: 'التدقيق المالي', desc: 'تم حجز التكاليف والميزانية', done: false },
//   { n: 4, title: 'التعميد والطرح', desc: 'جاهز لطرح المنافسة العامة', done: false },
// ]
 
// const attachments = [
//   { id: 1, name: 'كراسة_المواصفات_الفنية_المعتمدة.pdf', status: 'تم الفحص الأمني', size: '2.8 MB' },
//   { id: 2, name: 'جدول_الكميات_والتسعير_الاسترشادي', status: 'تم الاعتماد المالي', size: '480 KB' },
// ]
 
// const items = [
//   { id: 1, name: 'جهاز حاسوب مكتبي', quantity: '25 جهاز', unit: 'جهاز متكامل' },
//   { id: 2, name: 'لوحة مفاتيح وفأرة لاسلكية', quantity: '25 طقم', unit: 'جهاز متكامل' },
// ]
 
// /* ==================== صفحة تفاصيل الطلب المعتمد ==================== */
 
// export default function ApprovedOrder() {
//   const [activeTab, setActiveTab] = useState('need-requests')
//   const [searchQuery, setSearchQuery] = useState('')
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
 
//   /* ── إكمال وإرسال ── */
//   const [confirmOpen, setConfirmOpen] = useState(false)
//   const [sending, setSending] = useState(false)
//   const [sent, setSent] = useState(false)
//   const [toast, setToast] = useState(null) // { type: 'success' | 'error', text }
 
//   useEffect(() => {
//     if (!toast) return
//     const t = setTimeout(() => setToast(null), 4000)
//     return () => clearTimeout(t)
//   }, [toast])
 
//   // TODO: استبدل هذه الدالة بطلب الـ API الحقيقي، مثال:
//   // await fetch('/api/orders/PR-2026-0009/submit', { method: 'POST' })
//   const submitOrder = () => new Promise((resolve) => setTimeout(resolve, 1200))
 
//   const handleConfirmSend = async () => {
//     setSending(true)
//     try {
//       await submitOrder()
//       setSent(true)
//       setConfirmOpen(false)
//       setToast({ type: 'success', text: 'تم إرسال الطلب بنجاح إلى مرحلة التدقيق الفني' })
//     } catch (err) {
//       console.error('Submit failed:', err)
//       setConfirmOpen(false)
//       setToast({ type: 'error', text: 'تعذّر إرسال الطلب، حاول مرة أخرى.' })
//     } finally {
//       setSending(false)
//     }
//   }
 
//   /* ── تصدير PDF ── */
//   const exportRef = useRef(null)
//   const [exporting, setExporting] = useState(false)
//   const [exportError, setExportError] = useState('')
 
//   const handleExportPdf = async () => {
//     if (!exportRef.current || exporting) return
//     setExporting(true)
//     setExportError('')
//     try {
//       // تحميل المكتبات عند الحاجة فقط
//       const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
//         import('html2canvas-pro'),
//         import('jspdf'),
//       ])
 
//       const isDark = document.documentElement.classList.contains('dark')
//       const canvas = await html2canvas(exportRef.current, {
//         scale: 2,
//         useCORS: true,
//         backgroundColor: isDark ? '#071322' : '#f3f3f3',
//         windowWidth: exportRef.current.scrollWidth,
//       })
 
//       const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
//       const margin = 8
//       const pageW = pdf.internal.pageSize.getWidth()
//       const pageH = pdf.internal.pageSize.getHeight()
//       const imgW = pageW - margin * 2
//       const imgH = (canvas.height * imgW) / canvas.width
//       const usableH = pageH - margin * 2
//       const img = canvas.toDataURL('image/png')
 
//       // تقسيم الصورة على عدة صفحات إذا كانت أطول من صفحة A4
//       let offset = 0
//       pdf.addImage(img, 'PNG', margin, margin, imgW, imgH)
//       while (imgH - offset > usableH) {
//         offset += usableH
//         pdf.addPage()
//         pdf.addImage(img, 'PNG', margin, margin - offset, imgW, imgH)
//       }
 
//       pdf.setProperties({ title: 'PR-2026-0009 - طلب معتمد' })
//       pdf.save('PR-2026-0009.pdf')
//     } catch (err) {
//       console.error('PDF export failed:', err)
//       setExportError('تعذّر تصدير الملف، حاول مرة أخرى.')
//     } finally {
//       setExporting(false)
//     }
//   }
 
//   return (
//     <div
//       dir="rtl"
//       className="min-h-screen bg-[#f3f3f3] dark:bg-[#071322] text-slate-800 dark:text-slate-100 flex flex-row overflow-x-hidden selection:bg-sky-500 selection:text-white"
//       style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
//     >
//       <AnimationStyles />
 
//       {/* ==================== القائمة الجانبية للشاشات الكبيرة ==================== */}
//       <aside className="hidden lg:block sticky top-0 h-screen overflow-y-auto w-[clamp(260px,18.4vw,353px)] shrink-0 bg-white dark:bg-[#0b1b2d] border-l border-slate-100 dark:border-slate-800">
//         <SidebarContent activeTab={activeTab} setActiveTab={setActiveTab} />
//       </aside>
 
//       {/* ==================== المحتوى الرئيسي ==================== */}
//       <div className="flex-1 flex flex-col min-w-0">
//         {/* ==================== شريط الرأس العلوي ==================== */}
//         <header className="h-16 bg-white dark:bg-[#0b1b2d] border-b border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4 px-4 sm:px-6 lg:ps-6 lg:pe-[clamp(24px,4.6vw,88px)] shrink-0 z-20">
//           {/* اليمين: زر القائمة للموبايل + مسار التنقل */}
//           <div className="flex items-center gap-3 min-w-0">
//             <button
//               type="button"
//               onClick={() => setIsMobileMenuOpen(true)}
//               className="lg:hidden w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-200"
//               aria-label="فتح القائمة"
//             >
//               <MenuIcon className="w-5 h-5" />
//             </button>
 
//             <nav aria-label="Breadcrumb" className="truncate">
//               <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-[#545f73] dark:text-slate-400">
//                 <li className="hidden sm:block">نظام إدارة المشتريات - الأزهر</li>
//                 <li className="hidden sm:block"><ChevronLeftIcon className="w-3.5 h-3.5" /></li>
//                 <li className="font-bold text-slate-900 dark:text-white">الإدارة الطالبة</li>
//                 <li><ChevronLeftIcon className="w-3.5 h-3.5" /></li>
//                 <li>
//                   <Link to="/my-orders" className="hover:text-sky-600 transition-colors">
//                     طلباتي
//                   </Link>
//                 </li>
//               </ol>
//             </nav>
//           </div>
 
//           {/* الوسط: حقل البحث */}
//           <div className="relative hidden lg:block shrink-0 w-[clamp(200px,18vw,345px)]">
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               placeholder="بحث"
//               className="w-full h-10 rounded-full bg-[#f4f4f4] dark:bg-[#0f243a] border border-[#d4d4d4] dark:border-slate-700 pr-11 pl-4 text-sm text-slate-800 dark:text-slate-200 placeholder-[#828282] focus:outline-none focus:border-[#00B4F0] focus:bg-white dark:focus:bg-[#0f243a] transition-all"
//             />
//             <SearchIcon className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#828282]" />
//           </div>
 
//           {/* اليسار: الإشعارات + اللغة */}
//           <div className="flex items-center gap-2 sm:gap-3 shrink-0 whitespace-nowrap">
//             <NotificationMenu />
//             <span className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-slate-700"></span>
//             <LanguageMenu />
//           </div>
//         </header>
 
//         {/* ==================== محتوى الصفحة ==================== */}
//         <main className="flex-1 px-4 sm:px-6 lg:ps-6 lg:pe-[clamp(24px,4.15vw,80px)] pt-6 sm:pt-8 lg:pt-[60px] space-y-5 w-full min-w-0">
//           <div ref={exportRef} className="space-y-5">
//           {/* ==================== ترويسة الطلب ==================== */}
//           <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
//             <div className="ao-enter sm:pt-[18px]">
//               <div className="flex flex-wrap items-center gap-2.5">
//                 <h1 className="px-3 py-1 rounded-full bg-[#ececec] dark:bg-slate-800 text-sm sm:text-[15px] font-bold text-slate-900 dark:text-white tracking-wide">
//                   PR-2026-0009
//                 </h1>
//                 <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eefff3] dark:bg-emerald-500/15 text-[#34c759] dark:text-emerald-400 font-bold text-sm">
//                   <span className="w-2.5 h-2.5 rounded-full bg-[#34c759] dark:bg-emerald-400"></span>
//                   <span>معتمد</span>
//                 </span>
//               </div>
//               <p className="mt-3 text-sm sm:text-[15px] text-slate-800 dark:text-slate-300 font-medium">
//                 تفاصيل واستحقاقات طلب الإحتياج والمشتريات المؤسسية
//               </p>
//             </div>
 
//             {/* زر إكمال وإرسال */}
//             <button
//               type="button"
//               data-html2canvas-ignore="true"
//               onClick={() => setConfirmOpen(true)}
//               disabled={sent}
//               className={`w-full sm:w-[273px] h-12 rounded-full inline-flex items-center justify-center gap-2 font-bold text-[15px] transition-all whitespace-nowrap ${
//                 sent
//                   ? 'bg-[#eefff3] dark:bg-emerald-500/15 text-[#1f9d47] dark:text-emerald-400 cursor-default'
//                   : 'bg-[linear-gradient(to_left,#01B0F5,#0066F0)] text-black hover:brightness-105 hover:shadow-lg hover:shadow-sky-500/30 active:scale-[0.98] cursor-pointer'
//               }`}
//             >
//               {sent && <CheckIcon className="w-5 h-5" />}
//               {sent ? 'تم الإرسال' : 'إكمال وإرسال'}
//             </button>
//           </div>
 
//           {/* ==================== البطاقات الثلاث (مع حركات) ==================== */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 pt-2 sm:pt-6">
//             {infoCards.map(({ id, title, value, Icon }, i) => (
//               <div
//                 key={id}
//                 className={`ao-enter ${i === infoCards.length - 1 ? 'sm:col-span-2 xl:col-span-1' : ''}`}
//                 style={{ animationDelay: `${120 + i * 110}ms` }}
//               >
//                 <div className="group h-full min-h-[86px] bg-white dark:bg-[#0b1b2d] rounded-2xl px-5 py-4 flex items-center gap-4 border border-transparent hover:border-sky-200 dark:hover:border-sky-800 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300 cursor-default">
//                   <span className="shrink-0 text-slate-900 dark:text-slate-100 group-hover:text-[#0095FF] transition-colors duration-300">
//                     <Icon className="ao-icon-pop w-6 h-6" />
//                   </span>
//                   <div className="min-w-0">
//                     <h3 className="text-[15px] sm:text-base 2xl:text-[17px] font-bold text-slate-900 dark:text-white leading-snug">
//                       {title}
//                     </h3>
//                     <p className="mt-1 text-sm text-[#545f73] dark:text-slate-400 truncate">{value}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
 
//           {/* ==================== الحاوية البيضاء الكبيرة ==================== */}
//           <div className="bg-white dark:bg-[#0b1b2d] rounded-2xl sm:rounded-3xl p-3 sm:p-4 space-y-6 pb-6 sm:pb-7">
//             {/* 1) مسار ومراحل الاعتماد النظامي */}
//             <div className="rounded-2xl border border-slate-200 dark:border-slate-700 px-4 sm:px-6 pt-5 sm:pt-6 pb-6 sm:pb-10 lg:pb-[50px]">
//               <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white pb-2.5 border-b border-slate-200 dark:border-slate-700">
//                 مسار ومراحل الاعتماد النظامي
//               </h2>
 
//               <ol className="grid grid-cols-1 sm:grid-cols-4 gap-6 sm:gap-0 mt-5 sm:mt-[26px]">
//                 {steps.map((s, i) => (
//                   <li
//                     key={s.n}
//                     className="ao-enter relative flex sm:block items-start gap-4"
//                     style={{ animationDelay: `${250 + i * 100}ms` }}
//                   >
//                     {/* خط عمودي يربط الخطوات على الجوال */}
//                     {i < steps.length - 1 && (
//                       <span
//                         aria-hidden="true"
//                         className={`sm:hidden absolute top-12 -bottom-4 start-[18.5px] w-[3px] rounded-full ${
//                           s.done ? 'bg-[#01B0F5]' : 'bg-[#e6f4fd] dark:bg-sky-950/60'
//                         }`}
//                       ></span>
//                     )}
//                     {/* المربع + الخط الواصل (مسافة متساوية من الطرفين) */}
//                     <div className="flex items-center gap-2 shrink-0 sm:shrink">
//                       <span
//                         className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold text-slate-900 transition-transform duration-300 hover:scale-110 ${
//                           s.done
//                             ? 'bg-[#01B0F5] ring-2 ring-[#0095FF] ring-offset-2 ring-offset-white dark:ring-offset-[#0b1b2d]'
//                             : 'bg-[#e6f4fd] dark:bg-sky-950/60 dark:text-sky-300'
//                         }`}
//                       >
//                         {s.n}
//                       </span>
//                       {i < steps.length - 1 && (
//                         <span
//                           className={`hidden sm:block flex-1 rounded-full ms-1 me-4 lg:me-8 ${
//                             s.done ? 'h-1 bg-[#01B0F5]' : 'h-[3px] bg-[#e6f4fd] dark:bg-sky-950/60'
//                           }`}
//                         ></span>
//                       )}
//                     </div>
 
//                     {/* النصوص */}
//                     <div className="pt-1 sm:pt-0 sm:mt-3 sm:pe-2">
//                       <span
//                         className={`block text-sm leading-none ${
//                           s.done ? 'text-[#0095FF] font-semibold' : 'text-slate-500 dark:text-slate-400'
//                         }`}
//                       >
//                         الخطوة {s.n}
//                       </span>
//                       <h3 className="mt-3 sm:mt-4 text-[15px] lg:text-base font-bold leading-tight text-slate-900 dark:text-white">
//                         {s.title}
//                       </h3>
//                       <p className="mt-2 sm:mt-2.5 text-xs leading-snug text-slate-500 dark:text-slate-400">{s.desc}</p>
//                     </div>
//                   </li>
//                 ))}
//               </ol>
//             </div>
 
//             {/* 2) المواصفات الفنية المعتمدة */}
//             <section className="space-y-2.5">
//               <h2 className="text-base font-bold text-slate-900 dark:text-white">المواصفات الفنية المعتمدة</h2>
//               <div className="rounded-xl bg-[#eaf6fd] dark:bg-sky-950/20 border border-sky-300/70 dark:border-sky-900/50 px-4 py-3 text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
//                 تجديد خوادم مركز البيانات السحابي الرئيسي توريد وحدات معالجة فائقة السرعة مع وحدات تخزين SAN ممتدة لبيئة المحاكاة
//               </div>
//             </section>
 
//             {/* 3) المبررات والأثر التشغيلي */}
//             <section className="space-y-2.5">
//               <h2 className="text-base font-bold text-slate-900 dark:text-white">المبررات والأثر التشغيلي</h2>
//               <div className="rounded-xl bg-white dark:bg-slate-800/40 border border-slate-300 dark:border-slate-700 px-4 py-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
//                 استيعاب الضغط المتزايد على المنصات الأكاديمية ونظام إبرام وبلاك بورد وتوفير سعات احتياطية تفي بمتطلبات التحول الرقمي مع توفير حماية تخزين SAN ومواصفات موثوقية عالية تواكب المعايير الوطنية.
//               </div>
//             </section>
 
//             {/* 4) المرفقات (كروت صغيرة مع حركات) */}
//             <section className="space-y-2.5">
//               <h2 className="text-base font-bold text-slate-900 dark:text-white">المرفقات والمسوغات الفنية المسجلة</h2>
//               <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-4">
//                 {attachments.map((f, i) => (
//                   <div key={f.id} className="ao-enter" style={{ animationDelay: `${400 + i * 110}ms` }}>
//                     <div className="group min-h-[80px] py-3 rounded-xl bg-[#e8f4fd] dark:bg-sky-950/20 border border-transparent hover:border-sky-300 dark:hover:border-sky-800 hover:bg-[#dff0fc] hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/10 px-4 flex items-center justify-between gap-3 transition-all duration-300">
//                       <div className="flex items-center gap-3 min-w-0">
//                         <span className="shrink-0 w-8 h-8 rounded-md bg-rose-50 dark:bg-rose-950/30 flex items-center justify-center">
//                           <PdfFileIcon className="ao-icon-pop w-5 h-5" />
//                         </span>
//                         <div className="min-w-0">
//                           <p className="text-sm sm:text-[15px] font-bold text-slate-900 dark:text-white break-all line-clamp-2">{f.name}</p>
//                           <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
//                             {f.status} • <span dir="ltr">{f.size}</span>
//                           </p>
//                         </div>
//                       </div>
//                       <button
//                         type="button"
//                         aria-label={`تحميل ${f.name}`}
//                         className="shrink-0 w-10 h-10 rounded-full text-slate-900 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 hover:text-[#0095FF] flex items-center justify-center transition-colors cursor-pointer"
//                       >
//                         <DownloadIcon className="ao-icon-bounce w-6 h-6" />
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </section>
 
//             {/* 5) درجة الأولوية والأهمية التشغيلية */}
//             <section>
//               <h2 className="text-base font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 lg:mb-10">
//                 درجة الأولوية والأهمية التشغيلية
//               </h2>
//               {/* الجوال: كل صنف في بطاقة */}
//               <ul className="sm:hidden space-y-3">
//                 {items.map((item) => (
//                   <li
//                     key={item.id}
//                     className="rounded-xl border border-slate-300 dark:border-slate-700 overflow-hidden"
//                   >
//                     <div className="flex items-center gap-3 px-4 py-3 bg-[#f0f0f0] dark:bg-[#0f243a]">
//                       <span className="shrink-0 w-7 h-7 rounded-md bg-white dark:bg-[#0b1b2d] flex items-center justify-center text-sm font-bold text-slate-900 dark:text-white">
//                         {item.id}
//                       </span>
//                       <span className="text-sm font-bold text-slate-900 dark:text-white">{item.name}</span>
//                     </div>
//                     <dl className="grid grid-cols-2 divide-x divide-x-reverse divide-slate-300 dark:divide-slate-700 bg-white dark:bg-[#0b1b2d]">
//                       <div className="px-4 py-3">
//                         <dt className="text-xs text-slate-500 dark:text-slate-400">الكمية</dt>
//                         <dd className="mt-1 text-sm font-bold text-slate-900 dark:text-slate-100">{item.quantity}</dd>
//                       </div>
//                       <div className="px-4 py-3">
//                         <dt className="text-xs text-slate-500 dark:text-slate-400">وحدة القياس</dt>
//                         <dd className="mt-1 text-sm font-bold text-slate-900 dark:text-slate-100">{item.unit}</dd>
//                       </div>
//                     </dl>
//                   </li>
//                 ))}
//               </ul>
 
//               {/* التابلت وما فوق: جدول */}
//               <div className="hidden sm:block border border-slate-300 dark:border-slate-700 rounded-2xl overflow-x-auto">
//                 <table className="w-full text-center text-sm">
//                   <thead>
//                     <tr className="bg-[#f0f0f0] dark:bg-[#0f243a] text-slate-900 dark:text-slate-200 h-[72px] lg:h-[104px]">
//                       <th className="px-4 font-bold border-e border-slate-300 dark:border-slate-700 w-1/4">م</th>
//                       <th className="px-4 font-bold border-e border-slate-300 dark:border-slate-700 w-1/4">اسم الصنف</th>
//                       <th className="px-4 font-bold border-e border-slate-300 dark:border-slate-700 w-1/4">الكمية</th>
//                       <th className="px-4 font-bold w-1/4">وحدة القياس</th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white dark:bg-[#0b1b2d]">
//                     {items.map((item) => (
//                       <tr
//                         key={item.id}
//                         className="h-[72px] lg:h-[104px] border-t border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-bold hover:bg-sky-50/60 dark:hover:bg-slate-800/40 transition-colors"
//                       >
//                         <td className="px-4 border-e border-slate-300 dark:border-slate-700">{item.id}</td>
//                         <td className="px-4 border-e border-slate-300 dark:border-slate-700">{item.name}</td>
//                         <td className="px-4 border-e border-slate-300 dark:border-slate-700">{item.quantity}</td>
//                         <td className="px-4">{item.unit}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </section>
//           </div>
//           </div>{/* end exportRef */}
 
//           {/* ==================== أزرار الإجراء السفلية ==================== */}
//           <div className="sticky bottom-0 z-10 !mt-8 lg:!mt-[52px] -mx-4 sm:mx-0 bg-white dark:bg-[#0b1b2d] px-4 pt-3 sm:pt-4 pb-[max(12px,env(safe-area-inset-bottom))] sm:pb-4 grid grid-cols-2 sm:flex sm:justify-end gap-3 sm:gap-6 shadow-[0_-4px_20px_rgba(15,23,42,0.06)]">
//             {exportError && (
//               <p role="alert" className="col-span-2 order-last sm:order-none self-center sm:me-auto text-sm font-medium text-[#E5262A]">
//                 {exportError}
//               </p>
//             )}
//             <button
//               type="button"
//               onClick={handleExportPdf}
//               disabled={exporting}
//               aria-busy={exporting}
//               className="w-full sm:w-[min(300px,45%)] lg:w-[300px] h-11 sm:h-12 px-2 rounded-full inline-flex items-center justify-center gap-2 bg-[linear-gradient(to_left,#01B0F5,#0066F0)] text-black font-bold text-[13px] sm:text-[15px] hover:brightness-105 hover:shadow-lg hover:shadow-sky-500/30 active:scale-[0.98] disabled:opacity-70 disabled:cursor-wait disabled:active:scale-100 transition-all cursor-pointer whitespace-nowrap"
//             >
//               {exporting && <SpinnerIcon className="w-5 h-5 animate-spin" />}
//               {exporting ? 'جاري التصدير...' : 'تصدير PDF معتمد'}
//             </button>
//             <button
//               type="button"
//               onClick={() => window.print()}
//               className="w-full sm:w-[min(300px,45%)] lg:w-[300px] h-11 sm:h-12 px-2 rounded-full border border-[#0066F0] text-[#0066F0] bg-white dark:bg-transparent dark:border-sky-400 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-950/30 active:scale-[0.98] font-bold text-[13px] sm:text-[15px] transition-all cursor-pointer whitespace-nowrap"
//             >
//               طباعة تفاصيل الطلب
//             </button>
//           </div>
//         </main>
//       </div>
 
//       {/* ==================== نافذة التأكيد + رسالة النتيجة ==================== */}
//       <ConfirmSendDialog
//         open={confirmOpen}
//         sending={sending}
//         onCancel={() => setConfirmOpen(false)}
//         onConfirm={handleConfirmSend}
//       />
 
//       {toast && (
//         <div
//           role="status"
//           aria-live="polite"
//           className={`ao-toast fixed z-[70] left-1/2 bottom-24 sm:bottom-28 w-[calc(100%-32px)] sm:w-auto max-w-[480px] flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-xl text-sm font-bold ${
//             toast.type === 'success'
//               ? 'bg-[#eefff3] text-[#1f7a3a] border border-[#b9efc9] dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800'
//               : 'bg-rose-50 text-[#c81e22] border border-rose-200 dark:bg-rose-950 dark:text-rose-300 dark:border-rose-800'
//           }`}
//         >
//           {toast.type === 'success' ? <CheckIcon className="w-5 h-5 shrink-0" /> : <AlertIcon className="w-5 h-5 shrink-0" />}
//           <span>{toast.text}</span>
//         </div>
//       )}
 
//       {/* ==================== القائمة الجانبية للجوال ==================== */}
//       {isMobileMenuOpen && (
//         <div className="fixed inset-0 z-50 lg:hidden flex">
//           <div
//             className="fixed inset-0 bg-black/50 backdrop-blur-sm"
//             onClick={() => setIsMobileMenuOpen(false)}
//           />
//           <div className="relative w-[300px] max-w-[85%] h-full bg-white dark:bg-[#0b1b2d] shadow-2xl z-10 overflow-y-auto">
//             <button
//               type="button"
//               onClick={() => setIsMobileMenuOpen(false)}
//               aria-label="إغلاق القائمة"
//               className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-200"
//             >
//               <CloseIcon className="w-4 h-4" />
//             </button>
//             <SidebarContent
//               activeTab={activeTab}
//               setActiveTab={setActiveTab}
//               onNavigate={() => setIsMobileMenuOpen(false)}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }
















// import { useState, useRef, useEffect } from 'react'
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
 
// // أيقونة الرئيسية (شبكة 4 مربعات مفرّغة — كما في التصميم)
// const GridOutlineIcon = (props) => (
//   <svg {...strokeProps} strokeWidth={1.8} {...props}>
//     <rect x="3.5" y="3.5" width="7" height="7" rx="1" />
//     <rect x="13.5" y="3.5" width="7" height="7" rx="1" />
//     <rect x="3.5" y="13.5" width="7" height="7" rx="1" />
//     <rect x="13.5" y="13.5" width="7" height="7" rx="1" />
//   </svg>
// )
 
// // أيقونة الرئيسية في حالة التفعيل (شبكة 4 مربعات ممتلئة)
// const GridFilledIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
//     <rect x="3" y="3" width="8" height="8" rx="1.5" />
//     <rect x="13" y="3" width="8" height="8" rx="1.5" />
//     <rect x="3" y="13" width="8" height="8" rx="1.5" />
//     <rect x="13" y="13" width="8" height="8" rx="1.5" />
//   </svg>
// )
 
// // أيقونة طلب إحتياج (مستند مفرّغ)
// const NeedRequestIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5z" />
//     <path d="M14 2v5h5" />
//   </svg>
// )
 
// // أيقونة طلب إحتياج في حالة التفعيل (ملفات ممتلئة)
// const FilesFilledIcon = (props) => (
//   <svg
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     stroke="currentColor"
//     strokeWidth="1.2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     aria-hidden="true"
//     {...props}
//   >
//     <path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z" />
//     <path d="M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8" fill="none" />
//   </svg>
// )
 
// // أيقونة البحث
// const SearchIcon = (props) => (
//   <svg {...strokeProps} strokeWidth={1.5} {...props}>
//     <circle cx="11" cy="11" r="7.5" />
//     <path d="m20.5 20.5-4-4" />
//   </svg>
// )
 
// // سهم صغير لليسار (فواصل المسار + بطاقة المستخدم)
// const ChevronLeftIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <path d="m15 18-6-6 6-6" />
//   </svg>
// )
 
// // زر إغلاق القائمة للجوال
// const CloseIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <path d="M18 6 6 18M6 6l12 12" />
//   </svg>
// )
 
// // زر القائمة للجوال
// const MenuIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <path d="M4 6h16M4 12h16M4 18h16" />
//   </svg>
// )
 
// // أيقونة المبنى (الجهة الطالبة) — مبنى ممتلئ بنوافذ وباب كما في التصميم
// const BuildingIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
//     <path d="M17 11V3H7v4H3v14h8v-4h2v4h8V11h-4ZM7 19H5v-2h2v2Zm0-4H5v-2h2v2Zm0-4H5V9h2v2Zm4 4H9v-2h2v2Zm0-4H9V9h2v2Zm0-4H9V5h2v2Zm4 8h-2v-2h2v2Zm0-4h-2V9h2v2Zm0-4h-2V5h2v2Zm4 12h-2v-2h2v2Zm0-4h-2v-2h2v2Z" />
//   </svg>
// )
 
// // أيقونة المستخدم داخل دائرة ممتلئة (مقدم الطلب)
// const UserCircleIcon = (props) => (
//   <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
//     <circle cx="12" cy="12" r="10" fill="currentColor" />
//     <circle cx="12" cy="9.5" r="3.4" fill="white" className="dark:fill-[#0b1b2d]" />
//     <path
//       d="M5.6 18.2A7.8 7.8 0 0 1 12 15c2.6 0 4.9 1.25 6.4 3.2A9.9 9.9 0 0 1 12 22a9.9 9.9 0 0 1-6.4-3.8Z"
//       fill="white"
//       className="dark:fill-[#0b1b2d]"
//     />
//   </svg>
// )
 
// // أيقونة التقويم (التاريخ)
// const CalendarIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
//     <rect x="3.5" y="5" width="17" height="15.5" rx="2" stroke="currentColor" strokeWidth="2" />
//     <path d="M3.5 7a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v3h-17V7Z" fill="currentColor" />
//     <path d="M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//     <rect x="7" y="13" width="3" height="3" rx="0.6" fill="currentColor" />
//   </svg>
// )
 
// // أيقونة ملف PDF (أحمر)
// const PdfFileIcon = (props) => (
//   <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
//     <path d="M6 2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" fill="#E5262A" />
//     <path d="M14.5 2v4a1.5 1.5 0 0 0 1.5 1.5h4" fill="#F8A5A7" />
//     <text
//       x="12"
//       y="17"
//       textAnchor="middle"
//       fontSize="5.2"
//       fontWeight="800"
//       fill="white"
//       fontFamily="Arial, sans-serif"
//     >
//       PDF
//     </text>
//   </svg>
// )
 
// // أيقونة التحميل (سهم لأسفل فوق صينية)
// const DownloadIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <path d="M12 3.5v11" />
//     <path d="m7.5 10.5 4.5 4.5 4.5-4.5" />
//     <path d="M4 15.5v3A2 2 0 0 0 6 20.5h12a2 2 0 0 0 2-2v-3" />
//   </svg>
// )
 
// // أيقونة إرسال (طائرة ورقية)
// const SendIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <path d="M22 2 11 13" />
//     <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
//   </svg>
// )
 
// // أيقونة صح
// const CheckIcon = (props) => (
//   <svg {...strokeProps} strokeWidth={2.5} {...props}>
//     <path d="M20 6 9 17l-5-5" />
//   </svg>
// )
 
// // أيقونة تنبيه
// const AlertIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <circle cx="12" cy="12" r="10" />
//     <path d="M12 8v4M12 16h.01" />
//   </svg>
// )
 
// // مؤشر التحميل
// const SpinnerIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
//     <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
//     <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
//   </svg>
// )
 
// // عناصر القائمة الجانبية
// const navItems = [
//   { id: 'home', label: 'الرئيسية', Icon: GridOutlineIcon, ActiveIcon: GridFilledIcon, route: '/dashboard' },
//   { id: 'need-requests', label: 'طلب إحتياج', Icon: NeedRequestIcon, ActiveIcon: FilesFilledIcon, route: '/my-orders' },
// ]
 
// /* ==================== حركات (Keyframes) ==================== */
 
// const AnimationStyles = () => (
//   <style>{`
//     @keyframes ao-fade-up {
//       from { opacity: 0; transform: translateY(14px); }
//       to   { opacity: 1; transform: translateY(0); }
//     }
//     @keyframes ao-pop {
//       0%   { transform: scale(1); }
//       40%  { transform: scale(1.18) rotate(-6deg); }
//       100% { transform: scale(1.1) rotate(0); }
//     }
//     @keyframes ao-bounce-down {
//       0%, 100% { transform: translateY(0); }
//       50%      { transform: translateY(3px); }
//     }
//     @keyframes ao-toast-in {
//       from { opacity: 0; transform: translate(-50%, 12px); }
//       to   { opacity: 1; transform: translate(-50%, 0); }
//     }
//     @keyframes ao-modal-in {
//       from { opacity: 0; transform: scale(.95) translateY(8px); }
//       to   { opacity: 1; transform: scale(1) translateY(0); }
//     }
//     .ao-toast { animation: ao-toast-in .3s ease-out both; }
//     .ao-modal { animation: ao-modal-in .25s cubic-bezier(.22,1,.36,1) both; }
//     .ao-enter { animation: ao-fade-up .55s cubic-bezier(.22,1,.36,1) both; }
//     .group:hover .ao-icon-pop { animation: ao-pop .45s ease-out forwards; }
//     .group:hover .ao-icon-bounce { animation: ao-bounce-down .8s ease-in-out infinite; }
//     @media (prefers-reduced-motion: reduce) {
//       .ao-enter, .ao-toast, .ao-modal, .group:hover .ao-icon-pop, .group:hover .ao-icon-bounce { animation: none; }
//     }
//   `}</style>
// )
 
// /* ==================== محتوى القائمة الجانبية (Sidebar) ==================== */
 
// function SidebarContent({ activeTab, setActiveTab, onNavigate }) {
//   const navigate = useNavigate()
//   return (
//     <div className="min-h-full flex flex-col bg-white dark:bg-[#0b1b2d] pr-[clamp(16px,2.08vw,40px)]">
//       {/* الجزء العلوي */}
//       <div className="pl-4 pt-[clamp(20px,3vh,32px)]">
//         {/* الشعار + اسم المنصة */}
//         <div className="pr-6">
//           <Link to="/dashboard" onClick={onNavigate} className="inline-block">
//             <img
//               src={logo}
//               alt="IBRAM إبرام للمشتريات"
//               className="h-[clamp(100px,4.7vh,52px)] w-auto object-contain"
//             />
//           </Link>
//           <p className="mt-2 text-base text-[#565e74] dark:text-slate-400 font-semibold">
//             إبرام للمشتريات
//           </p>
//         </div>
 
//         {/* عنوان التصنيف */}
//         <p className="pr-6 mt-[clamp(40px,6.5vh,64px)] mb-[clamp(28px,4.3vh,44px)] text-[15px] text-[#565e74] dark:text-slate-500 font-medium">
//           القوائم التشغيلية
//         </p>
 
//         {/* أزرار القائمة */}
//         <nav className="space-y-2">
//           {navItems.map(({ id, label, Icon, ActiveIcon, route }) => {
//             const isActive = activeTab === id
//             const CurrentIcon = isActive ? ActiveIcon : Icon
//             return (
//               <button
//                 key={id}
//                 onClick={() => {
//                   setActiveTab(id)
//                   navigate(route)
//                   onNavigate?.()
//                 }}
//                 className={`w-full h-[clamp(52px,5.8vh,62px)] flex items-center gap-3 px-6 rounded-lg text-xl font-medium text-right cursor-pointer transition-all ${
//                   isActive
//                     ? 'bg-[#00B4F0] text-black shadow-sm'
//                     : 'bg-[#f4f4f4] dark:bg-[#0f243a] text-black dark:text-slate-200 hover:bg-[#ebebeb] dark:hover:bg-[#142e4a]'
//                 }`}
//               >
//                 <CurrentIcon className="w-[22px] h-[22px] shrink-0" />
//                 <span>{label}</span>
//               </button>
//             )
//           })}
//         </nav>
//       </div>
 
//       {/* الجزء السفلي */}
//       <div className="mt-auto pt-6">
//         {/* بطاقة: النظام متصل وآمن */}
//         <div className="flex items-center gap-2 h-[86px] px-[clamp(16px,calc(4.33vw-43px),40px)] bg-[#e8f6ff] dark:bg-[#0e2740]">
//           <span className="w-2.5 h-2.5 rounded-full bg-emerald-800 flex-shrink-0 animate-pulse"></span>
//           <div className="flex flex-col text-right flex-1 min-w-0">
//             <span className="whitespace-nowrap text-[clamp(13px,0.89vw,16px)] font-bold text-[#131e1a] dark:text-white">
//               النظام متصل وآمن
//             </span>
//             <span className="text-[clamp(11px,0.68vw,13px)] text-[#404946] dark:text-slate-400">
//               Sovereign Core v4.2
//             </span>
//           </div>
//           <img src={shieldIcon} alt="shield" className="w-5 h-5 object-contain flex-shrink-0" />
//         </div>
 
//         {/* بطاقة المستخدم */}
//         <div
//           onClick={() => navigate('/profile')}
//           className="flex items-center justify-between pt-[clamp(20px,5.9vh,63px)] pb-5 pr-4 pl-6 cursor-pointer group transition-colors"
//         >
//           <div className="flex items-center gap-3">
//             <img
//               src={userHani}
//               onError={(e) => {
//                 e.currentTarget.onerror = null
//                 e.currentTarget.src = '/user-hani.jpg'
//               }}
//               alt="م. هاني وشاح"
//               className="w-10 h-10 rounded-full object-cover shrink-0"
//             />
//             <div className="text-right">
//               <h4 className="text-base font-bold text-black dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
//                 م. هاني وشاح
//               </h4>
//               <p className="text-sm text-[#565e74] dark:text-slate-400">الإدارة الطالبة</p>
//             </div>
//           </div>
//           <ChevronLeftIcon className="w-4 h-4 text-slate-800 dark:text-slate-300 group-hover:-translate-x-1 transition-transform" />
//         </div>
//       </div>
//     </div>
//   )
// }
 
// /* ==================== نافذة تأكيد الإرسال ==================== */
 
// function ConfirmSendDialog({ open, sending, onCancel, onConfirm }) {
//   const confirmRef = useRef(null)
 
//   useEffect(() => {
//     if (!open) return
//     confirmRef.current?.focus()
//     const onKey = (e) => { if (e.key === 'Escape' && !sending) onCancel() }
//     document.addEventListener('keydown', onKey)
//     document.body.style.overflow = 'hidden'
//     return () => {
//       document.removeEventListener('keydown', onKey)
//       document.body.style.overflow = ''
//     }
//   }, [open, sending, onCancel])
 
//   if (!open) return null
 
//   return (
//     <div
//       className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4"
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="confirm-send-title"
//     >
//       <div
//         className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
//         onClick={() => !sending && onCancel()}
//       />
//       <div className="ao-modal relative w-full sm:max-w-[460px] bg-white dark:bg-[#0b1b2d] rounded-t-3xl sm:rounded-3xl shadow-2xl p-6 sm:p-7 pb-[max(24px,env(safe-area-inset-bottom))]">
//         <div className="w-14 h-14 rounded-2xl bg-[#e6f4fd] dark:bg-sky-950/50 text-[#0066F0] dark:text-sky-400 flex items-center justify-center mb-4">
//           <SendIcon className="w-7 h-7" />
//         </div>
//         <h2 id="confirm-send-title" className="text-lg font-bold text-slate-900 dark:text-white">
//           تأكيد إكمال وإرسال الطلب
//         </h2>
//         <p className="mt-2 text-sm leading-relaxed text-[#545f73] dark:text-slate-400">
//           سيتم إرسال الطلب <span dir="ltr" className="font-bold text-slate-900 dark:text-white">PR-2026-0009</span>{' '}
//           إلى المرحلة التالية (التدقيق الفني). لن تتمكن من تعديله بعد الإرسال، هل تريد المتابعة؟
//         </p>
 
//         <div className="mt-6 grid grid-cols-2 gap-3">
//           <button
//             type="button"
//             onClick={onCancel}
//             disabled={sending}
//             className="h-12 rounded-full border border-[#0066F0] text-[#0066F0] dark:border-sky-400 dark:text-sky-400 font-bold text-sm hover:bg-sky-50 dark:hover:bg-sky-950/30 disabled:opacity-50 transition-all cursor-pointer"
//           >
//             إلغاء
//           </button>
//           <button
//             ref={confirmRef}
//             type="button"
//             onClick={onConfirm}
//             disabled={sending}
//             aria-busy={sending}
//             className="h-12 rounded-full inline-flex items-center justify-center gap-2 bg-[linear-gradient(to_left,#01B0F5,#0066F0)] text-black font-bold text-sm hover:brightness-105 disabled:opacity-70 disabled:cursor-wait transition-all cursor-pointer"
//           >
//             {sending && <SpinnerIcon className="w-5 h-5 animate-spin" />}
//             {sending ? 'جاري الإرسال...' : 'تأكيد الإرسال'}
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }
 
// /* ==================== البيانات ==================== */
 
// const infoCards = [
//   { id: 'dept', title: 'الجهة الطالبة', value: 'عمادة تقنية المعلومات والتحول الرقمي', Icon: BuildingIcon },
//   { id: 'owner', title: 'مقدم / مشرف الطلب', value: 'م فهد الأسطل (مدير إدارة مراكز البيانات)', Icon: UserCircleIcon },
//   { id: 'date', title: 'تاريخ التقديم والإعتماد', value: '24 أكتوبر 2025', Icon: CalendarIcon },
// ]
 
// const steps = [
//   { n: 1, title: 'تقديم الإحتياج', desc: 'مكتمل ومعتمد من العميد', done: true },
//   { n: 2, title: 'التدقيق الفني', desc: 'تم إجازة المواصفات الفنية', done: false },
//   { n: 3, title: 'التدقيق المالي', desc: 'تم حجز التكاليف والميزانية', done: false },
//   { n: 4, title: 'التعميد والطرح', desc: 'جاهز لطرح المنافسة العامة', done: false },
// ]
 
// const attachments = [
//   { id: 1, name: 'كراسة_المواصفات_الفنية_المعتمدة.pdf', status: 'تم الفحص الأمني', size: '2.8 MB' },
//   { id: 2, name: 'جدول_الكميات_والتسعير_الاسترشادي', status: 'تم الاعتماد المالي', size: '480 KB' },
// ]
 
// const items = [
//   { id: 1, name: 'جهاز حاسوب مكتبي', quantity: '25 جهاز', unit: 'جهاز متكامل' },
//   { id: 2, name: 'لوحة مفاتيح وفأرة لاسلكية', quantity: '25 طقم', unit: 'جهاز متكامل' },
// ]
 
// /* ==================== صفحة تفاصيل الطلب المعتمد ==================== */
 
// export default function ApprovedOrder() {
//   const [activeTab, setActiveTab] = useState('need-requests')
//   const [searchQuery, setSearchQuery] = useState('')
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
 
//   /* ── قائمة الجوال: منع التنقل بالـ Tab داخلها وهي مغلقة ── */
//   const drawerRef = useRef(null)
//   useEffect(() => {
//     if (drawerRef.current) drawerRef.current.inert = !isMobileMenuOpen
//   }, [isMobileMenuOpen])
 
//   /* ── قائمة الجوال: منع تمرير الصفحة + الإغلاق بـ Esc أو عند تكبير الشاشة ── */
//   useEffect(() => {
//     if (!isMobileMenuOpen) return
//     const prevOverflow = document.body.style.overflow
//     document.body.style.overflow = 'hidden'
//     const onKey = (e) => { if (e.key === 'Escape') setIsMobileMenuOpen(false) }
//     const mq = window.matchMedia('(min-width: 1024px)')
//     const onMq = (e) => { if (e.matches) setIsMobileMenuOpen(false) }
//     document.addEventListener('keydown', onKey)
//     mq.addEventListener('change', onMq)
//     return () => {
//       document.body.style.overflow = prevOverflow
//       document.removeEventListener('keydown', onKey)
//       mq.removeEventListener('change', onMq)
//     }
//   }, [isMobileMenuOpen])
 
//   /* ── إكمال وإرسال ── */
//   const [confirmOpen, setConfirmOpen] = useState(false)
//   const [sending, setSending] = useState(false)
//   const [sent, setSent] = useState(false)
//   const [toast, setToast] = useState(null) // { type: 'success' | 'error', text }
 
//   useEffect(() => {
//     if (!toast) return
//     const t = setTimeout(() => setToast(null), 4000)
//     return () => clearTimeout(t)
//   }, [toast])
 
//   // TODO: استبدل هذه الدالة بطلب الـ API الحقيقي، مثال:
//   // await fetch('/api/orders/PR-2026-0009/submit', { method: 'POST' })
//   const submitOrder = () => new Promise((resolve) => setTimeout(resolve, 1200))
 
//   const handleConfirmSend = async () => {
//     setSending(true)
//     try {
//       await submitOrder()
//       setSent(true)
//       setConfirmOpen(false)
//       setToast({ type: 'success', text: 'تم إرسال الطلب بنجاح إلى مرحلة التدقيق الفني' })
//     } catch (err) {
//       console.error('Submit failed:', err)
//       setConfirmOpen(false)
//       setToast({ type: 'error', text: 'تعذّر إرسال الطلب، حاول مرة أخرى.' })
//     } finally {
//       setSending(false)
//     }
//   }
 
//   /* ── تصدير PDF ── */
//   const exportRef = useRef(null)
//   const [exporting, setExporting] = useState(false)
//   const [exportError, setExportError] = useState('')
 
//   const handleExportPdf = async () => {
//     if (!exportRef.current || exporting) return
//     setExporting(true)
//     setExportError('')
//     try {
//       // تحميل المكتبات عند الحاجة فقط
//       const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
//         import('html2canvas-pro'),
//         import('jspdf'),
//       ])
 
//       const isDark = document.documentElement.classList.contains('dark')
//       const canvas = await html2canvas(exportRef.current, {
//         scale: 2,
//         useCORS: true,
//         backgroundColor: isDark ? '#071322' : '#f3f3f3',
//         windowWidth: exportRef.current.scrollWidth,
//       })
 
//       const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
//       const margin = 8
//       const pageW = pdf.internal.pageSize.getWidth()
//       const pageH = pdf.internal.pageSize.getHeight()
//       const imgW = pageW - margin * 2
//       const imgH = (canvas.height * imgW) / canvas.width
//       const usableH = pageH - margin * 2
//       const img = canvas.toDataURL('image/png')
 
//       // تقسيم الصورة على عدة صفحات إذا كانت أطول من صفحة A4
//       let offset = 0
//       pdf.addImage(img, 'PNG', margin, margin, imgW, imgH)
//       while (imgH - offset > usableH) {
//         offset += usableH
//         pdf.addPage()
//         pdf.addImage(img, 'PNG', margin, margin - offset, imgW, imgH)
//       }
 
//       pdf.setProperties({ title: 'PR-2026-0009 - طلب معتمد' })
//       pdf.save('PR-2026-0009.pdf')
//     } catch (err) {
//       console.error('PDF export failed:', err)
//       setExportError('تعذّر تصدير الملف، حاول مرة أخرى.')
//     } finally {
//       setExporting(false)
//     }
//   }
 
//   return (
//     <div
//       dir="rtl"
//       className="min-h-screen bg-[#f3f3f3] dark:bg-[#071322] text-slate-800 dark:text-slate-100 flex flex-row overflow-x-hidden selection:bg-sky-500 selection:text-white"
//       style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
//     >
//       <AnimationStyles />
 
//       {/* ==================== القائمة الجانبية للشاشات الكبيرة ==================== */}
//       <aside className="hidden lg:block sticky top-0 h-screen overflow-y-auto w-[clamp(260px,18.4vw,353px)] shrink-0 bg-white dark:bg-[#0b1b2d] border-l border-slate-100 dark:border-slate-800">
//         <SidebarContent activeTab={activeTab} setActiveTab={setActiveTab} />
//       </aside>
 
//       {/* ==================== المحتوى الرئيسي ==================== */}
//       <div className="flex-1 flex flex-col min-w-0">
//         {/* ==================== شريط الرأس العلوي ==================== */}
//         <header className="h-16 bg-white dark:bg-[#0b1b2d] border-b border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4 px-4 sm:px-6 lg:ps-6 lg:pe-[clamp(24px,4.6vw,88px)] shrink-0 z-20">
//           {/* اليمين: زر القائمة للموبايل + مسار التنقل */}
//           <div className="flex items-center gap-3 min-w-0">
//             <button
//               type="button"
//               onClick={() => setIsMobileMenuOpen(true)}
//               aria-expanded={isMobileMenuOpen}
//               className="lg:hidden w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-95 transition-all cursor-pointer"
//               aria-label="فتح القائمة"
//             >
//               <MenuIcon className="w-5 h-5" />
//             </button>
 
//             <nav aria-label="Breadcrumb" className="truncate">
//               <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-[#545f73] dark:text-slate-400">
//                 <li className="hidden sm:block">نظام إدارة المشتريات - الأزهر</li>
//                 <li className="hidden sm:block"><ChevronLeftIcon className="w-3.5 h-3.5" /></li>
//                 <li className="font-bold text-slate-900 dark:text-white">الإدارة الطالبة</li>
//                 <li><ChevronLeftIcon className="w-3.5 h-3.5" /></li>
//                 <li>
//                   <Link to="/my-orders" className="hover:text-sky-600 transition-colors">
//                     طلباتي
//                   </Link>
//                 </li>
//               </ol>
//             </nav>
//           </div>
 
//           {/* الوسط: حقل البحث */}
//           <div className="relative hidden lg:block shrink-0 w-[clamp(200px,18vw,345px)]">
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               placeholder="بحث"
//               className="w-full h-10 rounded-full bg-[#f4f4f4] dark:bg-[#0f243a] border border-[#d4d4d4] dark:border-slate-700 pr-11 pl-4 text-sm text-slate-800 dark:text-slate-200 placeholder-[#828282] focus:outline-none focus:border-[#00B4F0] focus:bg-white dark:focus:bg-[#0f243a] transition-all"
//             />
//             <SearchIcon className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#828282]" />
//           </div>
 
//           {/* اليسار: الإشعارات + اللغة */}
//           <div className="flex items-center gap-2 sm:gap-3 shrink-0 whitespace-nowrap">
//             <NotificationMenu />
//             <span className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-slate-700"></span>
//             <LanguageMenu />
//           </div>
//         </header>
 
//         {/* ==================== محتوى الصفحة ==================== */}
//         <main className="flex-1 px-4 sm:px-6 lg:ps-6 lg:pe-[clamp(24px,4.15vw,80px)] pt-6 sm:pt-8 lg:pt-[60px] space-y-5 w-full min-w-0">
//           <div ref={exportRef} className="space-y-5">
//           {/* ==================== ترويسة الطلب ==================== */}
//           <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
//             <div className="ao-enter sm:pt-[18px]">
//               <div className="flex flex-wrap items-center gap-2.5">
//                 <h1 className="px-3 py-1 rounded-full bg-[#ececec] dark:bg-slate-800 text-sm sm:text-[15px] font-bold text-slate-900 dark:text-white tracking-wide">
//                   PR-2026-0009
//                 </h1>
//                 <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eefff3] dark:bg-emerald-500/15 text-[#34c759] dark:text-emerald-400 font-bold text-sm">
//                   <span className="w-2.5 h-2.5 rounded-full bg-[#34c759] dark:bg-emerald-400"></span>
//                   <span>معتمد</span>
//                 </span>
//               </div>
//               <p className="mt-3 text-sm sm:text-[15px] text-slate-800 dark:text-slate-300 font-medium">
//                 تفاصيل واستحقاقات طلب الإحتياج والمشتريات المؤسسية
//               </p>
//             </div>
 
//             {/* زر إكمال وإرسال */}
//             <button
//               type="button"
//               data-html2canvas-ignore="true"
//               onClick={() => setConfirmOpen(true)}
//               disabled={sent}
//               className={`w-full sm:w-[273px] h-12 rounded-full inline-flex items-center justify-center gap-2 font-bold text-[15px] transition-all whitespace-nowrap ${
//                 sent
//                   ? 'bg-[#eefff3] dark:bg-emerald-500/15 text-[#1f9d47] dark:text-emerald-400 cursor-default'
//                   : 'bg-[linear-gradient(to_left,#01B0F5,#0066F0)] text-black hover:brightness-105 hover:shadow-lg hover:shadow-sky-500/30 active:scale-[0.98] cursor-pointer'
//               }`}
//             >
//               {sent && <CheckIcon className="w-5 h-5" />}
//               {sent ? 'تم الإرسال' : 'إكمال وإرسال'}
//             </button>
//           </div>
 
//           {/* ==================== البطاقات الثلاث (مع حركات) ==================== */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 pt-2 sm:pt-6">
//             {infoCards.map(({ id, title, value, Icon }, i) => (
//               <div
//                 key={id}
//                 className={`ao-enter ${i === infoCards.length - 1 ? 'sm:col-span-2 xl:col-span-1' : ''}`}
//                 style={{ animationDelay: `${120 + i * 110}ms` }}
//               >
//                 <div className="group h-full min-h-[86px] bg-white dark:bg-[#0b1b2d] rounded-2xl px-5 py-4 flex items-center gap-4 border border-transparent hover:border-sky-200 dark:hover:border-sky-800 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300 cursor-default">
//                   <span className="shrink-0 text-slate-900 dark:text-slate-100 group-hover:text-[#0095FF] transition-colors duration-300">
//                     <Icon className="ao-icon-pop w-6 h-6" />
//                   </span>
//                   <div className="min-w-0">
//                     <h3 className="text-[15px] sm:text-base 2xl:text-[17px] font-bold text-slate-900 dark:text-white leading-snug">
//                       {title}
//                     </h3>
//                     <p className="mt-1 text-sm text-[#545f73] dark:text-slate-400 truncate">{value}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
 
//           {/* ==================== الحاوية البيضاء الكبيرة ==================== */}
//           <div className="bg-white dark:bg-[#0b1b2d] rounded-2xl sm:rounded-3xl p-3 sm:p-4 space-y-6 pb-6 sm:pb-7">
//             {/* 1) مسار ومراحل الاعتماد النظامي */}
//             <div className="rounded-2xl border border-slate-200 dark:border-slate-700 px-4 sm:px-6 pt-5 sm:pt-6 pb-6 sm:pb-10 lg:pb-[50px]">
//               <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white pb-2.5 border-b border-slate-200 dark:border-slate-700">
//                 مسار ومراحل الاعتماد النظامي
//               </h2>
 
//               <ol className="grid grid-cols-1 sm:grid-cols-4 gap-6 sm:gap-0 mt-5 sm:mt-[26px]">
//                 {steps.map((s, i) => (
//                   <li
//                     key={s.n}
//                     className="ao-enter relative flex sm:block items-start gap-4"
//                     style={{ animationDelay: `${250 + i * 100}ms` }}
//                   >
//                     {/* خط عمودي يربط الخطوات على الجوال */}
//                     {i < steps.length - 1 && (
//                       <span
//                         aria-hidden="true"
//                         className={`sm:hidden absolute top-12 -bottom-4 start-[18.5px] w-[3px] rounded-full ${
//                           s.done ? 'bg-[#01B0F5]' : 'bg-[#e6f4fd] dark:bg-sky-950/60'
//                         }`}
//                       ></span>
//                     )}
//                     {/* المربع + الخط الواصل (مسافة متساوية من الطرفين) */}
//                     <div className="flex items-center gap-2 shrink-0 sm:shrink">
//                       <span
//                         className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold text-slate-900 transition-transform duration-300 hover:scale-110 ${
//                           s.done
//                             ? 'bg-[#01B0F5] ring-2 ring-[#0095FF] ring-offset-2 ring-offset-white dark:ring-offset-[#0b1b2d]'
//                             : 'bg-[#e6f4fd] dark:bg-sky-950/60 dark:text-sky-300'
//                         }`}
//                       >
//                         {s.n}
//                       </span>
//                       {i < steps.length - 1 && (
//                         <span
//                           className={`hidden sm:block flex-1 rounded-full ms-1 me-4 lg:me-8 ${
//                             s.done ? 'h-1 bg-[#01B0F5]' : 'h-[3px] bg-[#e6f4fd] dark:bg-sky-950/60'
//                           }`}
//                         ></span>
//                       )}
//                     </div>
 
//                     {/* النصوص */}
//                     <div className="pt-1 sm:pt-0 sm:mt-3 sm:pe-2">
//                       <span
//                         className={`block text-sm leading-none ${
//                           s.done ? 'text-[#0095FF] font-semibold' : 'text-slate-500 dark:text-slate-400'
//                         }`}
//                       >
//                         الخطوة {s.n}
//                       </span>
//                       <h3 className="mt-3 sm:mt-4 text-[15px] lg:text-base font-bold leading-tight text-slate-900 dark:text-white">
//                         {s.title}
//                       </h3>
//                       <p className="mt-2 sm:mt-2.5 text-xs leading-snug text-slate-500 dark:text-slate-400">{s.desc}</p>
//                     </div>
//                   </li>
//                 ))}
//               </ol>
//             </div>
 
//             {/* 2) المواصفات الفنية المعتمدة */}
//             <section className="space-y-2.5">
//               <h2 className="text-base font-bold text-slate-900 dark:text-white">المواصفات الفنية المعتمدة</h2>
//               <div className="rounded-xl bg-[#eaf6fd] dark:bg-sky-950/20 border border-sky-300/70 dark:border-sky-900/50 px-4 py-3 text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
//                 تجديد خوادم مركز البيانات السحابي الرئيسي توريد وحدات معالجة فائقة السرعة مع وحدات تخزين SAN ممتدة لبيئة المحاكاة
//               </div>
//             </section>
 
//             {/* 3) المبررات والأثر التشغيلي */}
//             <section className="space-y-2.5">
//               <h2 className="text-base font-bold text-slate-900 dark:text-white">المبررات والأثر التشغيلي</h2>
//               <div className="rounded-xl bg-white dark:bg-slate-800/40 border border-slate-300 dark:border-slate-700 px-4 py-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
//                 استيعاب الضغط المتزايد على المنصات الأكاديمية ونظام إبرام وبلاك بورد وتوفير سعات احتياطية تفي بمتطلبات التحول الرقمي مع توفير حماية تخزين SAN ومواصفات موثوقية عالية تواكب المعايير الوطنية.
//               </div>
//             </section>
 
//             {/* 4) المرفقات (كروت صغيرة مع حركات) */}
//             <section className="space-y-2.5">
//               <h2 className="text-base font-bold text-slate-900 dark:text-white">المرفقات والمسوغات الفنية المسجلة</h2>
//               <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-4">
//                 {attachments.map((f, i) => (
//                   <div key={f.id} className="ao-enter" style={{ animationDelay: `${400 + i * 110}ms` }}>
//                     <div className="group min-h-[80px] py-3 rounded-xl bg-[#e8f4fd] dark:bg-sky-950/20 border border-transparent hover:border-sky-300 dark:hover:border-sky-800 hover:bg-[#dff0fc] hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/10 px-4 flex items-center justify-between gap-3 transition-all duration-300">
//                       <div className="flex items-center gap-3 min-w-0">
//                         <span className="shrink-0 w-8 h-8 rounded-md bg-rose-50 dark:bg-rose-950/30 flex items-center justify-center">
//                           <PdfFileIcon className="ao-icon-pop w-5 h-5" />
//                         </span>
//                         <div className="min-w-0">
//                           <p className="text-sm sm:text-[15px] font-bold text-slate-900 dark:text-white break-all line-clamp-2">{f.name}</p>
//                           <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
//                             {f.status} • <span dir="ltr">{f.size}</span>
//                           </p>
//                         </div>
//                       </div>
//                       <button
//                         type="button"
//                         aria-label={`تحميل ${f.name}`}
//                         className="shrink-0 w-10 h-10 rounded-full text-slate-900 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 hover:text-[#0095FF] flex items-center justify-center transition-colors cursor-pointer"
//                       >
//                         <DownloadIcon className="ao-icon-bounce w-6 h-6" />
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </section>
 
//             {/* 5) درجة الأولوية والأهمية التشغيلية */}
//             <section>
//               <h2 className="text-base font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 lg:mb-10">
//                 درجة الأولوية والأهمية التشغيلية
//               </h2>
//               {/* الجوال: كل صنف في بطاقة */}
//               <ul className="sm:hidden space-y-3">
//                 {items.map((item) => (
//                   <li
//                     key={item.id}
//                     className="rounded-xl border border-slate-300 dark:border-slate-700 overflow-hidden"
//                   >
//                     <div className="flex items-center gap-3 px-4 py-3 bg-[#f0f0f0] dark:bg-[#0f243a]">
//                       <span className="shrink-0 w-7 h-7 rounded-md bg-white dark:bg-[#0b1b2d] flex items-center justify-center text-sm font-bold text-slate-900 dark:text-white">
//                         {item.id}
//                       </span>
//                       <span className="text-sm font-bold text-slate-900 dark:text-white">{item.name}</span>
//                     </div>
//                     <dl className="grid grid-cols-2 divide-x divide-x-reverse divide-slate-300 dark:divide-slate-700 bg-white dark:bg-[#0b1b2d]">
//                       <div className="px-4 py-3">
//                         <dt className="text-xs text-slate-500 dark:text-slate-400">الكمية</dt>
//                         <dd className="mt-1 text-sm font-bold text-slate-900 dark:text-slate-100">{item.quantity}</dd>
//                       </div>
//                       <div className="px-4 py-3">
//                         <dt className="text-xs text-slate-500 dark:text-slate-400">وحدة القياس</dt>
//                         <dd className="mt-1 text-sm font-bold text-slate-900 dark:text-slate-100">{item.unit}</dd>
//                       </div>
//                     </dl>
//                   </li>
//                 ))}
//               </ul>
 
//               {/* التابلت وما فوق: جدول */}
//               <div className="hidden sm:block border border-slate-300 dark:border-slate-700 rounded-2xl overflow-x-auto">
//                 <table className="w-full text-center text-sm">
//                   <thead>
//                     <tr className="bg-[#f0f0f0] dark:bg-[#0f243a] text-slate-900 dark:text-slate-200 h-[72px] lg:h-[104px]">
//                       <th className="px-4 font-bold border-e border-slate-300 dark:border-slate-700 w-1/4">م</th>
//                       <th className="px-4 font-bold border-e border-slate-300 dark:border-slate-700 w-1/4">اسم الصنف</th>
//                       <th className="px-4 font-bold border-e border-slate-300 dark:border-slate-700 w-1/4">الكمية</th>
//                       <th className="px-4 font-bold w-1/4">وحدة القياس</th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white dark:bg-[#0b1b2d]">
//                     {items.map((item) => (
//                       <tr
//                         key={item.id}
//                         className="h-[72px] lg:h-[104px] border-t border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-bold hover:bg-sky-50/60 dark:hover:bg-slate-800/40 transition-colors"
//                       >
//                         <td className="px-4 border-e border-slate-300 dark:border-slate-700">{item.id}</td>
//                         <td className="px-4 border-e border-slate-300 dark:border-slate-700">{item.name}</td>
//                         <td className="px-4 border-e border-slate-300 dark:border-slate-700">{item.quantity}</td>
//                         <td className="px-4">{item.unit}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </section>
//           </div>
//           </div>{/* end exportRef */}
 
//           {/* ==================== أزرار الإجراء السفلية ==================== */}
//           <div className="sticky bottom-0 z-10 !mt-8 lg:!mt-[52px] -mx-4 sm:mx-0 bg-white dark:bg-[#0b1b2d] px-4 pt-3 sm:pt-4 pb-[max(12px,env(safe-area-inset-bottom))] sm:pb-4 grid grid-cols-2 sm:flex sm:justify-end gap-3 sm:gap-6 shadow-[0_-4px_20px_rgba(15,23,42,0.06)]">
//             {exportError && (
//               <p role="alert" className="col-span-2 order-last sm:order-none self-center sm:me-auto text-sm font-medium text-[#E5262A]">
//                 {exportError}
//               </p>
//             )}
//             <button
//               type="button"
//               onClick={handleExportPdf}
//               disabled={exporting}
//               aria-busy={exporting}
//               className="w-full sm:w-[min(300px,45%)] lg:w-[300px] h-11 sm:h-12 px-2 rounded-full inline-flex items-center justify-center gap-2 bg-[linear-gradient(to_left,#01B0F5,#0066F0)] text-black font-bold text-[13px] sm:text-[15px] hover:brightness-105 hover:shadow-lg hover:shadow-sky-500/30 active:scale-[0.98] disabled:opacity-70 disabled:cursor-wait disabled:active:scale-100 transition-all cursor-pointer whitespace-nowrap"
//             >
//               {exporting && <SpinnerIcon className="w-5 h-5 animate-spin" />}
//               {exporting ? 'جاري التصدير...' : 'تصدير PDF معتمد'}
//             </button>
//             <button
//               type="button"
//               onClick={() => window.print()}
//               className="w-full sm:w-[min(300px,45%)] lg:w-[300px] h-11 sm:h-12 px-2 rounded-full border border-[#0066F0] text-[#0066F0] bg-white dark:bg-transparent dark:border-sky-400 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-950/30 active:scale-[0.98] font-bold text-[13px] sm:text-[15px] transition-all cursor-pointer whitespace-nowrap"
//             >
//               طباعة تفاصيل الطلب
//             </button>
//           </div>
//         </main>
//       </div>
 
//       {/* ==================== نافذة التأكيد + رسالة النتيجة ==================== */}
//       <ConfirmSendDialog
//         open={confirmOpen}
//         sending={sending}
//         onCancel={() => setConfirmOpen(false)}
//         onConfirm={handleConfirmSend}
//       />
 
//       {toast && (
//         <div
//           role="status"
//           aria-live="polite"
//           className={`ao-toast fixed z-[70] left-1/2 bottom-24 sm:bottom-28 w-[calc(100%-32px)] sm:w-auto max-w-[480px] flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-xl text-sm font-bold ${
//             toast.type === 'success'
//               ? 'bg-[#eefff3] text-[#1f7a3a] border border-[#b9efc9] dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800'
//               : 'bg-rose-50 text-[#c81e22] border border-rose-200 dark:bg-rose-950 dark:text-rose-300 dark:border-rose-800'
//           }`}
//         >
//           {toast.type === 'success' ? <CheckIcon className="w-5 h-5 shrink-0" /> : <AlertIcon className="w-5 h-5 shrink-0" />}
//           <span>{toast.text}</span>
//         </div>
//       )}
 
//       {/* ==================== القائمة الجانبية للجوال ==================== */}
//       <div
//         className={`fixed inset-0 z-50 lg:hidden ${isMobileMenuOpen ? '' : 'pointer-events-none'}`}
//         aria-hidden={!isMobileMenuOpen}
//         ref={drawerRef}
//       >
//         {/* الخلفية المعتمة — تظهر وتختفي بتلاشي ناعم */}
//         <div
//           onClick={() => setIsMobileMenuOpen(false)}
//           className={`absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 ease-out motion-reduce:transition-none ${
//             isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
//           }`}
//         />
 
//         {/* اللوحة — تنزلق من اليمين */}
//         <div
//           role="dialog"
//           aria-modal="true"
//           aria-label="القائمة الرئيسية"
//           className={`absolute top-0 right-0 w-[300px] max-w-[85%] h-full bg-white dark:bg-[#0b1b2d] shadow-2xl overflow-y-auto overscroll-contain will-change-transform transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transition-none ${
//             isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
//           }`}
//         >
//           <button
//             type="button"
//             onClick={() => setIsMobileMenuOpen(false)}
//             aria-label="إغلاق القائمة"
//             className={`absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 ${
//               isMobileMenuOpen ? 'opacity-100 rotate-0 delay-150' : 'opacity-0 -rotate-90'
//             }`}
//           >
//             <CloseIcon className="w-4 h-4" />
//           </button>
//           <SidebarContent
//             activeTab={activeTab}
//             setActiveTab={setActiveTab}
//             onNavigate={() => setIsMobileMenuOpen(false)}
//           />
//         </div>
//       </div>
//     </div>
//   )
// }








// 








// 



import { useState, useRef, useEffect } from 'react'
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
 
// أيقونة الرئيسية (شبكة 4 مربعات مفرّغة — كما في التصميم)
const GridOutlineIcon = (props) => (
  <svg {...strokeProps} strokeWidth={1.8} {...props}>
    <rect x="3.5" y="3.5" width="7" height="7" rx="1" />
    <rect x="13.5" y="3.5" width="7" height="7" rx="1" />
    <rect x="3.5" y="13.5" width="7" height="7" rx="1" />
    <rect x="13.5" y="13.5" width="7" height="7" rx="1" />
  </svg>
)
 
// أيقونة الرئيسية في حالة التفعيل (شبكة 4 مربعات ممتلئة)
const GridFilledIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <rect x="3" y="3" width="8" height="8" rx="1.5" />
    <rect x="13" y="3" width="8" height="8" rx="1.5" />
    <rect x="3" y="13" width="8" height="8" rx="1.5" />
    <rect x="13" y="13" width="8" height="8" rx="1.5" />
  </svg>
)
 
// أيقونة طلب إحتياج (مستند مفرّغ)
const NeedRequestIcon = (props) => (
  <svg {...strokeProps} {...props}>
    <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5z" />
    <path d="M14 2v5h5" />
  </svg>
)
 
// أيقونة طلب إحتياج في حالة التفعيل (ملفات ممتلئة)
const FilesFilledIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z" />
    <path d="M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8" fill="none" />
  </svg>
)
 
// أيقونة البحث
const SearchIcon = (props) => (
  <svg {...strokeProps} strokeWidth={1.5} {...props}>
    <circle cx="11" cy="11" r="7.5" />
    <path d="m20.5 20.5-4-4" />
  </svg>
)
 
// سهم صغير لليسار (فواصل المسار + بطاقة المستخدم)
const ChevronLeftIcon = (props) => (
  <svg {...strokeProps} {...props}>
    <path d="m15 18-6-6 6-6" />
  </svg>
)
 
// زر إغلاق القائمة للجوال
const CloseIcon = (props) => (
  <svg {...strokeProps} {...props}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
)

// زر القائمة للجوال
const MenuIcon = (props) => (
  <svg {...strokeProps} {...props}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)
 
// أيقونة المبنى (الجهة الطالبة) — مبنى ممتلئ بنوافذ وباب كما في التصميم
const BuildingIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M17 11V3H7v4H3v14h8v-4h2v4h8V11h-4ZM7 19H5v-2h2v2Zm0-4H5v-2h2v2Zm0-4H5V9h2v2Zm4 4H9v-2h2v2Zm0-4H9V9h2v2Zm0-4H9V5h2v2Zm4 8h-2v-2h2v2Zm0-4h-2V9h2v2Zm0-4h-2V5h2v2Zm4 12h-2v-2h2v2Zm0-4h-2v-2h2v2Z" />
  </svg>
)
 
// أيقونة المستخدم داخل دائرة ممتلئة (مقدم الطلب)
const UserCircleIcon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <circle cx="12" cy="12" r="10" fill="currentColor" />
    <circle cx="12" cy="9.5" r="3.4" fill="white" className="dark:fill-[#0b1b2d]" />
    <path
      d="M5.6 18.2A7.8 7.8 0 0 1 12 15c2.6 0 4.9 1.25 6.4 3.2A9.9 9.9 0 0 1 12 22a9.9 9.9 0 0 1-6.4-3.8Z"
      fill="white"
      className="dark:fill-[#0b1b2d]"
    />
  </svg>
)
 
// أيقونة التقويم (التاريخ)
const CalendarIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M3.5 7a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v3h-17V7Z" fill="currentColor" />
    <path d="M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <rect x="7" y="13" width="3" height="3" rx="0.6" fill="currentColor" />
  </svg>
)
 
// أيقونة ملف PDF (أحمر)
const PdfFileIcon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M6 2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" fill="#E5262A" />
    <path d="M14.5 2v4a1.5 1.5 0 0 0 1.5 1.5h4" fill="#F8A5A7" />
    <text
      x="12"
      y="17"
      textAnchor="middle"
      fontSize="5.2"
      fontWeight="800"
      fill="white"
      fontFamily="Arial, sans-serif"
    >
      PDF
    </text>
  </svg>
)
 
// أيقونة التحميل (سهم لأسفل فوق صينية)
const DownloadIcon = (props) => (
  <svg {...strokeProps} {...props}>
    <path d="M12 3.5v11" />
    <path d="m7.5 10.5 4.5 4.5 4.5-4.5" />
    <path d="M4 15.5v3A2 2 0 0 0 6 20.5h12a2 2 0 0 0 2-2v-3" />
  </svg>
)
 
// أيقونة إرسال (طائرة ورقية)
const SendIcon = (props) => (
  <svg {...strokeProps} {...props}>
    <path d="M22 2 11 13" />
    <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
  </svg>
)

// أيقونة صح
const CheckIcon = (props) => (
  <svg {...strokeProps} strokeWidth={2.5} {...props}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

// أيقونة تنبيه
const AlertIcon = (props) => (
  <svg {...strokeProps} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v4M12 16h.01" />
  </svg>
)

// مؤشر التحميل
const SpinnerIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
    <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
)
 
// عناصر القائمة الجانبية
const navItems = [
  { id: 'home', label: 'الرئيسية', Icon: GridOutlineIcon, ActiveIcon: GridFilledIcon, route: '/dashboard' },
  { id: 'need-requests', label: 'طلب إحتياج', Icon: NeedRequestIcon, ActiveIcon: FilesFilledIcon, route: '/my-orders' },
]
 
/* ==================== حركات (Keyframes) ==================== */
 
const AnimationStyles = () => (
  <style>{`
    @keyframes ao-fade-up {
      from { opacity: 0; transform: translateY(14px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes ao-pop {
      0%   { transform: scale(1); }
      40%  { transform: scale(1.18) rotate(-6deg); }
      100% { transform: scale(1.1) rotate(0); }
    }
    @keyframes ao-bounce-down {
      0%, 100% { transform: translateY(0); }
      50%      { transform: translateY(3px); }
    }
    @keyframes ao-toast-in {
      from { opacity: 0; transform: translate(-50%, 12px); }
      to   { opacity: 1; transform: translate(-50%, 0); }
    }
    @keyframes ao-modal-in {
      from { opacity: 0; transform: scale(.95) translateY(8px); }
      to   { opacity: 1; transform: scale(1) translateY(0); }
    }
    .ao-toast { animation: ao-toast-in .3s ease-out both; }
    .ao-modal { animation: ao-modal-in .25s cubic-bezier(.22,1,.36,1) both; }
    .ao-enter { animation: ao-fade-up .55s cubic-bezier(.22,1,.36,1) both; }
    .group:hover .ao-icon-pop { animation: ao-pop .45s ease-out forwards; }
    .group:hover .ao-icon-bounce { animation: ao-bounce-down .8s ease-in-out infinite; }
    @media (prefers-reduced-motion: reduce) {
      .ao-enter, .ao-toast, .ao-modal, .group:hover .ao-icon-pop, .group:hover .ao-icon-bounce { animation: none; }
    }
  `}</style>
)
 
/* ==================== محتوى القائمة الجانبية (Sidebar) ==================== */
 
function SidebarContent({ activeTab, setActiveTab, onNavigate }) {
  const navigate = useNavigate()
  return (
    <div className="min-h-full flex flex-col bg-white dark:bg-[#0b1b2d] pr-[clamp(16px,2.08vw,40px)]">
      {/* الجزء العلوي */}
      <div className="pl-4 pt-[clamp(20px,3vh,32px)]">
        {/* الشعار + اسم المنصة */}
        <div className="pr-6">
          <Link to="/dashboard" onClick={onNavigate} className="inline-block">
            <img
              src={logo}
              alt="IBRAM إبرام للمشتريات"
              className="h-[clamp(100px,4.7vh,52px)] w-auto object-contain"
            />
          </Link>
          <p className="mt-2 text-base text-[#565e74] dark:text-slate-400 font-semibold">
            إبرام للمشتريات
          </p>
        </div>
 
        {/* عنوان التصنيف */}
        <p className="pr-6 mt-[clamp(40px,6.5vh,64px)] mb-[clamp(28px,4.3vh,44px)] text-[15px] text-[#565e74] dark:text-slate-500 font-medium">
          القوائم التشغيلية
        </p>
 
        {/* أزرار القائمة */}
        <nav className="space-y-2">
          {navItems.map(({ id, label, Icon, ActiveIcon, route }) => {
            const isActive = activeTab === id
            const CurrentIcon = isActive ? ActiveIcon : Icon
            return (
              <button
                key={id}
                onClick={() => {
                  setActiveTab(id)
                  navigate(route)
                  onNavigate?.()
                }}
                className={`w-full h-[clamp(52px,5.8vh,62px)] flex items-center gap-3 px-6 rounded-lg text-xl font-medium text-right cursor-pointer transition-all ${
                  isActive
                    ? 'bg-[#00B4F0] text-black shadow-sm'
                    : 'bg-[#f4f4f4] dark:bg-[#0f243a] text-black dark:text-slate-200 hover:bg-[#ebebeb] dark:hover:bg-[#142e4a]'
                }`}
              >
                <CurrentIcon className="w-[22px] h-[22px] shrink-0" />
                <span>{label}</span>
              </button>
            )
          })}
        </nav>
      </div>
 
      {/* الجزء السفلي */}
      <div className="mt-auto pt-6">
        {/* بطاقة: النظام متصل وآمن */}
        <div className="flex items-center gap-2 h-[86px] px-[clamp(16px,calc(4.33vw-43px),40px)] bg-[#e8f6ff] dark:bg-[#0e2740]">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-800 flex-shrink-0 animate-pulse"></span>
          <div className="flex flex-col text-right flex-1 min-w-0">
            <span className="whitespace-nowrap text-[clamp(13px,0.89vw,16px)] font-bold text-[#131e1a] dark:text-white">
              النظام متصل وآمن
            </span>
            <span className="text-[clamp(11px,0.68vw,13px)] text-[#404946] dark:text-slate-400">
              Sovereign Core v4.2
            </span>
          </div>
          <img src={shieldIcon} alt="shield" className="w-5 h-5 object-contain flex-shrink-0" />
        </div>
 
        {/* بطاقة المستخدم */}
        <div
          onClick={() => navigate('/profile')}
          className="flex items-center justify-between pt-[clamp(20px,5.9vh,63px)] pb-5 pr-4 pl-6 cursor-pointer group transition-colors"
        >
          <div className="flex items-center gap-3">
            <img
              src={userHani}
              onError={(e) => {
                e.currentTarget.onerror = null
                e.currentTarget.src = '/user-hani.jpg'
              }}
              alt="م. هاني وشاح"
              className="w-10 h-10 rounded-full object-cover shrink-0"
            />
            <div className="text-right">
              <h4 className="text-base font-bold text-black dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                م. هاني وشاح
              </h4>
              <p className="text-sm text-[#565e74] dark:text-slate-400">الإدارة الطالبة</p>
            </div>
          </div>
          <ChevronLeftIcon className="w-4 h-4 text-slate-800 dark:text-slate-300 group-hover:-translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  )
}
 
/* ==================== نافذة تأكيد الإرسال ==================== */

function ConfirmSendDialog({ open, sending, onCancel, onConfirm }) {
  const confirmRef = useRef(null)

  useEffect(() => {
    if (!open) return
    confirmRef.current?.focus()
    const onKey = (e) => { if (e.key === 'Escape' && !sending) onCancel() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, sending, onCancel])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirm-send-title"
    >
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        onClick={() => !sending && onCancel()}
      />
      <div className="ao-modal relative w-full sm:max-w-[460px] bg-white dark:bg-[#0b1b2d] rounded-t-3xl sm:rounded-3xl shadow-2xl p-6 sm:p-7 pb-[max(24px,env(safe-area-inset-bottom))]">
        <div className="w-14 h-14 rounded-2xl bg-[#e6f4fd] dark:bg-sky-950/50 text-[#0066F0] dark:text-sky-400 flex items-center justify-center mb-4">
          <SendIcon className="w-7 h-7" />
        </div>
        <h2 id="confirm-send-title" className="text-lg font-bold text-slate-900 dark:text-white">
          تأكيد إكمال وإرسال الطلب
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-[#545f73] dark:text-slate-400">
          سيتم إرسال الطلب <span dir="ltr" className="font-bold text-slate-900 dark:text-white">PR-2026-0009</span>{' '}
          إلى المرحلة التالية (التدقيق الفني). لن تتمكن من تعديله بعد الإرسال، هل تريد المتابعة؟
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={onCancel}
            disabled={sending}
            className="h-12 rounded-full border border-[#0066F0] text-[#0066F0] dark:border-sky-400 dark:text-sky-400 font-bold text-sm hover:bg-sky-50 dark:hover:bg-sky-950/30 disabled:opacity-50 transition-all cursor-pointer"
          >
            إلغاء
          </button>
          <button
            ref={confirmRef}
            type="button"
            onClick={onConfirm}
            disabled={sending}
            aria-busy={sending}
            className="h-12 rounded-full inline-flex items-center justify-center gap-2 bg-[linear-gradient(to_left,#01B0F5,#0066F0)] text-black font-bold text-sm hover:brightness-105 disabled:opacity-70 disabled:cursor-wait transition-all cursor-pointer"
          >
            {sending && <SpinnerIcon className="w-5 h-5 animate-spin" />}
            {sending ? 'جاري الإرسال...' : 'تأكيد الإرسال'}
          </button>
        </div>
      </div>
    </div>
  )
}

/* ==================== البيانات ==================== */
 
const infoCards = [
  { id: 'dept', title: 'الجهة الطالبة', value: 'عمادة تقنية المعلومات والتحول الرقمي', Icon: BuildingIcon },
  { id: 'owner', title: 'مقدم / مشرف الطلب', value: 'م فهد الأسطل (مدير إدارة مراكز البيانات)', Icon: UserCircleIcon },
  { id: 'date', title: 'تاريخ التقديم والإعتماد', value: '24 أكتوبر 2025', Icon: CalendarIcon },
]
 
const steps = [
  { n: 1, title: 'تقديم الإحتياج', desc: 'مكتمل ومعتمد من العميد', done: true },
  { n: 2, title: 'التدقيق الفني', desc: 'تم إجازة المواصفات الفنية', done: false },
  { n: 3, title: 'التدقيق المالي', desc: 'تم حجز التكاليف والميزانية', done: false },
  { n: 4, title: 'التعميد والطرح', desc: 'جاهز لطرح المنافسة العامة', done: false },
]
 
const attachments = [
  { id: 1, name: 'كراسة_المواصفات_الفنية_المعتمدة.pdf', status: 'تم الفحص الأمني', size: '2.8 MB' },
  { id: 2, name: 'جدول_الكميات_والتسعير_الاسترشادي', status: 'تم الاعتماد المالي', size: '480 KB' },
]
 
const items = [
  { id: 1, name: 'جهاز حاسوب مكتبي', quantity: '25 جهاز', unit: 'جهاز متكامل' },
  { id: 2, name: 'لوحة مفاتيح وفأرة لاسلكية', quantity: '25 طقم', unit: 'جهاز متكامل' },
]
 
/* ==================== صفحة تفاصيل الطلب المعتمد ==================== */
 
export default function ApprovedOrder() {
  const [activeTab, setActiveTab] = useState('need-requests')
  const [searchQuery, setSearchQuery] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
 
  /* ── قائمة الجوال: منع التنقل بالـ Tab داخلها وهي مغلقة ── */
  const drawerRef = useRef(null)
  useEffect(() => {
    if (drawerRef.current) drawerRef.current.inert = !isMobileMenuOpen
  }, [isMobileMenuOpen])

  /* ── قائمة الجوال: منع تمرير الصفحة + الإغلاق بـ Esc أو عند تكبير الشاشة ── */
  useEffect(() => {
    if (!isMobileMenuOpen) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') setIsMobileMenuOpen(false) }
    const mq = window.matchMedia('(min-width: 1024px)')
    const onMq = (e) => { if (e.matches) setIsMobileMenuOpen(false) }
    document.addEventListener('keydown', onKey)
    mq.addEventListener('change', onMq)
    return () => {
      document.body.style.overflow = prevOverflow
      document.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onMq)
    }
  }, [isMobileMenuOpen])

  /* ── إكمال وإرسال ── */
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [toast, setToast] = useState(null) // { type: 'success' | 'error', text }

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 4000)
    return () => clearTimeout(t)
  }, [toast])

  // TODO: استبدل هذه الدالة بطلب الـ API الحقيقي، مثال:
  // await fetch('/api/orders/PR-2026-0009/submit', { method: 'POST' })
  const submitOrder = () => new Promise((resolve) => setTimeout(resolve, 1200))

  const handleConfirmSend = async () => {
    setSending(true)
    try {
      await submitOrder()
      setSent(true)
      setConfirmOpen(false)
      setToast({ type: 'success', text: 'تم إرسال الطلب بنجاح إلى مرحلة التدقيق الفني' })
    } catch (err) {
      console.error('Submit failed:', err)
      setConfirmOpen(false)
      setToast({ type: 'error', text: 'تعذّر إرسال الطلب، حاول مرة أخرى.' })
    } finally {
      setSending(false)
    }
  }

  /* ── تصدير PDF ── */
  const exportRef = useRef(null)
  const [exporting, setExporting] = useState(false)
  const [exportError, setExportError] = useState('')
 
  const handleExportPdf = async () => {
    if (!exportRef.current || exporting) return
    setExporting(true)
    setExportError('')
    try {
      // تحميل المكتبات عند الحاجة فقط
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        import('html2canvas-pro'),
        import('jspdf'),
      ])
 
      const isDark = document.documentElement.classList.contains('dark')
      const canvas = await html2canvas(exportRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: isDark ? '#071322' : '#f3f3f3',
        windowWidth: exportRef.current.scrollWidth,
      })
 
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
      const margin = 8
      const pageW = pdf.internal.pageSize.getWidth()
      const pageH = pdf.internal.pageSize.getHeight()
      const imgW = pageW - margin * 2
      const imgH = (canvas.height * imgW) / canvas.width
      const usableH = pageH - margin * 2
      const img = canvas.toDataURL('image/png')
 
      // تقسيم الصورة على عدة صفحات إذا كانت أطول من صفحة A4
      let offset = 0
      pdf.addImage(img, 'PNG', margin, margin, imgW, imgH)
      while (imgH - offset > usableH) {
        offset += usableH
        pdf.addPage()
        pdf.addImage(img, 'PNG', margin, margin - offset, imgW, imgH)
      }
 
      pdf.setProperties({ title: 'PR-2026-0009 - طلب معتمد' })
      pdf.save('PR-2026-0009.pdf')
    } catch (err) {
      console.error('PDF export failed:', err)
      setExportError('تعذّر تصدير الملف، حاول مرة أخرى.')
    } finally {
      setExporting(false)
    }
  }
 
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#f3f3f3] dark:bg-[#071322] text-slate-800 dark:text-slate-100 flex flex-row overflow-x-hidden selection:bg-sky-500 selection:text-white"
      style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
    >
      <AnimationStyles />
 
      {/* ==================== القائمة الجانبية للشاشات الكبيرة ==================== */}
      <aside className="hidden lg:block sticky top-0 h-screen overflow-y-auto w-[clamp(260px,18.4vw,353px)] shrink-0 bg-white dark:bg-[#0b1b2d] border-l border-slate-100 dark:border-slate-800">
        <SidebarContent activeTab={activeTab} setActiveTab={setActiveTab} />
      </aside>
 
      {/* ==================== المحتوى الرئيسي ==================== */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* ==================== شريط الرأس العلوي ==================== */}
        <header className="h-16 bg-white dark:bg-[#0b1b2d] border-b border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4 px-4 sm:px-6 lg:ps-6 lg:pe-[clamp(24px,4.6vw,88px)] shrink-0 z-20">
          {/* اليمين: زر القائمة للموبايل + مسار التنقل */}
          <div className="flex items-center gap-3 min-w-0">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-expanded={isMobileMenuOpen}
              className="lg:hidden w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-95 transition-all cursor-pointer"
              aria-label="فتح القائمة"
            >
              <MenuIcon className="w-5 h-5" />
            </button>
 
            <nav aria-label="Breadcrumb" className="truncate">
              <ol className="flex items-center gap-1.5 text-xs sm:text-sm text-[#545f73] dark:text-slate-400">
                <li className="hidden sm:block">نظام إدارة المشتريات - الأزهر</li>
                <li className="hidden sm:block"><ChevronLeftIcon className="w-3.5 h-3.5" /></li>
                <li className="font-bold text-slate-900 dark:text-white">الإدارة الطالبة</li>
                <li><ChevronLeftIcon className="w-3.5 h-3.5" /></li>
                <li>
                  <Link to="/my-orders" className="hover:text-sky-600 transition-colors">
                    طلباتي
                  </Link>
                </li>
              </ol>
            </nav>
          </div>
 
          {/* الوسط: حقل البحث */}
          <div className="relative hidden lg:block shrink-0 w-[clamp(200px,18vw,345px)]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="بحث"
              className="w-full h-10 rounded-full bg-[#f4f4f4] dark:bg-[#0f243a] border border-[#d4d4d4] dark:border-slate-700 pr-11 pl-4 text-sm text-slate-800 dark:text-slate-200 placeholder-[#828282] focus:outline-none focus:border-[#00B4F0] focus:bg-white dark:focus:bg-[#0f243a] transition-all"
            />
            <SearchIcon className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#828282]" />
          </div>
 
          {/* اليسار: الإشعارات + اللغة */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 whitespace-nowrap">
            <NotificationMenu />
            <span className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-slate-700"></span>
            <LanguageMenu />
          </div>
        </header>
 
        {/* ==================== محتوى الصفحة ==================== */}
        <main className="flex-1 px-4 sm:px-6 lg:ps-6 lg:pe-[clamp(24px,4.15vw,80px)] pt-6 sm:pt-8 lg:pt-[60px] space-y-5 w-full min-w-0">
          <div ref={exportRef} className="space-y-5">
          {/* ==================== ترويسة الطلب ==================== */}
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
            <div className="ao-enter sm:pt-[18px]">
              <div className="flex flex-wrap items-center gap-2.5">
                <h1 className="px-3 py-1 rounded-full bg-[#ececec] dark:bg-slate-800 text-sm sm:text-[15px] font-bold text-slate-900 dark:text-white tracking-wide">
                  PR-2026-0009
                </h1>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eefff3] dark:bg-emerald-500/15 text-[#34c759] dark:text-emerald-400 font-bold text-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#34c759] dark:bg-emerald-400"></span>
                  <span>معتمد</span>
                </span>
              </div>
              <p className="mt-3 text-sm sm:text-[15px] text-slate-800 dark:text-slate-300 font-medium">
                تفاصيل واستحقاقات طلب الإحتياج والمشتريات المؤسسية
              </p>
            </div>
 
            {/* زر إكمال وإرسال */}
            <button
              type="button"
              data-html2canvas-ignore="true"
              onClick={() => setConfirmOpen(true)}
              disabled={sent}
              className={`w-full sm:w-[273px] h-12 rounded-full inline-flex items-center justify-center gap-2 font-bold text-[15px] transition-all whitespace-nowrap ${
                sent
                  ? 'bg-[#eefff3] dark:bg-emerald-500/15 text-[#1f9d47] dark:text-emerald-400 cursor-default'
                  : 'bg-[linear-gradient(to_left,#01B0F5,#0066F0)] text-black hover:brightness-105 hover:shadow-lg hover:shadow-sky-500/30 active:scale-[0.98] cursor-pointer'
              }`}
            >
              {sent && <CheckIcon className="w-5 h-5" />}
              {sent ? 'تم الإرسال' : 'إكمال وإرسال'}
            </button>
          </div>
 
          {/* ==================== البطاقات الثلاث (مع حركات) ==================== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 pt-2 sm:pt-6">
            {infoCards.map(({ id, title, value, Icon }, i) => (
              <div
                key={id}
                className={`ao-enter ${i === infoCards.length - 1 ? 'sm:col-span-2 xl:col-span-1' : ''}`}
                style={{ animationDelay: `${120 + i * 110}ms` }}
              >
                <div className="group h-full min-h-[86px] bg-white dark:bg-[#0b1b2d] rounded-2xl px-5 py-4 flex items-center gap-4 border border-transparent hover:border-sky-200 dark:hover:border-sky-800 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300 cursor-default">
                  <span className="shrink-0 text-slate-900 dark:text-slate-100 group-hover:text-[#0095FF] transition-colors duration-300">
                    <Icon className="ao-icon-pop w-6 h-6" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[15px] sm:text-base 2xl:text-[17px] font-bold text-slate-900 dark:text-white leading-snug">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm text-[#545f73] dark:text-slate-400 truncate">{value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
 
          {/* ==================== الحاوية البيضاء الكبيرة ==================== */}
          <div className="bg-white dark:bg-[#0b1b2d] rounded-2xl sm:rounded-3xl p-3 sm:p-4 space-y-6 pb-6 sm:pb-7">
            {/* 1) مسار ومراحل الاعتماد النظامي */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-700 px-4 sm:px-6 pt-5 sm:pt-6 pb-6 sm:pb-10 lg:pb-[50px]">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white pb-2.5 border-b border-slate-200 dark:border-slate-700">
                مسار ومراحل الاعتماد النظامي
              </h2>
 
              <ol className="grid grid-cols-1 sm:grid-cols-4 gap-6 sm:gap-0 mt-5 sm:mt-[26px]">
                {steps.map((s, i) => (
                  <li
                    key={s.n}
                    className="ao-enter relative flex sm:block items-start gap-4"
                    style={{ animationDelay: `${250 + i * 100}ms` }}
                  >
                    {/* خط عمودي يربط الخطوات على الجوال */}
                    {i < steps.length - 1 && (
                      <span
                        aria-hidden="true"
                        className={`sm:hidden absolute top-12 -bottom-4 start-[18.5px] w-[3px] rounded-full ${
                          s.done ? 'bg-[#01B0F5]' : 'bg-[#e6f4fd] dark:bg-sky-950/60'
                        }`}
                      ></span>
                    )}
                    {/* المربع + الخط الواصل (مسافة متساوية من الطرفين) */}
                    <div className="flex items-center gap-2 shrink-0 sm:shrink">
                      <span
                        className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold text-slate-900 transition-transform duration-300 hover:scale-110 ${
                          s.done
                            ? 'bg-[#01B0F5] ring-2 ring-[#0095FF] ring-offset-2 ring-offset-white dark:ring-offset-[#0b1b2d]'
                            : 'bg-[#e6f4fd] dark:bg-sky-950/60 dark:text-sky-300'
                        }`}
                      >
                        {s.n}
                      </span>
                      {i < steps.length - 1 && (
                        <span
                          className={`hidden sm:block flex-1 rounded-full ms-1 me-4 lg:me-8 ${
                            s.done ? 'h-1 bg-[#01B0F5]' : 'h-[3px] bg-[#e6f4fd] dark:bg-sky-950/60'
                          }`}
                        ></span>
                      )}
                    </div>
 
                    {/* النصوص */}
                    <div className="pt-1 sm:pt-0 sm:mt-3 sm:pe-2">
                      <span
                        className={`block text-sm leading-none ${
                          s.done ? 'text-[#0095FF] font-semibold' : 'text-slate-500 dark:text-slate-400'
                        }`}
                      >
                        الخطوة {s.n}
                      </span>
                      <h3 className="mt-3 sm:mt-4 text-[15px] lg:text-base font-bold leading-tight text-slate-900 dark:text-white">
                        {s.title}
                      </h3>
                      <p className="mt-2 sm:mt-2.5 text-xs leading-snug text-slate-500 dark:text-slate-400">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
 
            {/* 2) المواصفات الفنية المعتمدة */}
            <section className="space-y-2.5">
              <h2 className="text-base font-bold text-slate-900 dark:text-white">المواصفات الفنية المعتمدة</h2>
              <div className="rounded-xl bg-[#eaf6fd] dark:bg-sky-950/20 border border-sky-300/70 dark:border-sky-900/50 px-4 py-3 text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                تجديد خوادم مركز البيانات السحابي الرئيسي توريد وحدات معالجة فائقة السرعة مع وحدات تخزين SAN ممتدة لبيئة المحاكاة
              </div>
            </section>
 
            {/* 3) المبررات والأثر التشغيلي */}
            <section className="space-y-2.5">
              <h2 className="text-base font-bold text-slate-900 dark:text-white">المبررات والأثر التشغيلي</h2>
              <div className="rounded-xl bg-white dark:bg-slate-800/40 border border-slate-300 dark:border-slate-700 px-4 py-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                استيعاب الضغط المتزايد على المنصات الأكاديمية ونظام إبرام وبلاك بورد وتوفير سعات احتياطية تفي بمتطلبات التحول الرقمي مع توفير حماية تخزين SAN ومواصفات موثوقية عالية تواكب المعايير الوطنية.
              </div>
            </section>
 
            {/* 4) المرفقات (كروت صغيرة مع حركات) */}
            <section className="space-y-2.5">
              <h2 className="text-base font-bold text-slate-900 dark:text-white">المرفقات والمسوغات الفنية المسجلة</h2>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-4">
                {attachments.map((f, i) => (
                  <div key={f.id} className="ao-enter" style={{ animationDelay: `${400 + i * 110}ms` }}>
                    <div className="group min-h-[80px] py-3 rounded-xl bg-[#e8f4fd] dark:bg-sky-950/20 border border-transparent hover:border-sky-300 dark:hover:border-sky-800 hover:bg-[#dff0fc] hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/10 px-4 flex items-center justify-between gap-3 transition-all duration-300">
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="shrink-0 w-8 h-8 rounded-md bg-rose-50 dark:bg-rose-950/30 flex items-center justify-center">
                          <PdfFileIcon className="ao-icon-pop w-5 h-5" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-sm sm:text-[15px] font-bold text-slate-900 dark:text-white break-all line-clamp-2">{f.name}</p>
                          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                            {f.status} • <span dir="ltr">{f.size}</span>
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        aria-label={`تحميل ${f.name}`}
                        className="shrink-0 w-10 h-10 rounded-full text-slate-900 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 hover:text-[#0095FF] flex items-center justify-center transition-colors cursor-pointer"
                      >
                        <DownloadIcon className="ao-icon-bounce w-6 h-6" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
 
            {/* 5) درجة الأولوية والأهمية التشغيلية */}
            <section>
              <h2 className="text-base font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 lg:mb-10">
                درجة الأولوية والأهمية التشغيلية
              </h2>
              {/* الجوال: كل صنف في بطاقة */}
              <ul className="sm:hidden space-y-3">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="rounded-xl border border-slate-300 dark:border-slate-700 overflow-hidden"
                  >
                    <div className="flex items-center gap-3 px-4 py-3 bg-[#f0f0f0] dark:bg-[#0f243a]">
                      <span className="shrink-0 w-7 h-7 rounded-md bg-white dark:bg-[#0b1b2d] flex items-center justify-center text-sm font-bold text-slate-900 dark:text-white">
                        {item.id}
                      </span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">{item.name}</span>
                    </div>
                    <dl className="grid grid-cols-2 divide-x divide-x-reverse divide-slate-300 dark:divide-slate-700 bg-white dark:bg-[#0b1b2d]">
                      <div className="px-4 py-3">
                        <dt className="text-xs text-slate-500 dark:text-slate-400">الكمية</dt>
                        <dd className="mt-1 text-sm font-bold text-slate-900 dark:text-slate-100">{item.quantity}</dd>
                      </div>
                      <div className="px-4 py-3">
                        <dt className="text-xs text-slate-500 dark:text-slate-400">وحدة القياس</dt>
                        <dd className="mt-1 text-sm font-bold text-slate-900 dark:text-slate-100">{item.unit}</dd>
                      </div>
                    </dl>
                  </li>
                ))}
              </ul>

              {/* التابلت وما فوق: جدول */}
              <div className="hidden sm:block border border-slate-300 dark:border-slate-700 rounded-2xl overflow-x-auto">
                <table className="w-full text-center text-sm">
                  <thead>
                    <tr className="bg-[#f0f0f0] dark:bg-[#0f243a] text-slate-900 dark:text-slate-200 h-[72px] lg:h-[104px]">
                      <th className="px-4 font-bold border-e border-slate-300 dark:border-slate-700 w-1/4">م</th>
                      <th className="px-4 font-bold border-e border-slate-300 dark:border-slate-700 w-1/4">اسم الصنف</th>
                      <th className="px-4 font-bold border-e border-slate-300 dark:border-slate-700 w-1/4">الكمية</th>
                      <th className="px-4 font-bold w-1/4">وحدة القياس</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-[#0b1b2d]">
                    {items.map((item) => (
                      <tr
                        key={item.id}
                        className="h-[72px] lg:h-[104px] border-t border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-bold hover:bg-sky-50/60 dark:hover:bg-slate-800/40 transition-colors"
                      >
                        <td className="px-4 border-e border-slate-300 dark:border-slate-700">{item.id}</td>
                        <td className="px-4 border-e border-slate-300 dark:border-slate-700">{item.name}</td>
                        <td className="px-4 border-e border-slate-300 dark:border-slate-700">{item.quantity}</td>
                        <td className="px-4">{item.unit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
          </div>{/* end exportRef */}
 
          {/* ==================== أزرار الإجراء السفلية ==================== */}
          <div className="sticky bottom-0 z-10 !mt-8 lg:!mt-[52px] -mx-4 sm:mx-0 bg-white dark:bg-[#0b1b2d] px-4 pt-3 sm:pt-4 pb-[max(12px,env(safe-area-inset-bottom))] sm:pb-4 grid grid-cols-2 sm:flex sm:justify-end gap-3 sm:gap-6 shadow-[0_-4px_20px_rgba(15,23,42,0.06)]">
            {exportError && (
              <p role="alert" className="col-span-2 order-last sm:order-none self-center sm:me-auto text-sm font-medium text-[#E5262A]">
                {exportError}
              </p>
            )}
            <button
              type="button"
              onClick={handleExportPdf}
              disabled={exporting}
              aria-busy={exporting}
              className="w-full sm:w-[min(300px,45%)] lg:w-[300px] h-11 sm:h-12 px-2 rounded-full inline-flex items-center justify-center gap-2 bg-[linear-gradient(to_left,#01B0F5,#0066F0)] text-black font-bold text-[13px] sm:text-[15px] hover:brightness-105 hover:shadow-lg hover:shadow-sky-500/30 active:scale-[0.98] disabled:opacity-70 disabled:cursor-wait disabled:active:scale-100 transition-all cursor-pointer whitespace-nowrap"
            >
              {exporting && <SpinnerIcon className="w-5 h-5 animate-spin" />}
              {exporting ? 'جاري التصدير...' : 'تصدير PDF معتمد'}
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="w-full sm:w-[min(300px,45%)] lg:w-[300px] h-11 sm:h-12 px-2 rounded-full border border-[#0066F0] text-[#0066F0] bg-white dark:bg-transparent dark:border-sky-400 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-950/30 active:scale-[0.98] font-bold text-[13px] sm:text-[15px] transition-all cursor-pointer whitespace-nowrap"
            >
              طباعة تفاصيل الطلب
            </button>
          </div>
        </main>
      </div>
 
      {/* ==================== نافذة التأكيد + رسالة النتيجة ==================== */}
      <ConfirmSendDialog
        open={confirmOpen}
        sending={sending}
        onCancel={() => setConfirmOpen(false)}
        onConfirm={handleConfirmSend}
      />

      {toast && (
        <div
          role="status"
          aria-live="polite"
          className={`ao-toast fixed z-[70] left-1/2 bottom-24 sm:bottom-28 w-[calc(100%-32px)] sm:w-auto max-w-[480px] flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-xl text-sm font-bold ${
            toast.type === 'success'
              ? 'bg-[#eefff3] text-[#1f7a3a] border border-[#b9efc9] dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800'
              : 'bg-rose-50 text-[#c81e22] border border-rose-200 dark:bg-rose-950 dark:text-rose-300 dark:border-rose-800'
          }`}
        >
          {toast.type === 'success' ? <CheckIcon className="w-5 h-5 shrink-0" /> : <AlertIcon className="w-5 h-5 shrink-0" />}
          <span>{toast.text}</span>
        </div>
      )}

      {/* ==================== القائمة الجانبية للجوال ==================== */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${isMobileMenuOpen ? '' : 'pointer-events-none'}`}
        aria-hidden={!isMobileMenuOpen}
        ref={drawerRef}
      >
        {/* الخلفية المعتمة — تظهر وتختفي بتلاشي ناعم */}
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className={`absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 ease-out motion-reduce:transition-none ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* اللوحة — تنزلق من اليمين */}
        <div
          role="dialog"
          aria-modal="true"
          aria-label="القائمة الرئيسية"
          className={`absolute top-0 right-0 w-[300px] max-w-[85%] h-full bg-white dark:bg-[#0b1b2d] shadow-2xl overflow-y-auto overscroll-contain will-change-transform transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transition-none ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="إغلاق القائمة"
            className={`absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-100 rotate-0 delay-150' : 'opacity-0 -rotate-90'
            }`}
          >
            <CloseIcon className="w-4 h-4" />
          </button>
          <SidebarContent
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onNavigate={() => setIsMobileMenuOpen(false)}
          />
        </div>
      </div>
    </div>
  )
}