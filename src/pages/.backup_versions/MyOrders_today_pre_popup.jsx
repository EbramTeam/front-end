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

// // الرئيسية (أيقونة المربعات / الشبكة)
// const DashboardGridIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
//     <rect x="3" y="3" width="8" height="8" rx="1.5" />
//     <rect x="3" y="13" width="8" height="8" rx="1.5" />
//     <rect x="13" y="3" width="8" height="8" rx="1.5" />
//     <rect x="13" y="13" width="8" height="8" rx="1.5" />
//   </svg>
// )

// // طلب إحتياج (أيقونة المستند)
// const NeedRequestIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5z" />
//     <path d="M14 2v5h5" />
//   </svg>
// )

// // البحث
// const SearchIcon = (props) => (
//   <svg {...strokeProps} strokeWidth={1.5} {...props}>
//     <circle cx="11" cy="11" r="7.5" />
//     <path d="m20.5 20.5-4-4" />
//   </svg>
// )

// const navItems = [
//   { id: 'home', label: 'الرئيسية', Icon: DashboardGridIcon, route: '/dashboard' },
//   { id: 'need-requests', label: 'طلب إحتياج', Icon: NeedRequestIcon, route: '/my-orders' },
// ]

// /* ==================== محتوى القائمة الجانبية (Sidebar) ==================== */

// function SidebarContent({ activeTab, setActiveTab, onNavigate }) {
//   const navigate = useNavigate()
//   return (
//     <div className="min-h-full flex flex-col bg-white dark:bg-[#0b1b2d]">
//       {/* الجزء العلوي */}
//       <div className="px-5 pt-[clamp(16px,3vh,32px)]">
//         {/* الشعار + اسم المنصة */}
//         <div className="px-1">
//           <Link to="/dashboard" onClick={onNavigate} className="inline-block">
//             <img
//               src={logo}
//               alt="IBRAM إبرام للمشتريات"
//               className="h-[clamp(36px,4.5vh,48px)] w-auto object-contain"
//             />
//           </Link>
//           <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
//             إبرام للمشتريات
//           </p>
//         </div>

//         {/* عنوان التصنيف */}
//         <p className="mt-8 mb-4 px-1 text-xs text-slate-400 dark:text-slate-500 font-semibold">
//           القوائم التشغيلية
//         </p>

//         {/* أزرار القائمة */}
//         <nav className="space-y-2">
//           {navItems.map(({ id, label, Icon, route }) => {
//             const isActive = activeTab === id
//             return (
//               <button
//                 key={id}
//                 onClick={() => {
//                   setActiveTab(id)
//                   navigate(route)
//                   onNavigate?.()
//                 }}
//                 className={`w-full h-12 flex items-center gap-3 px-4 rounded-xl text-base font-bold text-right cursor-pointer transition-all ${
//                   isActive
//                     ? 'bg-[#01B0F5] text-slate-900 shadow-sm'
//                     : 'bg-[#f5f5f5] dark:bg-[#0f243a] text-slate-800 dark:text-slate-200 hover:bg-[#ebebeb] dark:hover:bg-[#142e4a]'
//                 }`}
//               >
//                 <Icon className="w-5 h-5 shrink-0" />
//                 <span>{label}</span>
//               </button>
//             )
//           })}
//         </nav>
//       </div>

//       {/* الجزء السفلي */}
//       <div className="mt-auto pt-6">
//         {/* بطاقة: النظام متصل وآمن */}
//         <div className="flex items-center gap-3 px-5 py-3 bg-[#e9f4fb] dark:bg-[#0e2740]">
//           <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 flex-shrink-0 animate-pulse"></span>
//           <div className="flex flex-col text-right flex-1">
//             <span className="whitespace-nowrap text-sm font-bold text-slate-900 dark:text-white">
//               النظام متصل وآمن
//             </span>
//             <span className="text-xs text-slate-500 dark:text-slate-400">
//               Sovereign Core v4.2
//             </span>
//           </div>
//           <img src={shieldIcon} alt="shield" className="w-5 h-5 object-contain flex-shrink-0" />
//         </div>

//         {/* بطاقة المستخدم */}
//         <div
//           onClick={() => navigate('/profile')}
//           className="flex items-center justify-between py-4 px-5 cursor-pointer group hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
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
//               <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
//                 م. هاني وشاح
//               </h4>
//               <p className="text-xs text-slate-500 dark:text-slate-400">
//                 الإدارة الطالبة
//               </p>
//             </div>
//           </div>
//           <i className="fa-solid fa-angle-left text-xs text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200 transition-colors"></i>
//         </div>
//       </div>
//     </div>
//   )
// }

// /* ==================== صفحة طلبات الاحتياج والمشتريات المؤسسية ==================== */

// export default function MyOrders() {
//   const navigate = useNavigate()
//   const [activeTab, setActiveTab] = useState('need-requests')
//   const [searchQuery, setSearchQuery] = useState('')
//   const [filterSearch, setFilterSearch] = useState('')
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [activeFilters, setActiveFilters] = useState([
//     { id: 'faculty', label: 'الجهة: كلية الهندسة' },
//     { id: 'status', label: 'الحالة: الكل عدا المحذوفين' },
//   ])

//   // صفوف جدول طلبات الاحتياج المطابقة للصورة تماماً
//   const ordersList = [
//     {
//       id: 'PR-2025-0842',
//       title: 'تجديد خوادم مركز البيانات الرئيسي',
//       specs: 'توريد وحدات معالجة',
//       entity: 'عمادة تقنية المعلومات',
//       date: '24 أكتوبر 2025',
//       quantity: '12 خادم',
//       cost: '150,000 ش',
//       priority: '',
//       statusText: 'معتمد',
//       statusType: 'approved',
//     },
//     {
//       id: 'PR-2025-0842',
//       title: 'تجديد خوادم مركز البيانات الرئيسي',
//       specs: 'توريد وحدات معالجة',
//       entity: 'عمادة تقنية المعلومات',
//       date: '24 أكتوبر 2025',
//       quantity: '12 خادم',
//       cost: '150,000 ش',
//       priority: '',
//       statusText: 'تحت التدقيق',
//       statusType: 'in-review',
//     },
//     {
//       id: 'PR-2025-0842',
//       title: 'تجديد خوادم مركز البيانات الرئيسي',
//       specs: 'توريد وحدات معالجة',
//       entity: 'عمادة تقنية المعلومات',
//       date: '24 أكتوبر 2025',
//       quantity: '12 خادم',
//       cost: '150,000 ش',
//       priority: '',
//       statusText: 'مسودة',
//       statusType: 'draft',
//     },
//   ]

//   const removeFilter = (filterId) => {
//     setActiveFilters((prev) => prev.filter((f) => f.id !== filterId))
//   }

//   const clearAllFilters = () => {
//     setActiveFilters([])
//     setFilterSearch('')
//   }

//   return (
//     <div
//       dir="rtl"
//       className="min-h-screen bg-[#f8fafc] dark:bg-[#071322] text-slate-800 dark:text-slate-100 flex flex-row transition-colors duration-200 selection:bg-sky-500 selection:text-white"
//       style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
//     >
//       {/* ==================== القائمة الجانبية (Desktop Sidebar) ==================== */}
//       <aside className="hidden lg:block w-[260px] 2xl:w-[280px] shrink-0 bg-white dark:bg-[#0b1b2d] sticky top-0 h-screen overflow-y-auto select-none z-20 border-l border-slate-100 dark:border-slate-800">
//         <SidebarContent activeTab={activeTab} setActiveTab={setActiveTab} />
//       </aside>

//       {/* ==================== محتوى الصفحة الرئيسي ==================== */}
//       <div className="flex-1 flex flex-col min-w-0">
//         {/* الشريط العلوي (Top Header Bar) */}
//         <header className="h-16 bg-white dark:bg-[#0b1b2d] px-6 lg:px-8 flex items-center justify-between gap-4 sticky top-0 z-10 border-b border-slate-100 dark:border-slate-800">
//           {/* يمين الهيدر: مسار التنقل (Breadcrumbs) */}
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => setIsMobileMenuOpen(true)}
//               className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
//               aria-label="القائمة"
//             >
//               <i className="fa-solid fa-bars text-lg"></i>
//             </button>

//             <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
//               <span className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
//                 نظام إدارة المشتريات - الأزهر
//               </span>
//               <i className="fa-solid fa-angle-left text-[11px] text-slate-400"></i>
//               <span className="font-bold text-slate-900 dark:text-white">
//                 الإدارة الطالبة
//               </span>
//             </nav>
//           </div>

//           {/* منتصف الهيدر: شريط البحث الدائري */}
//           <div className="hidden md:flex flex-1 max-w-[340px]">
//             <div className="relative w-full">
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="بحث"
//                 className="w-full h-9 bg-white dark:bg-[#0f243a] border border-slate-200 dark:border-slate-700 rounded-full pr-10 pl-4 text-xs text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-[#01B0F5]"
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
//           <div className="flex items-center gap-4">
//             <NotificationMenu />
//             <span className="w-px h-5 bg-slate-200 dark:bg-slate-700"></span>
//             <LanguageMenu />
//           </div>
//         </header>

//         {/* محتوى الصفحة الرئيسي */}
//         <main className="w-full px-6 lg:px-8 py-6 space-y-6">
//           {/* ترويسة الصفحة وزر طلب إحتياج جديد */}
//           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//             {/* جهة اليمين: عنوان الصفحة ووصفها */}
//             <div className="text-right space-y-1.5">
//               <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
//                 طلبات الاحتياج والمشتريات المؤسسية
//               </h1>
//               <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
//                 إدارة ومتابعة متطلبات الكليات والعمادات المساندة، ومطابقتها مع الميزانية المعتمدة قبل طرح المنافسة
//               </p>
//             </div>

//             {/* جهة اليسار: زر طلب إحتياج جديد */}
//             <button
//               onClick={() => navigate('/new-order')}
//               className="inline-flex items-center justify-center px-6 h-10 rounded-full bg-[#0095FF] hover:bg-[#0084e3] active:scale-[0.98] text-white font-bold text-xs shadow-sm transition-all cursor-pointer whitespace-nowrap shrink-0"
//             >
//               <span>طلب إحتياج جديد</span>
//             </button>
//           </div>

//           {/* سطر الفلاتر والبحث */}
//           <div className="space-y-3">
//             {/* أدوات البحث والفرز */}
//             <div className="flex items-center gap-3">
//               {/* حقل البحث بالجهة الطالبة */}
//               <div className="relative flex-1">
//                 <input
//                   type="text"
//                   value={filterSearch}
//                   onChange={(e) => setFilterSearch(e.target.value)}
//                   placeholder="تصفية الطلبات حسب الجهة الطالبة"
//                   className="w-full h-9 bg-white dark:bg-[#0b1b2d] border border-slate-200 dark:border-slate-700 rounded-full pr-10 pl-4 text-xs text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-[#01B0F5]"
//                 />
//                 <button
//                   type="button"
//                   aria-label="بحث"
//                   className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400"
//                 >
//                   <SearchIcon className="w-4 h-4" />
//                 </button>
//               </div>

//               {/* القائمة المنسدلة: حالة الطلب */}
//               <div className="relative">
//                 <button
//                   type="button"
//                   className="h-9 px-4 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1b2d] flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600 transition-colors cursor-pointer"
//                 >
//                   <i className="fa-solid fa-angle-down text-[11px] text-slate-500"></i>
//                   <span>حالة الطلب</span>
//                 </button>
//               </div>

//               {/* زر إعادة التعيين (Reset) */}
//               <button
//                 type="button"
//                 onClick={clearAllFilters}
//                 title="إعادة ضبط الفلاتر"
//                 className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1b2d] flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
//               >
//                 <i className="fa-solid fa-rotate-right text-xs"></i>
//               </button>
//             </div>

//             {/* سطر الفلاتر المطبقة */}
//             {activeFilters.length > 0 && (
//               <div className="flex items-center gap-2 flex-wrap text-xs pt-1">
//                 <span className="text-slate-500 dark:text-slate-400 font-medium">
//                   الفلاتر المطبقة:
//                 </span>
//                 {activeFilters.map((filter) => (
//                   <span
//                     key={filter.id}
//                     className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#edf6fc] dark:bg-[#0c2438] text-slate-700 dark:text-slate-200 border border-sky-100 dark:border-sky-900/50 text-[11px] font-medium"
//                   >
//                     <button
//                       onClick={() => removeFilter(filter.id)}
//                       className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
//                     >
//                       <i className="fa-solid fa-xmark text-[10px]"></i>
//                     </button>
//                     <span>{filter.label}</span>
//                   </span>
//                 ))}
//                 <button
//                   onClick={clearAllFilters}
//                   className="text-sky-600 dark:text-sky-400 font-semibold hover:underline cursor-pointer mr-2"
//                 >
//                   مسح الكل
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* جدول الطلبات */}
//           <div className="bg-white dark:bg-[#0b1b2d] rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
//             <div className="overflow-x-auto">
//               <table className="w-full border-collapse text-right">
//                 {/* ترويسة الجدول بخلفية زرقاء فاتحة */}
//                 <thead>
//                   <tr className="bg-[#E8F6FF] dark:bg-[#0c2438] text-slate-700 dark:text-slate-200 text-xs font-bold">
//                     <th className="py-3 px-4 text-center whitespace-nowrap">رقم الطلب</th>
//                     <th className="py-3 px-4 text-right whitespace-nowrap">عنوان الإحتياج والمواصفات</th>
//                     <th className="py-3 px-4 text-center whitespace-nowrap">الجهة الطالبة</th>
//                     <th className="py-3 px-4 text-center whitespace-nowrap">تاريخ التقديم</th>
//                     <th className="py-3 px-4 text-center whitespace-nowrap">الكمية المقدرة</th>
//                     <th className="py-3 px-4 text-center whitespace-nowrap">التكلفة المتوقعة</th>
//                     <th className="py-3 px-4 text-center whitespace-nowrap">الأولوية</th>
//                     <th className="py-3 px-4 text-center whitespace-nowrap">حالة الإعتماد</th>
//                     <th className="py-3 px-4 text-center whitespace-nowrap">الإجراءات</th>
//                   </tr>
//                 </thead>

//                 {/* صفوف الجدول */}
//                 <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
//                   {ordersList.map((order, idx) => {
//                     return (
//                       <tr
//                         key={idx}
//                         className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
//                       >
//                         {/* رقم الطلب */}
//                         <td className="py-3.5 px-4 text-center font-bold text-slate-900 dark:text-white whitespace-nowrap">
//                           {order.id}
//                         </td>

//                         {/* عنوان الإحتياج والمواصفات */}
//                         <td className="py-3.5 px-4 text-right whitespace-nowrap">
//                           <div className="font-bold text-slate-900 dark:text-white">
//                             {order.title}
//                           </div>
//                           <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
//                             {order.specs}
//                           </div>
//                         </td>

//                         {/* الجهة الطالبة */}
//                         <td className="py-3.5 px-4 text-center text-slate-700 dark:text-slate-300 whitespace-nowrap">
//                           {order.entity}
//                         </td>

//                         {/* تاريخ التقديم */}
//                         <td className="py-3.5 px-4 text-center text-slate-700 dark:text-slate-300 whitespace-nowrap">
//                           {order.date}
//                         </td>

//                         {/* الكمية المقدرة */}
//                         <td className="py-3.5 px-4 text-center text-slate-700 dark:text-slate-300 whitespace-nowrap">
//                           {order.quantity}
//                         </td>

//                         {/* التكلفة المتوقعة */}
//                         <td className="py-3.5 px-4 text-center text-slate-700 dark:text-slate-300 whitespace-nowrap">
//                           {order.cost}
//                         </td>

//                         {/* الأولوية */}
//                         <td className="py-3.5 px-4 text-center text-slate-400 whitespace-nowrap">
//                           {order.priority || ''}
//                         </td>

