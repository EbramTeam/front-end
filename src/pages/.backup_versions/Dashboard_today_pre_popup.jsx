
import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logo, userHani, shieldIcon } from '../assets/images'
import LanguageMenu from '../components/LanguageMenu'
import NotificationMenu from '../components/NotificationMenu'
 
/* ==================== حركات البطاقات (CSS) ==================== */
 
const cardAnimationsCss = `
@keyframes ibram-card-in {
  from { opacity: 0; transform: translateY(28px) scale(.95); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes ibram-icon-pop {
  0%   { opacity: 0; transform: scale(0) rotate(-60deg); }
  70%  { opacity: 1; transform: scale(1.18) rotate(8deg); }
  100% { opacity: 1; transform: scale(1) rotate(0); }
}
@keyframes ibram-section-in {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}
 
.stat-card {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  animation: ibram-card-in .7s cubic-bezier(.22,1,.36,1) backwards;
  animation-delay: calc(var(--i) * 110ms);
  transition: transform .35s cubic-bezier(.22,1,.36,1), box-shadow .35s ease;
}
/* لمعة تعبر البطاقة عند المرور */
.stat-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: -90%;
  width: 55%;
  height: 100%;
  background: linear-gradient(110deg, transparent, rgba(255,255,255,.65), transparent);
  transform: skewX(-20deg);
  transition: left .8s ease;
  pointer-events: none;
}
/* شريط ملوّن أسفل البطاقة يتمدد عند المرور */
.stat-card::before {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  height: 4px;
  width: 0;
  background: var(--accent);
  border-radius: 4px;
  transition: width .45s cubic-bezier(.22,1,.36,1);
}
.stat-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 18px 36px -14px var(--accent);
}
.stat-card:hover::after { left: 140%; }
.stat-card:hover::before { width: 100%; }
.stat-card:active { transform: translateY(-3px) scale(.98); }
 
.stat-icon {
  animation: ibram-icon-pop .7s cubic-bezier(.34,1.56,.64,1) backwards;
  animation-delay: calc(var(--i) * 110ms + 250ms);
  transition: transform .45s cubic-bezier(.34,1.56,.64,1);
}
.stat-card:hover .stat-icon { transform: scale(1.18) rotate(-10deg); }
/* الساعة الرملية تنقلب */
.stat-card[data-id="under-review"]:hover .stat-icon { transform: scale(1.15) rotate(180deg); }
/* علامة الصح تنبض */
.stat-card[data-id="approved-bidding"]:hover .stat-icon { transform: scale(1.25) rotate(0); }
 
.stat-count { transition: transform .35s ease, color .35s ease; font-variant-numeric: tabular-nums; }
.stat-card:hover .stat-count { transform: scale(1.08); color: var(--accent); }
 
.section-in {
  animation: ibram-section-in .7s cubic-bezier(.22,1,.36,1) backwards;
  animation-delay: var(--d, 0ms);
}
 
@keyframes ibram-menu-in {
  from { opacity: 0; transform: translateY(-8px) scale(.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes ibram-chip-in {
  from { opacity: 0; transform: scale(.85); }
  to   { opacity: 1; transform: scale(1); }
}
.menu-pop { transform-origin: top right; animation: ibram-menu-in .18s ease-out; }
.chip-in  { animation: ibram-chip-in .25s cubic-bezier(.34,1.56,.64,1); }
 
@media (prefers-reduced-motion: reduce) {
  .menu-pop, .chip-in { animation: none !important; }
  .stat-card, .stat-icon, .section-in { animation: none !important; }
  .stat-card, .stat-card:hover, .stat-icon, .stat-count { transition: none !important; transform: none !important; }
}
`
 
/* عدّاد يعدّ من 0 إلى الرقم */
function CountUp({ value, duration = 1300, delay = 0 }) {
  const [n, setN] = useState(0)
 
  useEffect(() => {
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setN(value)
      return undefined
    }
    let raf
    let start
    const timer = setTimeout(() => {
      const tick = (t) => {
        if (!start) start = t
        const p = Math.min((t - start) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        setN(Math.round(value * eased))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, delay)
    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(raf)
    }
  }, [value, duration, delay])
 
  return <span>{n}</span>
}
 
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
const DashboardGridIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <rect x="3" y="3" width="8" height="8" rx="1.5" />
    <rect x="3" y="13" width="8" height="8" rx="1.5" />
    <rect x="13" y="3" width="8" height="8" rx="1.5" />
    <rect x="13" y="13" width="8" height="8" rx="1.5" />
  </svg>
)
 
