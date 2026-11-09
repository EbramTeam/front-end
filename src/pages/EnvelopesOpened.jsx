
// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { logo, userHani, shieldIcon } from '../assets/images'
// import LanguageMenu from '../components/LanguageMenu'
// import NotificationMenu from '../components/NotificationMenu'

// /* ==================== الأيقونات ==================== */
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

// const navItems = [
//   { id: 'home', label: 'الرئيسية', Icon: HomeIcon, path: '/dashboard' },
//   { id: 'my-orders', label: 'طلباتي', Icon: FileIcon, path: '/my-orders' },
//   { id: 'new-order', label: 'طلب شراء جديد', Icon: FilePlusIcon, path: '/new-order' },
//   { id: 'suppliers', label: 'الموردين', Icon: TruckIcon, path: '/dashboard' },
// ]

// /* ==================== القائمة الجانبية ==================== */
// function SidebarContent({ onNavigate }) {
//   const navigate = useNavigate()
//   return (
//     <div className="min-h-full flex flex-col">
//       <div className="px-4 pt-[clamp(16px,3vh,32px)]">
//         <div className="px-2">
//           <Link to="/dashboard" onClick={onNavigate} className="inline-block">
//             <img src={logo} alt="IBRAM" className="h-[clamp(100px,4.6vh,50px)] w-auto object-contain" />
//           </Link>
//           <p className="mt-[clamp(6px,1.1vh,12px)] text-[length:clamp(13px,1.5vh,16px)] text-slate-500 dark:text-slate-400">
//             إبرام للمشتريات
//           </p>
//         </div>
//         <p className="my-[clamp(12px,4vh,44px)] px-2 text-[length:clamp(13px,1.4vh,15px)] text-slate-500 dark:text-slate-400">
//           القوائم التشغيلية
//         </p>
//         <nav className="space-y-2">
//           {navItems.map(({ id, label, Icon, path }) => (
//             <button
//               key={id}
//               onClick={() => { navigate(path); onNavigate?.() }}
//               className="w-full h-[clamp(40px,5.2vh,56px)] flex items-center gap-3 px-5 2xl:px-6 rounded-lg text-[length:clamp(16px,2.04vh,22px)] font-medium text-right cursor-pointer transition-all bg-[#f5f5f5] dark:bg-[#0f243a] text-slate-900 dark:text-slate-200 hover:bg-[#ececec] dark:hover:bg-[#142e4a]"
//             >
//               <Icon className="w-[1em] h-[1em] shrink-0" />
//               <span>{label}</span>
//             </button>
//           ))}
//         </nav>
//       </div>
//       <div className="mt-auto pt-[clamp(12px,2vh,24px)]">
//         <div className="flex items-center gap-2 px-6 2xl:px-10 py-[clamp(10px,1.5vh,16px)] bg-[#e9f4fb] dark:bg-[#0e2740]">
//           <span className="w-2.5 h-2.5 rounded-full bg-emerald-700 flex-shrink-0 animate-pulse" />
//           <div className="flex flex-col text-right flex-1">
//             <span className="whitespace-nowrap text-[15px] 2xl:text-[17px] font-bold text-slate-900 dark:text-white">النظام متصل وآمن</span>
//             <span className="text-[13px] 2xl:text-sm text-slate-500 dark:text-slate-400">Sovereign Core v4.2</span>
//           </div>
//           <img src={shieldIcon} alt="shield" className="w-5 h-5 object-contain flex-shrink-0" />
//         </div>
//         <div className="flex items-center justify-between py-[clamp(10px,1.85vh,20px)] pr-6 2xl:pr-10 pl-5 2xl:pl-7 mt-[clamp(0px,3vh,32px)] mb-2 cursor-pointer group">
//           <div className="flex items-center gap-4">
//             <img src={userHani} alt="م. هاني وشاح" className="w-10 h-10 rounded-full object-cover" />
//             <div className="text-right">
//               <h4 className="text-[15px] 2xl:text-[17px] font-bold text-slate-900 dark:text-white group-hover:text-sky-600 transition-colors">م. هاني وشاح</h4>
//               <p className="text-[13px] 2xl:text-sm text-slate-500 dark:text-slate-400">الإدارة الطالبة</p>
//             </div>
//           </div>
//           <i className="fa-solid fa-angle-left text-sm text-slate-500 group-hover:text-slate-700 transition-colors" />
//         </div>
//       </div>
//     </div>
//   )
// }

// /* ==================== بيانات ثابتة ==================== */
// const steps = [
//   { num: 1, label: 'تقديم الطلب' },
//   { num: 2, label: 'الاعتماد' },
//   { num: 3, label: 'طرح العروض' },
//   { num: 4, label: 'فتح المظاريف' },
//   { num: 5, label: 'المحضر والتوقيع' },
// ]

// const orderItems = [
//   { num: 1, name: 'أجهزة حاسوب', qty: 20, unit: 'جهاز', unitPrice: 2500, total: 50000 },
//   { num: 2, name: 'لوحة مفاتيح وفأرة لاسلكية', qty: 25, unit: 'طقم', unitPrice: 1600, total: 40000 },
//   { num: 3, name: 'أجهزة حاسوب', qty: 1, unit: 'جهاز', unitPrice: 500, total: 3000 },
// ]

// const suppliers = [
//   {
//     name: 'مؤسسة المواد الجاهزة للأجهزة المكتبية 2',
//     items: [3980, 2300, 5500],
//     total: 180000,
//   },
//   {
//     name: 'شركة الحلول التقنية المتقدمة',
//     items: [4050, 1850, 4050],
//     total: 180000,
//   },
//   {
//     name: 'شركة الحلول التقنية المتقدمة 1',
//     items: [4050, 1850, 4050],
//     total: 180000,
//   },
// ]

// const logItems = [
//   { date: '12 أكتوبر 2026', time: '2:41 م', action: 'تم فتح المظاريف', by: 'لجنة فتح المظاريف', color: 'bg-[#22c55e]' },
//   { date: '11 أكتوبر 2026', time: '2:41 م', action: 'انتهاء مدة استقبال العروض وإغلاق طلب العروض', by: 'النظام', color: 'bg-[#6366f1]' },
//   { date: '05 أكتوبر 2026', time: '10:00 ص', action: 'إرسال طلب العروض للموردين', by: 'النظام', color: 'bg-[#007DEA]' },
//   { date: '03 أكتوبر 2026', time: '9:15 ص', action: 'اعتماد الطلب من الإدارة العليا', by: 'م. أحمد السيد', color: 'bg-[#22c55e]' },
//   { date: '01 أكتوبر 2026', time: '11:30 ص', action: 'تقديم الطلب للاعتماد', by: 'م. هاني وشاح', color: 'bg-[#007DEA]' },
// ]

// /* ==================== الصفحة ==================== */
// export default function EnvelopesOpened() {
//   const navigate = useNavigate()
//   const [activeTab, setActiveTab] = useState('data')
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [searchQuery, setSearchQuery] = useState('')

//   return (
//     <div
//       dir="rtl"
//       className="min-h-screen bg-[#f5f5f5] dark:bg-[#071322] text-slate-800 dark:text-slate-100 flex flex-row transition-colors duration-200"
//       style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
//     >
//       {/* ==================== القائمة الجانبية ==================== */}
//       <aside className="hidden lg:block w-[clamp(240px,18.4vw,353px)] shrink-0 bg-white dark:bg-[#0b1b2d] sticky top-0 h-screen overflow-y-auto select-none z-20 dark:border-l dark:border-slate-800/80">
//         <SidebarContent />
//       </aside>

//       {/* ==================== المحتوى الرئيسي ==================== */}
//       <div className="flex-1 flex flex-col min-w-0">
//         {/* الهيدر */}
//         <header className="h-16 bg-white dark:bg-[#0b1b2d] px-4 lg:pl-[88px] lg:pr-6 flex items-center justify-between gap-4 sticky top-0 z-10 dark:border-b dark:border-slate-800/80">
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => setIsMobileMenuOpen(true)}
//               className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
//               aria-label="القائمة"
//             >
//               <i className="fa-solid fa-bars text-lg" />
//             </button>
//             <nav className="flex items-center gap-2 text-[13px] sm:text-[15px] text-slate-500 dark:text-slate-400">
//               <Link to="/dashboard" className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
//                 نظام إدارة المشتريات - الأزهر
//               </Link>
//               <i className="fa-solid fa-angle-left text-[11px] text-slate-400" />
//               <Link to="/dashboard" className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
//                 لوحة التحكم والمتابعة
//               </Link>
//             </nav>
//           </div>

//           <div className="hidden md:flex flex-1 max-w-[345px]">
//             <div className="relative w-full">
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="بحث"
//                 className="w-full h-10 bg-[#f7f7f7] dark:bg-[#0f243a] border border-slate-300 dark:border-slate-700 rounded-full pr-12 pl-4 text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-[#01B0F5]"
//               />
//               <button type="button" aria-label="بحث" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">
//                 <SearchIcon className="w-6 h-6" />
//               </button>
//             </div>
//           </div>

//           <div className="flex items-center gap-4">
//             <NotificationMenu />
//             <span className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-slate-700" />
//             <LanguageMenu />
//           </div>
//         </header>

//         {/* ==================== محتوى الصفحة ==================== */}
//         <main className="w-full flex-1 px-4 sm:px-6 lg:pl-10 lg:pr-6 pt-8 pb-12 space-y-6 max-w-[1400px]">

//           {/* رابط رجوع */}
//           <button
//             onClick={() => navigate('/dashboard')}
//             className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors cursor-pointer"
//           >
//             <i className="fa-solid fa-angle-right text-xs" />
//             <span>رجوع</span>
//           </button>

//           {/* ترويسة الطلب */}
//           <div className="bg-white dark:bg-[#0b1b2d] rounded-[20px] p-6 shadow-sm border border-slate-100 dark:border-slate-800/80">
//             {/* رقم الطلب + Badge */}
//             <div className="flex items-center gap-3 mb-3 flex-wrap">
//               <span className="text-sm font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
//                 PR-2026-0001
//               </span>
//               <span className="inline-flex items-center gap-1.5 h-7 px-3 rounded-full bg-[#dcfce7] text-[#166534] dark:bg-emerald-950/60 dark:text-emerald-400 text-[13px] font-semibold">
//                 <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
//                 تم فتح المظاريف
//               </span>
//             </div>

//             <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
//               أجهزة حاسوب لمعمل الحاسب الآلي
//             </h1>
//             <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">كلية الهندسة · م. خالد الزهراني</p>

//             {/* أين الطلب الآن + الخطوة التالية */}
//             <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div className="bg-[#f5f5f5] dark:bg-[#0c1f33] rounded-2xl px-5 py-4 flex items-start gap-3">
//                 <div className="w-9 h-9 rounded-full bg-white dark:bg-[#0b1b2d] flex items-center justify-center shrink-0 shadow-sm">
//                   <i className="fa-solid fa-location-dot text-[#007DEA] text-sm" />
//                 </div>
//                 <div className="text-right">
//                   <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">أين الطلب الآن</p>
//                   <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">اكتملت المرحلة الأولى</p>
//                   <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">لا أحد</p>
//                 </div>
//               </div>

//               <div className="bg-[#f5f5f5] dark:bg-[#0c1f33] rounded-2xl px-5 py-4 flex items-start gap-3">
//                 <div className="w-9 h-9 rounded-full bg-white dark:bg-[#0b1b2d] flex items-center justify-center shrink-0 shadow-sm">
//                   <i className="fa-solid fa-arrow-left text-[#007DEA] text-sm" />
//                 </div>
//                 <div className="text-right">
//                   <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">الخطوة التالية</p>
//                   <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">جاهز للمرحلة التالية (اللجنة الفنية)</p>
//                 </div>
//               </div>
//             </div>

//             {/* شريط: الطلب معتمد ومقفل */}
//             <div className="mt-4 flex items-center justify-between flex-wrap gap-3 bg-[#f8f9fa] dark:bg-[#0c1f33] rounded-2xl px-5 py-4 border border-slate-200 dark:border-slate-700">
//               <div className="flex items-start gap-3">
//                 <div className="w-9 h-9 rounded-full bg-[#e2e8f0] dark:bg-slate-700 flex items-center justify-center shrink-0">
//                   <i className="fa-solid fa-lock text-slate-600 dark:text-slate-300 text-sm" />
//                 </div>
//                 <div className="text-right">
//                   <p className="text-sm font-bold text-slate-900 dark:text-white">الطلب معتمد ومقفل للتعديل</p>
//                   <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 max-w-lg">
//                     لا يمكن تغيير بيانات الطلب بعد اعتماده؛ أي تعديل يتم عبر طلب تعديل رسمي يُرجَع للإدارة العليا ويُؤثَّق في السجل.
//                   </p>
//                 </div>
//               </div>
//               <button className="inline-flex items-center gap-2 h-9 px-5 rounded-full border border-slate-300 dark:border-slate-600 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer shrink-0">
//                 طلب تعديل رسمي
//               </button>
//             </div>
//           </div>

//           {/* مراحل الطلب (Stepper) */}
//           <div className="bg-white dark:bg-[#0b1b2d] rounded-[20px] px-6 py-6 shadow-sm border border-slate-100 dark:border-slate-800/80">
//             <h2 className="text-base font-bold text-slate-900 dark:text-white mb-6">مراحل الطلب</h2>
//             <div className="flex items-start justify-between overflow-x-auto gap-0">
//               {steps.map((step, idx) => (
//                 <div key={step.num} className="flex-1 flex flex-col items-center min-w-[80px]">
//                   <div className="w-full flex items-center">
//                     <div className={`flex-1 h-[3px] ${idx === 0 ? 'opacity-0' : 'bg-[#22c55e]'}`} />
//                     <div className="w-9 h-9 rounded-full bg-[#22c55e] flex items-center justify-center shrink-0 shadow-md">
//                       <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
//                         <polyline points="20 6 9 17 4 12" />
//                       </svg>
//                     </div>
//                     <div className={`flex-1 h-[3px] ${idx === steps.length - 1 ? 'opacity-0' : 'bg-[#22c55e]'}`} />
//                   </div>
//                   <div className="mt-3 text-center px-1">
//                     <p className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white">الخطوة {step.num}</p>
//                     <p className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white mt-0.5">{step.label}</p>
//                     <p className="text-[10px] text-[#22c55e] font-medium mt-0.5">مكتملة</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* التبويبات + المحتوى */}
//           <div className="bg-white dark:bg-[#0b1b2d] rounded-[20px] shadow-sm border border-slate-100 dark:border-slate-800/80 overflow-hidden">
//             {/* شريط التبويبات */}
//             <div className="flex items-center border-b border-slate-200 dark:border-slate-700/80 px-6">
//               {[
//                 { id: 'data', label: 'البيانات' },
//                 { id: 'attachments', label: 'المرفقات', count: 1 },
//                 { id: 'log', label: 'سجل الإجراءات', count: 1 },
//               ].map((tab) => (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`relative flex items-center gap-1.5 px-4 py-4 text-sm font-semibold transition-colors cursor-pointer ${
//                     activeTab === tab.id
//                       ? 'text-[#007DEA] dark:text-[#01B0F5]'
//                       : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
//                   }`}
//                 >
//                   {tab.label}
//                   {tab.count && (
//                     <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#e8f4fd] dark:bg-[#0c2438] text-[#007DEA] dark:text-[#01B0F5] text-[10px] font-bold">
//                       {tab.count}
//                     </span>
//                   )}
//                   {activeTab === tab.id && (
//                     <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#007DEA] dark:bg-[#01B0F5] rounded-t-full" />
//                   )}
//                 </button>
//               ))}
//             </div>

//             {/* ==================== تبويب البيانات ==================== */}
//             {activeTab === 'data' && (
//               <div className="p-6 space-y-8">
//                 {/* المبرر */}
//                 <div>
//                   <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3">المبرر</h3>
//                   <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed bg-[#f5f5f5] dark:bg-[#0c1f33] rounded-xl p-4">
//                     تحديث أجهزة الحاسب لمعمل الحاسب الآلي (قاعة 214) لأي تجاوز عمرها سبع سنوات ولم تعد البرامج المقررة في الخطة الدراسية.
//                   </p>
//                 </div>

//                 {/* شبكة المعلومات */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 text-right">
//                   {[
//                     { label: 'مقدم الطلب', value: 'م. خالد الزهراني' },
//                     { label: 'الإدارة', value: 'كلية الهندسة' },
//                     { label: 'التصنيف', value: 'أجهزة حاسوب وتقنية' },
//                     { label: 'تاريخ الإنشاء', value: '23 أكتوبر 2026' },
//                     { label: 'التاريخ المطلوب', value: '30 أكتوبر 2026' },
//                     { label: 'طريقة الشراء', value: 'لم أحدد بعد' },
//                     { label: 'رقم عروض الأسعار', value: 'RFQ-2026-0001' },
//                     { label: 'آخر موعد للتقديم', value: '11 أكتوبر 2026 في 241 م' },
//                     { label: 'موعد فتح المظاريف', value: '12 أكتوبر 2026 في 241 م' },
//                   ].map(({ label, value }) => (
//                     <div key={label} className="flex items-center justify-between py-2.5 border-b border-slate-100 dark:border-slate-700/60">
//                       <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">{label}</span>
//                       <span className="text-sm font-bold text-slate-900 dark:text-white">{value}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* جدول الأصناف */}
//                 <div>
//                   <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4">الأصناف والخدمات</h3>
//                   <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700/80">
//                     <table className="w-full text-right text-sm">
//                       <thead>
//                         <tr className="bg-[#f5f5f5] dark:bg-[#0c1f33] text-slate-600 dark:text-slate-400 text-xs">
//                           <th className="px-4 py-3 font-semibold">#</th>
//                           <th className="px-4 py-3 font-semibold">الصنف/الخدمة والمواصفات</th>
//                           <th className="px-4 py-3 font-semibold">الكمية</th>
//                           <th className="px-4 py-3 font-semibold">سعر الوحدة التقديري</th>
//                           <th className="px-4 py-3 font-semibold">الإجمالي التقديري</th>
//                         </tr>
//                       </thead>
//                       <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60">
//                         {orderItems.map((item) => (
//                           <tr key={item.num} className="bg-white dark:bg-transparent hover:bg-slate-50 dark:hover:bg-[#0c2438]/40 transition-colors">
//                             <td className="px-4 py-3 text-slate-500 dark:text-slate-400">{item.num}</td>
//                             <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">{item.name}</td>
//                             <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{item.qty} {item.unit}</td>
//                             <td className="px-4 py-3 text-slate-700 dark:text-slate-300">ش {item.unitPrice.toLocaleString('en-US')}</td>
//                             <td className="px-4 py-3 font-bold text-slate-900 dark:text-white">ش {item.total.toLocaleString('en-US')}</td>
//                           </tr>
//                         ))}
//                         <tr className="bg-[#f5f5f5] dark:bg-[#0c1f33]">
//                           <td colSpan={4} className="px-4 py-3 text-right text-sm font-bold text-slate-900 dark:text-white">
//                             إجمالي التكلفة التقديرية
//                           </td>
//                           <td className="px-4 py-3 font-extrabold text-slate-900 dark:text-white">
//                             ش {orderItems.reduce((s, i) => s + i.total, 0).toLocaleString('en-US')}
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>

