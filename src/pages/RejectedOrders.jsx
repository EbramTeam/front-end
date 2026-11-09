// import { useState, useRef, useEffect } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { logo, userHani, shieldIcon, calendarClock } from '../assets/images'
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

// /* ==================== أنماط مشتركة ==================== */

// const gradientBtn =
//   'bg-gradient-to-r from-[#007DEA] to-[#01B0F5] hover:brightness-95 text-[#000000] font-bold transition-all cursor-pointer'

// const fieldCls =
//   'w-full h-14 bg-[#F4F4F4] dark:bg-[#0c1f33] border-[0.5px] border-[#828282] dark:border-slate-700 rounded-full text-sm text-[#000000] dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-[#01B0F5] focus:ring-1 focus:ring-[#01B0F5] transition-all'

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

// /* ==================== منتقي التاريخ (Date Picker) ==================== */

// const MONTHS = [
//   'January', 'February', 'March', 'April', 'May', 'June',
//   'July', 'August', 'September', 'October', 'November', 'December',
// ]
// const WEEKDAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

// const pad = (n) => String(n).padStart(2, '0')

// const formatDate = (d) =>
//   `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`

// const formatTime = (t) => {
//   const [h, m] = (t || '09:41').split(':').map(Number)
//   return `${h % 12 || 12}:${pad(m)} ${h >= 12 ? 'PM' : 'AM'}`
// }

// const isSameDay = (a, b) =>
//   !!a &&
//   !!b &&
//   a.getFullYear() === b.getFullYear() &&
//   a.getMonth() === b.getMonth() &&
//   a.getDate() === b.getDate()

// const ChevronIcon = ({ dir = 'right', ...props }) => (
//   <svg
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth={2}
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     aria-hidden="true"
//     {...props}
//   >
//     <path d={dir === 'right' ? 'm9 6 6 6-6 6' : 'm15 6-6 6 6 6'} />
//   </svg>
// )

// function DatePicker({ value, onChange, time, onTimeChange, placeholder }) {
//   const today = new Date()
//   const [open, setOpen] = useState(false)
//   const [viewYear, setViewYear] = useState((value || today).getFullYear())
//   const [viewMonth, setViewMonth] = useState((value || today).getMonth())
//   const wrapRef = useRef(null)
//   const timeRef = useRef(null)

//   useEffect(() => {
//     if (!open) return
//     const onDown = (e) => {
//       if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
//     }
//     const onKey = (e) => {
//       if (e.key === 'Escape') setOpen(false)
//     }
//     document.addEventListener('mousedown', onDown)
//     document.addEventListener('keydown', onKey)
//     return () => {
//       document.removeEventListener('mousedown', onDown)
//       document.removeEventListener('keydown', onKey)
//     }
//   }, [open])

//   const toggle = () => {
//     if (!open) {
//       const base = value || today
//       setViewYear(base.getFullYear())
//       setViewMonth(base.getMonth())
//     }
//     setOpen((o) => !o)
//   }

//   const goMonth = (delta) => {
//     const d = new Date(viewYear, viewMonth + delta, 1)
//     setViewYear(d.getFullYear())
//     setViewMonth(d.getMonth())
//   }

//   const openTimePicker = () => {
//     const el = timeRef.current
//     if (!el) return
//     try {
//       el.showPicker()
//     } catch {
//       el.focus()
//     }
//   }

//   const firstWeekday = new Date(viewYear, viewMonth, 1).getDay()
//   const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()
//   const cells = [
//     ...Array(firstWeekday).fill(null),
//     ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
//   ]

//   return (
//     <div className="relative" ref={wrapRef}>
//       <input
//         type="text"
//         readOnly
//         value={value ? `${formatDate(value)} - ${formatTime(time)}` : ''}
//         onClick={toggle}
//         placeholder={placeholder}
//         className={`${fieldCls} pr-5 pl-12 cursor-pointer`}
//       />
//       <button
//         type="button"
//         onClick={toggle}
//         aria-label="اختيار التاريخ"
//         className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center cursor-pointer"
//       >
//         <img
//           src={calendarClock}
//           alt="تقويم"
//           className="w-5 h-5 object-contain opacity-80 dark:invert"
//         />
//       </button>

//       {open && (
//         <div
//           dir="ltr"
//           className="absolute left-0 top-full mt-2 z-30 w-[280px] bg-white dark:bg-[#0f243a] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-slate-100 dark:border-slate-800 p-4 text-[#000000] dark:text-slate-100 select-none"
//         >
//           {/* رأس التقويم */}
//           <div className="flex items-center justify-between mb-3">
//             <div className="flex items-center gap-1 text-sm font-semibold">
//               <span>
//                 {MONTHS[viewMonth]} {viewYear}
//               </span>
//               <ChevronIcon className="w-3.5 h-3.5" />
//             </div>
//             <div className="flex items-center gap-3">
//               <button
//                 type="button"
//                 onClick={() => goMonth(-1)}
//                 aria-label="الشهر السابق"
//                 className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
//               >
//                 <ChevronIcon dir="left" className="w-4 h-4" />
//               </button>
//               <button
//                 type="button"
//                 onClick={() => goMonth(1)}
//                 aria-label="الشهر التالي"
//                 className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
//               >
//                 <ChevronIcon dir="right" className="w-4 h-4" />
//               </button>
//             </div>
//           </div>

