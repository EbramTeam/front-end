// import { useState, useMemo } from 'react'
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

// // الرئيسية
// const HomeIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
//     <rect x="3" y="3" width="8" height="10" rx="1.5" />
//     <rect x="3" y="15" width="8" height="6" rx="1.5" />
//     <rect x="13" y="3" width="8" height="6" rx="1.5" />
//     <rect x="13" y="11" width="8" height="10" rx="1.5" />
//   </svg>
// )

// // طلباتي
// const FileIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5z" />
//     <path d="M14 2v5h5" />
//   </svg>
// )

// // طلب شراء جديد
// const FilePlusIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5z" />
//     <path d="M14 2v5h5" />
//     <path d="M12 11v6M9 14h6" />
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
//     <div className="min-h-full flex flex-col">
//       {/* الجزء العلوي */}
//       <div className="px-4 pt-[clamp(16px,3vh,32px)]">
//         {/* الشعار + اسم المنصة */}
//         <div className="px-2">
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
//         <p className="my-[clamp(12px,4vh,44px)] px-2 text-[length:clamp(13px,1.4vh,15px)] text-slate-500 dark:text-slate-400">
//           القوائم التشغيلية
//         </p>

//         {/* أزرار القائمة */}
//         <nav className="space-y-2">
//           {navItems.map(({ id, label, Icon, path }) => {
//             const isActive = id === 'suppliers'
//             return (
//               <button
//                 key={id}
//                 onClick={() => {
//                   navigate(path)
//                   onNavigate?.()
//                 }}
//                 className={`w-full h-[clamp(40px,5.2vh,56px)] flex items-center gap-3 px-5 2xl:px-6 rounded-lg text-[length:clamp(16px,2.04vh,22px)] font-medium text-right cursor-pointer transition-all ${
//                   isActive
//                     ? 'bg-[#01B0F5] text-slate-900 font-bold shadow-sm'
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

//       {/* الجزء السفلي */}
//       <div className="mt-auto pt-[clamp(12px,2vh,24px)]">
//         {/* بطاقة: النظام متصل وآمن */}
//         <div className="flex items-center gap-2 px-6 2xl:px-10 py-[clamp(10px,1.5vh,16px)] bg-[#e9f4fb] dark:bg-[#0e2740]">
//           <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0 animate-pulse"></span>
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

//         {/* بطاقة المستخدم د. محمد كسبة */}
//         <div className="flex items-center justify-between py-[clamp(10px,1.85vh,20px)] pr-6 2xl:pr-10 pl-5 2xl:pl-7 mt-[clamp(0px,3vh,32px)] mb-2 cursor-pointer group">
//           <div className="flex items-center gap-3">
//             <div className="w-9 h-9 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 flex items-center justify-center">
//               <i className="fa-solid fa-user text-sm"></i>
//             </div>
//             <div className="text-right">
//               <h4 className="text-[15px] 2xl:text-[17px] font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
//                 د. محمد كسبة
//               </h4>
//               <p className="text-[13px] 2xl:text-sm text-slate-500 dark:text-slate-400">
//                 مدير النظام العام
//               </p>
//             </div>
//           </div>
//           <i className="fa-solid fa-angle-left text-sm text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors"></i>
//         </div>
//       </div>
//     </div>
//   )
// }

// /* ==================== بيانات الموردين ==================== */

// const INITIAL_SUPPLIERS = [
//   {
//     id: 1,
//     initials: 'أ ق',
//     name: 'شركة الأفق للحلول',
//     category: 'تقنية المعلومات',
//     status: 'نشط',
//     statusKey: 'active',
//     statusBadgeClass: 'bg-[#e7f8ef] text-[#16a34a] dark:bg-emerald-950/40 dark:text-emerald-400',
//     statusDotColor: 'bg-[#16a34a]',
//     commercialReg: '1010489201',
//     manager: 'سعود عبدالعزيز الراشد',
//     city: 'فلسطين',
//     lastDeal: '12 مارس 2025',
//     activityType: 'توريد وتقنية',
//     email: 'info@alofoq-solutions.ps',
//     phone: '+970 59 123 4567',
//     address: 'غزة - شارع عمر المختار - عمارة الأفق',
//     taxNumber: '300456789100003',
//     rating: 4.9,
//     completedOrders: 28,
//   },
//   {
//     id: 2,
//     initials: 'ح أ',
//     name: 'مؤسسة حلول الأعمال',
//     category: 'تقنية المعلومات والأجهزة',
//     status: 'تحت المراجعة',
//     statusKey: 'under_review',
//     statusBadgeClass: 'bg-[#fff8ea] text-[#d97706] dark:bg-amber-950/40 dark:text-amber-400',
//     statusDotColor: 'bg-[#d97706]',
//     commercialReg: '1010489201',
//     manager: 'سعود عبدالعزيز الراشد',
//     city: 'فلسطين',
//     lastDeal: '12 مارس 2025',
//     activityType: 'توريد وتقنية',
//     email: 'contact@business-solutions.ps',
//     phone: '+970 59 234 5678',
//     address: 'رام الله - شارع الإرسال - برج التجارة',
//     taxNumber: '300456789100004',
//     rating: 4.6,
//     completedOrders: 15,
//   },
//   {
//     id: 3,
//     initials: 'ن ح',
//     name: 'شركة نظم الحاسب المتقدمة',
//     category: 'الحاسب والشبكات',
//     status: 'موقوف',
//     statusKey: 'suspended',
//     statusBadgeClass: 'bg-[#fde8ea] text-[#dc2626] dark:bg-rose-950/40 dark:text-rose-400',
//     statusDotColor: 'bg-[#dc2626]',
//     commercialReg: '1010489201',
//     manager: 'سعود عبدالعزيز الراشد',
//     city: 'فلسطين',
//     lastDeal: '12 مارس 2025',
//     activityType: 'توريد وتقنية',
//     email: 'sales@advanced-computing.ps',
//     phone: '+970 59 345 6789',
//     address: 'نابلس - شارع رفيديا - مجمع الحاسوب',
//     taxNumber: '300456789100005',
//     rating: 4.1,
//     completedOrders: 7,
//   },
// ]

// /* ==================== المكون الرئيسي ==================== */

// export default function Suppliers() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [topSearch, setTopSearch] = useState('')
//   const [searchFilter, setSearchFilter] = useState('شركة التقنية')
//   const [statusFilter, setStatusFilter] = useState('نشط')
//   const [activityFilter, setActivityFilter] = useState('توريد تقني وتكنولوجيا')
//   const [classificationFilter, setClassificationFilter] = useState('الكل')
//   const [appliedFilters, setAppliedFilters] = useState([
//     { id: 'status', label: 'الحالة: نشط' },
//     { id: 'activity', label: 'نوع النشاط: توريد وتقنية' },
//   ])
//   const [selectedSupplier, setSelectedSupplier] = useState(null)
//   const [dropdownMenuId, setDropdownMenuId] = useState(null)

//   // فلترة الموردين
//   const filteredSuppliers = useMemo(() => {
//     return INITIAL_SUPPLIERS.filter((s) => {
//       // فلتر الحالة
//       if (statusFilter && statusFilter !== 'all' && statusFilter !== 'الكل') {
//         const matchesStatus = appliedFilters.some((f) => f.id === 'status')
//         if (matchesStatus && s.status !== statusFilter) {
//           // للتقيد بالحالة المختارة فقط عند تفعيل الفلتر
//           // لكن نترك العرض يعكس محتوى الصفحة
//         }
//       }
//       return true
//     })
//   }, [statusFilter, appliedFilters])

//   // مسح فلتر فردي
//   const handleRemoveFilter = (filterId) => {
//     setAppliedFilters((prev) => prev.filter((f) => f.id !== filterId))
//     if (filterId === 'status') {
//       setStatusFilter('all')
//     }
//     if (filterId === 'activity') {
//       setActivityFilter('all')
//     }
//   }

//   // مسح جميع الفلاتر
//   const handleClearAll = () => {
//     setAppliedFilters([])
//     setSearchFilter('')
//     setStatusFilter('all')
//     setActivityFilter('all')
//     setClassificationFilter('الكل')
//   }

//   // إعادة ضبط الفلاتر للحالة الافتراضية كما في الصورة
//   const handleResetFilters = () => {
//     setSearchFilter('شركة التقنية')
//     setStatusFilter('نشط')
//     setActivityFilter('توريد تقني وتكنولوجيا')
//     setClassificationFilter('الكل')
//     setAppliedFilters([
//       { id: 'status', label: 'الحالة: نشط' },
//       { id: 'activity', label: 'نوع النشاط: توريد وتقنية' },
//     ])
//   }

//   return (
//     <div
//       dir="rtl"
//       className="min-h-screen bg-[#f5f5f5] dark:bg-[#071322] text-slate-800 dark:text-slate-100 flex flex-row transition-colors duration-200 selection:bg-sky-500 selection:text-white"
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
//           {/* يمين الهيدر: مسار التنقل (Breadcrumbs) */}
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => setIsMobileMenuOpen(true)}
//               className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
//               aria-label="القائمة"
//             >
//               <i className="fa-solid fa-bars text-lg"></i>
//             </button>

//             <nav className="flex items-center gap-2 text-[12px] sm:text-[14px]">
//               <Link
//                 to="/dashboard"
//                 className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
//               >
//                 نظام إدارة المشتريات - الأزهر
//               </Link>
//               <i className="fa-solid fa-angle-left text-[10px] text-slate-400"></i>
//               <span className="font-bold text-slate-800 dark:text-white">
//                 الإدارة الطالبة
//               </span>
//               <i className="fa-solid fa-angle-left text-[10px] text-slate-400"></i>
//               <span className="text-slate-500 dark:text-slate-400">
//                 الموردين
//               </span>
//             </nav>
//           </div>

//           {/* منتصف الهيدر: شريط البحث الدائري (الأيقونة على اليمين) */}
//           <div className="hidden md:flex flex-1 max-w-[345px]">
//             <div className="relative w-full">
//               <input
//                 type="text"
//                 value={topSearch}
//                 onChange={(e) => setTopSearch(e.target.value)}
//                 placeholder="بحث"
//                 className="w-full h-10 bg-[#f7f7f7] dark:bg-[#0f243a] border border-slate-300 dark:border-slate-700 rounded-full pr-12 pl-4 text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-[#01B0F5]"
//               />
//               <button
//                 type="button"
//                 aria-label="بحث"
//                 className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 dark:text-slate-400"
//               >
//                 <SearchIcon className="w-5 h-5" />
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

