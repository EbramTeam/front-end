// import { useState, useEffect, useRef, useCallback } from 'react'
// import { createPortal } from 'react-dom'

// /* ─────────────────────────── أيقونات SVG داخلية ─────────────────────────── */

// const DocIcon = () => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
//     strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
//     <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
//     <path d="M14 2v6h6" />
//     <path d="M8 13h8M8 17h4" />
//   </svg>
// )

// const XIcon = () => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}
//     strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
//     <path d="M18 6 6 18M6 6l12 12" />
//   </svg>
// )

// const ChevronDownIcon = ({ className = '' }) => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
//     strokeLinecap="round" strokeLinejoin="round" className={`w-4 h-4 ${className}`} aria-hidden="true">
//     <path d="M6 9l6 6 6-6" />
//   </svg>
// )

// const UploadIcon = () => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}
//     strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9 text-[#2AA7F0]" aria-hidden="true">
//     <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
//     <polyline points="17 8 12 3 7 8" />
//     <line x1="12" y1="3" x2="12" y2="15" />
//   </svg>
// )

// const TrashIcon = () => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
//     strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
//     <polyline points="3 6 5 6 21 6" />
//     <path d="M19 6l-1 14H6L5 6" />
//     <path d="M10 11v6M14 11v6" />
//     <path d="M9 6V4h6v2" />
//   </svg>
// )

// /* ─────────────────────────── بيانات القوائم ─────────────────────────── */

// const DEPARTMENTS = [
//   'كلية الهندسة',
//   'كلية العلوم',
//   'كلية الطب',
//   'كلية التربية',
//   'عمادة تقنية المعلومات',
//   'عمادة شؤون الطلبة',
//   'الإدارة المالية',
//   'إدارة الخدمات العامة',
// ]

// const CATEGORIES = [
//   'جهاز متكامل',
//   'ملحقات حاسوب',
//   'أثاث مكتبي',
//   'برمجيات وتراخيص',
//   'قرطاسية',
// ]

// const UNITS = [
//   'جهاز متكامل',
//   'جهاز',
//   'طقم',
//   'قطعة',
//   'علبة',
//   'رخصة',
// ]

// const INITIAL_ITEMS = [
//   { id: 1, name: 'جهاز حاسوب مكتبي', quantity: '25 جهاز', unit: '' },
//   { id: 2, name: 'لوحة مفاتيح وفأرة لاسلكية', quantity: '25 طقم', unit: '' },
// ]

// /* ─────────────────────────── مكوّن القائمة المنسدلة المخصّصة ─────────────────────────── */

// function CustomSelect({ value, onChange, options, placeholder, id }) {
//   const [open, setOpen] = useState(false)
//   const ref = useRef(null)

//   useEffect(() => {
//     if (!open) return
//     const handler = (e) => {
//       if (ref.current && !ref.current.contains(e.target)) setOpen(false)
//     }
//     document.addEventListener('mousedown', handler)
//     return () => document.removeEventListener('mousedown', handler)
//   }, [open])

//   const selected = options.find(o => o === value)

//   return (
//     <div ref={ref} className="relative" id={id}>
//       <button
//         type="button"
//         onClick={() => setOpen(p => !p)}
//         aria-haspopup="listbox"
//         aria-expanded={open}
//         className={`
//           w-full h-12 flex items-center justify-between gap-2
//           ps-4 pe-4 rounded-full border text-sm text-right
//           transition-all duration-150 cursor-pointer
//           ${open
//             ? 'border-[#00B4F0] ring-4 ring-sky-100 bg-white dark:bg-[#0f243a]'
//             : 'border-[#d4d4d4] bg-[#f4f4f4] dark:bg-[#0f1f30] dark:border-slate-700'}
//           ${value ? 'text-slate-800 dark:text-slate-100' : 'text-[#828282]'}
//         `}
//       >
//         <span className="flex-1 text-start truncate">{selected || placeholder}</span>
//         <ChevronDownIcon className={`shrink-0 transition-transform duration-200 text-[#828282] ${open ? 'rotate-180' : ''}`} />
//       </button>

//       {open && (
//         <ul
//           role="listbox"
//           className="absolute top-[calc(100%+6px)] end-0 start-0 z-[200] bg-white dark:bg-[#0b1b2d] border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl overflow-hidden py-1"
//         >
//           {options.map(opt => (
//             <li
//               key={opt}
//               role="option"
//               aria-selected={value === opt}
//               onClick={() => { onChange(opt); setOpen(false) }}
//               className={`
//                 px-4 py-2.5 text-sm text-right cursor-pointer transition-colors
//                 ${value === opt
//                   ? 'bg-sky-50 text-[#0066F0] font-bold dark:bg-sky-900/30 dark:text-sky-300'
//                   : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50'}
//               `}
//             >
//               {opt}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }

// /* ─────────────────────────── أنماط موحّدة ─────────────────────────── */

// const inputCls = `
//   w-full h-12 rounded-full border border-[#d4d4d4] bg-[#f4f4f4]
//   ps-4 pe-4 text-sm text-slate-800 placeholder-[#828282]
//   focus:outline-none focus:border-[#00B4F0] focus:ring-4 focus:ring-sky-100 focus:bg-white
//   dark:bg-[#0f1f30] dark:border-slate-700 dark:text-slate-100 dark:focus:bg-[#0f243a]
//   transition-all duration-150
// `

