// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { logo, userHani, shieldIcon } from '../assets/images'
// import LanguageMenu from '../components/LanguageMenu'

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
//   { id: 'my-orders', label: 'طلباتي', Icon: FileIcon, path: '/dashboard' },
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
//           {navItems.map(({ id, label, Icon, path }) => {
//             const isActive = id === 'new-order'
//             return (
//               <button
//                 key={id}
//                 onClick={() => {
//                   navigate(path)
//                   onNavigate?.()
//                 }}
//                 className={`w-full h-[clamp(40px,5.2vh,56px)] flex items-center gap-3 px-5 2xl:px-6 rounded-lg text-[length:clamp(16px,2.04vh,22px)] font-medium text-right cursor-pointer transition-all ${
//                   isActive
//                     ? 'bg-[#00a2e8] text-white shadow-sm'
//                     : 'bg-[#f5f5f5] dark:bg-[#0f243a] text-slate-900 dark:text-slate-200 hover:bg-[#ececec] dark:hover:bg-[#142e4a]'
//                 }`}
//               >
//                 <Icon className={`w-[1em] h-[1em] shrink-0 ${isActive ? 'text-white' : ''}`} />
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

//         {/* بطاقة المستخدم */}
//         <div className="flex items-center justify-between py-[clamp(10px,1.85vh,20px)] pr-6 2xl:pr-10 pl-5 2xl:pl-7 mt-[clamp(0px,3vh,32px)] mb-2 cursor-pointer group">
//           <div className="flex items-center gap-4">
//             <img
//               src={userHani}
//               alt="م. هاني وشاح"
//               className="w-10 h-10 rounded-full object-cover"
//             />
//             <div className="text-right">
//               <h4 className="text-[15px] 2xl:text-[17px] font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
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

// /* ==================== صفحة طلب شراء جديد ==================== */

// export default function NewOrder() {
//   const navigate = useNavigate()
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [notificationOpen, setNotificationOpen] = useState(false)
//   const [searchQuery, setSearchQuery] = useState('')

//   // بيانات الطلب
//   const [orderTitle, setOrderTitle] = useState('')
//   const [deliveryDate, setDeliveryDate] = useState('الأربعاء ، 21 أكتوبر')
//   const [category, setCategory] = useState('أجهزة حاسوب وتقنية')
//   const [justification, setJustification] = useState('')

//   // قائمة الأصناف والخدمات
//   const [items, setItems] = useState([
//     {
//       id: 1,
//       name: '',
//       quantity: 0,
//       unit: 'نص',
//       unitPrice: 0,
//       specifications: '',
//     },
//   ])

//   // المرفقات
//   const [uploadedFiles, setUploadedFiles] = useState([])
//   const [alertInfo, setAlertInfo] = useState(null)

//   // إضافة صنف جديد
//   const handleAddItem = () => {
//     setItems((prev) => [
//       ...prev,
//       {
//         id: Date.now(),
//         name: '',
//         quantity: 0,
//         unit: 'نص',
//         unitPrice: 0,
//         specifications: '',
//       },
//     ])
//   }

//   // حذف صنف
//   const handleRemoveItem = (id) => {
//     if (items.length > 1) {
//       setItems((prev) => prev.filter((item) => item.id !== id))
//     }
//   }

//   // تحديث حقل في صنف
//   const handleItemChange = (id, field, value) => {
//     setItems((prev) =>
//       prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
//     )
//   }

//   // حساب إجمالي كل صنف
//   const getItemTotal = (item) => {
//     const qty = Number(item.quantity) || 0
//     const price = Number(item.unitPrice) || 0
//     return qty * price
//   }

//   // حساب إجمالي كل الأصناف
//   const totalEstimatedCost = items.reduce(
//     (sum, item) => sum + getItemTotal(item),
//     0
//   )

//   // التعامل مع رفع الملفات
//   const handleFileUpload = (e) => {
//     const files = Array.from(e.target.files || [])
//     if (files.length > 0) {
//       setUploadedFiles((prev) => [...prev, ...files])
//     }
//   }

//   const handleRemoveFile = (index) => {
//     setUploadedFiles((prev) => prev.filter((_, i) => i !== index))
//   }

//   // إرسال كمسودة
//   const handleSaveDraft = () => {
//     setAlertInfo({
//       type: 'success',
//       title: 'تم الحفظ بنجاح',
//       message: 'تم حفظ طلب الشراء كمسودة برقم PR-2026-0012.',
//     })
//     setTimeout(() => {
//       setAlertInfo(null)
//       navigate('/dashboard')
//     }, 1800)
//   }

//   // إرسال للاعتماد
//   const handleSubmitOrder = (e) => {
//     e.preventDefault()
//     setAlertInfo({
//       type: 'success',
//       title: 'تم إرسال الطلب للاعتماد',
//       message: 'تم إرسال طلب الشراء رقم PR-2026-0012 بنجاح للإدارة المختصة.',
//     })
//     setTimeout(() => {
//       setAlertInfo(null)
//       navigate('/dashboard')
//     }, 2000)
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
//                 className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
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
//             {/* جرس الإشعارات */}
//             <div className="relative">
//               <button
//                 onClick={() => setNotificationOpen(!notificationOpen)}
//                 className="w-10 h-10 rounded-full flex items-center justify-center text-slate-900 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 relative transition-colors"
//                 aria-label="الإشعارات"
//               >
//                 <i className="fa-regular fa-bell text-[22px]"></i>
//               </button>

//               {notificationOpen && (
//                 <div className="absolute left-0 mt-2 w-72 bg-white dark:bg-[#0f243a] rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-3 z-50 text-right">
//                   <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800 mb-2">
//                     <span className="font-bold text-xs">الإشعارات الجديدة</span>
//                     <span className="text-[11px] text-sky-500 font-semibold cursor-pointer">
//                       تحديد كمقروء
//                     </span>
//                   </div>
//                   <div className="space-y-2 text-xs">
//                     <div className="p-2 bg-sky-50/60 dark:bg-sky-950/30 rounded-xl">
//                       <p className="font-semibold text-slate-800 dark:text-slate-200">
//                         تم إرجاع الطلب PR-2026-0008 للتعديل
//                       </p>
//                       <span className="text-[10px] text-slate-400">منذ يومين</span>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* فاصل عمودي */}
//             <span className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-slate-700"></span>

//             {/* قائمة اللغة */}
//             <LanguageMenu />
//           </div>
//         </header>

//         {/* إشعار التنبيه */}
//         {alertInfo && (
//           <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-emerald-600 text-white px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
//             <i className="fa-solid fa-circle-check text-xl"></i>
//             <div>
//               <h5 className="font-bold text-sm">{alertInfo.title}</h5>
//               <p className="text-xs text-emerald-100">{alertInfo.message}</p>
//             </div>
//           </div>
//         )}

//         {/* ==================== محتوى النموذج الرئيسي ==================== */}
//         <main className="w-full px-4 sm:px-6 lg:pl-16 lg:pr-8 pt-6 pb-20 space-y-6 max-w-[1400px]">
//           {/* ترويسة الصفحة: رقم الطلب + العنوان الرئيسي */}
//           <div className="space-y-1.5">
//             <div className="flex items-center justify-between">
//               <div></div>
//               <span className="bg-[#e5e7eb] dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-md text-xs font-semibold tracking-wider">
//                 PR-2026-0012
//               </span>
//             </div>

//             <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
//               طلب شراء جديد
//             </h1>
//             <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 font-medium">
//               املأ البيانات بلغة بسيطة، الحقول المعلّمة بـ * مطلوبة عند الإرسال.
//             </p>
//           </div>

//           {/* ==================== القسم 1: بيانات الطلب ==================== */}
//           <section className="bg-white dark:bg-[#0b1b2d] rounded-[24px] p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 dark:border-slate-800/80 space-y-6">
//             <h2 className="text-base sm:text-[17px] font-bold text-slate-900 dark:text-white">
//               بيانات الطلب
//             </h2>

//             {/* الصف الأول: عنوان الطلب + التاريخ المطلوب للتوريد */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
//               {/* عنوان الطلب */}
//               <div>
//                 <label className="block text-xs sm:text-[13px] font-bold text-slate-800 dark:text-slate-200 mb-2">
//                   عنوان الطلب *
//                 </label>
//                 <input
//                   type="text"
//                   value={orderTitle}
//                   onChange={(e) => setOrderTitle(e.target.value)}
//                   placeholder="مثال: أجهزة حاسوب لمعمل الحاسب الآلي"
//                   className="w-full h-12 bg-white dark:bg-[#0c1f33] border border-slate-200 dark:border-slate-700 rounded-xl px-4 text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00a2e8] transition-all"
//                 />
//               </div>

//               {/* التاريخ المطلوب للتوريد */}
//               <div>
//                 <label className="block text-xs sm:text-[13px] font-bold text-slate-800 dark:text-slate-200 mb-2">
//                   التاريخ المطلوب للتوريد *
//                 </label>
//                 <div className="relative">
//                   <input
//                     type="text"
//                     value={deliveryDate}
//                     onChange={(e) => setDeliveryDate(e.target.value)}
//                     placeholder="الأربعاء ، 21 أكتوبر"
//                     className="w-full h-12 bg-white dark:bg-[#0c1f33] border border-slate-200 dark:border-slate-700 rounded-xl px-10 text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00a2e8] transition-all"
//                   />
//                   <i className="fa-regular fa-calendar absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
//                 </div>
//               </div>
//             </div>

//             {/* الصف الثاني: الإدارة الطالبة + التصنيف */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
//               {/* الإدارة الطالبة */}
//               <div>
//                 <label className="block text-xs sm:text-[13px] font-bold text-slate-800 dark:text-slate-200 mb-2">
//                   الإدارة الطالبة
//                 </label>
//                 <input
//                   type="text"
//                   disabled
//                   value="كلية الهندسة"
//                   className="w-full h-12 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl px-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 cursor-not-allowed"
//                 />
//               </div>

//               {/* التصنيف */}
//               <div>
//                 <div className="flex items-center justify-between mb-2">
//                   <label className="text-xs sm:text-[13px] font-bold text-slate-800 dark:text-slate-200">
//                     التصنيف *
//                   </label>
//                   <span className="text-[11px] text-slate-400">
//                     متى تحتاج الأصناف أن تكون متوفرة؟
//                   </span>
//                 </div>
//                 <div className="relative">
//                   <select
//                     value={category}
//                     onChange={(e) => setCategory(e.target.value)}
//                     className="w-full h-12 bg-white dark:bg-[#0c1f33] border border-slate-200 dark:border-slate-700 rounded-xl px-4 pl-10 text-xs sm:text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#00a2e8] transition-all appearance-none cursor-pointer"
//                   >
//                     <option value="أجهزة حاسوب وتقنية">أجهزة حاسوب وتقنية</option>
//                     <option value="أثاث ومفروشات مكتبية">أثاث ومفروشات مكتبية</option>
//                     <option value="معدات وشبكات اتصالات">معدات وشبكات اتصالات</option>
//                     <option value="قرطاسية ومستلزمات مكتبية">قرطاسية ومستلزمات مكتبية</option>
//                     <option value="خدمات وصيانة برمجية">خدمات وصيانة برمجية</option>
//                   </select>
//                   <i className="fa-solid fa-chevron-down absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none"></i>
//                 </div>
//               </div>
//             </div>

//             {/* المبرر */}
//             <div>
//               <label className="block text-xs sm:text-[13px] font-bold text-slate-800 dark:text-slate-200 mb-2">
//                 المبرر
//               </label>
//               <textarea
//                 rows={4}
//                 value={justification}
//                 onChange={(e) => setJustification(e.target.value)}
//                 placeholder=""
//                 className="w-full bg-white dark:bg-[#0c1f33] border border-slate-200 dark:border-slate-700 rounded-2xl p-4 text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00a2e8] transition-all resize-y"
//               ></textarea>
//               <p className="text-[11px] sm:text-xs text-slate-400 mt-2">
//                 لماذا تحتاج هذه الأصناف؟ وما أثر عدم توفرها؟
//               </p>
//             </div>
//           </section>

//           {/* ==================== القسم 2: الأصناف والخدمات ==================== */}
//           <section className="bg-white dark:bg-[#0b1b2d] rounded-[24px] p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 dark:border-slate-800/80 space-y-6">
//             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
//               <div>
//                 <h2 className="text-base sm:text-[17px] font-bold text-slate-900 dark:text-white">
//                   الأصناف والخدمات
//                 </h2>
//                 <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
//                   أضف كل صنف مع الكمية والمواصفات والتكلفة التقديرية
//                 </p>
//               </div>

//               {/* زر إضافة صنف آخر */}
//               <button
//                 type="button"
//                 onClick={handleAddItem}
//                 className="inline-flex items-center justify-center gap-1.5 bg-[#00a2e8] hover:bg-[#0092d0] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-sm hover:shadow transition-all cursor-pointer self-start sm:self-auto"
//               >
//                 <span>+ إضافة صنف آخر</span>
//               </button>
//             </div>

//             {/* تكرار الأصناف */}
//             <div className="space-y-6">
//               {items.map((item, index) => {
//                 const itemTotal = getItemTotal(item)

//                 return (
//                   <div
//                     key={item.id}
//                     className="p-5 rounded-2xl bg-slate-50/60 dark:bg-[#0c1f33]/40 border border-slate-100 dark:border-slate-800/60 space-y-4"
//                   >
//                     <div className="flex items-center justify-between">
//                       <span className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
//                         الصنف {index + 1}
//                       </span>
//                       {items.length > 1 && (
//                         <button
//                           type="button"
//                           onClick={() => handleRemoveItem(item.id)}
//                           className="text-xs text-rose-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 px-2 py-1 rounded-lg transition-colors"
//                         >
//                           <i className="fa-regular fa-trash-can ml-1"></i>
//                           حذف
//                         </button>
//                       )}
//                     </div>

//                     {/* الصف الأول: الصنف أو الخدمة | الكمية | الوحدة | التكلفة التقديرية للوحدة */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//                       {/* الصنف أو الخدمة */}
//                       <div className="lg:col-span-1">
//                         <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
//                           الصنف أو الخدمة
//                         </label>
//                         <input
//                           type="text"
//                           value={item.name}
//                           onChange={(e) =>
//                             handleItemChange(item.id, 'name', e.target.value)
//                           }
//                           placeholder="مثال: أجهزة حاسوب لمعمل الحاسب الآلي"
//                           className="w-full h-11 bg-white dark:bg-[#0c1f33] border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00a2e8]"
//                         />
//                       </div>

//                       {/* الكمية */}
//                       <div>
//                         <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
//                           الكمية
//                         </label>
//                         <input
//                           type="number"
//                           min="0"
//                           value={item.quantity}
//                           onChange={(e) =>
//                             handleItemChange(
//                               item.id,
//                               'quantity',
//                               Math.max(0, Number(e.target.value))
//                             )
//                           }
//                           className="w-full h-11 bg-white dark:bg-[#0c1f33] border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#00a2e8]"
//                         />
//                       </div>

//                       {/* الوحدة */}
//                       <div>
//                         <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
//                           الوحدة
//                         </label>
//                         <div className="relative">
//                           <select
//                             value={item.unit}
//                             onChange={(e) =>
//                               handleItemChange(item.id, 'unit', e.target.value)
//                             }
//                             className="w-full h-11 bg-white dark:bg-[#0c1f33] border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 pl-8 text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#00a2e8] appearance-none cursor-pointer"
//                           >
//                             <option value="نص">نص</option>
//                             <option value="قطعة">قطعة</option>
//                             <option value="جهاز">جهاز</option>
//                             <option value="طرد">طرد</option>
//                             <option value="خدمة">خدمة</option>
//                             <option value="ساعة">ساعة</option>
//                           </select>
//                           <i className="fa-solid fa-chevron-down absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[10px] pointer-events-none"></i>
//                         </div>
//                       </div>

//                       {/* التكلفة التقديرية للوحدة */}
//                       <div>
//                         <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
//                           التكلفة التقديرية للوحدة
//                         </label>
//                         <input
//                           type="number"
//                           min="0"
//                           value={item.unitPrice}
//                           onChange={(e) =>
//                             handleItemChange(
//                               item.id,
//                               'unitPrice',
//                               Math.max(0, Number(e.target.value))
//                             )
//                           }
//                           className="w-full h-11 bg-white dark:bg-[#0c1f33] border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#00a2e8]"
//                         />
//                       </div>
//                     </div>

//                     {/* الصف الثاني: المواصفات | الإجمالي */}
//                     <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-4">
//                       {/* المواصفات */}
//                       <div>
//                         <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
//                           المواصفات
//                         </label>
//                         <input
//                           type="text"
//                           value={item.specifications}
//                           onChange={(e) =>
//                             handleItemChange(
//                               item.id,
//                               'specifications',
//                               e.target.value
//                             )
//                           }
//                           placeholder="كلية الهندسة"
//                           className="w-full h-11 bg-white dark:bg-[#0c1f33] border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00a2e8]"
//                         />
//                       </div>

//                       {/* الإجمالي */}
//                       <div>
//                         <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
//                           الإجمالي
//                         </label>
//                         <input
//                           type="text"
//                           readOnly
//                           value={itemTotal.toLocaleString('ar-SA')}
//                           className="w-full h-11 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 text-xs font-bold text-slate-900 dark:text-white cursor-default"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//           </section>

