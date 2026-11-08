
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logo, userHani, shieldIcon } from '../assets/images'
import LanguageMenu from '../components/LanguageMenu'
import NotificationMenu from '../components/NotificationMenu'
 
/* ==================== ثوابت التصميم ==================== */
 
// تدرّج الأزرار الرئيسية (Linear Gradient): #01B0F5 → #007DEA
// (لو بدك تعكس الاتجاه بدّل ترتيب اللونين)
const BRAND_GRADIENT = 'bg-[linear-gradient(to_left,#01B0F5,#007DEA)]'
 
// الشكل العام لشارات الحالة
const BADGE_BASE =
  'inline-flex items-center h-[26px] px-2.5 rounded-full text-[13px] font-medium whitespace-nowrap'
 
// هل يوجد إشعارات غير مقروءة؟ (التصميم الحالي بدون النقطة الحمراء)
const hasUnreadNotifications = false
 
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
 
// الرئيسية
const HomeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <rect x="3" y="3" width="8" height="10" rx="1.5" />
    <rect x="3" y="15" width="8" height="6" rx="1.5" />
    <rect x="13" y="3" width="8" height="6" rx="1.5" />
    <rect x="13" y="11" width="8" height="10" rx="1.5" />
  </svg>
)
 
// طلباتي
const FileIcon = (props) => (
  <svg {...strokeProps} {...props}>
    <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5z" />
    <path d="M14 2v5h5" />
  </svg>
)
 
