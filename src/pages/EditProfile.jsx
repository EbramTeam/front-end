// import { useState, useRef } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { logo, shieldIcon, userKasba } from '../assets/images'
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
//   <svg {...strokeProps} {...props}>
//     <rect x="3" y="3" width="7" height="7" rx="1.5" />
//     <rect x="14" y="3" width="7" height="7" rx="1.5" />
//     <rect x="14" y="14" width="7" height="7" rx="1.5" />
//     <rect x="3" y="14" width="7" height="7" rx="1.5" />
//   </svg>
// )

// const FileIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
//     <path
//       fillRule="evenodd"
//       clipRule="evenodd"
//       d="M4 4a2 2 0 0 1 2-2h8.586a2 2 0 0 1 1.414.586l4.414A2 2 0 0 1 21 8.414V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm10.5-.5v5a1 1 0 0 0 1 1h5l-6-6z"
//     />
//   </svg>
// )

// const FilePlusIcon = (props) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
//     <path
//       fillRule="evenodd"
//       clipRule="evenodd"
//       d="M4 4a2 2 0 0 1 2-2h8.586a2 2 0 0 1 1.414.586l4.414A2 2 0 0 1 21 8.414V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm10.5-.5v5a1 1 0 0 0 1 1h5l-6-6zM12 12a1 1 0 0 1 1 1v1.5h1.5a1 1 0 1 1 0 2H13V18a1 1 0 1 1-2 0v-1.5H9.5a1 1 0 1 1 0-2H11V13a1 1 0 0 1 1-1z"
//     />
//   </svg>
// )

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

// const SearchIcon = (props) => (
//   <svg {...strokeProps} strokeWidth={1.5} {...props}>
//     <circle cx="11" cy="11" r="7.5" />
//     <path d="m20.5 20.5-4-4" />
//   </svg>
// )

// const CameraIcon = (props) => (
//   <svg
//     viewBox="0 0 14 12"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.1"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     aria-hidden="true"
//     {...props}
//   >
//     <rect x="0.6" y="2.6" width="12.8" height="8.8" rx="1.6" />
//     <path d="M4.4 2.6 5.2 0.7h3.6l0.8 1.9" />
//     <circle cx="7" cy="7" r="2.3" />
//   </svg>
// )

// const LockIcon = (props) => (
//   <svg
//     viewBox="0 0 10 13"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.1"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     aria-hidden="true"
//     {...props}
//   >
//     <path d="M2.6 5.3V3.7a2.4 2.4 0 0 1 4.8 0v1.6" />
//     <rect x="0.6" y="5.3" width="8.8" height="7.1" rx="1" />
//     <path d="M5 7.9v1.9" strokeWidth="1.5" />
//   </svg>
// )

// const LockClockIcon = (props) => (
//   <svg viewBox="0 0 16 18" fill="none" aria-hidden="true" {...props}>
//     <defs>
//       <mask id="lockClockMaskEPFinal">
//         <rect width="16" height="18" fill="white" />
//         <circle cx="11.6" cy="13.4" r="5.6" fill="black" />
//       </mask>
//     </defs>
//     <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" mask="url(#lockClockMaskEPFinal)">
//       <path d="M3.3 6.4V4.3a3.2 3.2 0 0 1 6.4 0v2.1" />
//       <rect x="0.8" y="6.6" width="11.4" height="9.8" rx="1.3" />
//     </g>
//     <circle cx="11.6" cy="13.4" r="4.4" fill="currentColor" />
//     <path
//       d="M11.6 11.1v2.5h2.1"
//       strokeWidth="1.1"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="stroke-white dark:stroke-[#0e2740]"
//     />
//   </svg>
// )

// const ShieldCheckIcon = (props) => (
//   <svg
//     viewBox="0 0 11 14"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.1"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     aria-hidden="true"
//     {...props}
//   >
//     <path d="M5.5 0.8 9.8 2.3v4.2c0 3-2 5.1-4.3 6.5C3.2 11.6 1.2 9.5 1.2 6.5V2.3z" />
//     <path d="M3.5 6.7 5 8.2l2.9-3" />
//   </svg>
// )

// /* ==================== عناصر القائمة الجانبية ==================== */

// const navItems = [
//   { id: 'home', label: 'الرئيسية', Icon: HomeIcon, path: '/dashboard' },
//   { id: 'my-orders', label: 'طلباتي', Icon: FileIcon, path: '/my-orders' },
//   { id: 'new-order', label: 'طلب شراء جديد', Icon: FilePlusIcon, path: '/new-order' },
//   { id: 'suppliers', label: 'الموردين', Icon: SupplierPersonIcon, path: '/suppliers' },
// ]

// const inputActive =
//   'w-full h-11 px-5 rounded-full bg-white dark:bg-[#0f243a] border border-[#00A3EF] text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white outline-none transition-colors focus:ring-2 focus:ring-[#00A3EF]/20'

// /* ==================== محتوى القائمة الجانبية ==================== */

// function SidebarContent({ onNavigate }) {
//   const navigate = useNavigate()

//   return (
//     <div className="min-h-full flex flex-col lg:pr-[clamp(16px,2.08vw,40px)]">
//       <div className="pl-4 pr-4 lg:pr-0 pt-[clamp(16px,4.26vh,46px)]">
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

//         <p className="my-[clamp(12px,4.35vh,47px)] px-5 2xl:px-6 text-[length:clamp(13px,1.4vh,15px)] text-slate-500 dark:text-slate-400">
//           القوائم التشغيلية
//         </p>

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

//       <div className="mt-auto pt-[clamp(12px,2vh,24px)]">
//         <div className="flex items-center gap-2 px-6 2xl:px-10 py-[clamp(10px,1.5vh,16px)] bg-[#e9f4fb] dark:bg-[#0e2740] rounded-xl mx-3">
//           <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 flex-shrink-0 animate-pulse" />
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

//         <div
//           onClick={() => {
//             navigate('/profile')
//             onNavigate?.()
//           }}
//           className="flex items-center justify-between py-[clamp(10px,1.5vh,16px)] pr-5 2xl:pr-6 pl-5 2xl:pl-[22px] mt-[clamp(0px,3.6vh,39px)] cursor-pointer group hover:bg-slate-50 dark:hover:bg-slate-800/40 rounded-xl transition-colors"
//         >
//           <div className="flex items-center gap-3">
//             <i className="fa-solid fa-circle-user text-[40px] leading-none text-slate-900 dark:text-white shrink-0" />
//             <div className="flex flex-col gap-0.5 text-right">
//               <h4 className="text-[15px] font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
//                 د. محمد كسبة
//               </h4>
//               <p className="text-[12px] text-slate-500 dark:text-slate-400">
//                 مدير النظام العام
//               </p>
//             </div>
//           </div>
//           <i className="fa-solid fa-angle-left text-sm text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" />
//         </div>
//       </div>
//     </div>
//   )
// }

// /* ==================== صفحة تعديل الملف الشخصي ==================== */

// export default function EditProfile() {
//   const navigate = useNavigate()
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [searchVal, setSearchVal] = useState('')
//   const fileInputRef = useRef(null)

//   // حالة النافذة المنبثقة (Popup Modal) لتغيير كلمة المرور
//   const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false)
//   const [modalNewPassword, setModalNewPassword] = useState('')
//   const [modalConfirmPassword, setModalConfirmPassword] = useState('')