//           {/* ==================== القسم 3: المرفقات ==================== */}
//           <section className="bg-white dark:bg-[#0b1b2d] rounded-[24px] p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 dark:border-slate-800/80 space-y-4">
//             <div>
//               <h2 className="text-base sm:text-[17px] font-bold text-slate-900 dark:text-white">
//                 المرفقات
//               </h2>
//               <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
//                 عروض استرشادية، مواصفات فنية، صور.. (اختياري)
//               </p>
//             </div>

//             {/* مربع الرفع المفرغ مع حدود متقطعة */}
//             <label className="block border-2 border-dashed border-[#00a2e8]/60 bg-[#f0f9ff]/70 dark:bg-[#0b253d]/40 hover:bg-[#e4f4fd] dark:hover:bg-[#0d2e4d]/50 rounded-2xl p-8 sm:p-12 text-center cursor-pointer transition-colors group">
//               <input
//                 type="file"
//                 multiple
//                 onChange={handleFileUpload}
//                 className="hidden"
//               />
//               <div className="flex flex-col items-center justify-center gap-2">
//                 <div className="w-10 h-10 rounded-full flex items-center justify-center text-[#00a2e8] group-hover:scale-110 transition-transform">
//                   <i className="fa-regular fa-file-lines text-2xl"></i>
//                 </div>
//                 <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100">
//                   اضغط لإختيار ملف
//                 </span>
//                 <span className="text-[11px] sm:text-xs text-slate-400">
//                   صور – حتى 10 م.ب للملف، PDF, Word, Excel
//                 </span>
//               </div>
//             </label>

//             {/* عرض الملفات المرفوعة */}
//             {uploadedFiles.length > 0 && (
//               <div className="space-y-2 pt-2">
//                 {uploadedFiles.map((file, idx) => (
//                   <div
//                     key={idx}
//                     className="flex items-center justify-between p-3 bg-slate-50 dark:bg-[#0c1f33] rounded-xl border border-slate-200/80 dark:border-slate-700/80 text-xs"
//                   >
//                     <div className="flex items-center gap-2.5 truncate">
//                       <i className="fa-regular fa-file-pdf text-[#00a2e8]"></i>
//                       <span className="truncate font-medium text-slate-800 dark:text-slate-200">
//                         {file.name}
//                       </span>
//                       <span className="text-[10px] text-slate-400">
//                         ({(file.size / (1024 * 1024)).toFixed(2)} م.ب)
//                       </span>
//                     </div>
//                     <button
//                       type="button"
//                       onClick={() => handleRemoveFile(idx)}
//                       className="text-slate-400 hover:text-rose-500 p-1"
//                     >
//                       <i className="fa-solid fa-xmark"></i>
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </section>

//           {/* ==================== شريط الإجراءات السفلي ==================== */}
//           <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
//             {/* التكلفة التقديرية */}
//             <div className="text-right w-full sm:w-auto">
//               <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
//                 إجمالي التكلفة التقديرية:{' '}
//                 <span className="text-[#00a2e8]">
//                   {totalEstimatedCost.toLocaleString('ar-SA')}
//                 </span>{' '}
//                 ر.س
//               </span>
//             </div>

//             {/* الأزرار */}
//             <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
//               <button
//                 type="button"
//                 onClick={handleSaveDraft}
//                 className="flex-1 sm:flex-none border border-[#00a2e8] text-[#00a2e8] hover:bg-[#e4f4fd] dark:hover:bg-[#0f2c45] px-7 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer"
//               >
//                 حفظ كمسودة
//               </button>
//               <button
//                 type="button"
//                 onClick={handleSubmitOrder}
//                 className="flex-1 sm:flex-none bg-[#00a2e8] hover:bg-[#0092d0] text-white px-8 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-md hover:shadow transition-all cursor-pointer"
//               >
//                 إرسال للإعتماد
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







// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { logo, userHani, shieldIcon } from '../assets/images'
// import LanguageMenu from '../components/LanguageMenu'
 
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
//   { id: 'my-orders', label: 'طلباتي', Icon: FileIcon, path: '/dashboard' },
//   { id: 'new-order', label: 'طلب شراء جديد', Icon: FilePlusIcon, path: '/new-order' },
//   { id: 'suppliers', label: 'الموردين', Icon: TruckIcon, path: '/dashboard' },
// ]
 
// /* ==================== أنماط مشتركة ==================== */
 
// // تدرّج الأزرار الرئيسية (أزرق غامق يسارًا ← سماوي يمينًا)
// const gradientBtn =
//   'bg-gradient-to-r from-[#0072E5] to-[#00B4F5] hover:brightness-95 text-white font-bold transition-all cursor-pointer'
 
// // حقل بيضاوي لقسم "بيانات الطلب"
// const pillInput =
//   'w-full h-10 bg-white dark:bg-[#0c1f33] border border-slate-300 dark:border-slate-700 rounded-full px-4 text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-[#00a2e8] focus:ring-1 focus:ring-[#00a2e8] transition-all'
 
// // حقل بيضاوي داخل كرت الصنف
// const itemInput =
//   'w-full h-10 bg-white dark:bg-[#0c1f33] border border-slate-200 dark:border-slate-700 rounded-full px-4 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#00a2e8]'
 
// const labelCls =
//   'block text-xs sm:text-[13px] font-bold text-slate-900 dark:text-slate-200 mb-2'
 
// const sectionCls =
//   'bg-white dark:bg-[#0b1b2d] rounded-[24px] p-6 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 dark:border-slate-800/80'
 
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
//           {navItems.map(({ id, label, Icon, path }) => {
//             const isActive = id === 'new-order'
//             return (
//               <button
//                 key={id}
//                 onClick={() => {
//                   navigate(path)
//                   onNavigate?.()
//                 }}
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
 
//         {/* بطاقة المستخدم */}
//         <div className="flex items-center justify-between py-[clamp(10px,1.85vh,20px)] pr-6 2xl:pr-10 pl-5 2xl:pl-7 mt-[clamp(0px,3vh,32px)] mb-2 cursor-pointer group">
//           <div className="flex items-center gap-4">
//             <img
//               src={userHani}
//               alt="م. هاني وشاح"
//               className="w-10 h-10 rounded-full object-cover"
//             />
//             <div className="text-right">
//               <h4 className="text-[15px] 2xl:text-[17px] font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
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
 
// /* ==================== صفحة طلب شراء جديد ==================== */
 
// export default function NewOrder() {
//   const navigate = useNavigate()
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [notificationOpen, setNotificationOpen] = useState(false)
//   const [searchQuery, setSearchQuery] = useState('')
 
//   // بيانات الطلب
//   const [orderTitle, setOrderTitle] = useState('')
//   const [deliveryDate, setDeliveryDate] = useState('الأربعاء ، 21 أكتوبر')
//   const [category, setCategory] = useState('أجهزة حاسوب وتقنية')
//   const [justification, setJustification] = useState('')
 
//   // قائمة الأصناف والخدمات
//   const [items, setItems] = useState([
//     {
//       id: 1,
//       name: '',
//       quantity: 0,
//       unit: 'نص',
//       unitPrice: 0,
//       specifications: '',
//     },
//   ])
 
//   // المرفقات
//   const [uploadedFiles, setUploadedFiles] = useState([])
//   const [alertInfo, setAlertInfo] = useState(null)
 
//   // إضافة صنف جديد
//   const handleAddItem = () => {
//     setItems((prev) => [
//       ...prev,
//       {
//         id: Date.now(),
//         name: '',
//         quantity: 0,
//         unit: 'نص',
//         unitPrice: 0,
//         specifications: '',
//       },
//     ])
//   }
 
//   // حذف صنف
//   const handleRemoveItem = (id) => {
//     if (items.length > 1) {
//       setItems((prev) => prev.filter((item) => item.id !== id))
//     }
//   }
 
//   // تحديث حقل في صنف
//   const handleItemChange = (id, field, value) => {
//     setItems((prev) =>
//       prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
//     )
//   }
 
//   // حساب إجمالي كل صنف
//   const getItemTotal = (item) => {
//     const qty = Number(item.quantity) || 0
//     const price = Number(item.unitPrice) || 0
//     return qty * price
//   }
 
//   // حساب إجمالي كل الأصناف
//   const totalEstimatedCost = items.reduce(
//     (sum, item) => sum + getItemTotal(item),
//     0
//   )
 
//   // التعامل مع رفع الملفات
//   const handleFileUpload = (e) => {
//     const files = Array.from(e.target.files || [])
//     if (files.length > 0) {
//       setUploadedFiles((prev) => [...prev, ...files])
//     }
//   }
 
//   const handleRemoveFile = (index) => {
//     setUploadedFiles((prev) => prev.filter((_, i) => i !== index))
//   }
 
//   // إرسال كمسودة
//   const handleSaveDraft = () => {
//     setAlertInfo({
//       type: 'success',
//       title: 'تم الحفظ بنجاح',
//       message: 'تم حفظ طلب الشراء كمسودة برقم PR-2026-0012.',
//     })
//     setTimeout(() => {
//       setAlertInfo(null)
//       navigate('/dashboard')
//     }, 1800)
//   }
 
//   // إرسال للاعتماد
//   const handleSubmitOrder = (e) => {
//     e.preventDefault()
//     setAlertInfo({
//       type: 'success',
//       title: 'تم إرسال الطلب للاعتماد',
//       message: 'تم إرسال طلب الشراء رقم PR-2026-0012 بنجاح للإدارة المختصة.',
//     })
//     setTimeout(() => {
//       setAlertInfo(null)
//       navigate('/dashboard')
//     }, 2000)
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
//                 className="font-bold text-slate-900 dark:text-slate-200 hover:text-slate-700 dark:hover:text-white transition-colors"
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
//             {/* جرس الإشعارات */}
//             <div className="relative">
//               <button
//                 onClick={() => setNotificationOpen(!notificationOpen)}
//                 className="w-10 h-10 rounded-full flex items-center justify-center text-slate-900 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 relative transition-colors"
//                 aria-label="الإشعارات"
//               >
//                 <i className="fa-regular fa-bell text-[22px]"></i>
//               </button>
 
//               {notificationOpen && (
//                 <div className="absolute left-0 mt-2 w-72 bg-white dark:bg-[#0f243a] rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-3 z-50 text-right">
//                   <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800 mb-2">
//                     <span className="font-bold text-xs">الإشعارات الجديدة</span>
//                     <span className="text-[11px] text-sky-500 font-semibold cursor-pointer">
//                       تحديد كمقروء
//                     </span>
//                   </div>
//                   <div className="space-y-2 text-xs">
//                     <div className="p-2 bg-sky-50/60 dark:bg-sky-950/30 rounded-xl">
//                       <p className="font-semibold text-slate-800 dark:text-slate-200">
//                         تم إرجاع الطلب PR-2026-0008 للتعديل
//                       </p>
//                       <span className="text-[10px] text-slate-400">منذ يومين</span>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
 
//             {/* فاصل عمودي */}
//             <span className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-slate-700"></span>
 
//             {/* قائمة اللغة */}
//             <LanguageMenu />
//           </div>
//         </header>
 
//         {/* إشعار التنبيه */}
//         {alertInfo && (
//           <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-emerald-600 text-white px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
//             <i className="fa-solid fa-circle-check text-xl"></i>
//             <div>
//               <h5 className="font-bold text-sm">{alertInfo.title}</h5>
//               <p className="text-xs text-emerald-100">{alertInfo.message}</p>
//             </div>
//           </div>
//         )}
 
//         {/* ==================== محتوى النموذج الرئيسي ==================== */}
//         <main className="w-full flex-1 px-4 sm:px-6 lg:pl-10 lg:pr-6 pt-10 pb-10 space-y-10 max-w-[1400px]">
//           {/* ترويسة الصفحة: رقم الطلب + العنوان الرئيسي */}
//           <div className="space-y-2">
//             <div className="flex items-center justify-between">
//               <span className="bg-[#e5e7eb] dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-xs font-semibold tracking-wider">
//                 PR-2026-0012
//               </span>
//             </div>
 
//             <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
//               طلب شراء جديد
//             </h1>
//             <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-400 font-medium">
//               املأ البيانات بلغة بسيطة، الحقول المعلّمة بـ * مطلوبة عند الإرسال.
//             </p>
//           </div>
 
//           {/* ==================== القسم 1: بيانات الطلب ==================== */}
//           <section className={sectionCls}>
//             <h2 className="text-base sm:text-[17px] font-bold text-slate-900 dark:text-white pb-4 mb-6 border-b border-slate-200 dark:border-slate-800">
//               بيانات الطلب
//             </h2>
 
//             <div className="space-y-5">
//               {/* الصف الأول: عنوان الطلب + التاريخ المطلوب للتوريد */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
//                 {/* عنوان الطلب */}
//                 <div>
//                   <label className={labelCls}>عنوان الطلب *</label>
//                   <input
//                     type="text"
//                     value={orderTitle}
//                     onChange={(e) => setOrderTitle(e.target.value)}
//                     placeholder="مثال: أجهزة حاسوب لمعمل الحاسب الآلي"
//                     className={pillInput}
//                   />
//                 </div>
 
//                 {/* التاريخ المطلوب للتوريد */}
//                 <div>
//                   <label className={labelCls}>التاريخ المطلوب للتوريد *</label>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       value={deliveryDate}
//                       onChange={(e) => setDeliveryDate(e.target.value)}
//                       placeholder="الأربعاء ، 21 أكتوبر"
//                       className={`${pillInput} pl-12 !bg-[#ececec] dark:!bg-[#0c1f33]`}
//                     />
//                     <i className="fa-regular fa-calendar absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-base"></i>
//                   </div>
//                 </div>
//               </div>
 
//               {/* الصف الثاني: الإدارة الطالبة + التصنيف */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
//                 {/* الإدارة الطالبة */}
//                 <div>
//                   <label className={labelCls}>الإدارة الطالبة</label>
//                   <input
//                     type="text"
//                     disabled
//                     value="كلية الهندسة"
//                     className="w-full h-10 bg-white dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700 rounded-full px-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 cursor-not-allowed"
//                   />
//                 </div>
 
//                 {/* التصنيف */}
//                 <div>
//                   <label className={labelCls}>التصنيف *</label>
//                   <div className="relative">
//                     <select
//                       value={category}
//                       onChange={(e) => setCategory(e.target.value)}
//                       className={`${pillInput} pl-10 appearance-none cursor-pointer !bg-[#ececec] dark:!bg-[#0c1f33]`}
//                     >
//                       <option value="أجهزة حاسوب وتقنية">أجهزة حاسوب وتقنية</option>
//                       <option value="أثاث ومفروشات مكتبية">أثاث ومفروشات مكتبية</option>
//                       <option value="معدات وشبكات اتصالات">معدات وشبكات اتصالات</option>
//                       <option value="قرطاسية ومستلزمات مكتبية">قرطاسية ومستلزمات مكتبية</option>
//                       <option value="خدمات وصيانة برمجية">خدمات وصيانة برمجية</option>
//                     </select>
//                     <i className="fa-solid fa-chevron-down absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-xs pointer-events-none"></i>
//                   </div>
//                 </div>
//               </div>
 
//               {/* ملاحظة التوريد (تحت الصف، يمين) */}
//               <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 pt-1">
//                 متى تحتاج الأصناف أن تكون متوفرة؟
//               </p>
 
//               {/* المبرر */}
//               <div>
//                 <label className={labelCls}>المبرر</label>
//                 <textarea
//                   rows={6}
//                   value={justification}
//                   onChange={(e) => setJustification(e.target.value)}
//                   className="w-full bg-[#f7f7f7] dark:bg-[#0c1f33] border border-slate-300 dark:border-slate-700 rounded-2xl p-4 text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-[#00a2e8] focus:ring-1 focus:ring-[#00a2e8] transition-all resize-y"
//                 ></textarea>
//                 <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-8">
//                   لماذا تحتاج هذه الأصناف؟ وما أثر عدم توفرها؟
//                 </p>
//               </div>
//             </div>
//           </section>
 
//           {/* ==================== القسم 2: الأصناف والخدمات ==================== */}
//           <section className={sectionCls}>
//             <div className="pb-4 mb-6 border-b border-slate-200 dark:border-slate-800">
//               <h2 className="text-base sm:text-[17px] font-bold text-slate-900 dark:text-white">
//                 الأصناف والخدمات
//               </h2>
//               <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1">
//                 أضف كل صنف مع الكمية والمواصفات والتكلفة التقديرية
//               </p>
//             </div>
 
//             {/* تكرار الأصناف */}
//             <div className="space-y-6">
//               {items.map((item, index) => {
//                 const itemTotal = getItemTotal(item)
 
//                 return (
//                   <div key={item.id} className="space-y-4">
//                     {/* عنوان الصنف + زر إضافة صنف آخر (في الصنف الأول) */}
//                     <div className="flex items-center justify-between min-h-[48px]">
//                       <div className="flex items-center gap-3">
//                         <span className="text-sm font-bold text-slate-900 dark:text-slate-200">
//                           الصنف {index + 1}
//                         </span>
//                         {items.length > 1 && (
//                           <button
//                             type="button"
//                             onClick={() => handleRemoveItem(item.id)}
//                             className="text-xs text-rose-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 px-2 py-1 rounded-lg transition-colors"
//                           >
//                             <i className="fa-regular fa-trash-can ml-1"></i>
//                             حذف
//                           </button>
//                         )}
//                       </div>
 
//                       {index === 0 && (
//                         <button
//                           type="button"
//                           onClick={handleAddItem}
//                           className={`inline-flex items-center justify-center gap-1.5 h-12 w-[273px] max-w-full rounded-full text-xs sm:text-sm shadow-sm hover:shadow ${gradientBtn}`}
//                         >
//                           <span>+ إضافة صنف آخر</span>
//                         </button>
//                       )}
//                     </div>
 