// const textareaCls = `
//   w-full rounded-3xl border border-[#d4d4d4] bg-[#f4f4f4]
//   p-4 text-sm text-slate-800 placeholder-[#828282] resize-none leading-relaxed
//   focus:outline-none focus:border-[#00B4F0] focus:ring-4 focus:ring-sky-100 focus:bg-white
//   dark:bg-[#0f1f30] dark:border-slate-700 dark:text-slate-100 dark:focus:bg-[#0f243a]
//   transition-all duration-150
// `

// const labelCls = 'block text-[15px] font-bold text-slate-900 dark:text-slate-100 mb-2'

// const RequiredStar = () => <span className="text-[#E5262A] me-0.5">*</span>

// /* ─────────────────────────── الحقل الرقمي مع أزرار ─────────────────────────── */

// function NumberField({ value, onChange }) {
//   const inc = () => onChange(String(Math.max(0, Number(value) + 1)))
//   const dec = () => onChange(String(Math.max(0, Number(value) - 1)))

//   return (
//     <div className="relative w-full">
//       <input
//         type="number"
//         min="0"
//         value={value}
//         onChange={e => onChange(String(Math.max(0, Number(e.target.value))))}
//         className={`${inputCls} pe-10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
//       />
//       {/* أزرار زيادة / نقصان */}
//       <div className="absolute end-3 top-1/2 -translate-y-1/2 flex flex-col gap-px">
//         <button
//           type="button"
//           tabIndex={-1}
//           onClick={inc}
//           className="w-5 h-5 flex items-center justify-center rounded hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
//           aria-label="زيادة"
//         >
//           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}
//             strokeLinecap="round" className="w-3 h-3 text-[#828282]">
//             <path d="M6 15l6-6 6 6" />
//           </svg>
//         </button>
//         <button
//           type="button"
//           tabIndex={-1}
//           onClick={dec}
//           className="w-5 h-5 flex items-center justify-center rounded hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
//           aria-label="نقصان"
//         >
//           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}
//             strokeLinecap="round" className="w-3 h-3 text-[#828282]">
//             <path d="M6 9l6 6 6-6" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   )
// }

// /* ─────────────────────────── منطقة رفع الملفات ─────────────────────────── */

// const MAX_FILE_SIZE = 25 * 1024 * 1024
// const ACCEPTED_TYPES = ['.pdf', '.doc', '.docx', '.xls', '.xlsx']
// const ACCEPT_MIME = 'application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'

// function UploadZone({ files, setFiles }) {
//   const [dragging, setDragging] = useState(false)
//   const inputRef = useRef(null)

//   const addFiles = useCallback((incoming) => {
//     const valid = Array.from(incoming).filter(f => {
//       const ext = '.' + f.name.split('.').pop().toLowerCase()
//       return ACCEPTED_TYPES.includes(ext) && f.size <= MAX_FILE_SIZE
//     })
//     setFiles(prev => {
//       const names = new Set(prev.map(f => f.name))
//       return [...prev, ...valid.filter(f => !names.has(f.name))]
//     })
//   }, [setFiles])

//   const onDrop = (e) => {
//     e.preventDefault()
//     setDragging(false)
//     addFiles(e.dataTransfer.files)
//   }

//   const removeFile = (name) => setFiles(prev => prev.filter(f => f.name !== name))

//   return (
//     <div>
//       <div
//         onClick={() => inputRef.current?.click()}
//         onDragOver={e => { e.preventDefault(); setDragging(true) }}
//         onDragLeave={() => setDragging(false)}
//         onDrop={onDrop}
//         className={`
//           flex flex-col items-center justify-center gap-2
//           h-[132px] rounded-2xl border-2 border-dashed border-[#2AA7F0]
//           cursor-pointer transition-colors duration-150
//           ${dragging ? 'bg-sky-100 dark:bg-sky-900/30' : 'bg-[#E6F4FD] hover:bg-sky-100 dark:bg-sky-950/20 dark:hover:bg-sky-900/25'}
//         `}
//       >
//         <UploadIcon />
//         <p className="text-sm font-bold text-slate-800 dark:text-slate-100">
//           اسحب الملفات هنا أو اضغط لإختيار ملف
//         </p>
//         <p className="text-[11px] text-[#828282]">
//           الأنواع المدعومة: PDF, Word, Excel &nbsp; بحد أقصى 25 ميجابايت للملف الواحد.
//         </p>
//         <input
//           ref={inputRef}
//           type="file"
//           multiple
//           accept={ACCEPT_MIME}
//           className="hidden"
//           onChange={e => addFiles(e.target.files)}
//         />
//       </div>

//       {/* قائمة الملفات المرفوعة */}
//       {files.length > 0 && (
//         <ul className="mt-2.5 space-y-1.5">
//           {files.map(f => (
//             <li
//               key={f.name}
//               className="flex items-center justify-between gap-2 px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
//             >
//               <span className="text-xs text-slate-700 dark:text-slate-200 truncate flex-1 text-start">{f.name}</span>
//               <button
//                 type="button"
//                 onClick={() => removeFile(f.name)}
//                 className="shrink-0 text-slate-400 hover:text-rose-500 transition-colors cursor-pointer"
//                 aria-label={`حذف ${f.name}`}
//               >
//                 <TrashIcon />
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }

// /* ─────────────────────────── المكوّن الرئيسي ─────────────────────────── */

// const TITLE_ID = 'new-need-modal-title'