// طلب إحتياج
const NeedRequestIcon = (props) => (
  <svg {...strokeProps} {...props}>
    <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5z" />
    <path d="M14 2v5h5" />
  </svg>
)
 
// البحث (خطّ رفيع)
const SearchIcon = (props) => (
  <svg {...strokeProps} strokeWidth={1.5} {...props}>
    <circle cx="11" cy="11" r="7.5" />
    <path d="m20.5 20.5-4-4" />
  </svg>
)
 
// أيقونات بطاقات الإحصائيات
const ClipboardCheckIcon = (props) => (
  <svg {...strokeProps} {...props}>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" />
    <path d="m9 14 2 2 4-4" />
  </svg>
)
 
const HourglassIcon = (props) => (
  <svg {...strokeProps} {...props}>
    <path d="M5 22h14" />
    <path d="M5 2h14" />
    <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
    <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
  </svg>
)
 
const CheckCircleIcon = (props) => (
  <svg {...strokeProps} {...props}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
)
 
const DocumentIcon = (props) => (
  <svg {...strokeProps} {...props}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
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
  { id: 'home', label: 'الرئيسية', Icon: DashboardGridIcon, route: '/dashboard' },
  { id: 'need-requests', label: 'طلب إحتياج', Icon: NeedRequestIcon, route: '/my-orders' },
]
 
const statusStyles = {
  approved: {
    wrap: 'bg-[#e6f8ee] text-[#16a34a] dark:bg-emerald-500/15 dark:text-emerald-400',
    dot: 'bg-[#16a34a] dark:bg-emerald-400',
  },
  'in-review': {
    wrap: 'bg-[#fff3e6] text-[#f97316] dark:bg-orange-500/15 dark:text-orange-400',
    dot: 'bg-[#f97316] dark:bg-orange-400',
  },
  draft: {
    wrap: 'bg-[#efefef] text-[#555] dark:bg-slate-500/20 dark:text-slate-300',
    dot: 'bg-[#555] dark:bg-slate-300',
  },
}
 
// خيارات القائمة المنسدلة: حالة الطلب
const statusOptions = [
  { id: 'all', label: 'الكل عدا المحذوفين', dot: 'bg-sky-500' },
  { id: 'approved', label: 'معتمد', dot: 'bg-[#16a34a]' },
  { id: 'in-review', label: 'تحت التدقيق', dot: 'bg-[#f97316]' },
  { id: 'draft', label: 'مسودة', dot: 'bg-[#555]' },
  { id: 'deleted', label: 'محذوف', dot: 'bg-red-500' },
]
 
/* ==================== محتوى القائمة الجانبية (Sidebar) ==================== */
 