//                     {/* كرت الصنف (خلفية زرقاء فاتحة) */}
//                     <div className="p-4 rounded-2xl bg-[#e8f4fd] dark:bg-[#0c1f33]/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-5">
//                       {/* الصنف أو الخدمة */}
//                       <div>
//                         <label className="block text-xs sm:text-[13px] font-bold text-slate-900 dark:text-slate-200 mb-2">
//                           الصنف أو الخدمة
//                         </label>
//                         <input
//                           type="text"
//                           value={item.name}
//                           onChange={(e) =>
//                             handleItemChange(item.id, 'name', e.target.value)
//                           }
//                           placeholder="مثال: أجهزة حاسوب لمعمل الحاسب الآلي"
//                           className={itemInput}
//                         />
//                       </div>
 
//                       {/* الكمية */}
//                       <div>
//                         <label className="block text-xs sm:text-[13px] font-bold text-slate-900 dark:text-slate-200 mb-2">
//                           الكمية
//                         </label>
//                         <input
//                           type="number"
//                           min="0"
//                           value={item.quantity}
//                           onChange={(e) =>
//                             handleItemChange(
//                               item.id,
//                               'quantity',
//                               Math.max(0, Number(e.target.value))
//                             )
//                           }
//                           className={itemInput}
//                         />
//                       </div>
 
//                       {/* الوحدة */}
//                       <div>
//                         <label className="block text-xs sm:text-[13px] font-bold text-slate-900 dark:text-slate-200 mb-2">
//                           الوحدة
//                         </label>
//                         <div className="relative">
//                           <select
//                             value={item.unit}
//                             onChange={(e) =>
//                               handleItemChange(item.id, 'unit', e.target.value)
//                             }
//                             className={`${itemInput} pl-9 appearance-none cursor-pointer`}
//                           >
//                             <option value="نص">نص</option>
//                             <option value="قطعة">قطعة</option>
//                             <option value="جهاز">جهاز</option>
//                             <option value="طرد">طرد</option>
//                             <option value="خدمة">خدمة</option>
//                             <option value="ساعة">ساعة</option>
//                           </select>
//                           <i className="fa-solid fa-chevron-down absolute left-4 top-1/2 -translate-y-1/2 text-slate-700 text-[11px] pointer-events-none"></i>
//                         </div>
//                       </div>
 
//                       {/* التكلفة التقديرية للوحدة */}
//                       <div>
//                         <label className="block text-xs sm:text-[13px] font-bold text-slate-900 dark:text-slate-200 mb-2">
//                           التكلفة التقديرية للوحدة
//                         </label>
//                         <input
//                           type="number"
//                           min="0"
//                           value={item.unitPrice}
//                           onChange={(e) =>
//                             handleItemChange(
//                               item.id,
//                               'unitPrice',
//                               Math.max(0, Number(e.target.value))
//                             )
//                           }
//                           className={itemInput}
//                         />
//                       </div>
 
//                       {/* المواصفات (عمودان) */}
//                       <div className="sm:col-span-2 lg:col-span-2">
//                         <label className="block text-xs sm:text-[13px] font-bold text-slate-900 dark:text-slate-200 mb-2">
//                           المواصفات
//                         </label>
//                         <input
//                           type="text"
//                           value={item.specifications}
//                           onChange={(e) =>
//                             handleItemChange(
//                               item.id,
//                               'specifications',
//                               e.target.value
//                             )
//                           }
//                           placeholder="كلية الهندسة"
//                           className={itemInput}
//                         />
//                       </div>
 
//                       {/* الإجمالي (عمودان) */}
//                       <div className="sm:col-span-2 lg:col-span-2">
//                         <label className="block text-xs sm:text-[13px] font-bold text-slate-900 dark:text-slate-200 mb-2">
//                           الإجمالي
//                         </label>
//                         <input
//                           type="text"
//                           readOnly
//                           value={itemTotal.toLocaleString('ar-SA')}
//                           className={`${itemInput} font-bold cursor-default`}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//           </section>
 
//           {/* ==================== القسم 3: المرفقات ==================== */}
//           <section className={sectionCls}>
//             <div className="pb-4 mb-6 border-b border-slate-200 dark:border-slate-800">
//               <h2 className="text-base sm:text-[17px] font-bold text-slate-900 dark:text-white">
//                 المرفقات
//               </h2>
//               <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1">
//                 عروض استرشادية، مواصفات فنية، صور.. (اختياري)
//               </p>
//             </div>
 
//             {/* مربع الرفع بحدود متقطعة */}
//             <label className="block border border-dashed border-[#0072E5] bg-[#e8f4fd] dark:bg-[#0b253d]/40 hover:bg-[#dcf0fc] dark:hover:bg-[#0d2e4d]/50 rounded-2xl py-16 sm:py-24 px-8 text-center cursor-pointer transition-colors group">
//               <input
//                 type="file"
//                 multiple
//                 onChange={handleFileUpload}
//                 className="hidden"
//               />
//               <div className="flex flex-col items-center justify-center gap-2">
//                 <div className="w-10 h-10 rounded-full flex items-center justify-center text-slate-600 group-hover:scale-110 transition-transform">
//                   <i className="fa-regular fa-file-lines text-2xl"></i>
//                 </div>
//                 <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">
//                   اضغط لإختيار ملف
//                 </span>
//                 <span className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400">
//                   صور – حتى 10 م.ب للملف، PDF, Word, Excel
//                 </span>
//               </div>
//             </label>
 
//             {/* عرض الملفات المرفوعة */}
//             {uploadedFiles.length > 0 && (
//               <div className="space-y-2 pt-4">
//                 {uploadedFiles.map((file, idx) => (
//                   <div
//                     key={idx}
//                     className="flex items-center justify-between p-3 bg-slate-50 dark:bg-[#0c1f33] rounded-xl border border-slate-200/80 dark:border-slate-700/80 text-xs"
//                   >
//                     <div className="flex items-center gap-2.5 truncate">
//                       <i className="fa-regular fa-file-pdf text-[#00a2e8]"></i>
//                       <span className="truncate font-medium text-slate-800 dark:text-slate-200">
//                         {file.name}
//                       </span>
//                       <span className="text-[10px] text-slate-400">
//                         ({(file.size / (1024 * 1024)).toFixed(2)} م.ب)
//                       </span>
//                     </div>
//                     <button
//                       type="button"
//                       onClick={() => handleRemoveFile(idx)}
//                       className="text-slate-400 hover:text-rose-500 p-1"
//                     >
//                       <i className="fa-solid fa-xmark"></i>
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </section>
//         </main>
 
//         {/* ==================== شريط الإجراءات السفلي ==================== */}
//         <div className="sticky bottom-0 z-10 bg-white dark:bg-[#0b1b2d] dark:border-t dark:border-slate-800/80 px-4 sm:px-6 lg:pl-10 lg:pr-6 py-4">
//           <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
//             {/* التكلفة التقديرية */}
//             <div className="text-right w-full sm:w-auto">
//               <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
//                 إجمالي التكلفة التقديرية: {totalEstimatedCost.toLocaleString('ar-SA')} ر.س
//               </span>
//             </div>
 
//             {/* الأزرار: إرسال للاعتماد (يمين) ثم حفظ كمسودة (يسار) */}
//             <div className="flex items-center gap-6 w-full sm:w-auto justify-end">
//               <button
//                 type="button"
//                 onClick={handleSubmitOrder}
//                 className={`flex-1 sm:flex-none sm:w-[300px] h-12 rounded-full text-xs sm:text-sm shadow-md hover:shadow ${gradientBtn}`}
//               >
//                 إرسال للإعتماد
//               </button>
//               <button
//                 type="button"
//                 onClick={handleSaveDraft}
//                 className="flex-1 sm:flex-none sm:w-[300px] h-12 border border-[#0072E5] text-[#0072E5] hover:bg-[#e4f4fd] dark:hover:bg-[#0f2c45] rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer"
//               >
//                 حفظ كمسودة
//               </button>
//             </div>
//           </div>
//         </div>
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
//   { id: 'my-orders', label: 'طلباتي', Icon: FileIcon, path: '/dashboard' },
//   { id: 'new-order', label: 'طلب شراء جديد', Icon: FilePlusIcon, path: '/new-order' },
//   { id: 'suppliers', label: 'الموردين', Icon: TruckIcon, path: '/dashboard' },
// ]
 
// /* ==================== أنماط مشتركة ==================== */
 
// // تدرّج الأزرار الرئيسية (أزرق غامق يسارًا ← سماوي يمينًا)
// const gradientBtn =
//   'bg-gradient-to-r from-[#0072E5] to-[#00B4F5] hover:brightness-95 text-white font-bold transition-all cursor-pointer'
 
// // حقل بيضاوي لقسم "بيانات الطلب"
// const pillInput =
//   'w-full h-10 bg-[#F4F4F4] dark:bg-[#0c1f33] border-[0.5px] border-[#828282] dark:border-slate-700 rounded-full px-4 text-xs sm:text-sm text-slate-700 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-[#00a2e8] focus:ring-1 focus:ring-[#00a2e8] transition-all'
 
// // حقل بيضاوي داخل كرت الصنف
// const itemInput =
//   'w-full h-10 bg-white dark:bg-[#0c1f33] border border-slate-200 dark:border-slate-700 rounded-full px-4 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#00a2e8]'
 
// const labelCls =
//   'block text-xs sm:text-[13px] font-bold text-slate-900 dark:text-slate-200 mb-2'
 
// const sectionCls =
//   'bg-white dark:bg-[#0b1b2d] rounded-[24px] p-6 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 dark:border-slate-800/80'
 
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
//           {navItems.map(({ id, label, Icon, path }) => {
//             const isActive = id === 'new-order'
//             return (
//               <button
//                 key={id}
//                 onClick={() => {
//                   navigate(path)
//                   onNavigate?.()
//                 }}
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
 
//         {/* بطاقة المستخدم */}
//         <div className="flex items-center justify-between py-[clamp(10px,1.85vh,20px)] pr-6 2xl:pr-10 pl-5 2xl:pl-7 mt-[clamp(0px,3vh,32px)] mb-2 cursor-pointer group">
//           <div className="flex items-center gap-4">
//             <img
//               src={userHani}
//               alt="م. هاني وشاح"
//               className="w-10 h-10 rounded-full object-cover"
//             />
//             <div className="text-right">
//               <h4 className="text-[15px] 2xl:text-[17px] font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
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
 
// /* ==================== صفحة طلب شراء جديد ==================== */
 
// export default function NewOrder() {
//   const navigate = useNavigate()
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [notificationOpen, setNotificationOpen] = useState(false)
//   const [searchQuery, setSearchQuery] = useState('')
 
//   // بيانات الطلب
//   const [orderTitle, setOrderTitle] = useState('')
//   const [deliveryDate, setDeliveryDate] = useState('الأربعاء ، 21 أكتوبر')
//   const [category, setCategory] = useState('أجهزة حاسوب وتقنية')
//   const [justification, setJustification] = useState('')
 
//   // قائمة الأصناف والخدمات
//   const [items, setItems] = useState([
//     {
//       id: 1,
//       name: '',
//       quantity: 0,
//       unit: 'نص',
//       unitPrice: 0,
//       specifications: '',
//     },
//   ])
 
//   // المرفقات
//   const [uploadedFiles, setUploadedFiles] = useState([])
//   const [alertInfo, setAlertInfo] = useState(null)
 
//   // إضافة صنف جديد
//   const handleAddItem = () => {
//     setItems((prev) => [
//       ...prev,
//       {
//         id: Date.now(),
//         name: '',
//         quantity: 0,
//         unit: 'نص',
//         unitPrice: 0,
//         specifications: '',
//       },
//     ])
//   }
 
//   // حذف صنف
//   const handleRemoveItem = (id) => {
//     if (items.length > 1) {
//       setItems((prev) => prev.filter((item) => item.id !== id))
//     }
//   }
 
//   // تحديث حقل في صنف
//   const handleItemChange = (id, field, value) => {
//     setItems((prev) =>
//       prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
//     )
//   }
 
//   // حساب إجمالي كل صنف
//   const getItemTotal = (item) => {
//     const qty = Number(item.quantity) || 0
//     const price = Number(item.unitPrice) || 0
//     return qty * price
//   }
 
//   // حساب إجمالي كل الأصناف
//   const totalEstimatedCost = items.reduce(
//     (sum, item) => sum + getItemTotal(item),
//     0
//   )
 
//   // التعامل مع رفع الملفات
//   const handleFileUpload = (e) => {
//     const files = Array.from(e.target.files || [])
//     if (files.length > 0) {
//       setUploadedFiles((prev) => [...prev, ...files])
//     }
//   }
 
//   const handleRemoveFile = (index) => {
//     setUploadedFiles((prev) => prev.filter((_, i) => i !== index))
//   }
 
//   // إرسال كمسودة
//   const handleSaveDraft = () => {
//     setAlertInfo({
//       type: 'success',
//       title: 'تم الحفظ بنجاح',
//       message: 'تم حفظ طلب الشراء كمسودة برقم PR-2026-0012.',
//     })
//     setTimeout(() => {
//       setAlertInfo(null)
//       navigate('/dashboard')
//     }, 1800)
//   }
 
//   // إرسال للاعتماد
//   const handleSubmitOrder = (e) => {
//     e.preventDefault()
//     setAlertInfo({
//       type: 'success',
//       title: 'تم إرسال الطلب للاعتماد',
//       message: 'تم إرسال طلب الشراء رقم PR-2026-0012 بنجاح للإدارة المختصة.',
//     })
//     setTimeout(() => {
//       setAlertInfo(null)
//       navigate('/dashboard')
//     }, 2000)
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
//                 className="font-bold text-slate-900 dark:text-slate-200 hover:text-slate-700 dark:hover:text-white transition-colors"
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
//             {/* جرس الإشعارات */}
//             <div className="relative">
//               <button
//                 onClick={() => setNotificationOpen(!notificationOpen)}
//                 className="w-10 h-10 rounded-full flex items-center justify-center text-slate-900 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 relative transition-colors"
//                 aria-label="الإشعارات"
//               >
//                 <i className="fa-regular fa-bell text-[22px]"></i>
//               </button>
 
//               {notificationOpen && (
//                 <div className="absolute left-0 mt-2 w-72 bg-white dark:bg-[#0f243a] rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-3 z-50 text-right">
//                   <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800 mb-2">
//                     <span className="font-bold text-xs">الإشعارات الجديدة</span>
//                     <span className="text-[11px] text-sky-500 font-semibold cursor-pointer">
//                       تحديد كمقروء
//                     </span>
//                   </div>
//                   <div className="space-y-2 text-xs">
//                     <div className="p-2 bg-sky-50/60 dark:bg-sky-950/30 rounded-xl">
//                       <p className="font-semibold text-slate-800 dark:text-slate-200">
//                         تم إرجاع الطلب PR-2026-0008 للتعديل
//                       </p>
//                       <span className="text-[10px] text-slate-400">منذ يومين</span>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
 
//             {/* فاصل عمودي */}
//             <span className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-slate-700"></span>
 
//             {/* قائمة اللغة */}
//             <LanguageMenu />
//           </div>
//         </header>
 
//         {/* إشعار التنبيه */}
//         {alertInfo && (
//           <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-emerald-600 text-white px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
//             <i className="fa-solid fa-circle-check text-xl"></i>
//             <div>
//               <h5 className="font-bold text-sm">{alertInfo.title}</h5>
//               <p className="text-xs text-emerald-100">{alertInfo.message}</p>
//             </div>
//           </div>
//         )}
 
//         {/* ==================== محتوى النموذج الرئيسي ==================== */}
//         <main className="w-full flex-1 px-4 sm:px-6 lg:pl-10 lg:pr-6 pt-10 pb-10 space-y-10 max-w-[1400px]">
//           {/* ترويسة الصفحة: رقم الطلب + العنوان الرئيسي */}
//           <div className="space-y-2">
//             <div className="flex items-center justify-between">
//               <span className="bg-[#e5e7eb] dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-xs font-semibold tracking-wider">
//                 PR-2026-0012
//               </span>
//             </div>
 
//             <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
//               طلب شراء جديد
//             </h1>
//             <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-400 font-medium">
//               املأ البيانات بلغة بسيطة، الحقول المعلّمة بـ * مطلوبة عند الإرسال.
//             </p>
//           </div>
 
//           {/* ==================== القسم 1: بيانات الطلب ==================== */}
//           <section className={sectionCls}>
//             <h2 className="text-base sm:text-[17px] font-bold text-slate-900 dark:text-white pb-4 mb-6 border-b border-[#d6eefb] dark:border-slate-800">
//               بيانات الطلب
//             </h2>
 
//             <div className="space-y-5">
//               {/* الصف الأول: عنوان الطلب + التاريخ المطلوب للتوريد */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
//                 {/* عنوان الطلب */}
//                 <div>
//                   <label className={labelCls}>عنوان الطلب *</label>
//                   <input
//                     type="text"
//                     value={orderTitle}
//                     onChange={(e) => setOrderTitle(e.target.value)}
//                     placeholder="مثال: أجهزة حاسوب لمعمل الحاسب الآلي"
//                     className={pillInput}
//                   />
//                 </div>
 
//                 {/* التاريخ المطلوب للتوريد */}
//                 <div>
//                   <label className={labelCls}>التاريخ المطلوب للتوريد *</label>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       value={deliveryDate}
//                       onChange={(e) => setDeliveryDate(e.target.value)}
//                       placeholder="الأربعاء ، 21 أكتوبر"
//                       className={`${pillInput} pl-12`}
//                     />
//                     <i className="fa-regular fa-calendar absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-base"></i>
//                   </div>
//                 </div>
//               </div>
 