// export default function NewNeedRequestModal({ isOpen, onClose, onSubmit }) {
//   /* ── State ── */
//   const [formData, setFormData] = useState({
//     title: '',
//     department: '',
//     category: '',
//     quantity: '0',
//     unit: '',
//     estimatedCost: '',
//     justification: '',
//     notes: '',
//   })
//   const [files, setFiles] = useState([])
//   const [visible, setVisible] = useState(false)   // للأنيمايشن
//   const overlayRef = useRef(null)
//   const firstFocusRef = useRef(null)

//   /* ── أنيمايشن الدخول / الخروج ── */
//   useEffect(() => {
//     if (isOpen) {
//       // ندير الـ display أولاً ثم نطلق الأنيمايشن
//       requestAnimationFrame(() => setVisible(true))
//     } else {
//       setVisible(false)
//     }
//   }, [isOpen])

//   /* ── منع تمرير الـ body ── */
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden'
//     } else {
//       document.body.style.overflow = ''
//     }
//     return () => { document.body.style.overflow = '' }
//   }, [isOpen])

//   /* ── إغلاق بـ Escape ── */
//   useEffect(() => {
//     if (!isOpen) return
//     const handler = (e) => { if (e.key === 'Escape') onClose() }
//     document.addEventListener('keydown', handler)
//     return () => document.removeEventListener('keydown', handler)
//   }, [isOpen, onClose])

//   /* ── تركيز أول عنصر عند الفتح ── */
//   useEffect(() => {
//     if (isOpen && visible) {
//       setTimeout(() => firstFocusRef.current?.focus(), 50)
//     }
//   }, [isOpen, visible])

//   /* ── إعادة ضبط النموذج عند الإغلاق ── */
//   useEffect(() => {
//     if (!isOpen) {
//       setTimeout(() => {
//         setFormData({ title: '', department: '', category: '', quantity: '0', unit: '', estimatedCost: '', justification: '', notes: '' })
//         setFiles([])
//       }, 250)
//     }
//   }, [isOpen])

//   const set = (key) => (val) => setFormData(prev => ({ ...prev, [key]: val }))

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     onSubmit?.({ ...formData, files })
//     onClose()
//   }

//   if (!isOpen && !visible) return null

//   /* ─────────────── JSX ─────────────── */
//   return createPortal(
//     <div
//       dir="rtl"
//       style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby={TITLE_ID}
//     >
//       {/* ── Overlay ── */}
//       <div
//         ref={overlayRef}
//         onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
//         className={`
//           fixed inset-0 z-[9000] flex items-center justify-center p-3 sm:p-5
//           bg-slate-900/40 backdrop-blur-sm
//           transition-opacity duration-200
//           ${visible ? 'opacity-100' : 'opacity-0'}
//         `}
//       >
//         {/* ── Scrollable container ── */}
//         <div className="w-full max-w-[860px] flex flex-col max-h-[90vh]">
//           <div
//             className={`
//               relative flex flex-col
//               bg-white dark:bg-[#0b1b2d]
//               rounded-3xl shadow-2xl shadow-slate-900/10
//               overflow-hidden
//               transition-all duration-200
//               ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
//             `}
//           >

//             {/* ══════════════ HEADER ══════════════ */}
//             <div className="shrink-0 flex items-center justify-between gap-4 px-6 py-4 bg-[#E6F4FD] border-b border-sky-100 dark:bg-sky-950/30 dark:border-sky-900/40">
//               {/* يمين: أيقونة + نص */}
//               <div className="flex items-center gap-3 min-w-0">
//                 <div className="shrink-0 w-11 h-11 rounded-2xl bg-white dark:bg-[#0b1b2d] shadow-sm flex items-center justify-center text-[#0066F0]">
//                   <DocIcon />
//                 </div>
//                 <div className="min-w-0">
//                   <h2
//                     id={TITLE_ID}
//                     className="text-[18px] font-black text-slate-900 dark:text-white leading-tight"
//                   >
//                     إنشاء طلب احتياج مشتريات جديد
//                   </h2>
//                   <p className="text-sm mt-0.5 text-[#545f73] dark:text-slate-400 leading-tight">
//                     منظومة إبرام - نموذج طلب التعميد والمنافسات الحكومية
//                   </p>
//                 </div>
//               </div>

//               {/* يسار: زر الإغلاق */}
//               <button
//                 type="button"
//                 onClick={onClose}
//                 aria-label="إغلاق"
//                 className="shrink-0 w-9 h-9 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 hover:text-slate-800 dark:hover:text-white transition-all cursor-pointer"
//               >
//                 <XIcon />
//               </button>
//             </div>

//             {/* ══════════════ BODY (قابل للتمرير) ══════════════ */}
//             <div className="flex-1 overflow-y-auto px-6 py-7 space-y-7">

//               {/* 1. عنوان الاحتياج */}
//               <div>
//                 <label className={labelCls}>
//                   عنوان الاحتياج والمواصفة الفنية <RequiredStar />
//                 </label>
//                 <input
//                   ref={firstFocusRef}
//                   type="text"
//                   value={formData.title}
//                   onChange={e => set('title')(e.target.value)}
//                   placeholder="مثال: ترقية تجهيزات مركز الحوسبة فائقة الأداء HPC"
//                   className={inputCls}
//                 />
//               </div>

//               {/* 2. الجهة الطالبة */}
//               <div>
//                 <label className={labelCls} htmlFor="dept-select">
//                   الجهة الطالبة (الكلية / العمادة / الإدارة) <RequiredStar />
//                 </label>
//                 <CustomSelect
//                   id="dept-select"
//                   value={formData.department}
//                   onChange={set('department')}
//                   options={DEPARTMENTS}
//                   placeholder="اختر الجهة الطالبة"
//                 />
//               </div>