//                         {/* حالة الإعتماد */}
//                         <td className="py-3.5 px-4 text-center whitespace-nowrap">
//                           {order.statusType === 'approved' && (
//                             <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e6f9f0] text-[#12b76a] font-bold text-xs">
//                               <span className="w-1.5 h-1.5 rounded-full bg-[#12b76a]"></span>
//                               <span>{order.statusText}</span>
//                             </span>
//                           )}
//                           {order.statusType === 'in-review' && (
//                             <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fff8eb] text-[#f79009] font-bold text-xs">
//                               <span className="w-1.5 h-1.5 rounded-full bg-[#f79009]"></span>
//                               <span>{order.statusText}</span>
//                             </span>
//                           )}
//                           {order.statusType === 'draft' && (
//                             <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f2f4f7] text-[#344054] dark:text-slate-300 font-bold text-xs">
//                               <span className="w-1.5 h-1.5 rounded-full bg-[#475467]"></span>
//                               <span>{order.statusText}</span>
//                             </span>
//                           )}
//                         </td>

//                         {/* الإجراءات */}
//                         <td className="py-3.5 px-4 text-center whitespace-nowrap">
//                           <div className="flex items-center justify-center gap-3">
//                             <button
//                               type="button"
//                               onClick={() => navigate('/edit-order')}
//                               className="text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400 cursor-pointer"
//                               title="عرض التفاصيل"
//                             >
//                               <i className="fa-regular fa-eye text-sm"></i>
//                             </button>
//                             <button
//                               type="button"
//                               className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 cursor-pointer"
//                               title="خيارات إضافية"
//                             >
//                               <i className="fa-solid fa-ellipsis-vertical text-sm"></i>
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     )
//                   })}
//                 </tbody>
//               </table>
//             </div>

//             {/* ترقيم الصفحات (Pagination) أسفل الجدول */}
//             <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 border-t border-slate-100 dark:border-slate-800 text-xs">
//               {/* اليمين: عرض 1 إلى 5 من أصل 26 */}
//               <div className="text-slate-500 dark:text-slate-400 font-medium">
//                 عرض 1 إلى 5 من أصل 26 طلب إحتياج
//               </div>

//               {/* اليسار: أزرار التنقل بين الصفحات */}
//               <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
//                 <button
//                   type="button"
//                   title="الصفحة الأولى"
//                   className="w-7 h-7 flex items-center justify-center rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
//                 >
//                   <i className="fa-solid fa-angles-right text-[10px]"></i>
//                 </button>
//                 <button
//                   type="button"
//                   title="الصفحة السابقة"
//                   className="w-7 h-7 flex items-center justify-center rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
//                 >
//                   <i className="fa-solid fa-angle-right text-[11px]"></i>
//                 </button>
//                 <button
//                   type="button"
//                   className="w-7 h-7 flex items-center justify-center rounded bg-[#0095FF] text-white font-bold text-xs"
//                 >
//                   1
//                 </button>
//                 <button
//                   type="button"
//                   className="w-7 h-7 flex items-center justify-center rounded hover:bg-slate-100 dark:hover:bg-slate-800 font-medium text-xs transition-colors"
//                 >
//                   2
//                 </button>
//                 <button
//                   type="button"
//                   className="w-7 h-7 flex items-center justify-center rounded hover:bg-slate-100 dark:hover:bg-slate-800 font-medium text-xs transition-colors"
//                 >
//                   3
//                 </button>
//                 <span className="px-1 text-slate-400">..</span>
//                 <button
//                   type="button"
//                   className="w-7 h-7 flex items-center justify-center rounded hover:bg-slate-100 dark:hover:bg-slate-800 font-medium text-xs transition-colors"
//                 >
//                   26
//                 </button>
//                 <button
//                   type="button"
//                   title="الصفحة التالية"
//                   className="w-7 h-7 flex items-center justify-center rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
//                 >
//                   <i className="fa-solid fa-angle-left text-[11px]"></i>
//                 </button>
//                 <button
//                   type="button"
//                   title="الصفحة الأخيرة"
//                   className="w-7 h-7 flex items-center justify-center rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
//                 >
//                   <i className="fa-solid fa-angles-left text-[10px]"></i>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* ==================== القائمة الجانبية للشاشات الصغيرة (Mobile Drawer) ==================== */}
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
//           className={`fixed top-0 right-0 w-[280px] max-w-[85vw] h-full bg-white dark:bg-[#0b1b2d] shadow-2xl z-10 overflow-y-auto select-none transition-transform duration-300 ease-in-out ${
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







// import { useEffect, useRef, useState } from 'react'
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
 
// // الرئيسية: غير نشطة (4 مربعات مفرغة)
// const HomeOutlineIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <rect x="3" y="3" width="7" height="7" rx="1.5" />
//     <rect x="14" y="3" width="7" height="7" rx="1.5" />
//     <rect x="14" y="14" width="7" height="7" rx="1.5" />
//     <rect x="3" y="14" width="7" height="7" rx="1.5" />
//   </svg>
// )
 
// // الرئيسية: نشطة (مصمتة)
// const DashboardGridIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
//     <rect x="3" y="3" width="8" height="8" rx="1.5" />
//     <rect x="3" y="13" width="8" height="8" rx="1.5" />
//     <rect x="13" y="3" width="8" height="8" rx="1.5" />
//     <rect x="13" y="13" width="8" height="8" rx="1.5" />
//   </svg>
// )
 
// // طلب إحتياج: غير نشط (مستند مفرغ)
// const NeedRequestIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5z" />
//     <path d="M14 2v5h5" />
//   </svg>
// )
 
// // طلب إحتياج: نشط (ملفات مصمتة)
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
 
// // البحث (خطّ رفيع)
// const SearchIcon = (props) => (
//   <svg {...strokeProps} strokeWidth={1.5} {...props}>
//     <circle cx="11" cy="11" r="7.5" />
//     <path d="m20.5 20.5-4-4" />
//   </svg>
// )
 
// // أيقونات الترقيم
// const pagerProps = { ...strokeProps, strokeWidth: 1.75, className: 'w-4 h-4' }
// const PagerBarLeft = () => (
//   <svg {...pagerProps}>
//     <path d="m16 7-5 5 5 5" />
//     <path d="M7 5v14" />
//   </svg>
// )
// const PagerBarRight = () => (
//   <svg {...pagerProps}>
//     <path d="m8 7 5 5-5 5" />
//     <path d="M17 5v14" />
//   </svg>
// )
// const PagerLeft = () => (
//   <svg {...pagerProps}>
//     <path d="m14 7-5 5 5 5" />
//   </svg>
// )
// const PagerRight = () => (
//   <svg {...pagerProps}>
//     <path d="m10 7 5 5-5 5" />
//   </svg>
// )
 
// const navItems = [
//   { id: 'home', label: 'الرئيسية', Icon: HomeOutlineIcon, ActiveIcon: DashboardGridIcon, route: '/dashboard' },
//   { id: 'need-requests', label: 'طلب إحتياج', Icon: NeedRequestIcon, ActiveIcon: FilesFilledIcon, route: '/my-orders' },
// ]
 
// // ألوان حالات الطلب (من التصميم)
// const statusStyles = {
//   approved: {
//     wrap: 'bg-[#eefff8] text-[#34c759] dark:bg-emerald-500/15 dark:text-emerald-400',
//     dot: 'bg-[#34c759] dark:bg-emerald-400',
//   },
//   'in-review': {
//     wrap: 'bg-[#fffbed] text-[#f97316] dark:bg-orange-500/15 dark:text-orange-400',
//     dot: 'bg-[#f97316] dark:bg-orange-400',
//   },
//   draft: {
//     wrap: 'bg-[#ededed] text-[#5e5e5e] dark:bg-slate-500/20 dark:text-slate-300',
//     dot: 'bg-[#5e5e5e] dark:bg-slate-300',
//   },
// }
 
// // خيارات قائمة حالة الطلب
// const STATUS_OPTIONS = [
//   { value: 'all', label: 'الكل' },
//   { value: 'approved', label: 'معتمد', dot: 'bg-[#34c759]' },
//   { value: 'in-review', label: 'تحت التدقيق', dot: 'bg-[#f97316]' },
//   { value: 'draft', label: 'مسودة', dot: 'bg-[#5e5e5e]' },
// ]
 
// /* ==================== قائمة "حالة الطلب" المنسدلة (تفاعلية) ==================== */
 
// function StatusDropdown({ value, onChange }) {
//   const [open, setOpen] = useState(false)
//   const wrapRef = useRef(null)
 
//   // إغلاق عند الضغط خارج القائمة أو بزر Escape
//   useEffect(() => {
//     if (!open) return undefined
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
 
//   const current = STATUS_OPTIONS.find((o) => o.value === value)
//   const isDefault = value === 'all'
 
//   return (
//     <div ref={wrapRef} className="relative h-10 flex-1 sm:flex-none sm:w-[224px]">
//       <button
//         type="button"
//         onClick={() => setOpen((v) => !v)}
//         aria-haspopup="listbox"
//         aria-expanded={open}
//         className={`h-10 w-full px-4 rounded-full border bg-[#f4f4f4] dark:bg-[#0f243a] flex items-center justify-between text-sm transition-colors cursor-pointer ${
//           open
//             ? 'border-[#00B4F0]'
//             : 'border-[#bbbbbb] hover:border-slate-500 dark:border-slate-700 dark:hover:border-slate-600'
//         }`}
//       >
//         <span
//           className={
//             isDefault
//               ? 'text-[#949494] dark:text-slate-400'
//               : 'text-black dark:text-white font-medium'
//           }
//         >
//           {isDefault ? 'حالة الطلب' : current.label}
//         </span>
//         <i
//           className={`fa-solid fa-angle-down text-xs text-black dark:text-slate-300 transition-transform duration-200 ${
//             open ? 'rotate-180' : ''
//           }`}
//         ></i>
//       </button>
 
//       {open && (
//         <ul
//           role="listbox"
//           className="absolute top-[calc(100%+6px)] inset-x-0 z-30 p-1.5 rounded-2xl bg-white dark:bg-[#0b1b2d] border border-slate-200 dark:border-slate-700 shadow-[0_12px_32px_-8px_rgba(16,24,40,0.25)]"
//         >
//           {STATUS_OPTIONS.map((opt) => {
//             const selected = opt.value === value
//             return (
//               <li key={opt.value} role="option" aria-selected={selected}>
//                 <button
//                   type="button"
//                   onClick={() => {
//                     onChange(opt.value)
//                     setOpen(false)
//                   }}
//                   className={`w-full h-10 px-3 rounded-xl flex items-center gap-2 text-sm text-right cursor-pointer transition-colors hover:bg-[#e8f6ff] dark:hover:bg-[#142e4a] ${
//                     selected
//                       ? 'bg-[#e8f6ff] dark:bg-[#0c2438] font-bold text-black dark:text-white'
//                       : 'text-slate-700 dark:text-slate-200'
//                   }`}
//                 >
//                   {opt.dot ? (
//                     <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${opt.dot}`}></span>
//                   ) : (
//                     <span className="w-2.5 shrink-0"></span>
//                   )}
//                   <span className="flex-1">{opt.label}</span>
//                   {selected && <i className="fa-solid fa-check text-xs text-[#0077ff]"></i>}
//                 </button>
//               </li>
//             )
//           })}
//         </ul>
//       )}
//     </div>
//   )
// }
 
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
//               className="h-[clamp(36px,4.7vh,52px)] w-auto object-contain"
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
//           <i className="fa-solid fa-angle-left text-sm text-slate-800 dark:text-slate-300 group-hover:-translate-x-1 transition-transform"></i>
//         </div>
//       </div>
//     </div>
//   )
// }
 
// /* ==================== صفحة طلبات الاحتياج والمشتريات المؤسسية ==================== */
 
// export default function MyOrders() {
//   const navigate = useNavigate()
//   const [activeTab, setActiveTab] = useState('need-requests')
//   const [searchQuery, setSearchQuery] = useState('')
//   const [entityQuery, setEntityQuery] = useState('')
//   const [status, setStatus] = useState('all')
//   const [facultyChip, setFacultyChip] = useState(true)
//   const [statusChip, setStatusChip] = useState(true)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
 
//   // صفوف جدول طلبات الاحتياج
//   const ordersList = [
//     {
//       id: 'PR-2025-0842',
//       title: 'تجديد خوادم مركز البيانات الرئيسي',
//       specs: 'توريد وحدات معالجة',
//       entity: 'عمادة تقنية المعلومات',
//       date: '24 أكتوبر 2025',
//       quantity: '12 خادم',
//       cost: '150,000 ش',
//       priority: '',
//       statusText: 'معتمد',
//       statusType: 'approved',
//     },
//     {
//       id: 'PR-2025-0842',
//       title: 'تجديد خوادم مركز البيانات الرئيسي',
//       specs: 'توريد وحدات معالجة',
//       entity: 'عمادة تقنية المعلومات',
//       date: '24 أكتوبر 2025',
//       quantity: '12 خادم',
//       cost: '150,000 ش',
//       priority: '',
//       statusText: 'تحت التدقيق',
//       statusType: 'in-review',
//     },
//     {
//       id: 'PR-2025-0842',
//       title: 'تجديد خوادم مركز البيانات الرئيسي',
//       specs: 'توريد وحدات معالجة',
//       entity: 'عمادة تقنية المعلومات',
//       date: '24 أكتوبر 2025',
//       quantity: '12 خادم',
//       cost: '150,000 ش',
//       priority: '',
//       statusText: 'مسودة',
//       statusType: 'draft',
//     },
//   ]
 
//   // اختيار حالة من القائمة يُظهر شارة الحالة من جديد
//   const handleStatusChange = (value) => {
//     setStatus(value)
//     setStatusChip(true)
//   }
 
//   // الفلاتر المطبقة (شارات)
//   const statusLabel = STATUS_OPTIONS.find((o) => o.value === status)?.label
//   const chips = [
//     facultyChip && {
//       id: 'faculty',
//       label: 'الجهة: كلية الهندسة',
//       onRemove: () => setFacultyChip(false),
//     },
//     statusChip && {
//       id: 'status',
//       label: status === 'all' ? 'الحالة: الكل عدا المحذوفين' : `الحالة: ${statusLabel}`,
//       onRemove: () => {
//         setStatus('all')
//         setStatusChip(false)
//       },
//     },
//   ].filter(Boolean)
 
//   const clearAllFilters = () => {
//     setFacultyChip(false)
//     setStatusChip(false)
//     setStatus('all')
//     setEntityQuery('')
//   }
 
//   // تطبيق الفلترة على الصفوف
//   const q = entityQuery.trim()
//   const filteredOrders = ordersList.filter(
//     (o) =>
//       (status === 'all' || o.statusType === status) &&
//       (!q || `${o.entity} ${o.title}`.includes(q))
//   )
//   const isFiltered = status !== 'all' || q !== ''
//   const resultsText = isFiltered
//     ? `عرض ${filteredOrders.length} من أصل 26 طلب إحتياج`
//     : 'عرض 1 إلى 5 من أصل 26 طلب إحتياج'
 
//   const pagerBtn =
//     'w-8 h-8 flex items-center justify-center rounded text-[#0b1c30] dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer'
 
//   return (
//     <div
//       dir="rtl"
//       className="min-h-screen bg-[#f4f4f4] dark:bg-[#071322] text-slate-800 dark:text-slate-100 flex flex-row transition-colors duration-200 selection:bg-sky-500 selection:text-white"
//       style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
//     >
//       {/* ==================== القائمة الجانبية (Desktop Sidebar) ==================== */}
//       <aside className="hidden lg:block lg:w-[clamp(260px,18.4vw,353px)] shrink-0 bg-white dark:bg-[#0b1b2d] sticky top-0 h-screen overflow-y-auto overflow-x-hidden select-none z-20 dark:border-l dark:border-slate-800">
//         <SidebarContent activeTab={activeTab} setActiveTab={setActiveTab} />
//       </aside>
 
//       {/* ==================== محتوى الصفحة الرئيسي ==================== */}
//       <div className="flex-1 flex flex-col min-w-0">
//         {/* الشريط العلوي (Top Header Bar) */}
//         <header className="h-16 bg-white dark:bg-[#0b1b2d] px-4 sm:px-6 lg:pr-6 lg:pl-[clamp(24px,4.6vw,88px)] flex items-center justify-between gap-4 sticky top-0 z-10 dark:border-b dark:border-slate-800">
//           {/* يمين الهيدر: مسار التنقل */}
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => setIsMobileMenuOpen(true)}
//               className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
//               aria-label="القائمة"
//             >
//               <i className="fa-solid fa-bars text-lg"></i>
//             </button>
 