//   // شروط الأمان الإلزامية
//   const hasMinLength = modalNewPassword.length >= 8
//   const hasUpperCase = /[A-Z]/.test(modalNewPassword)
//   const hasNumber = /[0-9]/.test(modalNewPassword)
//   const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(modalNewPassword)
//   const isMatch =
//     modalConfirmPassword.length > 0 &&
//     modalNewPassword.length > 0 &&
//     modalNewPassword === modalConfirmPassword

//   const canSavePassword =
//     hasMinLength && hasUpperCase && hasNumber && hasSpecialChar && isMatch

//   // صورة المستخدم الشخصية
//   const [avatar, setAvatar] = useState(() => {
//     try {
//       return localStorage.getItem('user_avatar_kasba') || userKasba
//     } catch {
//       return userKasba
//     }
//   })

//   // بيانات النموذج
//   const [formData, setFormData] = useState({
//     fullName: 'د . محمد كسبة',
//     email: 't.almansoor@org.gov.sa',
//     phone: '+972 590 492 8812',
//     internalRole: 'مهندس أنظمة ومسؤول طلبات',
//     department: 'الإدارة العامة لتقنية المعلومات - قسم البنية التحتية',
//     empId: 'EMP-34190',
//     username: 't.almansoor@org.gov.sa',
//     password: '••••••••••••••••',
//   })

//   const handleImageChange = (e) => {
//     const file = e.target.files?.[0]
//     if (file) {
//       const reader = new FileReader()
//       reader.onload = (event) => {
//         const result = event.target?.result
//         if (result) {
//           setAvatar(result)
//           try {
//             localStorage.setItem('user_avatar_kasba', result)
//           } catch {
//             /* التخزين غير متاح */
//           }
//         }
//       }
//       reader.readAsDataURL(file)
//     }
//   }

//   const triggerFileInput = () => fileInputRef.current?.click()

//   const handleInputChange = (field, val) => {
//     setFormData((prev) => ({ ...prev, [field]: val }))
//   }

//   const handleSave = () => {
//     navigate('/profile')
//   }

//   const handleCancel = () => {
//     navigate('/profile')
//   }

//   const handleModalSave = () => {
//     if (!canSavePassword) {
//       alert('يرجى استيفاء كافة شروط الأمان الإلزامية وتطابق كلمتي المرور')
//       return
//     }
//     setFormData((prev) => ({
//       ...prev,
//       password: '•'.repeat(modalNewPassword.length || 12),
//     }))
//     setModalNewPassword('')
//     setModalConfirmPassword('')
//     setIsPasswordModalOpen(false)
//   }

//   const handleModalClose = () => {
//     setModalNewPassword('')
//     setModalConfirmPassword('')
//     setIsPasswordModalOpen(false)
//   }

//   return (
//     <div
//       dir="rtl"
//       className="min-h-screen bg-[#F4F5F7] dark:bg-[#071322] text-slate-800 dark:text-slate-100 flex flex-row transition-colors duration-200 selection:bg-sky-500 selection:text-white relative"
//       style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
//     >
//       {/* مدخل ملف مخفي */}
//       <input
//         type="file"
//         ref={fileInputRef}
//         onChange={handleImageChange}
//         accept="image/*"
//         className="hidden"
//       />

//       {/* ==================== نافذة تغيير كلمة المرور المنبثقة (Popup Modal) ==================== */}
//       {isPasswordModalOpen && (
//         <div
//           dir="rtl"
//           className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-all animate-fadeIn"
//           style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
//         >
//           {/* خلفية معتمة تغلق المودال عند النقر خارجها */}
//           <div
//             className="fixed inset-0 -z-10"
//             onClick={handleModalClose}
//           />

//           <div className="relative w-full max-w-[500px] bg-white dark:bg-[#0b1b2d] rounded-[28px] shadow-2xl p-6 sm:p-7 border border-slate-100 dark:border-slate-800 text-right">
//             {/* زر الإغلاق X */}
//             <button
//               type="button"
//               onClick={handleModalClose}
//               aria-label="إغلاق"
//               className="absolute top-5 left-6 w-8 h-8 rounded-full flex items-center justify-center text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer text-lg"
//             >
//               <i className="fa-solid fa-xmark"></i>
//             </button>

//             {/* العنوان والوصف */}
//             <div className="mb-5">
//               <h2 className="text-xl sm:text-[22px] font-black text-slate-900 dark:text-white">
//                 تغيير كلمة المرور
//               </h2>
//               <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
//                 تحديث كلمة المرور
//               </p>
//             </div>

//             {/* حقل كلمة المرور الجديدة */}
//             <div className="mb-3.5">
//               <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5">
//                 كلمة المرور الجديدة<span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="password"
//                 value={modalNewPassword}
//                 onChange={(e) => setModalNewPassword(e.target.value)}
//                 placeholder="ادخل كلمة المرور"
//                 className="w-full h-11 px-5 rounded-full bg-[#f4f5f7] dark:bg-[#0f243a] border border-transparent focus:border-[#00A3EF] dark:focus:border-[#00A3EF] text-xs sm:text-[13px] font-medium text-slate-900 dark:text-white placeholder:text-slate-400 outline-none transition-colors"
//               />
//             </div>

//             {/* صندوق: شروط الأمان الإلزامية */}
//             <div className="bg-[#eef7fc] dark:bg-sky-950/40 rounded-2xl p-3.5 mb-3.5 border border-sky-100/60 dark:border-sky-900/40">
//               <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-2.5">
//                 شروط الأمان الإلزامية:
//               </h4>

//               <div className="grid grid-cols-2 gap-y-2.5 gap-x-3 text-xs text-slate-700 dark:text-slate-300">
//                 {/* 8 خانات على الأقل */}
//                 <div className="flex items-center justify-between gap-1.5">
//                   <span className="font-medium text-[11px] sm:text-xs">
//                     8 خانات على الأقل
//                   </span>
//                   <div
//                     className={`w-4 h-4 rounded-[4px] border shrink-0 flex items-center justify-center transition-all ${
//                       hasMinLength
//                         ? 'bg-[#00A3EF] border-[#00A3EF] text-white'
//                         : 'border-[#00A3EF] bg-transparent'
//                     }`}
//                   >
//                     {hasMinLength && <i className="fa-solid fa-check text-[9px]"></i>}
//                   </div>
//                 </div>

//                 {/* حرف كبير واحد (A-Z) */}
//                 <div className="flex items-center justify-between gap-1.5">
//                   <span className="font-medium text-[11px] sm:text-xs">
//                     حرف كبير واحد (A-Z)
//                   </span>
//                   <div
//                     className={`w-4 h-4 rounded-[4px] border shrink-0 flex items-center justify-center transition-all ${
//                       hasUpperCase
//                         ? 'bg-[#00A3EF] border-[#00A3EF] text-white'
//                         : 'border-[#00A3EF] bg-transparent'
//                     }`}
//                   >
//                     {hasUpperCase && <i className="fa-solid fa-check text-[9px]"></i>}
//                   </div>
//                 </div>

//                 {/* رقم واحد على الأقل (0-9) */}
//                 <div className="flex items-center justify-between gap-1.5">
//                   <span className="font-medium text-[11px] sm:text-xs">
//                     رقم واحد على الأقل (0-9)
//                   </span>
//                   <div
//                     className={`w-4 h-4 rounded-[4px] border shrink-0 flex items-center justify-center transition-all ${
//                       hasNumber
//                         ? 'bg-[#00A3EF] border-[#00A3EF] text-white'
//                         : 'border-[#00A3EF] bg-transparent'
//                     }`}
//                   >
//                     {hasNumber && <i className="fa-solid fa-check text-[9px]"></i>}
//                   </div>
//                 </div>