//           {/* أيام الأسبوع */}
//           <div className="grid grid-cols-7 text-center text-[10px] font-medium text-slate-400 mb-1">
//             {WEEKDAYS.map((d) => (
//               <span key={d}>{d}</span>
//             ))}
//           </div>

//           {/* الأيام */}
//           <div className="grid grid-cols-7 gap-y-1 text-center">
//             {cells.map((day, i) => {
//               if (!day) return <span key={`empty-${i}`} />
//               const date = new Date(viewYear, viewMonth, day)
//               const isSelected = isSameDay(date, value)
//               const isToday = isSameDay(date, today)
//               return (
//                 <button
//                   key={day}
//                   type="button"
//                   onClick={() => onChange(date)}
//                   className={`mx-auto w-9 h-9 rounded-full text-sm flex items-center justify-center transition-colors cursor-pointer ${
//                     isSelected
//                       ? 'bg-[#DCEBFF] text-[#007DEA] font-bold'
//                       : isToday
//                         ? 'text-[#007DEA] font-medium hover:bg-slate-100 dark:hover:bg-slate-800'
//                         : 'hover:bg-slate-100 dark:hover:bg-slate-800'
//                   }`}
//                 >
//                   {day}
//                 </button>
//               )
//             })}
//           </div>

//           {/* الوقت */}
//           <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
//             <span className="text-sm">Time</span>
//             <button
//               type="button"
//               onClick={openTimePicker}
//               className="px-3 py-1 rounded-full bg-[#DCEBFF] text-[#007DEA] text-sm font-medium cursor-pointer"
//             >
//               {formatTime(time)}
//             </button>
//             <input
//               ref={timeRef}
//               type="time"
//               value={time}
//               onChange={(e) => e.target.value && onTimeChange(e.target.value)}
//               tabIndex={-1}
//               aria-hidden="true"
//               className="absolute w-0 h-0 opacity-0 pointer-events-none"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// /* ==================== صفحة مرفوض / ملغى ==================== */

// export default function RejectedOrders() {
//   const navigate = useNavigate()
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [globalSearch, setGlobalSearch] = useState('')

//   // فلترة الطلبات
//   const [filterSearch, setFilterSearch] = useState('')
//   const [fromDate, setFromDate] = useState(null)
//   const [fromTime, setFromTime] = useState('09:41')
//   const [toDate, setToDate] = useState(null)
//   const [toTime, setToTime] = useState('09:41')
//   const [selectedStatus, setSelectedStatus] = useState('rejected')

//   // أزرار الفلترة للحالات
//   const statusPills = [
//     { id: 'all', label: 'الكل', dotColor: null },
//     { id: 'draft', label: 'مسودة', dotColor: 'bg-[#8A8A8A]' },
//     { id: 'pending', label: 'بانتظار الاعتماد', dotColor: 'bg-[#FF8A1F]' },
//     { id: 'returned', label: 'مُرجع للتعديل', dotColor: 'bg-[#FF2D2D]' },
//     { id: 'rejected', label: 'مرفوض / ملغى', dotColor: 'bg-[#ef4444]' },
//   ]

//   const handlePillClick = (id) => {
//     if (id === 'rejected') {
//       setSelectedStatus('rejected')
//     } else {
//       navigate('/my-orders')
//     }
//   }

//   const handleClearFilters = () => {
//     navigate('/my-orders')
//   }

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
//                 value={globalSearch}
//                 onChange={(e) => setGlobalSearch(e.target.value)}
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
//             {/* جرس الإشعارات */}
//             <NotificationMenu />

//             {/* فاصل عمودي */}
//             <span className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-slate-700"></span>

//             {/* قائمة اللغة */}
//             <LanguageMenu />
//           </div>
//         </header>

//         {/* ==================== محتوى الصفحة الرئيسي ==================== */}
//         <main className="w-full flex-1 px-4 sm:px-6 lg:pl-10 lg:pr-6 pt-10 pb-16 space-y-6 max-w-[1400px]">
//           {/* ترويسة الصفحة: العنوان والزر الإجرائي */}
//           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
//             <div className="text-right">
//               <h1 className="text-2xl sm:text-3xl font-extrabold text-[#000000] dark:text-white">
//                 طلباتي
//               </h1>
//               <p className="text-xs sm:text-[13px] text-[#000000] dark:text-slate-400 font-medium mt-1">
//                 4 طلبًا ضمن صلاحياتك
//               </p>
//             </div>

//             {/* زر إنشاء طلب جديد (تدرّج) */}
//             <button
//               onClick={() => navigate('/new-order')}
//               className={`inline-flex items-center justify-center gap-2 h-12 w-full sm:w-[273px] rounded-full text-xs sm:text-sm shadow-[0_4px_14px_rgba(1,176,245,0.25)] hover:shadow-lg self-start sm:self-auto ${gradientBtn}`}
//             >
//               <span>+ طلب شراء جديد</span>
//             </button>
//           </div>

//           {/* ==================== صندوق الفلترة والبحث ==================== */}
//           <div className="bg-white dark:bg-[#0b1b2d] rounded-[24px] p-5 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 dark:border-slate-800/80 space-y-6">
//             {/* الصف العلوي: البحث الرئيسي + التواريخ */}
//             <div className="grid grid-cols-1 md:grid-cols-[1fr_288px_288px] gap-4 sm:gap-6 items-center">
//               {/* حقل البحث (الأيقونة يمين) */}
//               <div className="relative">
//                 <input
//                   type="text"
//                   value={filterSearch}
//                   onChange={(e) => setFilterSearch(e.target.value)}
//                   placeholder="ابحث برقم الطلب أو العنوان أو اسم مقدم الطلب"
//                   className={`${fieldCls} pr-14 pl-5`}
//                 />
//                 <button
//                   type="button"
//                   aria-label="بحث"
//                   className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
//                 >
//                   <SearchIcon className="w-6 h-6" />
//                 </button>
//               </div>