//             <nav className="flex items-center gap-2 text-[13px] sm:text-[15px] text-[#565e74] dark:text-slate-400">
//               <span className="hidden sm:inline">نظام إدارة المشتريات - الأزهر</span>
//               <i className="hidden sm:inline fa-solid fa-angle-left text-[11px] text-slate-500"></i>
//               <span className="font-bold text-black dark:text-white">الإدارة الطالبة</span>
//             </nav>
//           </div>
 
//           {/* منتصف الهيدر: شريط البحث الدائري */}
//           <div className="hidden md:block relative min-w-0 md:flex-1 md:max-w-[345px] lg:flex-none lg:w-[clamp(180px,17.97vw,345px)]">
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               placeholder="بحث"
//               className="w-full h-10 bg-[#f4f4f4] dark:bg-[#0f243a] border border-[#bbbbbb] dark:border-slate-700 rounded-full pr-12 pl-4 text-sm text-slate-700 dark:text-slate-200 placeholder-[#828282] focus:outline-none focus:border-[#00B4F0] transition-colors"
//             />
//             <button
//               type="button"
//               aria-label="بحث"
//               className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-900 dark:text-slate-400"
//             >
//               <SearchIcon className="w-6 h-6" />
//             </button>
//           </div>
 
//           {/* يسار الهيدر: الإشعارات واللغة */}
//           <div className="flex items-center gap-4">
//             <NotificationMenu />
//             <span className="w-px h-6 bg-slate-200 dark:bg-slate-700"></span>
//             <LanguageMenu />
//           </div>
//         </header>
 
//         {/* محتوى الصفحة */}
//         <main className="w-full px-4 sm:px-6 lg:pr-6 lg:pl-[clamp(24px,4.17vw,80px)] pt-6 lg:pt-[42px] pb-8 sm:pb-10 space-y-5 sm:space-y-6">
//           {/* ترويسة الصفحة وزر طلب إحتياج جديد */}
//           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:mb-4">
//             {/* جهة اليمين: عنوان الصفحة ووصفها */}
//             <div className="text-right">
//               <h1 className="text-xl sm:text-2xl lg:text-[28px] font-black text-black dark:text-white tracking-tight">
//                 طلبات الاحتياج والمشتريات المؤسسية
//               </h1>
//               <p className="mt-[18px] text-sm sm:text-[15px] text-[#545f73] dark:text-slate-400 font-medium">
//                 إدارة ومتابعة متطلبات الكليات والعمادات المساندة، ومطابقتها مع الميزانية المعتمدة قبل طرح المنافسة
//               </p>
//             </div>
 
//             {/* جهة اليسار: زر طلب إحتياج جديد */}
//             <button
//               onClick={() => navigate('/new-order')}
//               className="inline-flex items-center justify-center w-full sm:w-[273px] h-12 rounded-full bg-[linear-gradient(to_left,#01B0F5,#0066F0)] hover:brightness-105 hover:shadow-lg hover:shadow-sky-500/30 active:scale-[0.98] text-black font-bold text-[15px] transition-all cursor-pointer whitespace-nowrap shrink-0"
//             >
//               <span>طلب إحتياج جديد</span>
//             </button>
//           </div>
 
//           {/* بطاقة الفلاتر والبحث */}
//           <div className="bg-white dark:bg-[#0b1b2d] rounded-3xl p-4 sm:p-6 space-y-4 sm:space-y-6 shadow-[0_2px_12px_rgba(16,24,40,0.04)] dark:border dark:border-slate-800">
//             {/* أدوات البحث والفرز */}
//             <div className="flex items-center gap-3 sm:gap-6 flex-wrap sm:flex-nowrap">
//               {/* حقل البحث بالجهة الطالبة */}
//               <div className="relative basis-full sm:basis-0 sm:flex-1 sm:min-w-[200px]">
//                 <input
//                   type="text"
//                   value={entityQuery}
//                   onChange={(e) => setEntityQuery(e.target.value)}
//                   placeholder="تصفية الطلبات حسب الجهة الطالبة"
//                   className="w-full h-10 bg-[#f4f4f4] dark:bg-[#0f243a] border border-[#bbbbbb] dark:border-slate-700 rounded-full pr-12 pl-4 text-sm text-slate-700 dark:text-slate-200 placeholder-[#828282] focus:outline-none focus:border-[#00B4F0] transition-colors"
//                 />
//                 <button
//                   type="button"
//                   aria-label="بحث"
//                   className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 dark:text-slate-400"
//                 >
//                   <SearchIcon className="w-6 h-6" />
//                 </button>
//               </div>
 
//               {/* القائمة المنسدلة التفاعلية: حالة الطلب */}
//               <StatusDropdown value={status} onChange={handleStatusChange} />
 
//               {/* زر إعادة التعيين (Reset) */}
//               <button
//                 type="button"
//                 onClick={clearAllFilters}
//                 title="إعادة ضبط الفلاتر"
//                 className="w-10 h-10 rounded-xl bg-[#e8f6ff] dark:bg-[#0f243a] text-black dark:text-sky-300 flex items-center justify-center hover:bg-[#d6eefc] dark:hover:bg-[#142e4a] active:rotate-180 transition-all duration-300 cursor-pointer shrink-0"
//               >
//                 <i className="fa-solid fa-rotate-right text-sm"></i>
//               </button>
//             </div>
 
//             {/* سطر الفلاتر المطبقة */}
//             {chips.length > 0 && (
//               <div className="flex items-center gap-2 flex-wrap text-sm min-h-[38px]">
//                 <span className="text-[#464554] dark:text-slate-300 font-medium ml-1">
//                   الفلاتر المطبقة:
//                 </span>
//                 {chips.map((chip) => (
//                   <span
//                     key={chip.id}
//                     className="inline-flex items-center gap-2 px-3 h-[38px] rounded-lg bg-[#e8f6ff] dark:bg-[#0c2438] text-black dark:text-slate-200 text-sm font-medium"
//                   >
//                     <span>{chip.label}</span>
//                     <button
//                       onClick={chip.onRemove}
//                       aria-label="إزالة الفلتر"
//                       className="text-slate-600 hover:text-black dark:hover:text-slate-200 cursor-pointer"
//                     >
//                       <i className="fa-regular fa-circle-xmark text-sm"></i>
//                     </button>
//                   </span>
//                 ))}
//                 <button
//                   onClick={clearAllFilters}
//                   className="text-[#0077ff] font-medium hover:underline cursor-pointer mr-2"
//                 >
//                   مسح الكل
//                 </button>
//               </div>
//             )}
//           </div>
 
//           {/* جدول الطلبات */}
//           <div className="bg-white dark:bg-[#0b1b2d] rounded-3xl shadow-[0_2px_12px_rgba(16,24,40,0.04)] dark:border dark:border-slate-800 overflow-hidden">
//             <div className="hidden xl:block">
//               <table className="w-full table-fixed border-collapse text-right">
//                 <colgroup>
//                   <col style={{ width: '12%' }} />
//                   <col style={{ width: '22%' }} />
//                   <col style={{ width: '12%' }} />
//                   <col style={{ width: '11%' }} />
//                   <col style={{ width: '9%' }} />
//                   <col style={{ width: '10%' }} />
//                   <col style={{ width: '6%' }} />
//                   <col style={{ width: '11%' }} />
//                   <col style={{ width: '7%' }} />
//                 </colgroup>
//                 {/* ترويسة الجدول */}
//                 <thead>
//                   <tr className="h-[66px] bg-[#e8f6ff] dark:bg-[#0c2438] text-[#5e5e5e] dark:text-slate-200 text-[13px] 2xl:text-[15px] font-medium">
//                     <th className="px-2 text-center font-medium">رقم الطلب</th>
//                     <th className="px-2 text-right font-medium">عنوان الإحتياج والمواصفات</th>
//                     <th className="px-2 text-center font-medium">الجهة الطالبة</th>
//                     <th className="px-2 text-center font-medium">تاريخ التقديم</th>
//                     <th className="px-2 text-center font-medium">الكمية المقدرة</th>
//                     <th className="px-2 text-center font-medium">التكلفة المتوقعة</th>
//                     <th className="px-2 text-center font-medium">الأولوية</th>
//                     <th className="px-2 text-center font-medium">حالة الإعتماد</th>
//                     <th className="px-2 text-center font-medium">الإجراءات</th>
//                   </tr>
//                 </thead>
 
//                 {/* صفوف الجدول */}
//                 <tbody className="text-sm 2xl:text-[15px]">
//                   {filteredOrders.length === 0 && (
//                     <tr className="h-[103px]">
//                       <td colSpan={9} className="text-center text-[#5e5e5e] dark:text-slate-400">
//                         لا توجد طلبات مطابقة للفلاتر المختارة.
//                       </td>
//                     </tr>
//                   )}
//                   {filteredOrders.map((order, idx) => {
//                     const st = statusStyles[order.statusType]
//                     return (
//                       <tr
//                         key={idx}
//                         className="h-[103px] hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
//                       >
//                         <td className="px-2 text-center font-bold text-black dark:text-white">
//                           {order.id}
//                         </td>
 
//                         <td className="px-2 text-right">
//                           <div className="font-bold text-[#0b1c30] dark:text-white">
//                             {order.title}
//                           </div>
//                           <div className="text-sm text-[#5e5e5e] dark:text-slate-400 mt-1">
//                             {order.specs}
//                           </div>
//                         </td>
 
//                         <td className="px-2 text-center text-[#5e5e5e] dark:text-slate-300 leading-relaxed">
//                           {order.entity}
//                         </td>
 
//                         <td className="px-2 text-center text-[#5e5e5e] dark:text-slate-300">
//                           {order.date}
//                         </td>
 
//                         <td className="px-2 text-center text-[#5e5e5e] dark:text-slate-300">
//                           {order.quantity}
//                         </td>
 
//                         <td className="px-2 text-center text-[#5e5e5e] dark:text-slate-300">
//                           {order.cost}
//                         </td>
 
//                         <td className="px-2 text-center text-slate-400">{order.priority || ''}</td>
 
//                         <td className="px-2 text-center">
//                           <span
//                             className={`inline-flex items-center gap-2 px-3 h-[30px] rounded-lg font-medium text-[15px] ${st.wrap}`}
//                           >
//                             <span className={`w-2.5 h-2.5 rounded-full ${st.dot}`}></span>
//                             <span>{order.statusText}</span>
//                           </span>
//                         </td>
 
//                         <td className="px-2 text-center">
//                           <div className="flex items-center justify-center gap-3 xl:gap-6">
//                             <button
//                               type="button"
//                               onClick={() => navigate('/edit-order')}
//                               className="text-[#1a1a1a] hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400 hover:scale-110 transition-all cursor-pointer"
//                               title="عرض التفاصيل"
//                             >
//                               <i className="fa-regular fa-eye text-xl"></i>
//                             </button>
//                             <button
//                               type="button"
//                               className="text-[#1a1a1a] hover:text-slate-500 dark:text-slate-300 dark:hover:text-slate-100 hover:scale-110 transition-all cursor-pointer"
//                               title="خيارات إضافية"
//                             >
//                               <i className="fa-solid fa-ellipsis-vertical text-xl"></i>
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     )
//                   })}
//                 </tbody>
//               </table>
//             </div>
 
//             {/* ==================== قائمة البطاقات للجوال والآيباد (بدل الجدول) ==================== */}
//             <div className="xl:hidden">
//               <div className="h-12 px-4 sm:px-6 flex items-center bg-[#e8f6ff] dark:bg-[#0c2438] text-sm font-medium text-[#5e5e5e] dark:text-slate-200">
//                 قائمة طلبات الإحتياج
//               </div>
//               {filteredOrders.length === 0 && (
//                 <div className="p-8 text-center text-sm text-[#5e5e5e] dark:text-slate-400">
//                   لا توجد طلبات مطابقة للفلاتر المختارة.
//                 </div>
//               )}
//               {filteredOrders.map((order, idx) => {
//                 const st = statusStyles[order.statusType]
//                 return (
//                   <div
//                     key={idx}
//                     className="p-4 sm:p-6 space-y-4 border-b border-slate-100 dark:border-slate-800 last:border-b-0 hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
//                   >
//                     <div className="flex items-center justify-between gap-3">
//                       <span className="font-bold text-black dark:text-white text-sm">
//                         {order.id}
//                       </span>
//                       <span
//                         className={`inline-flex items-center gap-2 px-3 h-[30px] rounded-lg font-medium text-sm whitespace-nowrap ${st.wrap}`}
//                       >
//                         <span className={`w-2.5 h-2.5 rounded-full ${st.dot}`}></span>
//                         <span>{order.statusText}</span>
//                       </span>
//                     </div>
 
//                     <div className="text-right">
//                       <div className="font-bold text-[#0b1c30] dark:text-white">{order.title}</div>
//                       <div className="text-sm text-[#5e5e5e] dark:text-slate-400 mt-1">
//                         {order.specs}
//                       </div>
//                     </div>
 
//                     <dl className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-3 text-sm text-right">
//                       {[
//                         ['الجهة الطالبة', order.entity],
//                         ['تاريخ التقديم', order.date],
//                         ['الكمية المقدرة', order.quantity],
//                         ['التكلفة المتوقعة', order.cost],
//                         ...(order.priority ? [['الأولوية', order.priority]] : []),
//                       ].map(([label, value]) => (
//                         <div key={label}>
//                           <dt className="text-xs text-slate-500 dark:text-slate-400">{label}</dt>
//                           <dd className="mt-0.5 font-medium text-[#5e5e5e] dark:text-slate-200">
//                             {value}
//                           </dd>
//                         </div>
//                       ))}
//                     </dl>
 
//                     <div className="flex items-center justify-end gap-5 pt-1">
//                       <button
//                         type="button"
//                         onClick={() => navigate('/edit-order')}
//                         className="text-[#1a1a1a] hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400 cursor-pointer"
//                         title="عرض التفاصيل"
//                       >
//                         <i className="fa-regular fa-eye text-xl"></i>
//                       </button>
//                       <button
//                         type="button"
//                         className="text-[#1a1a1a] hover:text-slate-500 dark:text-slate-300 dark:hover:text-slate-100 cursor-pointer"
//                         title="خيارات إضافية"
//                       >
//                         <i className="fa-solid fa-ellipsis-vertical text-xl"></i>
//                       </button>
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
 
//             {/* ترقيم الصفحات (Pagination) أسفل الجدول */}
//             <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 py-4 text-sm border-t border-slate-100 dark:border-slate-800 xl:border-t-0">
//               {/* اليمين: عدد النتائج */}
//               <div className="text-[#565e74] dark:text-slate-400 font-medium text-center">
//                 {resultsText}
//               </div>
 
//               {/* اليسار: أزرار التنقل بين الصفحات */}
//               <div className="flex items-center justify-center flex-wrap gap-1 text-[#828282] dark:text-slate-400">
//                 <button type="button" title="الصفحة الأولى" className={pagerBtn}>
//                   <PagerBarLeft />
//                 </button>
//                 <button type="button" title="الصفحة السابقة" className={pagerBtn}>
//                   <PagerLeft />
//                 </button>
//                 <button
//                   type="button"
//                   className="w-8 h-8 flex items-center justify-center rounded bg-[#0077ff] text-white font-bold text-sm"
//                 >
//                   1
//                 </button>
//                 <button type="button" className={`${pagerBtn} font-medium text-sm`}>
//                   2
//                 </button>
//                 <button type="button" className={`${pagerBtn} font-medium text-sm`}>
//                   3
//                 </button>
//                 <span className="px-1 text-slate-500">...</span>
//                 <button type="button" className={`${pagerBtn} font-medium text-sm`}>
//                   26
//                 </button>
//                 <button type="button" title="الصفحة التالية" className={pagerBtn}>
//                   <PagerRight />
//                 </button>
//                 <button type="button" title="الصفحة الأخيرة" className={pagerBtn}>
//                   <PagerBarRight />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
 
//       {/* ==================== القائمة الجانبية للشاشات الصغيرة (Mobile Drawer) ==================== */}
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
//           className={`fixed top-0 right-0 w-[280px] max-w-[85vw] h-full bg-white dark:bg-[#0b1b2d] shadow-2xl z-10 overflow-y-auto overflow-x-hidden select-none transition-transform duration-300 ease-in-out ${
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
 





// import { useEffect, useRef, useState } from 'react'
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
 