// طلب شراء جديد
const FilePlusIcon = (props) => (
  <svg {...strokeProps} {...props}>
    <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5z" />
    <path d="M14 2v5h5" />
    <path d="M12 11v6M9 14h6" />
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
 
// البحث (خطّ رفيع)
const SearchIcon = (props) => (
  <svg {...strokeProps} strokeWidth={1.5} {...props}>
    <circle cx="11" cy="11" r="7.5" />
    <path d="m20.5 20.5-4-4" />
  </svg>
)
 
const navItems = [
  { id: 'home', label: 'الرئيسية', Icon: HomeIcon },
  { id: 'my-orders', label: 'طلباتي', Icon: FileIcon },
  { id: 'new-order', label: 'طلب شراء جديد', Icon: FilePlusIcon },
  { id: 'suppliers', label: 'الموردين', Icon: SupplierPersonIcon },
]
 
/* ==================== محتوى القائمة الجانبية (مشترك بين الديسكتوب والموبايل) ==================== */
 
function SidebarContent({ activeTab, setActiveTab, onNavigate }) {
  const navigate = useNavigate()
  return (
    <div className="min-h-full flex flex-col">
      {/* الجزء العلوي */}
      <div className="px-4 pt-[clamp(16px,3vh,32px)]">
        {/* الشعار + اسم المنصة */}
        <div className="px-2">
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
        <p className="my-[clamp(12px,4vh,44px)] px-2 text-[length:clamp(13px,1.4vh,15px)] text-slate-500 dark:text-slate-400">
          القوائم التشغيلية
        </p>
 
        {/* أزرار القائمة */}
        <nav className="space-y-2">
          {navItems.map(({ id, label, Icon }) => {
            const isActive = activeTab === id
            return (
              <button
                key={id}
                onClick={() => {
                  if (id === 'new-order') {
                    navigate('/new-order')
                    onNavigate?.()
                    return
                  }
                  if (id === 'my-orders') {
                    navigate('/my-orders')
                    onNavigate?.()
                    return
                  }
                  if (id === 'suppliers') {
                    navigate('/suppliers')
                    onNavigate?.()
                    return
                  }
                  setActiveTab(id)
                  onNavigate?.()
                }}
                className={`w-full h-[clamp(40px,5.2vh,56px)] flex items-center gap-3 px-5 2xl:px-6 rounded-lg text-[length:clamp(16px,2.04vh,22px)] font-medium text-right cursor-pointer transition-all ${
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
        {/* بطاقة: النظام متصل وآمن (بعرض القائمة كامل) */}
        <div className="flex items-center gap-2 px-6 2xl:px-10 py-[clamp(10px,1.5vh,16px)] bg-[#e9f4fb] dark:bg-[#0e2740]">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-700 flex-shrink-0 animate-pulse"></span>
          <div className="flex flex-col text-right flex-1">
            <span className="whitespace-nowrap text-[15px] 2xl:text-[17px] font-bold text-slate-900 dark:text-white">
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
              <h4 className="text-[15px] 2xl:text-[17px] font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
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
 
/* ==================== الصفحة ==================== */
 
export default function Dashboard() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('home')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedStatusFilter, setSelectedStatusFilter] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isNewOrderModalOpen, setIsNewOrderModalOpen] = useState(false)
  const [notificationOpen, setNotificationOpen] = useState(false)
 
  // ملخص الطلبات حسب الحالة (العمود الأيسر)
  const statusSummary = [
    { id: 'draft', label: 'مسودة', count: 1, dotColor: 'bg-[#4b5563]', activeBar: 'bg-[#4b5563]', filled: true },
    { id: 'pending', label: 'بإنتظار الاعتماد', count: 1, dotColor: 'bg-[#f97316]', activeBar: 'bg-[#f97316]', filled: true },
    { id: 'bidding', label: 'قيد طرح العروض', count: 0, dotColor: 'bg-[#007DEA]', activeBar: 'bg-[#cbd5e1]', filled: false },
    { id: 'committee', label: 'لدى لجنة فتح المظاريف', count: 0, dotColor: 'bg-[#6366f1]', activeBar: 'bg-[#cbd5e1]', filled: false },
    { id: 'opened', label: 'تم فتح المظاريف', count: 1, dotColor: 'bg-[#22c55e]', activeBar: 'bg-[#22c55e]', filled: true },
    { id: 'rejected', label: 'مرفوض / ملغى', count: 0, dotColor: 'bg-[#ef4444]', activeBar: 'bg-[#cbd5e1]', filled: false },
  ]
 
  // قائمة المهام المطلوب مني الآن (العمود الأيمن)
  const myTasks = [
    {
      id: 'PR-2026-0008',
      title: 'حواسيب محمولة لأعضاء هيئة التدريس',
      subtitle: 'أُرجع إليك منذ يومين مع ملاحظات',
      statusText: 'مُرجع للتعديل',
      statusClass: 'bg-[#fde8ea] text-[#d92d3f] dark:bg-rose-950/40 dark:text-rose-300',
      actionType: 'primary',
      actionText: 'التعديل وإعادة الإرسال',
    },
    {
      id: 'PR-2026-0006',
      title: 'أجهزة عرض لقاعات التدريس',
      subtitle: 'مسودة لم تُرسل – منذ 4 ساعات',
      statusText: 'مسودة',
      statusClass: 'bg-[#ececec] text-slate-600 dark:bg-slate-800 dark:text-slate-300',
      actionType: 'outline',
      actionText: 'إكمال وإرسال',
    },
  ]
 
  // طلبات قيد المتابعة لدى آخرين
  const followedTasks = [
    {
      id: 'PR-2026-0009',
      title: 'خزائن ملفات حديدية',
      subtitle: 'بانتظار: الإدارة العليا (الاعتماد) · التالي: اعتماد الطلب أو إرجاعه للتعديل أو رفضه',
      statusText: 'بإنتظار الاعتماد',
      statusClass: 'bg-[#fff1e0] text-[#f07a00] dark:bg-amber-950/40 dark:text-amber-400',
    },
  ]
 
  const sectionBadge =
    'inline-flex items-center h-[26px] px-3 rounded-full text-[13px] font-medium bg-[#e7f8ef] text-[#0b7a52] dark:bg-emerald-950/60 dark:text-emerald-400'
 
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#f5f5f5] dark:bg-[#071322] text-slate-800 dark:text-slate-100 flex flex-row transition-colors duration-200 selection:bg-sky-500 selection:text-white"
      style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
    >
      {/* ==================== القائمة الجانبية اليمنى (Sidebar) ==================== */}
      <aside className="hidden lg:block w-[clamp(240px,18.4vw,353px)] shrink-0 bg-white dark:bg-[#0b1b2d] sticky top-0 h-screen overflow-y-auto select-none z-20 dark:border-l dark:border-slate-800/80">
        <SidebarContent activeTab={activeTab} setActiveTab={setActiveTab} />
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
 
            <nav className="flex items-center gap-2 text-[13px] sm:text-[15px] text-slate-500 dark:text-slate-400">
              <span className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
                نظام إدارة المشتريات - الأزهر
              </span>
              <i className="fa-solid fa-angle-left text-[11px] text-slate-500"></i>
              <span className="font-bold text-slate-900 dark:text-white">
               الإدارة الطالبة
              </span>
            </nav>
          </div>
 
          {/* منتصف الهيدر: شريط البحث الدائري (الأيقونة على اليمين) */}
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
            {/* جرس الإشعارات */}
            <NotificationMenu />
 
            {/* فاصل عمودي */}
            <span className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-slate-700"></span>
 
            {/* قائمة اللغة */}
            <LanguageMenu />
          </div>
        </header>
 
        {/* محتوى الـ Dashboard */}
        <main className="w-full px-4 sm:px-6 lg:pl-20 lg:pr-6 pt-6 lg:pt-9 pb-10 space-y-8">
          {/* ترويسة الترحيب والزر الإجرائي الرئيسي */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-right">
              <h1 className="text-2xl lg:text-[28px] font-extrabold text-slate-900 dark:text-white tracking-tight">
                مساء الخير ، م.هاني
              </h1>
              <p className="text-sm sm:text-[15px] text-slate-700 dark:text-slate-300 mt-3 font-medium">
                الإدارة الطالبة – إنشاء طلبات الشراء ومتابعتها
              </p>
            </div>
 
            {/* الزر الرئيسي: + طلب شراء جديد */}
            <button
              onClick={() => navigate('/new-order')}
              className={`${BRAND_GRADIENT} inline-flex items-center justify-center w-full sm:w-[273px] h-12 rounded-full text-black font-semibold text-sm hover:brightness-95 active:scale-[0.98] transition-all cursor-pointer`}
            >
              <span>+ طلب شراء جديد</span>
            </button>
          </div>
 
          {/* العمودين: الأيمن (المطلوب مني الآن) والأيسر (ملخص الطلبات حسب الحالة) */}
          <div className="grid grid-cols-1 xl:grid-cols-[1.52fr_1fr] gap-6 items-start">
            {/* ==================== العمود الأيمن: المطلوب مني الآن ==================== */}
            <div className="space-y-4 min-w-0">
              {/* عنوان القسم */}
              <div className="flex items-center justify-between">
                <h2 className="text-[17px] font-bold text-slate-900 dark:text-white">
                  المطلوب مني الآن
                </h2>
                <span className={sectionBadge}>2 معاملات</span>
              </div>
 
              {/* بطاقات المهام المباشرة */}
              {myTasks.map((task) => (
                <div
                  key={task.id}
                  className="bg-white dark:bg-[#0b1b2d] rounded-[20px] p-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 transition-shadow hover:shadow-md dark:border dark:border-slate-800/80"
                >
                  {/* اليمين: كود الطلب + العنوان + التفاصيل */}
                  <div className="text-right space-y-1 min-w-0">
                    <span className="block text-sm text-slate-500 dark:text-slate-400">
                      {task.id}
                    </span>
                    <h3
                      onClick={() => navigate(`/orders/${task.id}`)}
                      className="text-[17px] font-bold text-slate-900 dark:text-white hover:text-[#007DEA] cursor-pointer transition-colors"
                    >
                      {task.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {task.subtitle}
                    </p>
                  </div>
 
                  {/* اليسار: شارة الحالة + زر الإجراء */}
                  <div className="flex flex-col items-start sm:items-end gap-4 shrink-0">
                    <span className={`${BADGE_BASE} ${task.statusClass}`}>
                      {task.statusText}
                    </span>
 
                    {task.actionType === 'primary' ? (
                      <button
                        onClick={() => navigate('/edit-order')}
                        className={`${BRAND_GRADIENT} w-full sm:w-[200px] h-8 rounded-full text-black font-semibold text-[13px] hover:brightness-95 active:scale-[0.98] transition-all cursor-pointer`}
                      >
                        {task.actionText}
                      </button>
                    ) : (
                      <button
                        onClick={() => navigate(`/orders/${task.id}`)}
                        className="w-full sm:w-[200px] h-8 rounded-full border border-[#007DEA] text-[#007DEA] bg-white dark:bg-transparent hover:bg-[#007DEA]/10 active:scale-[0.98] font-medium text-[13px] transition-all cursor-pointer"
                      >
                        {task.actionText}
                      </button>
                    )}
                  </div>
                </div>
              ))}
 
              {/* قسم: قيد المتابعة لدى آخرين */}
              <div className="bg-white dark:bg-[#0b1b2d] rounded-[20px] px-6 py-5 text-right dark:border dark:border-slate-800/80">
                <h3 className="text-[17px] font-bold text-slate-900 dark:text-white">
                  قيد المتابعة لدى آخرين
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1.5">
                  طلبات لا تحتاج منك شيئًا الآن – تعرّف أين وصلت
                </p>
              </div>
 
              {/* بطاقة الطلب قيد المتابعة */}
              {followedTasks.map((task) => (
                <div
                  key={task.id}
                  onClick={() => navigate('/pending-approval-order')}
                  className="bg-white dark:bg-[#0b1b2d] rounded-[20px] p-6 flex flex-col sm:flex-row justify-between gap-4 cursor-pointer transition-shadow hover:shadow-md group dark:border dark:border-slate-800/80"
                >
                  {/* اليمين: العنوان + التفاصيل */}
                  <div className="text-right space-y-1 min-w-0 flex-1">
                    <h4 className="text-[17px] font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {task.title}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {task.subtitle}
                    </p>
                  </div>

                  {/* اليسار: شارة الحالة + سهم التفاصيل */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between gap-4 shrink-0">
                    <span className={`${BADGE_BASE} ${task.statusClass}`}>
                      {task.statusText}
                    </span>
                    <i className="fa-solid fa-angle-left text-sm text-slate-700 dark:text-slate-300 group-hover:text-sky-500 group-hover:-translate-x-1 transition-all"></i>
                  </div>
                </div>
              ))}
            </div>
 
            {/* ==================== العمود الأيسر: ملخص الطلبات حسب الحالة ==================== */}
            <div className="space-y-4 min-w-0">
              {/* عنوان القسم */}
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-[17px] font-bold text-slate-900 dark:text-white">
                  ملخص الطلبات حسب الحالة
                </h2>
                <span className={sectionBadge}>4 طلبًا ضمن صلاحياتك</span>
              </div>
 
              {/* بطاقة بيضاء تحتوي صفوف الحالات */}
              <div className="bg-white dark:bg-[#0b1b2d] rounded-[20px] px-6 py-8 space-y-6 dark:border dark:border-slate-800/80">
                {statusSummary.map((item) => {
                  const isSelected = selectedStatusFilter === item.id
 
                  return (
                    <div
                      key={item.id}
                      onClick={() => {
                        if (item.id === 'draft') {
                          navigate('/my-orders?status=draft')
                          return
                        }
                        if (item.id === 'pending') {
                          navigate('/pending-approval-order')
                          return
                        }
                        if (item.id === 'opened') {
                          navigate('/envelopes-opened')
                          return
                        }
                        if (item.id === 'rejected') {
                          navigate('/rejected-orders')
                          return
                        }
                        setSelectedStatusFilter(isSelected ? null : item.id)
                      }}
                      className={`flex items-center gap-4 min-h-[52px] py-2 px-4 rounded-xl bg-[#f5f5f5] dark:bg-[#0c1f33] hover:bg-[#eeeeee] dark:hover:bg-[#102740] transition-all cursor-pointer ${
                        isSelected ? 'ring-2 ring-[#01B0F5]' : ''
                      }`}
                    >
                      {/* يمين: نقطة اللون + نص الحالة */}
                      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${item.dotColor}`}></span>
                      <span className="flex-1 min-w-0 text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-200">
                        {item.label}
                      </span>
 
                      {/* يسار: شريط التقدم + العدد */}
                      <div className="flex items-center gap-4 2xl:gap-6 shrink-0">
                        <div className="w-32 xl:w-24 2xl:w-[155px] shrink-0 h-1 rounded-full bg-[#d1d5db] dark:bg-slate-700 overflow-hidden">
                          {item.filled && (
                            <div className={`h-full w-full rounded-full ${item.activeBar}`}></div>
                          )}
                        </div>
                        <span
                          className={`w-4 shrink-0 text-center text-[15px] font-bold ${
                            item.count > 0
                              ? 'text-slate-900 dark:text-white'
                              : 'text-slate-400 dark:text-slate-500'
                          }`}
                        >
                          {item.count}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
 
      {/* ==================== القائمة الجانبية للشاشات الصغيرة ==================== */}
      {/* دائماً موجودة في الـ DOM - بتظهر وتختفي بأنيميشن ناعم */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* خلفية معتمة مع fade ناعم */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
 
        {/* محتوى السايدبار مع slide-in من اليمين */}
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
 
          <SidebarContent
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onNavigate={() => setIsMobileMenuOpen(false)}
          />
        </div>
      </div>
 
      {/* ==================== نافذة منبثقة (Modal): طلب شراء جديد ==================== */}
      {isNewOrderModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsNewOrderModalOpen(false)}
          ></div>
          <div className="relative bg-white dark:bg-[#0b1b2d] rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 dark:border-slate-800 text-right z-10 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                إنشاء طلب شراء جديد
              </h3>
              <button
                onClick={() => {
                  setIsNewOrderModalOpen(false)
                  navigate('/new-order')
                }}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
 
            <div className="space-y-4 py-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  عنوان طلب الشراء
                </label>
                <input
                  type="text"
                  placeholder="مثال: حواسيب ومعدات شبكات لقسم الهندسة"
                  className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-sky-500"
                />
              </div>
 
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  الجهة الطالبة
                </label>
                <input
                  type="text"
                  disabled
                  value="الإدارة الطالبة - م. هاني وشاح"
                  className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs text-slate-500 dark:text-slate-400 cursor-not-allowed"
                />
              </div>
 
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  الملاحظات والمواصفات
                </label>
                <textarea
                  rows={3}
                  placeholder="اكتب مواصفات وتفاصيل المواد المطلوبة..."
                  className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-sky-500 resize-none"
                ></textarea>
              </div>
            </div>
 
            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => setIsNewOrderModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                إلغاء
              </button>
              <button
                onClick={() => {
                  setIsNewOrderModalOpen(false)
                  navigate('/new-order')
                }}
                className="bg-[#009de0] hover:bg-[#008ecb] text-white px-6 py-2 rounded-xl text-xs font-bold shadow-md transition-all"
              >
                حفظ ومتابعة
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}