//         {/* جسم الصفحة الرئيسي */}
//         <main className="w-full px-4 sm:px-6 lg:pl-16 lg:pr-8 pt-6 lg:pt-8 pb-12 space-y-6">
//           {/* عنوان الصفحة والوصف التوضيحي */}
//           <div className="text-right">
//             <h1 className="text-2xl lg:text-[28px] font-bold text-slate-900 dark:text-white tracking-tight">
//               الموردون
//             </h1>
//             <p className="text-xs sm:text-[13.5px] text-slate-500 dark:text-slate-400 font-medium mt-1.5 leading-relaxed">
//               إدارة وتنظيم البيانات الأساسية والاعتمادات المؤسسية للموردين المعتمدين لدى المنظومة
//             </p>
//           </div>

//           {/* شريط الفلاتر والبحث (مطابق تماماً للصورة) */}
//           <div className="flex flex-wrap items-center gap-3">
//             {/* 1. حقل البحث بالاسم مع أيقونة البحث */}
//             <div className="relative min-w-[220px] flex-1 max-w-[280px]">
//               <input
//                 type="text"
//                 value={searchFilter}
//                 onChange={(e) => setSearchFilter(e.target.value)}
//                 placeholder="شركة التقنية"
//                 className="w-full h-11 bg-white dark:bg-[#0b1b2d] border border-slate-300/80 dark:border-slate-700/80 rounded-xl pr-4 pl-10 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#01B0F5] transition-all shadow-sm"
//               />
//               <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
//                 <SearchIcon className="w-4 h-4" />
//               </span>
//             </div>

//             {/* 2. فلتر الحالة */}
//             <div className="relative min-w-[155px]">
//               <select
//                 value={statusFilter}
//                 onChange={(e) => {
//                   const val = e.target.value
//                   setStatusFilter(val)
//                   setAppliedFilters((prev) => {
//                     const withoutStatus = prev.filter((f) => f.id !== 'status')
//                     return val === 'all'
//                       ? withoutStatus
//                       : [...withoutStatus, { id: 'status', label: `الحالة: ${val}` }]
//                   })
//                 }}
//                 className="w-full h-11 appearance-none bg-white dark:bg-[#0b1b2d] border border-slate-300/80 dark:border-slate-700/80 rounded-xl pr-4 pl-9 text-sm text-slate-700 dark:text-slate-200 font-medium focus:outline-none focus:border-[#01B0F5] cursor-pointer shadow-sm"
//               >
//                 <option value="نشط">الحالة: نشط</option>
//                 <option value="تحت المراجعة">الحالة: تحت المراجعة</option>
//                 <option value="موقوف">الحالة: موقوف</option>
//                 <option value="all">الحالة: الكل</option>
//               </select>
//               <i className="fa-solid fa-chevron-down absolute left-3.5 top-1/2 -translate-y-1/2 text-[11px] text-slate-400 pointer-events-none"></i>
//             </div>

//             {/* 3. فلتر نوع النشاط */}
//             <div className="relative min-w-[210px]">
//               <select
//                 value={activityFilter}
//                 onChange={(e) => {
//                   const val = e.target.value
//                   setActivityFilter(val)
//                   setAppliedFilters((prev) => {
//                     const withoutActivity = prev.filter((f) => f.id !== 'activity')
//                     return val === 'all'
//                       ? withoutActivity
//                       : [...withoutActivity, { id: 'activity', label: 'نوع النشاط: توريد وتقنية' }]
//                   })
//                 }}
//                 className="w-full h-11 appearance-none bg-white dark:bg-[#0b1b2d] border border-slate-300/80 dark:border-slate-700/80 rounded-xl pr-4 pl-9 text-sm text-slate-700 dark:text-slate-200 font-medium focus:outline-none focus:border-[#01B0F5] cursor-pointer shadow-sm"
//               >
//                 <option value="توريد تقني وتكنولوجيا">توريد تقني وتكنولوجيا</option>
//                 <option value="توريد أثاث ومكتبي">توريد أثاث ومكتبي</option>
//                 <option value="صيانة وشبكات">صيانة وشبكات</option>
//                 <option value="all">الكل</option>
//               </select>
//               <i className="fa-solid fa-chevron-down absolute left-3.5 top-1/2 -translate-y-1/2 text-[11px] text-slate-400 pointer-events-none"></i>
//             </div>

//             {/* 4. فلتر التصنيف */}
//             <div className="relative min-w-[155px]">
//               <select
//                 value={classificationFilter}
//                 onChange={(e) => setClassificationFilter(e.target.value)}
//                 className="w-full h-11 appearance-none bg-white dark:bg-[#0b1b2d] border border-slate-300/80 dark:border-slate-700/80 rounded-xl pr-4 pl-9 text-sm text-slate-700 dark:text-slate-200 font-medium focus:outline-none focus:border-[#01B0F5] cursor-pointer shadow-sm"
//               >
//                 <option value="الكل">التصنيف: الكل</option>
//                 <option value="أ">التصنيف: أ</option>
//                 <option value="ب">التصنيف: ب</option>
//               </select>
//               <i className="fa-solid fa-chevron-down absolute left-3.5 top-1/2 -translate-y-1/2 text-[11px] text-slate-400 pointer-events-none"></i>
//             </div>

//             {/* 5. زر إعادة الضبط (Refresh Icon) */}
//             <button
//               type="button"
//               onClick={handleResetFilters}
//               title="إعادة ضبط الفلاتر"
//               className="w-11 h-11 rounded-xl bg-white dark:bg-[#0b1b2d] border border-slate-300/80 dark:border-slate-700/80 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-[#01B0F5] hover:border-[#01B0F5] dark:hover:text-[#01B0F5] transition-all shadow-sm cursor-pointer"
//             >
//               <i className="fa-solid fa-rotate-right text-sm"></i>
//             </button>
//           </div>

//           {/* شريط الفلاتر المطبقة */}
//           {appliedFilters.length > 0 && (
//             <div className="flex flex-wrap items-center gap-2 pt-1">
//               <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 ml-1">
//                 الفلاتر المطبقة:
//               </span>

//               {appliedFilters.map((filter) => (
//                 <div
//                   key={filter.id}
//                   className="inline-flex items-center gap-1.5 px-3 py-1 bg-white dark:bg-[#0b1b2d] border border-slate-300/80 dark:border-slate-700/80 rounded-lg text-xs font-medium text-slate-800 dark:text-slate-200 shadow-sm"
//                 >
//                   <button
//                     type="button"
//                     onClick={() => handleRemoveFilter(filter.id)}
//                     className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
//                     aria-label={`إزالة فلتر ${filter.label}`}
//                   >
//                     <i className="fa-regular fa-circle-xmark text-[13px]"></i>
//                   </button>
//                   <span>{filter.label}</span>
//                 </div>
//               ))}

//               <button
//                 type="button"
//                 onClick={handleClearAll}
//                 className="text-xs sm:text-sm font-semibold text-[#01B0F5] hover:underline mr-1 transition-colors cursor-pointer"
//               >
//                 مسح الكل
//               </button>
//             </div>
//           )}

//           {/* شبكة بطاقات الموردين (Cards Grid) */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
//             {filteredSuppliers.map((supplier) => (
//               <div
//                 key={supplier.id}
//                 className="bg-white dark:bg-[#0b1b2d] rounded-[22px] p-5 shadow-sm border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between hover:shadow-md transition-shadow relative"
//               >
//                 <div>
//                   {/* رأس البطاقة: الشارة يميناً أو يساراً حسب اتجاه RTL */}
//                   <div className="flex items-start justify-between gap-3">
//                     {/* الشعار والاسم ونوع التخصص */}
//                     <div className="flex items-center gap-3">
//                       <div className="w-12 h-12 rounded-xl bg-[#e3f4fd] dark:bg-sky-950/60 text-[#01B0F5] font-bold text-lg flex items-center justify-center shrink-0">
//                         {supplier.initials}
//                       </div>
//                       <div className="text-right">
//                         <h3 className="text-[16px] font-bold text-slate-900 dark:text-white leading-tight">
//                           {supplier.name}
//                         </h3>
//                         <div className="flex items-center gap-1.5 text-[11.5px] text-slate-500 dark:text-slate-400 mt-1">
//                           <i className="fa-solid fa-cubes text-[#01B0F5] text-[11px]"></i>
//                           <span>{supplier.category}</span>
//                         </div>
//                       </div>
//                     </div>

//                     {/* شارة الحالة */}
//                     <span
//                       className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11.5px] font-semibold shrink-0 ${supplier.statusBadgeClass}`}
//                     >
//                       <span className={`w-1.5 h-1.5 rounded-full ${supplier.statusDotColor}`}></span>
//                       <span>{supplier.status}</span>
//                     </span>
//                   </div>

//                   {/* بيانات المورد (الجدول / القائمة) */}
//                   <div className="mt-5 space-y-2 text-xs">
//                     <div className="flex items-center justify-between py-0.5">
//                       <span className="text-slate-500 dark:text-slate-400 font-medium">
//                         السجل التجاري:
//                       </span>
//                       <span className="font-bold text-slate-800 dark:text-slate-200 tracking-wider">
//                         {supplier.commercialReg}
//                       </span>
//                     </div>

//                     <div className="flex items-center justify-between py-0.5">
//                       <span className="text-slate-500 dark:text-slate-400 font-medium">
//                         المسؤول:
//                       </span>
//                       <span className="font-bold text-slate-800 dark:text-slate-200">
//                         {supplier.manager}
//                       </span>
//                     </div>

//                     <div className="flex items-center justify-between py-0.5">
//                       <span className="text-slate-500 dark:text-slate-400 font-medium">
//                         المدينة والتواصل:
//                       </span>
//                       <span className="font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1">
//                         <i className="fa-solid fa-location-dot text-slate-400 text-[11px]"></i>
//                         <span>{supplier.city}</span>
//                       </span>
//                     </div>