// // الرئيسية: غير نشطة (4 مربعات مفرغة)
// const HomeOutlineIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <rect x="3" y="3" width="7" height="7" rx="1.5" />
//     <rect x="14" y="3" width="7" height="7" rx="1.5" />
//     <rect x="14" y="14" width="7" height="7" rx="1.5" />
//     <rect x="3" y="14" width="7" height="7" rx="1.5" />
//   </svg>
// )
 
// // الرئيسية: نشطة (مصمتة)
// const DashboardGridIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
//     <rect x="3" y="3" width="8" height="8" rx="1.5" />
//     <rect x="3" y="13" width="8" height="8" rx="1.5" />
//     <rect x="13" y="3" width="8" height="8" rx="1.5" />
//     <rect x="13" y="13" width="8" height="8" rx="1.5" />
//   </svg>
// )
 
// // طلب إحتياج: غير نشط (مستند مفرغ)
// const NeedRequestIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5z" />
//     <path d="M14 2v5h5" />
//   </svg>
// )
 
// // طلب إحتياج: نشط (ملفات مصمتة)
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
 
// // البحث (خطّ رفيع)
// const SearchIcon = (props) => (
//   <svg {...strokeProps} strokeWidth={1.5} {...props}>
//     <circle cx="11" cy="11" r="7.5" />
//     <path d="m20.5 20.5-4-4" />
//   </svg>
// )
 
// // أيقونات الترقيم
// const pagerProps = { ...strokeProps, strokeWidth: 1.75, className: 'w-4 h-4' }
// const PagerBarLeft = () => (
//   <svg {...pagerProps}>
//     <path d="m16 7-5 5 5 5" />
//     <path d="M7 5v14" />
//   </svg>
// )
// const PagerBarRight = () => (
//   <svg {...pagerProps}>
//     <path d="m8 7 5 5-5 5" />
//     <path d="M17 5v14" />
//   </svg>
// )
// const PagerLeft = () => (
//   <svg {...pagerProps}>
//     <path d="m14 7-5 5 5 5" />
//   </svg>
// )
// const PagerRight = () => (
//   <svg {...pagerProps}>
//     <path d="m10 7 5 5-5 5" />
//   </svg>
// )
 
// const navItems = [
//   { id: 'home', label: 'الرئيسية', Icon: HomeOutlineIcon, ActiveIcon: DashboardGridIcon, route: '/dashboard' },
//   { id: 'need-requests', label: 'طلب إحتياج', Icon: NeedRequestIcon, ActiveIcon: FilesFilledIcon, route: '/my-orders' },
// ]
 
// // ألوان حالات الطلب (من التصميم)
// const statusStyles = {
//   approved: {
//     wrap: 'bg-[#eefff8] text-[#34c759] dark:bg-emerald-500/15 dark:text-emerald-400',
//     dot: 'bg-[#34c759] dark:bg-emerald-400',
//   },
//   'in-review': {
//     wrap: 'bg-[#fffbed] text-[#f97316] dark:bg-orange-500/15 dark:text-orange-400',
//     dot: 'bg-[#f97316] dark:bg-orange-400',
//   },
//   draft: {
//     wrap: 'bg-[#ededed] text-[#5e5e5e] dark:bg-slate-500/20 dark:text-slate-300',
//     dot: 'bg-[#5e5e5e] dark:bg-slate-300',
//   },
// }
 
// // خيارات قائمة حالة الطلب
// const STATUS_OPTIONS = [
//   { value: 'all', label: 'الكل' },
//   { value: 'approved', label: 'معتمد', dot: 'bg-[#34c759]' },
//   { value: 'in-review', label: 'تحت التدقيق', dot: 'bg-[#f97316]' },
//   { value: 'draft', label: 'مسودة', dot: 'bg-[#5e5e5e]' },
// ]
 
// /* ==================== قائمة "حالة الطلب" المنسدلة (تفاعلية) ==================== */
 
// function StatusDropdown({ value, onChange }) {
//   const [open, setOpen] = useState(false)
//   const wrapRef = useRef(null)
 
//   // إغلاق عند الضغط خارج القائمة أو بزر Escape
//   useEffect(() => {
//     if (!open) return undefined
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
 
//   const current = STATUS_OPTIONS.find((o) => o.value === value)
//   const isDefault = value === 'all'
 
//   return (
//     <div ref={wrapRef} className="relative h-10 flex-1 sm:flex-none sm:w-[224px]">
//       <button
//         type="button"
//         onClick={() => setOpen((v) => !v)}
//         aria-haspopup="listbox"
//         aria-expanded={open}
//         className={`h-10 w-full px-4 rounded-full border bg-[#f4f4f4] dark:bg-[#0f243a] flex items-center justify-between text-sm transition-colors cursor-pointer ${
//           open
//             ? 'border-[#00B4F0]'
//             : 'border-[#bbbbbb] hover:border-slate-500 dark:border-slate-700 dark:hover:border-slate-600'
//         }`}
//       >
//         <span
//           className={
//             isDefault
//               ? 'text-[#949494] dark:text-slate-400'
//               : 'text-black dark:text-white font-medium'
//           }
//         >
//           {isDefault ? 'حالة الطلب' : current.label}
//         </span>
//         <i
//           className={`fa-solid fa-angle-down text-xs text-black dark:text-slate-300 transition-transform duration-200 ${
//             open ? 'rotate-180' : ''
//           }`}
//         ></i>
//       </button>
 
//       {open && (
//         <ul
//           role="listbox"
//           className="absolute top-[calc(100%+6px)] inset-x-0 z-30 p-1.5 rounded-2xl bg-white dark:bg-[#0b1b2d] border border-slate-200 dark:border-slate-700 shadow-[0_12px_32px_-8px_rgba(16,24,40,0.25)]"
//         >
//           {STATUS_OPTIONS.map((opt) => {
//             const selected = opt.value === value
//             return (
//               <li key={opt.value} role="option" aria-selected={selected}>
//                 <button
//                   type="button"
//                   onClick={() => {
//                     onChange(opt.value)
//                     setOpen(false)
//                   }}
//                   className={`w-full h-10 px-3 rounded-xl flex items-center gap-2 text-sm text-right cursor-pointer transition-colors hover:bg-[#e8f6ff] dark:hover:bg-[#142e4a] ${
//                     selected
//                       ? 'bg-[#e8f6ff] dark:bg-[#0c2438] font-bold text-black dark:text-white'
//                       : 'text-slate-700 dark:text-slate-200'
//                   }`}
//                 >
//                   {opt.dot ? (
//                     <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${opt.dot}`}></span>
//                   ) : (
//                     <span className="w-2.5 shrink-0"></span>
//                   )}
//                   <span className="flex-1">{opt.label}</span>
//                   {selected && <i className="fa-solid fa-check text-xs text-[#0077ff]"></i>}
//                 </button>
//               </li>
//             )
//           })}
//         </ul>
//       )}
//     </div>
//   )
// }
 
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
//               className="h-[clamp(36px,4.7vh,52px)] w-auto object-contain"
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
//           <i className="fa-solid fa-angle-left text-sm text-slate-800 dark:text-slate-300 group-hover:-translate-x-1 transition-transform"></i>
//         </div>
//       </div>
//     </div>
//   )
// }
 
// /* ==================== صفحة طلبات الاحتياج والمشتريات المؤسسية ==================== */
 
// export default function MyOrders() {
//   const navigate = useNavigate()
//   const [activeTab, setActiveTab] = useState('need-requests')
//   const [searchQuery, setSearchQuery] = useState('')
//   const [entityQuery, setEntityQuery] = useState('')
//   const [status, setStatus] = useState('all')
//   const [facultyChip, setFacultyChip] = useState(true)
//   const [statusChip, setStatusChip] = useState(true)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
 
//   // صفوف جدول طلبات الاحتياج
//   const ordersList = [
//     {
//       id: 'PR-2025-0842',
//       title: 'تجديد خوادم مركز البيانات الرئيسي',
//       specs: 'توريد وحدات معالجة',
//       entity: 'عمادة تقنية المعلومات',
//       date: '24 أكتوبر 2025',
//       quantity: '12 خادم',
//       cost: '150,000 ش',
//       statusText: 'معتمد',
//       statusType: 'approved',
//     },
//     {
//       id: 'PR-2025-0842',
//       title: 'تجديد خوادم مركز البيانات الرئيسي',
//       specs: 'توريد وحدات معالجة',
//       entity: 'عمادة تقنية المعلومات',
//       date: '24 أكتوبر 2025',
//       quantity: '12 خادم',
//       cost: '150,000 ش',
//       statusText: 'تحت التدقيق',
//       statusType: 'in-review',
//     },
//     {
//       id: 'PR-2025-0842',
//       title: 'تجديد خوادم مركز البيانات الرئيسي',
//       specs: 'توريد وحدات معالجة',
//       entity: 'عمادة تقنية المعلومات',
//       date: '24 أكتوبر 2025',
//       quantity: '12 خادم',
//       cost: '150,000 ش',
//       statusText: 'مسودة',
//       statusType: 'draft',
//     },
//   ]
 
//   // اختيار حالة من القائمة يُظهر شارة الحالة من جديد
//   const handleStatusChange = (value) => {
//     setStatus(value)
//     setStatusChip(true)
//   }
 
//   // الفلاتر المطبقة (شارات)
//   const statusLabel = STATUS_OPTIONS.find((o) => o.value === status)?.label
//   const chips = [
//     facultyChip && {
//       id: 'faculty',
//       label: 'الجهة: كلية الهندسة',
//       onRemove: () => setFacultyChip(false),
//     },
//     statusChip && {
//       id: 'status',
//       label: status === 'all' ? 'الحالة: الكل عدا المحذوفين' : `الحالة: ${statusLabel}`,
//       onRemove: () => {
//         setStatus('all')
//         setStatusChip(false)
//       },
//     },
//   ].filter(Boolean)
 
//   const clearAllFilters = () => {
//     setFacultyChip(false)
//     setStatusChip(false)
//     setStatus('all')
//     setEntityQuery('')
//   }
 
//   // تطبيق الفلترة على الصفوف
//   const q = entityQuery.trim()
//   const filteredOrders = ordersList.filter(
//     (o) =>
//       (status === 'all' || o.statusType === status) &&
//       (!q || `${o.entity} ${o.title}`.includes(q))
//   )
//   const isFiltered = status !== 'all' || q !== ''
//   const resultsText = isFiltered
//     ? `عرض ${filteredOrders.length} من أصل 26 طلب إحتياج`
//     : 'عرض 1 إلى 5 من أصل 26 طلب إحتياج'
 
//   const pagerBtn =
//     'w-8 h-8 flex items-center justify-center rounded text-[#0b1c30] dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer'
 
//   return (
//     <div
//       dir="rtl"
//       className="min-h-screen bg-[#f4f4f4] dark:bg-[#071322] text-slate-800 dark:text-slate-100 flex flex-row transition-colors duration-200 selection:bg-sky-500 selection:text-white"
//       style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
//     >
//       {/* ==================== القائمة الجانبية (Desktop Sidebar) ==================== */}
//       <aside className="hidden lg:block lg:w-[clamp(260px,18.4vw,353px)] shrink-0 bg-white dark:bg-[#0b1b2d] sticky top-0 h-screen overflow-y-auto overflow-x-hidden select-none z-20 dark:border-l dark:border-slate-800">
//         <SidebarContent activeTab={activeTab} setActiveTab={setActiveTab} />
//       </aside>
 
//       {/* ==================== محتوى الصفحة الرئيسي ==================== */}
//       <div className="flex-1 flex flex-col min-w-0">
//         {/* الشريط العلوي (Top Header Bar) */}
//         <header className="h-16 bg-white dark:bg-[#0b1b2d] px-4 sm:px-6 lg:pr-6 lg:pl-[clamp(24px,4.6vw,88px)] flex items-center justify-between gap-4 sticky top-0 z-10 dark:border-b dark:border-slate-800">
//           {/* يمين الهيدر: مسار التنقل */}
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => setIsMobileMenuOpen(true)}
//               className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
//               aria-label="القائمة"
//             >
//               <i className="fa-solid fa-bars text-lg"></i>
//             </button>
 
//             <nav className="flex items-center gap-2 text-[13px] sm:text-[15px] text-[#565e74] dark:text-slate-400">
//               <span className="hidden sm:inline">نظام إدارة المشتريات - الأزهر</span>
//               <i className="hidden sm:inline fa-solid fa-angle-left text-[11px] text-slate-500"></i>
//               <span className="font-bold text-black dark:text-white">الإدارة الطالبة</span>
//             </nav>
//           </div>
 
//           {/* منتصف الهيدر: شريط البحث الدائري */}
//           <div className="hidden md:block relative min-w-0 md:flex-1 md:max-w-[345px] lg:flex-none lg:w-[clamp(180px,17.97vw,345px)]">
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               placeholder="بحث"
//               className="w-full h-10 bg-[#f4f4f4] dark:bg-[#0f243a] border border-[#bbbbbb] dark:border-slate-700 rounded-full pr-12 pl-4 text-sm text-slate-700 dark:text-slate-200 placeholder-[#828282] focus:outline-none focus:border-[#00B4F0] transition-colors"
//             />
//             <button
//               type="button"
//               aria-label="بحث"
//               className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-900 dark:text-slate-400"
//             >
//               <SearchIcon className="w-6 h-6" />
//             </button>
//           </div>
 
//           {/* يسار الهيدر: الإشعارات واللغة */}
//           <div className="flex items-center gap-4">
//             <NotificationMenu />
//             <span className="w-px h-6 bg-slate-200 dark:bg-slate-700"></span>
//             <LanguageMenu />
//           </div>
//         </header>
 
//         {/* محتوى الصفحة */}
//         <main className="w-full px-4 sm:px-6 lg:pr-6 lg:pl-[clamp(24px,4.17vw,80px)] pt-6 lg:pt-[42px] pb-8 sm:pb-10 space-y-5 sm:space-y-6">
//           {/* ترويسة الصفحة وزر طلب إحتياج جديد */}
//           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:mb-4">
//             {/* جهة اليمين: عنوان الصفحة ووصفها */}
//             <div className="text-right">
//               <h1 className="text-xl sm:text-2xl lg:text-[28px] font-black text-black dark:text-white tracking-tight">
//                 طلبات الاحتياج والمشتريات المؤسسية
//               </h1>
//               <p className="mt-[18px] text-sm sm:text-[15px] text-[#545f73] dark:text-slate-400 font-medium">
//                 إدارة ومتابعة متطلبات الكليات والعمادات المساندة، ومطابقتها مع الميزانية المعتمدة قبل طرح المنافسة
//               </p>
//             </div>
 
//             {/* جهة اليسار: زر طلب إحتياج جديد */}
//             <button
//               onClick={() => navigate('/new-order')}
//               className="inline-flex items-center justify-center w-full sm:w-[273px] h-12 rounded-full bg-[linear-gradient(to_left,#01B0F5,#0066F0)] hover:brightness-105 hover:shadow-lg hover:shadow-sky-500/30 active:scale-[0.98] text-black font-bold text-[15px] transition-all cursor-pointer whitespace-nowrap shrink-0"
//             >
//               <span>طلب إحتياج جديد</span>
//             </button>
//           </div>
 
//           {/* بطاقة الفلاتر والبحث */}
//           <div className="bg-white dark:bg-[#0b1b2d] rounded-3xl p-4 sm:p-6 space-y-4 sm:space-y-6 shadow-[0_2px_12px_rgba(16,24,40,0.04)] dark:border dark:border-slate-800">
//             {/* أدوات البحث والفرز */}
//             <div className="flex items-center gap-3 sm:gap-6 flex-wrap sm:flex-nowrap">
//               {/* حقل البحث بالجهة الطالبة */}
//               <div className="relative basis-full sm:basis-0 sm:flex-1 sm:min-w-[200px]">
//                 <input
//                   type="text"
//                   value={entityQuery}
//                   onChange={(e) => setEntityQuery(e.target.value)}
//                   placeholder="تصفية الطلبات حسب الجهة الطالبة"
//                   className="w-full h-10 bg-[#f4f4f4] dark:bg-[#0f243a] border border-[#bbbbbb] dark:border-slate-700 rounded-full pr-12 pl-4 text-[12px] text-slate-700 dark:text-slate-200 placeholder-[#828282] focus:outline-none focus:border-[#00B4F0] transition-colors"
//                 />
//                 <button
//                   type="button"
//                   aria-label="بحث"
//                   className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 dark:text-slate-400"
//                 >
//                   <SearchIcon className="w-6 h-6" />
//                 </button>
//               </div>
 