//               {/* الصف الثاني: الإدارة الطالبة + التصنيف */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
//                 {/* الإدارة الطالبة */}
//                 <div>
//                   <label className={labelCls}>الإدارة الطالبة</label>
//                   <input
//                     type="text"
//                     disabled
//                     value="كلية الهندسة"
//                     className="w-full h-10 bg-[#F4F4F4] dark:bg-slate-800/60 border-[0.5px] border-[#828282] dark:border-slate-700 rounded-full px-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 cursor-not-allowed"
//                   />
//                 </div>
 
//                 {/* التصنيف */}
//                 <div>
//                   <label className={labelCls}>التصنيف *</label>
//                   <div className="relative">
//                     <select
//                       value={category}
//                       onChange={(e) => setCategory(e.target.value)}
//                       className={`${pillInput} pl-10 appearance-none cursor-pointer`}
//                     >
//                       <option value="أجهزة حاسوب وتقنية">أجهزة حاسوب وتقنية</option>
//                       <option value="أثاث ومفروشات مكتبية">أثاث ومفروشات مكتبية</option>
//                       <option value="معدات وشبكات اتصالات">معدات وشبكات اتصالات</option>
//                       <option value="قرطاسية ومستلزمات مكتبية">قرطاسية ومستلزمات مكتبية</option>
//                       <option value="خدمات وصيانة برمجية">خدمات وصيانة برمجية</option>
//                     </select>
//                     <i className="fa-solid fa-chevron-down absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-xs pointer-events-none"></i>
//                   </div>
//                 </div>
//               </div>
 
//               {/* ملاحظة التوريد (تحت الصف، على الطرف اليسار) */}
//               <p className="text-left text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 pt-1">
//                 متى تحتاج الأصناف أن تكون متوفرة؟
//               </p>
 
//               {/* المبرر */}
//               <div>
//                 <label className={labelCls}>المبرر</label>
//                 <textarea
//                   rows={5}
//                   value={justification}
//                   onChange={(e) => setJustification(e.target.value)}
//                   className="w-full bg-[#F4F4F4] dark:bg-[#0c1f33] border-[0.5px] border-[#828282] dark:border-slate-700 rounded-2xl p-4 text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-[#00a2e8] focus:ring-1 focus:ring-[#00a2e8] transition-all resize-y"
//                 ></textarea>
//                 <p className="text-left text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-8">
//                   لماذا تحتاج هذه الأصناف؟ وما أثر عدم توفرها؟
//                 </p>
//               </div>
//             </div>
//           </section>
 
//           {/* ==================== القسم 2: الأصناف والخدمات ==================== */}
//           <section className={sectionCls}>
//             <div className="pb-4 mb-6 border-b border-slate-200 dark:border-slate-800">
//               <h2 className="text-base sm:text-[17px] font-bold text-slate-900 dark:text-white">
//                 الأصناف والخدمات
//               </h2>
//               <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1">
//                 أضف كل صنف مع الكمية والمواصفات والتكلفة التقديرية
//               </p>
//             </div>
 
//             {/* تكرار الأصناف */}
//             <div className="space-y-6">
//               {items.map((item, index) => {
//                 const itemTotal = getItemTotal(item)
 
//                 return (
//                   <div key={item.id} className="space-y-4">
//                     {/* عنوان الصنف + زر إضافة صنف آخر (في الصنف الأول) */}
//                     <div className="flex items-center justify-between min-h-[48px]">
//                       <div className="flex items-center gap-3">
//                         <span className="text-sm font-bold text-slate-900 dark:text-slate-200">
//                           الصنف {index + 1}
//                         </span>
//                         {items.length > 1 && (
//                           <button
//                             type="button"
//                             onClick={() => handleRemoveItem(item.id)}
//                             className="text-xs text-rose-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 px-2 py-1 rounded-lg transition-colors"
//                           >
//                             <i className="fa-regular fa-trash-can ml-1"></i>
//                             حذف
//                           </button>
//                         )}
//                       </div>
 
//                       {index === 0 && (
//                         <button
//                           type="button"
//                           onClick={handleAddItem}
//                           className={`inline-flex items-center justify-center gap-1.5 h-12 w-[273px] max-w-full rounded-full text-xs sm:text-sm shadow-sm hover:shadow ${gradientBtn}`}
//                         >
//                           <span>+ إضافة صنف آخر</span>
//                         </button>
//                       )}
//                     </div>
 
//                     {/* كرت الصنف (خلفية زرقاء فاتحة) */}
//                     <div className="p-4 rounded-2xl bg-[#e8f4fd] dark:bg-[#0c1f33]/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-5">
//                       {/* الصنف أو الخدمة */}
//                       <div>
//                         <label className="block text-xs sm:text-[13px] font-bold text-slate-900 dark:text-slate-200 mb-2">
//                           الصنف أو الخدمة
//                         </label>
//                         <input
//                           type="text"
//                           value={item.name}
//                           onChange={(e) =>
//                             handleItemChange(item.id, 'name', e.target.value)
//                           }
//                           placeholder="مثال: أجهزة حاسوب لمعمل الحاسب الآلي"
//                           className={itemInput}
//                         />
//                       </div>
 
//                       {/* الكمية */}
//                       <div>
//                         <label className="block text-xs sm:text-[13px] font-bold text-slate-900 dark:text-slate-200 mb-2">
//                           الكمية
//                         </label>
//                         <input
//                           type="number"
//                           min="0"
//                           value={item.quantity}
//                           onChange={(e) =>
//                             handleItemChange(
//                               item.id,
//                               'quantity',
//                               Math.max(0, Number(e.target.value))
//                             )
//                           }
//                           className={itemInput}
//                         />
//                       </div>
 
//                       {/* الوحدة */}
//                       <div>
//                         <label className="block text-xs sm:text-[13px] font-bold text-slate-900 dark:text-slate-200 mb-2">
//                           الوحدة
//                         </label>
//                         <div className="relative">
//                           <select
//                             value={item.unit}
//                             onChange={(e) =>
//                               handleItemChange(item.id, 'unit', e.target.value)
//                             }
//                             className={`${itemInput} pl-9 appearance-none cursor-pointer`}
//                           >
//                             <option value="نص">نص</option>
//                             <option value="قطعة">قطعة</option>
//                             <option value="جهاز">جهاز</option>
//                             <option value="طرد">طرد</option>
//                             <option value="خدمة">خدمة</option>
//                             <option value="ساعة">ساعة</option>
//                           </select>
//                           <i className="fa-solid fa-chevron-down absolute left-4 top-1/2 -translate-y-1/2 text-slate-700 text-[11px] pointer-events-none"></i>
//                         </div>
//                       </div>
 
//                       {/* التكلفة التقديرية للوحدة */}
//                       <div>
//                         <label className="block text-xs sm:text-[13px] font-bold text-slate-900 dark:text-slate-200 mb-2">
//                           التكلفة التقديرية للوحدة
//                         </label>
//                         <input
//                           type="number"
//                           min="0"
//                           value={item.unitPrice}
//                           onChange={(e) =>
//                             handleItemChange(
//                               item.id,
//                               'unitPrice',
//                               Math.max(0, Number(e.target.value))
//                             )
//                           }
//                           className={itemInput}
//                         />
//                       </div>
 
//                       {/* المواصفات (عمودان) */}
//                       <div className="sm:col-span-2 lg:col-span-2">
//                         <label className="block text-xs sm:text-[13px] font-bold text-slate-900 dark:text-slate-200 mb-2">
//                           المواصفات
//                         </label>
//                         <input
//                           type="text"
//                           value={item.specifications}
//                           onChange={(e) =>
//                             handleItemChange(
//                               item.id,
//                               'specifications',
//                               e.target.value
//                             )
//                           }
//                           placeholder="كلية الهندسة"
//                           className={itemInput}
//                         />
//                       </div>
 
//                       {/* الإجمالي (عمودان) */}
//                       <div className="sm:col-span-2 lg:col-span-2">
//                         <label className="block text-xs sm:text-[13px] font-bold text-slate-900 dark:text-slate-200 mb-2">
//                           الإجمالي
//                         </label>
//                         <input
//                           type="text"
//                           readOnly
//                           value={itemTotal.toLocaleString('ar-SA')}
//                           className={`${itemInput} font-bold cursor-default`}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//           </section>
 
//           {/* ==================== القسم 3: المرفقات ==================== */}
//           <section className={sectionCls}>
//             <div className="pb-4 mb-6 border-b border-slate-200 dark:border-slate-800">
//               <h2 className="text-base sm:text-[17px] font-bold text-slate-900 dark:text-white">
//                 المرفقات
//               </h2>
//               <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1">
//                 عروض استرشادية، مواصفات فنية، صور.. (اختياري)
//               </p>
//             </div>
 
//             {/* مربع الرفع بحدود متقطعة */}
//             <label className="block border border-dashed border-[#0072E5] bg-[#e8f4fd] dark:bg-[#0b253d]/40 hover:bg-[#dcf0fc] dark:hover:bg-[#0d2e4d]/50 rounded-2xl py-16 sm:py-24 px-8 text-center cursor-pointer transition-colors group">
//               <input
//                 type="file"
//                 multiple
//                 onChange={handleFileUpload}
//                 className="hidden"
//               />
//               <div className="flex flex-col items-center justify-center gap-2">
//                 <div className="w-10 h-10 rounded-full flex items-center justify-center text-slate-600 group-hover:scale-110 transition-transform">
//                   <i className="fa-regular fa-file-lines text-2xl"></i>
//                 </div>
//                 <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">
//                   اضغط لإختيار ملف
//                 </span>
//                 <span className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400">
//                   صور – حتى 10 م.ب للملف، PDF, Word, Excel
//                 </span>
//               </div>
//             </label>
 
//             {/* عرض الملفات المرفوعة */}
//             {uploadedFiles.length > 0 && (
//               <div className="space-y-2 pt-4">
//                 {uploadedFiles.map((file, idx) => (
//                   <div
//                     key={idx}
//                     className="flex items-center justify-between p-3 bg-slate-50 dark:bg-[#0c1f33] rounded-xl border border-slate-200/80 dark:border-slate-700/80 text-xs"
//                   >
//                     <div className="flex items-center gap-2.5 truncate">
//                       <i className="fa-regular fa-file-pdf text-[#00a2e8]"></i>
//                       <span className="truncate font-medium text-slate-800 dark:text-slate-200">
//                         {file.name}
//                       </span>
//                       <span className="text-[10px] text-slate-400">
//                         ({(file.size / (1024 * 1024)).toFixed(2)} م.ب)
//                       </span>
//                     </div>
//                     <button
//                       type="button"
//                       onClick={() => handleRemoveFile(idx)}
//                       className="text-slate-400 hover:text-rose-500 p-1"
//                     >
//                       <i className="fa-solid fa-xmark"></i>
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </section>
//         </main>
 
//         {/* ==================== شريط الإجراءات السفلي ==================== */}
//         <div className="sticky bottom-0 z-10 bg-white dark:bg-[#0b1b2d] dark:border-t dark:border-slate-800/80 px-4 sm:px-6 lg:pl-10 lg:pr-6 py-4">
//           <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
//             {/* التكلفة التقديرية */}
//             <div className="text-right w-full sm:w-auto">
//               <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
//                 إجمالي التكلفة التقديرية: {totalEstimatedCost.toLocaleString('ar-SA')} ر.س
//               </span>
//             </div>
 
//             {/* الأزرار: إرسال للاعتماد (يمين) ثم حفظ كمسودة (يسار) */}
//             <div className="flex items-center gap-6 w-full sm:w-auto justify-end">
//               <button
//                 type="button"
//                 onClick={handleSubmitOrder}
//                 className={`flex-1 sm:flex-none sm:w-[300px] h-12 rounded-full text-xs sm:text-sm shadow-md hover:shadow ${gradientBtn}`}
//               >
//                 إرسال للإعتماد
//               </button>
//               <button
//                 type="button"
//                 onClick={handleSaveDraft}
//                 className="flex-1 sm:flex-none sm:w-[300px] h-12 border border-[#0072E5] text-[#0072E5] hover:bg-[#e4f4fd] dark:hover:bg-[#0f2c45] rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer"
//               >
//                 حفظ كمسودة
//               </button>
//             </div>
//           </div>
//         </div>
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
 
// // أيقونة تقويم مع ساعة صغيرة (لحقل التاريخ)
// const CalendarClockIcon = (props) => (
//   <svg {...strokeProps} strokeWidth={1.8} {...props}>
//     <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
//     <path d="M16 2v4" />
//     <path d="M8 2v4" />
//     <path d="M3 10h5" />
//     <path d="M17.5 17.5 16 16.3V14" />
//     <circle cx="16" cy="16" r="6" />
//   </svg>
// )
 
// const navItems = [
//   { id: 'home', label: 'الرئيسية', Icon: HomeIcon, path: '/dashboard' },
//   { id: 'my-orders', label: 'طلباتي', Icon: FileIcon, path: '/my-orders' },
//   { id: 'new-order', label: 'طلب شراء جديد', Icon: FilePlusIcon, path: '/new-order' },
//   { id: 'suppliers', label: 'الموردين', Icon: TruckIcon, path: '/dashboard' },
// ]
 
// /* ==================== أنماط مشتركة ==================== */
 
// // تدرّج الأزرار الرئيسية (أزرق غامق يسارًا ← سماوي يمينًا)
// const gradientBtn =
//   'bg-gradient-to-r from-[#0072E5] to-[#00B4F5] hover:brightness-95 text-white font-bold transition-all cursor-pointer'
 
// // حقل بيضاوي لقسم "بيانات الطلب"
// const pillInput =
//   'w-full h-10 bg-[#F4F4F4] dark:bg-[#0c1f33] border-[0.5px] border-[#828282] dark:border-slate-700 rounded-full px-4 text-xs sm:text-sm text-slate-700 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-[#00a2e8] focus:ring-1 focus:ring-[#00a2e8] transition-all'
 
// // حقل بيضاوي داخل كرت الصنف
// const itemInput =
//   'w-full h-10 bg-white dark:bg-[#0c1f33] border border-slate-200 dark:border-slate-700 rounded-full px-4 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#00a2e8]'
 
// const labelCls =
//   'block text-xs sm:text-[13px] font-bold text-slate-900 dark:text-slate-200 mb-2'
 
// const sectionCls =
//   'bg-white dark:bg-[#0b1b2d] rounded-[24px] p-6 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 dark:border-slate-800/80'
 
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
//           {navItems.map(({ id, label, Icon, path }) => {
//             const isActive = id === 'new-order'
//             return (
//               <button
//                 key={id}
//                 onClick={() => {
//                   navigate(path)
//                   onNavigate?.()
//                 }}
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
 
//         {/* بطاقة المستخدم */}
//         <div className="flex items-center justify-between py-[clamp(10px,1.85vh,20px)] pr-6 2xl:pr-10 pl-5 2xl:pl-7 mt-[clamp(0px,3vh,32px)] mb-2 cursor-pointer group">
//           <div className="flex items-center gap-4">
//             <img
//               src={userHani}
//               alt="م. هاني وشاح"
//               className="w-10 h-10 rounded-full object-cover"
//             />
//             <div className="text-right">
//               <h4 className="text-[15px] 2xl:text-[17px] font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
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
 
// /* ==================== صفحة طلب شراء جديد ==================== */
 
// export default function NewOrder() {
//   const navigate = useNavigate()
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [notificationOpen, setNotificationOpen] = useState(false)
//   const [searchQuery, setSearchQuery] = useState('')
 
//   // بيانات الطلب
//   const [orderTitle, setOrderTitle] = useState('')
//   const [deliveryDate, setDeliveryDate] = useState('الأربعاء ، 21 أكتوبر')
//   const [category, setCategory] = useState('أجهزة حاسوب وتقنية')
//   const [justification, setJustification] = useState('')
 
//   // قائمة الأصناف والخدمات
//   const [items, setItems] = useState([
//     {
//       id: 1,
//       name: '',
//       quantity: 0,
//       unit: 'نص',
//       unitPrice: 0,
//       specifications: '',
//     },
//   ])
 
//   // المرفقات
//   const [uploadedFiles, setUploadedFiles] = useState([])
//   const [alertInfo, setAlertInfo] = useState(null)
//   const [showSubmitModal, setShowSubmitModal] = useState(false)
 
//   // إضافة صنف جديد
//   const handleAddItem = () => {
//     setItems((prev) => [
//       ...prev,
//       {
//         id: Date.now(),
//         name: '',
//         quantity: 0,
//         unit: 'نص',
//         unitPrice: 0,
//         specifications: '',
//       },
//     ])
//   }
 
//   // حذف صنف
//   const handleRemoveItem = (id) => {
//     if (items.length > 1) {
//       setItems((prev) => prev.filter((item) => item.id !== id))
//     }
//   }
 
//   // تحديث حقل في صنف
//   const handleItemChange = (id, field, value) => {
//     setItems((prev) =>
//       prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
//     )
//   }
 
//   // حساب إجمالي كل صنف
//   const getItemTotal = (item) => {
//     const qty = Number(item.quantity) || 0
//     const price = Number(item.unitPrice) || 0
//     return qty * price
//   }
 
//   // حساب إجمالي كل الأصناف
//   const totalEstimatedCost = items.reduce(
//     (sum, item) => sum + getItemTotal(item),
//     0
//   )
 
//   // التعامل مع رفع الملفات
//   const handleFileUpload = (e) => {
//     const files = Array.from(e.target.files || [])
//     if (files.length > 0) {
//       setUploadedFiles((prev) => [...prev, ...files])
//     }
//   }
 