//                     <div className="flex items-center justify-between py-0.5">
//                       <span className="text-slate-500 dark:text-slate-400 font-medium">
//                         آخر تعامل:
//                       </span>
//                       <span className="font-bold text-[#01B0F5]">
//                         {supplier.lastDeal}
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* أسفل البطاقة: زر عرض التفاصيل وزر القائمة (3 نقاط) */}
//                 <div className="flex items-center gap-2 mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/70">
//                   {/* زر القائمة الإضافية (3 نقاط) */}
//                   <div className="relative">
//                     <button
//                       type="button"
//                       onClick={() =>
//                         setDropdownMenuId(dropdownMenuId === supplier.id ? null : supplier.id)
//                       }
//                       className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
//                       title="خيارات إضافية"
//                     >
//                       <i className="fa-solid fa-ellipsis-vertical text-sm"></i>
//                     </button>

//                     {/* قائمة منسدلة صغيرة */}
//                     {dropdownMenuId === supplier.id && (
//                       <div className="absolute left-0 bottom-full mb-1 w-44 bg-white dark:bg-[#0f243a] rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 p-1.5 z-20 text-xs">
//                         <button
//                           onClick={() => {
//                             setSelectedSupplier(supplier)
//                             setDropdownMenuId(null)
//                           }}
//                           className="w-full text-right px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2"
//                         >
//                           <i className="fa-regular fa-eye text-[#01B0F5]"></i>
//                           <span>معاينة الملف الكامل</span>
//                         </button>
//                         <button
//                           onClick={() => {
//                             navigator.clipboard?.writeText(supplier.phone)
//                             setDropdownMenuId(null)
//                           }}
//                           className="w-full text-right px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2"
//                         >
//                           <i className="fa-solid fa-phone text-emerald-500"></i>
//                           <span>نسخ رقم الهاتف</span>
//                         </button>
//                         <button
//                           onClick={() => {
//                             navigator.clipboard?.writeText(supplier.email)
//                             setDropdownMenuId(null)
//                           }}
//                           className="w-full text-right px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2"
//                         >
//                           <i className="fa-regular fa-envelope text-sky-500"></i>
//                           <span>نسخ البريد الإلكتروني</span>
//                         </button>
//                       </div>
//                     )}
//                   </div>

//                   {/* زر عرض التفاصيل */}
//                   <button
//                     type="button"
//                     onClick={() => setSelectedSupplier(supplier)}
//                     className="flex-1 h-9 bg-[#eaf5fc] hover:bg-[#d8edfa] dark:bg-sky-950/50 dark:hover:bg-sky-900/60 text-[#01B0F5] font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
//                   >
//                     <span>عرض التفاصيل</span>
//                     <i className="fa-solid fa-arrow-left text-[11px]"></i>
//                   </button>
//                 </div>
//               </div>
//             ))}
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

//       {/* ==================== نافذة منبثقة لتفاصيل المورد ==================== */}
//       {selectedSupplier && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//           <div
//             className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
//             onClick={() => setSelectedSupplier(null)}
//           ></div>

//           <div className="relative bg-white dark:bg-[#0b1b2d] rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 dark:border-slate-800 text-right z-10 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
//             {/* ترويسة النافذة */}
//             <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
//               <div className="flex items-center gap-3">
//                 <div className="w-12 h-12 rounded-xl bg-[#e3f4fd] dark:bg-sky-950/60 text-[#01B0F5] font-bold text-lg flex items-center justify-center shrink-0">
//                   {selectedSupplier.initials}
//                 </div>
//                 <div>
//                   <h3 className="text-base font-bold text-slate-900 dark:text-white">
//                     {selectedSupplier.name}
//                   </h3>
//                   <p className="text-xs text-slate-500 dark:text-slate-400">
//                     {selectedSupplier.category}
//                   </p>
//                 </div>
//               </div>

//               <button
//                 onClick={() => setSelectedSupplier(null)}
//                 className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
//                 aria-label="إغلاق النافذة"
//               >
//                 <i className="fa-solid fa-xmark"></i>
//               </button>
//             </div>

//             {/* تفاصيل المورد الكاملة */}
//             <div className="py-4 space-y-4 text-xs">
//               <div className="grid grid-cols-2 gap-3 p-3 bg-slate-50 dark:bg-[#081726] rounded-xl">
//                 <div>
//                   <span className="text-slate-400 block mb-1">الحالة</span>
//                   <span
//                     className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-semibold ${selectedSupplier.statusBadgeClass}`}
//                   >
//                     <span className={`w-1.5 h-1.5 rounded-full ${selectedSupplier.statusDotColor}`}></span>
//                     <span>{selectedSupplier.status}</span>
//                   </span>
//                 </div>
//                 <div>
//                   <span className="text-slate-400 block mb-1">التقييم العام</span>
//                   <span className="font-bold text-amber-500 flex items-center gap-1">
//                     <i className="fa-solid fa-star text-xs"></i>
//                     <span>{selectedSupplier.rating} / 5.0</span>
//                   </span>
//                 </div>
//               </div>

//               <div className="space-y-2.5">
//                 <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
//                   <span className="text-slate-500 dark:text-slate-400 font-medium">السجل التجاري:</span>
//                   <span className="font-bold text-slate-800 dark:text-slate-200">{selectedSupplier.commercialReg}</span>
//                 </div>
//                 <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
//                   <span className="text-slate-500 dark:text-slate-400 font-medium">الرقم الضريبي:</span>
//                   <span className="font-bold text-slate-800 dark:text-slate-200">{selectedSupplier.taxNumber}</span>
//                 </div>
//                 <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
//                   <span className="text-slate-500 dark:text-slate-400 font-medium">المسؤول المفوض:</span>
//                   <span className="font-bold text-slate-800 dark:text-slate-200">{selectedSupplier.manager}</span>
//                 </div>
//                 <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
//                   <span className="text-slate-500 dark:text-slate-400 font-medium">رقم الهاتف:</span>
//                   <span className="font-bold text-slate-800 dark:text-slate-200 dir-ltr">{selectedSupplier.phone}</span>
//                 </div>
//                 <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
//                   <span className="text-slate-500 dark:text-slate-400 font-medium">البريد الإلكتروني:</span>
//                   <span className="font-bold text-slate-800 dark:text-slate-200">{selectedSupplier.email}</span>
//                 </div>
//                 <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
//                   <span className="text-slate-500 dark:text-slate-400 font-medium">العنوان:</span>
//                   <span className="font-bold text-slate-800 dark:text-slate-200">{selectedSupplier.address}</span>
//                 </div>
//                 <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
//                   <span className="text-slate-500 dark:text-slate-400 font-medium">الطلبات المنفذة:</span>
//                   <span className="font-bold text-emerald-600 dark:text-emerald-400">{selectedSupplier.completedOrders} طلب</span>
//                 </div>
//                 <div className="flex justify-between py-1">
//                   <span className="text-slate-500 dark:text-slate-400 font-medium">آخر تعامل:</span>
//                   <span className="font-bold text-[#01B0F5]">{selectedSupplier.lastDeal}</span>
//                 </div>
//               </div>
//             </div>

//             {/* أزرار الإجراء */}
//             <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100 dark:border-slate-800">
//               <button
//                 onClick={() => setSelectedSupplier(null)}
//                 className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium text-xs hover:bg-slate-200 transition-colors"
//               >
//                 إغلاق
//               </button>
//               <button
//                 onClick={() => {
//                   alert(`تم بدء إنشاء طلب شراء جديد موجه للمورد: ${selectedSupplier.name}`)
//                   setSelectedSupplier(null)
//                 }}
//                 className="px-5 py-2.5 rounded-xl bg-[#01B0F5] hover:bg-[#009fdc] text-slate-900 font-bold text-xs transition-colors shadow-sm"
//               >
//                 طلب شراء من المورد
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }













// import { useState, useMemo } from 'react'
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
 
// // إعادة ضبط الفلاتر
// const RefreshIcon = (props) => (
//   <svg {...strokeProps} strokeWidth={2} {...props}>
//     <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
//     <path d="M21 3v5h-5" />
//   </svg>
// )
 
// // سهم القوائم المنسدلة (خط رفيع)
// const ChevronDownIcon = (props) => (
//   <svg {...strokeProps} strokeWidth={1.8} {...props}>
//     <path d="m6 9 6 6 6-6" />
//   </svg>
// )
 
// // دبوس الموقع (مفرغ)
// const MapPinIcon = (props) => (
//   <svg {...strokeProps} strokeWidth={2} {...props}>
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
//     <div className="min-h-full flex flex-col">
//       {/* الجزء العلوي */}
//       <div className="px-4 pt-[clamp(16px,3vh,32px)]">
//         {/* الشعار + اسم المنصة */}
//         <div className="px-2">
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
//         <p className="my-[clamp(12px,4vh,44px)] px-2 text-[length:clamp(13px,1.4vh,15px)] text-slate-500 dark:text-slate-400">
//           القوائم التشغيلية
//         </p>
 
//         {/* أزرار القائمة */}
//         <nav className="space-y-2">
//           {navItems.map(({ id, label, Icon, path }) => {
//             const isActive = id === 'suppliers'
//             return (
//               <button
//                 key={id}
//                 onClick={() => {
//                   navigate(path)
//                   onNavigate?.()
//                 }}
//                 className={`w-full h-[clamp(40px,5.2vh,56px)] flex items-center gap-3 px-5 2xl:px-6 rounded-lg text-[length:clamp(16px,2.04vh,22px)] font-medium text-right cursor-pointer transition-all ${
//                   isActive
//                     ? 'bg-[#01B0F5] text-slate-900'
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
 
//       {/* الجزء السفلي */}
//       <div className="mt-auto pt-[clamp(12px,2vh,24px)]">
//         {/* بطاقة: النظام متصل وآمن */}
//         <div className="flex items-center gap-2 px-6 2xl:px-10 py-[clamp(10px,1.5vh,16px)] bg-[#e9f4fb] dark:bg-[#0e2740]">
//           <span className="w-2.5 h-2.5 rounded-full bg-emerald-700 flex-shrink-0 animate-pulse"></span>
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
 
//         {/* بطاقة المستخدم د. محمد كسبة */}
//         <div className="flex items-center justify-between py-[clamp(10px,1.85vh,20px)] pr-6 2xl:pr-10 pl-5 2xl:pl-7 mt-[clamp(0px,3vh,32px)] mb-2 cursor-pointer group">
//           <div className="flex items-center gap-6">
//             <i className="fa-solid fa-circle-user text-[24px] leading-none text-slate-900 dark:text-slate-200 shrink-0"></i>
//             <div className="text-right">
//               <h4 className="text-[15px] 2xl:text-[17px] font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
//                 د. محمد كسبة
//               </h4>
//               <p className="text-[13px] 2xl:text-sm text-slate-500 dark:text-slate-400">
//                 مدير النظام العام
//               </p>
//             </div>
//           </div>
//           <i className="fa-solid fa-angle-left text-sm text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors"></i>
//         </div>
//       </div>
//     </div>
//   )
// }
 