//               {/* 3. الصنف + الكمية + وحدة القياس */}
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
//                 {/* الصنف */}
//                 <div>
//                   <label className={labelCls}>الصنف <RequiredStar /></label>
//                   <CustomSelect
//                     value={formData.category}
//                     onChange={set('category')}
//                     options={CATEGORIES}
//                     placeholder="جهاز متكامل"
//                   />
//                 </div>

//                 {/* الكمية المطلوبة */}
//                 <div>
//                   <label className={labelCls}>الكمية المطلوبة <RequiredStar /></label>
//                   <NumberField value={formData.quantity} onChange={set('quantity')} />
//                 </div>

//                 {/* وحدة القياس */}
//                 <div>
//                   <label className={labelCls}>وحدة القياس <RequiredStar /></label>
//                   <CustomSelect
//                     value={formData.unit}
//                     onChange={set('unit')}
//                     options={UNITS}
//                     placeholder="جهاز متكامل"
//                   />
//                 </div>
//               </div>

//               {/* 4. التكلفة التقديرية */}
//               <div>
//                 <label className={labelCls}>
//                   التكلفة التقديرية المتوقعة(إختياري) <RequiredStar />
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.estimatedCost}
//                   onChange={e => set('estimatedCost')(e.target.value)}
//                   placeholder="مثال: ترقية تجهيزات مركز الحوسبة فائقة الأداء HPC"
//                   className={inputCls}
//                 />
//               </div>

//               {/* 5. وصف الاحتياج */}
//               <div>
//                 <label className={labelCls}>
//                   وصف الاحتياج والمبررات التشغيلية <RequiredStar />
//                 </label>
//                 <textarea
//                   rows={6}
//                   value={formData.justification}
//                   onChange={e => set('justification')(e.target.value)}
//                   placeholder="شرح موجز لأسباب طلب الإحتياج ومردوده الأكاديمي أو التقني على أعمال الكلية/العمادة..."
//                   style={{ height: '200px' }}
//                   className={textareaCls}
//                 />
//               </div>

//               {/* 6. درجة الأولوية — جدول */}
//               <div>
//                 <label className={labelCls}>
//                   درجة الأولوية والأهمية التشغيلية <RequiredStar />
//                 </label>
//                 <div className="rounded-3xl overflow-hidden border border-[#d4d4d4] dark:border-slate-700 overflow-x-auto">
//                   <table className="w-full text-right text-sm min-w-[480px]">
//                     <thead>
//                       <tr
//                         className="bg-[#f4f4f4] dark:bg-[#0f243a] text-slate-700 dark:text-slate-300 font-bold"
//                         style={{ height: '72px' }}
//                       >
//                         <th className="px-5 text-center border-e border-[#d4d4d4] dark:border-slate-700 w-16">م</th>
//                         <th className="px-5 text-center border-e border-[#d4d4d4] dark:border-slate-700">اسم الصنف</th>
//                         <th className="px-5 text-center border-e border-[#d4d4d4] dark:border-slate-700">الكمية</th>
//                         <th className="px-5 text-center">وحدة القياس</th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-[#d4d4d4] dark:divide-slate-700 bg-white dark:bg-[#0b1b2d]">
//                       {INITIAL_ITEMS.map(item => (
//                         <tr
//                           key={item.id}
//                           className="text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
//                           style={{ height: '72px' }}
//                         >
//                           <td className="px-5 text-center font-bold border-e border-[#d4d4d4] dark:border-slate-700">{item.id}</td>
//                           <td className="px-5 text-center font-medium border-e border-[#d4d4d4] dark:border-slate-700">{item.name}</td>
//                           <td className="px-5 text-center border-e border-[#d4d4d4] dark:border-slate-700">{item.quantity}</td>
//                           <td className="px-5 text-center text-slate-400 dark:text-slate-500">{item.unit}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>

//               {/* 7. منطقة رفع الملفات */}
//               <div>
//                 <label className={labelCls}>
//                   المرفقات والمسوغات الفنية (كراسة المواصفات، عروض الأسعار) <RequiredStar />
//                 </label>
//                 <UploadZone files={files} setFiles={setFiles} />
//               </div>

//               {/* 8. توجيهات وملاحظات */}
//               <div>
//                 <label className={labelCls}>
//                   توجيهات وملاحظات إضافية لسكرتارية لجنة المنافسات <RequiredStar />
//                 </label>
//                 <textarea
//                   rows={4}
//                   value={formData.notes}
//                   onChange={e => set('notes')(e.target.value)}
//                   placeholder="أي اشتراطات تخص جدول التوريد أو الموقع الجغرافي للتسليم داخل الحرم الجامعي..."
//                   style={{ height: '200px' }}
//                   className={textareaCls}
//                 />
//               </div>
//             </div>

//             {/* ══════════════ FOOTER ══════════════ */}
//             <div className="shrink-0 border-t border-slate-100 dark:border-slate-800 px-6 py-4">
//               {/* على الموبايل: عمودي (إرسال أعلى) | على الشاشات الكبيرة: أفقي في جهة اليسار (end) */}
//               <form onSubmit={handleSubmit}>
//                 <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
//                   {/* إلغاء */}
//                   <button
//                     type="button"
//                     onClick={onClose}
//                     className="
//                       w-full sm:w-auto h-12 px-8 rounded-full
//                       border border-[#0066F0] text-[#0066F0] font-bold text-sm
//                       hover:bg-sky-50 dark:hover:bg-sky-950/30
//                       active:scale-[0.98] transition-all cursor-pointer
//                       dark:border-sky-400 dark:text-sky-400
//                     "
//                   >
//                     إلغاء
//                   </button>