//   const handleRemoveFile = (index) => {
//     setUploadedFiles((prev) => prev.filter((_, i) => i !== index))
//   }
 
//   // إرسال كمسودة
//   const handleSaveDraft = () => {
//     setAlertInfo({
//       type: 'success',
//       title: 'تم الحفظ بنجاح',
//       message: 'تم حفظ طلب الشراء كمسودة برقم PR-2026-0012.',
//     })
//     setTimeout(() => {
//       setAlertInfo(null)
//       navigate('/dashboard')
//     }, 1800)
//   }
 
//   // إرسال للاعتماد - يفتح المودال أولاً
//   const handleSubmitOrder = () => {
//     setShowSubmitModal(true)
//   }

//   // تأكيد الإرسال من داخل المودال
//   const handleConfirmSubmit = () => {
//     setShowSubmitModal(false)
//     setAlertInfo({
//       type: 'success',
//       title: 'تم إرسال الطلب للاعتماد',
//       message: 'تم إرسال طلب الشراء رقم PR-2026-0012 بنجاح للإدارة المختصة.',
//     })
//     setTimeout(() => {
//       setAlertInfo(null)
//       navigate('/dashboard')
//     }, 2000)
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
//                 className="font-bold text-slate-900 dark:text-slate-200 hover:text-slate-700 dark:hover:text-white transition-colors"
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
//             {/* جرس الإشعارات */}
//             <NotificationMenu />
 
//             {/* فاصل عمودي */}
//             <span className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-slate-700"></span>
 
//             {/* قائمة اللغة */}
//             <LanguageMenu />
//           </div>
//         </header>
 
//         {/* إشعار التنبيه */}
//         {alertInfo && (
//           <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-emerald-600 text-white px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
//             <i className="fa-solid fa-circle-check text-xl"></i>
//             <div>
//               <h5 className="font-bold text-sm">{alertInfo.title}</h5>
//               <p className="text-xs text-emerald-100">{alertInfo.message}</p>
//             </div>
//           </div>
//         )}
 
//         {/* ==================== محتوى النموذج الرئيسي ==================== */}
//         <main className="w-full flex-1 px-4 sm:px-6 lg:pl-10 lg:pr-6 pt-10 pb-10 space-y-10 max-w-[1400px]">
//           {/* ترويسة الصفحة: رقم الطلب + العنوان الرئيسي */}
//           <div className="space-y-2">
//             <div className="flex items-center justify-between">
//               <span className="bg-[#e5e7eb] dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-xs font-semibold tracking-wider">
//                 PR-2026-0012
//               </span>
//             </div>
 
//             <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
//               طلب شراء جديد
//             </h1>
//             <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-400 font-medium">
//               املأ البيانات بلغة بسيطة، الحقول المعلّمة بـ * مطلوبة عند الإرسال.
//             </p>
//           </div>
 
//           {/* ==================== القسم 1: بيانات الطلب ==================== */}
//           <section className={sectionCls}>
//             <h2 className="text-base sm:text-[17px] font-bold text-slate-900 dark:text-white pb-4 mb-6 border-b border-[#d6eefb] dark:border-slate-800">
//               بيانات الطلب
//             </h2>
 
//             <div className="space-y-5">
//               {/* الصف الأول: عنوان الطلب + التاريخ المطلوب للتوريد */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
//                 {/* عنوان الطلب */}
//                 <div>
//                   <label className={labelCls}>عنوان الطلب *</label>
//                   <input
//                     type="text"
//                     value={orderTitle}
//                     onChange={(e) => setOrderTitle(e.target.value)}
//                     placeholder="مثال: أجهزة حاسوب لمعمل الحاسب الآلي"
//                     className={pillInput}
//                   />
//                 </div>
 
//                 {/* التاريخ المطلوب للتوريد */}
//                 <div>
//                   <label className={labelCls}>التاريخ المطلوب للتوريد *</label>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       value={deliveryDate}
//                       onChange={(e) => setDeliveryDate(e.target.value)}
//                       placeholder="الأربعاء ، 21 أكتوبر"
//                       className={`${pillInput} pl-12`}
//                     />
//                     <img
//                       src={calendarClock}
//                       alt="تقويم"
//                       className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 object-contain pointer-events-none opacity-80 dark:invert dark:opacity-90"
//                     />
//                   </div>
//                 </div>
//               </div>
 
//               {/* الصف الثاني: الإدارة الطالبة + التصنيف */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
//                 {/* الإدارة الطالبة */}
//                 <div>
//                   <label className={labelCls}>الإدارة الطالبة</label>
//                   <input
//                     type="text"
//                     disabled
//                     value="كلية الهندسة"
//                     className="w-full h-10 bg-[#F4F4F4] dark:bg-slate-800/60 border-[0.5px] border-[#828282] dark:border-slate-700 rounded-full px-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 cursor-not-allowed"
//                   />
//                 </div>
 
//                 {/* التصنيف */}
//                 <div>
//                   <label className={labelCls}>التصنيف *</label>
//                   <div className="relative">
//                     <select
//                       value={category}
//                       onChange={(e) => setCategory(e.target.value)}
//                       className={`${pillInput} pl-10 appearance-none cursor-pointer`}
//                     >
//                       <option value="أجهزة حاسوب وتقنية">أجهزة حاسوب وتقنية</option>
//                       <option value="أثاث ومفروشات مكتبية">أثاث ومفروشات مكتبية</option>
//                       <option value="معدات وشبكات اتصالات">معدات وشبكات اتصالات</option>
//                       <option value="قرطاسية ومستلزمات مكتبية">قرطاسية ومستلزمات مكتبية</option>
//                       <option value="خدمات وصيانة برمجية">خدمات وصيانة برمجية</option>
//                     </select>
//                     <i className="fa-solid fa-chevron-down absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-xs pointer-events-none"></i>
//                   </div>
//                 </div>
//               </div>
 
//               {/* ملاحظة التوريد (تحت الصف، على الطرف اليسار) */}
//               <p className="text-left text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 pt-1">
//                 متى تحتاج الأصناف أن تكون متوفرة؟
//               </p>
 
//               {/* المبرر */}
//               <div>
//                 <label className={labelCls}>المبرر</label>
//                 <textarea
//                   rows={5}
//                   value={justification}
//                   onChange={(e) => setJustification(e.target.value)}
//                   className="w-full bg-[#F4F4F4] dark:bg-[#0c1f33] border-[0.5px] border-[#828282] dark:border-slate-700 rounded-2xl p-4 text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-[#00a2e8] focus:ring-1 focus:ring-[#00a2e8] transition-all resize-y"
//                 ></textarea>
//                 <p className="text-left text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-8">
//                   لماذا تحتاج هذه الأصناف؟ وما أثر عدم توفرها؟
//                 </p>
//               </div>
//             </div>
//           </section>
 
//           {/* ==================== القسم 2: الأصناف والخدمات ==================== */}
//           <section className={sectionCls}>
//             <div className="pb-4 mb-6 border-b border-slate-200 dark:border-slate-800">
//               <h2 className="text-base sm:text-[17px] font-bold text-slate-900 dark:text-white">
//                 الأصناف والخدمات
//               </h2>
//               <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1">
//                 أضف كل صنف مع الكمية والمواصفات والتكلفة التقديرية
//               </p>
//             </div>
 
//             {/* تكرار الأصناف */}
//             <div className="space-y-6">
//               {items.map((item, index) => {
//                 const itemTotal = getItemTotal(item)
 
//                 return (
//                   <div key={item.id} className="space-y-4">
//                     {/* عنوان الصنف + زر إضافة صنف آخر (في الصنف الأول) */}
//                     <div className="flex items-center justify-between min-h-[48px]">
//                       <div className="flex items-center gap-3">
//                         <span className="text-sm font-bold text-slate-900 dark:text-slate-200">
//                           الصنف {index + 1}
//                         </span>
//                         {items.length > 1 && (
//                           <button
//                             type="button"
//                             onClick={() => handleRemoveItem(item.id)}
//                             className="text-xs text-rose-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 px-2 py-1 rounded-lg transition-colors"
//                           >
//                             <i className="fa-regular fa-trash-can ml-1"></i>
//                             حذف
//                           </button>
//                         )}
//                       </div>
 
//                       {index === 0 && (
//                         <button
//                           type="button"
//                           onClick={handleAddItem}
//                           className="inline-flex items-center justify-center gap-1.5 h-12 w-[273px] max-w-full rounded-full text-xs sm:text-sm font-bold border border-[#007DEA] text-[#007DEA] hover:bg-[#e4f4fd] dark:hover:bg-[#0f2c45] transition-all cursor-pointer"
//                         >
//                           <span>+ إضافة صنف آخر</span>
//                         </button>
//                       )}
//                     </div>
 
//                     {/* كرت الصنف (خلفية زرقاء فاتحة) */}
//                     <div className="p-4 rounded-2xl bg-[#e8f4fd] dark:bg-[#0c1f33]/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-5">
//                       {/* الصنف أو الخدمة */}
//                       <div>
//                         <label className="block text-xs sm:text-[13px] font-bold text-slate-900 dark:text-slate-200 mb-2">
//                           الصنف أو الخدمة
//                         </label>
//                         <input
//                           type="text"
//                           value={item.name}
//                           onChange={(e) =>
//                             handleItemChange(item.id, 'name', e.target.value)
//                           }
//                           placeholder="مثال: أجهزة حاسوب لمعمل الحاسب الآلي"
//                           className={itemInput}
//                         />
//                       </div>
 
//                       {/* الكمية */}
//                       <div>
//                         <label className="block text-xs sm:text-[13px] font-bold text-slate-900 dark:text-slate-200 mb-2">
//                           الكمية
//                         </label>
//                         <input
//                           type="number"
//                           min="0"
//                           value={item.quantity}
//                           onChange={(e) =>
//                             handleItemChange(
//                               item.id,
//                               'quantity',
//                               Math.max(0, Number(e.target.value))
//                             )
//                           }
//                           className={itemInput}
//                         />
//                       </div>
 
//                       {/* الوحدة */}
//                       <div>
//                         <label className="block text-xs sm:text-[13px] font-bold text-slate-900 dark:text-slate-200 mb-2">
//                           الوحدة
//                         </label>
//                         <div className="relative">
//                           <select
//                             value={item.unit}
//                             onChange={(e) =>
//                               handleItemChange(item.id, 'unit', e.target.value)
//                             }
//                             className={`${itemInput} pl-9 appearance-none cursor-pointer`}
//                           >
//                             <option value="نص">نص</option>
//                             <option value="قطعة">قطعة</option>
//                             <option value="جهاز">جهاز</option>
//                             <option value="طرد">طرد</option>
//                             <option value="خدمة">خدمة</option>
//                             <option value="ساعة">ساعة</option>
//                           </select>
//                           <i className="fa-solid fa-chevron-down absolute left-4 top-1/2 -translate-y-1/2 text-slate-700 text-[11px] pointer-events-none"></i>
//                         </div>
//                       </div>
 
//                       {/* التكلفة التقديرية للوحدة */}
//                       <div>
//                         <label className="block text-xs sm:text-[13px] font-bold text-slate-900 dark:text-slate-200 mb-2">
//                           التكلفة التقديرية للوحدة
//                         </label>
//                         <input
//                           type="number"
//                           min="0"
//                           value={item.unitPrice}
//                           onChange={(e) =>
//                             handleItemChange(
//                               item.id,
//                               'unitPrice',
//                               Math.max(0, Number(e.target.value))
//                             )
//                           }
//                           className={itemInput}
//                         />
//                       </div>
 
//                       {/* المواصفات (عمودان) */}
//                       <div className="sm:col-span-2 lg:col-span-2">
//                         <label className="block text-xs sm:text-[13px] font-bold text-slate-900 dark:text-slate-200 mb-2">
//                           المواصفات
//                         </label>
//                         <input
//                           type="text"
//                           value={item.specifications}
//                           onChange={(e) =>
//                             handleItemChange(
//                               item.id,
//                               'specifications',
//                               e.target.value
//                             )
//                           }
//                           placeholder="كلية الهندسة"
//                           className={itemInput}
//                         />
//                       </div>
 
//                       {/* الإجمالي (عمودان) */}
//                       <div className="sm:col-span-2 lg:col-span-2">
//                         <label className="block text-xs sm:text-[13px] font-bold text-slate-900 dark:text-slate-200 mb-2">
//                           الإجمالي
//                         </label>
//                         <input
//                           type="text"
//                           readOnly
//                           value={itemTotal.toLocaleString('ar-SA')}
//                           className={`${itemInput} font-bold cursor-default`}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//           </section>
 
//           {/* ==================== القسم 3: المرفقات ==================== */}
//           <section className={sectionCls}>
//             <div className="pb-4 mb-6 border-b border-slate-200 dark:border-slate-800">
//               <h2 className="text-base sm:text-[17px] font-bold text-slate-900 dark:text-white">
//                 المرفقات
//               </h2>
//               <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1">
//                 عروض استرشادية، مواصفات فنية، صور.. (اختياري)
//               </p>
//             </div>
 
//             {/* مربع الرفع بحدود متقطعة */}
//             <label className="block border border-dashed border-[#0072E5] bg-[#e8f4fd] dark:bg-[#0b253d]/40 hover:bg-[#dcf0fc] dark:hover:bg-[#0d2e4d]/50 rounded-2xl py-16 sm:py-24 px-8 text-center cursor-pointer transition-colors group">
//               <input
//                 type="file"
//                 multiple
//                 onChange={handleFileUpload}
//                 className="hidden"
//               />
//               <div className="flex flex-col items-center justify-center gap-2">
//                 <div className="w-10 h-10 rounded-full flex items-center justify-center text-slate-600 group-hover:scale-110 transition-transform">
//                   <i className="fa-regular fa-file-lines text-2xl"></i>
//                 </div>
//                 <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">
//                   اضغط لإختيار ملف
//                 </span>
//                 <span className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400">
//                   صور – حتى 10 م.ب للملف، PDF, Word, Excel
//                 </span>
//               </div>
//             </label>
 
//             {/* عرض الملفات المرفوعة */}
//             {uploadedFiles.length > 0 && (
//               <div className="space-y-2 pt-4">
//                 {uploadedFiles.map((file, idx) => (
//                   <div
//                     key={idx}
//                     className="flex items-center justify-between p-3 bg-slate-50 dark:bg-[#0c1f33] rounded-xl border border-slate-200/80 dark:border-slate-700/80 text-xs"
//                   >
//                     <div className="flex items-center gap-2.5 truncate">
//                       <i className="fa-regular fa-file-pdf text-[#00a2e8]"></i>
//                       <span className="truncate font-medium text-slate-800 dark:text-slate-200">
//                         {file.name}
//                       </span>
//                       <span className="text-[10px] text-slate-400">
//                         ({(file.size / (1024 * 1024)).toFixed(2)} م.ب)
//                       </span>
//                     </div>
//                     <button
//                       type="button"
//                       onClick={() => handleRemoveFile(idx)}
//                       className="text-slate-400 hover:text-rose-500 p-1"
//                     >
//                       <i className="fa-solid fa-xmark"></i>
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </section>
//         </main>
 
//         {/* ==================== شريط الإجراءات السفلي ==================== */}
//         <div className="sticky bottom-0 z-10 bg-white dark:bg-[#0b1b2d] dark:border-t dark:border-slate-800/80 px-4 sm:px-6 lg:pl-10 lg:pr-6 py-4">
//           <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
//             {/* التكلفة التقديرية */}
//             <div className="text-right w-full sm:w-auto">
//               <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
//                 إجمالي التكلفة التقديرية: {totalEstimatedCost.toLocaleString('ar-SA')} ر.س
//               </span>
//             </div>
 
//             {/* الأزرار: إرسال للاعتماد (يمين) ثم حفظ كمسودة (يسار) */}
//             <div className="flex items-center gap-6 w-full sm:w-auto justify-end">
//               <button
//                 type="button"
//                 onClick={handleSubmitOrder}
//                 className={`flex-1 sm:flex-none sm:w-[300px] h-12 rounded-full text-xs sm:text-sm font-bold shadow-md hover:shadow text-[#000000] bg-gradient-to-r from-[#007DEA] to-[#01B0F5] hover:brightness-95 transition-all cursor-pointer`}
//               >
//                 إرسال للإعتماد
//               </button>
//               <button
//                 type="button"
//                 onClick={handleSaveDraft}
//                 className="flex-1 sm:flex-none sm:w-[300px] h-12 border border-[#0072E5] text-[#0072E5] hover:bg-[#e4f4fd] dark:hover:bg-[#0f2c45] rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer"
//               >
//                 حفظ كمسودة
//               </button>
//             </div>
//           </div>
//         </div>
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

//       ==================== مودال تأكيد إرسال الطلب للاعتماد ====================
//       {showSubmitModal && (
//         <div
//           className="fixed inset-0 z-[100] flex items-center justify-center"
//           dir="rtl"
//           style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
//         >
//           {/* Overlay */}
//           <div
//             className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"
//             onClick={() => setShowSubmitModal(false)}
//           />

//           {/* بطاقة المودال */}
//           <div className="relative z-10 bg-white dark:bg-[#0b1b2d] rounded-2xl shadow-2xl w-[90%] max-w-[480px] p-7 animate-in fade-in zoom-in-95 duration-200">
//             {/* زر الإغلاق */}
//             <button
//               type="button"
//               onClick={() => setShowSubmitModal(false)}
//               className="absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
//               aria-label="إغلاق"
//             >
//               <i className="fa-solid fa-xmark text-base"></i>
//             </button>