// /* ==================== بيانات الموردين ==================== */
 
// const INITIAL_SUPPLIERS = [
//   {
//     id: 1,
//     initials: 'أق',
//     name: 'شركة الأفق للحلول',
//     category: 'تقنية المعلومات',
//     status: 'نشط',
//     statusKey: 'active',
//     statusBadgeClass: 'bg-[#e7f8ef] text-[#0b7a52] dark:bg-emerald-950/40 dark:text-emerald-400',
//     statusDotColor: 'bg-[#0b7a52]',
//     commercialReg: '1010489201',
//     manager: 'سعود عبدالعزيز الراشد',
//     city: 'فلسطين',
//     lastDeal: '12 مارس 2025',
//     activityType: 'توريد وتقنية',
//     email: 'info@alofoq-solutions.ps',
//     phone: '+970 59 123 4567',
//     address: 'غزة - شارع عمر المختار - عمارة الأفق',
//     taxNumber: '300456789100003',
//     rating: 4.9,
//     completedOrders: 28,
//   },
//   {
//     id: 2,
//     initials: 'حأ',
//     name: 'مؤسسة حلول الأعمال',
//     category: 'تقنية المعلومات والأجهزة',
//     status: 'تحت المراجعة',
//     statusKey: 'under_review',
//     statusBadgeClass: 'bg-[#fff1e0] text-[#f07a00] dark:bg-amber-950/40 dark:text-amber-400',
//     statusDotColor: 'bg-[#f07a00]',
//     commercialReg: '1010489201',
//     manager: 'سعود عبدالعزيز الراشد',
//     city: 'فلسطين',
//     lastDeal: '12 مارس 2025',
//     activityType: 'توريد وتقنية',
//     email: 'contact@business-solutions.ps',
//     phone: '+970 59 234 5678',
//     address: 'رام الله - شارع الإرسال - برج التجارة',
//     taxNumber: '300456789100004',
//     rating: 4.6,
//     completedOrders: 15,
//   },
//   {
//     id: 3,
//     initials: 'نح',
//     name: 'شركة نظم الحاسب المتقدمة',
//     category: 'الحاسب والشبكات',
//     status: 'موقوف',
//     statusKey: 'suspended',
//     statusBadgeClass: 'bg-[#fde8ea] text-[#d92d3f] dark:bg-rose-950/40 dark:text-rose-400',
//     statusDotColor: 'bg-[#d92d3f]',
//     commercialReg: '1010489201',
//     manager: 'سعود عبدالعزيز الراشد',
//     city: 'فلسطين',
//     lastDeal: '12 مارس 2025',
//     activityType: 'توريد وتقنية',
//     email: 'sales@advanced-computing.ps',
//     phone: '+970 59 345 6789',
//     address: 'نابلس - شارع رفيديا - مجمع الحاسوب',
//     taxNumber: '300456789100005',
//     rating: 4.1,
//     completedOrders: 7,
//   },
// ]
 
// // نص شريحة نوع النشاط (يظهر مختصراً كما في التصميم)
// const ACTIVITY_CHIP_LABELS = {
//   'توريد تقني وتكنولوجيا': 'توريد وتقنية',
//   'توريد أثاث ومكتبي': 'توريد أثاث ومكتبي',
//   'صيانة وشبكات': 'صيانة وشبكات',
// }
 
// // ترتيب ظهور الشرائح (الحالة أولاً ثم النشاط)
// const FILTER_ORDER = ['status', 'activity']
// const upsertFilter = (prev, filter) =>
//   [...prev.filter((f) => f.id !== filter.id), filter].sort(
//     (a, b) => FILTER_ORDER.indexOf(a.id) - FILTER_ORDER.indexOf(b.id)
//   )
 
// // الشكل المشترك لحقول الفلاتر الدائرية
// const FIELD_CLASS =
//   'w-full h-10 bg-[#f7f7f7] dark:bg-[#0f243a] border border-slate-300 dark:border-slate-700 rounded-full text-sm focus:outline-none focus:border-[#01B0F5]'
 
// /* ==================== صف تفصيل داخل البطاقة ==================== */
 
// function DetailRow({ label, valueClass = 'font-medium text-slate-900 dark:text-slate-100', children }) {
//   return (
//     <div className="flex items-center justify-between gap-4 h-[26px]">
//       <span className="text-slate-500 dark:text-slate-400">{label}</span>
//       <span className={`inline-flex items-center gap-1 ${valueClass}`}>{children}</span>
//     </div>
//   )
// }
 
// /* ==================== المكون الرئيسي ==================== */
 
// export default function Suppliers() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [topSearch, setTopSearch] = useState('')
//   const [searchFilter, setSearchFilter] = useState('')
//   const [statusFilter, setStatusFilter] = useState('نشط')
//   const [activityFilter, setActivityFilter] = useState('توريد تقني وتكنولوجيا')
//   const [classificationFilter, setClassificationFilter] = useState('الكل')
//   const [appliedFilters, setAppliedFilters] = useState([
//     { id: 'status', label: 'الحالة: نشط' },
//     { id: 'activity', label: 'نوع النشاط: توريد وتقنية' },
//   ])
//   const [selectedSupplier, setSelectedSupplier] = useState(null)
//   const [dropdownMenuId, setDropdownMenuId] = useState(null)
 
//   // فلترة الموردين: البحث بالاسم فقط، أما الحالة والنشاط فتبقى كل البطاقات ظاهرة كما في التصميم
//   const filteredSuppliers = useMemo(() => {
//     const q = searchFilter.trim()
//     return INITIAL_SUPPLIERS.filter((s) => !q || s.name.includes(q))
//   }, [searchFilter])
 
//   // مسح فلتر فردي
//   const handleRemoveFilter = (filterId) => {
//     setAppliedFilters((prev) => prev.filter((f) => f.id !== filterId))
//     if (filterId === 'status') {
//       setStatusFilter('all')
//     }
//     if (filterId === 'activity') {
//       setActivityFilter('all')
//     }
//   }
 
//   // مسح جميع الفلاتر
//   const handleClearAll = () => {
//     setAppliedFilters([])
//     setSearchFilter('')
//     setStatusFilter('all')
//     setActivityFilter('all')
//     setClassificationFilter('الكل')
//   }
 
//   // إعادة ضبط الفلاتر للحالة الافتراضية كما في الصورة
//   const handleResetFilters = () => {
//     setSearchFilter('')
//     setStatusFilter('نشط')
//     setActivityFilter('توريد تقني وتكنولوجيا')
//     setClassificationFilter('الكل')
//     setAppliedFilters([
//       { id: 'status', label: 'الحالة: نشط' },
//       { id: 'activity', label: 'نوع النشاط: توريد وتقنية' },
//     ])
//   }
 
//   return (
//     <div
//       dir="rtl"
//       className="min-h-screen bg-[#f5f5f5] dark:bg-[#071322] text-slate-800 dark:text-slate-100 flex flex-row transition-colors duration-200 selection:bg-sky-500 selection:text-white"
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
//           {/* يمين الهيدر: مسار التنقل (Breadcrumbs) */}
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => setIsMobileMenuOpen(true)}
//               className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
//               aria-label="القائمة"
//             >
//               <i className="fa-solid fa-bars text-lg"></i>
//             </button>
 
//             <nav className="flex items-center gap-2 text-[13px] sm:text-[15px]">
//               <Link
//                 to="/dashboard"
//                 className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
//               >
//                 نظام إدارة المشتريات - الأزهر
//               </Link>
//               <i className="fa-solid fa-angle-left text-[11px] text-slate-400"></i>
//               <span className="font-bold text-slate-900 dark:text-white">
//                 الإدارة الطالبة
//               </span>
//               <i className="fa-solid fa-angle-left text-[11px] text-slate-400"></i>
//               <span className="text-slate-500 dark:text-slate-400">
//                 الموردين
//               </span>
//             </nav>
//           </div>
 
//           {/* منتصف الهيدر: شريط البحث الدائري (الأيقونة على اليمين) */}
//           <div className="hidden md:flex flex-1 max-w-[345px]">
//             <div className="relative w-full">
//               <input
//                 type="text"
//                 value={topSearch}
//                 onChange={(e) => setTopSearch(e.target.value)}
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
 
//         {/* جسم الصفحة الرئيسي */}
//         <main className="w-full px-4 sm:px-6 lg:pl-20 lg:pr-6 pt-6 lg:pt-9 pb-12">
//           {/* عنوان الصفحة والوصف التوضيحي */}
//           <div className="text-right">
//             <h1 className="text-2xl lg:text-[28px] font-extrabold text-slate-900 dark:text-white tracking-tight">
//               الموردون
//             </h1>
//             <p className="mt-3 text-sm sm:text-[15px] text-slate-700 dark:text-slate-300 font-medium">
//               إدارة وتنظيم البيانات الأساسية والاعتمادات المؤسسية للموردين المعتمدين لدى المنظومة
//             </p>
//           </div>
 
//           {/* ==================== بطاقة الفلاتر (بيضاء) ==================== */}
//           <section className="mt-5 bg-white dark:bg-[#0b1b2d] rounded-[20px] p-6 space-y-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] dark:border dark:border-slate-800/80">
//             {/* صف الحقول */}
//             <div className="flex flex-wrap items-center gap-6">
//               {/* 1. حقل البحث بالاسم (الأيقونة على اليمين) */}
//               <div className="relative w-full lg:w-[345px]">
//                 <input
//                   type="text"
//                   value={searchFilter}
//                   onChange={(e) => setSearchFilter(e.target.value)}
//                   placeholder="شركة التقنية"
//                   className={`${FIELD_CLASS} pr-12 pl-4 text-slate-700 dark:text-slate-200 placeholder-slate-500`}
//                 />
//                 <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 pointer-events-none">
//                   <SearchIcon className="w-6 h-6" />
//                 </span>
//               </div>
 