//               {/* من التاريخ */}
//               <DatePicker
//                 value={fromDate}
//                 onChange={setFromDate}
//                 time={fromTime}
//                 onTimeChange={setFromTime}
//                 placeholder="من التاريخ"
//               />

//               {/* الي التاريخ */}
//               <DatePicker
//                 value={toDate}
//                 onChange={setToDate}
//                 time={toTime}
//                 onTimeChange={setToTime}
//                 placeholder="الي التاريخ"
//               />
//             </div>

//             {/* الصف السفلي: شارات فلترة الحالات */}
//             <div className="flex items-center gap-4 overflow-x-auto pb-1 justify-start">
//               {statusPills.map((pill) => {
//                 const isSelected = selectedStatus === pill.id
//                 return (
//                   <button
//                     key={pill.id}
//                     onClick={() => handlePillClick(pill.id)}
//                     className={`inline-flex items-center gap-3 h-[50px] px-6 rounded-full text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
//                       isSelected
//                         ? `${gradientBtn} shadow-sm`
//                         : 'bg-white dark:bg-[#0c1f33] border-[0.5px] border-[#828282] dark:border-slate-700 text-[#000000] dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-[#102740]'
//                     }`}
//                   >
//                     {pill.dotColor && (
//                       <span
//                         className={`w-3 h-3 rounded-full shrink-0 ${pill.dotColor}`}
//                       ></span>
//                     )}
//                     <span>{pill.label}</span>
//                   </button>
//                 )
//               })}
//             </div>
//           </div>

//           {/* ==================== بطاقة الحالة الفارغة (Empty State) ==================== */}
//           <div className="bg-white dark:bg-[#0b1b2d] rounded-[24px] shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 dark:border-slate-800/80 p-12 sm:p-20 text-center flex flex-col items-center justify-center min-h-[380px]">
//             {/* أيقونة البحث الفارغ */}
//             <div className="w-12 h-12 rounded-full border-[2.5px] border-[#000000] dark:border-slate-200 flex items-center justify-center mb-4 text-[#000000] dark:text-white">
//               <svg
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth={2.5}
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="w-5 h-5 -rotate-45"
//               >
//                 <circle cx="11" cy="11" r="8" />
//                 <line x1="21" y1="21" x2="16.65" y2="16.65" />
//               </svg>
//             </div>

//             {/* النص الرئيسي */}
//             <h3 className="text-base sm:text-[17px] font-bold text-[#000000] dark:text-white mb-2">
//               لا توجد طلبات مطابقة
//             </h3>

//             {/* النص الفرعي */}
//             <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mb-6">
//               جرّب تغيير كلمات البحث أو إزالة بعض عوامل التصفية
//             </p>

//             {/* زر مسح عوامل التصفية */}
//             <button
//               onClick={handleClearFilters}
//               className="inline-flex items-center justify-center px-8 h-10 rounded-full border border-slate-400 dark:border-slate-600 bg-white dark:bg-[#0c1f33] text-sm font-semibold text-[#000000] dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-[#102740] transition-colors cursor-pointer"
//             >
//               مسح عوامل التصفية
//             </button>
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











// import { useState, useRef, useEffect } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { logo, userHani, shieldIcon, calendarClock } from '../assets/images'
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
 
// // أيقونة "لا توجد نتائج": عدسة مكبّرة سوداء ممتلئة بداخلها علامة X
// const SearchXIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
//     <circle cx="10.5" cy="10.5" r="9" fill="currentColor" />
//     <path
//       d="M16.8 16.8 22.5 22.5"
//       stroke="currentColor"
//       strokeWidth={2.8}
//       strokeLinecap="round"
//     />
//     <path
//       d="m7 7 7 7M14 7l-7 7"
//       className="stroke-white dark:stroke-[#0b1b2d]"
//       strokeWidth={2.4}
//       strokeLinecap="round"
//     />
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
 
// /* ==================== أنماط مشتركة ==================== */
 
// const gradientBtn =
//   'bg-gradient-to-r from-[#007DEA] to-[#01B0F5] hover:brightness-95 text-[#000000] font-bold transition-all cursor-pointer'
 
// const fieldCls =
//   'w-full h-14 bg-[#F4F4F4] dark:bg-[#0c1f33] border-[0.5px] border-[#828282] dark:border-slate-700 rounded-full text-sm text-[#000000] dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-[#01B0F5] focus:ring-1 focus:ring-[#01B0F5] transition-all'
 
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
 
// /* ==================== منتقي التاريخ (Date Picker) ==================== */
 
// const MONTHS = [
//   'January', 'February', 'March', 'April', 'May', 'June',
//   'July', 'August', 'September', 'October', 'November', 'December',
// ]
// const WEEKDAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
 
// const pad = (n) => String(n).padStart(2, '0')
 
// const formatDate = (d) =>
//   `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`
 
// const formatTime = (t) => {
//   const [h, m] = (t || '09:41').split(':').map(Number)
//   return `${h % 12 || 12}:${pad(m)} ${h >= 12 ? 'PM' : 'AM'}`
// }
 