//               {/* القائمة المنسدلة التفاعلية: حالة الطلب */}
//               <StatusDropdown value={status} onChange={handleStatusChange} />
 
//               {/* زر إعادة التعيين (Reset) */}
//               <button
//                 type="button"
//                 onClick={clearAllFilters}
//                 title="إعادة ضبط الفلاتر"
//                 className="w-10 h-10 rounded-xl bg-[#e8f6ff] dark:bg-[#0f243a] text-black dark:text-sky-300 flex items-center justify-center hover:bg-[#d6eefc] dark:hover:bg-[#142e4a] active:rotate-180 transition-all duration-300 cursor-pointer shrink-0"
//               >
//                 <i className="fa-solid fa-rotate-right text-sm"></i>
//               </button>
//             </div>
 
//             {/* سطر الفلاتر المطبقة */}
//             {chips.length > 0 && (
//               <div className="flex items-center gap-2 flex-wrap text-sm min-h-[38px]">
//                 <span className="text-[#464554] dark:text-slate-300 font-medium ml-1">
//                   الفلاتر المطبقة:
//                 </span>
//                 {chips.map((chip) => (
//                   <span
//                     key={chip.id}
//                     className="inline-flex items-center gap-2 px-3 h-[38px] rounded-lg bg-[#e8f6ff] dark:bg-[#0c2438] text-black dark:text-slate-200 text-sm font-medium"
//                   >
//                     <span>{chip.label}</span>
//                     <button
//                       onClick={chip.onRemove}
//                       aria-label="إزالة الفلتر"
//                       className="text-slate-600 hover:text-black dark:hover:text-slate-200 cursor-pointer"
//                     >
//                       <i className="fa-regular fa-circle-xmark text-sm"></i>
//                     </button>
//                   </span>
//                 ))}
//                 <button
//                   onClick={clearAllFilters}
//                   className="text-[#0077ff] font-medium hover:underline cursor-pointer mr-2"
//                 >
//                   مسح الكل
//                 </button>
//               </div>
//             )}
//           </div>
 
//           {/* جدول الطلبات */}
//           <div className="bg-white dark:bg-[#0b1b2d] rounded-3xl shadow-[0_2px_12px_rgba(16,24,40,0.04)] dark:border dark:border-slate-800 overflow-hidden">
//             <div className="hidden xl:block">
//               <table className="w-full table-fixed border-collapse text-right">
//                 <colgroup>
//                   <col style={{ width: '13.5%' }} />
//                   <col style={{ width: '16.5%' }} />
//                   <col style={{ width: '12.2%' }} />
//                   <col style={{ width: '12.2%' }} />
//                   <col style={{ width: '12.2%' }} />
//                   <col style={{ width: '12.2%' }} />
//                   <col style={{ width: '12.2%' }} />
//                   <col style={{ width: '9%' }} />
//                 </colgroup>
//                 {/* ترويسة الجدول */}
//                 <thead>
//                   <tr className="h-[66px] bg-[#e8f6ff] dark:bg-[#0c2438] text-[#5e5e5e] dark:text-slate-200 text-[13px] 2xl:text-[15px] font-medium">
//                     <th className="px-2 text-center font-medium">رقم الطلب</th>
//                     <th className="px-2 text-right font-medium">عنوان الإحتياج والمواصفات</th>
//                     <th className="px-2 text-center font-medium">الجهة الطالبة</th>
//                     <th className="px-2 text-center font-medium">تاريخ التقديم</th>
//                     <th className="px-2 text-center font-medium">الكمية المقدرة</th>
//                     <th className="px-2 text-center font-medium">التكلفة المتوقعة</th>
//                     <th className="px-2 text-center font-medium">حالة الإعتماد</th>
//                     <th className="px-2 text-center font-medium">الإجراءات</th>
//                   </tr>
//                 </thead>
 
//                 {/* صفوف الجدول */}
//                 <tbody className="text-sm 2xl:text-[15px]">
//                   {filteredOrders.length === 0 && (
//                     <tr className="h-[103px]">
//                       <td colSpan={8} className="text-center text-[#5e5e5e] dark:text-slate-400">
//                         لا توجد طلبات مطابقة للفلاتر المختارة.
//                       </td>
//                     </tr>
//                   )}
//                   {filteredOrders.map((order, idx) => {
//                     const st = statusStyles[order.statusType]
//                     return (
//                       <tr
//                         key={idx}
//                         className="h-[103px] hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
//                       >
//                         <td className="px-2 text-center font-bold text-black dark:text-white">
//                           {order.id}
//                         </td>
 
//                         <td className="px-2 text-right">
//                           <div className="font-bold text-[#0b1c30] dark:text-white">
//                             {order.title}
//                           </div>
//                           <div className="text-sm text-[#5e5e5e] dark:text-slate-400 mt-1">
//                             {order.specs}
//                           </div>
//                         </td>
 
//                         <td className="px-2 text-center text-[#5e5e5e] dark:text-slate-300 leading-relaxed">
//                           {order.entity}
//                         </td>
 
//                         <td className="px-2 text-center text-[#5e5e5e] dark:text-slate-300">
//                           {order.date}
//                         </td>
 
//                         <td className="px-2 text-center text-[#5e5e5e] dark:text-slate-300">
//                           {order.quantity}
//                         </td>
 
//                         <td className="px-2 text-center text-[#5e5e5e] dark:text-slate-300">
//                           {order.cost}
//                         </td>
 
//                         <td className="px-2 text-center">
//                           <span
//                             className={`inline-flex items-center gap-2 px-3 h-[30px] rounded-lg font-medium text-[15px] ${st.wrap}`}
//                           >
//                             <span className={`w-2.5 h-2.5 rounded-full ${st.dot}`}></span>
//                             <span>{order.statusText}</span>
//                           </span>
//                         </td>
 
//                         <td className="px-2 text-center">
//                           <div className="flex items-center justify-center gap-3 xl:gap-6">
//                             <button
//                               type="button"
//                               onClick={() => navigate('/edit-order')}
//                               className="text-[#1a1a1a] hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400 hover:scale-110 transition-all cursor-pointer"
//                               title="عرض التفاصيل"
//                             >
//                               <i className="fa-regular fa-eye text-xl"></i>
//                             </button>
//                             <button
//                               type="button"
//                               className="text-[#1a1a1a] hover:text-slate-500 dark:text-slate-300 dark:hover:text-slate-100 hover:scale-110 transition-all cursor-pointer"
//                               title="خيارات إضافية"
//                             >
//                               <i className="fa-solid fa-ellipsis-vertical text-xl"></i>
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     )
//                   })}
//                 </tbody>
//               </table>
//             </div>
 
//             {/* ==================== قائمة البطاقات للجوال والآيباد (بدل الجدول) ==================== */}
//             <div className="xl:hidden">
//               <div className="h-12 px-4 sm:px-6 flex items-center bg-[#e8f6ff] dark:bg-[#0c2438] text-sm font-medium text-[#5e5e5e] dark:text-slate-200">
//                 قائمة طلبات الإحتياج
//               </div>
//               {filteredOrders.length === 0 && (
//                 <div className="p-8 text-center text-sm text-[#5e5e5e] dark:text-slate-400">
//                   لا توجد طلبات مطابقة للفلاتر المختارة.
//                 </div>
//               )}
//               {filteredOrders.map((order, idx) => {
//                 const st = statusStyles[order.statusType]
//                 return (
//                   <div
//                     key={idx}
//                     className="p-4 sm:p-6 space-y-4 border-b border-slate-100 dark:border-slate-800 last:border-b-0 hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
//                   >
//                     <div className="flex items-center justify-between gap-3">
//                       <span className="font-bold text-black dark:text-white text-sm">
//                         {order.id}
//                       </span>
//                       <span
//                         className={`inline-flex items-center gap-2 px-3 h-[30px] rounded-lg font-medium text-sm whitespace-nowrap ${st.wrap}`}
//                       >
//                         <span className={`w-2.5 h-2.5 rounded-full ${st.dot}`}></span>
//                         <span>{order.statusText}</span>
//                       </span>
//                     </div>
 
//                     <div className="text-right">
//                       <div className="font-bold text-[#0b1c30] dark:text-white">{order.title}</div>
//                       <div className="text-sm text-[#5e5e5e] dark:text-slate-400 mt-1">
//                         {order.specs}
//                       </div>
//                     </div>
 
//                     <dl className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-3 text-sm text-right">
//                       {[
//                         ['الجهة الطالبة', order.entity],
//                         ['تاريخ التقديم', order.date],
//                         ['الكمية المقدرة', order.quantity],
//                         ['التكلفة المتوقعة', order.cost],
//                       ].map(([label, value]) => (
//                         <div key={label}>
//                           <dt className="text-xs text-slate-500 dark:text-slate-400">{label}</dt>
//                           <dd className="mt-0.5 font-medium text-[#5e5e5e] dark:text-slate-200">
//                             {value}
//                           </dd>
//                         </div>
//                       ))}
//                     </dl>
 
//                     <div className="flex items-center justify-end gap-5 pt-1">
//                       <button
//                         type="button"
//                         onClick={() => navigate('/edit-order')}
//                         className="text-[#1a1a1a] hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400 cursor-pointer"
//                         title="عرض التفاصيل"
//                       >
//                         <i className="fa-regular fa-eye text-xl"></i>
//                       </button>
//                       <button
//                         type="button"
//                         className="text-[#1a1a1a] hover:text-slate-500 dark:text-slate-300 dark:hover:text-slate-100 cursor-pointer"
//                         title="خيارات إضافية"
//                       >
//                         <i className="fa-solid fa-ellipsis-vertical text-xl"></i>
//                       </button>
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
 
//             {/* ترقيم الصفحات (Pagination) أسفل الجدول */}
//             <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 py-4 text-sm border-t border-slate-100 dark:border-slate-800 xl:border-t-0">
//               {/* اليمين: عدد النتائج */}
//               <div className="text-[#565e74] dark:text-slate-400 font-medium text-center">
//                 {resultsText}
//               </div>
 
//               {/* اليسار: أزرار التنقل بين الصفحات */}
//               <div className="flex items-center justify-center flex-wrap gap-1 text-[#828282] dark:text-slate-400">
//                 <button type="button" title="الصفحة الأولى" className={pagerBtn}>
//                   <PagerBarLeft />
//                 </button>
//                 <button type="button" title="الصفحة السابقة" className={pagerBtn}>
//                   <PagerLeft />
//                 </button>
//                 <button
//                   type="button"
//                   className="w-8 h-8 flex items-center justify-center rounded bg-[#0077ff] text-white font-bold text-sm"
//                 >
//                   1
//                 </button>
//                 <button type="button" className={`${pagerBtn} font-medium text-sm`}>
//                   2
//                 </button>
//                 <button type="button" className={`${pagerBtn} font-medium text-sm`}>
//                   3
//                 </button>
//                 <span className="px-1 text-slate-500">...</span>
//                 <button type="button" className={`${pagerBtn} font-medium text-sm`}>
//                   26
//                 </button>
//                 <button type="button" title="الصفحة التالية" className={pagerBtn}>
//                   <PagerRight />
//                 </button>
//                 <button type="button" title="الصفحة الأخيرة" className={pagerBtn}>
//                   <PagerBarRight />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
 
//       {/* ==================== القائمة الجانبية للشاشات الصغيرة (Mobile Drawer) ==================== */}
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
//           className={`fixed top-0 right-0 w-[280px] max-w-[85vw] h-full bg-white dark:bg-[#0b1b2d] shadow-2xl z-10 overflow-y-auto overflow-x-hidden select-none transition-transform duration-300 ease-in-out ${
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








// import { useEffect, useRef, useState } from 'react'
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
 
// // الرئيسية: غير نشطة (4 مربعات مفرغة)
// const HomeOutlineIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <rect x="3" y="3" width="7" height="7" rx="1.5" />
//     <rect x="14" y="3" width="7" height="7" rx="1.5" />
//     <rect x="14" y="14" width="7" height="7" rx="1.5" />
//     <rect x="3" y="14" width="7" height="7" rx="1.5" />
//   </svg>
// )
 
// // الرئيسية: نشطة (مصمتة)
// const DashboardGridIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
//     <rect x="3" y="3" width="8" height="8" rx="1.5" />
//     <rect x="3" y="13" width="8" height="8" rx="1.5" />
//     <rect x="13" y="3" width="8" height="8" rx="1.5" />
//     <rect x="13" y="13" width="8" height="8" rx="1.5" />
//   </svg>
// )
 
// // طلب إحتياج: غير نشط (مستند مفرغ)
// const NeedRequestIcon = (props) => (
//   <svg {...strokeProps} {...props}>
//     <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5z" />
//     <path d="M14 2v5h5" />
//   </svg>
// )
 
// // طلب إحتياج: نشط (ملفات مصمتة)
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
 
// // البحث (خطّ رفيع)
// const SearchIcon = (props) => (
//   <svg {...strokeProps} strokeWidth={1.5} {...props}>
//     <circle cx="11" cy="11" r="7.5" />
//     <path d="m20.5 20.5-4-4" />
//   </svg>
// )
 
// // أيقونات الترقيم
// const pagerProps = { ...strokeProps, strokeWidth: 1.75, className: 'w-4 h-4' }
// const PagerBarLeft = () => (
//   <svg {...pagerProps}>
//     <path d="m16 7-5 5 5 5" />
//     <path d="M7 5v14" />
//   </svg>
// )
// const PagerBarRight = () => (
//   <svg {...pagerProps}>
//     <path d="m8 7 5 5-5 5" />
//     <path d="M17 5v14" />
//   </svg>
// )
// const PagerLeft = () => (
//   <svg {...pagerProps}>
//     <path d="m14 7-5 5 5 5" />
//   </svg>
// )
// const PagerRight = () => (
//   <svg {...pagerProps}>
//     <path d="m10 7 5 5-5 5" />
//   </svg>
// )
 
// const navItems = [
//   { id: 'home', label: 'الرئيسية', Icon: HomeOutlineIcon, ActiveIcon: DashboardGridIcon, route: '/dashboard' },
//   { id: 'need-requests', label: 'طلب إحتياج', Icon: NeedRequestIcon, ActiveIcon: FilesFilledIcon, route: '/my-orders' },
// ]
 
// // ألوان حالات الطلب (من التصميم)
// const statusStyles = {
//   approved: {
//     wrap: 'bg-[#eefff8] text-[#34c759] dark:bg-emerald-500/15 dark:text-emerald-400',
//     dot: 'bg-[#34c759] dark:bg-emerald-400',
//   },
//   'in-review': {
//     wrap: 'bg-[#fffbed] text-[#f97316] dark:bg-orange-500/15 dark:text-orange-400',
//     dot: 'bg-[#f97316] dark:bg-orange-400',
//   },
//   draft: {
//     wrap: 'bg-[#ededed] text-[#5e5e5e] dark:bg-slate-500/20 dark:text-slate-300',
//     dot: 'bg-[#5e5e5e] dark:bg-slate-300',
//   },
// }
 
// // خيارات قائمة حالة الطلب
// const STATUS_OPTIONS = [
//   { value: 'all', label: 'الكل' },
//   { value: 'approved', label: 'معتمد', dot: 'bg-[#34c759]' },
//   { value: 'in-review', label: 'تحت التدقيق', dot: 'bg-[#f97316]' },
//   { value: 'draft', label: 'مسودة', dot: 'bg-[#5e5e5e]' },
// ]
 
// /* ==================== قائمة "حالة الطلب" المنسدلة (تفاعلية) ==================== */
 
// function StatusDropdown({ value, onChange }) {
//   const [open, setOpen] = useState(false)
//   const wrapRef = useRef(null)
 
//   // إغلاق عند الضغط خارج القائمة أو بزر Escape
//   useEffect(() => {
//     if (!open) return undefined
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
 
//   const current = STATUS_OPTIONS.find((o) => o.value === value)
//   const isDefault = value === 'all'
 