//                 {/* رمز خاص واحد (!@#$%^&*) */}
//                 <div className="flex items-center justify-between gap-1.5">
//                   <span className="font-medium text-[11px] sm:text-xs">
//                     رمز خاص واحد (!@#$%^&*)
//                   </span>
//                   <div
//                     className={`w-4 h-4 rounded-[4px] border shrink-0 flex items-center justify-center transition-all ${
//                       hasSpecialChar
//                         ? 'bg-[#00A3EF] border-[#00A3EF] text-white'
//                         : 'border-[#00A3EF] bg-transparent'
//                     }`}
//                   >
//                     {hasSpecialChar && <i className="fa-solid fa-check text-[9px]"></i>}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* حقل: تأكيد كلمة المرور */}
//             <div className="mb-3">
//               <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5">
//                 تأكيد كلمة المرور <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="password"
//                 value={modalConfirmPassword}
//                 onChange={(e) => setModalConfirmPassword(e.target.value)}
//                 placeholder="ادخل كلمة المرور"
//                 className="w-full h-11 px-5 rounded-full bg-[#f4f5f7] dark:bg-[#0f243a] border border-transparent focus:border-[#00A3EF] dark:focus:border-[#00A3EF] text-xs sm:text-[13px] font-medium text-slate-900 dark:text-white placeholder:text-slate-400 outline-none transition-colors"
//               />
//             </div>

//             {/* صندوق: كلمتا المرور متطابقتان تماماً وجاهزتان للاعتماد */}
//             <div className="bg-[#eef7fc] dark:bg-sky-950/40 rounded-2xl p-3 mb-6 flex items-center justify-between border border-sky-100/60 dark:border-sky-900/40">
//               <span className="text-[11px] sm:text-xs text-slate-700 dark:text-slate-300 font-medium">
//                 كلمتا المرور متطابقتان تماماً وجاهزتان للاعتماد
//               </span>
//               <div
//                 className={`w-4 h-4 rounded-[4px] border shrink-0 flex items-center justify-center transition-all ${
//                   isMatch
//                     ? 'bg-[#00A3EF] border-[#00A3EF] text-white'
//                     : 'border-[#00A3EF] bg-transparent'
//                 }`}
//               >
//                 {isMatch && <i className="fa-solid fa-check text-[9px]"></i>}
//               </div>
//             </div>

//             {/* أزرار الحفظ والإلغاء */}
//             <div className="flex items-center gap-3">
//               <button
//                 type="button"
//                 onClick={handleModalSave}
//                 className="flex-1 h-11 rounded-full bg-[#00A3EF] hover:bg-sky-500 text-white font-bold text-xs sm:text-sm shadow-md transition-colors cursor-pointer"
//               >
//                 حفظ كلمة المرور
//               </button>
//               <button
//                 type="button"
//                 onClick={handleModalClose}
//                 className="flex-1 h-11 rounded-full bg-white dark:bg-[#0b1b2d] border border-[#00A3EF] text-[#00A3EF] hover:bg-sky-50 dark:hover:bg-slate-800 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
//               >
//                 إلغاء
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ==================== القائمة الجانبية ==================== */}
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
//                 <i className="fa-solid fa-xmark text-lg" />
//               </button>
//             </div>
//             <SidebarContent onNavigate={() => setIsMobileMenuOpen(false)} />
//           </aside>
//         </div>
//       )}

//       {/* ==================== المحتوى الرئيسي ==================== */}
//       <div className="flex-1 flex flex-col min-w-0">
//         <header className="h-16 bg-white dark:bg-[#0b1b2d] px-4 lg:px-8 flex items-center justify-between gap-4 sticky top-0 z-10 border-b border-slate-200/70 dark:border-slate-800/80">
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => setIsMobileMenuOpen(true)}
//               className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
//               aria-label="القائمة"
//             >
//               <i className="fa-solid fa-bars text-lg" />
//             </button>

//             <nav className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-500 dark:text-slate-400">
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
//                 to="/profile"
//                 className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
//               >
//                 الملف الشخصي
//               </Link>
//               <i className="fa-solid fa-angle-left text-[10px] text-slate-400" />
//               <span className="text-slate-500 dark:text-slate-400">
//                 تعديل البيانات
//               </span>
//             </nav>
//           </div>

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

//           <div className="flex items-center gap-3">
//             <NotificationMenu />
//             <span className="hidden sm:block w-px h-5 bg-slate-200 dark:bg-slate-700" />
//             <LanguageMenu />
//           </div>
//         </header>

//         <main className="w-full px-4 sm:px-6 lg:px-8 py-6 lg:py-8 max-w-[1400px]">
//           <div className="text-right mb-6">
//             <h1 className="text-2xl lg:text-[28px] font-black text-slate-900 dark:text-white tracking-tight">
//               الملف الشخصي
//             </h1>
//             <p className="mt-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
//               إدارة بياناتك الشخصية والوظيفية وتفضيلات الإشعارات وإعدادات الأمان الخاصة بحسابك في منصة إبرام
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
//             {/* ==================== البطاقة الرئيسية ==================== */}
//             <div className="lg:col-span-8 bg-white dark:bg-[#0b1b2d] rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-slate-200/80 dark:border-slate-800/80 overflow-hidden flex flex-col lg:min-h-[clamp(560px,62.8vh,760px)]">
//               <div className="bg-[#eef7fc] dark:bg-sky-950/40 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-sky-100/70 dark:border-sky-900/40">
//                 <div className="flex items-center gap-4">
//                   <div className="relative shrink-0">
//                     <img
//                       src={avatar}
//                       alt="د . محمد كسبة"
//                       className="w-20 h-20 rounded-xl object-cover border-2 border-white dark:border-slate-800"
//                     />
//                     <button
//                       type="button"
//                       onClick={triggerFileInput}
//                       className="absolute -bottom-1 -left-1.5 w-7 h-7 rounded-lg bg-[#00A3EF] hover:bg-sky-500 text-white flex items-center justify-center transition-transform active:scale-90 cursor-pointer"
//                       title="اضغط لتغيير الصورة الشخصية"
//                       aria-label="تغيير الصورة الشخصية"
//                     >
//                       <CameraIcon className="w-[15px] h-[13px]" />
//                     </button>
//                   </div>

//                   <div className="text-right">
//                     <h2 className="text-lg lg:text-xl font-black text-slate-900 dark:text-white">
//                       د . محمد كسبة
//                     </h2>
//                     <p className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-0.5">
//                       مهندس أنظمة ومسؤول طلبات الشراء — تقنية المعلومات
//                     </p>
//                     <button
//                       type="button"
//                       onClick={triggerFileInput}
//                       className="inline-flex items-center gap-1 text-xs font-bold text-[#007DEA] dark:text-[#01B0F5] hover:underline mt-1.5 cursor-pointer"
//                     >
//                       <i className="fa-solid fa-arrow-up-from-bracket text-[11px]" />
//                       <span>تغيير الصورة الشخصية</span>
//                     </button>
//                   </div>
//                 </div>

//                 <div className="px-4 py-2 rounded-xl bg-[#00A3EF]/10 border border-[#00A3EF]/30 text-xs font-bold text-[#007DEA] dark:text-[#01B0F5] flex items-center gap-2 self-end sm:self-center">
//                   <i className="fa-solid fa-pen text-[11px]" />
//                   <span>وضع التعديل</span>
//                 </div>
//               </div>