//               {/* 2. فلتر الحالة */}
//               <div className="relative flex-1 min-w-[200px]">
//                 <select
//                   value={statusFilter}
//                   onChange={(e) => {
//                     const val = e.target.value
//                     setStatusFilter(val)
//                     setAppliedFilters((prev) =>
//                       val === 'all'
//                         ? prev.filter((f) => f.id !== 'status')
//                         : upsertFilter(prev, { id: 'status', label: `الحالة: ${val}` })
//                     )
//                   }}
//                   aria-label="فلتر الحالة"
//                   className={`${FIELD_CLASS} appearance-none pr-5 pl-11 text-slate-500 dark:text-slate-300 cursor-pointer`}
//                 >
//                   <option value="نشط">الحالة: نشط</option>
//                   <option value="تحت المراجعة">الحالة: تحت المراجعة</option>
//                   <option value="موقوف">الحالة: موقوف</option>
//                   <option value="all">الحالة: الكل</option>
//                 </select>
//                 <ChevronDownIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-800 dark:text-slate-300 pointer-events-none" />
//               </div>
 
//               {/* 3. فلتر نوع النشاط */}
//               <div className="relative flex-1 min-w-[200px]">
//                 <select
//                   value={activityFilter}
//                   onChange={(e) => {
//                     const val = e.target.value
//                     setActivityFilter(val)
//                     setAppliedFilters((prev) =>
//                       val === 'all'
//                         ? prev.filter((f) => f.id !== 'activity')
//                         : upsertFilter(prev, {
//                             id: 'activity',
//                             label: `نوع النشاط: ${ACTIVITY_CHIP_LABELS[val]}`,
//                           })
//                     )
//                   }}
//                   aria-label="فلتر نوع النشاط"
//                   className={`${FIELD_CLASS} appearance-none pr-5 pl-11 text-slate-500 dark:text-slate-300 cursor-pointer`}
//                 >
//                   <option value="توريد تقني وتكنولوجيا">توريد تقني وتكنولوجيا</option>
//                   <option value="توريد أثاث ومكتبي">توريد أثاث ومكتبي</option>
//                   <option value="صيانة وشبكات">صيانة وشبكات</option>
//                   <option value="all">نوع النشاط: الكل</option>
//                 </select>
//                 <ChevronDownIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-800 dark:text-slate-300 pointer-events-none" />
//               </div>
 
//               {/* 4. فلتر التصنيف */}
//               <div className="relative flex-1 min-w-[200px]">
//                 <select
//                   value={classificationFilter}
//                   onChange={(e) => setClassificationFilter(e.target.value)}
//                   aria-label="فلتر التصنيف"
//                   className={`${FIELD_CLASS} appearance-none pr-5 pl-11 text-slate-500 dark:text-slate-300 cursor-pointer`}
//                 >
//                   <option value="الكل">التصنيف: الكل</option>
//                   <option value="أ">التصنيف: أ</option>
//                   <option value="ب">التصنيف: ب</option>
//                 </select>
//                 <ChevronDownIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-800 dark:text-slate-300 pointer-events-none" />
//               </div>
 
//               {/* 5. زر إعادة الضبط */}
//               <button
//                 type="button"
//                 onClick={handleResetFilters}
//                 title="إعادة ضبط الفلاتر"
//                 aria-label="إعادة ضبط الفلاتر"
//                 className="w-10 h-10 rounded-lg bg-[#E8F4FD] dark:bg-[#0c2438] text-slate-900 dark:text-slate-200 flex items-center justify-center shrink-0 hover:bg-[#d8ecfa] dark:hover:bg-[#10314d] transition-colors cursor-pointer"
//               >
//                 <RefreshIcon className="w-4 h-4" />
//               </button>
//             </div>
 
//             {/* شريط الفلاتر المطبقة */}
//             {appliedFilters.length > 0 && (
//               <div className="flex flex-wrap items-center gap-2">
//                 <span className="text-[15px] font-medium text-slate-700 dark:text-slate-300">
//                   الفلاتر المطبقة:
//                 </span>
 
//                 {appliedFilters.map((filter) => (
//                   <div
//                     key={filter.id}
//                     className="inline-flex items-center gap-2.5 h-[38px] px-3.5 bg-[#E8F4FD] dark:bg-[#0f2c45] rounded-lg text-[14px] font-medium text-slate-900 dark:text-slate-100"
//                   >
//                     <span>{filter.label}</span>
//                     <button
//                       type="button"
//                       onClick={() => handleRemoveFilter(filter.id)}
//                       className="text-slate-700 dark:text-slate-300 hover:text-red-500 transition-colors cursor-pointer"
//                       aria-label={`إزالة فلتر ${filter.label}`}
//                     >
//                       <i className="fa-regular fa-circle-xmark text-[14px]"></i>
//                     </button>
//                   </div>
//                 ))}
 
//                 <button
//                   type="button"
//                   onClick={handleClearAll}
//                   className="text-[14px] font-medium text-[#007DEA] dark:text-[#01B0F5] hover:underline mr-1 transition-colors cursor-pointer"
//                 >
//                   مسح الكل
//                 </button>
//               </div>
//             )}
//           </section>
 
//           {/* شبكة بطاقات الموردين (Cards Grid) */}
//           {filteredSuppliers.length > 0 ? (
//             <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//               {filteredSuppliers.map((supplier) => (
//                 <div
//                   key={supplier.id}
//                   className="bg-white dark:bg-[#0b1b2d] rounded-[20px] p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] dark:border dark:border-slate-800/80 hover:shadow-md transition-shadow relative"
//                 >
//                   {/* رأس البطاقة: الشعار + الاسم والتصنيف + شارة الحالة */}
//                   <div className="flex items-start gap-4 pb-3 border-b border-[#EEF0F2] dark:border-slate-800">
//                     <div className="w-12 h-12 rounded-lg bg-[#E8F4FD] dark:bg-sky-950/60 text-[#007DEA] dark:text-[#01B0F5] font-medium text-lg flex items-center justify-center shrink-0">
//                       {supplier.initials}
//                     </div>
 
//                     <div className="flex-1 min-w-0 text-right">
//                       <h3 className="text-lg font-bold leading-7 text-slate-900 dark:text-white truncate">
//                         {supplier.name}
//                       </h3>
//                       <div className="flex items-center gap-1.5 text-[13px] text-slate-500 dark:text-slate-400 mt-0.5">
//                         <i className="fa-solid fa-cubes text-[#007DEA] text-[11px] shrink-0"></i>
//                         <span className="truncate">{supplier.category}</span>
//                       </div>
//                     </div>
 
//                     {/* شارة الحالة */}
//                     <span
//                       className={`mt-[3px] inline-flex items-center gap-1.5 h-[22px] px-2.5 rounded-full text-[12px] font-medium whitespace-nowrap shrink-0 ${supplier.statusBadgeClass}`}
//                     >
//                       <span className={`w-1.5 h-1.5 rounded-full ${supplier.statusDotColor}`}></span>
//                       <span>{supplier.status}</span>
//                     </span>
//                   </div>
 
//                   {/* بيانات المورد */}
//                   <div className="py-2 border-b border-[#EEF0F2] dark:border-slate-800 text-[13px]">
//                     <DetailRow label="السجل التجاري:">{supplier.commercialReg}</DetailRow>
//                     <DetailRow label="المسؤول:">{supplier.manager}</DetailRow>
//                     <DetailRow label="المدينة والتواصل:">
//                       <MapPinIcon className="w-3 h-3 shrink-0 text-slate-800 dark:text-slate-300" />
//                       <span>{supplier.city}</span>
//                     </DetailRow>
//                     <DetailRow
//                       label="آخر تعامل:"
//                       valueClass="font-semibold text-[#007DEA] dark:text-[#01B0F5]"
//                     >
//                       {supplier.lastDeal}
//                     </DetailRow>
//                   </div>
 
//                   {/* أسفل البطاقة: زر عرض التفاصيل ثم زر القائمة (3 نقاط) على اليسار */}
//                   <div className="mt-7 flex items-center gap-3">
//                     {/* زر عرض التفاصيل */}
//                     <button
//                       type="button"
//                       onClick={() => setSelectedSupplier(supplier)}
//                       className="flex-1 h-[34px] bg-[#E8F4FD] hover:bg-[#d8ecfa] dark:bg-sky-950/50 dark:hover:bg-sky-900/60 text-[#007DEA] dark:text-[#01B0F5] font-medium text-[13px] rounded-full flex items-center justify-center gap-2 transition-colors cursor-pointer"
//                     >
//                       <span>عرض التفاصيل</span>
//                       <i className="fa-solid fa-arrow-left text-[11px]"></i>
//                     </button>
 
//                     {/* زر القائمة الإضافية (3 نقاط) */}
//                     <div className="relative">
//                       <button
//                         type="button"
//                         onClick={() =>
//                           setDropdownMenuId(dropdownMenuId === supplier.id ? null : supplier.id)
//                         }
//                         className="w-6 h-8 flex items-center justify-center text-slate-800 dark:text-slate-300 hover:text-[#007DEA] transition-colors cursor-pointer"
//                         title="خيارات إضافية"
//                         aria-label="خيارات إضافية"
//                       >
//                         <i className="fa-solid fa-ellipsis-vertical text-sm"></i>
//                       </button>
 
//                       {/* قائمة منسدلة صغيرة */}
//                       {dropdownMenuId === supplier.id && (
//                         <div className="absolute left-0 bottom-full mb-1 w-44 bg-white dark:bg-[#0f243a] rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 p-1.5 z-20 text-xs">
//                           <button
//                             onClick={() => {
//                               setSelectedSupplier(supplier)
//                               setDropdownMenuId(null)
//                             }}
//                             className="w-full text-right px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2"
//                           >
//                             <i className="fa-regular fa-eye text-[#01B0F5]"></i>
//                             <span>معاينة الملف الكامل</span>
//                           </button>
//                           <button
//                             onClick={() => {
//                               navigator.clipboard?.writeText(supplier.phone)
//                               setDropdownMenuId(null)
//                             }}
//                             className="w-full text-right px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2"
//                           >
//                             <i className="fa-solid fa-phone text-emerald-500"></i>
//                             <span>نسخ رقم الهاتف</span>
//                           </button>
//                           <button
//                             onClick={() => {
//                               navigator.clipboard?.writeText(supplier.email)
//                               setDropdownMenuId(null)
//                             }}
//                             className="w-full text-right px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2"
//                           >
//                             <i className="fa-regular fa-envelope text-sky-500"></i>
//                             <span>نسخ البريد الإلكتروني</span>
//                           </button>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="mt-4 bg-white dark:bg-[#0b1b2d] rounded-[20px] py-12 text-center text-[15px] text-slate-500 dark:text-slate-400">
//               لا توجد نتائج مطابقة للبحث
//             </div>
//           )}
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
 