//   return (
//     <div ref={wrapRef} className="relative h-10 flex-1 sm:flex-none sm:w-[224px]">
//       <button
//         type="button"
//         onClick={() => setOpen((v) => !v)}
//         aria-haspopup="listbox"
//         aria-expanded={open}
//         className={`h-10 w-full px-4 rounded-full border bg-[#f4f4f4] dark:bg-[#0f243a] flex items-center justify-between text-sm transition-colors cursor-pointer ${
//           open
//             ? 'border-[#00B4F0]'
//             : 'border-[#bbbbbb] hover:border-slate-500 dark:border-slate-700 dark:hover:border-slate-600'
//         }`}
//       >
//         <span
//           className={
//             isDefault
//               ? 'text-[#949494] dark:text-slate-400'
//               : 'text-black dark:text-white font-medium'
//           }
//         >
//           {isDefault ? 'حالة الطلب' : current.label}
//         </span>
//         <i
//           className={`fa-solid fa-angle-down text-xs text-black dark:text-slate-300 transition-transform duration-200 ${
//             open ? 'rotate-180' : ''
//           }`}
//         ></i>
//       </button>
 
//       {open && (
//         <ul
//           role="listbox"
//           className="absolute top-[calc(100%+6px)] inset-x-0 z-30 p-1.5 rounded-2xl bg-white dark:bg-[#0b1b2d] border border-slate-200 dark:border-slate-700 shadow-[0_12px_32px_-8px_rgba(16,24,40,0.25)]"
//         >
//           {STATUS_OPTIONS.map((opt) => {
//             const selected = opt.value === value
//             return (
//               <li key={opt.value} role="option" aria-selected={selected}>
//                 <button
//                   type="button"
//                   onClick={() => {
//                     onChange(opt.value)
//                     setOpen(false)
//                   }}
//                   className={`w-full h-10 px-3 rounded-xl flex items-center gap-2 text-sm text-right cursor-pointer transition-colors hover:bg-[#e8f6ff] dark:hover:bg-[#142e4a] ${
//                     selected
//                       ? 'bg-[#e8f6ff] dark:bg-[#0c2438] font-bold text-black dark:text-white'
//                       : 'text-slate-700 dark:text-slate-200'
//                   }`}
//                 >
//                   {opt.dot ? (
//                     <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${opt.dot}`}></span>
//                   ) : (
//                     <span className="w-2.5 shrink-0"></span>
//                   )}
//                   <span className="flex-1">{opt.label}</span>
//                   {selected && <i className="fa-solid fa-check text-xs text-[#0077ff]"></i>}
//                 </button>
//               </li>
//             )
//           })}
//         </ul>
//       )}
//     </div>
//   )
// }
 
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
//               className="h-[clamp(36px,4.7vh,52px)] w-auto object-contain"
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
//           <i className="fa-solid fa-angle-left text-sm text-slate-800 dark:text-slate-300 group-hover:-translate-x-1 transition-transform"></i>
//         </div>
//       </div>
//     </div>
//   )
// }
 
// /* ==================== صفحة طلبات الاحتياج والمشتريات المؤسسية ==================== */
 
// export default function MyOrders() {
//   const navigate = useNavigate()
//   const [activeTab, setActiveTab] = useState('need-requests')
//   const [searchQuery, setSearchQuery] = useState('')
//   const [entityQuery, setEntityQuery] = useState('')
//   const [status, setStatus] = useState('all')
//   const [facultyChip, setFacultyChip] = useState(true)
//   const [statusChip, setStatusChip] = useState(true)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
 
//   // صفوف جدول طلبات الاحتياج
//   const ordersList = [
//     {
//       id: 'PR-2025-0842',
//       title: 'تجديد خوادم مركز البيانات الرئيسي',
//       specs: 'توريد وحدات معالجة',
//       entity: 'عمادة تقنية المعلومات',
//       date: '24 أكتوبر 2025',
//       quantity: '12 خادم',
//       cost: '150,000 ش',
//       statusText: 'معتمد',
//       statusType: 'approved',
//     },
//     {
//       id: 'PR-2025-0842',
//       title: 'تجديد خوادم مركز البيانات الرئيسي',
//       specs: 'توريد وحدات معالجة',
//       entity: 'عمادة تقنية المعلومات',
//       date: '24 أكتوبر 2025',
//       quantity: '12 خادم',
//       cost: '150,000 ش',
//       statusText: 'تحت التدقيق',
//       statusType: 'in-review',
//     },
//     {
//       id: 'PR-2025-0842',
//       title: 'تجديد خوادم مركز البيانات الرئيسي',
//       specs: 'توريد وحدات معالجة',
//       entity: 'عمادة تقنية المعلومات',
//       date: '24 أكتوبر 2025',
//       quantity: '12 خادم',
//       cost: '150,000 ش',
//       statusText: 'مسودة',
//       statusType: 'draft',
//     },
//   ]
 
//   // اختيار حالة من القائمة يُظهر شارة الحالة من جديد
//   const handleStatusChange = (value) => {
//     setStatus(value)
//     setStatusChip(true)
//   }
 
//   // الفلاتر المطبقة (شارات)
//   const statusLabel = STATUS_OPTIONS.find((o) => o.value === status)?.label
//   const chips = [
//     facultyChip && {
//       id: 'faculty',
//       label: 'الجهة: كلية الهندسة',
//       onRemove: () => setFacultyChip(false),
//     },
//     statusChip && {
//       id: 'status',
//       label: status === 'all' ? 'الحالة: الكل عدا المحذوفين' : `الحالة: ${statusLabel}`,
//       onRemove: () => {
//         setStatus('all')
//         setStatusChip(false)
//       },
//     },
//   ].filter(Boolean)
 
//   const clearAllFilters = () => {
//     setFacultyChip(false)
//     setStatusChip(false)
//     setStatus('all')
//     setEntityQuery('')
//   }
 
//   // تطبيق الفلترة على الصفوف
//   const q = entityQuery.trim()
//   const filteredOrders = ordersList.filter(
//     (o) =>
//       (status === 'all' || o.statusType === status) &&
//       (!q || `${o.entity} ${o.title}`.includes(q))
//   )
//   const isFiltered = status !== 'all' || q !== ''
//   const resultsText = isFiltered
//     ? `عرض ${filteredOrders.length} من أصل 26 طلب إحتياج`
//     : 'عرض 1 إلى 5 من أصل 26 طلب إحتياج'
 
//   const pagerBtn =
//     'w-8 h-8 flex items-center justify-center rounded text-[#0b1c30] dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer'
 
//   return (
//     <div
//       dir="rtl"
//       className="min-h-screen bg-[#f4f4f4] dark:bg-[#071322] text-slate-800 dark:text-slate-100 flex flex-row transition-colors duration-200 selection:bg-sky-500 selection:text-white"
//       style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
//     >
//       {/* ==================== القائمة الجانبية (Desktop Sidebar) ==================== */}
//       <aside className="hidden lg:block lg:w-[clamp(260px,18.4vw,353px)] shrink-0 bg-white dark:bg-[#0b1b2d] sticky top-0 h-screen overflow-y-auto overflow-x-hidden select-none z-20 dark:border-l dark:border-slate-800">
//         <SidebarContent activeTab={activeTab} setActiveTab={setActiveTab} />
//       </aside>
 
//       {/* ==================== محتوى الصفحة الرئيسي ==================== */}
//       <div className="flex-1 flex flex-col min-w-0">
//         {/* الشريط العلوي (Top Header Bar) */}
//         <header className="h-16 bg-white dark:bg-[#0b1b2d] px-4 sm:px-6 lg:pr-6 lg:pl-[clamp(24px,4.6vw,88px)] flex items-center justify-between gap-4 sticky top-0 z-10 dark:border-b dark:border-slate-800">
//           {/* يمين الهيدر: مسار التنقل */}
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => setIsMobileMenuOpen(true)}
//               className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
//               aria-label="القائمة"
//             >
//               <i className="fa-solid fa-bars text-lg"></i>
//             </button>
 
//             <nav className="flex items-center gap-2 text-[13px] sm:text-[15px] text-[#565e74] dark:text-slate-400">
//               <span className="hidden sm:inline">نظام إدارة المشتريات - الأزهر</span>
//               <i className="hidden sm:inline fa-solid fa-angle-left text-[11px] text-slate-500"></i>
//               <span className="font-bold text-black dark:text-white">الإدارة الطالبة</span>
//             </nav>
//           </div>
 
//           {/* منتصف الهيدر: شريط البحث الدائري */}
//           <div className="hidden md:block relative min-w-0 md:flex-1 md:max-w-[345px] lg:flex-none lg:w-[clamp(180px,17.97vw,345px)]">
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               placeholder="بحث"
//               className="w-full h-10 bg-[#f4f4f4] dark:bg-[#0f243a] border border-[#bbbbbb] dark:border-slate-700 rounded-full pr-12 pl-4 text-sm text-slate-700 dark:text-slate-200 placeholder-[#828282] focus:outline-none focus:border-[#00B4F0] transition-colors"
//             />
//             <button
//               type="button"
//               aria-label="بحث"
//               className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-900 dark:text-slate-400"
//             >
//               <SearchIcon className="w-6 h-6" />
//             </button>
//           </div>
 
//           {/* يسار الهيدر: الإشعارات واللغة */}
//           <div className="flex items-center gap-4">
//             <NotificationMenu />
//             <span className="w-px h-6 bg-slate-200 dark:bg-slate-700"></span>
//             <LanguageMenu />
//           </div>
//         </header>
 
//         {/* محتوى الصفحة */}
//         <main className="w-full px-4 sm:px-6 lg:pr-6 lg:pl-[clamp(24px,4.17vw,80px)] pt-6 lg:pt-[42px] pb-8 sm:pb-10 space-y-5 sm:space-y-6">
//           {/* ترويسة الصفحة وزر طلب إحتياج جديد */}
//           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:mb-4">
//             {/* جهة اليمين: عنوان الصفحة ووصفها */}
//             <div className="text-right">
//               <h1 className="text-xl sm:text-2xl lg:text-[28px] font-black text-black dark:text-white tracking-tight">
//                 طلبات الاحتياج والمشتريات المؤسسية
//               </h1>
//               <p className="mt-[18px] text-sm sm:text-[15px] text-[#545f73] dark:text-slate-400 font-medium">
//                 إدارة ومتابعة متطلبات الكليات والعمادات المساندة، ومطابقتها مع الميزانية المعتمدة قبل طرح المنافسة
//               </p>
//             </div>
 
//             {/* جهة اليسار: زر طلب إحتياج جديد */}
//             <button
//               onClick={() => navigate('/new-order')}
//               className="inline-flex items-center justify-center w-full sm:w-[273px] h-12 rounded-full bg-[linear-gradient(to_left,#01B0F5,#0066F0)] hover:brightness-105 hover:shadow-lg hover:shadow-sky-500/30 active:scale-[0.98] text-black font-bold text-[15px] transition-all cursor-pointer whitespace-nowrap shrink-0"
//             >
//               <span>طلب إحتياج جديد</span>
//             </button>
//           </div>
 
//           {/* بطاقة الفلاتر والبحث */}
//           <div className="bg-white dark:bg-[#0b1b2d] rounded-3xl p-4 sm:p-6 space-y-4 sm:space-y-6 shadow-[0_2px_12px_rgba(16,24,40,0.04)] dark:border dark:border-slate-800">
//             {/* أدوات البحث والفرز */}
//             <div className="flex items-center gap-3 sm:gap-6 flex-wrap sm:flex-nowrap">
//               {/* حقل البحث بالجهة الطالبة */}
//               <div className="relative basis-full sm:basis-0 sm:flex-1 sm:min-w-[200px]">
//                 <input
//                   type="text"
//                   value={entityQuery}
//                   onChange={(e) => setEntityQuery(e.target.value)}
//                   placeholder="تصفية الطلبات حسب الجهة الطالبة"
//                   className="w-full h-10 bg-[#f4f4f4] dark:bg-[#0f243a] border border-[#bbbbbb] dark:border-slate-700 rounded-full pr-12 pl-4 text-sm text-slate-700 dark:text-slate-200 placeholder-[#828282] focus:outline-none focus:border-[#00B4F0] transition-colors"
//                 />
//                 <button
//                   type="button"
//                   aria-label="بحث"
//                   className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 dark:text-slate-400"
//                 >
//                   <SearchIcon className="w-6 h-6" />
//                 </button>
//               </div>
 
//               {/* القائمة المنسدلة التفاعلية: حالة الطلب */}
//               <StatusDropdown value={status} onChange={handleStatusChange} />
 
//               {/* زر إعادة التعيين (Reset) */}
//               <button
//                 type="button"
//                 onClick={clearAllFilters}
//                 title="إعادة ضبط الفلاتر"
//                 className="w-10 h-10 rounded-xl bg-[#e8f6ff] dark:bg-[#0f243a] text-black dark:text-sky-300 flex items-center justify-center hover:bg-[#d6eefc] dark:hover:bg-[#142e4a] active:rotate-180 transition-all duration-300 cursor-pointer shrink-0"
//               >
//                 <i className="fa-solid fa-rotate-right text-sm"></i>
//               </button>
//             </div>
 
//             {/* سطر الفلاتر المطبقة */}
//             {chips.length > 0 && (
//               <div className="flex items-center gap-2 flex-wrap text-sm min-h-[38px]">
//                 <span className="text-[#464554] dark:text-slate-300 font-medium ml-1">
//                   الفلاتر المطبقة:
//                 </span>
//                 {chips.map((chip) => (
//                   <span
//                     key={chip.id}
//                     className="inline-flex items-center gap-2 px-3 h-[38px] rounded-lg bg-[#e8f6ff] dark:bg-[#0c2438] text-black dark:text-slate-200 text-sm font-medium"
//                   >
//                     <span>{chip.label}</span>
//                     <button
//                       onClick={chip.onRemove}
//                       aria-label="إزالة الفلتر"
//                       className="text-slate-600 hover:text-black dark:hover:text-slate-200 cursor-pointer"
//                     >
//                       <i className="fa-regular fa-circle-xmark text-sm"></i>
//                     </button>
//                   </span>
//                 ))}
//                 <button
//                   onClick={clearAllFilters}
//                   className="text-[#0077ff] font-medium hover:underline cursor-pointer mr-2"
//                 >
//                   مسح الكل
//                 </button>
//               </div>
//             )}
//           </div>
 
//           {/* جدول الطلبات */}
//           <div className="bg-white dark:bg-[#0b1b2d] rounded-3xl shadow-[0_2px_12px_rgba(16,24,40,0.04)] dark:border dark:border-slate-800 overflow-hidden">
//             <div className="hidden xl:block">
//               <table className="w-full table-fixed border-collapse text-right">
//                 <colgroup>
//                   <col style={{ width: '11%' }} />
//                   <col style={{ width: '24%' }} />
//                   <col style={{ width: '15%' }} />
//                   <col style={{ width: '11%' }} />
//                   <col style={{ width: '9%' }} />
//                   <col style={{ width: '10%' }} />
//                   <col style={{ width: '11%' }} />
//                   <col style={{ width: '9%' }} />
//                 </colgroup>
//                 {/* ترويسة الجدول */}
//                 <thead>
//                   <tr className="h-[66px] bg-[#e8f6ff] dark:bg-[#0c2438] text-[#5e5e5e] dark:text-slate-200 text-[13px] 2xl:text-[15px] font-medium">
//                     <th className="px-2 text-center font-medium">رقم الطلب</th>
//                     <th className="px-2 text-right font-medium">عنوان الإحتياج والمواصفات</th>
//                     <th className="px-2 text-center font-medium">الجهة الطالبة</th>
//                     <th className="px-2 text-center font-medium">تاريخ التقديم</th>
//                     <th className="px-2 text-center font-medium">الكمية المقدرة</th>
//                     <th className="px-2 text-center font-medium">التكلفة المتوقعة</th>
//                     <th className="px-2 text-center font-medium">حالة الإعتماد</th>
//                     <th className="px-2 text-center font-medium">الإجراءات</th>
//                   </tr>
//                 </thead>
 
//                 {/* صفوف الجدول */}
//                 <tbody className="text-sm 2xl:text-[15px]">
//                   {filteredOrders.length === 0 && (
//                     <tr className="h-[103px]">
//                       <td colSpan={8} className="text-center text-[#5e5e5e] dark:text-slate-400">
//                         لا توجد طلبات مطابقة للفلاتر المختارة.
//                       </td>
//                     </tr>
//                   )}
//                   {filteredOrders.map((order, idx) => {
//                     const st = statusStyles[order.statusType]
//                     return (
//                       <tr
//                         key={idx}
//                         className="h-[103px] hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
//                       >
//                         <td className="px-2 text-center font-bold text-black dark:text-white">
//                           {order.id}
//                         </td>
 