// const isSameDay = (a, b) =>
//   !!a &&
//   !!b &&
//   a.getFullYear() === b.getFullYear() &&
//   a.getMonth() === b.getMonth() &&
//   a.getDate() === b.getDate()
 
// const ChevronIcon = ({ dir = 'right', ...props }) => (
//   <svg
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth={2}
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     aria-hidden="true"
//     {...props}
//   >
//     <path d={dir === 'right' ? 'm9 6 6 6-6 6' : 'm15 6-6 6 6 6'} />
//   </svg>
// )
 
// function DatePicker({ value, onChange, time, onTimeChange, placeholder }) {
//   const today = new Date()
//   const [open, setOpen] = useState(false)
//   const [viewYear, setViewYear] = useState((value || today).getFullYear())
//   const [viewMonth, setViewMonth] = useState((value || today).getMonth())
//   const wrapRef = useRef(null)
//   const timeRef = useRef(null)
 
//   useEffect(() => {
//     if (!open) return
//     const onDown = (e) => {
//       if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
//     }
//     const onKey = (e) => {
//       if (e.key === 'Escape') setOpen(false)
//     }
//     document.addEventListener('mousedown', onDown)
//     document.addEventListener('keydown', onKey)
//     return () => {
//       document.removeEventListener('mousedown', onDown)
//       document.removeEventListener('keydown', onKey)
//     }
//   }, [open])
 
//   const toggle = () => {
//     if (!open) {
//       const base = value || today
//       setViewYear(base.getFullYear())
//       setViewMonth(base.getMonth())
//     }
//     setOpen((o) => !o)
//   }
 
//   const goMonth = (delta) => {
//     const d = new Date(viewYear, viewMonth + delta, 1)
//     setViewYear(d.getFullYear())
//     setViewMonth(d.getMonth())
//   }
 
//   const openTimePicker = () => {
//     const el = timeRef.current
//     if (!el) return
//     try {
//       el.showPicker()
//     } catch {
//       el.focus()
//     }
//   }
 
//   const firstWeekday = new Date(viewYear, viewMonth, 1).getDay()
//   const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()
//   const cells = [
//     ...Array(firstWeekday).fill(null),
//     ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
//   ]
 
//   return (
//     <div className="relative" ref={wrapRef}>
//       <input
//         type="text"
//         readOnly
//         value={value ? `${formatDate(value)} - ${formatTime(time)}` : ''}
//         onClick={toggle}
//         placeholder={placeholder}
//         className={`${fieldCls} pr-5 pl-12 cursor-pointer`}
//       />
//       <button
//         type="button"
//         onClick={toggle}
//         aria-label="اختيار التاريخ"
//         className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center cursor-pointer"
//       >
//         <img
//           src={calendarClock}
//           alt="تقويم"
//           className="w-5 h-5 object-contain opacity-80 dark:invert"
//         />
//       </button>
 
//       {open && (
//         <div
//           dir="ltr"
//           className="absolute left-0 top-full mt-2 z-30 w-[280px] bg-white dark:bg-[#0f243a] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-slate-100 dark:border-slate-800 p-4 text-[#000000] dark:text-slate-100 select-none"
//         >
//           {/* رأس التقويم */}
//           <div className="flex items-center justify-between mb-3">
//             <div className="flex items-center gap-1 text-sm font-semibold">
//               <span>
//                 {MONTHS[viewMonth]} {viewYear}
//               </span>
//               <ChevronIcon className="w-3.5 h-3.5" />
//             </div>
//             <div className="flex items-center gap-3">
//               <button
//                 type="button"
//                 onClick={() => goMonth(-1)}
//                 aria-label="الشهر السابق"
//                 className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
//               >
//                 <ChevronIcon dir="left" className="w-4 h-4" />
//               </button>
//               <button
//                 type="button"
//                 onClick={() => goMonth(1)}
//                 aria-label="الشهر التالي"
//                 className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
//               >
//                 <ChevronIcon dir="right" className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
 
//           {/* أيام الأسبوع */}
//           <div className="grid grid-cols-7 text-center text-[10px] font-medium text-slate-400 mb-1">
//             {WEEKDAYS.map((d) => (
//               <span key={d}>{d}</span>
//             ))}
//           </div>
 
//           {/* الأيام */}
//           <div className="grid grid-cols-7 gap-y-1 text-center">
//             {cells.map((day, i) => {
//               if (!day) return <span key={`empty-${i}`} />
//               const date = new Date(viewYear, viewMonth, day)
//               const isSelected = isSameDay(date, value)
//               const isToday = isSameDay(date, today)
//               return (
//                 <button
//                   key={day}
//                   type="button"
//                   onClick={() => onChange(date)}
//                   className={`mx-auto w-9 h-9 rounded-full text-sm flex items-center justify-center transition-colors cursor-pointer ${
//                     isSelected
//                       ? 'bg-[#DCEBFF] text-[#007DEA] font-bold'
//                       : isToday
//                         ? 'text-[#007DEA] font-medium hover:bg-slate-100 dark:hover:bg-slate-800'
//                         : 'hover:bg-slate-100 dark:hover:bg-slate-800'
//                   }`}
//                 >
//                   {day}
//                 </button>
//               )
//             })}
//           </div>
 