//               {/* شبكة الحقول */}
//               <div className="p-6 sm:p-8 space-y-5 flex-1">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                   <div className="text-right">
//                     <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
//                       الاسم الكامل *
//                     </label>
//                     <input
//                       type="text"
//                       value={formData.fullName}
//                       onChange={(e) => handleInputChange('fullName', e.target.value)}
//                       className={inputActive}
//                     />
//                   </div>

//                   <div className="text-right">
//                     <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
//                       البريد الإلكتروني المؤسسي *
//                     </label>
//                     <input
//                       type="email"
//                       dir="ltr"
//                       value={formData.email}
//                       onChange={(e) => handleInputChange('email', e.target.value)}
//                       className={`${inputActive} text-right`}
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                   <div className="text-right">
//                     <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
//                       رقم الهاتف الجوال *
//                     </label>
//                     <input
//                       type="text"
//                       dir="ltr"
//                       value={formData.phone}
//                       onChange={(e) => handleInputChange('phone', e.target.value)}
//                       className={`${inputActive} text-right`}
//                     />
//                   </div>

//                   <div className="text-right">
//                     <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
//                       المسمى الوظيفي الداخلي *
//                     </label>
//                     <input
//                       type="text"
//                       value={formData.internalRole}
//                       onChange={(e) => handleInputChange('internalRole', e.target.value)}
//                       className={inputActive}
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//                   <div className="text-right">
//                     <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
//                       الإدارة / القسم
//                     </label>
//                     <input
//                       type="text"
//                       value={formData.department}
//                       onChange={(e) => handleInputChange('department', e.target.value)}
//                       className={inputActive}
//                     />
//                   </div>

//                   <div className="text-right">
//                     <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
//                       الرقم الوظيفي
//                     </label>
//                     <div className="relative">
//                       <input
//                         type="text"
//                         disabled
//                         value={formData.empId}
//                         className="w-full h-11 pr-5 pl-14 rounded-full bg-[#eef7fc] dark:bg-sky-950/40 border border-transparent text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white outline-none cursor-default"
//                       />
//                       <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[11px] font-bold text-slate-400 dark:text-slate-500">
//                         (ثابت)
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
//                   <div className="text-right">
//                     <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
//                       اسم المستخدم وبريد الدخول
//                     </label>
//                     <div className="relative">
//                       <input
//                         type="text"
//                         dir="ltr"
//                         disabled
//                         value={formData.username}
//                         className="w-full h-11 pr-5 pl-32 rounded-full bg-[#f4f5f7] dark:bg-[#0f243a] border border-transparent text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white text-right outline-none cursor-default"
//                       />
//                       <span className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center px-2 py-0.5 rounded-lg bg-[#eaf8f1] dark:bg-emerald-950/50 text-[#0b7a52] dark:text-emerald-400 text-[11px] font-bold">
//                         مرتبط بالنظام
//                       </span>
//                     </div>
//                     <p className="mt-1.5 text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
//                       <i className="fa-solid fa-circle-info text-amber-500 text-[10px]" />
//                       <span>يتطلب تغيير البريد الإلكتروني المعتمد للدخول مراجعة مسؤول المنظومة.</span>
//                     </p>
//                   </div>

//                   {/* كلمة المرور مع زر: تغيير كلمة المرور */}
//                   <div className="text-right">
//                     <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
//                       كلمة المرور الحالية
//                     </label>
//                     <input
//                       type="text"
//                       disabled
//                       value={formData.password}
//                       className="w-full h-11 px-5 rounded-full bg-[#f4f5f7] dark:bg-[#0f243a] border border-transparent text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white outline-none cursor-default tracking-widest"
//                     />
//                     {/* زر تغيير كلمة المرور لفتح البوب أب (Modal) */}
//                     <div className="mt-2 text-right">
//                       <button
//                         type="button"
//                         onClick={() => setIsPasswordModalOpen(true)}
//                         className="text-[12px] font-bold text-[#007DEA] dark:text-[#01B0F5] hover:underline cursor-pointer inline-flex items-center gap-1.5"
//                       >
//                         <i className="fa-solid fa-key text-[11px]"></i>
//                         <span>تغيير كلمة المرور</span>
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 {/* أزرار الحفظ والإلغاء */}
//                 <div className="flex items-center gap-3 pt-2 justify-start">
//                   <button
//                     type="button"
//                     onClick={handleSave}
//                     className="px-8 py-2.5 rounded-xl bg-[#00A3EF] hover:bg-sky-500 text-white text-sm font-bold transition-colors shadow-sm cursor-pointer"
//                   >
//                     حفظ التغييرات
//                   </button>
//                   <button
//                     type="button"
//                     onClick={handleCancel}
//                     className="px-6 py-2.5 rounded-xl bg-white dark:bg-[#0f243a] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
//                   >
//                     إلغاء التعديل
//                   </button>
//                 </div>
//               </div>

//               {/* شريط الأمان */}
//               <div className="bg-[#e9f4fb] dark:bg-[#0e2740] px-6 py-3 border-t border-sky-100/70 dark:border-sky-900/40 flex items-center justify-center gap-2 text-center">
//                 <ShieldCheckIcon className="w-[11px] h-[14px] shrink-0 text-[#0077FF] dark:text-[#01B0F5]" />
//                 <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
//                   يتم تدقيق كافة تعديلات بيانات الاتصال وتوثيقها تلقائياً في سجل الرقابة المالي والإداري
//                 </span>
//               </div>
//             </div>

//             {/* ==================== البطاقة الجانبية ==================== */}
//             <div className="lg:col-span-4 bg-white dark:bg-[#0b1b2d] rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-slate-200/80 dark:border-slate-800/80 overflow-hidden flex flex-col justify-between lg:min-h-[clamp(560px,62.8vh,760px)]">
//               <div className="p-6">
//                 <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
//                   <h3 className="text-[15px] font-black text-slate-900 dark:text-white">
//                     المعلومات الوظيفية والصلاحيات
//                   </h3>
//                   <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#eaf5fc] dark:bg-sky-950/50 text-[#404946] dark:text-slate-300 text-[11px] font-bold">
//                     <LockIcon className="w-[10px] h-[13px] shrink-0 text-[#404946] dark:text-slate-300" />
//                     <span>للعرض فقط</span>
//                   </div>
//                 </div>

//                 <div className="py-4 space-y-4 text-right">
//                   <div className="pb-3 border-b border-slate-100 dark:border-slate-800">
//                     <p className="text-xs text-slate-400 dark:text-slate-500 mb-1">
//                       المؤسسة / الجهة الحكومية
//                     </p>
//                     <p className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white">
//                       جامعة الأزهر / المنظومة المؤسسية
//                     </p>
//                   </div>

//                   <div className="pb-3 border-b border-slate-100 dark:border-slate-800">
//                     <p className="text-xs text-slate-400 dark:text-slate-500 mb-1">
//                       الإدارة التابع لها
//                     </p>
//                     <p className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
//                       <span className="w-1.5 h-1.5 rounded-full bg-[#0077FF]" />
//                       <span>الإدارة الطالبة (تقنية المعلومات)</span>
//                     </p>
//                   </div>

//                   <div className="pb-3 border-b border-slate-100 dark:border-slate-800">
//                     <p className="text-xs text-slate-400 dark:text-slate-500 mb-1">
//                       المسمى الوظيفي المعتمد
//                     </p>
//                     <p className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white">
//                       مهندس نظم وتطبيقات أول
//                     </p>
//                   </div>