//                         <td className="px-2 text-right">
//                           <div className="font-bold text-[#0b1c30] dark:text-white whitespace-nowrap">
//                             {order.title}
//                           </div>
//                           <div className="text-sm text-[#5e5e5e] dark:text-slate-400 mt-1 whitespace-nowrap">
//                             {order.specs}
//                           </div>
//                         </td>
 
//                         <td className="px-2 text-center text-[#5e5e5e] dark:text-slate-300 leading-relaxed whitespace-nowrap">
//                           {order.entity}
//                         </td>
 
//                         <td className="px-2 text-center text-[#5e5e5e] dark:text-slate-300">
//                           {order.date}
//                         </td>
 
//                         <td className="px-2 text-center text-[#5e5e5e] dark:text-slate-300">
//                           {order.quantity}
//                         </td>
 
//                         <td className="px-2 text-center text-[#5e5e5e] dark:text-slate-300">
//                           {order.cost}
//                         </td>
 
//                         <td className="px-2 text-center">
//                           <span
//                             className={`inline-flex items-center gap-2 px-3 h-[30px] rounded-lg font-medium text-[15px] ${st.wrap}`}
//                           >
//                             <span className={`w-2.5 h-2.5 rounded-full ${st.dot}`}></span>
//                             <span>{order.statusText}</span>
//                           </span>
//                         </td>
 
//                         <td className="px-2 text-center">
//                           <div className="flex items-center justify-center gap-3 xl:gap-6">
//                             <button
//                               type="button"
//                               onClick={() => navigate('/edit-order')}
//                               className="text-[#1a1a1a] hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400 hover:scale-110 transition-all cursor-pointer"
//                               title="عرض التفاصيل"
//                             >
//                               <i className="fa-regular fa-eye text-xl"></i>
//                             </button>
//                             <button
//                               type="button"
//                               className="text-[#1a1a1a] hover:text-slate-500 dark:text-slate-300 dark:hover:text-slate-100 hover:scale-110 transition-all cursor-pointer"
//                               title="خيارات إضافية"
//                             >
//                               <i className="fa-solid fa-ellipsis-vertical text-xl"></i>
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     )
//                   })}
//                 </tbody>
//               </table>
//             </div>
 
//             {/* ==================== قائمة البطاقات للجوال والآيباد (بدل الجدول) ==================== */}
//             <div className="xl:hidden">
//               <div className="h-12 px-4 sm:px-6 flex items-center bg-[#e8f6ff] dark:bg-[#0c2438] text-sm font-medium text-[#5e5e5e] dark:text-slate-200">
//                 قائمة طلبات الإحتياج
//               </div>
//               {filteredOrders.length === 0 && (
//                 <div className="p-8 text-center text-sm text-[#5e5e5e] dark:text-slate-400">
//                   لا توجد طلبات مطابقة للفلاتر المختارة.
//                 </div>
//               )}
//               {filteredOrders.map((order, idx) => {
//                 const st = statusStyles[order.statusType]
//                 return (
//                   <div
//                     key={idx}
//                     className="p-4 sm:p-6 space-y-4 border-b border-slate-100 dark:border-slate-800 last:border-b-0 hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
//                   >
//                     <div className="flex items-center justify-between gap-3">
//                       <span className="font-bold text-black dark:text-white text-sm">
//                         {order.id}
//                       </span>
//                       <span
//                         className={`inline-flex items-center gap-2 px-3 h-[30px] rounded-lg font-medium text-sm whitespace-nowrap ${st.wrap}`}
//                       >
//                         <span className={`w-2.5 h-2.5 rounded-full ${st.dot}`}></span>
//                         <span>{order.statusText}</span>
//                       </span>
//                     </div>
 
//                     <div className="text-right">
//                       <div className="font-bold text-[#0b1c30] dark:text-white">{order.title}</div>
//                       <div className="text-sm text-[#5e5e5e] dark:text-slate-400 mt-1">
//                         {order.specs}
//                       </div>
//                     </div>
 
//                     <dl className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-3 text-sm text-right">
//                       {[
//                         ['الجهة الطالبة', order.entity],
//                         ['تاريخ التقديم', order.date],
//                         ['الكمية المقدرة', order.quantity],
//                         ['التكلفة المتوقعة', order.cost],
//                       ].map(([label, value]) => (
//                         <div key={label}>
//                           <dt className="text-xs text-slate-500 dark:text-slate-400">{label}</dt>
//                           <dd className="mt-0.5 font-medium text-[#5e5e5e] dark:text-slate-200">
//                             {value}
//                           </dd>
//                         </div>
//                       ))}
//                     </dl>
 
//                     <div className="flex items-center justify-end gap-5 pt-1">
//                       <button
//                         type="button"
//                         onClick={() => navigate('/edit-order')}
//                         className="text-[#1a1a1a] hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400 cursor-pointer"
//                         title="عرض التفاصيل"
//                       >
//                         <i className="fa-regular fa-eye text-xl"></i>
//                       </button>
//                       <button
//                         type="button"
//                         className="text-[#1a1a1a] hover:text-slate-500 dark:text-slate-300 dark:hover:text-slate-100 cursor-pointer"
//                         title="خيارات إضافية"
//                       >
//                         <i className="fa-solid fa-ellipsis-vertical text-xl"></i>
//                       </button>
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
 
//             {/* ترقيم الصفحات (Pagination) أسفل الجدول */}
//             <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 py-4 text-sm border-t border-slate-100 dark:border-slate-800 xl:border-t-0">
//               {/* اليمين: عدد النتائج */}
//               <div className="text-[#565e74] dark:text-slate-400 font-medium text-center">
//                 {resultsText}
//               </div>
 
//               {/* اليسار: أزرار التنقل بين الصفحات */}
//               <div className="flex items-center justify-center flex-wrap gap-1 text-[#828282] dark:text-slate-400">
//                 <button type="button" title="الصفحة الأولى" className={pagerBtn}>
//                   <PagerBarLeft />
//                 </button>
//                 <button type="button" title="الصفحة السابقة" className={pagerBtn}>
//                   <PagerLeft />
//                 </button>
//                 <button
//                   type="button"
//                   className="w-8 h-8 flex items-center justify-center rounded bg-[#0077ff] text-white font-bold text-sm"
//                 >
//                   1
//                 </button>
//                 <button type="button" className={`${pagerBtn} font-medium text-sm`}>
//                   2
//                 </button>
//                 <button type="button" className={`${pagerBtn} font-medium text-sm`}>
//                   3
//                 </button>
//                 <span className="px-1 text-slate-500">...</span>
//                 <button type="button" className={`${pagerBtn} font-medium text-sm`}>
//                   26
//                 </button>
//                 <button type="button" title="الصفحة التالية" className={pagerBtn}>
//                   <PagerRight />
//                 </button>
//                 <button type="button" title="الصفحة الأخيرة" className={pagerBtn}>
//                   <PagerBarRight />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
 
//       {/* ==================== القائمة الجانبية للشاشات الصغيرة (Mobile Drawer) ==================== */}
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
//           className={`fixed top-0 right-0 w-[280px] max-w-[85vw] h-full bg-white dark:bg-[#0b1b2d] shadow-2xl z-10 overflow-y-auto overflow-x-hidden select-none transition-transform duration-300 ease-in-out ${
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





import { useEffect, useRef, useState } from 'react'
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

// الرئيسية: غير نشطة (4 مربعات مفرغة)
const HomeOutlineIcon = (props) => (
  <svg {...strokeProps} {...props}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
  </svg>
)

// الرئيسية: نشطة (مصمتة)
const DashboardGridIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <rect x="3" y="3" width="8" height="8" rx="1.5" />
    <rect x="3" y="13" width="8" height="8" rx="1.5" />
    <rect x="13" y="3" width="8" height="8" rx="1.5" />
    <rect x="13" y="13" width="8" height="8" rx="1.5" />
  </svg>
)

// طلب إحتياج: غير نشط (مستند مفرغ)
const NeedRequestIcon = (props) => (
  <svg {...strokeProps} {...props}>
    <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5z" />
    <path d="M14 2v5h5" />
  </svg>
)

// طلب إحتياج: نشط (ملفات مصمتة)
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

// البحث (خطّ رفيع)
const SearchIcon = (props) => (
  <svg {...strokeProps} strokeWidth={1.5} {...props}>
    <circle cx="11" cy="11" r="7.5" />
    <path d="m20.5 20.5-4-4" />
  </svg>
)

// أيقونات الترقيم
const pagerProps = { ...strokeProps, strokeWidth: 1.75, className: 'w-4 h-4' }
const PagerBarLeft = () => (
  <svg {...pagerProps}>
    <path d="m16 7-5 5 5 5" />
    <path d="M7 5v14" />
  </svg>
)
const PagerBarRight = () => (
  <svg {...pagerProps}>
    <path d="m8 7 5 5-5 5" />
    <path d="M17 5v14" />
  </svg>
)
const PagerLeft = () => (
  <svg {...pagerProps}>
    <path d="m14 7-5 5 5 5" />
  </svg>
)
const PagerRight = () => (
  <svg {...pagerProps}>
    <path d="m10 7 5 5-5 5" />
  </svg>
)

const navItems = [
  { id: 'home', label: 'الرئيسية', Icon: HomeOutlineIcon, ActiveIcon: DashboardGridIcon, route: '/dashboard' },
  { id: 'need-requests', label: 'طلب إحتياج', Icon: NeedRequestIcon, ActiveIcon: FilesFilledIcon, route: '/my-orders' },
]

// ألوان حالات الطلب (من التصميم)
const statusStyles = {
  approved: {
    wrap: 'bg-[#eefff8] text-[#34c759] dark:bg-emerald-500/15 dark:text-emerald-400',
    dot: 'bg-[#34c759] dark:bg-emerald-400',
  },
  'in-review': {
    wrap: 'bg-[#fffbed] text-[#f97316] dark:bg-orange-500/15 dark:text-orange-400',
    dot: 'bg-[#f97316] dark:bg-orange-400',
  },
  draft: {
    wrap: 'bg-[#ededed] text-[#5e5e5e] dark:bg-slate-500/20 dark:text-slate-300',
    dot: 'bg-[#5e5e5e] dark:bg-slate-300',
  },
}

// خيارات قائمة حالة الطلب
const STATUS_OPTIONS = [
  { value: 'all', label: 'الكل' },
  { value: 'approved', label: 'معتمد', dot: 'bg-[#34c759]' },
  { value: 'in-review', label: 'تحت التدقيق', dot: 'bg-[#f97316]' },
  { value: 'draft', label: 'مسودة', dot: 'bg-[#5e5e5e]' },
]

/* ==================== قائمة "حالة الطلب" المنسدلة (تفاعلية) ==================== */

function StatusDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)

  // إغلاق عند الضغط خارج القائمة أو بزر Escape
  useEffect(() => {
    if (!open) return undefined
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

  const current = STATUS_OPTIONS.find((o) => o.value === value)
  const isDefault = value === 'all'

  return (
    <div ref={wrapRef} className="relative h-10 flex-1 sm:flex-none sm:w-[224px]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`h-10 w-full px-4 rounded-full border bg-[#f4f4f4] dark:bg-[#0f243a] flex items-center justify-between text-sm transition-colors cursor-pointer ${
          open
            ? 'border-[#00B4F0]'
            : 'border-[#bbbbbb] hover:border-slate-500 dark:border-slate-700 dark:hover:border-slate-600'
        }`}
      >
        <span
          className={
            isDefault
              ? 'text-[#949494] dark:text-slate-400'
              : 'text-black dark:text-white font-medium'
          }
        >
          {isDefault ? 'حالة الطلب' : current.label}
        </span>
        <i
          className={`fa-solid fa-angle-down text-xs text-black dark:text-slate-300 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        ></i>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute top-[calc(100%+6px)] inset-x-0 z-30 p-1.5 rounded-2xl bg-white dark:bg-[#0b1b2d] border border-slate-200 dark:border-slate-700 shadow-[0_12px_32px_-8px_rgba(16,24,40,0.25)]"
        >
          {STATUS_OPTIONS.map((opt) => {
            const selected = opt.value === value
            return (
              <li key={opt.value} role="option" aria-selected={selected}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(opt.value)
                    setOpen(false)
                  }}
                  className={`w-full h-10 px-3 rounded-xl flex items-center gap-2 text-sm text-right cursor-pointer transition-colors hover:bg-[#e8f6ff] dark:hover:bg-[#142e4a] ${
                    selected
                      ? 'bg-[#e8f6ff] dark:bg-[#0c2438] font-bold text-black dark:text-white'
                      : 'text-slate-700 dark:text-slate-200'
                  }`}
                >
                  {opt.dot ? (
                    <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${opt.dot}`}></span>
                  ) : (
                    <span className="w-2.5 shrink-0"></span>
                  )}
                  <span className="flex-1">{opt.label}</span>
                  {selected && <i className="fa-solid fa-check text-xs text-[#0077ff]"></i>}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

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
              className="h-[clamp(36px,4.7vh,52px)] w-auto object-contain"
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
          <i className="fa-solid fa-angle-left text-sm text-slate-800 dark:text-slate-300 group-hover:-translate-x-1 transition-transform"></i>
        </div>
      </div>
    </div>
  )
}

/* ==================== صفحة طلبات الاحتياج والمشتريات المؤسسية ==================== */

export default function MyOrders() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('need-requests')
  const [searchQuery, setSearchQuery] = useState('')
  const [entityQuery, setEntityQuery] = useState('')
  const [status, setStatus] = useState('all')
  const [facultyChip, setFacultyChip] = useState(true)
  const [statusChip, setStatusChip] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // صفوف جدول طلبات الاحتياج
  const ordersList = [
    {
      id: 'PR-2025-0842',
      title: 'تجديد خوادم مركز البيانات الرئيسي',
      specs: 'توريد وحدات معالجة',
      entity: 'عمادة تقنية المعلومات',
      date: '24 أكتوبر 2025',
      quantity: '12 خادم',
      cost: '150,000 ش',
      statusText: 'معتمد',
      statusType: 'approved',
    },
    {
      id: 'PR-2025-0842',
      title: 'تجديد خوادم مركز البيانات الرئيسي',
      specs: 'توريد وحدات معالجة',
      entity: 'عمادة تقنية المعلومات',
      date: '24 أكتوبر 2025',
      quantity: '12 خادم',
      cost: '150,000 ش',
      statusText: 'تحت التدقيق',
      statusType: 'in-review',
    },
    {
      id: 'PR-2025-0842',
      title: 'تجديد خوادم مركز البيانات الرئيسي',
      specs: 'توريد وحدات معالجة',
      entity: 'عمادة تقنية المعلومات',
      date: '24 أكتوبر 2025',
      quantity: '12 خادم',
      cost: '150,000 ش',
      statusText: 'مسودة',
      statusType: 'draft',
    },
  ]

  // اختيار حالة من القائمة يُظهر شارة الحالة من جديد
  const handleStatusChange = (value) => {
    setStatus(value)
    setStatusChip(true)
  }

  // الفلاتر المطبقة (شارات)
  const statusLabel = STATUS_OPTIONS.find((o) => o.value === status)?.label
  const chips = [
    facultyChip && {
      id: 'faculty',
      label: 'الجهة: كلية الهندسة',
      onRemove: () => setFacultyChip(false),
    },
    statusChip && {
      id: 'status',
      label: status === 'all' ? 'الحالة: الكل عدا المحذوفين' : `الحالة: ${statusLabel}`,
      onRemove: () => {
        setStatus('all')
        setStatusChip(false)
      },
    },
  ].filter(Boolean)

  const clearAllFilters = () => {
    setFacultyChip(false)
    setStatusChip(false)
    setStatus('all')
    setEntityQuery('')
  }

  // تطبيق الفلترة على الصفوف
  const q = entityQuery.trim()
  const filteredOrders = ordersList.filter(
    (o) =>
      (status === 'all' || o.statusType === status) &&
      (!q || `${o.entity} ${o.title}`.includes(q))
  )
  const isFiltered = status !== 'all' || q !== ''
  const resultsText = isFiltered
    ? `عرض ${filteredOrders.length} من أصل 26 طلب إحتياج`
    : 'عرض 1 إلى 5 من أصل 26 طلب إحتياج'

  const pagerBtn =
    'w-8 h-8 flex items-center justify-center rounded text-[#0b1c30] dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer'

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#f4f4f4] dark:bg-[#071322] text-slate-800 dark:text-slate-100 flex flex-row transition-colors duration-200 selection:bg-sky-500 selection:text-white"
      style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
    >
      {/* ==================== القائمة الجانبية (Desktop Sidebar) ==================== */}
      <aside className="hidden lg:block lg:w-[clamp(260px,18.4vw,353px)] shrink-0 bg-white dark:bg-[#0b1b2d] sticky top-0 h-screen overflow-y-auto overflow-x-hidden select-none z-20 dark:border-l dark:border-slate-800">
        <SidebarContent activeTab={activeTab} setActiveTab={setActiveTab} />
      </aside>

      {/* ==================== محتوى الصفحة الرئيسي ==================== */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* الشريط العلوي (Top Header Bar) */}
        <header className="h-16 bg-white dark:bg-[#0b1b2d] px-4 sm:px-6 lg:pr-6 lg:pl-[clamp(24px,4.6vw,88px)] flex items-center justify-between gap-4 sticky top-0 z-10 dark:border-b dark:border-slate-800">
          {/* يمين الهيدر: مسار التنقل */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label="القائمة"
            >
              <i className="fa-solid fa-bars text-lg"></i>
            </button>

            <nav className="flex items-center gap-2 text-[13px] sm:text-[15px] text-[#565e74] dark:text-slate-400">
              <span className="hidden sm:inline">نظام إدارة المشتريات - الأزهر</span>
              <i className="hidden sm:inline fa-solid fa-angle-left text-[11px] text-slate-500"></i>
              <span className="font-bold text-black dark:text-white">الإدارة الطالبة</span>
            </nav>
          </div>

          {/* منتصف الهيدر: شريط البحث الدائري */}
          <div className="hidden md:block relative min-w-0 md:flex-1 md:max-w-[345px] lg:flex-none lg:w-[clamp(180px,17.97vw,345px)]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="بحث"
              className="w-full h-10 bg-[#f4f4f4] dark:bg-[#0f243a] border border-[#bbbbbb] dark:border-slate-700 rounded-full pr-12 pl-4 text-sm text-slate-700 dark:text-slate-200 placeholder-[#828282] focus:outline-none focus:border-[#00B4F0] transition-colors"
            />
            <button
              type="button"
              aria-label="بحث"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-900 dark:text-slate-400"
            >
              <SearchIcon className="w-6 h-6" />
            </button>
          </div>

          {/* يسار الهيدر: الإشعارات واللغة */}
          <div className="flex items-center gap-4">
            <NotificationMenu />
            <span className="w-px h-6 bg-slate-200 dark:bg-slate-700"></span>
            <LanguageMenu />
          </div>
        </header>

        {/* محتوى الصفحة */}
        <main className="w-full px-4 sm:px-6 lg:pr-6 lg:pl-[clamp(24px,4.17vw,80px)] pt-6 lg:pt-[42px] pb-8 sm:pb-10 space-y-5 sm:space-y-6">
          {/* ترويسة الصفحة وزر طلب إحتياج جديد */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:mb-4">
            {/* جهة اليمين: عنوان الصفحة ووصفها */}
            <div className="text-right">
              <h1 className="text-xl sm:text-2xl lg:text-[28px] font-black text-black dark:text-white tracking-tight">
                طلبات الاحتياج والمشتريات المؤسسية
              </h1>
              <p className="mt-[18px] text-sm sm:text-[15px] text-[#545f73] dark:text-slate-400 font-medium">
                إدارة ومتابعة متطلبات الكليات والعمادات المساندة، ومطابقتها مع الميزانية المعتمدة قبل طرح المنافسة
              </p>
            </div>

            {/* جهة اليسار: زر طلب إحتياج جديد */}
            <button
              onClick={() => navigate('/new-order')}
              className="inline-flex items-center justify-center w-full sm:w-[273px] h-12 rounded-full bg-[linear-gradient(to_left,#01B0F5,#0066F0)] hover:brightness-105 hover:shadow-lg hover:shadow-sky-500/30 active:scale-[0.98] text-black font-bold text-[15px] transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>طلب إحتياج جديد</span>
            </button>
          </div>

          {/* بطاقة الفلاتر والبحث */}
          <div className="bg-white dark:bg-[#0b1b2d] rounded-3xl p-4 sm:p-6 space-y-4 sm:space-y-6 shadow-[0_2px_12px_rgba(16,24,40,0.04)] dark:border dark:border-slate-800">
            {/* أدوات البحث والفرز */}
            <div className="flex items-center gap-3 sm:gap-6 flex-wrap sm:flex-nowrap">
              {/* حقل البحث بالجهة الطالبة */}
              <div className="relative basis-full sm:basis-0 sm:flex-1 sm:min-w-[200px]">
                <input
                  type="text"
                  value={entityQuery}
                  onChange={(e) => setEntityQuery(e.target.value)}
                  placeholder="تصفية الطلبات حسب الجهة الطالبة"
                  className="w-full h-10 bg-[#f4f4f4] dark:bg-[#0f243a] border border-[#bbbbbb] dark:border-slate-700 rounded-full pr-12 pl-4 text-[12px] text-slate-700 dark:text-slate-200 placeholder-[#828282] focus:outline-none focus:border-[#00B4F0] transition-colors"
                />
                <button
                  type="button"
                  aria-label="بحث"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 dark:text-slate-400"
                >
                  <SearchIcon className="w-6 h-6" />
                </button>
              </div>

              {/* القائمة المنسدلة التفاعلية: حالة الطلب */}
              <StatusDropdown value={status} onChange={handleStatusChange} />

              {/* زر إعادة التعيين (Reset) */}
              <button
                type="button"
                onClick={clearAllFilters}
                title="إعادة ضبط الفلاتر"
                className="w-10 h-10 rounded-xl bg-[#e8f6ff] dark:bg-[#0f243a] text-black dark:text-sky-300 flex items-center justify-center hover:bg-[#d6eefc] dark:hover:bg-[#142e4a] active:rotate-180 transition-all duration-300 cursor-pointer shrink-0"
              >
                <i className="fa-solid fa-rotate-right text-sm"></i>
              </button>
            </div>

            {/* سطر الفلاتر المطبقة */}
            {chips.length > 0 && (
              <div className="flex items-center gap-2 flex-wrap text-sm min-h-[38px]">
                <span className="text-[#464554] dark:text-slate-300 font-medium ml-1">
                  الفلاتر المطبقة:
                </span>
                {chips.map((chip) => (
                  <span
                    key={chip.id}
                    className="inline-flex items-center gap-2 px-3 h-[38px] rounded-lg bg-[#e8f6ff] dark:bg-[#0c2438] text-black dark:text-slate-200 text-sm font-medium"
                  >
                    <span>{chip.label}</span>
                    <button
                      onClick={chip.onRemove}
                      aria-label="إزالة الفلتر"
                      className="text-slate-600 hover:text-black dark:hover:text-slate-200 cursor-pointer"
                    >
                      <i className="fa-regular fa-circle-xmark text-sm"></i>
                    </button>
                  </span>
                ))}
                <button
                  onClick={clearAllFilters}
                  className="text-[#0077ff] font-medium hover:underline cursor-pointer mr-2"
                >
                  مسح الكل
                </button>
              </div>
            )}
          </div>

          {/* جدول الطلبات */}
          <div className="bg-white dark:bg-[#0b1b2d] rounded-3xl shadow-[0_2px_12px_rgba(16,24,40,0.04)] dark:border dark:border-slate-800 overflow-hidden">
            <div className="hidden xl:block">
              <table className="w-full table-fixed border-collapse text-right">
                <colgroup>
                  <col style={{ width: '11%' }} />
                  <col style={{ width: '23%' }} />
                  <col style={{ width: '14%' }} />
                  <col style={{ width: '11%' }} />
                  <col style={{ width: '9%' }} />
                  <col style={{ width: '10%' }} />
                  <col style={{ width: '13%' }} />
                  <col style={{ width: '9%' }} />
                </colgroup>
                {/* ترويسة الجدول */}
                <thead>
                  <tr className="h-[66px] bg-[#e8f6ff] dark:bg-[#0c2438] text-[#5e5e5e] dark:text-slate-200 text-[13px] 2xl:text-[15px] font-medium">
                    <th className="px-2 text-center font-medium">رقم الطلب</th>
                    <th className="px-2 text-right font-medium">عنوان الإحتياج والمواصفات</th>
                    <th className="px-2 text-center font-medium">الجهة الطالبة</th>
                    <th className="px-2 text-center font-medium">تاريخ التقديم</th>
                    <th className="px-2 text-center font-medium">الكمية المقدرة</th>
                    <th className="px-2 text-center font-medium">التكلفة المتوقعة</th>
                    <th className="px-2 text-center font-medium">حالة الإعتماد</th>
                    <th className="px-2 text-center font-medium">الإجراءات</th>
                  </tr>
                </thead>

                {/* صفوف الجدول */}
                <tbody className="text-sm 2xl:text-[15px]">
                  {filteredOrders.length === 0 && (
                    <tr className="h-[103px]">
                      <td colSpan={8} className="text-center text-[#5e5e5e] dark:text-slate-400">
                        لا توجد طلبات مطابقة للفلاتر المختارة.
                      </td>
                    </tr>
                  )}
                  {filteredOrders.map((order, idx) => {
                    const st = statusStyles[order.statusType]
                    return (
                      <tr
                        key={idx}
                        className="h-[103px] hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
                      >
                        <td className="px-2 text-center font-bold text-black dark:text-white">
                          {order.id}
                        </td>

                        <td className="px-2 text-right">
                          <div className="font-bold text-[#0b1c30] dark:text-white whitespace-nowrap">
                            {order.title}
                          </div>
                          <div className="text-sm text-[#5e5e5e] dark:text-slate-400 mt-1 whitespace-nowrap">
                            {order.specs}
                          </div>
                        </td>

                        <td className="px-2 text-center text-[#5e5e5e] dark:text-slate-300 leading-relaxed whitespace-nowrap">
                          {order.entity}
                        </td>

                        <td className="px-2 text-center text-[#5e5e5e] dark:text-slate-300">
                          {order.date}
                        </td>

                        <td className="px-2 text-center text-[#5e5e5e] dark:text-slate-300">
                          {order.quantity}
                        </td>

                        <td className="px-2 text-center text-[#5e5e5e] dark:text-slate-300">
                          {order.cost}
                        </td>

                        <td className="px-2 text-center">
                          <span
                            className={`inline-flex items-center gap-2 px-3 h-[30px] rounded-lg font-medium text-[15px] whitespace-nowrap ${st.wrap}`}
                          >
                            <span className={`w-2.5 h-2.5 rounded-full ${st.dot}`}></span>
                            <span>{order.statusText}</span>
                          </span>
                        </td>

                        <td className="px-2 text-center">
                          <div className="flex items-center justify-center gap-3 xl:gap-6">
                            <button
                              type="button"
                              onClick={() => navigate('/edit-order')}
                              className="text-[#1a1a1a] hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400 hover:scale-110 transition-all cursor-pointer"
                              title="عرض التفاصيل"
                            >
                              <i className="fa-regular fa-eye text-xl"></i>
                            </button>
                            <button
                              type="button"
                              className="text-[#1a1a1a] hover:text-slate-500 dark:text-slate-300 dark:hover:text-slate-100 hover:scale-110 transition-all cursor-pointer"
                              title="خيارات إضافية"
                            >
                              <i className="fa-solid fa-ellipsis-vertical text-xl"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            {/* ==================== قائمة البطاقات للجوال والآيباد (بدل الجدول) ==================== */}
            <div className="xl:hidden">
              <div className="h-12 px-4 sm:px-6 flex items-center bg-[#e8f6ff] dark:bg-[#0c2438] text-sm font-medium text-[#5e5e5e] dark:text-slate-200">
                قائمة طلبات الإحتياج
              </div>
              {filteredOrders.length === 0 && (
                <div className="p-8 text-center text-sm text-[#5e5e5e] dark:text-slate-400">
                  لا توجد طلبات مطابقة للفلاتر المختارة.
                </div>
              )}
              {filteredOrders.map((order, idx) => {
                const st = statusStyles[order.statusType]
                return (
                  <div
                    key={idx}
                    className="p-4 sm:p-6 space-y-4 border-b border-slate-100 dark:border-slate-800 last:border-b-0 hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-bold text-black dark:text-white text-sm">
                        {order.id}
                      </span>
                      <span
                        className={`inline-flex items-center gap-2 px-3 h-[30px] rounded-lg font-medium text-sm whitespace-nowrap ${st.wrap}`}
                      >
                        <span className={`w-2.5 h-2.5 rounded-full ${st.dot}`}></span>
                        <span>{order.statusText}</span>
                      </span>
                    </div>

                    <div className="text-right">
                      <div className="font-bold text-[#0b1c30] dark:text-white">{order.title}</div>
                      <div className="text-sm text-[#5e5e5e] dark:text-slate-400 mt-1">
                        {order.specs}
                      </div>
                    </div>

                    <dl className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-3 text-sm text-right">
                      {[
                        ['الجهة الطالبة', order.entity],
                        ['تاريخ التقديم', order.date],
                        ['الكمية المقدرة', order.quantity],
                        ['التكلفة المتوقعة', order.cost],
                      ].map(([label, value]) => (
                        <div key={label}>
                          <dt className="text-xs text-slate-500 dark:text-slate-400">{label}</dt>
                          <dd className="mt-0.5 font-medium text-[#5e5e5e] dark:text-slate-200">
                            {value}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <div className="flex items-center justify-end gap-5 pt-1">
                      <button
                        type="button"
                        onClick={() => navigate('/edit-order')}
                        className="text-[#1a1a1a] hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400 cursor-pointer"
                        title="عرض التفاصيل"
                      >
                        <i className="fa-regular fa-eye text-xl"></i>
                      </button>
                      <button
                        type="button"
                        className="text-[#1a1a1a] hover:text-slate-500 dark:text-slate-300 dark:hover:text-slate-100 cursor-pointer"
                        title="خيارات إضافية"
                      >
                        <i className="fa-solid fa-ellipsis-vertical text-xl"></i>
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* ترقيم الصفحات (Pagination) أسفل الجدول */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 py-4 text-sm border-t border-slate-100 dark:border-slate-800 xl:border-t-0">
              {/* اليمين: عدد النتائج */}
              <div className="text-[#565e74] dark:text-slate-400 font-medium text-center">
                {resultsText}
              </div>

              {/* اليسار: أزرار التنقل بين الصفحات */}
              <div className="flex items-center justify-center flex-wrap gap-1 text-[#828282] dark:text-slate-400">
                <button type="button" title="الصفحة الأولى" className={pagerBtn}>
                  <PagerBarLeft />
                </button>
                <button type="button" title="الصفحة السابقة" className={pagerBtn}>
                  <PagerLeft />
                </button>
                <button
                  type="button"
                  className="w-8 h-8 flex items-center justify-center rounded bg-[#0077ff] text-white font-bold text-sm"
                >
                  1
                </button>
                <button type="button" className={`${pagerBtn} font-medium text-sm`}>
                  2
                </button>
                <button type="button" className={`${pagerBtn} font-medium text-sm`}>
                  3
                </button>
                <span className="px-1 text-slate-500">...</span>
                <button type="button" className={`${pagerBtn} font-medium text-sm`}>
                  26
                </button>
                <button type="button" title="الصفحة التالية" className={pagerBtn}>
                  <PagerRight />
                </button>
                <button type="button" title="الصفحة الأخيرة" className={pagerBtn}>
                  <PagerBarRight />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* ==================== القائمة الجانبية للشاشات الصغيرة (Mobile Drawer) ==================== */}
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
          className={`fixed top-0 right-0 w-[280px] max-w-[85vw] h-full bg-white dark:bg-[#0b1b2d] shadow-2xl z-10 overflow-y-auto overflow-x-hidden select-none transition-transform duration-300 ease-in-out ${
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