//             {/* العنوان */}
//             <h2 className="text-xl font-extrabold text-[#000000] dark:text-white text-right">
//               إرسال الطلب للاعتماد
//             </h2>
//             <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 text-right leading-relaxed">
//               سيُرسَل الطلب إلى الإدارة العليا للاعتماد ولن تتمكن من تعديله إلا إذا أُرجع إليك
//             </p>

//             {/* بطاقة معلومات الطلب */}
//             <div className="mt-5 bg-[#E8F4FD] dark:bg-[#0c2438] rounded-xl px-5 py-4 flex items-center justify-between gap-4">
//               {/* الطلب */}
//               <div className="text-right">
//                 <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">الطلب</p>
//                 <p className="mt-0.5 text-sm font-bold text-[#000000] dark:text-white">
//                   {orderTitle || 'أجهزة حاسوب'}
//                 </p>
//               </div>
//               {/* الوحدة التنظيمية */}
//               <div className="text-left">
//                 <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">الوحدة التنظيمية الفرعية</p>
//                 <p className="mt-0.5 text-sm font-bold text-[#000000] dark:text-white">
//                   ش {totalEstimatedCost.toLocaleString('ar-SA')}
//                 </p>
//               </div>
//             </div>

//             {/* أزرار التأكيد */}
//             <div className="mt-6 flex items-center gap-4">
//               {/* إلغاء */}
//               <button
//                 type="button"
//                 onClick={() => setShowSubmitModal(false)}
//                 className="flex-1 h-12 rounded-full border border-[#828282] dark:border-slate-600 text-[#000000] dark:text-slate-200 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer"
//               >
//                 إلغاء
//               </button>
//               {/* إرسال */}
//               <button
//                 type="button"
//                 onClick={handleConfirmSubmit}
//                 className="flex-1 h-12 rounded-full font-bold text-sm text-[#000000] bg-gradient-to-r from-[#007DEA] to-[#01B0F5] hover:brightness-95 transition-all cursor-pointer shadow-md"
//               >
//                 إرسال الطلب
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }






// import { useState } from 'react'
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
 
// // أيقونة تقويم مع ساعة صغيرة (لحقل التاريخ)
// const CalendarClockIcon = (props) => (
//   <svg {...strokeProps} strokeWidth={1.8} {...props}>
//     <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
//     <path d="M16 2v4" />
//     <path d="M8 2v4" />
//     <path d="M3 10h5" />
//     <path d="M17.5 17.5 16 16.3V14" />
//     <circle cx="16" cy="16" r="6" />
//   </svg>
// )
 
// const navItems = [
//   { id: 'home', label: 'الرئيسية', Icon: HomeIcon, path: '/dashboard' },
//   { id: 'my-orders', label: 'طلباتي', Icon: FileIcon, path: '/my-orders' },
//   { id: 'new-order', label: 'طلب شراء جديد', Icon: FilePlusIcon, path: '/new-order' },
//   { id: 'suppliers', label: 'الموردين', Icon: TruckIcon, path: '/dashboard' },
// ]
 
// /* ==================== أنماط مشتركة ==================== */
 
// // تدرّج الأزرار الرئيسية (أزرق غامق يسارًا ← سماوي يمينًا)
// const gradientBtn =
//   'bg-gradient-to-r from-[#0072E5] to-[#00B4F5] hover:brightness-95 text-white font-bold transition-all cursor-pointer'
 
// // حقل بيضاوي لقسم "بيانات الطلب"
// const pillInput =
//   'w-full h-10 bg-[#F4F4F4] dark:bg-[#0c1f33] border-[0.5px] border-[#828282] dark:border-slate-700 rounded-full px-4 text-xs sm:text-sm text-slate-700 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-[#00a2e8] focus:ring-1 focus:ring-[#00a2e8] transition-all'
 
// // حقل بيضاوي داخل كرت الصنف
// const itemInput =
//   'w-full h-10 bg-white dark:bg-[#0c1f33] border border-slate-200 dark:border-slate-700 rounded-full px-4 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#00a2e8]'
 
// const labelCls =
//   'block text-xs sm:text-[13px] font-bold text-slate-900 dark:text-slate-200 mb-2'
 
// const sectionCls =
//   'bg-white dark:bg-[#0b1b2d] rounded-[24px] p-6 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 dark:border-slate-800/80'
 
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
//           {navItems.map(({ id, label, Icon, path }) => {
//             const isActive = id === 'new-order'
//             return (
//               <button
//                 key={id}
//                 onClick={() => {
//                   navigate(path)
//                   onNavigate?.()
//                 }}
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
 
//         {/* بطاقة المستخدم */}
//         <div className="flex items-center justify-between py-[clamp(10px,1.85vh,20px)] pr-6 2xl:pr-10 pl-5 2xl:pl-7 mt-[clamp(0px,3vh,32px)] mb-2 cursor-pointer group">
//           <div className="flex items-center gap-4">
//             <img
//               src={userHani}
//               alt="م. هاني وشاح"
//               className="w-10 h-10 rounded-full object-cover"
//             />
//             <div className="text-right">
//               <h4 className="text-[15px] 2xl:text-[17px] font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
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
 
// /* ==================== صفحة طلب شراء جديد ==================== */
 
// export default function NewOrder() {
//   const navigate = useNavigate()
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [notificationOpen, setNotificationOpen] = useState(false)
//   const [searchQuery, setSearchQuery] = useState('')
 
//   // بيانات الطلب
//   const [orderTitle, setOrderTitle] = useState('')
//   const [deliveryDate, setDeliveryDate] = useState('الأربعاء ، 21 أكتوبر')
//   const [category, setCategory] = useState('أجهزة حاسوب وتقنية')
//   const [justification, setJustification] = useState('')
 
//   // قائمة الأصناف والخدمات
//   const [items, setItems] = useState([
//     {
//       id: 1,
//       name: '',
//       quantity: 0,
//       unit: 'نص',
//       unitPrice: 0,
//       specifications: '',
//     },
//   ])
 
//   // المرفقات
//   const [uploadedFiles, setUploadedFiles] = useState([])
//   const [alertInfo, setAlertInfo] = useState(null)
//   const [showSubmitModal, setShowSubmitModal] = useState(false)
 
//   // إضافة صنف جديد
//   const handleAddItem = () => {
//     setItems((prev) => [
//       ...prev,
//       {
//         id: Date.now(),
//         name: '',
//         quantity: 0,
//         unit: 'نص',
//         unitPrice: 0,
//         specifications: '',
//       },
//     ])
//   }
 
//   // حذف صنف
//   const handleRemoveItem = (id) => {
//     if (items.length > 1) {
//       setItems((prev) => prev.filter((item) => item.id !== id))
//     }
//   }
 
//   // تحديث حقل في صنف
//   const handleItemChange = (id, field, value) => {
//     setItems((prev) =>
//       prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
//     )
//   }
 
//   // حساب إجمالي كل صنف
//   const getItemTotal = (item) => {
//     const qty = Number(item.quantity) || 0
//     const price = Number(item.unitPrice) || 0
//     return qty * price
//   }
 
//   // حساب إجمالي كل الأصناف
//   const totalEstimatedCost = items.reduce(
//     (sum, item) => sum + getItemTotal(item),
//     0
//   )
 
//   // التعامل مع رفع الملفات
//   const handleFileUpload = (e) => {
//     const files = Array.from(e.target.files || [])
//     if (files.length > 0) {
//       setUploadedFiles((prev) => [...prev, ...files])
//     }
//   }
 
//   const handleRemoveFile = (index) => {
//     setUploadedFiles((prev) => prev.filter((_, i) => i !== index))
//   }
 
//   // إرسال كمسودة
//   const handleSaveDraft = () => {
//     setAlertInfo({
//       type: 'success',
//       title: 'تم الحفظ بنجاح',
//       message: 'تم حفظ طلب الشراء كمسودة برقم PR-2026-0012.',
//     })
//     setTimeout(() => {
//       setAlertInfo(null)
//       navigate('/dashboard')
//     }, 1800)
//   }
 
//   // إرسال للاعتماد - يفتح المودال أولاً
//   const handleSubmitOrder = () => {
//     setShowSubmitModal(true)
//   }
 
//   // تأكيد الإرسال من داخل المودال
//   const handleConfirmSubmit = () => {
//     setShowSubmitModal(false)
//     setAlertInfo({
//       type: 'success',
//       title: 'تم إرسال الطلب للاعتماد',
//       message: 'تم إرسال طلب الشراء رقم PR-2026-0012 بنجاح للإدارة المختصة.',
//     })
//     setTimeout(() => {
//       setAlertInfo(null)
//       navigate('/dashboard')
//     }, 2000)
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
//                 className="font-bold text-slate-900 dark:text-slate-200 hover:text-slate-700 dark:hover:text-white transition-colors"
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
//             {/* جرس الإشعارات */}
//             <NotificationMenu />
 
//             {/* فاصل عمودي */}
//             <span className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-slate-700"></span>
 
//             {/* قائمة اللغة */}
//             <LanguageMenu />
//           </div>
//         </header>
 
//         {/* إشعار التنبيه */}
//         {alertInfo && (
//           <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-emerald-600 text-white px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
//             <i className="fa-solid fa-circle-check text-xl"></i>
//             <div>
//               <h5 className="font-bold text-sm">{alertInfo.title}</h5>
//               <p className="text-xs text-emerald-100">{alertInfo.message}</p>
//             </div>
//           </div>
//         )}
 
//         {/* ==================== محتوى النموذج الرئيسي ==================== */}
//         <main className="w-full flex-1 px-4 sm:px-6 lg:pl-10 lg:pr-6 pt-10 pb-10 space-y-10 max-w-[1400px]">
//           {/* ترويسة الصفحة: رقم الطلب + العنوان الرئيسي */}
//           <div className="space-y-2">
//             <div className="flex items-center justify-between">
//               <span className="bg-[#e5e7eb] dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-xs font-semibold tracking-wider">
//                 PR-2026-0012
//               </span>
//             </div>
 
//             <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
//               طلب شراء جديد
//             </h1>
//             <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-400 font-medium">
//               املأ البيانات بلغة بسيطة، الحقول المعلّمة بـ * مطلوبة عند الإرسال.
//             </p>
//           </div>
 
//           {/* ==================== القسم 1: بيانات الطلب ==================== */}
//           <section className={sectionCls}>
//             <h2 className="text-base sm:text-[17px] font-bold text-slate-900 dark:text-white pb-4 mb-6 border-b border-[#d6eefb] dark:border-slate-800">
//               بيانات الطلب
//             </h2>
 
//             <div className="space-y-5">
//               {/* الصف الأول: عنوان الطلب + التاريخ المطلوب للتوريد */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
//                 {/* عنوان الطلب */}
//                 <div>
//                   <label className={labelCls}>عنوان الطلب *</label>
//                   <input
//                     type="text"
//                     value={orderTitle}
//                     onChange={(e) => setOrderTitle(e.target.value)}
//                     placeholder="مثال: أجهزة حاسوب لمعمل الحاسب الآلي"
//                     className={pillInput}
//                   />
//                 </div>
 
//                 {/* التاريخ المطلوب للتوريد */}
//                 <div>
//                   <label className={labelCls}>التاريخ المطلوب للتوريد *</label>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       value={deliveryDate}
//                       onChange={(e) => setDeliveryDate(e.target.value)}
//                       placeholder="الأربعاء ، 21 أكتوبر"
//                       className={`${pillInput} pl-12`}
//                     />
//                     <img
//                       src={calendarClock}
//                       alt="تقويم"
//                       className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 object-contain pointer-events-none opacity-80 dark:invert dark:opacity-90"
//                     />
//                   </div>
//                 </div>
//               </div>
 
//               {/* الصف الثاني: الإدارة الطالبة + التصنيف */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
//                 {/* الإدارة الطالبة */}
//                 <div>
//                   <label className={labelCls}>الإدارة الطالبة</label>
//                   <input
//                     type="text"
//                     disabled
//                     value="كلية الهندسة"
//                     className="w-full h-10 bg-[#F4F4F4] dark:bg-slate-800/60 border-[0.5px] border-[#828282] dark:border-slate-700 rounded-full px-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 cursor-not-allowed"
//                   />
//                 </div>
 
//                 {/* التصنيف */}
//                 <div>
//                   <label className={labelCls}>التصنيف *</label>
//                   <div className="relative">
//                     <select
//                       value={category}
//                       onChange={(e) => setCategory(e.target.value)}
//                       className={`${pillInput} pl-10 appearance-none cursor-pointer`}
//                     >
//                       <option value="أجهزة حاسوب وتقنية">أجهزة حاسوب وتقنية</option>
//                       <option value="أثاث ومفروشات مكتبية">أثاث ومفروشات مكتبية</option>
//                       <option value="معدات وشبكات اتصالات">معدات وشبكات اتصالات</option>
//                       <option value="قرطاسية ومستلزمات مكتبية">قرطاسية ومستلزمات مكتبية</option>
//                       <option value="خدمات وصيانة برمجية">خدمات وصيانة برمجية</option>
//                     </select>
//                     <i className="fa-solid fa-chevron-down absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-xs pointer-events-none"></i>
//                   </div>
//                 </div>
//               </div>
 
//               {/* ملاحظة التوريد (تحت الصف، على الطرف اليسار) */}
//               <p className="text-left text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 pt-1">
//                 متى تحتاج الأصناف أن تكون متوفرة؟
//               </p>
 
//               {/* المبرر */}
//               <div>
//                 <label className={labelCls}>المبرر</label>
//                 <textarea
//                   rows={5}
//                   value={justification}
//                   onChange={(e) => setJustification(e.target.value)}
//                   className="w-full bg-[#F4F4F4] dark:bg-[#0c1f33] border-[0.5px] border-[#828282] dark:border-slate-700 rounded-2xl p-4 text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-[#00a2e8] focus:ring-1 focus:ring-[#00a2e8] transition-all resize-y"
//                 ></textarea>
//                 <p className="text-left text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-8">
//                   لماذا تحتاج هذه الأصناف؟ وما أثر عدم توفرها؟
//                 </p>
//               </div>
//             </div>
//           </section>
 
//           {/* ==================== القسم 2: الأصناف والخدمات ==================== */}
//           <section className={sectionCls}>
//             <div className="pb-4 mb-6 border-b border-slate-200 dark:border-slate-800">
//               <h2 className="text-base sm:text-[17px] font-bold text-slate-900 dark:text-white">
//                 الأصناف والخدمات
//               </h2>
//               <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1">
//                 أضف كل صنف مع الكمية والمواصفات والتكلفة التقديرية
//               </p>
//             </div>
 
//             {/* تكرار الأصناف */}
//             <div className="space-y-6">
//               {items.map((item, index) => {
//                 const itemTotal = getItemTotal(item)
 
//                 return (
//                   <div key={item.id} className="space-y-4">
//                     {/* عنوان الصنف + زر إضافة صنف آخر (في الصنف الأول) */}
//                     <div className="flex items-center justify-between min-h-[48px]">
//                       <div className="flex items-center gap-3">
//                         <span className="text-sm font-bold text-slate-900 dark:text-slate-200">
//                           الصنف {index + 1}
//                         </span>
//                         {items.length > 1 && (
//                           <button
//                             type="button"
//                             onClick={() => handleRemoveItem(item.id)}
//                             className="text-xs text-rose-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 px-2 py-1 rounded-lg transition-colors"
//                           >
//                             <i className="fa-regular fa-trash-can ml-1"></i>
//                             حذف
//                           </button>
//                         )}
//                       </div>
 
//                       {index === 0 && (
//                         <button
//                           type="button"
//                           onClick={handleAddItem}
//                           className="inline-flex items-center justify-center gap-1.5 h-12 w-[273px] max-w-full rounded-full text-xs sm:text-sm font-bold text-[#000000] bg-gradient-to-r from-[#007DEA] to-[#01B0F5] hover:brightness-95 shadow-md transition-all cursor-pointer"
//                         >
//                           <span>+ إضافة صنف آخر</span>
//                         </button>
//                       )}
//                     </div>
 
//                     {/* كرت الصنف (خلفية زرقاء فاتحة) */}
//                     <div className="p-4 rounded-2xl bg-[#e8f4fd] dark:bg-[#0c1f33]/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-5">
//                       {/* الصنف أو الخدمة */}
//                       <div>
//                         <label className="block text-xs sm:text-[13px] font-bold text-slate-900 dark:text-slate-200 mb-2">
//                           الصنف أو الخدمة
//                         </label>
//                         <input
//                           type="text"
//                           value={item.name}
//                           onChange={(e) =>
//                             handleItemChange(item.id, 'name', e.target.value)
//                           }
//                           placeholder="مثال: أجهزة حاسوب لمعمل الحاسب الآلي"
//                           className={itemInput}
//                         />
//                       </div>
 
//                       {/* الكمية */}
//                       <div>
//                         <label className="block text-xs sm:text-[13px] font-bold text-slate-900 dark:text-slate-200 mb-2">
//                           الكمية
//                         </label>
//                         <input
//                           type="number"
//                           min="0"
//                           value={item.quantity}
//                           onChange={(e) =>
//                             handleItemChange(
//                               item.id,
//                               'quantity',
//                               Math.max(0, Number(e.target.value))
//                             )
//                           }
//                           className={itemInput}
//                         />
//                       </div>
 