//                   <div className="pb-3 border-b border-slate-100 dark:border-slate-800">
//                     <p className="text-xs text-slate-400 dark:text-slate-500 mb-1.5">
//                       دور المستخدم في المنظومة
//                     </p>
//                     <div className="inline-block px-3 py-1.5 rounded-lg bg-[#eaf5fc] dark:bg-sky-950/50 text-slate-900 dark:text-slate-200 text-xs font-bold">
//                       منشئ طلبات شراء معتمد
//                     </div>
//                   </div>

//                   <div>
//                     <p className="text-xs text-slate-400 dark:text-slate-500 mb-1">
//                       تاريخ إنشاء الحساب وتفعيله
//                     </p>
//                     <p className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
//                       <i className="fa-regular fa-calendar text-slate-400 text-xs" />
//                       <span>1444/03/12 هـ (2022/10/08 م)</span>
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-[#e9f4fb] dark:bg-[#0e2740] p-4 border-t border-sky-100/70 dark:border-sky-900/40 flex items-start gap-2.5">
//                 <LockClockIcon className="w-4 h-[18px] shrink-0 mt-0.5 text-[#0B2A4A] dark:text-slate-200" />
//                 <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed text-right font-medium">
//                   تُدار البيانات الوظيفية والصلاحيات الممنوحة بواسطة مسؤول النظام وإدارة الموارد البشرية وفق مصفوفة الصلاحيات المعتمدة.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }











import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logo, shieldIcon, userKasba } from '../assets/images'
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
  <svg {...strokeProps} {...props}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
  </svg>
)
 
const FileIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 4a2 2 0 0 1 2-2h8.586a2 2 0 0 1 1.414.586l4.414A2 2 0 0 1 21 8.414V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm10.5-.5v5a1 1 0 0 0 1 1h5l-6-6z"
    />
  </svg>
)
 
const FilePlusIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 4a2 2 0 0 1 2-2h8.586a2 2 0 0 1 1.414.586l4.414A2 2 0 0 1 21 8.414V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm10.5-.5v5a1 1 0 0 0 1 1h5l-6-6zM12 12a1 1 0 0 1 1 1v1.5h1.5a1 1 0 1 1 0 2H13V18a1 1 0 1 1-2 0v-1.5H9.5a1 1 0 1 1 0-2H11V13a1 1 0 0 1 1-1z"
    />
  </svg>
)
 
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
 
const SearchIcon = (props) => (
  <svg {...strokeProps} strokeWidth={1.5} {...props}>
    <circle cx="11" cy="11" r="7.5" />
    <path d="m20.5 20.5-4-4" />
  </svg>
)
 
const CameraIcon = (props) => (
  <svg
    viewBox="0 0 14 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.1"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <rect x="0.6" y="2.6" width="12.8" height="8.8" rx="1.6" />
    <path d="M4.4 2.6 5.2 0.7h3.6l0.8 1.9" />
    <circle cx="7" cy="7" r="2.3" />
  </svg>
)
 
const LockIcon = (props) => (
  <svg
    viewBox="0 0 10 13"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.1"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M2.6 5.3V3.7a2.4 2.4 0 0 1 4.8 0v1.6" />
    <rect x="0.6" y="5.3" width="8.8" height="7.1" rx="1" />
    <path d="M5 7.9v1.9" strokeWidth="1.5" />
  </svg>
)
 