function SidebarContent({ activeTab, setActiveTab, onNavigate }) {
  const navigate = useNavigate()
  return (
    <div className="min-h-full flex flex-col bg-white dark:bg-[#0b1b2d] pr-[clamp(16px,2.08vw,40px)]">
      {/* الجزء العلوي */}
      <div className="pl-4 pt-[clamp(20px,3vh,32px)]">
        {/* الشعار + اسم المنصة */}
        <div className="pr-6">
          <Link to="/" onClick={onNavigate} className="inline-block">
            <img
              src={logo}
              alt="IBRAM إبرام للمشتريات"
              className="h-[clamp(100px,4.7vh,52px)] w-auto object-contain"
            />
          </Link>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 font-semibold">
            إبرام للمشتريات
          </p>
        </div>
 
        {/* عنوان التصنيف */}
        <p className="pr-6 mt-[clamp(40px,6.5vh,64px)] mb-[clamp(28px,4.3vh,44px)] text-[15px] text-slate-500 dark:text-slate-500 font-medium">
          القوائم التشغيلية
        </p>
 
        {/* أزرار القائمة */}
        <nav className="space-y-2">
          {navItems.map(({ id, label, Icon, route }) => {
            const isActive = activeTab === id
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
                    ? 'bg-[#01B0F5] text-slate-900 shadow-sm'
                    : 'bg-[#f5f5f5] dark:bg-[#0f243a] text-slate-900 dark:text-slate-200 hover:bg-[#ebebeb] dark:hover:bg-[#142e4a]'
                }`}
              >
                <Icon className="w-[22px] h-[22px] shrink-0" />
                <span>{label}</span>
              </button>
            )
          })}
        </nav>
      </div>
 
      {/* الجزء السفلي */}
      <div className="mt-auto pt-6">
        {/* بطاقة: النظام متصل وآمن */}
        <div className="flex items-center gap-2 h-[86px] pr-10 pl-12 bg-[#e9f4fb] dark:bg-[#0e2740]">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-800 flex-shrink-0 animate-pulse"></span>
          <div className="flex flex-col text-right flex-1">
            <span className="whitespace-nowrap text-base font-bold text-slate-900 dark:text-white">
              النظام متصل وآمن
            </span>
            <span className="text-[13px] text-slate-500 dark:text-slate-400">
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
              <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                م. هاني وشاح
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                الإدارة الطالبة
              </p>
            </div>
          </div>
          <i className="fa-solid fa-angle-left text-sm text-slate-800 dark:text-slate-300 group-hover:-translate-x-1 transition-transform"></i>
        </div>
      </div>
    </div>
  )
}
 
/* ==================== الصفحة الرئيسية (Dashboard) ==================== */
 
export default function Dashboard() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('home')
  const [searchQuery, setSearchQuery] = useState('')
  const [filterSearch, setFilterSearch] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isStatusOpen, setIsStatusOpen] = useState(false)
  const statusRef = useRef(null)
 
  // إغلاق القائمة المنسدلة عند الضغط خارجها أو بزر Escape
  useEffect(() => {
    if (!isStatusOpen) return undefined
    const onDown = (e) => {
      if (statusRef.current && !statusRef.current.contains(e.target)) setIsStatusOpen(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setIsStatusOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [isStatusOpen])
  const [activeFilters, setActiveFilters] = useState([
    { id: 'faculty', label: 'الجهة: كلية الهندسة' },
    { id: 'status', label: 'الحالة: الكل عدا المحذوفين' },
  ])
 
  // بيانات بطاقات الإحصائيات العلوية
  const statsCards = [
    {
      id: 'total',
      count: 128,
      title: 'إجمالي الطلبات المسجلة',
      subtitle: '100% لكل كليات وعمادات الجامعة',
      icon: ClipboardCheckIcon,
      iconBg: 'bg-[#e3f1fb] text-[#0369a1] dark:bg-sky-500/15 dark:text-sky-300',
      accent: 'rgba(3,105,161,.45)',
    },
    {
      id: 'under-review',
      count: 14,
      title: 'تحت المراجعة والإعتماد',
      subtitle: 'بإنتظار موافقة صاحب الصلاحية',
      icon: HourglassIcon,
      iconBg: 'bg-[#fff3df] text-[#f59e0b] dark:bg-amber-500/15 dark:text-amber-400',
      accent: 'rgba(245,158,11,.5)',
    },
    {
      id: 'approved-bidding',
      count: 20,
      title: 'معتمدة للمنافسة والطرح',
      subtitle: 'جاهزة لتجهيز كراسة الشروط',
      icon: CheckCircleIcon,
      iconBg: 'bg-[#e4f8ec] text-[#12b76a] dark:bg-emerald-500/15 dark:text-emerald-400',
      accent: 'rgba(18,183,106,.5)',
    },
    {
      id: 'drafts',
      count: 23,
      title: 'مسودات قيد الإعداد',
      subtitle: 'بحاجة لاستكمال المواصفات الفنية',
      icon: DocumentIcon,
      iconBg: 'bg-[#e3f1fb] text-[#0369a1] dark:bg-sky-500/15 dark:text-sky-300',
      accent: 'rgba(1,176,245,.5)',
    },
  ]
 
  // صفوف جدول الطلبات
  const ordersList = [
    {
      id: 'PR-2025-0842',
      title: 'تجديد خوادم مركز البيانات الرئيسي',
      specs: 'توريد وحدات معالجة',
      entity: 'عمادة تقنية المعلومات',
      date: '24 أكتوبر 2025',
      quantity: '12 خادم',
      cost: '150,000 ش',
      priority: '',
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
      priority: '',
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
      priority: '',
      statusText: 'مسودة',
      statusType: 'draft',
    },
  ]
 
  const removeFilter = (filterId) => {
    setActiveFilters((prev) => prev.filter((f) => f.id !== filterId))
    if (filterId === 'status') setSelectedStatus('all')
  }
 
  const clearAllFilters = () => {
    setActiveFilters([])
    setFilterSearch('')
    setSelectedStatus('all')
  }
 
  // اختيار حالة من القائمة: تظهر/تتحدّث في "الفلاتر المطبقة" وتفلتر الجدول
  const applyStatus = (id) => {
    const opt = statusOptions.find((o) => o.id === id)
    const label = `الحالة: ${opt.label}`
    setSelectedStatus(id)
    setIsStatusOpen(false)
    setActiveFilters((prev) =>
      prev.some((f) => f.id === 'status')
        ? prev.map((f) => (f.id === 'status' ? { ...f, label } : f))
        : [...prev, { id: 'status', label }]
    )
  }
 
  const currentStatus = statusOptions.find((o) => o.id === selectedStatus) || statusOptions[0]
  const visibleOrders =
    selectedStatus === 'all'
      ? ordersList
      : ordersList.filter((o) => o.statusType === selectedStatus)
 
  const pagerBtn =
    'w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer'
 
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#f8fafc] dark:bg-[#071322] text-slate-800 dark:text-slate-100 flex flex-row transition-colors duration-200 selection:bg-sky-500 selection:text-white"
      style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
    >
      <style>{cardAnimationsCss}</style>
 
      {/* ==================== القائمة الجانبية (Desktop Sidebar) ==================== */}
      <aside className="hidden lg:block lg:w-[clamp(260px,18.4vw,353px)] shrink-0 bg-white dark:bg-[#0b1b2d] sticky top-0 h-screen overflow-y-auto select-none z-20 border-l border-slate-100 dark:border-slate-800">
        <SidebarContent activeTab={activeTab} setActiveTab={setActiveTab} />
      </aside>
 
      {/* ==================== محتوى الصفحة الرئيسي ==================== */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* الشريط العلوي (Top Header Bar) */}
        <header className="h-16 bg-white dark:bg-[#0b1b2d] px-4 sm:px-6 lg:pr-6 lg:pl-[clamp(24px,4.6vw,88px)] flex items-center justify-between gap-4 sticky top-0 z-10 border-b border-slate-100 dark:border-slate-800">
          {/* يمين الهيدر: مسار التنقل */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label="القائمة"
            >
              <i className="fa-solid fa-bars text-lg"></i>
            </button>
 
            <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <span className="hidden sm:inline hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
                نظام إدارة المشتريات - الأزهر
              </span>
              <i className="hidden sm:inline fa-solid fa-angle-left text-[11px] text-slate-500"></i>
              <span className="font-bold text-slate-900 dark:text-white">
                الإدارة الطالبة
              </span>
            </nav>
          </div>
 
          {/* منتصف الهيدر: شريط البحث الدائري */}
          <div className="hidden md:block relative min-w-0 md:flex-1 md:max-w-[345px] lg:flex-none lg:w-[clamp(180px,17.97vw,345px)]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="بحث"
              className="w-full h-10 bg-[#f6f6f6] dark:bg-[#0f243a] border border-slate-300 dark:border-slate-700 rounded-full pr-12 pl-4 text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-[#01B0F5] transition-colors"
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
 
        {/* محتوى الـ Dashboard */}
        <main className="w-full px-4 sm:px-6 lg:pr-6 lg:pl-[clamp(24px,4.17vw,80px)] pt-6 sm:pt-10 pb-8 sm:pb-10 space-y-5 sm:space-y-6">
          {/* ترويسة الترحيب والزر الإجرائي الرئيسي */}
          <div
            className="section-in flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            style={{ '--d': '0ms' }}
          >
            {/* جهة اليمين: الترحيب والبادج والوصف */}
            <div className="text-right space-y-3">
              <div className="flex items-center gap-4 flex-wrap">
                <h1 className="text-xl sm:text-2xl lg:text-[32px] font-extrabold text-slate-900 dark:text-white tracking-tight">
                  مرحباً، م. أحمد
                </h1>
                {/* بادج نظام حصر الاحتياجات الموحد */}
                <div className="inline-flex items-center gap-2 px-3 h-8 rounded-lg bg-[#eaf6fe] dark:bg-sky-950/60 text-[#0c2b4a] dark:text-sky-300 text-xs sm:text-sm font-medium">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#0b5e43] dark:bg-emerald-400"></span>
                    <span className="w-2 h-2 rounded-full bg-[#0b5e43] dark:bg-emerald-400"></span>
                  </span>
                  <span>نظام حصر الاحتياجات الموحد</span>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                تابع احتياجات إدارتك واطلع على آخر تحديثات طلباتك بكل سهولة وبدون تعقيدات إدارية.
              </p>
            </div>
 
            {/* جهة اليسار: زر طلب إحتياج جديد */}
            <button
              onClick={() => navigate('/new-order')}
              className="inline-flex items-center justify-center w-full sm:w-[273px] h-12 rounded-full bg-[linear-gradient(to_left,#01B0F5,#0066F0)] hover:brightness-105 hover:shadow-lg hover:shadow-sky-500/30 active:scale-[0.98] text-slate-900 font-bold text-[15px] transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>طلب إحتياج جديد</span>
            </button>
          </div>
 
          {/* 4 بطاقات إحصائيات */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {statsCards.map((card, i) => {
              const IconComp = card.icon
              return (
                <div
                  key={card.id}
                  data-id={card.id}
                  style={{ '--i': i, '--accent': card.accent }}
                  className="stat-card bg-white dark:bg-[#0b1b2d] rounded-3xl p-4 shadow-[0_2px_12px_rgba(16,24,40,0.05)] dark:border dark:border-slate-800 flex flex-col justify-between gap-3 min-h-[136px]"
                >
                  {/* السطر العلوي: الرقم على اليمين والأيقونة على اليسار */}
                  <div className="flex items-center justify-between">
                    <span className="stat-count text-[28px] 2xl:text-[32px] leading-none font-extrabold text-slate-900 dark:text-white">
                      <CountUp value={card.count} delay={i * 110 + 200} />
                    </span>
                    <div
                      className={`stat-icon w-10 h-10 rounded-[10px] flex items-center justify-center ${card.iconBg}`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>
 
                  {/* السطر السفلي: العنوان والوصف */}
                  <div className="text-right">
                    <h3 className="text-[15px] 2xl:text-base font-bold text-slate-900 dark:text-slate-200">
                      {card.title}
                    </h3>
                    <p className="text-[13px] 2xl:text-sm text-slate-500 dark:text-slate-500 mt-1">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
 
          {/* بطاقة الفلاتر والبحث */}
          <div
            className="section-in relative z-20 mt-2 sm:mt-4 bg-white dark:bg-[#0b1b2d] rounded-3xl p-4 sm:p-6 space-y-4 sm:space-y-6 shadow-[0_2px_12px_rgba(16,24,40,0.04)] dark:border dark:border-slate-800"
            style={{ '--d': '450ms' }}
          >
            {/* أدوات البحث والفرز */}
            <div className="flex items-center gap-3 sm:gap-6 flex-wrap sm:flex-nowrap">
              {/* حقل البحث بالجهة الطالبة */}
              <div className="relative basis-full sm:basis-0 sm:flex-1 sm:min-w-[200px]">
                <input
                  type="text"
                  value={filterSearch}
                  onChange={(e) => setFilterSearch(e.target.value)}
                  placeholder="تصفية الطلبات حسب الجهة الطالبة"
                  className="w-full h-10 bg-[#f8f8f8] dark:bg-[#0f243a] border border-slate-300 dark:border-slate-700 rounded-full pr-12 pl-4 text-[13px] text-slate-700 dark:text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#01B0F5] transition-colors"
                />
                <button
                  type="button"
                  aria-label="بحث"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 dark:text-slate-400"
                >
                  <SearchIcon className="w-6 h-6" />
                </button>
              </div>
 
              {/* القائمة المنسدلة: حالة الطلب */}
              <div ref={statusRef} className="relative flex-1 sm:flex-none sm:w-[224px]">
                <button
                  type="button"
                  onClick={() => setIsStatusOpen((o) => !o)}
                  aria-haspopup="listbox"
                  aria-expanded={isStatusOpen}
                  className={`h-10 w-full px-4 rounded-full border flex items-center justify-between gap-2 text-sm transition-colors cursor-pointer focus:outline-none ${
                    selectedStatus !== 'all' || isStatusOpen
                      ? 'border-[#01B0F5] bg-white dark:bg-[#0f243a] text-slate-900 dark:text-white font-medium'
                      : 'border-slate-300 dark:border-slate-700 bg-[#f8f8f8] dark:bg-[#0f243a] text-slate-500 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-600'
                  }`}
                >
                  <span className="truncate">
                    {selectedStatus === 'all' ? 'حالة الطلب' : currentStatus.label}
                  </span>
                  <i
                    className={`fa-solid fa-angle-down text-xs text-slate-700 dark:text-slate-300 transition-transform duration-200 ${
                      isStatusOpen ? 'rotate-180' : ''
                    }`}
                  ></i>
                </button>
 
                {isStatusOpen && (
                  <ul
                    role="listbox"
                    className="menu-pop absolute top-full right-0 mt-2 w-full min-w-[220px] z-30 py-2 rounded-2xl bg-white dark:bg-[#0b1b2d] border border-slate-100 dark:border-slate-700 shadow-[0_12px_32px_-8px_rgba(16,24,40,0.18)]"
                  >
                    {statusOptions.map((opt) => {
                      const isSel = selectedStatus === opt.id
                      return (
                        <li key={opt.id} role="option" aria-selected={isSel}>
                          <button
                            type="button"
                            onClick={() => applyStatus(opt.id)}
                            className={`w-full flex items-center gap-3 px-4 h-10 text-sm text-right cursor-pointer transition-colors ${
                              isSel
                                ? 'bg-[#eaf6fe] dark:bg-[#0c2438] text-slate-900 dark:text-white font-bold'
                                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                            }`}
                          >
                            <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${opt.dot}`}></span>
                            <span className="flex-1">{opt.label}</span>
                            {isSel && <i className="fa-solid fa-check text-xs text-[#0a84ff]"></i>}
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </div>
 
              {/* زر إعادة التعيين (Reset) */}
              <button
                type="button"
                onClick={clearAllFilters}
                title="إعادة ضبط الفلاتر"
                className="w-10 h-10 rounded-xl bg-[#e3f3fd] dark:bg-[#0f243a] text-[#0369a1] dark:text-sky-300 flex items-center justify-center hover:bg-[#d3ecfb] dark:hover:bg-[#142e4a] active:rotate-180 transition-all duration-300 cursor-pointer shrink-0"
              >
                <i className="fa-solid fa-rotate-right text-sm"></i>
              </button>
            </div>
 
            {/* سطر الفلاتر المطبقة */}
            <div className="flex items-center gap-2 flex-wrap text-sm min-h-[38px]">
              <span className="text-slate-700 dark:text-slate-300 font-medium ml-1">
                الفلاتر المطبقة:
              </span>
              {activeFilters.map((filter) => (
                <span
                  key={`${filter.id}-${filter.label}`}
                  className="chip-in inline-flex items-center gap-2 px-3 h-[38px] rounded-lg bg-[#f1f5f9] dark:bg-[#0c2438] text-slate-800 dark:text-slate-200 text-sm font-medium"
                >
                  <span>{filter.label}</span>
                  <button
                    onClick={() => removeFilter(filter.id)}
                    aria-label="إزالة الفلتر"
                    className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 cursor-pointer"
                  >
                    <i className="fa-regular fa-circle-xmark text-sm"></i>
                  </button>
                </span>
              ))}
              {activeFilters.length > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="text-[#0a84ff] font-medium hover:underline cursor-pointer mr-2"
                >
                  مسح الكل
                </button>
              )}
            </div>
          </div>
 
          {/* جدول الطلبات */}
          <div
            className="section-in bg-white dark:bg-[#0b1b2d] rounded-3xl shadow-[0_2px_12px_rgba(16,24,40,0.04)] dark:border dark:border-slate-800 overflow-hidden"
            style={{ '--d': '600ms' }}
          >
            <div className="hidden xl:block">
              <table className="w-full table-fixed border-collapse text-right">
                <colgroup>
                  <col style={{ width: '11%' }} />
                  <col style={{ width: '18%' }} />
                  <col style={{ width: '11%' }} />
                  <col style={{ width: '11%' }} />
                  <col style={{ width: '11%' }} />
                  <col style={{ width: '12%' }} />
                  <col style={{ width: '7%' }} />
                  <col style={{ width: '12%' }} />
                  <col style={{ width: '7%' }} />
                </colgroup>
                {/* ترويسة الجدول */}
                <thead>
                  <tr className="h-[66px] bg-[#E8F6FF] dark:bg-[#0c2438] text-slate-600 dark:text-slate-200 text-xs 2xl:text-[15px] font-medium">
                    <th className="px-1 text-center font-medium whitespace-nowrap">رقم الطلب</th>
                    <th className="px-1 text-right font-medium whitespace-nowrap">عنوان الإحتياج والمواصفات</th>
                    <th className="px-1 text-center font-medium whitespace-nowrap">الجهة الطالبة</th>
                    <th className="px-1 text-center font-medium whitespace-nowrap">تاريخ التقديم</th>
                    <th className="px-1 text-center font-medium whitespace-nowrap">الكمية المقدرة</th>
                    <th className="px-1 text-center font-medium whitespace-nowrap">التكلفة المتوقعة</th>
                    <th className="px-1 text-center font-medium whitespace-nowrap">الأولوية</th>
                    <th className="px-1 text-center font-medium whitespace-nowrap">حالة الإعتماد</th>
                    <th className="px-1 text-center font-medium whitespace-nowrap">الإجراءات</th>
                  </tr>
                </thead>
 
                {/* صفوف الجدول */}
                <tbody className="text-sm 2xl:text-[15px]">
                  {visibleOrders.map((order, idx) => {
                    const st = statusStyles[order.statusType]
                    return (
                      <tr
                        key={idx}
                        className="h-[103px] hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
                      >
                        {/* رقم الطلب */}
                        <td className="px-2 text-center font-bold text-slate-900 dark:text-white">
                          {order.id}
                        </td>
 
                        {/* عنوان الإحتياج والمواصفات */}
                        <td className="px-2 text-right">
                          <div className="font-bold text-slate-900 dark:text-white">
                            {order.title}
                          </div>
                          <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                            {order.specs}
                          </div>
                        </td>
 
                        {/* الجهة الطالبة (تلتف على سطرين) */}
                        <td className="px-2 text-center text-slate-700 dark:text-slate-300 leading-relaxed">
                          {order.entity}
                        </td>
 
                        {/* تاريخ التقديم */}
                        <td className="px-2 text-center text-slate-700 dark:text-slate-300">
                          {order.date}
                        </td>
 
                        {/* الكمية المقدرة */}
                        <td className="px-2 text-center text-slate-700 dark:text-slate-300">
                          {order.quantity}
                        </td>
 
                        {/* التكلفة المتوقعة */}
                        <td className="px-2 text-center text-slate-700 dark:text-slate-300">
                          {order.cost}
                        </td>
 
                        {/* الأولوية */}
                        <td className="px-2 text-center text-slate-400">
                          {order.priority || ''}
                        </td>
 
                        {/* حالة الإعتماد */}
                        <td className="px-2 text-center">
                          <span
                            className={`inline-flex items-center gap-2 px-2 2xl:px-3 h-[30px] rounded-lg font-medium text-[13px] 2xl:text-[15px] whitespace-nowrap ${st.wrap}`}
                          >
                            <span className={`w-2.5 h-2.5 rounded-full ${st.dot}`}></span>
                            <span>{order.statusText}</span>
                          </span>
                        </td>
 
                        {/* الإجراءات */}
                        <td className="px-2 text-center">
                          <div className="flex items-center justify-center gap-3 2xl:gap-6">
                            <button
                              type="button"
                              onClick={() => navigate('/edit-order')}
                              className="text-slate-800 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400 hover:scale-110 transition-all cursor-pointer"
                              title="عرض التفاصيل"
                            >
                              <i className="fa-regular fa-eye text-xl"></i>
                            </button>
                            <button
                              type="button"
                              className="text-slate-800 hover:text-slate-500 dark:text-slate-300 dark:hover:text-slate-100 hover:scale-110 transition-all cursor-pointer"
                              title="خيارات إضافية"
                            >
                              <i className="fa-solid fa-ellipsis-vertical text-xl"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                  {visibleOrders.length === 0 && (
                    <tr className="h-[103px]">
                      <td colSpan={9} className="text-center text-slate-500 dark:text-slate-400">
                        لا توجد طلبات مطابقة للفلاتر المحددة
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
 
            {/* ==================== قائمة البطاقات للجوال والآيباد (بدل الجدول) ==================== */}
            <div className="xl:hidden">
              <div className="h-12 px-4 sm:px-6 flex items-center bg-[#E8F6FF] dark:bg-[#0c2438] text-sm font-medium text-slate-600 dark:text-slate-200">
                قائمة طلبات الإحتياج
              </div>
              {visibleOrders.map((order, idx) => {
                const st = statusStyles[order.statusType]
                return (
                  <div
                    key={idx}
                    className="p-4 sm:p-6 space-y-4 border-b border-slate-100 dark:border-slate-800 last:border-b-0 hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    {/* رقم الطلب + الحالة */}
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-bold text-slate-900 dark:text-white text-sm">
                        {order.id}
                      </span>
                      <span
                        className={`inline-flex items-center gap-2 px-3 h-[30px] rounded-lg font-medium text-sm whitespace-nowrap ${st.wrap}`}
                      >
                        <span className={`w-2.5 h-2.5 rounded-full ${st.dot}`}></span>
                        <span>{order.statusText}</span>
                      </span>
                    </div>
 
                    {/* العنوان والمواصفات */}
                    <div className="text-right">
                      <div className="font-bold text-slate-900 dark:text-white">{order.title}</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        {order.specs}
                      </div>
                    </div>
 
                    {/* التفاصيل */}
                    <dl className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-3 text-sm text-right">
                      {[
                        ['الجهة الطالبة', order.entity],
                        ['تاريخ التقديم', order.date],
                        ['الكمية المقدرة', order.quantity],
                        ['التكلفة المتوقعة', order.cost],
                        ...(order.priority ? [['الأولوية', order.priority]] : []),
                      ].map(([label, value]) => (
                        <div key={label}>
                          <dt className="text-xs text-slate-500 dark:text-slate-400">{label}</dt>
                          <dd className="mt-0.5 font-medium text-slate-800 dark:text-slate-200">
                            {value}
                          </dd>
                        </div>
                      ))}
                    </dl>
 
                    {/* الإجراءات */}
                    <div className="flex items-center justify-end gap-5 pt-1">
                      <button
                        type="button"
                        onClick={() => navigate('/edit-order')}
                        className="text-slate-800 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400 cursor-pointer"
                        title="عرض التفاصيل"
                      >
                        <i className="fa-regular fa-eye text-xl"></i>
                      </button>
                      <button
                        type="button"
                        className="text-slate-800 hover:text-slate-500 dark:text-slate-300 dark:hover:text-slate-100 cursor-pointer"
                        title="خيارات إضافية"
                      >
                        <i className="fa-solid fa-ellipsis-vertical text-xl"></i>
                      </button>
                    </div>
                  </div>
                )
              })}
              {visibleOrders.length === 0 && (
                <div className="p-8 text-center text-sm text-slate-500 dark:text-slate-400">
                  لا توجد طلبات مطابقة للفلاتر المحددة
                </div>
              )}
            </div>
 
            {/* ترقيم الصفحات (Pagination) أسفل الجدول */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 py-4 text-sm border-t border-slate-100 dark:border-slate-800 xl:border-t-0">
              {/* اليمين: عرض 1 إلى 5 من أصل 26 */}
              <div className="text-slate-700 dark:text-slate-400 font-medium text-center">
                عرض 1 إلى 5 من أصل 26 طلب إحتياج
              </div>
 
              {/* اليسار: أزرار التنقل بين الصفحات */}
              <div className="flex items-center justify-center flex-wrap gap-1 text-slate-700 dark:text-slate-400">
                <button type="button" title="الصفحة الأولى" className={pagerBtn}>
                  <PagerBarLeft />
                </button>
                <button type="button" title="الصفحة السابقة" className={pagerBtn}>
                  <PagerLeft />
                </button>
                <button
                  type="button"
                  className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded bg-[#0a84ff] text-white font-bold text-sm"
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
          className={`fixed top-0 right-0 w-[280px] max-w-[85vw] h-full bg-white dark:bg-[#0b1b2d] shadow-2xl z-10 overflow-y-auto select-none transition-transform duration-300 ease-in-out ${
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
 