//                       {/* الوحدة */}
//                       <div>
//                         <label className="block text-xs sm:text-[13px] font-bold text-slate-900 dark:text-slate-200 mb-2">
//                           الوحدة
//                         </label>
//                         <div className="relative">
//                           <select
//                             value={item.unit}
//                             onChange={(e) =>
//                               handleItemChange(item.id, 'unit', e.target.value)
//                             }
//                             className={`${itemInput} pl-9 appearance-none cursor-pointer`}
//                           >
//                             <option value="نص">نص</option>
//                             <option value="قطعة">قطعة</option>
//                             <option value="جهاز">جهاز</option>
//                             <option value="طرد">طرد</option>
//                             <option value="خدمة">خدمة</option>
//                             <option value="ساعة">ساعة</option>
//                           </select>
//                           <i className="fa-solid fa-chevron-down absolute left-4 top-1/2 -translate-y-1/2 text-slate-700 text-[11px] pointer-events-none"></i>
//                         </div>
//                       </div>
 
//                       {/* التكلفة التقديرية للوحدة */}
//                       <div>
//                         <label className="block text-xs sm:text-[13px] font-bold text-slate-900 dark:text-slate-200 mb-2">
//                           التكلفة التقديرية للوحدة
//                         </label>
//                         <input
//                           type="number"
//                           min="0"
//                           value={item.unitPrice}
//                           onChange={(e) =>
//                             handleItemChange(
//                               item.id,
//                               'unitPrice',
//                               Math.max(0, Number(e.target.value))
//                             )
//                           }
//                           className={itemInput}
//                         />
//                       </div>
 
//                       {/* المواصفات (عمودان) */}
//                       <div className="sm:col-span-2 lg:col-span-2">
//                         <label className="block text-xs sm:text-[13px] font-bold text-slate-900 dark:text-slate-200 mb-2">
//                           المواصفات
//                         </label>
//                         <input
//                           type="text"
//                           value={item.specifications}
//                           onChange={(e) =>
//                             handleItemChange(
//                               item.id,
//                               'specifications',
//                               e.target.value
//                             )
//                           }
//                           placeholder="كلية الهندسة"
//                           className={itemInput}
//                         />
//                       </div>
 
//                       {/* الإجمالي (عمودان) */}
//                       <div className="sm:col-span-2 lg:col-span-2">
//                         <label className="block text-xs sm:text-[13px] font-bold text-slate-900 dark:text-slate-200 mb-2">
//                           الإجمالي
//                         </label>
//                         <input
//                           type="text"
//                           readOnly
//                           value={itemTotal.toLocaleString('ar-SA')}
//                           className={`${itemInput} font-bold cursor-default`}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//           </section>
 
//           {/* ==================== القسم 3: المرفقات ==================== */}
//           <section className={sectionCls}>
//             <div className="pb-4 mb-6 border-b border-slate-200 dark:border-slate-800">
//               <h2 className="text-base sm:text-[17px] font-bold text-slate-900 dark:text-white">
//                 المرفقات
//               </h2>
//               <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1">
//                 عروض استرشادية، مواصفات فنية، صور.. (اختياري)
//               </p>
//             </div>
 
//             {/* مربع الرفع بحدود متقطعة */}
//             <label className="block border border-dashed border-[#0072E5] bg-[#e8f4fd] dark:bg-[#0b253d]/40 hover:bg-[#dcf0fc] dark:hover:bg-[#0d2e4d]/50 rounded-2xl py-16 sm:py-24 px-8 text-center cursor-pointer transition-colors group">
//               <input
//                 type="file"
//                 multiple
//                 onChange={handleFileUpload}
//                 className="hidden"
//               />
//               <div className="flex flex-col items-center justify-center gap-2">
//                 <div className="w-10 h-10 rounded-full flex items-center justify-center text-slate-600 group-hover:scale-110 transition-transform">
//                   <i className="fa-regular fa-file-lines text-2xl"></i>
//                 </div>
//                 <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">
//                   اضغط لإختيار ملف
//                 </span>
//                 <span className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400">
//                   صور – حتى 10 م.ب للملف، PDF, Word, Excel
//                 </span>
//               </div>
//             </label>
 
//             {/* عرض الملفات المرفوعة */}
//             {uploadedFiles.length > 0 && (
//               <div className="space-y-2 pt-4">
//                 {uploadedFiles.map((file, idx) => (
//                   <div
//                     key={idx}
//                     className="flex items-center justify-between p-3 bg-slate-50 dark:bg-[#0c1f33] rounded-xl border border-slate-200/80 dark:border-slate-700/80 text-xs"
//                   >
//                     <div className="flex items-center gap-2.5 truncate">
//                       <i className="fa-regular fa-file-pdf text-[#00a2e8]"></i>
//                       <span className="truncate font-medium text-slate-800 dark:text-slate-200">
//                         {file.name}
//                       </span>
//                       <span className="text-[10px] text-slate-400">
//                         ({(file.size / (1024 * 1024)).toFixed(2)} م.ب)
//                       </span>
//                     </div>
//                     <button
//                       type="button"
//                       onClick={() => handleRemoveFile(idx)}
//                       className="text-slate-400 hover:text-rose-500 p-1"
//                     >
//                       <i className="fa-solid fa-xmark"></i>
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </section>
//         </main>
 
//         {/* ==================== شريط الإجراءات السفلي ==================== */}
//         <div className="sticky bottom-0 z-10 bg-white dark:bg-[#0b1b2d] dark:border-t dark:border-slate-800/80 px-4 sm:px-6 lg:pl-10 lg:pr-6 py-4">
//           <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
//             {/* التكلفة التقديرية */}
//             <div className="text-right w-full sm:w-auto">
//               <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
//                 إجمالي التكلفة التقديرية: {totalEstimatedCost.toLocaleString('ar-SA')} ر.س
//               </span>
//             </div>
 
//             {/* الأزرار: إرسال للاعتماد (يمين) ثم حفظ كمسودة (يسار) */}
//             <div className="flex items-center gap-6 w-full sm:w-auto justify-end">
//               <button
//                 type="button"
//                 onClick={handleSubmitOrder}
//                 className={`flex-1 sm:flex-none sm:w-[300px] h-12 rounded-full text-xs sm:text-sm font-bold shadow-md hover:shadow text-[#000000] bg-gradient-to-r from-[#007DEA] to-[#01B0F5] hover:brightness-95 transition-all cursor-pointer`}
//               >
//                 إرسال للإعتماد
//               </button>
//               <button
//                 type="button"
//                 onClick={handleSaveDraft}
//                 className="flex-1 sm:flex-none sm:w-[300px] h-12 border border-[#0072E5] text-[#0072E5] hover:bg-[#e4f4fd] dark:hover:bg-[#0f2c45] rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer"
//               >
//                 حفظ كمسودة
//               </button>
//             </div>
//           </div>
//         </div>
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
 
//       {/* ==================== مودال تأكيد إرسال الطلب للاعتماد ==================== */}
//       {showSubmitModal && (
//         <div
//           className="fixed inset-0 z-[100] flex items-center justify-center"
//           dir="rtl"
//           style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
//         >
//           {/* Overlay: تغبيش قوي للخلفية */}
//           <div
//             className="absolute inset-0 bg-black/10 backdrop-blur-md"
//             onClick={() => setShowSubmitModal(false)}
//           />
 
//           {/* بطاقة المودال */}
//           <div className="relative z-10 bg-white dark:bg-[#0b1b2d] rounded-[32px] shadow-2xl w-[90%] max-w-[868px] px-8 pt-12 pb-12 animate-in fade-in zoom-in-95 duration-200">
//             {/* العنوان + زر الإغلاق */}
//             <div className="flex items-center justify-between">
//               <h2 className="text-2xl font-extrabold text-[#000000] dark:text-white text-right">
//                 إرسال الطلب للاعتماد
//               </h2>
//               <button
//                 type="button"
//                 onClick={() => setShowSubmitModal(false)}
//                 className="w-8 h-8 rounded-full flex items-center justify-center text-[#000000] dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
//                 aria-label="إغلاق"
//               >
//                 <i className="fa-solid fa-xmark text-lg"></i>
//               </button>
//             </div>
 
//             <p className="mt-3 text-sm text-slate-800 dark:text-slate-300 text-right leading-relaxed">
//               سيُرسَل الطلب إلى الإدارة العليا للاعتماد، ولن تتمكن من تعديله إلا إذا أُرجع إليك.
//             </p>
 
//             {/* بطاقة معلومات الطلب (رمادية، عمودان) */}
//             <div className="mt-6 bg-[#F4F4F4] dark:bg-[#0c2438] rounded-2xl px-4 py-3.5 grid grid-cols-2 text-right">
//               <div>
//                 <p className="text-sm text-slate-500 dark:text-slate-400">الطلب</p>
//                 <p className="mt-1 text-sm font-bold text-[#000000] dark:text-white">
//                   {orderTitle || 'أجهزة حاسوب'}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-slate-500 dark:text-slate-400">
//                   الوحدة التنظيمية الفرعية
//                 </p>
//                 <p className="mt-1 text-sm font-bold text-[#000000] dark:text-white">
//                   {totalEstimatedCost.toLocaleString('en-US')} ش
//                 </p>
//               </div>
//             </div>
 
//             {/* الأزرار: إرسال (يمين) ثم إلغاء (يسار) */}
//             <div className="mt-8 flex items-center gap-4">
//               <button
//                 type="button"
//                 onClick={handleConfirmSubmit}
//                 className="flex-1 h-[54px] rounded-full font-bold text-lg text-[#000000] bg-gradient-to-r from-[#007DEA] to-[#01B0F5] hover:brightness-95 transition-all cursor-pointer"
//               >
//                 ارسال الطلب
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setShowSubmitModal(false)}
//                 className="flex-1 h-[54px] rounded-full border border-[#007DEA] text-[#007DEA] font-bold text-lg hover:bg-[#e4f4fd] dark:hover:bg-[#0f2c45] transition-all cursor-pointer"
//               >
//                 إلغاء
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }








// import { useState } from 'react'
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
 
// // أيقونة تقويم مع ساعة صغيرة (لحقل التاريخ)
// const CalendarClockIcon = (props) => (
//   <svg {...strokeProps} strokeWidth={1.8} {...props}>
//     <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
//     <path d="M16 2v4" />
//     <path d="M8 2v4" />
//     <path d="M3 10h5" />
//     <path d="M17.5 17.5 16 16.3V14" />
//     <circle cx="16" cy="16" r="6" />
//   </svg>
// )
 
// const navItems = [
//   { id: 'home', label: 'الرئيسية', Icon: HomeIcon, path: '/dashboard' },
//   { id: 'my-orders', label: 'طلباتي', Icon: FileIcon, path: '/my-orders' },
//   { id: 'new-order', label: 'طلب شراء جديد', Icon: FilePlusIcon, path: '/new-order' },
//   { id: 'suppliers', label: 'الموردين', Icon: TruckIcon, path: '/dashboard' },
// ]
 
// /* ==================== أنماط مشتركة ==================== */
 
// // تدرّج الأزرار الرئيسية (أزرق غامق يسارًا ← سماوي يمينًا)
// const gradientBtn =
//   'bg-gradient-to-r from-[#0072E5] to-[#00B4F5] hover:brightness-95 text-white font-bold transition-all cursor-pointer'
 
// // حقل بيضاوي لقسم "بيانات الطلب"
// const pillInput =
//   'w-full h-10 bg-[#F4F4F4] dark:bg-[#0c1f33] border-[0.5px] border-[#828282] dark:border-slate-700 rounded-full px-4 text-xs sm:text-sm text-slate-700 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-[#00a2e8] focus:ring-1 focus:ring-[#00a2e8] transition-all'
 
// // حقل بيضاوي داخل كرت الصنف
// const itemInput =
//   'w-full h-10 bg-white dark:bg-[#0c1f33] border border-slate-200 dark:border-slate-700 rounded-full px-4 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#00a2e8]'
 
// const labelCls =
//   'block text-xs sm:text-[13px] font-bold text-slate-900 dark:text-slate-200 mb-2'
 
// const sectionCls =
//   'bg-white dark:bg-[#0b1b2d] rounded-[24px] p-6 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100 dark:border-slate-800/80'
 
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
//           {navItems.map(({ id, label, Icon, path }) => {
//             const isActive = id === 'new-order'
//             return (
//               <button
//                 key={id}
//                 onClick={() => {
//                   navigate(path)
//                   onNavigate?.()
//                 }}
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
//               <h4 className="text-[15px] 2xl:text-[17px] font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
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
 
// /* ==================== صفحة طلب شراء جديد ==================== */
 
// export default function NewOrder() {
//   const navigate = useNavigate()
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [notificationOpen, setNotificationOpen] = useState(false)
//   const [searchQuery, setSearchQuery] = useState('')
 
//   // بيانات الطلب
//   const [orderTitle, setOrderTitle] = useState('')
//   const [deliveryDate, setDeliveryDate] = useState('الأربعاء ، 21 أكتوبر')
//   const [category, setCategory] = useState('أجهزة حاسوب وتقنية')
//   const [justification, setJustification] = useState('')
 
//   // قائمة الأصناف والخدمات
//   const [items, setItems] = useState([
//     {
//       id: 1,
//       name: '',
//       quantity: 0,
//       unit: 'نص',
//       unitPrice: 0,
//       specifications: '',
//     },
//   ])
 
//   // المرفقات
//   const [uploadedFiles, setUploadedFiles] = useState([])
//   const [alertInfo, setAlertInfo] = useState(null)
//   const [showSubmitModal, setShowSubmitModal] = useState(false)
 
//   // إضافة صنف جديد
//   const handleAddItem = () => {
//     setItems((prev) => [
//       ...prev,
//       {
//         id: Date.now(),
//         name: '',
//         quantity: 0,
//         unit: 'نص',
//         unitPrice: 0,
//         specifications: '',
//       },
//     ])
//   }
 
//   // حذف صنف
//   const handleRemoveItem = (id) => {
//     if (items.length > 1) {
//       setItems((prev) => prev.filter((item) => item.id !== id))
//     }
//   }
 
//   // تحديث حقل في صنف
//   const handleItemChange = (id, field, value) => {
//     setItems((prev) =>
//       prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
//     )
//   }
 
//   // حساب إجمالي كل صنف
//   const getItemTotal = (item) => {
//     const qty = Number(item.quantity) || 0
//     const price = Number(item.unitPrice) || 0
//     return qty * price
//   }
 
//   // حساب إجمالي كل الأصناف
//   const totalEstimatedCost = items.reduce(
//     (sum, item) => sum + getItemTotal(item),
//     0
//   )
 
//   // التعامل مع رفع الملفات
//   const handleFileUpload = (e) => {
//     const files = Array.from(e.target.files || [])
//     if (files.length > 0) {
//       setUploadedFiles((prev) => [...prev, ...files])
//     }
//   }
 
//   const handleRemoveFile = (index) => {
//     setUploadedFiles((prev) => prev.filter((_, i) => i !== index))
//   }
 
//   // إرسال كمسودة
//   const handleSaveDraft = () => {
//     setAlertInfo({
//       type: 'success',
//       title: 'تم الحفظ بنجاح',
//       message: 'تم حفظ طلب الشراء كمسودة برقم PR-2026-0012.',
//     })
//     setTimeout(() => {
//       setAlertInfo(null)
//       navigate('/dashboard')
//     }, 1800)
//   }
 
//   // إرسال للاعتماد - يفتح المودال أولاً
//   const handleSubmitOrder = () => {
//     setShowSubmitModal(true)
//   }
 
//   // تأكيد الإرسال من داخل المودال
//   const handleConfirmSubmit = () => {
//     setShowSubmitModal(false)
//     setAlertInfo({
//       type: 'success',
//       title: 'أرسل الطلب للاعتماد',
//       message: 'رقم الطلب PR-2026-0012 ستصلك الإشعارات عند أي تحديث',
//     })
//     setTimeout(() => {
//       setAlertInfo(null)
//       navigate('/dashboard')
//     }, 2000)
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
//                 className="font-bold text-slate-900 dark:text-slate-200 hover:text-slate-700 dark:hover:text-white transition-colors"
//               >
//               طلب شراء جديد
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
//             {/* جرس الإشعارات */}
//             <NotificationMenu />
 
//             {/* فاصل عمودي */}
//             <span className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-slate-700"></span>
 
//             {/* قائمة اللغة */}
//             <LanguageMenu />
//           </div>
//         </header>
 
//         {/* إشعار التنبيه */}
//         {alertInfo && (
//           <div
//             role="status"
//             className="fixed top-20 left-1/2 -translate-x-1/2 z-[110] w-[calc(100%-32px)] max-w-[360px] bg-white dark:bg-[#0b1b2d] border border-slate-100 dark:border-slate-700 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] px-4 py-3 flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300"
//           >
//             {/* أيقونة: دائرة سوداء فيها صح أبيض */}
//             <span className="w-6 h-6 rounded-full bg-[#000000] dark:bg-white flex items-center justify-center shrink-0">
//               <svg
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="3.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 aria-hidden="true"
//                 className="w-3.5 h-3.5 text-white dark:text-[#000000]"
//               >
//                 <polyline points="20 6 9 17 4 12" />
//               </svg>
//             </span>
//             <div className="text-right min-w-0">
//               <h5 className="font-bold text-sm text-[#000000] dark:text-white">{alertInfo.title}</h5>
//               <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{alertInfo.message}</p>
//             </div>
//           </div>
//         )}
 
//         {/* ==================== محتوى النموذج الرئيسي ==================== */}
//         <main className="w-full flex-1 px-4 sm:px-6 lg:pl-10 lg:pr-6 pt-10 pb-10 space-y-10 max-w-[1400px]">
//           {/* ترويسة الصفحة: رقم الطلب + العنوان الرئيسي */}
//           <div className="space-y-2">
//             <div className="flex items-center justify-between">
//               <span className="bg-[#e5e7eb] dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-xs font-semibold tracking-wider">
//                 PR-2026-0012
//               </span>
//             </div>
 