//           {/* الوقت */}
//           <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
//             <span className="text-sm">Time</span>
//             <button
//               type="button"
//               onClick={openTimePicker}
//               className="px-3 py-1 rounded-full bg-[#DCEBFF] text-[#007DEA] text-sm font-medium cursor-pointer"
//             >
//               {formatTime(time)}
//             </button>
//             <input
//               ref={timeRef}
//               type="time"
//               value={time}
//               onChange={(e) => e.target.value && onTimeChange(e.target.value)}
//               tabIndex={-1}
//               aria-hidden="true"
//               className="absolute w-0 h-0 opacity-0 pointer-events-none"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }
 
// /* ==================== صفحة مرفوض / ملغى ==================== */
 
// export default function RejectedOrders() {
//   const navigate = useNavigate()
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [globalSearch, setGlobalSearch] = useState('')
 
//   // فلترة الطلبات
//   const [filterSearch, setFilterSearch] = useState('')
//   const [fromDate, setFromDate] = useState(null)
//   const [fromTime, setFromTime] = useState('09:41')
//   const [toDate, setToDate] = useState(null)
//   const [toTime, setToTime] = useState('09:41')
//   const [selectedStatus, setSelectedStatus] = useState('rejected')
 
//   // عدد الطلبات المرفوضة / الملغاة (يظهر داخل الشارة المفعّلة)
//   const rejectedCount = 0
 
//   // أزرار الفلترة للحالات
//   const statusPills = [
//     { id: 'all', label: 'الكل', dotColor: null },
//     { id: 'draft', label: 'مسودة', dotColor: 'bg-[#8A8A8A]' },
//     { id: 'pending', label: 'بانتظار الاعتماد', dotColor: 'bg-[#FF8A1F]' },
//     { id: 'returned', label: 'مُرجع للتعديل', dotColor: 'bg-[#FF2D2D]' },
//     { id: 'opened', label: 'تم فتح المظاريف', dotColor: 'bg-[#22c55e]' },
//     { id: 'rejected', label: 'مرفوض / ملغى', dotColor: 'bg-[#22c55e]' },
//   ]
 
//   const handlePillClick = (id) => {
//     if (id === 'rejected') {
//       setSelectedStatus('rejected')
//     } else {
//       navigate('/my-orders')
//     }
//   }
 
//   const handleClearFilters = () => {
//     navigate('/my-orders')
//   }
 
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
//                 value={globalSearch}
//                 onChange={(e) => setGlobalSearch(e.target.value)}
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
//             {/* جرس الإشعارات */}
//             <NotificationMenu />
 
//             {/* فاصل عمودي */}
//             <span className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-slate-700"></span>
 
//             {/* قائمة اللغة */}
//             <LanguageMenu />
//           </div>
//         </header>
 
//         {/* ==================== محتوى الصفحة الرئيسي ==================== */}
//         <main className="w-full flex-1 px-4 sm:px-6 lg:pl-10 lg:pr-6 pt-10 pb-16 space-y-6 max-w-[1400px]">
//           {/* ترويسة الصفحة: العنوان والزر الإجرائي */}
//           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
//             <div className="text-right">
//               <h1 className="text-2xl sm:text-3xl font-extrabold text-[#000000] dark:text-white">
//                 طلباتي
//               </h1>
//               <p className="text-xs sm:text-[13px] text-[#000000] dark:text-slate-400 font-medium mt-1">
//                 4 طلبًا ضمن صلاحياتك
//               </p>
//             </div>
 
//             {/* زر إنشاء طلب جديد (تدرّج) */}
//             <button
//               onClick={() => navigate('/new-order')}
//               className={`inline-flex items-center justify-center gap-2 h-12 w-full sm:w-[273px] rounded-full text-xs sm:text-sm shadow-[0_4px_14px_rgba(1,176,245,0.25)] hover:shadow-lg self-start sm:self-auto ${gradientBtn}`}
//             >
//               <span>+ طلب شراء جديد</span>
//             </button>
//           </div>
 
//           {/* ==================== بطاقة واحدة: الفلترة + الحالة الفارغة ==================== */}
//           <div className="bg-white dark:bg-[#0b1b2d] rounded-[24px] p-5 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 dark:border-slate-800/80 space-y-6">
//             {/* الصف العلوي: البحث الرئيسي + التواريخ */}
//             <div className="grid grid-cols-1 md:grid-cols-[1fr_288px_288px] gap-4 sm:gap-6 items-center">
//               {/* حقل البحث (الأيقونة يمين) */}
//               <div className="relative">
//                 <input
//                   type="text"
//                   value={filterSearch}
//                   onChange={(e) => setFilterSearch(e.target.value)}
//                   placeholder="ابحث برقم الطلب أو العنوان أو اسم مقدم الطلب"
//                   className={`${fieldCls} pr-14 pl-5`}
//                 />
//                 <button
//                   type="button"
//                   aria-label="بحث"
//                   className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
//                 >
//                   <SearchIcon className="w-6 h-6" />
//                 </button>
//               </div>
 
//               {/* من التاريخ */}
//               <DatePicker
//                 value={fromDate}
//                 onChange={setFromDate}
//                 time={fromTime}
//                 onTimeChange={setFromTime}
//                 placeholder="من التاريخ"
//               />
 
//               {/* الي التاريخ */}
//               <DatePicker
//                 value={toDate}
//                 onChange={setToDate}
//                 time={toTime}
//                 onTimeChange={setToTime}
//                 placeholder="الي التاريخ"
//               />
//             </div>
 