//                   {/* إرسال طلب الإعتماد */}
//                   <button
//                     type="submit"
//                     className="
//                       w-full sm:w-[297px] h-12 rounded-full
//                       bg-[linear-gradient(to_left,#01B0F5,#0066F0)]
//                       text-black font-bold text-[15px]
//                       hover:brightness-105 hover:shadow-lg hover:shadow-sky-500/30
//                       active:scale-[0.98] transition-all cursor-pointer
//                       whitespace-nowrap
//                     "
//                   >
//                     إرسال طلب الإعتماد
//                   </button>
//                 </div>
//               </form>
//             </div>

//           </div>{/* end card */}
//         </div>{/* end container */}
//       </div>{/* end overlay */}
//     </div>,
//     document.body
//   )
// }








// 
import { useState, useEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'

/* ─────────────────────────── أيقونات SVG داخلية ─────────────────────────── */

/* زر الإغلاق: علامة X داخل دائرة (كما في التصميم) */
const CloseCircleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}
    strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M15 9l-6 6M9 9l6 6" />
  </svg>
)

/* سهمان أعلى/أسفل لحقل الكمية */
const ChevronUpDownIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
    strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
    <path d="M7 9l5-5 5 5" />
    <path d="M7 15l5 5 5-5" />
  </svg>
)

const ChevronDownIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
    strokeLinecap="round" strokeLinejoin="round" className={`w-4 h-4 ${className}`} aria-hidden="true">
    <path d="M6 9l6 6 6-6" />
  </svg>
)

/* أيقونة الرفع: ملف بزاوية مطوية وسهم للأعلى داخل دائرة (كما في التصميم) */
const UploadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
    strokeLinecap="round" strokeLinejoin="round"
    className="w-6 h-6 text-[#545f73] dark:text-slate-300" aria-hidden="true">
    {/* جسم الملف بزوايا دائرية وزاوية مطوية أعلى اليمين */}
    <path d="M14.5 2.75H8A5.25 5.25 0 0 0 2.75 8v8A5.25 5.25 0 0 0 8 21.25h8A5.25 5.25 0 0 0 21.25 16V9.5" />
    <path d="M14.5 2.75v2.5a4.25 4.25 0 0 0 4.25 4.25h2.5" />
    <path d="M14.5 2.75l6.75 6.75" />
    {/* سهم للأعلى داخل دائرة */}
    <circle cx="12" cy="13.5" r="4" />
    <path d="M12 15.5v-4M10.25 13.25 12 11.5l1.75 1.75" />
  </svg>
)

const TrashIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
    strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14H6L5 6" />
    <path d="M10 11v6M14 11v6" />
    <path d="M9 6V4h6v2" />
  </svg>
)

/* ─────────────────────────── بيانات القوائم ─────────────────────────── */

const DEPARTMENTS = [
  'كلية الهندسة',
  'كلية العلوم',
  'كلية الطب',
  'كلية التربية',
  'عمادة تقنية المعلومات',
  'عمادة شؤون الطلبة',
  'الإدارة المالية',
  'إدارة الخدمات العامة',
]

const CATEGORIES = [
  'جهاز متكامل',
  'ملحقات حاسوب',
  'أثاث مكتبي',
  'برمجيات وتراخيص',
  'قرطاسية',
]

const UNITS = [
  'جهاز متكامل',
  'جهاز',
  'طقم',
  'قطعة',
  'علبة',
  'رخصة',
]

const INITIAL_ITEMS = [
  { id: 1, name: 'جهاز حاسوب مكتبي', quantity: '25 جهاز', unit: '' },
  { id: 2, name: 'لوحة مفاتيح وفأرة لاسلكية', quantity: '25 طقم', unit: '' },
]

/* ─────────────────────────── مكوّن القائمة المنسدلة المخصّصة ─────────────────────────── */

function CustomSelect({ value, onChange, options, placeholder, id }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  const selected = options.find(o => o === value)

  return (
    <div ref={ref} className="relative" id={id}>
      <button
        type="button"
        onClick={() => setOpen(p => !p)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`
          w-full h-12 flex items-center justify-between gap-2
          ps-4 pe-4 rounded-full border text-sm text-right
          transition-all duration-150 cursor-pointer
          ${open
            ? 'border-[#00B4F0] ring-4 ring-sky-100 bg-white dark:bg-[#0f243a]'
            : 'border-[#d4d4d4] bg-[#f4f4f4] dark:bg-[#0f1f30] dark:border-slate-700'}
          ${value ? 'text-slate-800 dark:text-slate-100' : 'text-[#828282]'}
        `}
      >
        <span className="flex-1 text-start truncate">{selected || placeholder}</span>
        <ChevronDownIcon className={`shrink-0 transition-transform duration-200 text-[#828282] ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute top-[calc(100%+6px)] end-0 start-0 z-[200] bg-white dark:bg-[#0b1b2d] border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl overflow-hidden py-1"
        >
          {options.map(opt => (
            <li
              key={opt}
              role="option"
              aria-selected={value === opt}
              onClick={() => { onChange(opt); setOpen(false) }}
              className={`
                px-4 py-2.5 text-sm text-right cursor-pointer transition-colors
                ${value === opt
                  ? 'bg-sky-50 text-[#0066F0] font-bold dark:bg-sky-900/30 dark:text-sky-300'
                  : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50'}
              `}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

/* ─────────────────────────── أنماط موحّدة ─────────────────────────── */

const inputCls = `
  w-full h-12 rounded-full border border-[#d4d4d4] bg-[#f4f4f4]
  ps-4 pe-4 text-sm text-slate-800 placeholder-[#828282]
  focus:outline-none focus:border-[#00B4F0] focus:ring-4 focus:ring-sky-100 focus:bg-white
  dark:bg-[#0f1f30] dark:border-slate-700 dark:text-slate-100 dark:focus:bg-[#0f243a]
  transition-all duration-150
`

const textareaCls = `
  w-full rounded-3xl border border-[#d4d4d4] bg-[#f4f4f4]
  p-4 text-sm text-slate-800 placeholder-[#828282] resize-none leading-relaxed
  focus:outline-none focus:border-[#00B4F0] focus:ring-4 focus:ring-sky-100 focus:bg-white
  dark:bg-[#0f1f30] dark:border-slate-700 dark:text-slate-100 dark:focus:bg-[#0f243a]
  transition-all duration-150
`

const labelCls = 'block text-[15px] font-bold text-slate-900 dark:text-slate-100 mb-2'

const RequiredStar = () => <span className="text-[#E5262A] me-0.5">*</span>

/* ─────────────────────────── الحقل الرقمي مع أزرار ─────────────────────────── */

function NumberField({ value, onChange }) {
  const inc = () => onChange(String(Math.max(0, Number(value) + 1)))
  const dec = () => onChange(String(Math.max(0, Number(value) - 1)))

  return (
    <div className="relative w-full">
      <input
        type="number"
        min="0"
        value={value}
        onChange={e => onChange(String(Math.max(0, Number(e.target.value))))}
        className={`${inputCls} pe-10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
      />
      {/* أيقونة أعلى/أسفل (كما في التصميم) — النصف العلوي يزيد والسفلي ينقص */}
      <div className="absolute end-3 top-1/2 -translate-y-1/2 w-6 h-7 text-slate-700 dark:text-slate-200">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <ChevronUpDownIcon />
        </div>
        <button
          type="button"
          tabIndex={-1}
          onClick={inc}
          className="absolute top-0 inset-x-0 h-1/2 rounded-t cursor-pointer hover:bg-slate-200/60 dark:hover:bg-slate-700/60"
          aria-label="زيادة"
        />
        <button
          type="button"
          tabIndex={-1}
          onClick={dec}
          className="absolute bottom-0 inset-x-0 h-1/2 rounded-b cursor-pointer hover:bg-slate-200/60 dark:hover:bg-slate-700/60"
          aria-label="نقصان"
        />
      </div>
    </div>
  )
}

/* ─────────────────────────── منطقة رفع الملفات ─────────────────────────── */

const MAX_FILE_SIZE = 25 * 1024 * 1024
const ACCEPTED_TYPES = ['.pdf', '.doc', '.docx', '.xls', '.xlsx']
const ACCEPT_MIME = 'application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'

function UploadZone({ files, setFiles }) {
  const [dragging, setDragging] = useState(false)
  const inputRef = useRef(null)

  const addFiles = useCallback((incoming) => {
    const valid = Array.from(incoming).filter(f => {
      const ext = '.' + f.name.split('.').pop().toLowerCase()
      return ACCEPTED_TYPES.includes(ext) && f.size <= MAX_FILE_SIZE
    })
    setFiles(prev => {
      const names = new Set(prev.map(f => f.name))
      return [...prev, ...valid.filter(f => !names.has(f.name))]
    })
  }, [setFiles])

  const onDrop = (e) => {
    e.preventDefault()
    setDragging(false)
    addFiles(e.dataTransfer.files)
  }

  const removeFile = (name) => setFiles(prev => prev.filter(f => f.name !== name))

  return (
    <div>
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={e => { e.preventDefault(); setDragging(true) }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        className={`
          flex flex-col items-center justify-center gap-2
          h-[132px] rounded-2xl border-2 border-dashed border-[#2AA7F0]
          cursor-pointer transition-colors duration-150
          ${dragging ? 'bg-sky-100 dark:bg-sky-900/30' : 'bg-[#E6F4FD] hover:bg-sky-100 dark:bg-sky-950/20 dark:hover:bg-sky-900/25'}
        `}
      >
        <UploadIcon />
        <p className="text-sm font-bold text-slate-800 dark:text-slate-100">
          اسحب الملفات هنا أو اضغط لإختيار ملف
        </p>
        <p className="text-[11px] text-[#828282]">
          الأنواع المدعومة: PDF, Word, Excel &nbsp; بحد أقصى 25 ميجابايت للملف الواحد.
        </p>
        <input
          ref={inputRef}
          type="file"
          multiple
          accept={ACCEPT_MIME}
          className="hidden"
          onChange={e => addFiles(e.target.files)}
        />
      </div>

      {/* قائمة الملفات المرفوعة */}
      {files.length > 0 && (
        <ul className="mt-2.5 space-y-1.5">
          {files.map(f => (
            <li
              key={f.name}
              className="flex items-center justify-between gap-2 px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
            >
              <span className="text-xs text-slate-700 dark:text-slate-200 truncate flex-1 text-start">{f.name}</span>
              <button
                type="button"
                onClick={() => removeFile(f.name)}
                className="shrink-0 text-slate-400 hover:text-rose-500 transition-colors cursor-pointer"
                aria-label={`حذف ${f.name}`}
              >
                <TrashIcon />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

/* ─────────────────────────── المكوّن الرئيسي ─────────────────────────── */

const TITLE_ID = 'new-need-modal-title'

export default function NewNeedRequestModal({ isOpen, onClose, onSubmit }) {
  /* ── State ── */
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    category: '',
    quantity: '0',
    unit: '',
    estimatedCost: '',
    justification: '',
    notes: '',
  })
  const [files, setFiles] = useState([])
  const [visible, setVisible] = useState(false)   // للأنيمايشن
  const overlayRef = useRef(null)
  const firstFocusRef = useRef(null)

  /* ── أنيمايشن الدخول / الخروج ── */
  useEffect(() => {
    if (isOpen) {
      // ندير الـ display أولاً ثم نطلق الأنيمايشن
      requestAnimationFrame(() => setVisible(true))
    } else {
      setVisible(false)
    }
  }, [isOpen])

  /* ── منع تمرير الـ body ── */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  /* ── إغلاق بـ Escape ── */
  useEffect(() => {
    if (!isOpen) return
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  /* ── تركيز أول عنصر عند الفتح ── */
  useEffect(() => {
    if (isOpen && visible) {
      setTimeout(() => firstFocusRef.current?.focus(), 50)
    }
  }, [isOpen, visible])

  /* ── إعادة ضبط النموذج عند الإغلاق ── */
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setFormData({ title: '', department: '', category: '', quantity: '0', unit: '', estimatedCost: '', justification: '', notes: '' })
        setFiles([])
      }, 250)
    }
  }, [isOpen])

  const set = (key) => (val) => setFormData(prev => ({ ...prev, [key]: val }))

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit?.({ ...formData, files })
    onClose()
  }

  if (!isOpen && !visible) return null

  /* ─────────────── JSX ─────────────── */
  return createPortal(
    <div
      dir="rtl"
      style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
      role="dialog"
      aria-modal="true"
      aria-labelledby={TITLE_ID}
    >
      {/* ── Overlay ── */}
      <div
        ref={overlayRef}
        onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
        className={`
          fixed inset-0 z-[9000] flex items-center justify-center p-3 sm:p-5
          bg-slate-900/40 backdrop-blur-sm
          transition-opacity duration-200
          ${visible ? 'opacity-100' : 'opacity-0'}
        `}
      >
        {/* ── Scrollable container ── */}
        <div className="w-full max-w-[860px] flex flex-col max-h-[90vh]">
          <div
            className={`
              relative flex flex-col
              bg-white dark:bg-[#0b1b2d]
              rounded-3xl shadow-2xl shadow-slate-900/10
              overflow-hidden
              transition-all duration-200
              ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
            `}
          >

            {/* ══════════════ HEADER ══════════════ */}
            <div className="shrink-0 flex items-center justify-between gap-4 px-6 py-4 bg-[#E6F4FD] border-b border-sky-100 dark:bg-sky-950/30 dark:border-sky-900/40">
              {/* يمين: النص (بدون أيقونة كما في التصميم) */}
              <div className="flex items-center gap-3 min-w-0">
                <div className="min-w-0">
                  <h2
                    id={TITLE_ID}
                    className="text-[18px] font-black text-slate-900 dark:text-white leading-tight"
                  >
                    إنشاء طلب احتياج مشتريات جديد
                  </h2>
                  <p className="text-sm mt-0.5 text-[#545f73] dark:text-slate-400 leading-tight">
                    منظومة إبرام - نموذج طلب التعميد والمنافسات الحكومية
                  </p>
                </div>
              </div>

              {/* يسار: زر الإغلاق */}
              <button
                type="button"
                onClick={onClose}
                aria-label="إغلاق"
                className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-slate-900 dark:text-slate-200 hover:bg-white/70 dark:hover:bg-slate-800 transition-all cursor-pointer"
              >
                <CloseCircleIcon />
              </button>
            </div>

            {/* ══════════════ BODY (قابل للتمرير) ══════════════ */}
            <div className="flex-1 overflow-y-auto px-6 py-7 space-y-7">

              {/* 1. عنوان الاحتياج */}
              <div>
                <label className={labelCls}>
                  عنوان الاحتياج والمواصفة الفنية <RequiredStar />
                </label>
                <input
                  ref={firstFocusRef}
                  type="text"
                  value={formData.title}
                  onChange={e => set('title')(e.target.value)}
                  placeholder="مثال: ترقية تجهيزات مركز الحوسبة فائقة الأداء HPC"
                  className={inputCls}
                />
              </div>

              {/* 2. الجهة الطالبة */}
              <div>
                <label className={labelCls} htmlFor="dept-select">
                  الجهة الطالبة (الكلية / العمادة / الإدارة) <RequiredStar />
                </label>
                <CustomSelect
                  id="dept-select"
                  value={formData.department}
                  onChange={set('department')}
                  options={DEPARTMENTS}
                  placeholder="اختر الجهة الطالبة"
                />
              </div>

              {/* 3. الصنف + الكمية + وحدة القياس */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* الصنف */}
                <div>
                  <label className={labelCls}>الصنف <RequiredStar /></label>
                  <CustomSelect
                    value={formData.category}
                    onChange={set('category')}
                    options={CATEGORIES}
                    placeholder="جهاز متكامل"
                  />
                </div>

                {/* الكمية المطلوبة */}
                <div>
                  <label className={labelCls}>الكمية المطلوبة <RequiredStar /></label>
                  <NumberField value={formData.quantity} onChange={set('quantity')} />
                </div>

                {/* وحدة القياس */}
                <div>
                  <label className={labelCls}>وحدة القياس <RequiredStar /></label>
                  <CustomSelect
                    value={formData.unit}
                    onChange={set('unit')}
                    options={UNITS}
                    placeholder="جهاز متكامل"
                  />
                </div>
              </div>

              {/* 4. التكلفة التقديرية */}
              <div>
                <label className={labelCls}>
                  التكلفة التقديرية المتوقعة(إختياري) <RequiredStar />
                </label>
                <input
                  type="text"
                  value={formData.estimatedCost}
                  onChange={e => set('estimatedCost')(e.target.value)}
                  placeholder="مثال: ترقية تجهيزات مركز الحوسبة فائقة الأداء HPC"
                  className={inputCls}
                />
              </div>

              {/* 5. وصف الاحتياج */}
              <div>
                <label className={labelCls}>
                  وصف الاحتياج والمبررات التشغيلية <RequiredStar />
                </label>
                <textarea
                  rows={6}
                  value={formData.justification}
                  onChange={e => set('justification')(e.target.value)}
                  placeholder="شرح موجز لأسباب طلب الإحتياج ومردوده الأكاديمي أو التقني على أعمال الكلية/العمادة..."
                  style={{ height: '200px' }}
                  className={textareaCls}
                />
              </div>

              {/* 6. درجة الأولوية — جدول */}
              <div>
                <label className={labelCls}>
                  درجة الأولوية والأهمية التشغيلية <RequiredStar />
                </label>
                <div className="rounded-3xl overflow-hidden border border-[#d4d4d4] dark:border-slate-700 overflow-x-auto">
                  <table className="w-full text-right text-sm min-w-[480px]">
                    <thead>
                      <tr
                        className="bg-[#f4f4f4] dark:bg-[#0f243a] text-slate-700 dark:text-slate-300 font-bold"
                        style={{ height: '72px' }}
                      >
                        <th className="px-5 text-center border-e border-[#d4d4d4] dark:border-slate-700 w-16">م</th>
                        <th className="px-5 text-center border-e border-[#d4d4d4] dark:border-slate-700">اسم الصنف</th>
                        <th className="px-5 text-center border-e border-[#d4d4d4] dark:border-slate-700">الكمية</th>
                        <th className="px-5 text-center">وحدة القياس</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#d4d4d4] dark:divide-slate-700 bg-white dark:bg-[#0b1b2d]">
                      {INITIAL_ITEMS.map(item => (
                        <tr
                          key={item.id}
                          className="text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
                          style={{ height: '72px' }}
                        >
                          <td className="px-5 text-center font-bold border-e border-[#d4d4d4] dark:border-slate-700">{item.id}</td>
                          <td className="px-5 text-center font-medium border-e border-[#d4d4d4] dark:border-slate-700">{item.name}</td>
                          <td className="px-5 text-center border-e border-[#d4d4d4] dark:border-slate-700">{item.quantity}</td>
                          <td className="px-5 text-center text-slate-400 dark:text-slate-500">{item.unit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 7. منطقة رفع الملفات */}
              <div>
                <label className={labelCls}>
                  المرفقات والمسوغات الفنية (كراسة المواصفات، عروض الأسعار) <RequiredStar />
                </label>
                <UploadZone files={files} setFiles={setFiles} />
              </div>

              {/* 8. توجيهات وملاحظات */}
              <div>
                <label className={labelCls}>
                  توجيهات وملاحظات إضافية لسكرتارية لجنة المنافسات <RequiredStar />
                </label>
                <textarea
                  rows={4}
                  value={formData.notes}
                  onChange={e => set('notes')(e.target.value)}
                  placeholder="أي اشتراطات تخص جدول التوريد أو الموقع الجغرافي للتسليم داخل الحرم الجامعي..."
                  style={{ height: '200px' }}
                  className={textareaCls}
                />
              </div>
            </div>

            {/* ══════════════ FOOTER ══════════════ */}
            <div className="shrink-0 border-t border-slate-100 dark:border-slate-800 px-6 py-4">
              {/* على الموبايل: عمودي (إرسال أعلى) | على الشاشات الكبيرة: أفقي في جهة اليسار (end) */}
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
                  {/* إلغاء */}
                  <button
                    type="button"
                    onClick={onClose}
                    className="
                      w-full sm:w-auto h-12 px-8 rounded-full
                      border border-[#0066F0] text-[#0066F0] font-bold text-sm
                      hover:bg-sky-50 dark:hover:bg-sky-950/30
                      active:scale-[0.98] transition-all cursor-pointer
                      dark:border-sky-400 dark:text-sky-400
                    "
                  >
                    إلغاء
                  </button>

                  {/* إرسال طلب الإعتماد */}
                  <button
                    type="submit"
                    className="
                      w-full sm:w-[297px] h-12 rounded-full
                      bg-[linear-gradient(to_left,#01B0F5,#0066F0)]
                      text-black font-bold text-[15px]
                      hover:brightness-105 hover:shadow-lg hover:shadow-sky-500/30
                      active:scale-[0.98] transition-all cursor-pointer
                      whitespace-nowrap
                    "
                  >
                    إرسال طلب الإعتماد
                  </button>
                </div>
              </form>
            </div>

          </div>{/* end card */}
        </div>{/* end container */}
      </div>{/* end overlay */}
    </div>,
    document.body
  )
}
 