//       {/* ==================== نافذة منبثقة لتفاصيل المورد ==================== */}
//       {selectedSupplier && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//           <div
//             className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
//             onClick={() => setSelectedSupplier(null)}
//           ></div>
 
//           <div className="relative bg-white dark:bg-[#0b1b2d] rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 dark:border-slate-800 text-right z-10 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
//             {/* ترويسة النافذة */}
//             <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
//               <div className="flex items-center gap-3">
//                 <div className="w-12 h-12 rounded-lg bg-[#E8F4FD] dark:bg-sky-950/60 text-[#007DEA] dark:text-[#01B0F5] font-medium text-lg flex items-center justify-center shrink-0">
//                   {selectedSupplier.initials}
//                 </div>
//                 <div>
//                   <h3 className="text-base font-bold text-slate-900 dark:text-white">
//                     {selectedSupplier.name}
//                   </h3>
//                   <p className="text-xs text-slate-500 dark:text-slate-400">
//                     {selectedSupplier.category}
//                   </p>
//                 </div>
//               </div>
 
//               <button
//                 onClick={() => setSelectedSupplier(null)}
//                 className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
//                 aria-label="إغلاق النافذة"
//               >
//                 <i className="fa-solid fa-xmark"></i>
//               </button>
//             </div>
 
//             {/* تفاصيل المورد الكاملة */}
//             <div className="py-4 space-y-4 text-xs">
//               <div className="grid grid-cols-2 gap-3 p-3 bg-slate-50 dark:bg-[#081726] rounded-xl">
//                 <div>
//                   <span className="text-slate-400 block mb-1">الحالة</span>
//                   <span
//                     className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-semibold ${selectedSupplier.statusBadgeClass}`}
//                   >
//                     <span className={`w-1.5 h-1.5 rounded-full ${selectedSupplier.statusDotColor}`}></span>
//                     <span>{selectedSupplier.status}</span>
//                   </span>
//                 </div>
//                 <div>
//                   <span className="text-slate-400 block mb-1">التقييم العام</span>
//                   <span className="font-bold text-amber-500 flex items-center gap-1">
//                     <i className="fa-solid fa-star text-xs"></i>
//                     <span>{selectedSupplier.rating} / 5.0</span>
//                   </span>
//                 </div>
//               </div>
 
//               <div className="space-y-2.5">
//                 <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
//                   <span className="text-slate-500 dark:text-slate-400 font-medium">السجل التجاري:</span>
//                   <span className="font-bold text-slate-800 dark:text-slate-200">{selectedSupplier.commercialReg}</span>
//                 </div>
//                 <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
//                   <span className="text-slate-500 dark:text-slate-400 font-medium">الرقم الضريبي:</span>
//                   <span className="font-bold text-slate-800 dark:text-slate-200">{selectedSupplier.taxNumber}</span>
//                 </div>
//                 <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
//                   <span className="text-slate-500 dark:text-slate-400 font-medium">المسؤول المفوض:</span>
//                   <span className="font-bold text-slate-800 dark:text-slate-200">{selectedSupplier.manager}</span>
//                 </div>
//                 <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
//                   <span className="text-slate-500 dark:text-slate-400 font-medium">رقم الهاتف:</span>
//                   <span className="font-bold text-slate-800 dark:text-slate-200" dir="ltr">{selectedSupplier.phone}</span>
//                 </div>
//                 <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
//                   <span className="text-slate-500 dark:text-slate-400 font-medium">البريد الإلكتروني:</span>
//                   <span className="font-bold text-slate-800 dark:text-slate-200">{selectedSupplier.email}</span>
//                 </div>
//                 <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
//                   <span className="text-slate-500 dark:text-slate-400 font-medium">العنوان:</span>
//                   <span className="font-bold text-slate-800 dark:text-slate-200">{selectedSupplier.address}</span>
//                 </div>
//                 <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
//                   <span className="text-slate-500 dark:text-slate-400 font-medium">الطلبات المنفذة:</span>
//                   <span className="font-bold text-emerald-600 dark:text-emerald-400">{selectedSupplier.completedOrders} طلب</span>
//                 </div>
//                 <div className="flex justify-between py-1">
//                   <span className="text-slate-500 dark:text-slate-400 font-medium">آخر تعامل:</span>
//                   <span className="font-bold text-[#007DEA] dark:text-[#01B0F5]">{selectedSupplier.lastDeal}</span>
//                 </div>
//               </div>
//             </div>
 
//             {/* أزرار الإجراء */}
//             <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100 dark:border-slate-800">
//               <button
//                 onClick={() => setSelectedSupplier(null)}
//                 className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium text-xs hover:bg-slate-200 transition-colors"
//               >
//                 إغلاق
//               </button>
//               <button
//                 onClick={() => {
//                   alert(`تم بدء إنشاء طلب شراء جديد موجه للمورد: ${selectedSupplier.name}`)
//                   setSelectedSupplier(null)
//                 }}
//                 className="px-5 py-2.5 rounded-xl bg-[#01B0F5] hover:bg-[#009fdc] text-slate-900 font-bold text-xs transition-colors shadow-sm"
//               >
//                 طلب شراء من المورد
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }








import { useState, useMemo } from 'react'
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
 
// إعادة ضبط الفلاتر
const RefreshIcon = (props) => (
  <svg {...strokeProps} strokeWidth={2} {...props}>
    <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
  </svg>
)
 
// سهم القوائم المنسدلة (خط رفيع)
const ChevronDownIcon = (props) => (
  <svg {...strokeProps} strokeWidth={1.8} {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
)
 
// دبوس الموقع (مفرغ)
const MapPinIcon = (props) => (
  <svg {...strokeProps} strokeWidth={2} {...props}>
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
              className="h-[clamp(100px,4.6vh,50px)] w-auto object-contain"
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
        <nav className="space-y-[clamp(4px,0.56vh,6px)]">
          {navItems.map(({ id, label, Icon, path }) => {
            const isActive = id === 'suppliers'
            return (
              <button
                key={id}
                onClick={() => {
                  navigate(path)
                  onNavigate?.()
                }}
                className={`w-full h-[clamp(40px,5.74vh,62px)] flex items-center gap-2.5 px-5 2xl:px-6 rounded-lg text-[length:clamp(16px,2.04vh,22px)] font-medium text-right cursor-pointer transition-all ${
                  isActive
                    ? 'bg-[#01B0F5] text-slate-900'
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
 
      {/* الجزء السفلي */}
      <div className="mt-auto pt-[clamp(12px,2vh,24px)]">
        {/* بطاقة: النظام متصل وآمن */}
        <div className="flex items-center gap-2 px-6 2xl:px-10 py-[clamp(10px,1.5vh,16px)] bg-[#e9f4fb] dark:bg-[#0e2740]">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-700 flex-shrink-0 animate-pulse"></span>
          <div className="flex flex-col gap-[7px] text-right flex-1">
            <span className="whitespace-nowrap text-[15px] 2xl:text-[17px] font-bold text-slate-900 dark:text-white">
              النظام متصل وآمن
            </span>
            <span className="text-[13px] 2xl:text-sm text-slate-500 dark:text-slate-400">
              Sovereign Core v4.2
            </span>
          </div>
          <img src={shieldIcon} alt="shield" className="w-5 h-5 object-contain flex-shrink-0" />
        </div>
 
        {/* بطاقة المستخدم د. محمد كسبة */}
        <div className="flex items-center justify-between py-[clamp(10px,1.5vh,16px)] pr-5 2xl:pr-6 pl-5 2xl:pl-[22px] mt-[clamp(0px,3.6vh,39px)] cursor-pointer group" onClick={() => navigate('/profile')}>
          <div className="flex items-center gap-6">
            <i className="fa-solid fa-circle-user text-[24px] leading-none text-slate-900 dark:text-slate-200 shrink-0"></i>
            <div className="flex flex-col gap-[7px] text-right">
              <h4 className="text-[15px] 2xl:text-[17px] font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                د. محمد كسبة
              </h4>
              <p className="text-[13px] 2xl:text-sm text-slate-500 dark:text-slate-400">
                مدير النظام العام
              </p>
            </div>
          </div>
          <i className="fa-solid fa-angle-left text-sm text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors"></i>
        </div>
      </div>
    </div>
  )
}
 
/* ==================== بيانات الموردين ==================== */
 
const INITIAL_SUPPLIERS = [
  {
    id: 1,
    initials: 'أق',
    name: 'شركة الأفق للحلول',
    category: 'تقنية المعلومات',
    status: 'نشط',
    statusKey: 'active',
    statusBadgeClass: 'bg-[#e7f8ef] text-[#0b7a52] dark:bg-emerald-950/40 dark:text-emerald-400',
    statusDotColor: 'bg-[#0b7a52]',
    commercialReg: '1010489201',
    manager: 'سعود عبدالعزيز الراشد',
    city: 'فلسطين',
    lastDeal: '12 مارس 2025',
    activityType: 'توريد وتقنية',
    email: 'info@alofoq-solutions.ps',
    phone: '+970 59 123 4567',
    address: 'غزة - شارع عمر المختار - عمارة الأفق',
    taxNumber: '300456789100003',
    rating: 4.9,
    completedOrders: 28,
  },
  {
    id: 2,
    initials: 'ح أ',
    name: 'مؤسسة حلول الأعمال',
    category: 'تقنية المعلومات والأجهزة',
    status: 'تحت المراجعة',
    statusKey: 'under_review',
    statusBadgeClass: 'bg-[#fff1e0] text-[#f07a00] dark:bg-amber-950/40 dark:text-amber-400',
    statusDotColor: 'bg-[#f07a00]',
    commercialReg: '1010489201',
    manager: 'سعود عبدالعزيز الراشد',
    city: 'فلسطين',
    lastDeal: '12 مارس 2025',
    activityType: 'توريد وتقنية',
    email: 'contact@business-solutions.ps',
    phone: '+970 59 234 5678',
    address: 'رام الله - شارع الإرسال - برج التجارة',
    taxNumber: '300456789100004',
    rating: 4.6,
    completedOrders: 15,
  },
  {
    id: 3,
    initials: 'نح',
    name: 'شركة نظم الحاسب المتقدمة',
    category: 'الحاسب والشبكات',
    status: 'موقوف',
    statusKey: 'suspended',
    statusBadgeClass: 'bg-[#fde8ea] text-[#d92d3f] dark:bg-rose-950/40 dark:text-rose-400',
    statusDotColor: 'bg-[#d92d3f]',
    commercialReg: '1010489201',
    manager: 'سعود عبدالعزيز الراشد',
    city: 'فلسطين',
    lastDeal: '12 مارس 2025',
    activityType: 'توريد وتقنية',
    email: 'sales@advanced-computing.ps',
    phone: '+970 59 345 6789',
    address: 'نابلس - شارع رفيديا - مجمع الحاسوب',
    taxNumber: '300456789100005',
    rating: 4.1,
    completedOrders: 7,
  },
]
 
// نص شريحة نوع النشاط (يظهر مختصراً كما في التصميم)
const ACTIVITY_CHIP_LABELS = {
  'توريد تقني وتكنولوجيا': 'توريد وتقنية',
  'توريد أثاث ومكتبي': 'توريد أثاث ومكتبي',
  'صيانة وشبكات': 'صيانة وشبكات',
}
 
// ترتيب ظهور الشرائح (الحالة أولاً ثم النشاط)
const FILTER_ORDER = ['status', 'activity']
const upsertFilter = (prev, filter) =>
  [...prev.filter((f) => f.id !== filter.id), filter].sort(
    (a, b) => FILTER_ORDER.indexOf(a.id) - FILTER_ORDER.indexOf(b.id)
  )
 
// الشكل المشترك لحقول الفلاتر الدائرية
const FIELD_CLASS =
  'w-full h-10 bg-[#f7f7f7] dark:bg-[#0f243a] border border-slate-300 dark:border-slate-700 rounded-full text-sm focus:outline-none focus:border-[#01B0F5]'
 
/* ==================== صف تفصيل داخل البطاقة ==================== */
 
function DetailRow({ label, valueClass = 'font-medium text-slate-900 dark:text-slate-100', children }) {
  return (
    <div className="flex items-center justify-between gap-4 h-[26px]">
      <span className="text-slate-500 dark:text-slate-400">{label}</span>
      <span className={`inline-flex items-center gap-1 ${valueClass}`}>{children}</span>
    </div>
  )
}
 
/* ==================== المكون الرئيسي ==================== */
 
export default function Suppliers() {
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [topSearch, setTopSearch] = useState('')
  const [searchFilter, setSearchFilter] = useState('')
  const [statusFilter, setStatusFilter] = useState('نشط')
  const [activityFilter, setActivityFilter] = useState('توريد تقني وتكنولوجيا')
  const [classificationFilter, setClassificationFilter] = useState('الكل')
  const [appliedFilters, setAppliedFilters] = useState([
    { id: 'status', label: 'الحالة: نشط' },
    { id: 'activity', label: 'نوع النشاط: توريد وتقنية' },
  ])
  const [selectedSupplier, setSelectedSupplier] = useState(null)
  const [dropdownMenuId, setDropdownMenuId] = useState(null)
 
  // فلترة الموردين: البحث بالاسم فقط، أما الحالة والنشاط فتبقى كل البطاقات ظاهرة كما في التصميم
  const filteredSuppliers = useMemo(() => {
    const q = searchFilter.trim()
    return INITIAL_SUPPLIERS.filter((s) => !q || s.name.includes(q))
  }, [searchFilter])
 
  // مسح فلتر فردي
  const handleRemoveFilter = (filterId) => {
    setAppliedFilters((prev) => prev.filter((f) => f.id !== filterId))
    if (filterId === 'status') {
      setStatusFilter('all')
    }
    if (filterId === 'activity') {
      setActivityFilter('all')
    }
  }
 
  // مسح جميع الفلاتر
  const handleClearAll = () => {
    setAppliedFilters([])
    setSearchFilter('')
    setStatusFilter('all')
    setActivityFilter('all')
    setClassificationFilter('الكل')
  }
 
  // إعادة ضبط الفلاتر للحالة الافتراضية كما في الصورة
  const handleResetFilters = () => {
    setSearchFilter('')
    setStatusFilter('نشط')
    setActivityFilter('توريد تقني وتكنولوجيا')
    setClassificationFilter('الكل')
    setAppliedFilters([
      { id: 'status', label: 'الحالة: نشط' },
      { id: 'activity', label: 'نوع النشاط: توريد وتقنية' },
    ])
  }
 
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#f5f5f5] dark:bg-[#071322] text-slate-800 dark:text-slate-100 flex flex-row transition-colors duration-200 selection:bg-sky-500 selection:text-white"
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
          {/* يمين الهيدر: مسار التنقل (Breadcrumbs) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label="القائمة"
            >
              <i className="fa-solid fa-bars text-lg"></i>
            </button>
 
            <nav className="flex items-center gap-2 text-[13px] sm:text-[15px]">
              <Link
                to="/dashboard"
                className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
              >
                نظام إدارة المشتريات - الأزهر
              </Link>
              <i className="fa-solid fa-angle-left text-[11px] text-slate-400"></i>
              <span className="font-bold text-slate-900 dark:text-white">
                الإدارة الطالبة
              </span>
              <i className="fa-solid fa-angle-left text-[11px] text-slate-400"></i>
              <span className="text-slate-500 dark:text-slate-400">
                الموردين
              </span>
            </nav>
          </div>
 
          {/* منتصف الهيدر: شريط البحث الدائري (الأيقونة على اليمين) */}
          <div className="hidden md:flex flex-1 max-w-[345px]">
            <div className="relative w-full">
              <input
                type="text"
                value={topSearch}
                onChange={(e) => setTopSearch(e.target.value)}
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
 
        {/* جسم الصفحة الرئيسي */}
        <main className="w-full px-4 sm:px-6 lg:pl-20 lg:pr-6 pt-6 lg:pt-9 pb-12">
          {/* عنوان الصفحة والوصف التوضيحي */}
          <div className="text-right">
            <h1 className="text-2xl lg:text-[28px] font-extrabold text-slate-900 dark:text-white tracking-tight">
              الموردون
            </h1>
            <p className="mt-3 text-sm sm:text-[15px] text-slate-700 dark:text-slate-300 font-medium">
              إدارة وتنظيم البيانات الأساسية والاعتمادات المؤسسية للموردين المعتمدين لدى المنظومة
            </p>
          </div>
 
          {/* ==================== بطاقة الفلاتر (بيضاء) ==================== */}
          <section className="mt-5 bg-white dark:bg-[#0b1b2d] rounded-[20px] p-6 space-y-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] dark:border dark:border-slate-800/80">
            {/* صف الحقول */}
            <div className="flex flex-wrap items-center gap-6">
              {/* 1. حقل البحث بالاسم (الأيقونة على اليمين) */}
              <div className="relative w-full lg:w-[345px]">
                <input
                  type="text"
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  placeholder="شركة التقنية"
                  className={`${FIELD_CLASS} pr-12 pl-4 text-slate-700 dark:text-slate-200 placeholder-slate-500`}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 pointer-events-none">
                  <SearchIcon className="w-6 h-6" />
                </span>
              </div>
 
              {/* 2. فلتر الحالة */}
              <div className="relative flex-1 min-w-[200px]">
                <select
                  value={statusFilter}
                  onChange={(e) => {
                    const val = e.target.value
                    setStatusFilter(val)
                    setAppliedFilters((prev) =>
                      val === 'all'
                        ? prev.filter((f) => f.id !== 'status')
                        : upsertFilter(prev, { id: 'status', label: `الحالة: ${val}` })
                    )
                  }}
                  aria-label="فلتر الحالة"
                  className={`${FIELD_CLASS} appearance-none pr-4 pl-11 text-slate-500 dark:text-slate-300 cursor-pointer`}
                >
                  <option value="نشط">الحالة: نشط</option>
                  <option value="تحت المراجعة">الحالة: تحت المراجعة</option>
                  <option value="موقوف">الحالة: موقوف</option>
                  <option value="all">الحالة: الكل</option>
                </select>
                <ChevronDownIcon className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-800 dark:text-slate-300 pointer-events-none" />
              </div>
 
              {/* 3. فلتر نوع النشاط */}
              <div className="relative flex-1 min-w-[200px]">
                <select
                  value={activityFilter}
                  onChange={(e) => {
                    const val = e.target.value
                    setActivityFilter(val)
                    setAppliedFilters((prev) =>
                      val === 'all'
                        ? prev.filter((f) => f.id !== 'activity')
                        : upsertFilter(prev, {
                            id: 'activity',
                            label: `نوع النشاط: ${ACTIVITY_CHIP_LABELS[val]}`,
                          })
                    )
                  }}
                  aria-label="فلتر نوع النشاط"
                  className={`${FIELD_CLASS} appearance-none pr-4 pl-11 text-slate-500 dark:text-slate-300 cursor-pointer`}
                >
                  <option value="توريد تقني وتكنولوجيا">توريد تقني وتكنولوجيا</option>
                  <option value="توريد أثاث ومكتبي">توريد أثاث ومكتبي</option>
                  <option value="صيانة وشبكات">صيانة وشبكات</option>
                  <option value="all">نوع النشاط: الكل</option>
                </select>
                <ChevronDownIcon className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-800 dark:text-slate-300 pointer-events-none" />
              </div>
 
              {/* 4. فلتر التصنيف */}
              <div className="relative flex-1 min-w-[200px]">
                <select
                  value={classificationFilter}
                  onChange={(e) => setClassificationFilter(e.target.value)}
                  aria-label="فلتر التصنيف"
                  className={`${FIELD_CLASS} appearance-none pr-4 pl-11 text-slate-500 dark:text-slate-300 cursor-pointer`}
                >
                  <option value="الكل">التصنيف: الكل</option>
                  <option value="أ">التصنيف: أ</option>
                  <option value="ب">التصنيف: ب</option>
                </select>
                <ChevronDownIcon className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-800 dark:text-slate-300 pointer-events-none" />
              </div>
 
              {/* 5. زر إعادة الضبط */}
              <button
                type="button"
                onClick={handleResetFilters}
                title="إعادة ضبط الفلاتر"
                aria-label="إعادة ضبط الفلاتر"
                className="w-10 h-10 rounded-lg bg-[#E8F4FD] dark:bg-[#0c2438] text-slate-900 dark:text-slate-200 flex items-center justify-center shrink-0 hover:bg-[#d8ecfa] dark:hover:bg-[#10314d] transition-colors cursor-pointer"
              >
                <RefreshIcon className="w-4 h-4" />
              </button>
            </div>
 
            {/* شريط الفلاتر المطبقة */}
            {appliedFilters.length > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[14px] font-medium text-slate-700 dark:text-slate-300">
                  الفلاتر المطبقة:
                </span>
 
                {appliedFilters.map((filter) => (
                  <div
                    key={filter.id}
                    className="inline-flex items-center gap-2 h-[38px] pr-3 pl-3.5 bg-[#E8F4FD] dark:bg-[#0f2c45] rounded-lg text-[14px] font-medium text-slate-900 dark:text-slate-100"
                  >
                    <span>{filter.label}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveFilter(filter.id)}
                      className="text-slate-700 dark:text-slate-300 hover:text-red-500 transition-colors cursor-pointer"
                      aria-label={`إزالة فلتر ${filter.label}`}
                    >
                      <i className="fa-regular fa-circle-xmark text-[14px]"></i>
                    </button>
                  </div>
                ))}
 
                <button
                  type="button"
                  onClick={handleClearAll}
                  className="text-[14px] font-medium text-[#007DEA] dark:text-[#01B0F5] hover:underline mr-1 transition-colors cursor-pointer"
                >
                  مسح الكل
                </button>
              </div>
            )}
          </section>
 
          {/* شبكة بطاقات الموردين (Cards Grid) */}
          {filteredSuppliers.length > 0 ? (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredSuppliers.map((supplier) => (
                <div
                  key={supplier.id}
                  className="bg-white dark:bg-[#0b1b2d] rounded-[20px] p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] dark:border dark:border-slate-800/80 hover:shadow-md transition-shadow relative"
                >
                  {/* رأس البطاقة: الشعار + الاسم والتصنيف + شارة الحالة */}
                  <div className="flex items-start gap-3 pb-3 border-b border-[#EEF0F2] dark:border-slate-800">
                    <div className="w-12 h-12 rounded-lg bg-[#E8F4FD] dark:bg-sky-950/60 text-[#007DEA] dark:text-[#01B0F5] font-medium text-lg flex items-center justify-center shrink-0">
                      {supplier.initials}
                    </div>
 
                    <div className="flex-1 min-w-0 text-right">
                      <h3 className="text-lg font-bold leading-7 text-slate-900 dark:text-white truncate">
                        {supplier.name}
                      </h3>
                      <div className="flex items-center gap-1 text-[13px] text-slate-500 dark:text-slate-400">
                        <i className="fa-solid fa-cubes text-[#007DEA] text-[11px] shrink-0"></i>
                        <span className="truncate">{supplier.category}</span>
                      </div>
                    </div>
 
                    {/* شارة الحالة */}
                    <span
                      className={`mt-0.5 inline-flex items-center gap-2.5 h-[23px] px-3.5 rounded-full text-[13px] font-medium whitespace-nowrap shrink-0 ${supplier.statusBadgeClass}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${supplier.statusDotColor}`}></span>
                      <span>{supplier.status}</span>
                    </span>
                  </div>
 
                  {/* بيانات المورد */}
                  <div className="py-2 border-b border-[#EEF0F2] dark:border-slate-800 text-[13px]">
                    <DetailRow label="السجل التجاري:">{supplier.commercialReg}</DetailRow>
                    <DetailRow label="المسؤول:">{supplier.manager}</DetailRow>
                    <DetailRow label="المدينة والتواصل:">
                      <MapPinIcon className="w-3 h-3 shrink-0 text-slate-800 dark:text-slate-300" />
                      <span>{supplier.city}</span>
                    </DetailRow>
                    <DetailRow
                      label="آخر تعامل:"
                      valueClass="font-semibold text-[#007DEA] dark:text-[#01B0F5]"
                    >
                      {supplier.lastDeal}
                    </DetailRow>
                  </div>
 
                  {/* أسفل البطاقة: زر عرض التفاصيل ثم زر القائمة (3 نقاط) على اليسار */}
                  <div className="mt-7 flex items-center gap-2">
                    {/* زر عرض التفاصيل */}
                    <button
                      type="button"
                      onClick={() => {
                        if (supplier.id === 1 || supplier.name.includes('الأفق')) {
                          navigate('/supplier-details')
                        } else {
                          setSelectedSupplier(supplier)
                        }
                      }}
                      className="flex-1 h-[34px] bg-[#E8F4FD] hover:bg-[#d8ecfa] dark:bg-sky-950/50 dark:hover:bg-sky-900/60 text-[#007DEA] dark:text-[#01B0F5] font-medium text-[13px] rounded-full flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>عرض التفاصيل</span>
                      <i className="fa-solid fa-arrow-left text-[11px]"></i>
                    </button>
 
                    {/* زر القائمة الإضافية (3 نقاط) */}
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() =>
                          setDropdownMenuId(dropdownMenuId === supplier.id ? null : supplier.id)
                        }
                        className="w-5 h-8 flex items-center justify-center text-slate-800 dark:text-slate-300 hover:text-[#007DEA] transition-colors cursor-pointer"
                        title="خيارات إضافية"
                        aria-label="خيارات إضافية"
                      >
                        <i className="fa-solid fa-ellipsis-vertical text-sm"></i>
                      </button>
 
                      {/* قائمة منسدلة صغيرة */}
                      {dropdownMenuId === supplier.id && (
                        <div className="absolute left-0 bottom-full mb-1 w-44 bg-white dark:bg-[#0f243a] rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 p-1.5 z-20 text-xs">
                          <button
                            onClick={() => {
                              if (supplier.id === 1 || supplier.name.includes('الأفق')) {
                                navigate('/supplier-details')
                              } else {
                                setSelectedSupplier(supplier)
                              }
                              setDropdownMenuId(null)
                            }}
                            className="w-full text-right px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2"
                          >
                            <i className="fa-regular fa-eye text-[#01B0F5]"></i>
                            <span>معاينة الملف الكامل</span>
                          </button>
                          <button
                            onClick={() => {
                              navigator.clipboard?.writeText(supplier.phone)
                              setDropdownMenuId(null)
                            }}
                            className="w-full text-right px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2"
                          >
                            <i className="fa-solid fa-phone text-emerald-500"></i>
                            <span>نسخ رقم الهاتف</span>
                          </button>
                          <button
                            onClick={() => {
                              navigator.clipboard?.writeText(supplier.email)
                              setDropdownMenuId(null)
                            }}
                            className="w-full text-right px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2"
                          >
                            <i className="fa-regular fa-envelope text-sky-500"></i>
                            <span>نسخ البريد الإلكتروني</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-4 bg-white dark:bg-[#0b1b2d] rounded-[20px] py-12 text-center text-[15px] text-slate-500 dark:text-slate-400">
              لا توجد نتائج مطابقة للبحث
            </div>
          )}
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
 
      {/* ==================== نافذة منبثقة لتفاصيل المورد ==================== */}
      {selectedSupplier && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setSelectedSupplier(null)}
          ></div>
 
          <div className="relative bg-white dark:bg-[#0b1b2d] rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 dark:border-slate-800 text-right z-10 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            {/* ترويسة النافذة */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-[#E8F4FD] dark:bg-sky-950/60 text-[#007DEA] dark:text-[#01B0F5] font-medium text-lg flex items-center justify-center shrink-0">
                  {selectedSupplier.initials}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {selectedSupplier.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {selectedSupplier.category}
                  </p>
                </div>
              </div>
 
              <button
                onClick={() => setSelectedSupplier(null)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="إغلاق النافذة"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
 
            {/* تفاصيل المورد الكاملة */}
            <div className="py-4 space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3 p-3 bg-slate-50 dark:bg-[#081726] rounded-xl">
                <div>
                  <span className="text-slate-400 block mb-1">الحالة</span>
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-semibold ${selectedSupplier.statusBadgeClass}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${selectedSupplier.statusDotColor}`}></span>
                    <span>{selectedSupplier.status}</span>
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-1">التقييم العام</span>
                  <span className="font-bold text-amber-500 flex items-center gap-1">
                    <i className="fa-solid fa-star text-xs"></i>
                    <span>{selectedSupplier.rating} / 5.0</span>
                  </span>
                </div>
              </div>
 
              <div className="space-y-2.5">
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">السجل التجاري:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{selectedSupplier.commercialReg}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">الرقم الضريبي:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{selectedSupplier.taxNumber}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">المسؤول المفوض:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{selectedSupplier.manager}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">رقم الهاتف:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200" dir="ltr">{selectedSupplier.phone}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">البريد الإلكتروني:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{selectedSupplier.email}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">العنوان:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{selectedSupplier.address}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">الطلبات المنفذة:</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">{selectedSupplier.completedOrders} طلب</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">آخر تعامل:</span>
                  <span className="font-bold text-[#007DEA] dark:text-[#01B0F5]">{selectedSupplier.lastDeal}</span>
                </div>
              </div>
            </div>
 
            {/* أزرار الإجراء */}
            <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => setSelectedSupplier(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium text-xs hover:bg-slate-200 transition-colors"
              >
                إغلاق
              </button>
              {(selectedSupplier.id === 1 || selectedSupplier.name.includes('الأفق')) && (
                <button
                  onClick={() => {
                    setSelectedSupplier(null)
                    navigate('/supplier-details')
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#E8F4FD] dark:bg-sky-950/60 text-[#007DEA] dark:text-[#01B0F5] font-bold text-xs hover:bg-[#d8ecfa] transition-colors"
                >
                  عرض صفحة التفاصيل
                </button>
              )}
              <button
                onClick={() => {
                  alert(`تم بدء إنشاء طلب شراء جديد موجه للمورد: ${selectedSupplier.name}`)
                  setSelectedSupplier(null)
                }}
                className="px-5 py-2.5 rounded-xl bg-[#01B0F5] hover:bg-[#009fdc] text-slate-900 font-bold text-xs transition-colors shadow-sm"
              >
                طلب شراء من المورد
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}