//             {/* الصف السفلي: شارات فلترة الحالات */}
//             <div className="flex items-center gap-4 overflow-x-auto pb-1 justify-start">
//               {statusPills.map((pill) => {
//                 const isSelected = selectedStatus === pill.id
//                 return (
//                   <button
//                     key={pill.id}
//                     onClick={() => handlePillClick(pill.id)}
//                     className={`inline-flex items-center gap-3 h-[50px] px-6 rounded-full text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
//                       isSelected
//                         ? `${gradientBtn} shadow-sm`
//                         : 'bg-white dark:bg-[#0c1f33] border-[0.5px] border-[#828282] dark:border-slate-700 text-[#000000] dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-[#102740]'
//                     }`}
//                   >
//                     {pill.dotColor && (
//                       <span
//                         className={`w-3 h-3 rounded-full shrink-0 ${pill.dotColor}`}
//                       ></span>
//                     )}
//                     <span>{pill.label}</span>
//                     {isSelected && (
//                       <span className="mr-3 text-sm font-medium">{rejectedCount}</span>
//                     )}
//                   </button>
//                 )
//               })}
//             </div>
 
//             {/* ==================== الحالة الفارغة (Empty State) داخل نفس البطاقة ==================== */}
//             <div className="pt-14 pb-7 flex flex-col items-center justify-center text-center">
//               {/* أيقونة البحث الفارغ */}
//               <SearchXIcon className="w-9 h-9 text-[#000000] dark:text-white mb-6" />
 
//               {/* النص الرئيسي */}
//               <h3 className="text-base font-bold text-[#000000] dark:text-white mb-3">
//                 لا توجد طلبات مطابقة
//               </h3>
 
//               {/* النص الفرعي */}
//               <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mb-6">
//                 جرّب تغيير كلمات البحث أو إزالة بعض عوامل التصفية.
//               </p>
 
//               {/* زر مسح عوامل التصفية */}
//               <button
//                 type="button"
//                 onClick={handleClearFilters}
//                 className="inline-flex items-center justify-center w-full sm:w-[273px] h-12 rounded-full border border-[#000000] dark:border-slate-500 bg-white dark:bg-[#0c1f33] text-sm font-medium text-[#000000] dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-[#102740] transition-colors cursor-pointer"
//               >
//                 مسح عوامل التصفية
//               </button>
//             </div>
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









import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logo, userHani, shieldIcon, calendarClock } from '../assets/images'
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
 
// أيقونة "لا توجد نتائج": عدسة مكبّرة سوداء ممتلئة بداخلها علامة X
const SearchXIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <circle cx="10.5" cy="10.5" r="9" fill="currentColor" />
    <path
      d="M16.8 16.8 22.5 22.5"
      stroke="currentColor"
      strokeWidth={2.8}
      strokeLinecap="round"
    />
    <path
      d="m7 7 7 7M14 7l-7 7"
      className="stroke-white dark:stroke-[#0b1b2d]"
      strokeWidth={2.4}
      strokeLinecap="round"
    />
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
 
/* ==================== أنماط مشتركة ==================== */
 
const gradientBtn =
  'bg-gradient-to-r from-[#007DEA] to-[#01B0F5] hover:brightness-95 text-[#000000] font-bold transition-all cursor-pointer'
 
const fieldCls =
  'w-full h-14 bg-[#F4F4F4] dark:bg-[#0c1f33] border-[0.5px] border-[#828282] dark:border-slate-700 rounded-full text-sm text-[#000000] dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-[#01B0F5] focus:ring-1 focus:ring-[#01B0F5] transition-all'
 
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
 
/* ==================== منتقي التاريخ (Date Picker) ==================== */
 
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]
const WEEKDAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
 
const pad = (n) => String(n).padStart(2, '0')
 
const formatDate = (d) =>
  `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`
 
const formatTime = (t) => {
  const [h, m] = (t || '09:41').split(':').map(Number)
  return `${h % 12 || 12}:${pad(m)} ${h >= 12 ? 'PM' : 'AM'}`
}
 
const isSameDay = (a, b) =>
  !!a &&
  !!b &&
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate()
 