//             <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
//               طلب شراء جديد
//             </h1>
//             <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-400 font-medium">
//               املأ البيانات بلغة بسيطة، الحقول المعلّمة بـ * مطلوبة عند الإرسال.
//             </p>
//           </div>
 
//           {/* ==================== القسم 1: بيانات الطلب ==================== */}
//           <section className={sectionCls}>
//             <h2 className="text-base sm:text-[17px] font-bold text-slate-900 dark:text-white pb-4 mb-6 border-b border-[#d6eefb] dark:border-slate-800">
//               بيانات الطلب
//             </h2>
 
//             <div className="space-y-5">
//               {/* الصف الأول: عنوان الطلب + التاريخ المطلوب للتوريد */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
//                 {/* عنوان الطلب */}
//                 <div>
//                   <label className={labelCls}>عنوان الطلب *</label>
//                   <input
//                     type="text"
//                     value={orderTitle}
//                     onChange={(e) => setOrderTitle(e.target.value)}
//                     placeholder="مثال: أجهزة حاسوب لمعمل الحاسب الآلي"
//                     className={pillInput}
//                   />
//                 </div>
 
//                 {/* التاريخ المطلوب للتوريد */}
//                 <div>
//                   <label className={labelCls}>التاريخ المطلوب للتوريد *</label>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       value={deliveryDate}
//                       onChange={(e) => setDeliveryDate(e.target.value)}
//                       placeholder="الأربعاء ، 21 أكتوبر"
//                       className={`${pillInput} pl-12`}
//                     />
//                     <img
//                       src={calendarClock}
//                       alt="تقويم"
//                       className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 object-contain pointer-events-none opacity-80 dark:invert dark:opacity-90"
//                     />
//                   </div>
//                 </div>
//               </div>
 
//               {/* الصف الثاني: الإدارة الطالبة + التصنيف */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
//                 {/* الإدارة الطالبة */}
//                 <div>
//                   <label className={labelCls}>الإدارة الطالبة</label>
//                   <input
//                     type="text"
//                     disabled
//                     value="كلية الهندسة"
//                     className="w-full h-10 bg-[#F4F4F4] dark:bg-slate-800/60 border-[0.5px] border-[#828282] dark:border-slate-700 rounded-full px-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 cursor-not-allowed"
//                   />
//                 </div>
 
//                 {/* التصنيف */}
//                 <div>
//                   <label className={labelCls}>التصنيف *</label>
//                   <div className="relative">
//                     <select
//                       value={category}
//                       onChange={(e) => setCategory(e.target.value)}
//                       className={`${pillInput} pl-10 appearance-none cursor-pointer`}
//                     >
//                       <option value="أجهزة حاسوب وتقنية">أجهزة حاسوب وتقنية</option>
//                       <option value="أثاث ومفروشات مكتبية">أثاث ومفروشات مكتبية</option>
//                       <option value="معدات وشبكات اتصالات">معدات وشبكات اتصالات</option>
//                       <option value="قرطاسية ومستلزمات مكتبية">قرطاسية ومستلزمات مكتبية</option>
//                       <option value="خدمات وصيانة برمجية">خدمات وصيانة برمجية</option>
//                     </select>
//                     <i className="fa-solid fa-chevron-down absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-xs pointer-events-none"></i>
//                   </div>
//                 </div>
//               </div>
 
//               {/* ملاحظة التوريد (تحت الصف، على الطرف اليسار) */}
//               <p className="text-left text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 pt-1">
//                 متى تحتاج الأصناف أن تكون متوفرة؟
//               </p>
 
//               {/* المبرر */}
//               <div>
//                 <label className={labelCls}>المبرر</label>
//                 <textarea
//                   rows={5}
//                   value={justification}
//                   onChange={(e) => setJustification(e.target.value)}
//                   className="w-full bg-[#F4F4F4] dark:bg-[#0c1f33] border-[0.5px] border-[#828282] dark:border-slate-700 rounded-2xl p-4 text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-[#00a2e8] focus:ring-1 focus:ring-[#00a2e8] transition-all resize-y"
//                 ></textarea>
//                 <p className="text-left text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-8">
//                   لماذا تحتاج هذه الأصناف؟ وما أثر عدم توفرها؟
//                 </p>
//               </div>
//             </div>
//           </section>
 
//           {/* ==================== القسم 2: الأصناف والخدمات ==================== */}
//           <section className={sectionCls}>
//             <div className="pb-4 mb-6 border-b border-slate-200 dark:border-slate-800">
//               <h2 className="text-base sm:text-[17px] font-bold text-slate-900 dark:text-white">
//                 الأصناف والخدمات
//               </h2>
//               <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1">
//                 أضف كل صنف مع الكمية والمواصفات والتكلفة التقديرية
//               </p>
//             </div>
 
//             {/* تكرار الأصناف */}
//             <div className="space-y-6">
//               {items.map((item, index) => {
//                 const itemTotal = getItemTotal(item)
 
//                 return (
//                   <div key={item.id} className="space-y-4">
//                     {/* عنوان الصنف + زر إضافة صنف آخر (في الصنف الأول) */}
//                     <div className="flex items-center justify-between min-h-[48px]">
//                       <div className="flex items-center gap-3">
//                         <span className="text-sm font-bold text-slate-900 dark:text-slate-200">
//                           الصنف {index + 1}
//                         </span>
//                         {items.length > 1 && (
//                           <button
//                             type="button"
//                             onClick={() => handleRemoveItem(item.id)}
//                             className="text-xs text-rose-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 px-2 py-1 rounded-lg transition-colors"
//                           >
//                             <i className="fa-regular fa-trash-can ml-1"></i>
//                             حذف
//                           </button>
//                         )}
//                       </div>
 
//                       {index === 0 && (
//                         <button
//                           type="button"
//                           onClick={handleAddItem}
//                           className="inline-flex items-center justify-center gap-1.5 h-12 w-[273px] max-w-full rounded-full text-xs sm:text-sm font-bold text-[#000000] bg-gradient-to-r from-[#007DEA] to-[#01B0F5] hover:brightness-95 shadow-md transition-all cursor-pointer"
//                         >
//                           <span>+ إضافة صنف آخر</span>
//                         </button>
//                       )}
//                     </div>
 
//                     {/* كرت الصنف (خلفية زرقاء فاتحة) */}
//                     <div className="p-4 rounded-2xl bg-[#e8f4fd] dark:bg-[#0c1f33]/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-5">
//                       {/* الصنف أو الخدمة */}
//                       <div>
//                         <label className="block text-xs sm:text-[13px] font-bold text-slate-900 dark:text-slate-200 mb-2">
//                           الصنف أو الخدمة
//                         </label>
//                         <input
//                           type="text"
//                           value={item.name}
//                           onChange={(e) =>
//                             handleItemChange(item.id, 'name', e.target.value)
//                           }
//                           placeholder="مثال: أجهزة حاسوب لمعمل الحاسب الآلي"
//                           className={itemInput}
//                         />
//                       </div>
 
//                       {/* الكمية */}
//                       <div>
//                         <label className="block text-xs sm:text-[13px] font-bold text-slate-900 dark:text-slate-200 mb-2">
//                           الكمية
//                         </label>
//                         <input
//                           type="number"
//                           min="0"
//                           value={item.quantity}
//                           onChange={(e) =>
//                             handleItemChange(
//                               item.id,
//                               'quantity',
//                               Math.max(0, Number(e.target.value))
//                             )
//                           }
//                           className={itemInput}
//                         />
//                       </div>
 
//                       {/* الوحدة */}
//                       <div>
//                         <label className="block text-xs sm:text-[13px] font-bold text-slate-900 dark:text-slate-200 mb-2">
//                           الوحدة
//                         </label>
//                         <div className="relative">
//                           <select
//                             value={item.unit}
//                             onChange={(e) =>
//                               handleItemChange(item.id, 'unit', e.target.value)
//                             }
//                             className={`${itemInput} pl-9 appearance-none cursor-pointer`}
//                           >
//                             <option value="نص">نص</option>
//                             <option value="قطعة">قطعة</option>
//                             <option value="جهاز">جهاز</option>
//                             <option value="طرد">طرد</option>
//                             <option value="خدمة">خدمة</option>
//                             <option value="ساعة">ساعة</option>
//                           </select>
//                           <i className="fa-solid fa-chevron-down absolute left-4 top-1/2 -translate-y-1/2 text-slate-700 text-[11px] pointer-events-none"></i>
//                         </div>
//                       </div>
 
//                       {/* التكلفة التقديرية للوحدة */}
//                       <div>
//                         <label className="block text-xs sm:text-[13px] font-bold text-slate-900 dark:text-slate-200 mb-2">
//                           التكلفة التقديرية للوحدة
//                         </label>
//                         <input
//                           type="number"
//                           min="0"
//                           value={item.unitPrice}
//                           onChange={(e) =>
//                             handleItemChange(
//                               item.id,
//                               'unitPrice',
//                               Math.max(0, Number(e.target.value))
//                             )
//                           }
//                           className={itemInput}
//                         />
//                       </div>
 
//                       {/* المواصفات (عمودان) */}
//                       <div className="sm:col-span-2 lg:col-span-2">
//                         <label className="block text-xs sm:text-[13px] font-bold text-slate-900 dark:text-slate-200 mb-2">
//                           المواصفات
//                         </label>
//                         <input
//                           type="text"
//                           value={item.specifications}
//                           onChange={(e) =>
//                             handleItemChange(
//                               item.id,
//                               'specifications',
//                               e.target.value
//                             )
//                           }
//                           placeholder="كلية الهندسة"
//                           className={itemInput}
//                         />
//                       </div>
 
//                       {/* الإجمالي (عمودان) */}
//                       <div className="sm:col-span-2 lg:col-span-2">
//                         <label className="block text-xs sm:text-[13px] font-bold text-slate-900 dark:text-slate-200 mb-2">
//                           الإجمالي
//                         </label>
//                         <input
//                           type="text"
//                           readOnly
//                           value={itemTotal.toLocaleString('ar-SA')}
//                           className={`${itemInput} font-bold cursor-default`}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//           </section>
 
//           {/* ==================== القسم 3: المرفقات ==================== */}
//           <section className={sectionCls}>
//             <div className="pb-4 mb-6 border-b border-slate-200 dark:border-slate-800">
//               <h2 className="text-base sm:text-[17px] font-bold text-slate-900 dark:text-white">
//                 المرفقات
//               </h2>
//               <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1">
//                 عروض استرشادية، مواصفات فنية، صور.. (اختياري)
//               </p>
//             </div>
 
//             {/* مربع الرفع بحدود متقطعة */}
//             <label className="block border border-dashed border-[#0072E5] bg-[#e8f4fd] dark:bg-[#0b253d]/40 hover:bg-[#dcf0fc] dark:hover:bg-[#0d2e4d]/50 rounded-2xl py-16 sm:py-24 px-8 text-center cursor-pointer transition-colors group">
//               <input
//                 type="file"
//                 multiple
//                 onChange={handleFileUpload}
//                 className="hidden"
//               />
//               <div className="flex flex-col items-center justify-center gap-2">
//                 <div className="w-10 h-10 rounded-full flex items-center justify-center text-slate-600 group-hover:scale-110 transition-transform">
//                   <i className="fa-regular fa-file-lines text-2xl"></i>
//                 </div>
//                 <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">
//                   اضغط لإختيار ملف
//                 </span>
//                 <span className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400">
//                   صور – حتى 10 م.ب للملف، PDF, Word, Excel
//                 </span>
//               </div>
//             </label>
 
//             {/* عرض الملفات المرفوعة */}
//             {uploadedFiles.length > 0 && (
//               <div className="space-y-2 pt-4">
//                 {uploadedFiles.map((file, idx) => (
//                   <div
//                     key={idx}
//                     className="flex items-center justify-between p-3 bg-slate-50 dark:bg-[#0c1f33] rounded-xl border border-slate-200/80 dark:border-slate-700/80 text-xs"
//                   >
//                     <div className="flex items-center gap-2.5 truncate">
//                       <i className="fa-regular fa-file-pdf text-[#00a2e8]"></i>
//                       <span className="truncate font-medium text-slate-800 dark:text-slate-200">
//                         {file.name}
//                       </span>
//                       <span className="text-[10px] text-slate-400">
//                         ({(file.size / (1024 * 1024)).toFixed(2)} م.ب)
//                       </span>
//                     </div>
//                     <button
//                       type="button"
//                       onClick={() => handleRemoveFile(idx)}
//                       className="text-slate-400 hover:text-rose-500 p-1"
//                     >
//                       <i className="fa-solid fa-xmark"></i>
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </section>
//         </main>
 
//         {/* ==================== شريط الإجراءات السفلي ==================== */}
//         <div className="sticky bottom-0 z-10 bg-white dark:bg-[#0b1b2d] dark:border-t dark:border-slate-800/80 px-4 sm:px-6 lg:pl-10 lg:pr-6 py-4">
//           <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
//             {/* التكلفة التقديرية */}
//             <div className="text-right w-full sm:w-auto">
//               <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
//                 إجمالي التكلفة التقديرية: {totalEstimatedCost.toLocaleString('ar-SA')} ر.س
//               </span>
//             </div>
 
//             {/* الأزرار: إرسال للاعتماد (يمين) ثم حفظ كمسودة (يسار) */}
//             <div className="flex items-center gap-6 w-full sm:w-auto justify-end">
//               <button
//                 type="button"
//                 onClick={handleSubmitOrder}
//                 className={`flex-1 sm:flex-none sm:w-[300px] h-12 rounded-full text-xs sm:text-sm font-bold shadow-md hover:shadow text-[#000000] bg-gradient-to-r from-[#007DEA] to-[#01B0F5] hover:brightness-95 transition-all cursor-pointer`}
//               >
//                 إرسال للإعتماد
//               </button>
//               <button
//                 type="button"
//                 onClick={handleSaveDraft}
//                 className="flex-1 sm:flex-none sm:w-[300px] h-12 border border-[#0072E5] text-[#0072E5] hover:bg-[#e4f4fd] dark:hover:bg-[#0f2c45] rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer"
//               >
//                 حفظ كمسودة
//               </button>
//             </div>
//           </div>
//         </div>
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
 
//       {/* ==================== مودال تأكيد إرسال الطلب للاعتماد ==================== */}
//       {showSubmitModal && (
//         <div
//           className="fixed inset-0 z-[100] flex items-center justify-center"
//           dir="rtl"
//           style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
//         >
//           {/* Overlay: تغبيش قوي للخلفية */}
//           <div
//             className="absolute inset-0 bg-black/10 backdrop-blur-md"
//             onClick={() => setShowSubmitModal(false)}
//           />
 
//           {/* بطاقة المودال */}
//           <div className="relative z-10 bg-white dark:bg-[#0b1b2d] rounded-[32px] shadow-2xl w-[90%] max-w-[868px] px-8 pt-12 pb-12 animate-in fade-in zoom-in-95 duration-200">
//             {/* العنوان + زر الإغلاق */}
//             <div className="flex items-center justify-between">
//               <h2 className="text-2xl font-extrabold text-[#000000] dark:text-white text-right">
//                 إرسال الطلب للاعتماد
//               </h2>
//               <button
//                 type="button"
//                 onClick={() => setShowSubmitModal(false)}
//                 className="w-8 h-8 rounded-full flex items-center justify-center text-[#000000] dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
//                 aria-label="إغلاق"
//               >
//                 <i className="fa-solid fa-xmark text-lg"></i>
//               </button>
//             </div>
 
//             <p className="mt-3 text-sm text-slate-800 dark:text-slate-300 text-right leading-relaxed">
//               سيُرسَل الطلب إلى الإدارة العليا للاعتماد، ولن تتمكن من تعديله إلا إذا أُرجع إليك.
//             </p>
 
//             {/* بطاقة معلومات الطلب (رمادية، عمودان) */}
//             <div className="mt-6 bg-[#F4F4F4] dark:bg-[#0c2438] rounded-2xl px-4 py-3.5 grid grid-cols-2 text-right">
//               <div>
//                 <p className="text-sm text-slate-500 dark:text-slate-400">الطلب</p>
//                 <p className="mt-1 text-sm font-bold text-[#000000] dark:text-white">
//                   {orderTitle || 'أجهزة حاسوب'}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-slate-500 dark:text-slate-400">
//                   الوحدة التنظيمية الفرعية
//                 </p>
//                 <p className="mt-1 text-sm font-bold text-[#000000] dark:text-white">
//                   {totalEstimatedCost.toLocaleString('en-US')} ش
//                 </p>
//               </div>
//             </div>
 
//             {/* الأزرار: إرسال (يمين) ثم إلغاء (يسار) */}
//             <div className="mt-8 flex items-center gap-4">
//               <button
//                 type="button"
//                 onClick={handleConfirmSubmit}
//                 className="flex-1 h-[54px] rounded-full font-bold text-lg text-[#000000] bg-gradient-to-r from-[#007DEA] to-[#01B0F5] hover:brightness-95 transition-all cursor-pointer"
//               >
//                 ارسال الطلب
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setShowSubmitModal(false)}
//                 className="flex-1 h-[54px] rounded-full border border-[#007DEA] text-[#007DEA] font-bold text-lg hover:bg-[#e4f4fd] dark:hover:bg-[#0f2c45] transition-all cursor-pointer"
//               >
//                 إلغاء
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }
