import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
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
 
// الرئيسية: 4 مربعات مفرغة
const HomeIcon = (props) => (
  <svg {...strokeProps} {...props}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
  </svg>
)
 
// طلباتي: ورقتان متراكبتان (مملوءتان)
const FileIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M9 2.5h5.6a2 2 0 0 1 1.4.6l3.4 3.4a2 2 0 0 1 .6 1.4V15a2 2 0 0 1-2 2h-.5V9.2L13.2 4H9a1.5 1.5 0 0 0-1.5 1.5V6H6V4.5A2 2 0 0 1 8 2.5h1z" />
    <path d="M4 8a2 2 0 0 1 2-2h6l4 4v9.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8z" />
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
 
// الموردين: شاحنة
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
 
// أيقونة ملف مملوءة (للمرفقات)
const FileFilledIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 4a2 2 0 0 1 2-2h8.586a2 2 0 0 1 1.414.586l4.414 4.414A2 2 0 0 1 21 8.414V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm10.5-.5v5a1 1 0 0 0 1 1h5l-6-6z"
    />
  </svg>
)
 
// أيقونة تحميل
const DownloadIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    {/* السهم */}
    <path d="M10.5 3h3v6H17l-5 5-5-5h3.5V3z" />
    {/* الحامل السفلي */}
    <path d="M4 14h2v4h12v-4h2v6H4v-6z" />
  </svg>
)
 
const navItems = [
  { id: 'home', label: 'الرئيسية', Icon: HomeIcon, path: '/dashboard' },
  { id: 'my-orders', label: 'طلباتي', Icon: FileIcon, path: '/my-orders' },
  { id: 'new-order', label: 'طلب شراء جديد', Icon: FilePlusIcon, path: '/new-order' },
  { id: 'suppliers', label: 'الموردين', Icon: TruckIcon, path: '/dashboard' },
]
 
// تدرّج الأزرار الرئيسية: #01B0F5 → #007DEA
const BRAND_GRADIENT = 'bg-[linear-gradient(to_left,#01B0F5,#007DEA)]'
 
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
        <nav className="space-y-2">
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
                style={{ color: isActive ? '#000' : undefined }}
                className={`w-full h-[clamp(40px,5.2vh,56px)] flex items-center gap-3 px-5 2xl:px-6 rounded-lg text-[length:clamp(16px,2.04vh,22px)] cursor-pointer transition-all ${
                  isActive
                    ? 'bg-[#00B4F0] text-[#000000] font-bold shadow-sm'
                    : 'bg-[#f5f5f5] dark:bg-[#0f243a] text-[#000000] dark:text-slate-200 hover:bg-[#ececec] dark:hover:bg-[#142e4a] font-medium'
                }`}
              >
                <Icon className="w-[1em] h-[1em] shrink-0" />
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
 
/* ==================== صفحة تفاصيل الطلب (خزائن ملفات حديدية - أُرجع للتعديل) ==================== */
 