const ChevronIcon = ({ dir = 'right', ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d={dir === 'right' ? 'm9 6 6 6-6 6' : 'm15 6-6 6 6 6'} />
  </svg>
)
 
function DatePicker({ value, onChange, time, onTimeChange, placeholder }) {
  const today = new Date()
  const [open, setOpen] = useState(false)
  const [viewYear, setViewYear] = useState((value || today).getFullYear())
  const [viewMonth, setViewMonth] = useState((value || today).getMonth())
  const wrapRef = useRef(null)
  const timeRef = useRef(null)
 
  useEffect(() => {
    if (!open) return
    const onDown = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])
 
  const toggle = () => {
    if (!open) {
      const base = value || today
      setViewYear(base.getFullYear())
      setViewMonth(base.getMonth())
    }
    setOpen((o) => !o)
  }
 
  const goMonth = (delta) => {
    const d = new Date(viewYear, viewMonth + delta, 1)
    setViewYear(d.getFullYear())
    setViewMonth(d.getMonth())
  }
 
  const openTimePicker = () => {
    const el = timeRef.current
    if (!el) return
    try {
      el.showPicker()
    } catch {
      el.focus()
    }
  }
 
  const firstWeekday = new Date(viewYear, viewMonth, 1).getDay()
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()
  const cells = [
    ...Array(firstWeekday).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]
 
  return (
    <div className="relative" ref={wrapRef}>
      <input
        type="text"
        readOnly
        value={value ? `${formatDate(value)} - ${formatTime(time)}` : ''}
        onClick={toggle}
        placeholder={placeholder}
        className={`${fieldCls} pr-5 pl-12 cursor-pointer`}
      />
      <button
        type="button"
        onClick={toggle}
        aria-label="اختيار التاريخ"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center cursor-pointer"
      >
        <img
          src={calendarClock}
          alt="تقويم"
          className="w-5 h-5 object-contain opacity-80 dark:invert"
        />
      </button>
 
      {open && (
        <div
          dir="ltr"
          className="absolute left-0 top-full mt-2 z-30 w-[280px] bg-white dark:bg-[#0f243a] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-slate-100 dark:border-slate-800 p-4 text-[#000000] dark:text-slate-100 select-none"
        >
          {/* رأس التقويم */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1 text-sm font-semibold">
              <span>
                {MONTHS[viewMonth]} {viewYear}
              </span>
              <ChevronIcon className="w-3.5 h-3.5" />
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => goMonth(-1)}
                aria-label="الشهر السابق"
                className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <ChevronIcon dir="left" className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => goMonth(1)}
                aria-label="الشهر التالي"
                className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <ChevronIcon dir="right" className="w-4 h-4" />
              </button>
            </div>
          </div>
 
          {/* أيام الأسبوع */}
          <div className="grid grid-cols-7 text-center text-[10px] font-medium text-slate-400 mb-1">
            {WEEKDAYS.map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
 
          {/* الأيام */}
          <div className="grid grid-cols-7 gap-y-1 text-center">
            {cells.map((day, i) => {
              if (!day) return <span key={`empty-${i}`} />
              const date = new Date(viewYear, viewMonth, day)
              const isSelected = isSameDay(date, value)
              const isToday = isSameDay(date, today)
              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => onChange(date)}
                  className={`mx-auto w-9 h-9 rounded-full text-sm flex items-center justify-center transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#DCEBFF] text-[#007DEA] font-bold'
                      : isToday
                        ? 'text-[#007DEA] font-medium hover:bg-slate-100 dark:hover:bg-slate-800'
                        : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {day}
                </button>
              )
            })}
          </div>
 
          {/* الوقت */}
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
            <span className="text-sm">Time</span>
            <button
              type="button"
              onClick={openTimePicker}
              className="px-3 py-1 rounded-full bg-[#DCEBFF] text-[#007DEA] text-sm font-medium cursor-pointer"
            >
              {formatTime(time)}
            </button>
            <input
              ref={timeRef}
              type="time"
              value={time}
              onChange={(e) => e.target.value && onTimeChange(e.target.value)}
              tabIndex={-1}
              aria-hidden="true"
              className="absolute w-0 h-0 opacity-0 pointer-events-none"
            />
          </div>
        </div>
      )}
    </div>
  )
}
 
/* ==================== صفحة مرفوض / ملغى ==================== */
 
export default function RejectedOrders() {
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [globalSearch, setGlobalSearch] = useState('')
 
  // فلترة الطلبات
  const [filterSearch, setFilterSearch] = useState('')
  const [fromDate, setFromDate] = useState(null)
  const [fromTime, setFromTime] = useState('09:41')
  const [toDate, setToDate] = useState(null)
  const [toTime, setToTime] = useState('09:41')
  const [selectedStatus, setSelectedStatus] = useState('rejected')
 
  // عدد الطلبات المرفوضة / الملغاة (يظهر داخل الشارة المفعّلة)
  const rejectedCount = 0
 
  // أزرار الفلترة للحالات
  const statusPills = [
    { id: 'all', label: 'الكل', dotColor: null },
    { id: 'draft', label: 'مسودة', dotColor: 'bg-[#8A8A8A]' },
    { id: 'pending', label: 'بانتظار الاعتماد', dotColor: 'bg-[#FF8A1F]' },
    { id: 'returned', label: 'مُرجع للتعديل', dotColor: 'bg-[#FF2D2D]' },
    { id: 'opened', label: 'تم فتح المظاريف', dotColor: 'bg-[#22c55e]' },
    { id: 'rejected', label: 'مرفوض / ملغى', dotColor: 'bg-[#22c55e]' },
  ]
 
  const handlePillClick = (id) => {
    if (id === 'rejected') {
      setSelectedStatus('rejected')
    } else {
      navigate('/my-orders')
    }
  }
 
  const handleClearFilters = () => {
    navigate('/my-orders')
  }
 
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
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label="القائمة"
            >
              <i className="fa-solid fa-bars text-lg"></i>
            </button>
 
            <nav className="flex items-center gap-2 min-w-0 overflow-hidden whitespace-nowrap text-[13px] sm:text-[15px] text-slate-500 dark:text-slate-400">
              <Link
                to="/dashboard"
                className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
              >
                نظام إدارة المشتريات - الأزهر
              </Link>
              <i className="fa-solid fa-angle-left text-[11px] text-slate-400"></i>
              <Link
                to="/dashboard"
                className="font-bold text-[#000000] dark:text-slate-200 hover:text-slate-700 dark:hover:text-white transition-colors"
              >
                الإدارة الطالبة
              </Link>
              <i className="fa-solid fa-angle-left text-[11px] text-slate-400"></i>
              <Link
                to="/my-orders"
                className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
              >
                طلباتي
              </Link>
              <i className="fa-solid fa-angle-left text-[11px] text-slate-400"></i>
              <span>مرفوض / ملغى</span>
            </nav>
          </div>
 
          {/* منتصف الهيدر: شريط البحث الدائري */}
          <div className="hidden md:flex flex-1 max-w-[345px]">
            <div className="relative w-full">
              <input
                type="text"
                value={globalSearch}
                onChange={(e) => setGlobalSearch(e.target.value)}
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
            {/* جرس الإشعارات */}
            <NotificationMenu />
 
            {/* فاصل عمودي */}
            <span className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-slate-700"></span>
 
            {/* قائمة اللغة */}
            <LanguageMenu />
          </div>
        </header>
 
        {/* ==================== محتوى الصفحة الرئيسي ==================== */}
        <main className="w-full flex-1 px-4 sm:px-6 lg:pl-10 lg:pr-6 pt-10 pb-16 space-y-6 max-w-[1400px]">
          {/* ترويسة الصفحة: العنوان والزر الإجرائي */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div className="text-right">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#000000] dark:text-white">
                طلباتي
              </h1>
              <p className="text-sm sm:text-[15px] text-[#000000] dark:text-slate-400 font-medium mt-4">
                4 طلبًا ضمن صلاحياتك
              </p>
            </div>
 
            {/* زر إنشاء طلب جديد (تدرّج) */}
            <button
              onClick={() => navigate('/new-order')}
              className={`inline-flex items-center justify-center gap-2 h-12 w-full sm:w-[273px] rounded-full text-xs sm:text-sm shadow-[0_4px_14px_rgba(1,176,245,0.25)] hover:shadow-lg self-start sm:self-auto ${gradientBtn}`}
            >
              <span>+ طلب شراء جديد</span>
            </button>
          </div>
 
          {/* ==================== بطاقة واحدة: الفلترة + الحالة الفارغة ==================== */}
          <div className="bg-white dark:bg-[#0b1b2d] rounded-[24px] p-5 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 dark:border-slate-800/80 space-y-6">
            {/* الصف العلوي: البحث الرئيسي + التواريخ */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_288px_288px] gap-4 sm:gap-6 items-center">
              {/* حقل البحث (الأيقونة يمين) */}
              <div className="relative">
                <input
                  type="text"
                  value={filterSearch}
                  onChange={(e) => setFilterSearch(e.target.value)}
                  placeholder="ابحث برقم الطلب أو العنوان أو اسم مقدم الطلب"
                  className={`${fieldCls} pr-14 pl-5`}
                />
                <button
                  type="button"
                  aria-label="بحث"
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
                >
                  <SearchIcon className="w-6 h-6" />
                </button>
              </div>
 
              {/* من التاريخ */}
              <DatePicker
                value={fromDate}
                onChange={setFromDate}
                time={fromTime}
                onTimeChange={setFromTime}
                placeholder="من التاريخ"
              />
 
              {/* الي التاريخ */}
              <DatePicker
                value={toDate}
                onChange={setToDate}
                time={toTime}
                onTimeChange={setToTime}
                placeholder="الي التاريخ"
              />
            </div>
 
            {/* الصف السفلي: شارات فلترة الحالات */}
            <div className="flex items-center gap-4 overflow-x-auto pb-1 justify-start">
              {statusPills.map((pill) => {
                const isSelected = selectedStatus === pill.id
                return (
                  <button
                    key={pill.id}
                    onClick={() => handlePillClick(pill.id)}
                    className={`inline-flex items-center gap-3 h-[50px] px-6 rounded-full text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                      isSelected
                        ? 'bg-[#00B0F0] text-[#000000] shadow-sm'
                        : 'bg-white dark:bg-[#0c1f33] border-[0.5px] border-[#828282] dark:border-slate-700 text-[#000000] dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-[#102740]'
                    }`}
                  >
                    {pill.dotColor && (
                      <span
                        className={`w-3 h-3 rounded-full shrink-0 ${pill.dotColor}`}
                      ></span>
                    )}
                    <span>{pill.label}</span>
                    {isSelected && (
                      <span className="mr-3 text-sm font-medium">{rejectedCount}</span>
                    )}
                  </button>
                )
              })}
            </div>
 
            {/* ==================== الحالة الفارغة (Empty State) داخل نفس البطاقة ==================== */}
            <div className="pt-14 pb-7 flex flex-col items-center justify-center text-center">
              {/* أيقونة البحث الفارغ */}
              <SearchXIcon className="w-9 h-9 text-[#000000] dark:text-white mb-6" />
 
              {/* النص الرئيسي */}
              <h3 className="text-base font-bold text-[#000000] dark:text-white mb-3">
                لا توجد طلبات مطابقة
              </h3>
 
              {/* النص الفرعي */}
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mb-6">
                جرّب تغيير كلمات البحث أو إزالة بعض عوامل التصفية.
              </p>
 
              {/* زر مسح عوامل التصفية */}
              <button
                type="button"
                onClick={handleClearFilters}
                className="inline-flex items-center justify-center w-full sm:w-[273px] h-12 rounded-full border border-[#000000] dark:border-slate-500 bg-white dark:bg-[#0c1f33] text-sm font-medium text-[#000000] dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-[#102740] transition-colors cursor-pointer"
              >
                مسح عوامل التصفية
              </button>
            </div>
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