const LockClockIcon = (props) => (
  <svg viewBox="0 0 16 18" fill="none" aria-hidden="true" {...props}>
    <defs>
      <mask id="lockClockMaskEPFinal">
        <rect width="16" height="18" fill="white" />
        <circle cx="11.6" cy="13.4" r="5.6" fill="black" />
      </mask>
    </defs>
    <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" mask="url(#lockClockMaskEPFinal)">
      <path d="M3.3 6.4V4.3a3.2 3.2 0 0 1 6.4 0v2.1" />
      <rect x="0.8" y="6.6" width="11.4" height="9.8" rx="1.3" />
    </g>
    <circle cx="11.6" cy="13.4" r="4.4" fill="currentColor" />
    <path
      d="M11.6 11.1v2.5h2.1"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-white dark:stroke-[#0e2740]"
    />
  </svg>
)
 
const ShieldCheckIcon = (props) => (
  <svg
    viewBox="0 0 11 14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.1"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M5.5 0.8 9.8 2.3v4.2c0 3-2 5.1-4.3 6.5C3.2 11.6 1.2 9.5 1.2 6.5V2.3z" />
    <path d="M3.5 6.7 5 8.2l2.9-3" />
  </svg>
)
 
/* ==================== مربع الاختيار (Checkbox) الخاص بشروط الأمان ==================== */
 
const CheckBox = ({ checked }) => (
  <div
    className={`w-5 h-5 rounded-md border-[1.5px] shrink-0 flex items-center justify-center transition-all ${
      checked
        ? 'bg-[#00A3EF] border-[#00A3EF] text-white'
        : 'border-[#00A3EF] bg-transparent'
    }`}
  >
    {checked && <i className="fa-solid fa-check text-[10px]"></i>}
  </div>
)
 
/* ==================== عناصر القائمة الجانبية ==================== */
 
const navItems = [
  { id: 'home', label: 'الرئيسية', Icon: HomeIcon, path: '/dashboard' },
  { id: 'my-orders', label: 'طلباتي', Icon: FileIcon, path: '/my-orders' },
  { id: 'new-order', label: 'طلب شراء جديد', Icon: FilePlusIcon, path: '/new-order' },
  { id: 'suppliers', label: 'الموردين', Icon: SupplierPersonIcon, path: '/suppliers' },
]
 
/* حقول الإدخال: خلفية رمادية فاتحة بدون حدود، ويظهر الإطار الأزرق عند التركيز */
const inputActive =
  'w-full h-11 px-5 rounded-full bg-[#f4f5f7] dark:bg-[#0f243a] border border-transparent text-xs sm:text-[13px] font-medium text-slate-600 dark:text-slate-200 outline-none transition-colors focus:border-[#00A3EF] focus:bg-white dark:focus:bg-[#0f243a]'
 
/* زر التدرج اللوني الأساسي (أزرق → سماوي) */
const gradientBtn =
  'bg-gradient-to-r from-[#0077E6] to-[#00B2F2] hover:brightness-105 text-slate-900 font-bold shadow-sm transition-all cursor-pointer'
 
/* زر الإلغاء (أبيض بإطار أزرق) */
const outlineBtn =
  'bg-white dark:bg-[#0b1b2d] border border-[#00A3EF] text-[#007DEA] dark:text-[#01B0F5] hover:bg-sky-50 dark:hover:bg-slate-800 font-bold transition-colors cursor-pointer'
 
/* حقول البوب أب */
const modalInput =
  'w-full h-14 px-6 rounded-full bg-[#f4f5f7] dark:bg-[#0f243a] border border-slate-200 dark:border-slate-700 focus:border-[#00A3EF] dark:focus:border-[#00A3EF] text-sm font-medium text-slate-900 dark:text-white placeholder:text-slate-400 outline-none transition-colors'
 
/* ==================== محتوى القائمة الجانبية ==================== */
 
function SidebarContent({ onNavigate }) {
  const navigate = useNavigate()
 
  return (
    <div className="min-h-full flex flex-col lg:pr-[clamp(16px,2.08vw,40px)]">
      <div className="pl-4 pr-4 lg:pr-0 pt-[clamp(16px,4.26vh,46px)]">
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
 
        <p className="my-[clamp(12px,4.35vh,47px)] px-5 2xl:px-6 text-[length:clamp(13px,1.4vh,15px)] text-slate-500 dark:text-slate-400">
          القوائم التشغيلية
        </p>
 
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
                className={`w-full h-[clamp(40px,5.74vh,62px)] flex items-center gap-3 px-5 2xl:px-6 rounded-xl text-[length:clamp(15px,1.9vh,20px)] font-bold text-right cursor-pointer transition-all ${
                  isActive
                    ? 'bg-[#00B1F0] text-slate-900 shadow-sm'
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
 
      <div className="mt-auto pt-[clamp(12px,2vh,24px)]">
        <div className="flex items-center gap-2 px-6 2xl:px-10 py-[clamp(10px,1.5vh,16px)] bg-[#e9f4fb] dark:bg-[#0e2740] rounded-xl mx-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 flex-shrink-0 animate-pulse" />
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
 
        <div
          onClick={() => {
            navigate('/profile')
            onNavigate?.()
          }}
          className="flex items-center justify-between py-[clamp(10px,1.5vh,16px)] pr-5 2xl:pr-6 pl-5 2xl:pl-[22px] mt-[clamp(0px,3.6vh,39px)] cursor-pointer group hover:bg-slate-50 dark:hover:bg-slate-800/40 rounded-xl transition-colors"
        >
          <div className="flex items-center gap-3">
            <i className="fa-solid fa-circle-user text-[40px] leading-none text-slate-900 dark:text-white shrink-0" />
            <div className="flex flex-col gap-0.5 text-right">
              <h4 className="text-[15px] font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                د. محمد كسبة
              </h4>
              <p className="text-[12px] text-slate-500 dark:text-slate-400">
                مدير النظام العام
              </p>
            </div>
          </div>
          <i className="fa-solid fa-angle-left text-sm text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" />
        </div>
      </div>
    </div>
  )
}
 
/* ==================== صفحة تعديل الملف الشخصي ==================== */
 
export default function EditProfile() {
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchVal, setSearchVal] = useState('')
  const fileInputRef = useRef(null)
 
  // حالة النافذة المنبثقة (Popup Modal) لتغيير كلمة المرور
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false)
  const [modalNewPassword, setModalNewPassword] = useState('')
  const [modalConfirmPassword, setModalConfirmPassword] = useState('')
 
  // شروط الأمان الإلزامية
  const hasMinLength = modalNewPassword.length >= 8
  const hasUpperCase = /[A-Z]/.test(modalNewPassword)
  const hasNumber = /[0-9]/.test(modalNewPassword)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(modalNewPassword)
  const isMatch =
    modalConfirmPassword.length > 0 &&
    modalNewPassword.length > 0 &&
    modalNewPassword === modalConfirmPassword
 
  const canSavePassword =
    hasMinLength && hasUpperCase && hasNumber && hasSpecialChar && isMatch
 
  // صورة المستخدم الشخصية
  const [avatar, setAvatar] = useState(() => {
    try {
      return localStorage.getItem('user_avatar_kasba') || userKasba
    } catch {
      return userKasba
    }
  })
 
  // بيانات النموذج
  const [formData, setFormData] = useState({
    fullName: 'د . محمد كسبة',
    email: 't.almansoor@org.gov.sa',
    phone: '+972 590 492 8812',
    internalRole: 'مهندس أنظمة ومسؤول طلبات',
    department: 'الإدارة العامة لتقنية المعلومات - قسم البنية التحتية',
    empId: 'EMP-34190',
    username: 't.almansoor@org.gov.sa',
    password: '••••••••••••••••',
  })
 
  const handleImageChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const result = event.target?.result
        if (result) {
          setAvatar(result)
          try {
            localStorage.setItem('user_avatar_kasba', result)
          } catch {
            /* التخزين غير متاح */
          }
        }
      }
      reader.readAsDataURL(file)
    }
  }
 
  const triggerFileInput = () => fileInputRef.current?.click()
 
  const handleInputChange = (field, val) => {
    setFormData((prev) => ({ ...prev, [field]: val }))
  }
 
  const handleSave = () => {
    navigate('/profile')
  }
 
  const handleCancel = () => {
    navigate('/profile')
  }
 
  const handleModalSave = () => {
    if (!canSavePassword) {
      alert('يرجى استيفاء كافة شروط الأمان الإلزامية وتطابق كلمتي المرور')
      return
    }
    setFormData((prev) => ({
      ...prev,
      password: '•'.repeat(modalNewPassword.length || 12),
    }))
    setModalNewPassword('')
    setModalConfirmPassword('')
    setIsPasswordModalOpen(false)
  }
 
  const handleModalClose = () => {
    setModalNewPassword('')
    setModalConfirmPassword('')
    setIsPasswordModalOpen(false)
  }
 
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#F4F5F7] dark:bg-[#071322] text-slate-800 dark:text-slate-100 flex flex-row transition-colors duration-200 selection:bg-sky-500 selection:text-white relative"
      style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
    >
      {/* مدخل ملف مخفي */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
        accept="image/*"
        className="hidden"
      />
 
      {/* ==================== نافذة تغيير كلمة المرور المنبثقة (Popup Modal) ==================== */}
      {isPasswordModalOpen && (
        <div
          dir="rtl"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/10 backdrop-blur-md transition-all animate-fadeIn"
          style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
        >
          {/* خلفية تغلق المودال عند النقر خارجها */}
          <div className="fixed inset-0 -z-10" onClick={handleModalClose} />
 
          <div className="relative w-full max-w-[868px] max-h-[95vh] overflow-y-auto bg-white dark:bg-[#0b1b2d] rounded-[28px] shadow-2xl pt-12 pb-11 px-6 sm:px-8 border border-slate-100 dark:border-slate-800 text-right">
            {/* زر الإغلاق X */}
            <button
              type="button"
              onClick={handleModalClose}
              aria-label="إغلاق"
              className="absolute top-9 left-[22px] w-8 h-8 rounded-full flex items-center justify-center text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-800 transition-colors cursor-pointer text-lg"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
 
            {/* العنوان والوصف */}
            <div className="mb-8">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                تغيير كلمة المرور
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">
                تحديث كلمة المرور
              </p>
            </div>
 
            {/* حقل كلمة المرور الجديدة */}
            <div>
              <label className="block text-base font-bold text-slate-900 dark:text-slate-200 mb-2.5">
                كلمة المرور الجديدة<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                value={modalNewPassword}
                onChange={(e) => setModalNewPassword(e.target.value)}
                placeholder="ادخل كلمة المرور"
                className={modalInput}
              />
            </div>
 
            {/* صندوق: شروط الأمان الإلزامية */}
            <div className="bg-[#e9f4fb] dark:bg-sky-950/40 rounded-2xl px-6 sm:px-8 py-4 mt-2 mb-4">
              <h4 className="text-sm font-bold text-slate-900 dark:text-slate-200 mb-3.5">
                شروط الأمان الإلزامية:
              </h4>
 
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-3">
                <div className="flex items-center gap-2.5">
                  <CheckBox checked={hasMinLength} />
                  <span className="text-sm font-medium text-slate-800 dark:text-slate-300">
                    8 خانات على الأقل
                  </span>
                </div>
 
                <div className="flex items-center gap-2.5">
                  <CheckBox checked={hasUpperCase} />
                  <span className="text-sm font-medium text-slate-800 dark:text-slate-300">
                    حرف كبير واحد (A-Z)
                  </span>
                </div>
 
                <div className="flex items-center gap-2.5">
                  <CheckBox checked={hasNumber} />
                  <span className="text-sm font-medium text-slate-800 dark:text-slate-300">
                    رقم واحد على الأقل (0-9)
                  </span>
                </div>
 
                <div className="flex items-center gap-2.5">
                  <CheckBox checked={hasSpecialChar} />
                  <span className="text-sm font-medium text-slate-800 dark:text-slate-300">
                    رمز خاص واحد (!@#$%^&*)
                  </span>
                </div>
              </div>
            </div>
 
            {/* حقل: تأكيد كلمة المرور */}
            <div>
              <label className="block text-base font-bold text-slate-900 dark:text-slate-200 mb-2.5">
                تأكيد كلمة المرور <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                value={modalConfirmPassword}
                onChange={(e) => setModalConfirmPassword(e.target.value)}
                placeholder="ادخل كلمة المرور"
                className={modalInput}
              />
            </div>
 
            {/* صندوق: كلمتا المرور متطابقتان */}
            <div className="bg-[#e9f4fb] dark:bg-sky-950/40 rounded-2xl h-14 px-6 sm:px-8 mt-2 mb-8 flex items-center gap-2.5">
              <CheckBox checked={isMatch} />
              <span className="text-sm font-medium text-slate-800 dark:text-slate-300">
                كلمتا المرور متطابقتان تماماً وجاهزتان للاعتماد.
              </span>
            </div>
 
            {/* أزرار الحفظ والإلغاء */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={handleModalSave}
                className={`flex-1 h-[58px] rounded-full text-lg ${gradientBtn}`}
              >
                حفظ كلمة المرور
              </button>
              <button
                type="button"
                onClick={handleModalClose}
                className={`flex-1 h-[58px] rounded-full text-lg ${outlineBtn}`}
              >
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}
 
      {/* ==================== القائمة الجانبية ==================== */}
      <aside className="hidden lg:block w-[clamp(240px,18.4vw,340px)] shrink-0 bg-white dark:bg-[#0b1b2d] sticky top-0 h-screen overflow-y-auto select-none z-20 border-l border-slate-200/80 dark:border-slate-800/80">
        <SidebarContent />
      </aside>
 
      {/* القائمة الجانبية للشاشات الصغيرة */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
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
        <header className="h-16 bg-white dark:bg-[#0b1b2d] px-4 lg:px-8 flex items-center justify-between gap-4 sticky top-0 z-10 border-b border-slate-200/70 dark:border-slate-800/80">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label="القائمة"
            >
              <i className="fa-solid fa-bars text-lg" />
            </button>
 
            <nav className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-500 dark:text-slate-400">
              <Link
                to="/dashboard"
                className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
              >
                نظام إدارة المشتريات - الأزهر
              </Link>
              <i className="fa-solid fa-angle-left text-[10px] text-slate-400" />
              <span className="font-bold text-slate-900 dark:text-white">
                الإدارة الطالبة
              </span>
              <i className="fa-solid fa-angle-left text-[10px] text-slate-400" />
              <Link
                to="/profile"
                className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
              >
                الملف الشخصي
              </Link>
              <i className="fa-solid fa-angle-left text-[10px] text-slate-400" />
              <span className="text-slate-500 dark:text-slate-400">
                تعديل البيانات
              </span>
            </nav>
          </div>
 
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
 
          <div className="flex items-center gap-3">
            <NotificationMenu />
            <span className="hidden sm:block w-px h-5 bg-slate-200 dark:bg-slate-700" />
            <LanguageMenu />
          </div>
        </header>
 
        <main className="w-full px-4 sm:px-6 lg:px-8 py-6 lg:py-8 max-w-[1400px]">
          <div className="text-right mb-6">
            <h1 className="text-2xl lg:text-[28px] font-black text-slate-900 dark:text-white tracking-tight">
              الملف الشخصي
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
              إدارة بياناتك الشخصية والوظيفية وتفضيلات الإشعارات وإعدادات الأمان الخاصة بحسابك في منصة إبرام
            </p>
          </div>
 
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* ==================== البطاقة الرئيسية ==================== */}
            <div className="lg:col-span-8 bg-white dark:bg-[#0b1b2d] rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-slate-200/80 dark:border-slate-800/80 overflow-hidden flex flex-col lg:min-h-[clamp(560px,62.8vh,760px)]">
              <div className="bg-[#eef7fc] dark:bg-sky-950/40 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-sky-100/70 dark:border-sky-900/40">
                <div className="flex items-center gap-4">
                  <div className="relative shrink-0">
                    <img
                      src={avatar}
                      alt="د . محمد كسبة"
                      className="w-20 h-20 rounded-xl object-cover border-2 border-white dark:border-slate-800"
                    />
                    <button
                      type="button"
                      onClick={triggerFileInput}
                      className="absolute -bottom-1 -left-1.5 w-7 h-7 rounded-lg bg-[#0B2A4A] hover:bg-[#123a63] text-white flex items-center justify-center transition-transform active:scale-90 cursor-pointer"
                      title="اضغط لتغيير الصورة الشخصية"
                      aria-label="تغيير الصورة الشخصية"
                    >
                      <CameraIcon className="w-[15px] h-[13px]" />
                    </button>
                  </div>
 
                  <div className="text-right">
                    <h2 className="text-lg lg:text-xl font-black text-slate-900 dark:text-white">
                      د . محمد كسبة
                    </h2>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-0.5">
                      مهندس أنظمة ومسؤول طلبات الشراء — تقنية المعلومات
                    </p>
                    <button
                      type="button"
                      onClick={triggerFileInput}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#007DEA] dark:text-[#01B0F5] hover:underline mt-1.5 cursor-pointer"
                    >
                      <i className="fa-solid fa-arrow-up-from-bracket text-[11px]" />
                      <span>تغيير الصورة الشخصية</span>
                    </button>
                  </div>
                </div>
              </div>
 
              {/* شبكة الحقول */}
              <div className="p-6 sm:p-8 space-y-5 flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="text-right">
                    <label className="block text-xs font-semibold text-slate-800 dark:text-slate-300 mb-1.5">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className={inputActive}
                    />
                  </div>
 
                  <div className="text-right">
                    <label className="block text-xs font-semibold text-slate-800 dark:text-slate-300 mb-1.5">
                      البريد الإلكتروني المؤسسي *
                    </label>
                    <input
                      type="email"
                      dir="ltr"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`${inputActive} text-right`}
                    />
                  </div>
                </div>
 
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="text-right">
                    <label className="block text-xs font-semibold text-slate-800 dark:text-slate-300 mb-1.5">
                      رقم الهاتف الجوال *
                    </label>
                    <input
                      type="text"
                      dir="ltr"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`${inputActive} text-right`}
                    />
                  </div>
 
                  <div className="text-right">
                    <label className="block text-xs font-semibold text-slate-800 dark:text-slate-300 mb-1.5">
                      المسمى الوظيفي الداخلي *
                    </label>
                    <input
                      type="text"
                      value={formData.internalRole}
                      onChange={(e) => handleInputChange('internalRole', e.target.value)}
                      className={inputActive}
                    />
                  </div>
                </div>
 
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="text-right">
                    <label className="block text-xs font-semibold text-slate-800 dark:text-slate-300 mb-1.5">
                      الإدارة / القسم
                    </label>
                    <input
                      type="text"
                      value={formData.department}
                      onChange={(e) => handleInputChange('department', e.target.value)}
                      className={inputActive}
                    />
                  </div>
 
                  <div className="text-right">
                    <label className="block text-xs font-semibold text-slate-800 dark:text-slate-300 mb-1.5">
                      الرقم الوظيفي
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        disabled
                        value={formData.empId}
                        className="w-full h-11 pr-5 pl-14 rounded-full bg-[#eef7fc] dark:bg-sky-950/40 border border-transparent text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white outline-none cursor-default"
                      />
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[11px] font-bold text-slate-400 dark:text-slate-500">
                        (ثابت)
                      </span>
                    </div>
                  </div>
                </div>
 
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start pt-3">
                  <div className="text-right">
                    <label className="block text-xs font-semibold text-slate-800 dark:text-slate-300 mb-1.5">
                      اسم المستخدم وبريد الدخول
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        dir="ltr"
                        disabled
                        value={formData.username}
                        className="w-full h-11 pr-5 pl-32 rounded-full bg-[#f4f5f7] dark:bg-[#0f243a] border border-transparent text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white text-right outline-none cursor-default"
                      />
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center px-2 py-0.5 rounded-lg bg-[#eaf8f1] dark:bg-emerald-950/50 text-[#0b7a52] dark:text-emerald-400 text-[11px] font-bold">
                        مرتبط بالنظام
                      </span>
                    </div>
                    <p className="mt-1.5 text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <i className="fa-solid fa-circle-info text-amber-500 text-[10px]" />
                      <span>يتطلب تغيير البريد الإلكتروني المعتمد للدخول مراجعة مسؤول المنظومة.</span>
                    </p>
                  </div>
 
                  {/* كلمة المرور مع رابط: تغيير كلمة المرور */}
                  <div className="text-right">
                    <label className="block text-xs font-semibold text-slate-800 dark:text-slate-300 mb-1.5">
                      كلمة المرور الحالية
                    </label>
                    <input
                      type="text"
                      disabled
                      value={formData.password}
                      className="w-full h-11 px-5 rounded-full bg-[#f4f5f7] dark:bg-[#0f243a] border border-transparent text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white outline-none cursor-default tracking-widest"
                    />
                    {/* رابط تغيير كلمة المرور (يفتح البوب أب) - على اليسار وبخط تحته */}
                    <div className="mt-2 text-left">
                      <button
                        type="button"
                        onClick={() => setIsPasswordModalOpen(true)}
                        className="text-xs font-medium text-[#007DEA] dark:text-[#01B0F5] underline underline-offset-2 hover:opacity-80 cursor-pointer px-1.5"
                      >
                        تغيير كلمة المرور
                      </button>
                    </div>
                  </div>
                </div>
 
                {/* أزرار الحفظ والإلغاء: الإلغاء أولاً (يمين) ثم الحفظ (يسار)، والمجموعة على الطرف الأيسر */}
                <div className="flex items-center gap-4 pt-1 justify-end">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className={`w-[168px] h-[49px] rounded-full text-[15px] ${outlineBtn}`}
                  >
                    إلغاء التعديل
                  </button>
                  <button
                    type="button"
                    onClick={handleSave}
                    className={`w-[168px] h-[49px] rounded-full text-[15px] ${gradientBtn}`}
                  >
                    حفظ التغييرات
                  </button>
                </div>
              </div>
 
              {/* شريط الأمان */}
              <div className="bg-[#e9f4fb] dark:bg-[#0e2740] px-6 py-3 border-t border-sky-100/70 dark:border-sky-900/40 flex items-center justify-center gap-2 text-center">
                <ShieldCheckIcon className="w-[11px] h-[14px] shrink-0 text-[#0077FF] dark:text-[#01B0F5]" />
                <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                  يتم تدقيق كافة تعديلات بيانات الاتصال وتوثيقها تلقائياً في سجل الرقابة المالي والإداري
                </span>
              </div>
            </div>
 
            {/* ==================== البطاقة الجانبية ==================== */}
            <div className="lg:col-span-4 bg-white dark:bg-[#0b1b2d] rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-slate-200/80 dark:border-slate-800/80 overflow-hidden flex flex-col justify-between lg:min-h-[clamp(560px,62.8vh,760px)]">
              <div className="p-6">
                <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <h3 className="text-xl font-black leading-snug text-slate-900 dark:text-white">
                    المعلومات الوظيفية والصلاحيات
                  </h3>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#eaf5fc] dark:bg-sky-950/50 text-[#404946] dark:text-slate-300 text-[11px] font-bold shrink-0">
                    <LockIcon className="w-[10px] h-[13px] shrink-0 text-[#404946] dark:text-slate-300" />
                    <span>للعرض فقط</span>
                  </div>
                </div>
 
                <div className="py-4 space-y-4 text-right">
                  <div className="pb-3 border-b border-slate-100 dark:border-slate-800">
                    <p className="text-[13px] text-slate-500 dark:text-slate-400 mb-1">
                      المؤسسة / الجهة الحكومية
                    </p>
                    <p className="text-base font-bold text-slate-900 dark:text-white">
                      جامعة الأزهر / المنظومة المؤسسية
                    </p>
                  </div>
 
                  <div className="pb-3 border-b border-slate-100 dark:border-slate-800">
                    <p className="text-[13px] text-slate-500 dark:text-slate-400 mb-1">
                      الإدارة التابع لها
                    </p>
                    <p className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0077FF]" />
                      <span>الإدارة الطالبة (تقنية المعلومات)</span>
                    </p>
                  </div>
 
                  <div className="pb-3 border-b border-slate-100 dark:border-slate-800">
                    <p className="text-[13px] text-slate-500 dark:text-slate-400 mb-1">
                      المسمى الوظيفي المعتمد
                    </p>
                    <p className="text-base font-bold text-slate-900 dark:text-white">
                      مهندس نظم وتطبيقات أول
                    </p>
                  </div>
 
                  <div className="pb-3 border-b border-slate-100 dark:border-slate-800">
                    <p className="text-[13px] text-slate-500 dark:text-slate-400 mb-1.5">
                      دور المستخدم في المنظومة
                    </p>
                    <div className="inline-block px-3 py-1.5 rounded-lg bg-[#eaf5fc] dark:bg-sky-950/50 text-slate-900 dark:text-slate-200 text-[13px] font-bold">
                      منشئ طلبات شراء معتمد
                    </div>
                  </div>
 
                  <div>
                    <p className="text-[13px] text-slate-500 dark:text-slate-400 mb-1">
                      تاريخ إنشاء الحساب وتفعيله
                    </p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <i className="fa-regular fa-calendar text-slate-400 text-xs" />
                      <span>1444/03/12 هـ (2022/10/08 م)</span>
                    </p>
                  </div>
                </div>
              </div>
 
              <div className="bg-[#e9f4fb] dark:bg-[#0e2740] p-4 border-t border-sky-100/70 dark:border-sky-900/40 flex items-start gap-2.5">
                <LockClockIcon className="w-4 h-[18px] shrink-0 mt-0.5 text-[#0B2A4A] dark:text-slate-200" />
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed text-right font-medium">
                  تُدار البيانات الوظيفية والصلاحيات الممنوحة بواسطة مسؤول النظام وإدارة الموارد البشرية وفق مصفوفة الصلاحيات المعتمدة.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