export default function EditOrder() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState('data')
 
  // بيانات الطلب
  const orderId = id || 'PR-2026-0009'
  const title = 'خزائن ملفات حديدية'
  const department = 'كلية الهندسة'
  const submittedBy = 'م. خالد الزهراني'
  const statusLabel = 'أُرجع للتعديل'
  const statusDotColor = '#EF4444'
 
  // كروت الحالة الثلاثة
  const statusCards = [
    {
      title: 'أين الطلب الآن',
      text: 'أُرجع إلى الإدارة الطالبة',
      icon: 'fa-location-dot',
    },
    {
      title: 'بانتظار',
      text: 'م. خالد الزهراني',
      icon: 'fa-circle-user',
    },
    {
      title: 'الخطوة التالية',
      text: 'تعديل الطلب حسب الملاحظات ثم إعادة إرساله',
      icon: 'fa-circle-arrow-left',
    },
  ]
 
  // التبويبات
  const tabs = [
    { id: 'data', label: 'البيانات', count: null },
    { id: 'attachments', label: 'المرفقات', count: 1 },
    { id: 'history', label: 'سجل الإجراءات', count: 1 },
  ]
 
  // مراحل الطلب
  const steps = [
    { num: 1, label: 'تقديم الطلب', owner: 'تم تقديم الطلب', isCompleted: true },
    { num: 2, label: 'الاعتماد', owner: 'الإدارة العليا', isActive: true },
    { num: 3, label: 'طرح العروض', owner: 'قسم المشتريات' },
    { num: 4, label: 'فتح المظاريف', owner: 'لجنة فتح المظاريف' },
    { num: 5, label: 'المحضر والتوقيع', owner: 'لجنة فتح المظاريف' },
  ]
  const completedStep = steps[0]
  const otherSteps = steps.slice(1)
 
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
      size: '1.2 م.ب',
      uploader: 'م. خالد الزهراني',
      date: '25 سبتمبر 2026',
      url: '#',
    },
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
              <Link
                to="/dashboard"
                className="font-bold text-[#000000] dark:text-slate-200 hover:text-slate-700 dark:hover:text-white transition-colors"
              >
                لوحة التحكم والمتابعة
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
        <main className="w-full flex-1 px-4 sm:px-6 lg:pl-20 lg:pr-6 pt-[60px] pb-16 space-y-7 max-w-[1500px]">
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
 
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-4">
              <div>
                {/* الشارات: رقم الطلب + الحالة */}
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex items-center h-[26px] px-3.5 rounded-full text-xs sm:text-sm font-semibold bg-[#EDEDED] dark:bg-slate-800 text-[#333333] dark:text-slate-300">
                    {orderId}
                  </span>
                  <span className="inline-flex items-center gap-2 h-[26px] px-3.5 rounded-full text-xs sm:text-sm font-semibold bg-[#FDECEC] dark:bg-rose-950/30 text-[#333333] dark:text-slate-300">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: statusDotColor }}
                    ></span>
                    <span>{statusLabel}</span>
                  </span>
                </div>
 
                {/* عنوان الطلب */}
                <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#000000] dark:text-white">
                  {title}
                </h1>
                <p className="mt-2 text-sm sm:text-[15px] text-[#333333] dark:text-slate-400 font-medium">
                  {department} · {submittedBy}
                </p>
              </div>
 
              {/* زر الإجراء: إكمال وإرسال */}
              <div>
                <button
                  type="button"
                  onClick={() => navigate('/new-order')}
                  style={{ color: '#000' }}
                  className={`h-12 w-full sm:w-[273px] rounded-full ${BRAND_GRADIENT} text-[#000000] font-semibold text-sm sm:text-[15px] hover:brightness-95 active:scale-[0.98] transition-all shadow-[0_6px_16px_rgba(0,132,244,0.25)] cursor-pointer`}
                >
                  إكمال وإرسال
                </button>
              </div>
            </div>
          </div>
 
          {/* ==================== كروت الحالة الثلاثة ==================== */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 !mt-9">
            {statusCards.map((card) => (
              <div
                key={card.title}
                className="bg-white dark:bg-[#0b1b2d] rounded-2xl h-[78px] px-7 flex items-center gap-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
              >
                <i
                  className={`fa-solid ${card.icon} text-xl text-[#000000] dark:text-slate-100 shrink-0`}
                ></i>
                <div className="text-right min-w-0">
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
 
          {/* ==================== مربع تنبيه الإرجاع للتعديل (البرتقالي) ==================== */}
          <div className="rounded-2xl border border-[#F5A06A] bg-[#FEF3EC] dark:bg-amber-950/20 dark:border-amber-500/50 px-7 py-5 flex items-center gap-4">
            <div className="w-6 h-6 rounded-full bg-[#F97316] text-white flex items-center justify-center font-bold text-sm shrink-0">
              !
            </div>
            <div className="text-right min-w-0">
              <h4 className="text-[16px] font-bold text-[#000000] dark:text-amber-200">
                أُرجع للتعديل بواسطة د. عبد الله الحربي – 21 أكتوبر 2026
              </h4>
              <p className="text-[13px] sm:text-sm text-[#4B5563] dark:text-slate-300 mt-1.5">
                يرجى تحديد المواصفات الفنية بدقة (المعالج، الذاكرة، التخزين، حجم الشاشة) وإرفاق قائمة بأسماء أعضاء هيئة التدريس المستفيدين.
              </p>
            </div>
          </div>
 
          {/* ==================== مراحل الطلب (Stepper) ==================== */}
          <div className="bg-white dark:bg-[#0b1b2d] rounded-[24px] px-6 pt-6 pb-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
            <h2 className="text-base font-bold text-[#000000] dark:text-white text-right pb-3 border-b border-[#E5E5E5] dark:border-slate-800">
              مراحل الطلب
            </h2>
 
            <div className="mt-6 overflow-x-auto">
              <div className="flex items-start gap-4 min-w-[900px]">
                {/* الخطوة 1: بطاقة خضراء مع علامة صح */}
                <div className="w-[336px] shrink-0 bg-[#EAFBF3] dark:bg-emerald-950/30 border border-[#1FBF8F] dark:border-emerald-700/60 rounded-[20px] px-6 py-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0B4F36] text-white flex items-center justify-center text-base shrink-0">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <div className="text-right">
                    <p className="text-[13px] font-semibold text-emerald-800 dark:text-emerald-300">
                      الخطوة {completedStep.num}
                    </p>
                    <h4 className="text-[16px] font-bold text-[#000000] dark:text-white mt-0.5">
                      {completedStep.label}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 whitespace-nowrap">
                      {completedStep.owner}
                    </p>
                  </div>
                </div>
 
                {/* الخطوات 2 → 5 */}
                {otherSteps.map((step, idx) => {
                  const isLast = idx === otherSteps.length - 1
                  return (
                    <div key={step.num} className="flex-1 min-w-0 text-right">
                      <div className="flex items-center">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 text-[#000000] ${
                            step.isActive
                              ? 'bg-[#00B4F0] shadow-[0_0_0_3px_#CDEFFC] dark:shadow-[0_0_0_3px_#0c3a55]'
                              : 'bg-[#E6F4FD] dark:bg-[#0c2438] dark:text-slate-200'
                          }`}
                        >
                          {step.num}
                        </div>
                        {!isLast && (
                          <div
                            className={`flex-1 h-[3px] mx-3 rounded-full ${
                              step.isActive
                                ? 'bg-[#00B4F0]'
                                : 'bg-[#E3EEF8] dark:bg-slate-700'
                            }`}
                          ></div>
                        )}
                      </div>
 
                      <div className="mt-3">
                        <p className="text-[13px] text-slate-500 dark:text-slate-400">
                          الخطوة {step.num}
                        </p>
                        <h4 className="text-[17px] font-bold text-[#000000] dark:text-white mt-0.5 whitespace-nowrap">
                          {step.label}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 whitespace-nowrap">
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
          <div className="bg-white dark:bg-[#0b1b2d] rounded-[24px] px-6 pt-5 pb-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
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
                        ? 'text-[#007DEA] dark:text-[#01B0F5]'
                        : 'text-[#000000] dark:text-slate-200 hover:text-[#007DEA]'
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
              <div className="flex flex-col lg:flex-row gap-6 items-start mt-6">
                {/* الجزء الأيمن: المبرر + جدول الأصناف والخدمات */}
                <div className="flex-1 w-full min-w-0 text-right lg:pr-[11px]">
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
 
                      {/* إجمالي التكلفة التقديرية: العنوان يمين والقيمة يسار */}
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
 
                {/* الجزء الأيسر: بطاقة بيانات الطلب التفصيلية (العنوان يمين والقيمة يسار) */}
                <div className="w-full lg:w-[36%] lg:max-w-[512px] shrink-0 bg-[#E8F4FD] dark:bg-[#0c2438] rounded-[24px] px-6 py-6 text-right">
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
                      <span className="font-bold">{row.value}</span>
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
                    className="flex items-center justify-between gap-4 px-5 py-4 rounded-xl bg-[#E8F4FD] dark:bg-[#0c2438]"
                  >
                    {/* اليمين: أيقونة الملف + الاسم + التفاصيل */}
                    <div className="flex items-center gap-3 min-w-0">
                      <FileFilledIcon className="w-5 h-5 shrink-0 text-[#007DEA] dark:text-[#01B0F5]" />
                      <div className="text-right min-w-0">
                        <h4 className="text-[15px] font-bold text-[#000000] dark:text-white truncate">
                          {file.name}
                        </h4>
                        <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                          {file.size} · أرفقه {file.uploader} · {file.date}
                        </p>
                      </div>
                    </div>
 
                    {/* اليسار: زر التحميل */}
                    <a
                      href={file.url}
                      download
                      aria-label={`تحميل ${file.name}`}
                      className="shrink-0 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors"
                    >
                      <DownloadIcon className="w-5 h-5" />
                    </a>
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