//                 {/* جدول مقارنة عروض الموردين */}
//                 <div>
//                   <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4">الأصناف والخدمات</h3>
//                   <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700/80">
//                     <table className="w-full text-right text-sm">
//                       <thead>
//                         <tr className="bg-[#f5f5f5] dark:bg-[#0c1f33] text-slate-600 dark:text-slate-400 text-xs">
//                           <th className="px-4 py-3 font-semibold">الصنف</th>
//                           <th className="px-4 py-3 font-semibold">الكمية</th>
//                           {suppliers.map((s, i) => (
//                             <th key={i} className="px-4 py-3 font-semibold text-center">{s.name}</th>
//                           ))}
//                         </tr>
//                       </thead>
//                       <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60">
//                         {orderItems.map((item, rowIdx) => (
//                           <tr key={item.num} className="bg-white dark:bg-transparent hover:bg-slate-50 dark:hover:bg-[#0c2438]/40 transition-colors">
//                             <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">{item.name}</td>
//                             <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{item.qty} {item.unit}</td>
//                             {suppliers.map((s, sIdx) => (
//                               <td key={sIdx} className="px-4 py-3 text-center text-slate-700 dark:text-slate-300">
//                                 ش {s.items[rowIdx].toLocaleString('en-US')}
//                               </td>
//                             ))}
//                           </tr>
//                         ))}
//                         <tr className="bg-[#f5f5f5] dark:bg-[#0c1f33]">
//                           <td colSpan={2} className="px-4 py-3 text-right text-sm font-bold text-slate-900 dark:text-white">
//                             إجمالي التكلفة التقديرية
//                           </td>
//                           {suppliers.map((s, i) => (
//                             <td key={i} className="px-4 py-3 text-center font-extrabold text-slate-900 dark:text-white">
//                               ش {s.total.toLocaleString('en-US')}
//                             </td>
//                           ))}
//                         </tr>
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* ==================== تبويب المرفقات ==================== */}
//             {activeTab === 'attachments' && (
//               <div className="p-6">
//                 <div className="flex items-center justify-between p-4 bg-[#f5f5f5] dark:bg-[#0c1f33] rounded-2xl border border-slate-200 dark:border-slate-700">
//                   <div className="flex items-center gap-3">
//                     <div className="w-10 h-10 rounded-xl bg-[#e8f4fd] dark:bg-[#0d2d4a] flex items-center justify-center">
//                       <i className="fa-regular fa-file-pdf text-[#007DEA] text-lg" />
//                     </div>
//                     <div className="text-right">
//                       <p className="text-sm font-bold text-slate-900 dark:text-white">مواصفات_المعمل.pdf</p>
//                       <p className="text-xs text-slate-500 dark:text-slate-400">1.2 م.ب</p>
//                     </div>
//                   </div>
//                   <button className="text-[#007DEA] hover:text-[#005bb5] text-sm font-semibold transition-colors cursor-pointer">
//                     تحميل
//                   </button>
//                 </div>
//               </div>
//             )}

//             {/* ==================== تبويب سجل الإجراءات ==================== */}
//             {activeTab === 'log' && (
//               <div className="p-6">
//                 <div className="relative">
//                   <div className="absolute right-4 top-2 bottom-2 w-0.5 bg-slate-200 dark:bg-slate-700" />
//                   <div className="space-y-5 pr-12">
//                     {logItems.map((item, idx) => (
//                       <div key={idx} className="relative">
//                         <div className={`absolute -right-[38px] w-4 h-4 rounded-full ${item.color} border-2 border-white dark:border-[#0b1b2d] top-1.5`} />
//                         <div className="bg-[#f5f5f5] dark:bg-[#0c1f33] rounded-2xl p-4">
//                           <div className="flex items-start justify-between gap-2">
//                             <p className="text-sm font-bold text-slate-900 dark:text-white">{item.action}</p>
//                             <span className="text-xs text-slate-400 whitespace-nowrap shrink-0">{item.date} · {item.time}</span>
//                           </div>
//                           <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">بواسطة: {item.by}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </main>
//       </div>

//       {/* ==================== القائمة الجانبية للموبايل ==================== */}
//       <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
//         <div
//           className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
//           onClick={() => setIsMobileMenuOpen(false)}
//         />
//         <div className={`fixed top-0 right-0 w-[300px] max-w-[85vw] h-full bg-white dark:bg-[#0b1b2d] shadow-2xl z-10 overflow-y-auto select-none transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
//           <button
//             onClick={() => setIsMobileMenuOpen(false)}
//             aria-label="إغلاق القائمة"
//             className="absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-10"
//           >
//             <i className="fa-solid fa-xmark text-lg" />
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
 
// /* ==================== الأيقونات ==================== */
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
 
// const CheckIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
//     <polyline points="20 6 9 17 4 12" />
//   </svg>
// )
 
// const navItems = [
//   { id: 'home', label: 'الرئيسية', Icon: HomeIcon, path: '/dashboard' },
//   { id: 'my-orders', label: 'طلباتي', Icon: FileIcon, path: '/my-orders' },
//   { id: 'new-order', label: 'طلب شراء جديد', Icon: FilePlusIcon, path: '/new-order' },
//   { id: 'suppliers', label: 'الموردين', Icon: TruckIcon, path: '/dashboard' },
// ]
 
// /* ==================== القائمة الجانبية ==================== */
// function SidebarContent({ onNavigate }) {
//   const navigate = useNavigate()
//   return (
//     <div className="min-h-full flex flex-col">
//       <div className="px-4 pt-[clamp(16px,3vh,32px)]">
//         <div className="px-2">
//           <Link to="/dashboard" onClick={onNavigate} className="inline-block">
//             <img src={logo} alt="IBRAM" className="h-[clamp(100px,4.6vh,50px)] w-auto object-contain" />
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
//                 onClick={() => { navigate(path); onNavigate?.() }}
//                 className={`w-full h-[clamp(40px,5.2vh,56px)] flex items-center gap-3 px-5 2xl:px-6 rounded-lg text-[length:clamp(16px,2.04vh,22px)] font-medium text-right cursor-pointer transition-all ${
//                   isActive
//                     ? 'bg-[#00B0F0] text-slate-900 shadow-sm'
//                     : 'bg-[#f5f5f5] dark:bg-[#0f243a] text-slate-900 dark:text-slate-200 hover:bg-[#ececec] dark:hover:bg-[#142e4a]'
//                 }`}
//               >
//                 <Icon className="w-[1em] h-[1em] shrink-0" />
//                 <span>{label}</span>
//               </button>
//             )
//           })}
//         </nav>
//       </div>
//       <div className="mt-auto pt-[clamp(12px,2vh,24px)]">
//         <div className="flex items-center gap-2 px-6 2xl:px-10 py-[clamp(10px,1.5vh,16px)] bg-[#e9f4fb] dark:bg-[#0e2740]">
//           <span className="w-2.5 h-2.5 rounded-full bg-emerald-700 flex-shrink-0 animate-pulse" />
//           <div className="flex flex-col text-right flex-1">
//             <span className="whitespace-nowrap text-[15px] 2xl:text-[17px] font-bold text-slate-900 dark:text-white">النظام متصل وآمن</span>
//             <span className="text-[13px] 2xl:text-sm text-slate-500 dark:text-slate-400">Sovereign Core v4.2</span>
//           </div>
//           <img src={shieldIcon} alt="shield" className="w-5 h-5 object-contain flex-shrink-0" />
//         </div>
//         <div className="flex items-center justify-between py-[clamp(10px,1.85vh,20px)] pr-6 2xl:pr-10 pl-5 2xl:pl-7 mt-[clamp(0px,3vh,32px)] mb-2 cursor-pointer group">
//           <div className="flex items-center gap-4">
//             <img src={userHani} alt="م. هاني وشاح" className="w-10 h-10 rounded-full object-cover" />
//             <div className="text-right">
//               <h4 className="text-[15px] 2xl:text-[17px] font-bold text-slate-900 dark:text-white group-hover:text-sky-600 transition-colors">م. هاني وشاح</h4>
//               <p className="text-[13px] 2xl:text-sm text-slate-500 dark:text-slate-400">الإدارة الطالبة</p>
//             </div>
//           </div>
//           <i className="fa-solid fa-angle-left text-sm text-slate-500 group-hover:text-slate-700 transition-colors" />
//         </div>
//       </div>
//     </div>
//   )
// }
 
// /* ==================== بيانات ثابتة ==================== */
// const steps = [
//   { num: 1, label: 'تقديم الطلب' },
//   { num: 2, label: 'الاعتماد' },
//   { num: 3, label: 'طرح العروض' },
//   { num: 4, label: 'فتح المظاريف' },
//   { num: 5, label: 'المحضر والتوقيع' },
// ]
 
// const infoRows = [
//   { label: 'مقدم الطلب', value: 'م. خالد الزهراني' },
//   { label: 'الإدارة', value: 'كلية الهندسة' },
//   { label: 'التصنيف', value: 'أجهزة حاسوب وتقنية' },
//   { label: 'تاريخ الإنشاء', value: '23 أكتوبر 2026' },
//   { label: 'التاريخ المطلوب', value: '30 أكتوبر 2026' },
//   { label: 'طريقة الشراء', value: 'لم تُحدد بعد' },
//   { label: 'طلب عروض الأسعار', value: 'RFQ-2026-0001' },
//   { label: 'آخر موعد للتقديم', value: '11 أكتوبر 2026 في 2:41 م' },
//   { label: 'موعد فتح المظاريف', value: '12 أكتوبر 2026 في 2:41 م' },
// ]
 
// // جدول الأصناف والخدمات (الأول)
// const orderItems = [
//   { num: 1, name: 'أجهزة حاسوب', qty: 20, unit: 'جهاز', unitPrice: 2500, total: 50000 },
//   { num: 2, name: 'لوحة مفاتيح وفأرة لاسلكية', qty: 25, unit: 'طقم', unitPrice: 5200, total: 40000 },
//   { num: 3, name: 'أجهزة حاسوب', qty: 1, unit: 'جهاز', unitPrice: 500, total: 3000 },
// ]
// const orderTotal = 113000
 
// // جدول مقارنة العروض (الثاني)
// const compareItems = [
//   { name: 'جهاز حاسوب مكتبي', qty: 25, unit: 'جهاز', estimate: 4200, offers: [4050, 4050, 3980] },
//   { name: 'لوحة مفاتيح وفأرة لاسلكية', qty: 25, unit: 'طقم', estimate: 1800, offers: [1850, 1850, 2300] },
//   { name: 'جهاز عرض (بروجكتر)', qty: 1, unit: 'جهاز', estimate: 3500, offers: [4050, 4050, 3500] },
// ]
// const suppliers = [
//   { name: 'شركة الحلول التقنية المتقدمة', envelopes: 1 },
//   { name: 'شركة الحلول التقنية المتقدمة', envelopes: 2 },
//   { name: 'مؤسسة الرواد للتجهيزات المكتبية', envelopes: 3 },
// ]
// const compareTotal = 180000
 
// const logItems = [
//   { date: '12 أكتوبر 2026', time: '2:41 م', action: 'تم فتح المظاريف', by: 'لجنة فتح المظاريف', color: 'bg-[#22c55e]' },
//   { date: '11 أكتوبر 2026', time: '2:41 م', action: 'انتهاء مدة استقبال العروض وإغلاق طلب العروض', by: 'النظام', color: 'bg-[#6366f1]' },
//   { date: '05 أكتوبر 2026', time: '10:00 ص', action: 'إرسال طلب العروض للموردين', by: 'النظام', color: 'bg-[#007DEA]' },
//   { date: '03 أكتوبر 2026', time: '9:15 ص', action: 'اعتماد الطلب من الإدارة العليا', by: 'م. أحمد السيد', color: 'bg-[#22c55e]' },
//   { date: '01 أكتوبر 2026', time: '11:30 ص', action: 'تقديم الطلب للاعتماد', by: 'م. هاني وشاح', color: 'bg-[#007DEA]' },
// ]
 
// const fmt = (n) => n.toLocaleString('en-US')
 
// /* ==================== أنماط مشتركة ==================== */
// const cardCls = 'bg-white dark:bg-[#0b1b2d] rounded-[24px]'
// const sectionTitle = 'text-base font-bold text-slate-900 dark:text-white mb-4'
// const thCls = 'px-4 py-5 text-sm font-medium text-slate-500 dark:text-slate-400 text-center'
// const tdCls = 'px-4 py-9 text-sm text-center text-slate-900 dark:text-slate-100'
 
// /* ==================== الصفحة ==================== */
// export default function EnvelopesOpened() {
//   const navigate = useNavigate()
//   const [activeTab, setActiveTab] = useState('data')
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [searchQuery, setSearchQuery] = useState('')
 
//   const tabs = [
//     { id: 'data', label: 'البيانات' },
//     { id: 'attachments', label: 'المرفقات', count: 1 },
//     { id: 'log', label: 'سجل الإجراءات', count: 1 },
//   ]
 
//   return (
//     <div
//       dir="rtl"
//       className="min-h-screen bg-[#f5f5f5] dark:bg-[#071322] text-slate-800 dark:text-slate-100 flex flex-row transition-colors duration-200"
//       style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
//     >
//       {/* ==================== القائمة الجانبية ==================== */}
//       <aside className="hidden lg:block w-[clamp(240px,18.4vw,353px)] shrink-0 bg-white dark:bg-[#0b1b2d] sticky top-0 h-screen overflow-y-auto select-none z-20 dark:border-l dark:border-slate-800/80">
//         <SidebarContent />
//       </aside>
 
//       {/* ==================== المحتوى الرئيسي ==================== */}
//       <div className="flex-1 flex flex-col min-w-0">
//         {/* الهيدر */}
//         <header className="h-16 bg-white dark:bg-[#0b1b2d] px-4 lg:pl-[88px] lg:pr-6 flex items-center justify-between gap-4 sticky top-0 z-10 dark:border-b dark:border-slate-800/80">
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => setIsMobileMenuOpen(true)}
//               className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
//               aria-label="القائمة"
//             >
//               <i className="fa-solid fa-bars text-lg" />
//             </button>
//             <nav className="flex items-center gap-2 text-[13px] sm:text-[15px] text-slate-500 dark:text-slate-400">
//               <Link to="/dashboard" className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
//                 نظام إدارة المشتريات - الأزهر
//               </Link>
//               <i className="fa-solid fa-angle-left text-[11px] text-slate-400" />
//               <Link
//                 to="/dashboard"
//                 className="font-bold text-slate-900 dark:text-slate-200 hover:text-slate-700 dark:hover:text-white transition-colors"
//               >
//                 لوحة التحكم والمتابعة
//               </Link>
//             </nav>
//           </div>
 
//           <div className="hidden md:flex flex-1 max-w-[345px]">
//             <div className="relative w-full">
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="بحث"
//                 className="w-full h-10 bg-[#f7f7f7] dark:bg-[#0f243a] border border-slate-300 dark:border-slate-700 rounded-full pr-12 pl-4 text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-[#01B0F5]"
//               />
//               <button type="button" aria-label="بحث" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">
//                 <SearchIcon className="w-6 h-6" />
//               </button>
//             </div>
//           </div>
 
//           <div className="flex items-center gap-4">
//             <NotificationMenu />
//             <span className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-slate-700" />
//             <LanguageMenu />
//           </div>
//         </header>
 
//         {/* ==================== محتوى الصفحة ==================== */}
//         <main className="w-full flex-1 px-4 sm:px-6 lg:pl-10 lg:pr-6 pt-10 pb-12 space-y-6 max-w-[1400px]">
//           {/* رجوع */}
//           <button
//             type="button"
//             onClick={() => navigate('/my-orders')}
//             className="flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-slate-200 hover:opacity-70 transition-opacity cursor-pointer"
//           >
//             <i className="fa-solid fa-angle-right text-xs" />
//             <span>رجوع</span>
//           </button>
 
//           {/* ترويسة الطلب (بدون كرت) + أزرار اليسار */}
//           <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
//             <div>
//               <div className="flex items-center gap-3 mb-3 flex-wrap">
//                 <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 bg-[#e5e7eb] dark:bg-slate-800 px-3 py-1 rounded-md">
//                   PR-2026-0001
//                 </span>
//                 <span className="inline-flex items-center gap-1.5 h-6 px-3 rounded-md bg-[#e8f9ef] dark:bg-emerald-950/50 text-[#1fbb5a] text-xs font-semibold">
//                   <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
//                   تم فتح المظاريف
//                 </span>
//               </div>
//               <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
//                 أجهزة حاسوب لمعمل الحاسب الآلي
//               </h1>
//               <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">كلية الهندسة · م. خالد الزهراني</p>
//             </div>
 
//             <div className="flex items-center gap-4 w-full lg:w-auto">
//               <button
//                 type="button"
//                 className="flex-1 lg:flex-none lg:w-[270px] h-12 rounded-full border border-[#828282] dark:border-slate-600 text-sm font-medium text-[#000000] dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 transition-all cursor-pointer"
//               >
//                 طلب العروض
//               </button>
//               <button
//                 type="button"
//                 className="flex-1 lg:flex-none lg:w-[270px] h-12 rounded-full border border-[#828282] dark:border-slate-600 text-sm font-medium text-[#000000] dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 transition-all cursor-pointer"
//               >
//                 المحضر
//               </button>
//             </div>
//           </div>
 
//           {/* ثلاثة كروت: أين الطلب الآن / بانتظار / الخطوة التالية */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-white dark:bg-[#0b1b2d] rounded-2xl px-5 py-4 flex items-center gap-3">
//               <i className="fa-solid fa-location-dot text-lg text-[#000000] dark:text-white shrink-0" />
//               <div className="text-right">
//                 <p className="text-base font-bold text-slate-900 dark:text-white">أين الطلب الآن</p>
//                 <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-0.5">اكتملت المرحلة الأولى</p>
//               </div>
//             </div>
 
//             <div className="bg-white dark:bg-[#0b1b2d] rounded-2xl px-5 py-4 flex items-center gap-3">
//               <i className="fa-solid fa-circle-user text-xl text-[#000000] dark:text-white shrink-0" />
//               <div className="text-right">
//                 <p className="text-base font-bold text-slate-900 dark:text-white">بانتظار</p>
//                 <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-0.5">لا أحد</p>
//               </div>
//             </div>
 
//             <div className="bg-white dark:bg-[#0b1b2d] rounded-2xl px-5 py-4 flex items-center gap-3">
//               <i className="fa-solid fa-circle-arrow-left text-xl text-[#000000] dark:text-white shrink-0" />
//               <div className="text-right">
//                 <p className="text-base font-bold text-slate-900 dark:text-white">الخطوة التالية</p>
//                 <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-0.5">جاهز للمرحلة التالية (اللجنة الفنية)</p>
//               </div>
//             </div>
//           </div>
 
//           {/* شريط: الطلب معتمد ومقفل */}
//           <div className="bg-white dark:bg-[#0b1b2d] rounded-2xl border border-[#828282]/70 dark:border-slate-600 px-6 py-5 flex items-center justify-between flex-wrap gap-4">
//             <div className="flex items-center gap-4">
//               <i className="fa-solid fa-lock text-lg text-[#000000] dark:text-white shrink-0" />
//               <div className="text-right">
//                 <p className="text-base font-bold text-slate-900 dark:text-white">الطلب معتمد ومقفل للتعديل</p>
//                 <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-1">
//                   لا يمكن تغيير بيانات الطلب بعد اعتماده. أي تعديل يتم عبر طلب تعديل رسمي يُرفع للإدارة العليا ويُوثّق في السجل.
//                 </p>
//               </div>
//             </div>
//             <button
//               type="button"
//               className="h-8 w-[195px] max-w-full rounded-full border border-[#007DEA] text-[#007DEA] text-xs font-medium hover:bg-[#e4f4fd] dark:hover:bg-[#0f2c45] transition-all cursor-pointer"
//             >
//               طلب تعديل رسمي
//             </button>
//           </div>
 
//           {/* مراحل الطلب */}
//           <div className={`${cardCls} p-6`}>
//             <h2 className="text-base font-bold text-slate-900 dark:text-white pb-4 mb-5 border-b border-slate-200 dark:border-slate-800">
//               مراحل الطلب
//             </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
//               {steps.map((step) => (
//                 <div
//                   key={step.num}
//                   className="rounded-[20px] border border-[#2EC48A] bg-[#EBFDF5] dark:bg-emerald-950/30 dark:border-emerald-700 px-4 py-4 flex items-center gap-3"
//                 >
//                   <div className="w-10 h-10 rounded-xl bg-[#0B4A32] text-white flex items-center justify-center shrink-0">
//                     <CheckIcon className="w-5 h-5" />
//                   </div>
//                   <div className="text-right">
//                     <p className="text-xs font-semibold text-[#0B4A32] dark:text-emerald-300">الخطوة {step.num}</p>
//                     <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">{step.label}</p>
//                     <p className="text-[11px] text-slate-400 mt-0.5">مكتملة</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
 
//           {/* التبويبات + المحتوى */}
//           <div className={`${cardCls} px-6 pt-4 pb-8`}>
//             {/* شريط التبويبات */}
//             <div className="flex items-center gap-8 flex-wrap">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab.id}
//                   type="button"
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`relative flex items-center gap-2 py-3 text-base font-medium transition-colors cursor-pointer ${
//                     activeTab === tab.id
//                       ? 'text-[#007DEA] dark:text-[#01B0F5]'
//                       : 'text-slate-900 dark:text-slate-200 hover:text-[#007DEA]'
//                   }`}
//                 >
//                   <span>{tab.label}</span>
//                   {tab.count && (
//                     <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#d9d9d9] dark:bg-slate-700 text-slate-800 dark:text-slate-100 text-xs font-medium">
//                       {tab.count}
//                     </span>
//                   )}
//                   {activeTab === tab.id && (
//                     <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#007DEA] dark:bg-[#01B0F5]" />
//                   )}
//                 </button>
//               ))}
//             </div>
 
//             {/* ==================== تبويب البيانات ==================== */}
//             {activeTab === 'data' && (
//               <div className="pt-8 space-y-10">
//                 <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(320px,36%)] gap-6 items-start">
//                   {/* اليمين: المبرر + جدول الأصناف */}
//                   <div className="space-y-8 px-1">
//                     <div>
//                       <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">المبرر</h3>
//                       <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
//                         تحديث أجهزة معمل الحاسب (قاعة 214) التي تجاوز عمرها سبع سنوات ولم تعد تدعم البرامج الهندسية المقررة في الخطة الدراسية.
//                       </p>
//                     </div>
 
//                     <div>
//                       <h3 className={sectionTitle}>الأصناف والخدمات</h3>
//                       <div className="overflow-x-auto rounded-[20px] border border-slate-200 dark:border-slate-700/80">
//                         <table className="w-full text-sm">
//                           <thead>
//                             <tr className="bg-[#E8F4FD] dark:bg-[#0c2438]">
//                               <th className={`${thCls} w-14`}>#</th>
//                               <th className={thCls}>الصنف/الخدمة/المواصفات</th>
//                               <th className={thCls}>الكمية</th>
//                               <th className={thCls}>سعر الوحدة التقديري</th>
//                               <th className={thCls}>الإجمالي التقديري</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {orderItems.map((item) => (
//                               <tr key={item.num} className="border-b border-slate-200 dark:border-slate-700/60">
//                                 <td className={`${tdCls} font-bold`}>{item.num}</td>
//                                 <td className={tdCls}>{item.name}</td>
//                                 <td className={tdCls}>{item.qty} {item.unit}</td>
//                                 <td className={tdCls}>{fmt(item.unitPrice)} ش</td>
//                                 <td className={tdCls}>{fmt(item.total)} ش</td>
//                               </tr>
//                             ))}
//                           </tbody>
//                           <tfoot>
//                             <tr>
//                               <td colSpan={5} className="bg-[#E8F4FD] dark:bg-[#0c2438] px-6 py-3">
//                                 <div className="flex items-center justify-between text-sm">
//                                   <span className="font-medium text-slate-600 dark:text-slate-300">إجمالي التكلفة التقديرية</span>
//                                   <span className="font-bold text-[#000000] dark:text-white">{fmt(orderTotal)} ش</span>
//                                 </div>
//                               </td>
//                             </tr>
//                           </tfoot>
//                         </table>
//                       </div>
//                     </div>
//                   </div>
 
//                   {/* اليسار: بطاقة المعلومات */}
//                   <div className="bg-[#E8F4FD] dark:bg-[#0c2438] rounded-[24px] px-6 py-3 lg:mt-8">
//                     {infoRows.map(({ label, value }, idx) => (
//                       <div
//                         key={label}
//                         className={`flex items-center justify-between gap-4 py-3.5 text-sm ${
//                           idx !== infoRows.length - 1 ? 'border-b border-slate-300/60 dark:border-slate-600/60' : ''
//                         }`}
//                       >
//                         <span className="text-slate-600 dark:text-slate-400">{label}</span>
//                         <span className="font-medium text-slate-900 dark:text-white">{value}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
 
//                 {/* جدول مقارنة العروض */}
//                 <div className="px-1">
//                   <h3 className={sectionTitle}>الأصناف والخدمات</h3>
//                   <div className="overflow-x-auto rounded-[20px] border border-slate-200 dark:border-slate-700/80">
//                     <table className="w-full text-sm">
//                       <thead>
//                         <tr className="bg-[#E8F4FD] dark:bg-[#0c2438]">
//                           <th className={thCls}>الصنف</th>
//                           <th className={thCls}>الكمية</th>
//                           <th className={thCls}>التقديري للوحدة</th>
//                           {suppliers.map((s, i) => (
//                             <th key={i} className="px-4 py-4 text-center text-slate-500 dark:text-slate-400">
//                               <span className="block text-sm font-medium">{s.name}</span>
//                               <span className="block text-[11px] font-normal mt-0.5">{s.envelopes} مظروف</span>
//                             </th>
//                           ))}
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {compareItems.map((item) => (
//                           <tr key={item.name} className="border-b border-slate-200 dark:border-slate-700/60">
//                             <td className={`${tdCls} font-medium`}>{item.name}</td>
//                             <td className={tdCls}>{item.qty} {item.unit}</td>
//                             <td className={tdCls}>{fmt(item.estimate)} ش</td>
//                             {item.offers.map((price, i) => (
//                               <td key={i} className={tdCls}>{fmt(price)} ش</td>
//                             ))}
//                           </tr>
//                         ))}
//                       </tbody>
//                       <tfoot>
//                         <tr>
//                           <td colSpan={3 + suppliers.length} className="bg-[#E8F4FD] dark:bg-[#0c2438] px-6 py-3">
//                             <div className="flex items-center justify-between text-sm">
//                               <span className="font-medium text-slate-600 dark:text-slate-300">إجمالي التكلفة التقديرية</span>
//                               <span className="font-bold text-[#000000] dark:text-white">{fmt(compareTotal)} ش</span>
//                             </div>
//                           </td>
//                         </tr>
//                       </tfoot>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//             )}
 
//             {/* ==================== تبويب المرفقات ==================== */}
//             {activeTab === 'attachments' && (
//               <div className="pt-8">
//                 <div className="flex items-center justify-between p-4 bg-[#f5f5f5] dark:bg-[#0c1f33] rounded-2xl border border-slate-200 dark:border-slate-700">
//                   <div className="flex items-center gap-3">
//                     <div className="w-10 h-10 rounded-xl bg-[#E8F4FD] dark:bg-[#0d2d4a] flex items-center justify-center">
//                       <i className="fa-regular fa-file-pdf text-[#007DEA] text-lg" />
//                     </div>
//                     <div className="text-right">
//                       <p className="text-sm font-bold text-slate-900 dark:text-white">مواصفات_المعمل.pdf</p>
//                       <p className="text-xs text-slate-500 dark:text-slate-400">1.2 م.ب</p>
//                     </div>
//                   </div>
//                   <button type="button" className="text-[#007DEA] hover:text-[#005bb5] text-sm font-semibold transition-colors cursor-pointer">
//                     تحميل
//                   </button>
//                 </div>
//               </div>
//             )}
 
//             {/* ==================== تبويب سجل الإجراءات ==================== */}
//             {activeTab === 'log' && (
//               <div className="pt-8">
//                 <div className="relative">
//                   <div className="absolute right-4 top-2 bottom-2 w-0.5 bg-slate-200 dark:bg-slate-700" />
//                   <div className="space-y-5 pr-12">
//                     {logItems.map((item, idx) => (
//                       <div key={idx} className="relative">
//                         <div className={`absolute -right-[38px] w-4 h-4 rounded-full ${item.color} border-2 border-white dark:border-[#0b1b2d] top-1.5`} />
//                         <div className="bg-[#f5f5f5] dark:bg-[#0c1f33] rounded-2xl p-4">
//                           <div className="flex items-start justify-between gap-2">
//                             <p className="text-sm font-bold text-slate-900 dark:text-white">{item.action}</p>
//                             <span className="text-xs text-slate-400 whitespace-nowrap shrink-0">{item.date} · {item.time}</span>
//                           </div>
//                           <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">بواسطة: {item.by}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </main>
//       </div>
 
//       {/* ==================== القائمة الجانبية للموبايل ==================== */}
//       <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
//         <div
//           className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
//           onClick={() => setIsMobileMenuOpen(false)}
//         />
//         <div className={`fixed top-0 right-0 w-[300px] max-w-[85vw] h-full bg-white dark:bg-[#0b1b2d] shadow-2xl z-10 overflow-y-auto select-none transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
//           <button
//             onClick={() => setIsMobileMenuOpen(false)}
//             aria-label="إغلاق القائمة"
//             className="absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-10"
//           >
//             <i className="fa-solid fa-xmark text-lg" />
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
 
// /* ==================== الأيقونات ==================== */
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
 
// const CheckIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
//     <polyline points="20 6 9 17 4 12" />
//   </svg>
// )
 
// const DownloadIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
//     <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
//     <polyline points="7 10 12 15 17 10" />
//     <line x1="12" y1="15" x2="12" y2="3" />
//   </svg>
// )
 
// const navItems = [
//   { id: 'home', label: 'الرئيسية', Icon: HomeIcon, path: '/dashboard' },
//   { id: 'my-orders', label: 'طلباتي', Icon: FileIcon, path: '/my-orders' },
//   { id: 'new-order', label: 'طلب شراء جديد', Icon: FilePlusIcon, path: '/new-order' },
//   { id: 'suppliers', label: 'الموردين', Icon: TruckIcon, path: '/dashboard' },
// ]
 
// /* ==================== القائمة الجانبية ==================== */
// function SidebarContent({ onNavigate }) {
//   const navigate = useNavigate()
//   return (
//     <div className="min-h-full flex flex-col">
//       <div className="px-4 pt-[clamp(16px,3vh,32px)]">
//         <div className="px-2">
//           <Link to="/dashboard" onClick={onNavigate} className="inline-block">
//             <img src={logo} alt="IBRAM" className="h-[clamp(100px,4.6vh,50px)] w-auto object-contain" />
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
//                 onClick={() => { navigate(path); onNavigate?.() }}
//                 className={`w-full h-[clamp(40px,5.2vh,56px)] flex items-center gap-3 px-5 2xl:px-6 rounded-lg text-[length:clamp(16px,2.04vh,22px)] font-medium text-right cursor-pointer transition-all ${
//                   isActive
//                     ? 'bg-[#00B0F0] text-slate-900 shadow-sm'
//                     : 'bg-[#f5f5f5] dark:bg-[#0f243a] text-slate-900 dark:text-slate-200 hover:bg-[#ececec] dark:hover:bg-[#142e4a]'
//                 }`}
//               >
//                 <Icon className="w-[1em] h-[1em] shrink-0" />
//                 <span>{label}</span>
//               </button>
//             )
//           })}
//         </nav>
//       </div>
//       <div className="mt-auto pt-[clamp(12px,2vh,24px)]">
//         <div className="flex items-center gap-2 px-6 2xl:px-10 py-[clamp(10px,1.5vh,16px)] bg-[#e9f4fb] dark:bg-[#0e2740]">
//           <span className="w-2.5 h-2.5 rounded-full bg-emerald-700 flex-shrink-0 animate-pulse" />
//           <div className="flex flex-col text-right flex-1">
//             <span className="whitespace-nowrap text-[15px] 2xl:text-[17px] font-bold text-slate-900 dark:text-white">النظام متصل وآمن</span>
//             <span className="text-[13px] 2xl:text-sm text-slate-500 dark:text-slate-400">Sovereign Core v4.2</span>
//           </div>
//           <img src={shieldIcon} alt="shield" className="w-5 h-5 object-contain flex-shrink-0" />
//         </div>
//         <div className="flex items-center justify-between py-[clamp(10px,1.85vh,20px)] pr-6 2xl:pr-10 pl-5 2xl:pl-7 mt-[clamp(0px,3vh,32px)] mb-2 cursor-pointer group">
//           <div className="flex items-center gap-4">
//             <img src={userHani} alt="م. هاني وشاح" className="w-10 h-10 rounded-full object-cover" />
//             <div className="text-right">
//               <h4 className="text-[15px] 2xl:text-[17px] font-bold text-slate-900 dark:text-white group-hover:text-sky-600 transition-colors">م. هاني وشاح</h4>
//               <p className="text-[13px] 2xl:text-sm text-slate-500 dark:text-slate-400">الإدارة الطالبة</p>
//             </div>
//           </div>
//           <i className="fa-solid fa-angle-left text-sm text-slate-500 group-hover:text-slate-700 transition-colors" />
//         </div>
//       </div>
//     </div>
//   )
// }
 
// /* ==================== بيانات ثابتة ==================== */
// const steps = [
//   { num: 1, label: 'تقديم الطلب' },
//   { num: 2, label: 'الاعتماد' },
//   { num: 3, label: 'طرح العروض' },
//   { num: 4, label: 'فتح المظاريف' },
//   { num: 5, label: 'المحضر والتوقيع' },
// ]
 
// const infoRows = [
//   { label: 'مقدم الطلب', value: 'م. خالد الزهراني' },
//   { label: 'الإدارة', value: 'كلية الهندسة' },
//   { label: 'التصنيف', value: 'أجهزة حاسوب وتقنية' },
//   { label: 'تاريخ الإنشاء', value: '23 أكتوبر 2026' },
//   { label: 'التاريخ المطلوب', value: '30 أكتوبر 2026' },
//   { label: 'طريقة الشراء', value: 'لم تُحدد بعد' },
//   { label: 'طلب عروض الأسعار', value: 'RFQ-2026-0001' },
//   { label: 'آخر موعد للتقديم', value: '11 أكتوبر 2026 في 2:41 م' },
//   { label: 'موعد فتح المظاريف', value: '12 أكتوبر 2026 في 2:41 م' },
// ]
 
// // جدول الأصناف والخدمات (الأول)
// const orderItems = [
//   { num: 1, name: 'أجهزة حاسوب', qty: 20, unit: 'جهاز', unitPrice: 2500, total: 50000 },
//   { num: 2, name: 'لوحة مفاتيح وفأرة لاسلكية', qty: 25, unit: 'طقم', unitPrice: 5200, total: 40000 },
//   { num: 3, name: 'أجهزة حاسوب', qty: 1, unit: 'جهاز', unitPrice: 500, total: 3000 },
// ]
// const orderTotal = 113000
 
// // جدول مقارنة العروض (الثاني)
// const compareItems = [
//   { name: 'جهاز حاسوب مكتبي', qty: 25, unit: 'جهاز', estimate: 4200, offers: [4050, 4050, 3980] },
//   { name: 'لوحة مفاتيح وفأرة لاسلكية', qty: 25, unit: 'طقم', estimate: 1800, offers: [1850, 1850, 2300] },
//   { name: 'جهاز عرض (بروجكتر)', qty: 1, unit: 'جهاز', estimate: 3500, offers: [4050, 4050, 3500] },
// ]
// const suppliers = [
//   { name: 'شركة الحلول التقنية المتقدمة', envelopes: 1 },
//   { name: 'شركة الحلول التقنية المتقدمة', envelopes: 2 },
//   { name: 'مؤسسة الرواد للتجهيزات المكتبية', envelopes: 3 },
// ]
// const compareTotal = 180000
 
// const logItems = [
//   { date: '12 أكتوبر 2026', time: '2:41 م', action: 'تم فتح المظاريف', by: 'لجنة فتح المظاريف', color: 'bg-[#22c55e]' },
//   { date: '11 أكتوبر 2026', time: '2:41 م', action: 'انتهاء مدة استقبال العروض وإغلاق طلب العروض', by: 'النظام', color: 'bg-[#6366f1]' },
//   { date: '05 أكتوبر 2026', time: '10:00 ص', action: 'إرسال طلب العروض للموردين', by: 'النظام', color: 'bg-[#007DEA]' },
//   { date: '03 أكتوبر 2026', time: '9:15 ص', action: 'اعتماد الطلب من الإدارة العليا', by: 'م. أحمد السيد', color: 'bg-[#22c55e]' },
//   { date: '01 أكتوبر 2026', time: '11:30 ص', action: 'تقديم الطلب للاعتماد', by: 'م. هاني وشاح', color: 'bg-[#007DEA]' },
// ]
 
// // المرفقات (غيّر قيمة url إلى رابط الملف الحقيقي ليشتغل التحميل)
// const attachments = [
//   { id: 1, name: 'مواصفات_أجهزة_المعمل.pdf', size: '1.2 م.ب', by: 'م. خالد الزهراني', date: '25 سبتمبر 2026', url: '/files/مواصفات_أجهزة_المعمل.pdf' },
//   { id: 2, name: 'صور_الأجهزة_الحالية.zip', size: '5.2 م.ب', by: 'م. خالد الزهراني', date: '25 سبتمبر 2026', url: '/files/صور_الأجهزة_الحالية.zip' },
// ]
 
// const fmt = (n) => n.toLocaleString('en-US')
 
// /* ==================== أنماط مشتركة ==================== */
// const cardCls = 'bg-white dark:bg-[#0b1b2d] rounded-[24px]'
// const sectionTitle = 'text-base font-bold text-slate-900 dark:text-white mb-4'
// const thCls = 'px-4 py-5 text-sm font-medium text-slate-500 dark:text-slate-400 text-center'
// const tdCls = 'px-4 py-9 text-sm text-center text-slate-900 dark:text-slate-100'
 
// /* ==================== الصفحة ==================== */
// export default function EnvelopesOpened() {
//   const navigate = useNavigate()
//   const [activeTab, setActiveTab] = useState('data')
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [searchQuery, setSearchQuery] = useState('')
 
//   const tabs = [
//     { id: 'data', label: 'البيانات' },
//     { id: 'attachments', label: 'المرفقات', count: attachments.length },
//     { id: 'log', label: 'سجل الإجراءات', count: 1 },
//   ]
 
//   return (
//     <div
//       dir="rtl"
//       className="min-h-screen bg-[#f5f5f5] dark:bg-[#071322] text-slate-800 dark:text-slate-100 flex flex-row transition-colors duration-200"
//       style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
//     >
//       {/* ==================== القائمة الجانبية ==================== */}
//       <aside className="hidden lg:block w-[clamp(240px,18.4vw,353px)] shrink-0 bg-white dark:bg-[#0b1b2d] sticky top-0 h-screen overflow-y-auto select-none z-20 dark:border-l dark:border-slate-800/80">
//         <SidebarContent />
//       </aside>
 
//       {/* ==================== المحتوى الرئيسي ==================== */}
//       <div className="flex-1 flex flex-col min-w-0">
//         {/* الهيدر */}
//         <header className="h-16 bg-white dark:bg-[#0b1b2d] px-4 lg:pl-[88px] lg:pr-6 flex items-center justify-between gap-4 sticky top-0 z-10 dark:border-b dark:border-slate-800/80">
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => setIsMobileMenuOpen(true)}
//               className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
//               aria-label="القائمة"
//             >
//               <i className="fa-solid fa-bars text-lg" />
//             </button>
//             <nav className="flex items-center gap-2 text-[13px] sm:text-[15px] text-slate-500 dark:text-slate-400">
//               <Link to="/dashboard" className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
//                 نظام إدارة المشتريات - الأزهر
//               </Link>
//               <i className="fa-solid fa-angle-left text-[11px] text-slate-400" />
//               <Link
//                 to="/dashboard"
//                 className="font-bold text-slate-900 dark:text-slate-200 hover:text-slate-700 dark:hover:text-white transition-colors"
//               >
//                 لوحة التحكم والمتابعة
//               </Link>
//             </nav>
//           </div>
 
//           <div className="hidden md:flex flex-1 max-w-[345px]">
//             <div className="relative w-full">
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="بحث"
//                 className="w-full h-10 bg-[#f7f7f7] dark:bg-[#0f243a] border border-slate-300 dark:border-slate-700 rounded-full pr-12 pl-4 text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-[#01B0F5]"
//               />
//               <button type="button" aria-label="بحث" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">
//                 <SearchIcon className="w-6 h-6" />
//               </button>
//             </div>
//           </div>
 
//           <div className="flex items-center gap-4">
//             <NotificationMenu />
//             <span className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-slate-700" />
//             <LanguageMenu />
//           </div>
//         </header>
 
//         {/* ==================== محتوى الصفحة ==================== */}
//         <main className="w-full flex-1 px-4 sm:px-6 lg:pl-10 lg:pr-6 pt-10 pb-12 space-y-6 max-w-[1400px]">
//           {/* رجوع */}
//           <button
//             type="button"
//             onClick={() => navigate('/my-orders')}
//             className="flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-slate-200 hover:opacity-70 transition-opacity cursor-pointer"
//           >
//             <i className="fa-solid fa-angle-right text-xs" />
//             <span>رجوع</span>
//           </button>
 
//           {/* ترويسة الطلب (بدون كرت) + أزرار اليسار */}
//           <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
//             <div>
//               <div className="flex items-center gap-3 mb-3 flex-wrap">
//                 <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 bg-[#e5e7eb] dark:bg-slate-800 px-3 py-1 rounded-md">
//                   PR-2026-0001
//                 </span>
//                 <span className="inline-flex items-center gap-1.5 h-6 px-3 rounded-md bg-[#e8f9ef] dark:bg-emerald-950/50 text-[#1fbb5a] text-xs font-semibold">
//                   <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
//                   تم فتح المظاريف
//                 </span>
//               </div>
//               <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
//                 أجهزة حاسوب لمعمل الحاسب الآلي
//               </h1>
//               <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">كلية الهندسة · م. خالد الزهراني</p>
//             </div>
 
//             <div className="flex items-center gap-4 w-full lg:w-auto">
//               <button
//                 type="button"
//                 className="flex-1 lg:flex-none lg:w-[270px] h-12 rounded-full border border-[#828282] dark:border-slate-600 text-sm font-medium text-[#000000] dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 transition-all cursor-pointer"
//               >
//                 طلب العروض
//               </button>
//               <button
//                 type="button"
//                 className="flex-1 lg:flex-none lg:w-[270px] h-12 rounded-full border border-[#828282] dark:border-slate-600 text-sm font-medium text-[#000000] dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 transition-all cursor-pointer"
//               >
//                 المحضر
//               </button>
//             </div>
//           </div>
 
//           {/* ثلاثة كروت: أين الطلب الآن / بانتظار / الخطوة التالية */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-white dark:bg-[#0b1b2d] rounded-2xl px-5 py-4 flex items-center gap-3">
//               <i className="fa-solid fa-location-dot text-lg text-[#000000] dark:text-white shrink-0" />
//               <div className="text-right">
//                 <p className="text-base font-bold text-slate-900 dark:text-white">أين الطلب الآن</p>
//                 <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-0.5">اكتملت المرحلة الأولى</p>
//               </div>
//             </div>
 
//             <div className="bg-white dark:bg-[#0b1b2d] rounded-2xl px-5 py-4 flex items-center gap-3">
//               <i className="fa-solid fa-circle-user text-xl text-[#000000] dark:text-white shrink-0" />
//               <div className="text-right">
//                 <p className="text-base font-bold text-slate-900 dark:text-white">بانتظار</p>
//                 <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-0.5">لا أحد</p>
//               </div>
//             </div>
 
//             <div className="bg-white dark:bg-[#0b1b2d] rounded-2xl px-5 py-4 flex items-center gap-3">
//               <i className="fa-solid fa-circle-arrow-left text-xl text-[#000000] dark:text-white shrink-0" />
//               <div className="text-right">
//                 <p className="text-base font-bold text-slate-900 dark:text-white">الخطوة التالية</p>
//                 <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-0.5">جاهز للمرحلة التالية (اللجنة الفنية)</p>
//               </div>
//             </div>
//           </div>
 
//           {/* شريط: الطلب معتمد ومقفل */}
//           <div className="bg-white dark:bg-[#0b1b2d] rounded-2xl border border-[#828282]/70 dark:border-slate-600 px-6 py-5 flex items-center justify-between flex-wrap gap-4">
//             <div className="flex items-center gap-4">
//               <i className="fa-solid fa-lock text-lg text-[#000000] dark:text-white shrink-0" />
//               <div className="text-right">
//                 <p className="text-base font-bold text-slate-900 dark:text-white">الطلب معتمد ومقفل للتعديل</p>
//                 <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-1">
//                   لا يمكن تغيير بيانات الطلب بعد اعتماده. أي تعديل يتم عبر طلب تعديل رسمي يُرفع للإدارة العليا ويُوثّق في السجل.
//                 </p>
//               </div>
//             </div>
//             <button
//               type="button"
//               className="h-8 w-[195px] max-w-full rounded-full border border-[#007DEA] text-[#007DEA] text-xs font-medium hover:bg-[#e4f4fd] dark:hover:bg-[#0f2c45] transition-all cursor-pointer"
//             >
//               طلب تعديل رسمي
//             </button>
//           </div>
 
//           {/* مراحل الطلب */}
//           <div className={`${cardCls} p-6`}>
//             <h2 className="text-base font-bold text-slate-900 dark:text-white pb-4 mb-5 border-b border-slate-200 dark:border-slate-800">
//               مراحل الطلب
//             </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
//               {steps.map((step) => (
//                 <div
//                   key={step.num}
//                   className="rounded-[20px] border border-[#2EC48A] bg-[#EBFDF5] dark:bg-emerald-950/30 dark:border-emerald-700 px-4 py-4 flex items-center gap-3"
//                 >
//                   <div className="w-10 h-10 rounded-xl bg-[#0B4A32] text-white flex items-center justify-center shrink-0">
//                     <CheckIcon className="w-5 h-5" />
//                   </div>
//                   <div className="text-right">
//                     <p className="text-xs font-semibold text-[#0B4A32] dark:text-emerald-300">الخطوة {step.num}</p>
//                     <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">{step.label}</p>
//                     <p className="text-[11px] text-slate-400 mt-0.5">مكتملة</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
 
//           {/* التبويبات + المحتوى */}
//           <div className={`${cardCls} px-6 pt-4 pb-8`}>
//             {/* شريط التبويبات */}
//             <div className="flex items-center gap-8 flex-wrap">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab.id}
//                   type="button"
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`relative flex items-center gap-2 py-3 text-base font-medium transition-colors cursor-pointer ${
//                     activeTab === tab.id
//                       ? 'text-[#007DEA] dark:text-[#01B0F5]'
//                       : 'text-slate-900 dark:text-slate-200 hover:text-[#007DEA]'
//                   }`}
//                 >
//                   <span>{tab.label}</span>
//                   {tab.count && (
//                     <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#d9d9d9] dark:bg-slate-700 text-slate-800 dark:text-slate-100 text-xs font-medium">
//                       {tab.count}
//                     </span>
//                   )}
//                   {activeTab === tab.id && (
//                     <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#007DEA] dark:bg-[#01B0F5]" />
//                   )}
//                 </button>
//               ))}
//             </div>
 
//             {/* ==================== تبويب البيانات ==================== */}
//             {activeTab === 'data' && (
//               <div className="pt-8 space-y-10">
//                 <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(320px,36%)] gap-6 items-start">
//                   {/* اليمين: المبرر + جدول الأصناف */}
//                   <div className="space-y-8 px-1">
//                     <div>
//                       <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">المبرر</h3>
//                       <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
//                         تحديث أجهزة معمل الحاسب (قاعة 214) التي تجاوز عمرها سبع سنوات ولم تعد تدعم البرامج الهندسية المقررة في الخطة الدراسية.
//                       </p>
//                     </div>
 
//                     <div>
//                       <h3 className={sectionTitle}>الأصناف والخدمات</h3>
//                       <div className="overflow-x-auto rounded-[20px] border border-slate-200 dark:border-slate-700/80">
//                         <table className="w-full text-sm">
//                           <thead>
//                             <tr className="bg-[#E8F4FD] dark:bg-[#0c2438]">
//                               <th className={`${thCls} w-14`}>#</th>
//                               <th className={thCls}>الصنف/الخدمة/المواصفات</th>
//                               <th className={thCls}>الكمية</th>
//                               <th className={thCls}>سعر الوحدة التقديري</th>
//                               <th className={thCls}>الإجمالي التقديري</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {orderItems.map((item) => (
//                               <tr key={item.num} className="border-b border-slate-200 dark:border-slate-700/60">
//                                 <td className={`${tdCls} font-bold`}>{item.num}</td>
//                                 <td className={tdCls}>{item.name}</td>
//                                 <td className={tdCls}>{item.qty} {item.unit}</td>
//                                 <td className={tdCls}>{fmt(item.unitPrice)} ش</td>
//                                 <td className={tdCls}>{fmt(item.total)} ش</td>
//                               </tr>
//                             ))}
//                           </tbody>
//                           <tfoot>
//                             <tr>
//                               <td colSpan={5} className="bg-[#E8F4FD] dark:bg-[#0c2438] px-6 py-3">
//                                 <div className="flex items-center justify-between text-sm">
//                                   <span className="font-medium text-slate-600 dark:text-slate-300">إجمالي التكلفة التقديرية</span>
//                                   <span className="font-bold text-[#000000] dark:text-white">{fmt(orderTotal)} ش</span>
//                                 </div>
//                               </td>
//                             </tr>
//                           </tfoot>
//                         </table>
//                       </div>
//                     </div>
//                   </div>
 
//                   {/* اليسار: بطاقة المعلومات */}
//                   <div className="bg-[#E8F4FD] dark:bg-[#0c2438] rounded-[24px] px-6 py-3 lg:mt-8">
//                     {infoRows.map(({ label, value }, idx) => (
//                       <div
//                         key={label}
//                         className={`flex items-center justify-between gap-4 py-3.5 text-sm ${
//                           idx !== infoRows.length - 1 ? 'border-b border-slate-300/60 dark:border-slate-600/60' : ''
//                         }`}
//                       >
//                         <span className="text-slate-600 dark:text-slate-400">{label}</span>
//                         <span className="font-medium text-slate-900 dark:text-white">{value}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
 
//                 {/* جدول مقارنة العروض */}
//                 <div className="px-1">
//                   <h3 className={sectionTitle}>الأصناف والخدمات</h3>
//                   <div className="overflow-x-auto rounded-[20px] border border-slate-200 dark:border-slate-700/80">
//                     <table className="w-full text-sm">
//                       <thead>
//                         <tr className="bg-[#E8F4FD] dark:bg-[#0c2438]">
//                           <th className={thCls}>الصنف</th>
//                           <th className={thCls}>الكمية</th>
//                           <th className={thCls}>التقديري للوحدة</th>
//                           {suppliers.map((s, i) => (
//                             <th key={i} className="px-4 py-4 text-center text-slate-500 dark:text-slate-400">
//                               <span className="block text-sm font-medium">{s.name}</span>
//                               <span className="block text-[11px] font-normal mt-0.5">{s.envelopes} مظروف</span>
//                             </th>
//                           ))}
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {compareItems.map((item) => (
//                           <tr key={item.name} className="border-b border-slate-200 dark:border-slate-700/60">
//                             <td className={`${tdCls} font-medium`}>{item.name}</td>
//                             <td className={tdCls}>{item.qty} {item.unit}</td>
//                             <td className={tdCls}>{fmt(item.estimate)} ش</td>
//                             {item.offers.map((price, i) => (
//                               <td key={i} className={tdCls}>{fmt(price)} ش</td>
//                             ))}
//                           </tr>
//                         ))}
//                       </tbody>
//                       <tfoot>
//                         <tr>
//                           <td colSpan={3 + suppliers.length} className="bg-[#E8F4FD] dark:bg-[#0c2438] px-6 py-3">
//                             <div className="flex items-center justify-between text-sm">
//                               <span className="font-medium text-slate-600 dark:text-slate-300">إجمالي التكلفة التقديرية</span>
//                               <span className="font-bold text-[#000000] dark:text-white">{fmt(compareTotal)} ش</span>
//                             </div>
//                           </td>
//                         </tr>
//                       </tfoot>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//             )}
 
//             {/* ==================== تبويب المرفقات ==================== */}
//             {activeTab === 'attachments' && (
//               <div className="pt-6 space-y-4">
//                 {attachments.map((file) => (
//                   <div
//                     key={file.id}
//                     className="flex items-center justify-between gap-4 px-4 py-2.5 bg-[#E8F4FD] dark:bg-[#0c2438] rounded-xl border border-[#d3e8f8] dark:border-slate-700"
//                   >
//                     <div className="flex items-center gap-3 min-w-0">
//                       <i className="fa-solid fa-file text-[#007DEA] text-lg shrink-0" />
//                       <div className="text-right min-w-0">
//                         <p className="text-xs font-bold text-slate-900 dark:text-white truncate">{file.name}</p>
//                         <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
//                           {file.size} · أرفقه {file.by} · {file.date}
//                         </p>
//                       </div>
//                     </div>
//                     <a
//                       href={file.url}
//                       download={file.name}
//                       aria-label={`تحميل ${file.name}`}
//                       title="تحميل"
//                       className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-[#007DEA] hover:bg-white/70 dark:hover:bg-slate-700 transition-colors cursor-pointer shrink-0"
//                     >
//                       <DownloadIcon className="w-[18px] h-[18px]" />
//                     </a>
//                   </div>
//                 ))}
//               </div>
//             )}
 
//             {/* ==================== تبويب سجل الإجراءات ==================== */}
//             {activeTab === 'log' && (
//               <div className="pt-8">
//                 <div className="relative">
//                   <div className="absolute right-4 top-2 bottom-2 w-0.5 bg-slate-200 dark:bg-slate-700" />
//                   <div className="space-y-5 pr-12">
//                     {logItems.map((item, idx) => (
//                       <div key={idx} className="relative">
//                         <div className={`absolute -right-[38px] w-4 h-4 rounded-full ${item.color} border-2 border-white dark:border-[#0b1b2d] top-1.5`} />
//                         <div className="bg-[#f5f5f5] dark:bg-[#0c1f33] rounded-2xl p-4">
//                           <div className="flex items-start justify-between gap-2">
//                             <p className="text-sm font-bold text-slate-900 dark:text-white">{item.action}</p>
//                             <span className="text-xs text-slate-400 whitespace-nowrap shrink-0">{item.date} · {item.time}</span>
//                           </div>
//                           <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">بواسطة: {item.by}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </main>
//       </div>
 
//       {/* ==================== القائمة الجانبية للموبايل ==================== */}
//       <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
//         <div
//           className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
//           onClick={() => setIsMobileMenuOpen(false)}
//         />
//         <div className={`fixed top-0 right-0 w-[300px] max-w-[85vw] h-full bg-white dark:bg-[#0b1b2d] shadow-2xl z-10 overflow-y-auto select-none transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
//           <button
//             onClick={() => setIsMobileMenuOpen(false)}
//             aria-label="إغلاق القائمة"
//             className="absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-10"
//           >
//             <i className="fa-solid fa-xmark text-lg" />
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
 
// /* ==================== الأيقونات ==================== */
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
 
// const CheckIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
//     <polyline points="20 6 9 17 4 12" />
//   </svg>
// )
 
// const DownloadIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
//     <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
//     <polyline points="7 10 12 15 17 10" />
//     <line x1="12" y1="15" x2="12" y2="3" />
//   </svg>
// )
 
// const navItems = [
//   { id: 'home', label: 'الرئيسية', Icon: HomeIcon, path: '/dashboard' },
//   { id: 'my-orders', label: 'طلباتي', Icon: FileIcon, path: '/my-orders' },
//   { id: 'new-order', label: 'طلب شراء جديد', Icon: FilePlusIcon, path: '/new-order' },
//   { id: 'suppliers', label: 'الموردين', Icon: TruckIcon, path: '/dashboard' },
// ]
 
// /* ==================== القائمة الجانبية ==================== */
// function SidebarContent({ onNavigate }) {
//   const navigate = useNavigate()
//   return (
//     <div className="min-h-full flex flex-col">
//       <div className="px-4 pt-[clamp(16px,3vh,32px)]">
//         <div className="px-2">
//           <Link to="/dashboard" onClick={onNavigate} className="inline-block">
//             <img src={logo} alt="IBRAM" className="h-[clamp(100px,4.6vh,50px)] w-auto object-contain" />
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
//                 onClick={() => { navigate(path); onNavigate?.() }}
//                 className={`w-full h-[clamp(40px,5.2vh,56px)] flex items-center gap-3 px-5 2xl:px-6 rounded-lg text-[length:clamp(16px,2.04vh,22px)] font-medium text-right cursor-pointer transition-all ${
//                   isActive
//                     ? 'bg-[#00B0F0] text-slate-900 shadow-sm'
//                     : 'bg-[#f5f5f5] dark:bg-[#0f243a] text-slate-900 dark:text-slate-200 hover:bg-[#ececec] dark:hover:bg-[#142e4a]'
//                 }`}
//               >
//                 <Icon className="w-[1em] h-[1em] shrink-0" />
//                 <span>{label}</span>
//               </button>
//             )
//           })}
//         </nav>
//       </div>
//       <div className="mt-auto pt-[clamp(12px,2vh,24px)]">
//         <div className="flex items-center gap-2 px-6 2xl:px-10 py-[clamp(10px,1.5vh,16px)] bg-[#e9f4fb] dark:bg-[#0e2740]">
//           <span className="w-2.5 h-2.5 rounded-full bg-emerald-700 flex-shrink-0 animate-pulse" />
//           <div className="flex flex-col text-right flex-1">
//             <span className="whitespace-nowrap text-[15px] 2xl:text-[17px] font-bold text-slate-900 dark:text-white">النظام متصل وآمن</span>
//             <span className="text-[13px] 2xl:text-sm text-slate-500 dark:text-slate-400">Sovereign Core v4.2</span>
//           </div>
//           <img src={shieldIcon} alt="shield" className="w-5 h-5 object-contain flex-shrink-0" />
//         </div>
//         <div className="flex items-center justify-between py-[clamp(10px,1.85vh,20px)] pr-6 2xl:pr-10 pl-5 2xl:pl-7 mt-[clamp(0px,3vh,32px)] mb-2 cursor-pointer group">
//           <div className="flex items-center gap-4">
//             <img src={userHani} alt="م. هاني وشاح" className="w-10 h-10 rounded-full object-cover" />
//             <div className="text-right">
//               <h4 className="text-[15px] 2xl:text-[17px] font-bold text-slate-900 dark:text-white group-hover:text-sky-600 transition-colors">م. هاني وشاح</h4>
//               <p className="text-[13px] 2xl:text-sm text-slate-500 dark:text-slate-400">الإدارة الطالبة</p>
//             </div>
//           </div>
//           <i className="fa-solid fa-angle-left text-sm text-slate-500 group-hover:text-slate-700 transition-colors" />
//         </div>
//       </div>
//     </div>
//   )
// }
 
// /* ==================== بيانات ثابتة ==================== */
// const steps = [
//   { num: 1, label: 'تقديم الطلب' },
//   { num: 2, label: 'الاعتماد' },
//   { num: 3, label: 'طرح العروض' },
//   { num: 4, label: 'فتح المظاريف' },
//   { num: 5, label: 'المحضر والتوقيع' },
// ]
 
// const infoRows = [
//   { label: 'مقدم الطلب', value: 'م. خالد الزهراني' },
//   { label: 'الإدارة', value: 'كلية الهندسة' },
//   { label: 'التصنيف', value: 'أجهزة حاسوب وتقنية' },
//   { label: 'تاريخ الإنشاء', value: '23 أكتوبر 2026' },
//   { label: 'التاريخ المطلوب', value: '30 أكتوبر 2026' },
//   { label: 'طريقة الشراء', value: 'لم تُحدد بعد' },
//   { label: 'طلب عروض الأسعار', value: 'RFQ-2026-0001' },
//   { label: 'آخر موعد للتقديم', value: '11 أكتوبر 2026 في 2:41 م' },
//   { label: 'موعد فتح المظاريف', value: '12 أكتوبر 2026 في 2:41 م' },
// ]
 
// // جدول الأصناف والخدمات (الأول)
// const orderItems = [
//   { num: 1, name: 'أجهزة حاسوب', qty: 20, unit: 'جهاز', unitPrice: 2500, total: 50000 },
//   { num: 2, name: 'لوحة مفاتيح وفأرة لاسلكية', qty: 25, unit: 'طقم', unitPrice: 5200, total: 40000 },
//   { num: 3, name: 'أجهزة حاسوب', qty: 1, unit: 'جهاز', unitPrice: 500, total: 3000 },
// ]
// const orderTotal = 113000
 
// // جدول مقارنة العروض (الثاني)
// const compareItems = [
//   { name: 'جهاز حاسوب مكتبي', qty: 25, unit: 'جهاز', estimate: 4200, offers: [4050, 4050, 3980] },
//   { name: 'لوحة مفاتيح وفأرة لاسلكية', qty: 25, unit: 'طقم', estimate: 1800, offers: [1850, 1850, 2300] },
//   { name: 'جهاز عرض (بروجكتر)', qty: 1, unit: 'جهاز', estimate: 3500, offers: [4050, 4050, 3500] },
// ]
// const suppliers = [
//   { name: 'شركة الحلول التقنية المتقدمة', envelopes: 1 },
//   { name: 'شركة الحلول التقنية المتقدمة', envelopes: 2 },
//   { name: 'مؤسسة الرواد للتجهيزات المكتبية', envelopes: 3 },
// ]
// const compareTotal = 180000
 
// // سجل الإجراءات (الأحدث أولاً) - الصورة منخفضة الدقة، عدّل الأسماء والتواريخ حسب بياناتك
// const logItems = [
//   { title: 'اكتمال توقيع المحضر', actor: 'النظام', note: 'الطلب جاهز للمرحلة التالية', date: '16 أكتوبر 2026', time: '10:50 ص' },
//   { title: 'توقيع المحضر (إلكترونيًا)', actor: 'م. فهد العتيبي - عضو لجنة فتح المظاريف', note: 'RFQ-2026-0001', date: '16 أكتوبر 2026', time: '10:40 ص' },
//   { title: 'توقيع المحضر (إلكترونيًا)', actor: 'د. هبة الدوسري - عضو لجنة فتح المظاريف', note: 'RFQ-2026-0001', date: '16 أكتوبر 2026', time: '10:30 ص' },
//   { title: 'توقيع المحضر (إلكترونيًا)', actor: 'د. سامي الفتيني - عضو لجنة فتح المظاريف', note: 'RFQ-2026-0001', date: '16 أكتوبر 2026', time: '10:00 ص' },
//   { title: 'إدخال الأسعار وإعداد جدول المقارنة', actor: 'د. سامي الفتيني - عضو لجنة فتح المظاريف', note: 'أنشئ المحضر RFQ-2026-0001', date: '15 أكتوبر 2026', time: '12:30 م' },
//   { title: 'فتح المظاريف', actor: 'د. سامي الفتيني - عضو لجنة فتح المظاريف', note: 'فُتحت 3 مظاريف بحضور أعضاء اللجنة', date: '15 أكتوبر 2026', time: '10:00 ص' },
//   { title: 'إحالة إلى لجنة فتح المظاريف', actor: 'أ. يوسف المحمدي - موظف المشتريات', note: '3 عروض مستلمة', date: '15 أكتوبر 2026', time: '10:00 ص' },
//   { title: 'تسجيل استلام عرض', actor: 'أ. يوسف المحمدي - موظف المشتريات', note: 'شركة الخليج للتوريدات العامة - مظروف مغلق', date: '14 أكتوبر 2026', time: '10:00 ص' },
//   { title: 'تسجيل استلام عرض', actor: 'أ. يوسف المحمدي - موظف المشتريات', note: 'مؤسسة الرواد للتجهيزات المكتبية - مظروف مغلق', date: '13 أكتوبر 2026', time: '10:00 ص' },
//   { title: 'تسجيل استلام عرض', actor: 'أ. يوسف المحمدي - موظف المشتريات', note: 'شركة الحلول التقنية المتقدمة - مظروف مغلق', date: '13 أكتوبر 2026', time: '10:00 ص' },
//   { title: 'إصدار طلب عروض الأسعار', actor: 'أ. يوسف المحمدي - موظف المشتريات', note: 'أُرسل إلى 3 موردين · RFQ-2026-0001', date: '12 أكتوبر 2026', time: '10:00 ص' },
//   { title: 'تحديد طريقة الشراء', actor: 'أ. يوسف المحمدي - موظف المشتريات', note: 'عروض أسعار - الطريقة التقديرية ضمن سقف عروض الأسعار', date: '11 أكتوبر 2026', time: '10:00 ص' },
//   { title: 'اعتماد الطلب', actor: 'د. عبدالله الحربي - المدير العام', note: 'اعتمد الطلب وأحيل إلى قسم المشتريات', date: '10 أكتوبر 2026', time: '10:00 ص' },
//   { title: 'إرسال الطلب للاعتماد', actor: 'م. خالد الزهراني - الإدارة الطالبة', note: '', date: '09 أكتوبر 2026', time: '10:00 ص' },
//   { title: 'إنشاء الطلب', actor: 'م. خالد الزهراني - الإدارة الطالبة', note: 'حُفظ كمسودة', date: '08 أكتوبر 2026', time: '10:00 ص' },
// ]
 
// // المرفقات (غيّر قيمة url إلى رابط الملف الحقيقي ليشتغل التحميل)
// const attachments = [
//   { id: 1, name: 'مواصفات_أجهزة_المعمل.pdf', size: '1.2 م.ب', by: 'م. خالد الزهراني', date: '25 سبتمبر 2026', url: '/files/مواصفات_أجهزة_المعمل.pdf' },
//   { id: 2, name: 'صور_الأجهزة_الحالية.zip', size: '5.2 م.ب', by: 'م. خالد الزهراني', date: '25 سبتمبر 2026', url: '/files/صور_الأجهزة_الحالية.zip' },
// ]
 
// const fmt = (n) => n.toLocaleString('en-US')
 
// /* ==================== أنماط مشتركة ==================== */
// const cardCls = 'bg-white dark:bg-[#0b1b2d] rounded-[24px]'
// const sectionTitle = 'text-base font-bold text-slate-900 dark:text-white mb-4'
// const thCls = 'px-4 py-5 text-sm font-medium text-slate-500 dark:text-slate-400 text-center'
// const tdCls = 'px-4 py-9 text-sm text-center text-slate-900 dark:text-slate-100'
 
// /* ==================== الصفحة ==================== */
// export default function EnvelopesOpened() {
//   const navigate = useNavigate()
//   const [activeTab, setActiveTab] = useState('data')
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [searchQuery, setSearchQuery] = useState('')
 
//   const tabs = [
//     { id: 'data', label: 'البيانات' },
//     { id: 'attachments', label: 'المرفقات', count: attachments.length },
//     { id: 'log', label: 'سجل الإجراءات', count: logItems.length },
//   ]
 
//   return (
//     <div
//       dir="rtl"
//       className="min-h-screen bg-[#f5f5f5] dark:bg-[#071322] text-slate-800 dark:text-slate-100 flex flex-row transition-colors duration-200"
//       style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
//     >
//       {/* ==================== القائمة الجانبية ==================== */}
//       <aside className="hidden lg:block w-[clamp(240px,18.4vw,353px)] shrink-0 bg-white dark:bg-[#0b1b2d] sticky top-0 h-screen overflow-y-auto select-none z-20 dark:border-l dark:border-slate-800/80">
//         <SidebarContent />
//       </aside>
 
//       {/* ==================== المحتوى الرئيسي ==================== */}
//       <div className="flex-1 flex flex-col min-w-0">
//         {/* الهيدر */}
//         <header className="h-16 bg-white dark:bg-[#0b1b2d] px-4 lg:pl-[88px] lg:pr-6 flex items-center justify-between gap-4 sticky top-0 z-10 dark:border-b dark:border-slate-800/80">
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => setIsMobileMenuOpen(true)}
//               className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
//               aria-label="القائمة"
//             >
//               <i className="fa-solid fa-bars text-lg" />
//             </button>
//             <nav className="flex items-center gap-2 text-[13px] sm:text-[15px] text-slate-500 dark:text-slate-400">
//               <Link to="/dashboard" className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
//                 نظام إدارة المشتريات - الأزهر
//               </Link>
//               <i className="fa-solid fa-angle-left text-[11px] text-slate-400" />
//               <Link
//                 to="/dashboard"
//                 className="font-bold text-slate-900 dark:text-slate-200 hover:text-slate-700 dark:hover:text-white transition-colors"
//               >
//                 لوحة التحكم والمتابعة
//               </Link>
//             </nav>
//           </div>
 
//           <div className="hidden md:flex flex-1 max-w-[345px]">
//             <div className="relative w-full">
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="بحث"
//                 className="w-full h-10 bg-[#f7f7f7] dark:bg-[#0f243a] border border-slate-300 dark:border-slate-700 rounded-full pr-12 pl-4 text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-[#01B0F5]"
//               />
//               <button type="button" aria-label="بحث" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">
//                 <SearchIcon className="w-6 h-6" />
//               </button>
//             </div>
//           </div>
 
//           <div className="flex items-center gap-4">
//             <NotificationMenu />
//             <span className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-slate-700" />
//             <LanguageMenu />
//           </div>
//         </header>
 
//         {/* ==================== محتوى الصفحة ==================== */}
//         <main className="w-full flex-1 px-4 sm:px-6 lg:pl-10 lg:pr-6 pt-10 pb-12 space-y-6 max-w-[1400px]">
//           {/* رجوع */}
//           <button
//             type="button"
//             onClick={() => navigate('/my-orders')}
//             className="flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-slate-200 hover:opacity-70 transition-opacity cursor-pointer"
//           >
//             <i className="fa-solid fa-angle-right text-xs" />
//             <span>رجوع</span>
//           </button>
 
//           {/* ترويسة الطلب (بدون كرت) + أزرار اليسار */}
//           <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
//             <div>
//               <div className="flex items-center gap-3 mb-3 flex-wrap">
//                 <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 bg-[#e5e7eb] dark:bg-slate-800 px-3 py-1 rounded-md">
//                   PR-2026-0001
//                 </span>
//                 <span className="inline-flex items-center gap-1.5 h-6 px-3 rounded-md bg-[#e8f9ef] dark:bg-emerald-950/50 text-[#1fbb5a] text-xs font-semibold">
//                   <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
//                   تم فتح المظاريف
//                 </span>
//               </div>
//               <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
//                 أجهزة حاسوب لمعمل الحاسب الآلي
//               </h1>
//               <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">كلية الهندسة · م. خالد الزهراني</p>
//             </div>
 
//             <div className="flex items-center gap-4 w-full lg:w-auto">
//               <button
//                 type="button"
//                 className="flex-1 lg:flex-none lg:w-[270px] h-12 rounded-full border border-[#828282] dark:border-slate-600 text-sm font-medium text-[#000000] dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 transition-all cursor-pointer"
//               >
//                 طلب العروض
//               </button>
//               <button
//                 type="button"
//                 className="flex-1 lg:flex-none lg:w-[270px] h-12 rounded-full border border-[#828282] dark:border-slate-600 text-sm font-medium text-[#000000] dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 transition-all cursor-pointer"
//               >
//                 المحضر
//               </button>
//             </div>
//           </div>
 
//           {/* ثلاثة كروت: أين الطلب الآن / بانتظار / الخطوة التالية */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-white dark:bg-[#0b1b2d] rounded-2xl px-5 py-4 flex items-center gap-3">
//               <i className="fa-solid fa-location-dot text-lg text-[#000000] dark:text-white shrink-0" />
//               <div className="text-right">
//                 <p className="text-base font-bold text-slate-900 dark:text-white">أين الطلب الآن</p>
//                 <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-0.5">اكتملت المرحلة الأولى</p>
//               </div>
//             </div>
 
//             <div className="bg-white dark:bg-[#0b1b2d] rounded-2xl px-5 py-4 flex items-center gap-3">
//               <i className="fa-solid fa-circle-user text-xl text-[#000000] dark:text-white shrink-0" />
//               <div className="text-right">
//                 <p className="text-base font-bold text-slate-900 dark:text-white">بانتظار</p>
//                 <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-0.5">لا أحد</p>
//               </div>
//             </div>
 
//             <div className="bg-white dark:bg-[#0b1b2d] rounded-2xl px-5 py-4 flex items-center gap-3">
//               <i className="fa-solid fa-circle-arrow-left text-xl text-[#000000] dark:text-white shrink-0" />
//               <div className="text-right">
//                 <p className="text-base font-bold text-slate-900 dark:text-white">الخطوة التالية</p>
//                 <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-0.5">جاهز للمرحلة التالية (اللجنة الفنية)</p>
//               </div>
//             </div>
//           </div>
 
//           {/* شريط: الطلب معتمد ومقفل */}
//           <div className="bg-white dark:bg-[#0b1b2d] rounded-2xl border border-[#828282]/70 dark:border-slate-600 px-6 py-5 flex items-center justify-between flex-wrap gap-4">
//             <div className="flex items-center gap-4">
//               <i className="fa-solid fa-lock text-lg text-[#000000] dark:text-white shrink-0" />
//               <div className="text-right">
//                 <p className="text-base font-bold text-slate-900 dark:text-white">الطلب معتمد ومقفل للتعديل</p>
//                 <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-1">
//                   لا يمكن تغيير بيانات الطلب بعد اعتماده. أي تعديل يتم عبر طلب تعديل رسمي يُرفع للإدارة العليا ويُوثّق في السجل.
//                 </p>
//               </div>
//             </div>
//             <button
//               type="button"
//               className="h-8 w-[195px] max-w-full rounded-full border border-[#007DEA] text-[#007DEA] text-xs font-medium hover:bg-[#e4f4fd] dark:hover:bg-[#0f2c45] transition-all cursor-pointer"
//             >
//               طلب تعديل رسمي
//             </button>
//           </div>
 
//           {/* مراحل الطلب */}
//           <div className={`${cardCls} p-6`}>
//             <h2 className="text-base font-bold text-slate-900 dark:text-white pb-4 mb-5 border-b border-slate-200 dark:border-slate-800">
//               مراحل الطلب
//             </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
//               {steps.map((step) => (
//                 <div
//                   key={step.num}
//                   className="rounded-[20px] border border-[#2EC48A] bg-[#EBFDF5] dark:bg-emerald-950/30 dark:border-emerald-700 px-4 py-4 flex items-center gap-3"
//                 >
//                   <div className="w-10 h-10 rounded-xl bg-[#0B4A32] text-white flex items-center justify-center shrink-0">
//                     <CheckIcon className="w-5 h-5" />
//                   </div>
//                   <div className="text-right">
//                     <p className="text-xs font-semibold text-[#0B4A32] dark:text-emerald-300">الخطوة {step.num}</p>
//                     <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">{step.label}</p>
//                     <p className="text-[11px] text-slate-400 mt-0.5">مكتملة</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
 
//           {/* التبويبات + المحتوى */}
//           <div className={`${cardCls} px-6 pt-4 pb-8`}>
//             {/* شريط التبويبات */}
//             <div className="flex items-center gap-8 flex-wrap">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab.id}
//                   type="button"
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`relative flex items-center gap-2 py-3 text-base font-medium transition-colors cursor-pointer ${
//                     activeTab === tab.id
//                       ? 'text-[#007DEA] dark:text-[#01B0F5]'
//                       : 'text-slate-900 dark:text-slate-200 hover:text-[#007DEA]'
//                   }`}
//                 >
//                   <span>{tab.label}</span>
//                   {tab.count && (
//                     <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#d9d9d9] dark:bg-slate-700 text-slate-800 dark:text-slate-100 text-xs font-medium">
//                       {tab.count}
//                     </span>
//                   )}
//                   {activeTab === tab.id && (
//                     <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#007DEA] dark:bg-[#01B0F5]" />
//                   )}
//                 </button>
//               ))}
//             </div>
 
//             {/* ==================== تبويب البيانات ==================== */}
//             {activeTab === 'data' && (
//               <div className="pt-8 space-y-10">
//                 <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(320px,36%)] gap-6 items-start">
//                   {/* اليمين: المبرر + جدول الأصناف */}
//                   <div className="space-y-8 px-1">
//                     <div>
//                       <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">المبرر</h3>
//                       <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
//                         تحديث أجهزة معمل الحاسب (قاعة 214) التي تجاوز عمرها سبع سنوات ولم تعد تدعم البرامج الهندسية المقررة في الخطة الدراسية.
//                       </p>
//                     </div>
 
//                     <div>
//                       <h3 className={sectionTitle}>الأصناف والخدمات</h3>
//                       <div className="overflow-x-auto rounded-[20px] border border-slate-200 dark:border-slate-700/80">
//                         <table className="w-full text-sm">
//                           <thead>
//                             <tr className="bg-[#E8F4FD] dark:bg-[#0c2438]">
//                               <th className={`${thCls} w-14`}>#</th>
//                               <th className={thCls}>الصنف/الخدمة/المواصفات</th>
//                               <th className={thCls}>الكمية</th>
//                               <th className={thCls}>سعر الوحدة التقديري</th>
//                               <th className={thCls}>الإجمالي التقديري</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {orderItems.map((item) => (
//                               <tr key={item.num} className="border-b border-slate-200 dark:border-slate-700/60">
//                                 <td className={`${tdCls} font-bold`}>{item.num}</td>
//                                 <td className={tdCls}>{item.name}</td>
//                                 <td className={tdCls}>{item.qty} {item.unit}</td>
//                                 <td className={tdCls}>{fmt(item.unitPrice)} ش</td>
//                                 <td className={tdCls}>{fmt(item.total)} ش</td>
//                               </tr>
//                             ))}
//                           </tbody>
//                           <tfoot>
//                             <tr>
//                               <td colSpan={5} className="bg-[#E8F4FD] dark:bg-[#0c2438] px-6 py-3">
//                                 <div className="flex items-center justify-between text-sm">
//                                   <span className="font-medium text-slate-600 dark:text-slate-300">إجمالي التكلفة التقديرية</span>
//                                   <span className="font-bold text-[#000000] dark:text-white">{fmt(orderTotal)} ش</span>
//                                 </div>
//                               </td>
//                             </tr>
//                           </tfoot>
//                         </table>
//                       </div>
//                     </div>
//                   </div>
 
//                   {/* اليسار: بطاقة المعلومات */}
//                   <div className="bg-[#E8F4FD] dark:bg-[#0c2438] rounded-[24px] px-6 py-3 lg:mt-8">
//                     {infoRows.map(({ label, value }, idx) => (
//                       <div
//                         key={label}
//                         className={`flex items-center justify-between gap-4 py-3.5 text-sm ${
//                           idx !== infoRows.length - 1 ? 'border-b border-slate-300/60 dark:border-slate-600/60' : ''
//                         }`}
//                       >
//                         <span className="text-slate-600 dark:text-slate-400">{label}</span>
//                         <span className="font-medium text-slate-900 dark:text-white">{value}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
 
//                 {/* جدول مقارنة العروض */}
//                 <div className="px-1">
//                   <h3 className={sectionTitle}>الأصناف والخدمات</h3>
//                   <div className="overflow-x-auto rounded-[20px] border border-slate-200 dark:border-slate-700/80">
//                     <table className="w-full text-sm">
//                       <thead>
//                         <tr className="bg-[#E8F4FD] dark:bg-[#0c2438]">
//                           <th className={thCls}>الصنف</th>
//                           <th className={thCls}>الكمية</th>
//                           <th className={thCls}>التقديري للوحدة</th>
//                           {suppliers.map((s, i) => (
//                             <th key={i} className="px-4 py-4 text-center text-slate-500 dark:text-slate-400">
//                               <span className="block text-sm font-medium">{s.name}</span>
//                               <span className="block text-[11px] font-normal mt-0.5">{s.envelopes} مظروف</span>
//                             </th>
//                           ))}
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {compareItems.map((item) => (
//                           <tr key={item.name} className="border-b border-slate-200 dark:border-slate-700/60">
//                             <td className={`${tdCls} font-medium`}>{item.name}</td>
//                             <td className={tdCls}>{item.qty} {item.unit}</td>
//                             <td className={tdCls}>{fmt(item.estimate)} ش</td>
//                             {item.offers.map((price, i) => (
//                               <td key={i} className={tdCls}>{fmt(price)} ش</td>
//                             ))}
//                           </tr>
//                         ))}
//                       </tbody>
//                       <tfoot>
//                         <tr>
//                           <td colSpan={3 + suppliers.length} className="bg-[#E8F4FD] dark:bg-[#0c2438] px-6 py-3">
//                             <div className="flex items-center justify-between text-sm">
//                               <span className="font-medium text-slate-600 dark:text-slate-300">إجمالي التكلفة التقديرية</span>
//                               <span className="font-bold text-[#000000] dark:text-white">{fmt(compareTotal)} ش</span>
//                             </div>
//                           </td>
//                         </tr>
//                       </tfoot>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//             )}
 
//             {/* ==================== تبويب المرفقات ==================== */}
//             {activeTab === 'attachments' && (
//               <div className="pt-6 space-y-4">
//                 {attachments.map((file) => (
//                   <div
//                     key={file.id}
//                     className="flex items-center justify-between gap-4 px-4 py-2.5 bg-[#E8F4FD] dark:bg-[#0c2438] rounded-xl border border-[#d3e8f8] dark:border-slate-700"
//                   >
//                     <div className="flex items-center gap-3 min-w-0">
//                       <i className="fa-solid fa-file text-[#007DEA] text-lg shrink-0" />
//                       <div className="text-right min-w-0">
//                         <p className="text-xs font-bold text-slate-900 dark:text-white truncate">{file.name}</p>
//                         <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
//                           {file.size} · أرفقه {file.by} · {file.date}
//                         </p>
//                       </div>
//                     </div>
//                     <a
//                       href={file.url}
//                       download={file.name}
//                       aria-label={`تحميل ${file.name}`}
//                       title="تحميل"
//                       className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-[#007DEA] hover:bg-white/70 dark:hover:bg-slate-700 transition-colors cursor-pointer shrink-0"
//                     >
//                       <DownloadIcon className="w-[18px] h-[18px]" />
//                     </a>
//                   </div>
//                 ))}
//               </div>
//             )}
 
//             {/* ==================== تبويب سجل الإجراءات ==================== */}
//             {activeTab === 'log' && (
//               <div className="pt-6 space-y-6">
//                 {/* شريط: الطلب معتمد ومقفل للتعديل */}
//                 <div className="flex items-center gap-2 bg-[#f5f5f5] dark:bg-[#0c1f33] rounded-xl px-4 py-3 text-xs text-slate-500 dark:text-slate-400">
//                   <i className="fa-solid fa-lock text-slate-500 dark:text-slate-400" />
//                   <span>الطلب معتمد ومقفل للتعديل</span>
//                 </div>
 
//                 {/* الخط الزمني */}
//                 <div className="relative">
//                   <div className="absolute right-[10px] top-3 bottom-3 w-px bg-slate-300 dark:bg-slate-600" />
//                   <ul className="space-y-7">
//                     {logItems.map((item, idx) => (
//                       <li key={idx} className="relative flex items-start justify-between gap-4 pr-9">
//                         {/* الدائرة */}
//                         <span
//                           className={`absolute right-0 top-0.5 w-5 h-5 rounded-full flex items-center justify-center ${
//                             idx === 0
//                               ? 'bg-[#007DEA]'
//                               : 'bg-white dark:bg-[#0b1b2d] border-2 border-slate-400 dark:border-slate-500'
//                           }`}
//                         >
//                           {idx === 0 && <CheckIcon className="w-3 h-3 text-white" />}
//                         </span>
 
//                         {/* النص */}
//                         <div className="text-right min-w-0">
//                           <p className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</p>
//                           <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{item.actor}</p>
//                           {item.note && (
//                             <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{item.note}</p>
//                           )}
//                         </div>
 
//                         {/* التاريخ (يسار) */}
//                         <span className="text-[11px] text-slate-600 dark:text-slate-300 whitespace-nowrap shrink-0 pt-1">
//                           {item.date} · {item.time}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             )}
//           </div>
//         </main>
//       </div>
 
//       {/* ==================== القائمة الجانبية للموبايل ==================== */}
//       <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
//         <div
//           className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
//           onClick={() => setIsMobileMenuOpen(false)}
//         />
//         <div className={`fixed top-0 right-0 w-[300px] max-w-[85vw] h-full bg-white dark:bg-[#0b1b2d] shadow-2xl z-10 overflow-y-auto select-none transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
//           <button
//             onClick={() => setIsMobileMenuOpen(false)}
//             aria-label="إغلاق القائمة"
//             className="absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-10"
//           >
//             <i className="fa-solid fa-xmark text-lg" />
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
 
// /* ==================== الأيقونات ==================== */
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
 
// const CheckIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
//     <polyline points="20 6 9 17 4 12" />
//   </svg>
// )
 
// const DownloadIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
//     <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
//     <polyline points="7 10 12 15 17 10" />
//     <line x1="12" y1="15" x2="12" y2="3" />
//   </svg>
// )
 
// const navItems = [
//   { id: 'home', label: 'الرئيسية', Icon: HomeIcon, path: '/dashboard' },
//   { id: 'my-orders', label: 'طلباتي', Icon: FileIcon, path: '/my-orders' },
//   { id: 'new-order', label: 'طلب شراء جديد', Icon: FilePlusIcon, path: '/new-order' },
//   { id: 'suppliers', label: 'الموردين', Icon: TruckIcon, path: '/dashboard' },
// ]
 
// /* ==================== القائمة الجانبية ==================== */
// function SidebarContent({ onNavigate }) {
//   const navigate = useNavigate()
//   return (
//     <div className="min-h-full flex flex-col">
//       <div className="px-4 pt-[clamp(16px,3vh,32px)]">
//         <div className="px-2">
//           <Link to="/dashboard" onClick={onNavigate} className="inline-block">
//             <img src={logo} alt="IBRAM" className="h-[clamp(100px,4.6vh,50px)] w-auto object-contain" />
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
//                 onClick={() => { navigate(path); onNavigate?.() }}
//                 className={`w-full h-[clamp(40px,5.2vh,56px)] flex items-center gap-3 px-5 2xl:px-6 rounded-lg text-[length:clamp(16px,2.04vh,22px)] font-medium text-right cursor-pointer transition-all ${
//                   isActive
//                     ? 'bg-[#00B0F0] text-slate-900 shadow-sm'
//                     : 'bg-[#f5f5f5] dark:bg-[#0f243a] text-slate-900 dark:text-slate-200 hover:bg-[#ececec] dark:hover:bg-[#142e4a]'
//                 }`}
//               >
//                 <Icon className="w-[1em] h-[1em] shrink-0" />
//                 <span>{label}</span>
//               </button>
//             )
//           })}
//         </nav>
//       </div>
//       <div className="mt-auto pt-[clamp(12px,2vh,24px)]">
//         <div className="flex items-center gap-2 px-6 2xl:px-10 py-[clamp(10px,1.5vh,16px)] bg-[#e9f4fb] dark:bg-[#0e2740]">
//           <span className="w-2.5 h-2.5 rounded-full bg-emerald-700 flex-shrink-0 animate-pulse" />
//           <div className="flex flex-col text-right flex-1">
//             <span className="whitespace-nowrap text-[15px] 2xl:text-[17px] font-bold text-slate-900 dark:text-white">النظام متصل وآمن</span>
//             <span className="text-[13px] 2xl:text-sm text-slate-500 dark:text-slate-400">Sovereign Core v4.2</span>
//           </div>
//           <img src={shieldIcon} alt="shield" className="w-5 h-5 object-contain flex-shrink-0" />
//         </div>
//         <div className="flex items-center justify-between py-[clamp(10px,1.85vh,20px)] pr-6 2xl:pr-10 pl-5 2xl:pl-7 mt-[clamp(0px,3vh,32px)] mb-2 cursor-pointer group">
//           <div className="flex items-center gap-4">
//             <img src={userHani} onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/user-hani.jpg'; }} alt="م. هاني وشاح" className="w-10 h-10 rounded-full object-cover" />
//             <div className="text-right">
//               <h4 className="text-[15px] 2xl:text-[17px] font-bold text-slate-900 dark:text-white group-hover:text-sky-600 transition-colors">م. هاني وشاح</h4>
//               <p className="text-[13px] 2xl:text-sm text-slate-500 dark:text-slate-400">الإدارة الطالبة</p>
//             </div>
//           </div>
//           <i className="fa-solid fa-angle-left text-sm text-slate-500 group-hover:text-slate-700 transition-colors" />
//         </div>
//       </div>
//     </div>
//   )
// }
 
// /* ==================== بيانات ثابتة ==================== */
// const steps = [
//   { num: 1, label: 'تقديم الطلب' },
//   { num: 2, label: 'الاعتماد' },
//   { num: 3, label: 'طرح العروض' },
//   { num: 4, label: 'فتح المظاريف' },
//   { num: 5, label: 'المحضر والتوقيع' },
// ]
 
// const infoRows = [
//   { label: 'مقدم الطلب', value: 'م. خالد الزهراني' },
//   { label: 'الإدارة', value: 'كلية الهندسة' },
//   { label: 'التصنيف', value: 'أجهزة حاسوب وتقنية' },
//   { label: 'تاريخ الإنشاء', value: '23 أكتوبر 2026' },
//   { label: 'التاريخ المطلوب', value: '30 أكتوبر 2026' },
//   { label: 'طريقة الشراء', value: 'لم تُحدد بعد' },
//   { label: 'طلب عروض الأسعار', value: 'RFQ-2026-0001' },
//   { label: 'آخر موعد للتقديم', value: '11 أكتوبر 2026 في 2:41 م' },
//   { label: 'موعد فتح المظاريف', value: '12 أكتوبر 2026 في 2:41 م' },
// ]
 
// // جدول الأصناف والخدمات (الأول)
// const orderItems = [
//   { num: 1, name: 'أجهزة حاسوب', qty: 20, unit: 'جهاز', unitPrice: 2500, total: 50000 },
//   { num: 2, name: 'لوحة مفاتيح وفأرة لاسلكية', qty: 25, unit: 'طقم', unitPrice: 5200, total: 40000 },
//   { num: 3, name: 'أجهزة حاسوب', qty: 1, unit: 'جهاز', unitPrice: 500, total: 3000 },
// ]
// const orderTotal = 113000
 
// // جدول مقارنة العروض (الثاني)
// const compareItems = [
//   { name: 'جهاز حاسوب مكتبي', qty: 25, unit: 'جهاز', estimate: 4200, offers: [4050, 4050, 3980] },
//   { name: 'لوحة مفاتيح وفأرة لاسلكية', qty: 25, unit: 'طقم', estimate: 1800, offers: [1850, 1850, 2300] },
//   { name: 'جهاز عرض (بروجكتر)', qty: 1, unit: 'جهاز', estimate: 3500, offers: [4050, 4050, 3500] },
// ]
// const suppliers = [
//   { name: 'شركة الحلول التقنية المتقدمة', envelopes: 1 },
//   { name: 'شركة الحلول التقنية المتقدمة', envelopes: 2 },
//   { name: 'مؤسسة الرواد للتجهيزات المكتبية', envelopes: 3 },
// ]
// const compareTotal = 180000
 
// // سجل الإجراءات (الأحدث أولاً) - الصورة منخفضة الدقة، عدّل الأسماء والتواريخ حسب بياناتك
// const logItems = [
//   { title: 'اكتمال توقيع المحضر', actor: 'النظام', note: 'الطلب جاهز للمرحلة التالية', date: '16 أكتوبر 2026', time: '10:50 ص' },
//   { title: 'توقيع المحضر (إلكترونيًا)', actor: 'م. فهد العتيبي - عضو لجنة فتح المظاريف', note: 'RFQ-2026-0001', date: '16 أكتوبر 2026', time: '10:40 ص' },
//   { title: 'توقيع المحضر (إلكترونيًا)', actor: 'د. هبة الدوسري - عضو لجنة فتح المظاريف', note: 'RFQ-2026-0001', date: '16 أكتوبر 2026', time: '10:30 ص' },
//   { title: 'توقيع المحضر (إلكترونيًا)', actor: 'د. سامي الفتيني - عضو لجنة فتح المظاريف', note: 'RFQ-2026-0001', date: '16 أكتوبر 2026', time: '10:00 ص' },
//   { title: 'إدخال الأسعار وإعداد جدول المقارنة', actor: 'د. سامي الفتيني - عضو لجنة فتح المظاريف', note: 'أنشئ المحضر RFQ-2026-0001', date: '15 أكتوبر 2026', time: '12:30 م' },
//   { title: 'فتح المظاريف', actor: 'د. سامي الفتيني - عضو لجنة فتح المظاريف', note: 'فُتحت 3 مظاريف بحضور أعضاء اللجنة', date: '15 أكتوبر 2026', time: '10:00 ص' },
//   { title: 'إحالة إلى لجنة فتح المظاريف', actor: 'أ. يوسف المحمدي - موظف المشتريات', note: '3 عروض مستلمة', date: '15 أكتوبر 2026', time: '10:00 ص' },
//   { title: 'تسجيل استلام عرض', actor: 'أ. يوسف المحمدي - موظف المشتريات', note: 'شركة الخليج للتوريدات العامة - مظروف مغلق', date: '14 أكتوبر 2026', time: '10:00 ص' },
//   { title: 'تسجيل استلام عرض', actor: 'أ. يوسف المحمدي - موظف المشتريات', note: 'مؤسسة الرواد للتجهيزات المكتبية - مظروف مغلق', date: '13 أكتوبر 2026', time: '10:00 ص' },
//   { title: 'تسجيل استلام عرض', actor: 'أ. يوسف المحمدي - موظف المشتريات', note: 'شركة الحلول التقنية المتقدمة - مظروف مغلق', date: '13 أكتوبر 2026', time: '10:00 ص' },
//   { title: 'إصدار طلب عروض الأسعار', actor: 'أ. يوسف المحمدي - موظف المشتريات', note: 'أُرسل إلى 3 موردين · RFQ-2026-0001', date: '12 أكتوبر 2026', time: '10:00 ص' },
//   { title: 'تحديد طريقة الشراء', actor: 'أ. يوسف المحمدي - موظف المشتريات', note: 'عروض أسعار - الطريقة التقديرية ضمن سقف عروض الأسعار', date: '11 أكتوبر 2026', time: '10:00 ص' },
//   { title: 'اعتماد الطلب', actor: 'د. عبدالله الحربي - المدير العام', note: 'اعتمد الطلب وأحيل إلى قسم المشتريات', date: '10 أكتوبر 2026', time: '10:00 ص' },
//   { title: 'إرسال الطلب للاعتماد', actor: 'م. خالد الزهراني - الإدارة الطالبة', note: '', date: '09 أكتوبر 2026', time: '10:00 ص' },
//   { title: 'إنشاء الطلب', actor: 'م. خالد الزهراني - الإدارة الطالبة', note: 'حُفظ كمسودة', date: '08 أكتوبر 2026', time: '10:00 ص' },
// ]
 
// // المرفقات (غيّر قيمة url إلى رابط الملف الحقيقي ليشتغل التحميل)
// const attachments = [
//   { id: 1, name: 'مواصفات_أجهزة_المعمل.pdf', size: '1.2 م.ب', by: 'م. خالد الزهراني', date: '25 سبتمبر 2026', url: '/files/مواصفات_أجهزة_المعمل.pdf' },
//   { id: 2, name: 'صور_الأجهزة_الحالية.zip', size: '5.2 م.ب', by: 'م. خالد الزهراني', date: '25 سبتمبر 2026', url: '/files/صور_الأجهزة_الحالية.zip' },
// ]
 
// const fmt = (n) => n.toLocaleString('en-US')
 
// /* ==================== أنماط مشتركة ==================== */
// const cardCls = 'bg-white dark:bg-[#0b1b2d] rounded-[24px]'
// const sectionTitle = 'text-base font-bold text-slate-900 dark:text-white mb-4'
// const thCls = 'px-4 py-5 text-sm font-medium text-slate-500 dark:text-slate-400 text-center'
// const tdCls = 'px-4 py-9 text-sm text-center text-slate-900 dark:text-slate-100'
 
// /* ==================== الصفحة ==================== */
// export default function EnvelopesOpened() {
//   const navigate = useNavigate()
//   const [activeTab, setActiveTab] = useState('data')
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [searchQuery, setSearchQuery] = useState('')
//   const [activeLog, setActiveLog] = useState(0)
 
//   const tabs = [
//     { id: 'data', label: 'البيانات' },
//     { id: 'attachments', label: 'المرفقات', count: attachments.length },
//     { id: 'log', label: 'سجل الإجراءات', count: logItems.length },
//   ]
 
//   return (
//     <div
//       dir="rtl"
//       className="min-h-screen bg-[#f5f5f5] dark:bg-[#071322] text-slate-800 dark:text-slate-100 flex flex-row transition-colors duration-200"
//       style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
//     >
//       {/* ==================== القائمة الجانبية ==================== */}
//       <aside className="hidden lg:block w-[clamp(240px,18.4vw,353px)] shrink-0 bg-white dark:bg-[#0b1b2d] sticky top-0 h-screen overflow-y-auto select-none z-20 dark:border-l dark:border-slate-800/80">
//         <SidebarContent />
//       </aside>
 
//       {/* ==================== المحتوى الرئيسي ==================== */}
//       <div className="flex-1 flex flex-col min-w-0">
//         {/* الهيدر */}
//         <header className="h-16 bg-white dark:bg-[#0b1b2d] px-4 lg:pl-[88px] lg:pr-6 flex items-center justify-between gap-4 sticky top-0 z-10 dark:border-b dark:border-slate-800/80">
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => setIsMobileMenuOpen(true)}
//               className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
//               aria-label="القائمة"
//             >
//               <i className="fa-solid fa-bars text-lg" />
//             </button>
//             <nav className="flex items-center gap-2 text-[13px] sm:text-[15px] text-slate-500 dark:text-slate-400">
//               <Link to="/dashboard" className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
//                 نظام إدارة المشتريات - الأزهر
//               </Link>
//               <i className="fa-solid fa-angle-left text-[11px] text-slate-400" />
//               <Link
//                 to="/dashboard"
//                 className="font-bold text-slate-900 dark:text-slate-200 hover:text-slate-700 dark:hover:text-white transition-colors"
//               >
//                 لوحة التحكم والمتابعة
//               </Link>
//             </nav>
//           </div>
 
//           <div className="hidden md:flex flex-1 max-w-[345px]">
//             <div className="relative w-full">
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="بحث"
//                 className="w-full h-10 bg-[#f7f7f7] dark:bg-[#0f243a] border border-slate-300 dark:border-slate-700 rounded-full pr-12 pl-4 text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-[#01B0F5]"
//               />
//               <button type="button" aria-label="بحث" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">
//                 <SearchIcon className="w-6 h-6" />
//               </button>
//             </div>
//           </div>
 
//           <div className="flex items-center gap-4">
//             <NotificationMenu />
//             <span className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-slate-700" />
//             <LanguageMenu />
//           </div>
//         </header>
 
//         {/* ==================== محتوى الصفحة ==================== */}
//         <main className="w-full flex-1 px-4 sm:px-6 lg:pl-10 lg:pr-6 pt-10 pb-12 space-y-6 max-w-[1400px]">
//           {/* رجوع */}
//           <button
//             type="button"
//             onClick={() => navigate('/my-orders')}
//             className="flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-slate-200 hover:opacity-70 transition-opacity cursor-pointer"
//           >
//             <i className="fa-solid fa-angle-right text-xs" />
//             <span>رجوع</span>
//           </button>
 
//           {/* ترويسة الطلب (بدون كرت) + أزرار اليسار */}
//           <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
//             <div>
//               <div className="flex items-center gap-3 mb-3 flex-wrap">
//                 <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 bg-[#e5e7eb] dark:bg-slate-800 px-3 py-1 rounded-md">
//                   PR-2026-0001
//                 </span>
//                 <span className="inline-flex items-center gap-1.5 h-6 px-3 rounded-md bg-[#e8f9ef] dark:bg-emerald-950/50 text-[#1fbb5a] text-xs font-semibold">
//                   <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
//                   تم فتح المظاريف
//                 </span>
//               </div>
//               <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
//                 أجهزة حاسوب لمعمل الحاسب الآلي
//               </h1>
//               <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">كلية الهندسة · م. خالد الزهراني</p>
//             </div>
 
//             <div className="flex items-center gap-4 w-full lg:w-auto">
//               <button
//                 type="button"
//                 onClick={() => navigate('/rfq-preview')}
//                 className="flex-1 lg:flex-none lg:w-[270px] h-12 rounded-full border border-[#828282] dark:border-slate-600 text-sm font-medium text-[#000000] dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 transition-all cursor-pointer"
//               >
//                 طلب العروض
//               </button>
//               <button
//                 type="button"
//                 onClick={() => navigate('/envelopes-minutes')}
//                 className="flex-1 lg:flex-none lg:w-[270px] h-12 rounded-full border border-[#828282] dark:border-slate-600 text-sm font-medium text-[#000000] dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 transition-all cursor-pointer"
//               >
//                 المحضر
//               </button>
//             </div>
//           </div>
 
//           {/* ثلاثة كروت: أين الطلب الآن / بانتظار / الخطوة التالية */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-white dark:bg-[#0b1b2d] rounded-2xl px-5 py-4 flex items-center gap-3">
//               <i className="fa-solid fa-location-dot text-lg text-[#000000] dark:text-white shrink-0" />
//               <div className="text-right">
//                 <p className="text-base font-bold text-slate-900 dark:text-white">أين الطلب الآن</p>
//                 <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-0.5">اكتملت المرحلة الأولى</p>
//               </div>
//             </div>
 
//             <div className="bg-white dark:bg-[#0b1b2d] rounded-2xl px-5 py-4 flex items-center gap-3">
//               <i className="fa-solid fa-circle-user text-xl text-[#000000] dark:text-white shrink-0" />
//               <div className="text-right">
//                 <p className="text-base font-bold text-slate-900 dark:text-white">بانتظار</p>
//                 <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-0.5">لا أحد</p>
//               </div>
//             </div>
 
//             <div className="bg-white dark:bg-[#0b1b2d] rounded-2xl px-5 py-4 flex items-center gap-3">
//               <i className="fa-solid fa-circle-arrow-left text-xl text-[#000000] dark:text-white shrink-0" />
//               <div className="text-right">
//                 <p className="text-base font-bold text-slate-900 dark:text-white">الخطوة التالية</p>
//                 <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-0.5">جاهز للمرحلة التالية (اللجنة الفنية)</p>
//               </div>
//             </div>
//           </div>
 
//           {/* شريط: الطلب معتمد ومقفل */}
//           <div className="bg-white dark:bg-[#0b1b2d] rounded-2xl border border-[#828282]/70 dark:border-slate-600 px-6 py-5 flex items-center justify-between flex-wrap gap-4">
//             <div className="flex items-center gap-4">
//               <i className="fa-solid fa-lock text-lg text-[#000000] dark:text-white shrink-0" />
//               <div className="text-right">
//                 <button
//                   type="button"
//                   onClick={() => navigate('/approved-order')}
//                   className="text-base font-bold text-slate-900 dark:text-white hover:underline cursor-pointer text-right"
//                 >
//                   الطلب معتمد ومقفل للتعديل
//                 </button>
//                 <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-1">
//                   لا يمكن تغيير بيانات الطلب بعد اعتماده. أي تعديل يتم عبر طلب تعديل رسمي يُرفع للإدارة العليا ويُوثّق في السجل.
//                 </p>
//               </div>
//             </div>
//             <button
//               type="button"
//               className="h-8 w-[195px] max-w-full rounded-full border border-[#007DEA] text-[#007DEA] text-xs font-medium hover:bg-[#e4f4fd] dark:hover:bg-[#0f2c45] transition-all cursor-pointer"
//             >
//               طلب تعديل رسمي
//             </button>
//           </div>
 
//           {/* مراحل الطلب */}
//           <div className={`${cardCls} p-6`}>
//             <h2 className="text-base font-bold text-slate-900 dark:text-white pb-4 mb-5 border-b border-slate-200 dark:border-slate-800">
//               مراحل الطلب
//             </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
//               {steps.map((step) => (
//                 <div
//                   key={step.num}
//                   className="rounded-[20px] border border-[#2EC48A] bg-[#EBFDF5] dark:bg-emerald-950/30 dark:border-emerald-700 px-4 py-4 flex items-center gap-3"
//                 >
//                   <div className="w-10 h-10 rounded-xl bg-[#0B4A32] text-white flex items-center justify-center shrink-0">
//                     <CheckIcon className="w-5 h-5" />
//                   </div>
//                   <div className="text-right">
//                     <p className="text-xs font-semibold text-[#0B4A32] dark:text-emerald-300">الخطوة {step.num}</p>
//                     <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">{step.label}</p>
//                     <p className="text-[11px] text-slate-400 mt-0.5">مكتملة</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
 
//           {/* التبويبات + المحتوى */}
//           <div className={`${cardCls} px-6 pt-4 pb-8`}>
//             {/* شريط التبويبات */}
//             <div className="flex items-center gap-8 flex-wrap">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab.id}
//                   type="button"
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`relative flex items-center gap-2 py-3 text-base font-medium transition-colors cursor-pointer ${
//                     activeTab === tab.id
//                       ? 'text-[#007DEA] dark:text-[#01B0F5]'
//                       : 'text-slate-900 dark:text-slate-200 hover:text-[#007DEA]'
//                   }`}
//                 >
//                   <span>{tab.label}</span>
//                   {tab.count && (
//                     <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#d9d9d9] dark:bg-slate-700 text-slate-800 dark:text-slate-100 text-xs font-medium">
//                       {tab.count}
//                     </span>
//                   )}
//                   {activeTab === tab.id && (
//                     <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#007DEA] dark:bg-[#01B0F5]" />
//                   )}
//                 </button>
//               ))}
//             </div>
 
//             {/* ==================== تبويب البيانات ==================== */}
//             {activeTab === 'data' && (
//               <div className="pt-8 space-y-10">
//                 <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(320px,36%)] gap-6 items-start">
//                   {/* اليمين: المبرر + جدول الأصناف */}
//                   <div className="space-y-8 px-1">
//                     <div>
//                       <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">المبرر</h3>
//                       <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
//                         تحديث أجهزة معمل الحاسب (قاعة 214) التي تجاوز عمرها سبع سنوات ولم تعد تدعم البرامج الهندسية المقررة في الخطة الدراسية.
//                       </p>
//                     </div>
 
//                     <div>
//                       <h3 className={sectionTitle}>الأصناف والخدمات</h3>
//                       <div className="overflow-x-auto rounded-[20px] border border-slate-200 dark:border-slate-700/80">
//                         <table className="w-full text-sm">
//                           <thead>
//                             <tr className="bg-[#E8F4FD] dark:bg-[#0c2438]">
//                               <th className={`${thCls} w-14`}>#</th>
//                               <th className={thCls}>الصنف/الخدمة/المواصفات</th>
//                               <th className={thCls}>الكمية</th>
//                               <th className={thCls}>سعر الوحدة التقديري</th>
//                               <th className={thCls}>الإجمالي التقديري</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {orderItems.map((item) => (
//                               <tr key={item.num} className="border-b border-slate-200 dark:border-slate-700/60">
//                                 <td className={`${tdCls} font-bold`}>{item.num}</td>
//                                 <td className={tdCls}>{item.name}</td>
//                                 <td className={tdCls}>{item.qty} {item.unit}</td>
//                                 <td className={tdCls}>{fmt(item.unitPrice)} ش</td>
//                                 <td className={tdCls}>{fmt(item.total)} ش</td>
//                               </tr>
//                             ))}
//                           </tbody>
//                           <tfoot>
//                             <tr>
//                               <td colSpan={5} className="bg-[#E8F4FD] dark:bg-[#0c2438] px-6 py-3">
//                                 <div className="flex items-center justify-between text-sm">
//                                   <span className="font-medium text-slate-600 dark:text-slate-300">إجمالي التكلفة التقديرية</span>
//                                   <span className="font-bold text-[#000000] dark:text-white">{fmt(orderTotal)} ش</span>
//                                 </div>
//                               </td>
//                             </tr>
//                           </tfoot>
//                         </table>
//                       </div>
//                     </div>
//                   </div>
 
//                   {/* اليسار: بطاقة المعلومات */}
//                   <div className="bg-[#E8F4FD] dark:bg-[#0c2438] rounded-[24px] px-6 py-3 lg:mt-8">
//                     {infoRows.map(({ label, value }, idx) => (
//                       <div
//                         key={label}
//                         className={`flex items-center justify-between gap-4 py-3.5 text-sm ${
//                           idx !== infoRows.length - 1 ? 'border-b border-slate-300/60 dark:border-slate-600/60' : ''
//                         }`}
//                       >
//                         <span className="text-slate-600 dark:text-slate-400">{label}</span>
//                         <span className="font-medium text-slate-900 dark:text-white">{value}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
 
//                 {/* جدول مقارنة العروض */}
//                 <div className="px-1">
//                   <h3 className={sectionTitle}>الأصناف والخدمات</h3>
//                   <div className="overflow-x-auto rounded-[20px] border border-slate-200 dark:border-slate-700/80">
//                     <table className="w-full text-sm">
//                       <thead>
//                         <tr className="bg-[#E8F4FD] dark:bg-[#0c2438]">
//                           <th className={thCls}>الصنف</th>
//                           <th className={thCls}>الكمية</th>
//                           <th className={thCls}>التقديري للوحدة</th>
//                           {suppliers.map((s, i) => (
//                             <th key={i} className="px-4 py-4 text-center text-slate-500 dark:text-slate-400">
//                               <span className="block text-sm font-medium">{s.name}</span>
//                               <span className="block text-[11px] font-normal mt-0.5">{s.envelopes} مظروف</span>
//                             </th>
//                           ))}
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {compareItems.map((item) => (
//                           <tr key={item.name} className="border-b border-slate-200 dark:border-slate-700/60">
//                             <td className={`${tdCls} font-medium`}>{item.name}</td>
//                             <td className={tdCls}>{item.qty} {item.unit}</td>
//                             <td className={tdCls}>{fmt(item.estimate)} ش</td>
//                             {item.offers.map((price, i) => (
//                               <td key={i} className={tdCls}>{fmt(price)} ش</td>
//                             ))}
//                           </tr>
//                         ))}
//                       </tbody>
//                       <tfoot>
//                         <tr>
//                           <td colSpan={3 + suppliers.length} className="bg-[#E8F4FD] dark:bg-[#0c2438] px-6 py-3">
//                             <div className="flex items-center justify-between text-sm">
//                               <span className="font-medium text-slate-600 dark:text-slate-300">إجمالي التكلفة التقديرية</span>
//                               <span className="font-bold text-[#000000] dark:text-white">{fmt(compareTotal)} ش</span>
//                             </div>
//                           </td>
//                         </tr>
//                       </tfoot>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//             )}
 
//             {/* ==================== تبويب المرفقات ==================== */}
//             {activeTab === 'attachments' && (
//               <div className="pt-6 space-y-4">
//                 {attachments.map((file) => (
//                   <div
//                     key={file.id}
//                     className="flex items-center justify-between gap-4 px-4 py-2.5 bg-[#E8F4FD] dark:bg-[#0c2438] rounded-xl border border-[#d3e8f8] dark:border-slate-700"
//                   >
//                     <div className="flex items-center gap-3 min-w-0">
//                       <i className="fa-solid fa-file text-[#007DEA] text-lg shrink-0" />
//                       <div className="text-right min-w-0">
//                         <p className="text-xs font-bold text-slate-900 dark:text-white truncate">{file.name}</p>
//                         <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
//                           {file.size} · أرفقه {file.by} · {file.date}
//                         </p>
//                       </div>
//                     </div>
//                     <a
//                       href={file.url}
//                       download={file.name}
//                       aria-label={`تحميل ${file.name}`}
//                       title="تحميل"
//                       className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-[#007DEA] hover:bg-white/70 dark:hover:bg-slate-700 transition-colors cursor-pointer shrink-0"
//                     >
//                       <DownloadIcon className="w-[18px] h-[18px]" />
//                     </a>
//                   </div>
//                 ))}
//               </div>
//             )}
 
//             {/* ==================== تبويب سجل الإجراءات ==================== */}
//             {activeTab === 'log' && (
//               <div className="pt-6 space-y-6">
//                 {/* شريط: الطلب معتمد ومقفل للتعديل */}
//                 <div className="flex items-center gap-2 bg-[#f5f5f5] dark:bg-[#0c1f33] rounded-xl px-4 py-3 text-xs text-slate-500 dark:text-slate-400">
//                   <i className="fa-solid fa-lock text-slate-500 dark:text-slate-400" />
//                   <span>الطلب معتمد ومقفل للتعديل</span>
//                 </div>
 
//                 {/* الخط الزمني */}
//                 <div className="relative">
//                   <div className="absolute right-[10px] top-3 bottom-3 w-px bg-slate-300 dark:bg-slate-600" />
//                   <ul className="space-y-7">
//                     {logItems.map((item, idx) => (
//                       <li key={idx} className="relative flex items-start justify-between gap-4 pr-9">
//                         {/* الدائرة */}
//                         <button
//                           type="button"
//                           onClick={() => setActiveLog(idx)}
//                           aria-label={`تحديد: ${item.title}`}
//                           className={`absolute right-0 top-0.5 w-5 h-5 rounded-full flex items-center justify-center cursor-pointer transition-all ${
//                             idx === activeLog
//                               ? 'bg-[#007DEA]'
//                               : 'bg-white dark:bg-[#0b1b2d] border-2 border-slate-400 dark:border-slate-500 hover:border-[#007DEA]'
//                           }`}
//                         >
//                           {idx === activeLog && <CheckIcon className="w-3 h-3 text-white" />}
//                         </button>
 
//                         {/* النص */}
//                         <div className="text-right min-w-0">
//                           <p className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</p>
//                           <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{item.actor}</p>
//                           {item.note && (
//                             <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{item.note}</p>
//                           )}
//                         </div>
 
//                         {/* التاريخ (يسار) */}
//                         <span className="text-[11px] text-slate-600 dark:text-slate-300 whitespace-nowrap shrink-0 pt-1">
//                           {item.date} · {item.time}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             )}
//           </div>
//         </main>
//       </div>
 
//       {/* ==================== القائمة الجانبية للموبايل ==================== */}
//       <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
//         <div
//           className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
//           onClick={() => setIsMobileMenuOpen(false)}
//         />
//         <div className={`fixed top-0 right-0 w-[300px] max-w-[85vw] h-full bg-white dark:bg-[#0b1b2d] shadow-2xl z-10 overflow-y-auto select-none transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
//           <button
//             onClick={() => setIsMobileMenuOpen(false)}
//             aria-label="إغلاق القائمة"
//             className="absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-10"
//           >
//             <i className="fa-solid fa-xmark text-lg" />
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
 
/* ==================== الأيقونات ==================== */
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
 
const CheckIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
)
 
const DownloadIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)
 
const navItems = [
  { id: 'home', label: 'الرئيسية', Icon: HomeIcon, path: '/dashboard' },
  { id: 'my-orders', label: 'طلباتي', Icon: FileIcon, path: '/my-orders' },
  { id: 'new-order', label: 'طلب شراء جديد', Icon: FilePlusIcon, path: '/new-order' },
  { id: 'suppliers', label: 'الموردين', Icon: TruckIcon, path: '/dashboard' },
]
 
/* ==================== القائمة الجانبية ==================== */
function SidebarContent({ onNavigate }) {
  const navigate = useNavigate()
  return (
    <div className="min-h-full flex flex-col">
      <div className="px-4 pt-[clamp(16px,3vh,32px)]">
        <div className="px-2">
          <Link to="/dashboard" onClick={onNavigate} className="inline-block">
            <img src={logo} alt="IBRAM" className="h-[clamp(100px,4.6vh,50px)] w-auto object-contain" />
          </Link>
          <p className="mt-[clamp(6px,1.1vh,12px)] text-[length:clamp(13px,1.5vh,16px)] text-slate-500 dark:text-slate-400">
            إبرام للمشتريات
          </p>
        </div>
        <p className="my-[clamp(12px,4vh,44px)] px-2 text-[length:clamp(13px,1.4vh,15px)] text-slate-500 dark:text-slate-400">
          القوائم التشغيلية
        </p>
        <nav className="space-y-2">
          {navItems.map(({ id, label, Icon, path }) => {
            const isActive = id === 'my-orders'
            return (
              <button
                key={id}
                onClick={() => { navigate(path); onNavigate?.() }}
                className={`w-full h-[clamp(40px,5.2vh,56px)] flex items-center gap-3 px-5 2xl:px-6 rounded-lg text-[length:clamp(16px,2.04vh,22px)] font-medium text-right cursor-pointer transition-all ${
                  isActive
                    ? 'bg-[#00B0F0] text-slate-900 shadow-sm'
                    : 'bg-[#f5f5f5] dark:bg-[#0f243a] text-slate-900 dark:text-slate-200 hover:bg-[#ececec] dark:hover:bg-[#142e4a]'
                }`}
              >
                <Icon className="w-[1em] h-[1em] shrink-0" />
                <span>{label}</span>
              </button>
            )
          })}
        </nav>
      </div>
      <div className="mt-auto pt-[clamp(12px,2vh,24px)]">
        <div className="flex items-center gap-2 px-6 2xl:px-10 py-[clamp(10px,1.5vh,16px)] bg-[#e9f4fb] dark:bg-[#0e2740]">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-700 flex-shrink-0 animate-pulse" />
          <div className="flex flex-col text-right flex-1">
            <span className="whitespace-nowrap text-[15px] 2xl:text-[17px] font-bold text-slate-900 dark:text-white">النظام متصل وآمن</span>
            <span className="text-[13px] 2xl:text-sm text-slate-500 dark:text-slate-400">Sovereign Core v4.2</span>
          </div>
          <img src={shieldIcon} alt="shield" className="w-5 h-5 object-contain flex-shrink-0" />
        </div>
        <div className="flex items-center justify-between py-[clamp(10px,1.85vh,20px)] pr-6 2xl:pr-10 pl-5 2xl:pl-7 mt-[clamp(0px,3vh,32px)] mb-2 cursor-pointer group">
          <div className="flex items-center gap-4">
            <img src={userHani} onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/user-hani.jpg'; }} alt="م. هاني وشاح" className="w-10 h-10 rounded-full object-cover" />
            <div className="text-right">
              <h4 className="text-[15px] 2xl:text-[17px] font-bold text-slate-900 dark:text-white group-hover:text-sky-600 transition-colors">م. هاني وشاح</h4>
              <p className="text-[13px] 2xl:text-sm text-slate-500 dark:text-slate-400">الإدارة الطالبة</p>
            </div>
          </div>
          <i className="fa-solid fa-angle-left text-sm text-slate-500 group-hover:text-slate-700 transition-colors" />
        </div>
      </div>
    </div>
  )
}
 
/* ==================== بيانات ثابتة ==================== */
const steps = [
  { num: 1, label: 'تقديم الطلب' },
  { num: 2, label: 'الاعتماد' },
  { num: 3, label: 'طرح العروض' },
  { num: 4, label: 'فتح المظاريف' },
  { num: 5, label: 'المحضر والتوقيع' },
]
 
const infoRows = [
  { label: 'مقدم الطلب', value: 'م. خالد الزهراني' },
  { label: 'الإدارة', value: 'كلية الهندسة' },
  { label: 'التصنيف', value: 'أجهزة حاسوب وتقنية' },
  { label: 'تاريخ الإنشاء', value: '23 أكتوبر 2026' },
  { label: 'التاريخ المطلوب', value: '30 أكتوبر 2026' },
  { label: 'طريقة الشراء', value: 'لم تُحدد بعد' },
  { label: 'طلب عروض الأسعار', value: 'RFQ-2026-0001' },
  { label: 'آخر موعد للتقديم', value: '11 أكتوبر 2026 في 2:41 م' },
  { label: 'موعد فتح المظاريف', value: '12 أكتوبر 2026 في 2:41 م' },
]
 
// جدول الأصناف والخدمات (الأول)
const orderItems = [
  { num: 1, name: 'أجهزة حاسوب', qty: 20, unit: 'جهاز', unitPrice: 2500, total: 50000 },
  { num: 2, name: 'لوحة مفاتيح وفأرة لاسلكية', qty: 25, unit: 'طقم', unitPrice: 5200, total: 40000 },
  { num: 3, name: 'أجهزة حاسوب', qty: 1, unit: 'جهاز', unitPrice: 500, total: 3000 },
]
const orderTotal = 113000
 
// جدول مقارنة العروض (الثاني)
const compareItems = [
  { name: 'جهاز حاسوب مكتبي', qty: 25, unit: 'جهاز', estimate: 4200, offers: [4050, 4050, 3980] },
  { name: 'لوحة مفاتيح وفأرة لاسلكية', qty: 25, unit: 'طقم', estimate: 1800, offers: [1850, 1850, 2300] },
  { name: 'جهاز عرض (بروجكتر)', qty: 1, unit: 'جهاز', estimate: 3500, offers: [4050, 4050, 3500] },
]
const suppliers = [
  { name: 'شركة الحلول التقنية المتقدمة', envelopes: 1 },
  { name: 'شركة الحلول التقنية المتقدمة', envelopes: 2 },
  { name: 'مؤسسة الرواد للتجهيزات المكتبية', envelopes: 3 },
]
const compareTotal = 180000
 
// سجل الإجراءات (الأحدث أولاً)
const logItems = [
  { title: 'اكتمال توقيع المحضر', actor: 'النظام · إجراء آلي', note: 'الطلب جاهز للمرحلة التالية', date: '16 أكتوبر 2026', time: '10:50 ص' },
  { title: 'توقيع المحضر إلكترونيًا', actor: 'أ. فهد المالكي · عضو لجنة فتح المظاريف', note: 'MIN-2026-0001', date: '16 أكتوبر 2026', time: '10:50 ص' },
  { title: 'توقيع المحضر إلكترونيًا', actor: 'أ. نورة الدوسري · عضو لجنة فتح المظاريف', note: 'MIN-2026-0001', date: '15 أكتوبر 2026', time: '10:50 ص' },
  { title: 'توقيع المحضر إلكترونيًا', actor: 'د. سامي العتيبي · عضو لجنة فتح المظاريف', note: 'MIN-2026-0001', date: '15 أكتوبر 2026', time: '10:50 ص' },
  { title: 'إدخال الأسعار وإعداد جدول المقارنة', actor: 'د. سامي العتيبي · عضو لجنة فتح المظاريف', note: 'أُنشئ المحضر MIN-2026-0001', date: '15 أكتوبر 2026', time: '10:50 ص' },
  { title: 'فتح المظاريف', actor: 'د. سامي العتيبي · عضو لجنة فتح المظاريف', note: 'فُتحت 3 مظاريف بحضور أعضاء اللجنة', date: '15 أكتوبر 2026', time: '10:50 ص' },
  { title: 'إحالة إلى لجنة فتح المظاريف', actor: 'أ. ريم القحطاني · موظف المشتريات', note: '3 عروض مستلمة', date: '15 أكتوبر 2026', time: '10:50 ص' },
  { title: 'تسجيل استلام عرض', actor: 'أ. ريم القحطاني · موظف المشتريات', note: 'شركة الخليج للتوريدات العامة — مظروف مغلق', date: '15 أكتوبر 2026', time: '10:50 ص' },
  { title: 'تسجيل استلام عرض', actor: 'أ. ريم القحطاني · موظف المشتريات', note: 'مؤسسة الرواد للتجهيزات المكتبية — مظروف مغلق', date: '15 أكتوبر 2026', time: '10:50 ص' },
  { title: 'تسجيل استلام عرض', actor: 'أ. ريم القحطاني · موظف المشتريات', note: 'شركة الحلول التقنية المتقدمة — مظروف مغلق', date: '15 أكتوبر 2026', time: '10:50 ص' },
  { title: 'إصدار طلب عروض الأسعار', actor: 'أ. ريم القحطاني · موظف المشتريات', note: 'أُرسل إلى 3 موردين بالبريد — RFQ-2026-0001', date: '15 أكتوبر 2026', time: '10:50 ص' },
  { title: 'تحديد طريقة الشراء', actor: 'أ. ريم القحطاني · موظف المشتريات', note: 'عروض أسعار — التكلفة التقديرية ضمن سقف عروض الأسعار', date: '15 أكتوبر 2026', time: '10:50 ص' },
  { title: 'اعتماد الطلب', actor: 'د. عبدالله الحربي · الإدارة العليا', note: 'اعتُمد الطلب وأُحيل إلى قسم المشتريات', date: '15 أكتوبر 2026', time: '10:50 ص' },
  { title: 'إرسال الطلب للاعتماد', actor: 'م. خالد الزهراني · الإدارة الطالبة', note: '', date: '15 أكتوبر 2026', time: '10:50 ص' },
  { title: 'إنشاء الطلب', actor: 'م. خالد الزهراني · الإدارة الطالبة', note: 'حُفظ كمسودة', date: '15 أكتوبر 2026', time: '10:50 ص' },
]
 
// المرفقات (غيّر قيمة url إلى رابط الملف الحقيقي ليشتغل التحميل)
const attachments = [
  { id: 1, name: 'مواصفات_أجهزة_المعمل.pdf', size: '1.2 م.ب', by: 'م. خالد الزهراني', date: '25 سبتمبر 2026', url: '/files/مواصفات_أجهزة_المعمل.pdf' },
  { id: 2, name: 'صور_الأجهزة_الحالية.zip', size: '5.2 م.ب', by: 'م. خالد الزهراني', date: '25 سبتمبر 2026', url: '/files/صور_الأجهزة_الحالية.zip' },
]
 
const fmt = (n) => n.toLocaleString('en-US')
 
/* ==================== أنماط مشتركة ==================== */
const cardCls = 'bg-white dark:bg-[#0b1b2d] rounded-[24px]'
const sectionTitle = 'text-base font-bold text-slate-900 dark:text-white mb-4'
const thCls = 'px-4 py-5 text-sm font-medium text-slate-500 dark:text-slate-400 text-center'
const tdCls = 'px-4 py-9 text-sm text-center text-slate-900 dark:text-slate-100'
 
/* ==================== الصفحة ==================== */
export default function EnvelopesOpened() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('log')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeLog, setActiveLog] = useState(0)
 
  // الأرقام داخل الدوائر مطابقة للتصميم (1 و 1)
  // لو بدك تكون حسب العدد الفعلي: attachments.length و logItems.length
  const tabs = [
    { id: 'data', label: 'البيانات' },
    { id: 'attachments', label: 'المرفقات', count: 1 },
    { id: 'log', label: 'سجل الإجراءات', count: 1 },
  ]
 
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#f5f5f5] dark:bg-[#071322] text-slate-800 dark:text-slate-100 flex flex-row transition-colors duration-200"
      style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
    >
      {/* ==================== القائمة الجانبية ==================== */}
      <aside className="hidden lg:block w-[clamp(240px,18.4vw,353px)] shrink-0 bg-white dark:bg-[#0b1b2d] sticky top-0 h-screen overflow-y-auto select-none z-20 dark:border-l dark:border-slate-800/80">
        <SidebarContent />
      </aside>
 
      {/* ==================== المحتوى الرئيسي ==================== */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* الهيدر */}
        <header className="h-16 bg-white dark:bg-[#0b1b2d] px-4 lg:pl-[88px] lg:pr-6 flex items-center justify-between gap-4 sticky top-0 z-10 dark:border-b dark:border-slate-800/80">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label="القائمة"
            >
              <i className="fa-solid fa-bars text-lg" />
            </button>
            <nav className="flex items-center gap-2 min-w-0 overflow-hidden whitespace-nowrap text-[13px] sm:text-[15px] text-slate-500 dark:text-slate-400">
              <Link to="/dashboard" className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
                نظام إدارة المشتريات - الأزهر
              </Link>
              <i className="fa-solid fa-angle-left text-[11px] text-slate-400" />
              <Link
                to="/dashboard"
                className="font-bold text-slate-900 dark:text-slate-200 hover:text-slate-700 dark:hover:text-white transition-colors"
              >
                الإدارة الطالبة
              </Link>
              <i className="fa-solid fa-angle-left text-[11px] text-slate-400" />
              <Link to="/my-orders" className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
                طلباتي
              </Link>
              <i className="fa-solid fa-angle-left text-[11px] text-slate-400" />
              <span>تم فتح المظاريف</span>
            </nav>
          </div>
 
          <div className="hidden md:flex flex-1 max-w-[345px]">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="بحث"
                className="w-full h-10 bg-[#f7f7f7] dark:bg-[#0f243a] border border-slate-300 dark:border-slate-700 rounded-full pr-12 pl-4 text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-[#01B0F5]"
              />
              <button type="button" aria-label="بحث" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">
                <SearchIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
 
          <div className="flex items-center gap-4">
            <NotificationMenu />
            <span className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-slate-700" />
            <LanguageMenu />
          </div>
        </header>
 
        {/* ==================== محتوى الصفحة ==================== */}
        <main className="w-full flex-1 px-4 sm:px-6 lg:pl-10 lg:pr-6 pt-10 pb-12 space-y-6 max-w-[1400px]">
          {/* رجوع */}
          <button
            type="button"
            onClick={() => navigate('/my-orders')}
            className="flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-slate-200 hover:opacity-70 transition-opacity cursor-pointer"
          >
            <i className="fa-solid fa-angle-right text-xs" />
            <span>رجوع</span>
          </button>
 
          {/* ترويسة الطلب (بدون كرت) + أزرار اليسار */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 bg-[#e5e7eb] dark:bg-slate-800 px-3 py-1 rounded-md">
                  PR-2026-0001
                </span>
                <span className="inline-flex items-center gap-1.5 h-6 px-3 rounded-md bg-[#e8f9ef] dark:bg-emerald-950/50 text-[#1fbb5a] text-xs font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
                  تم فتح المظاريف
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                أجهزة حاسوب لمعمل الحاسب الآلي
              </h1>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">كلية الهندسة · م. خالد الزهراني</p>
            </div>
 
            <div className="flex items-center gap-4 w-full lg:w-auto">
              <button
                type="button"
                onClick={() => navigate('/rfq-preview')}
                className="flex-1 lg:flex-none lg:w-[270px] h-12 rounded-full border border-[#828282] dark:border-slate-600 text-sm font-medium text-[#000000] dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 transition-all cursor-pointer"
              >
                طلب العروض
              </button>
              <button
                type="button"
                onClick={() => navigate('/envelopes-minutes')}
                className="flex-1 lg:flex-none lg:w-[270px] h-12 rounded-full border border-[#828282] dark:border-slate-600 text-sm font-medium text-[#000000] dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 transition-all cursor-pointer"
              >
                المحضر
              </button>
            </div>
          </div>
 
          {/* ثلاثة كروت: أين الطلب الآن / بانتظار / الخطوة التالية */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-[#0b1b2d] rounded-2xl px-5 py-4 flex items-center gap-3">
              <i className="fa-solid fa-location-dot text-lg text-[#000000] dark:text-white shrink-0" />
              <div className="text-right">
                <p className="text-base font-bold text-slate-900 dark:text-white">أين الطلب الآن</p>
                <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-0.5">اكتملت المرحلة الأولى</p>
              </div>
            </div>
 
            <div className="bg-white dark:bg-[#0b1b2d] rounded-2xl px-5 py-4 flex items-center gap-3">
              <i className="fa-solid fa-circle-user text-xl text-[#000000] dark:text-white shrink-0" />
              <div className="text-right">
                <p className="text-base font-bold text-slate-900 dark:text-white">بانتظار</p>
                <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-0.5">لا أحد</p>
              </div>
            </div>
 
            <div className="bg-white dark:bg-[#0b1b2d] rounded-2xl px-5 py-4 flex items-center gap-3">
              <i className="fa-solid fa-circle-arrow-left text-xl text-[#000000] dark:text-white shrink-0" />
              <div className="text-right">
                <p className="text-base font-bold text-slate-900 dark:text-white">الخطوة التالية</p>
                <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-0.5">جاهز للمرحلة التالية (اللجنة الفنية)</p>
              </div>
            </div>
          </div>
 
          {/* شريط: الطلب معتمد ومقفل */}
          <div className="bg-white dark:bg-[#0b1b2d] rounded-2xl border border-[#828282]/70 dark:border-slate-600 px-6 py-5 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <i className="fa-solid fa-lock text-lg text-[#000000] dark:text-white shrink-0" />
              <div className="text-right">
                <button
                  type="button"
                  onClick={() => navigate('/approved-order')}
                  className="text-base font-bold text-slate-900 dark:text-white hover:underline cursor-pointer text-right"
                >
                  الطلب معتمد ومقفل للتعديل
                </button>
                <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-1">
                  لا يمكن تغيير بيانات الطلب بعد اعتماده. أي تعديل يتم عبر طلب تعديل رسمي يُرفع للإدارة العليا ويُوثّق في السجل.
                </p>
              </div>
            </div>
            <button
              type="button"
              className="h-8 w-[195px] max-w-full rounded-full border border-[#007DEA] text-[#007DEA] text-xs font-medium hover:bg-[#e4f4fd] dark:hover:bg-[#0f2c45] transition-all cursor-pointer"
            >
              طلب تعديل رسمي
            </button>
          </div>
 
          {/* مراحل الطلب */}
          <div className={`${cardCls} p-6`}>
            <h2 className="text-base font-bold text-slate-900 dark:text-white pb-4 mb-5 border-b border-slate-200 dark:border-slate-800">
              مراحل الطلب
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="rounded-[20px] border border-[#2EC48A] bg-[#EBFDF5] dark:bg-emerald-950/30 dark:border-emerald-700 px-4 py-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0B4A32] text-white flex items-center justify-center shrink-0">
                    <CheckIcon className="w-5 h-5" />
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-semibold text-[#0B4A32] dark:text-emerald-300">الخطوة {step.num}</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">{step.label}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">مكتملة</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
 
          {/* التبويبات + المحتوى */}
          <div className={`${cardCls} px-6 pt-4 pb-8`}>
            {/* شريط التبويبات */}
            <div className="flex items-center gap-8 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 py-3 text-base font-medium transition-colors cursor-pointer ${
                    activeTab === tab.id
                      ? 'text-[#007DEA] dark:text-[#01B0F5]'
                      : 'text-slate-900 dark:text-slate-200 hover:text-[#007DEA]'
                  }`}
                >
                  <span>{tab.label}</span>
                  {tab.count && (
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#d9d9d9] dark:bg-slate-700 text-slate-800 dark:text-slate-100 text-xs font-medium">
                      {tab.count}
                    </span>
                  )}
                  {activeTab === tab.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#007DEA] dark:bg-[#01B0F5]" />
                  )}
                </button>
              ))}
            </div>
 
            {/* ==================== تبويب البيانات ==================== */}
            {activeTab === 'data' && (
              <div className="pt-8 space-y-10">
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(320px,36%)] gap-6 items-start">
                  {/* اليمين: المبرر + جدول الأصناف */}
                  <div className="space-y-8 px-1">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">المبرر</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        تحديث أجهزة معمل الحاسب (قاعة 214) التي تجاوز عمرها سبع سنوات ولم تعد تدعم البرامج الهندسية المقررة في الخطة الدراسية.
                      </p>
                    </div>
 
                    <div>
                      <h3 className={sectionTitle}>الأصناف والخدمات</h3>
                      <div className="overflow-x-auto rounded-[20px] border border-slate-200 dark:border-slate-700/80">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-[#E8F4FD] dark:bg-[#0c2438]">
                              <th className={`${thCls} w-14`}>#</th>
                              <th className={thCls}>الصنف/الخدمة/المواصفات</th>
                              <th className={thCls}>الكمية</th>
                              <th className={thCls}>سعر الوحدة التقديري</th>
                              <th className={thCls}>الإجمالي التقديري</th>
                            </tr>
                          </thead>
                          <tbody>
                            {orderItems.map((item) => (
                              <tr key={item.num} className="border-b border-slate-200 dark:border-slate-700/60">
                                <td className={`${tdCls} font-bold`}>{item.num}</td>
                                <td className={tdCls}>{item.name}</td>
                                <td className={tdCls}>{item.qty} {item.unit}</td>
                                <td className={tdCls}>{fmt(item.unitPrice)} ش</td>
                                <td className={tdCls}>{fmt(item.total)} ش</td>
                              </tr>
                            ))}
                          </tbody>
                          <tfoot>
                            <tr>
                              <td colSpan={5} className="bg-[#E8F4FD] dark:bg-[#0c2438] px-6 py-3">
                                <div className="flex items-center justify-between text-sm">
                                  <span className="font-medium text-slate-600 dark:text-slate-300">إجمالي التكلفة التقديرية</span>
                                  <span className="font-bold text-[#000000] dark:text-white">{fmt(orderTotal)} ش</span>
                                </div>
                              </td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  </div>
 
                  {/* اليسار: بطاقة المعلومات */}
                  <div className="bg-[#E8F4FD] dark:bg-[#0c2438] rounded-[24px] px-6 py-3 lg:mt-8">
                    {infoRows.map(({ label, value }, idx) => (
                      <div
                        key={label}
                        className={`flex items-center justify-between gap-4 py-3.5 text-sm ${
                          idx !== infoRows.length - 1 ? 'border-b border-slate-300/60 dark:border-slate-600/60' : ''
                        }`}
                      >
                        <span className="text-slate-600 dark:text-slate-400">{label}</span>
                        <span className="font-medium text-slate-900 dark:text-white">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
 
                {/* جدول مقارنة العروض */}
                <div className="px-1">
                  <h3 className={sectionTitle}>الأصناف والخدمات</h3>
                  <div className="overflow-x-auto rounded-[20px] border border-slate-200 dark:border-slate-700/80">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-[#E8F4FD] dark:bg-[#0c2438]">
                          <th className={thCls}>الصنف</th>
                          <th className={thCls}>الكمية</th>
                          <th className={thCls}>التقديري للوحدة</th>
                          {suppliers.map((s, i) => (
                            <th key={i} className="px-4 py-4 text-center text-slate-500 dark:text-slate-400">
                              <span className="block text-sm font-medium">{s.name}</span>
                              <span className="block text-[11px] font-normal mt-0.5">{s.envelopes} مظروف</span>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {compareItems.map((item) => (
                          <tr key={item.name} className="border-b border-slate-200 dark:border-slate-700/60">
                            <td className={`${tdCls} font-medium`}>{item.name}</td>
                            <td className={tdCls}>{item.qty} {item.unit}</td>
                            <td className={tdCls}>{fmt(item.estimate)} ش</td>
                            {item.offers.map((price, i) => (
                              <td key={i} className={tdCls}>{fmt(price)} ش</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan={3 + suppliers.length} className="bg-[#E8F4FD] dark:bg-[#0c2438] px-6 py-3">
                            <div className="flex items-center justify-between text-sm">
                              <span className="font-medium text-slate-600 dark:text-slate-300">إجمالي التكلفة التقديرية</span>
                              <span className="font-bold text-[#000000] dark:text-white">{fmt(compareTotal)} ش</span>
                            </div>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            )}
 
            {/* ==================== تبويب المرفقات ==================== */}
            {activeTab === 'attachments' && (
              <div className="pt-6 space-y-4">
                {attachments.map((file) => (
                  <div
                    key={file.id}
                    className="flex items-center justify-between gap-4 px-4 py-2.5 bg-[#E8F4FD] dark:bg-[#0c2438] rounded-xl border border-[#d3e8f8] dark:border-slate-700"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <i className="fa-solid fa-file text-[#007DEA] text-lg shrink-0" />
                      <div className="text-right min-w-0">
                        <p className="text-xs font-bold text-slate-900 dark:text-white truncate">{file.name}</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                          {file.size} · أرفقه {file.by} · {file.date}
                        </p>
                      </div>
                    </div>
                    <a
                      href={file.url}
                      download={file.name}
                      aria-label={`تحميل ${file.name}`}
                      title="تحميل"
                      className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-[#007DEA] hover:bg-white/70 dark:hover:bg-slate-700 transition-colors cursor-pointer shrink-0"
                    >
                      <DownloadIcon className="w-[18px] h-[18px]" />
                    </a>
                  </div>
                ))}
              </div>
            )}
 
            {/* ==================== تبويب سجل الإجراءات ==================== */}
            {activeTab === 'log' && (
              <div className="pt-6 pb-8 space-y-12">
                {/* شريط: الطلب معتمد ومقفل للتعديل */}
                <div className="flex items-center gap-2.5 bg-[#f5f5f5] dark:bg-[#0c1f33] rounded-2xl px-6 py-5 text-base text-slate-500 dark:text-slate-400">
                  <i className="fa-solid fa-lock" />
                  <span>الطلب معتمد ومقفل للتعديل</span>
                </div>
 
                {/* الخط الزمني */}
                <ul className="mr-6">
                  {logItems.map((item, idx) => {
                    const isLast = idx === logItems.length - 1
                    return (
                      <li
                        key={idx}
                        className={`relative flex items-start justify-between gap-4 pr-10 ${isLast ? '' : 'pb-10'}`}
                      >
                        {/* الخط الواصل بين الدائرة والتي بعدها */}
                        {!isLast && (
                          <span
                            aria-hidden="true"
                            className="absolute right-[11px] top-3 -bottom-3 w-0.5 bg-slate-500 dark:bg-slate-600"
                          />
                        )}
 
                        {/* الدائرة */}
                        <button
                          type="button"
                          onClick={() => setActiveLog(idx)}
                          aria-label={`تحديد: ${item.title}`}
                          className={`absolute right-0 top-0 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer transition-all ${
                            idx === activeLog
                              ? 'bg-[#007DEA]'
                              : 'bg-white dark:bg-[#0b1b2d] border-2 border-slate-500 dark:border-slate-500 hover:border-[#007DEA]'
                          }`}
                        >
                          {idx === activeLog && <CheckIcon className="w-3.5 h-3.5 text-white" />}
                        </button>
 
                        {/* النص */}
                        <div className="text-right min-w-0">
                          <p className="text-base font-bold text-slate-900 dark:text-white">{item.title}</p>
                          <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-2.5">{item.actor}</p>
                          {item.note && (
                            <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-2.5">{item.note}</p>
                          )}
                        </div>
 
                        {/* التاريخ (يسار) */}
                        <span className="text-sm leading-6 text-slate-700 dark:text-slate-300 whitespace-nowrap shrink-0">
                          {item.date} في {item.time}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
          </div>
        </main>
      </div>
 
      {/* ==================== القائمة الجانبية للموبايل ==================== */}
      <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className={`fixed top-0 right-0 w-[300px] max-w-[85vw] h-full bg-white dark:bg-[#0b1b2d] shadow-2xl z-10 overflow-y-auto select-none transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="إغلاق القائمة"
            className="absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-10"
          >
            <i className="fa-solid fa-xmark text-lg" />
          </button>
          <SidebarContent onNavigate={() => setIsMobileMenuOpen(false)} />
        </div>
      </div>
    </div>
  )
}