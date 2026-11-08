import { useState } from 'react'
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

const DashboardGridIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <rect x="3" y="3" width="8" height="8" rx="1.5" />
    <rect x="3" y="13" width="8" height="8" rx="1.5" />
    <rect x="13" y="3" width="8" height="8" rx="1.5" />
    <rect x="13" y="13" width="8" height="8" rx="1.5" />
  </svg>
)

const NeedRequestIcon = (props) => (
  <svg {...strokeProps} {...props}>
    <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5z" />
    <path d="M14 2v5h5" />
  </svg>
)

const SearchIcon = (props) => (
  <svg {...strokeProps} strokeWidth={1.5} {...props}>
    <circle cx="11" cy="11" r="7.5" />
    <path d="m20.5 20.5-4-4" />
  </svg>
)

/* ==================== صفحة إنشاء طلب احتياج جديد (البوب كصفحة مستقلة) ==================== */

export default function NewOrder() {
  const navigate = useNavigate()

  // حالة حقول نموذج البوب (Popup Form State)
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    category: 'جهاز متكامل',
    quantity: '0',
    unit: 'جهاز متكامل',
    estimatedCost: '',
    justification: '',
    notes: '',
  })

  // جدول الأصناف في البوب (درجة الأولوية والأهمية التشغيلية)
  const [items, setItems] = useState([
    { id: 1, name: 'جهاز حاسوب مكتبي', quantity: '25 جهاز', unit: '' },
    { id: 2, name: 'لوحة مفاتيح وفأرة لاسلكية', quantity: '25 طقم', unit: '' },
  ])

  const handleClose = () => {
    navigate(-1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // بعد الإرسال، العودة إلى صفحة الطلبات
    navigate('/my-orders')
  }

  return (
    <div
      dir="rtl"
      className="relative min-h-screen bg-[#f8fafc] dark:bg-[#071322] text-slate-800 dark:text-slate-100 flex flex-row overflow-hidden selection:bg-sky-500 selection:text-white"
      style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
    >
      {/* ==================== خلفية الصفحة الضبابية (Blurred Background Page) ==================== */}
      {/* تحاكي بالضبط ظهور البوب فوق صفحة طلبات الاحتياج والمشتريات المؤسسية كما في الصورة */}
      <div className="flex-1 flex flex-row min-w-0 filter blur-[3px] opacity-75 pointer-events-none select-none">
        {/* السايدبار بالخلفية */}
        <aside className="hidden lg:block w-[260px] 2xl:w-[280px] shrink-0 bg-white dark:bg-[#0b1b2d] border-l border-slate-100 dark:border-slate-800">
          <div className="p-5">
            <img src={logo} alt="IBRAM" className="h-10 w-auto object-contain" />
            <p className="mt-2 text-sm text-slate-500 font-medium">إبرام للمشتريات</p>
            <p className="mt-8 mb-4 text-xs text-slate-400 font-semibold">القوائم التشغيلية</p>
            <div className="space-y-2">
              <div className="w-full h-12 flex items-center gap-3 px-4 rounded-xl text-base font-bold bg-[#f5f5f5] text-slate-800">
                <DashboardGridIcon className="w-5 h-5 shrink-0" />
                <span>الرئيسية</span>
              </div>
              <div className="w-full h-12 flex items-center gap-3 px-4 rounded-xl text-base font-bold bg-[#01B0F5] text-slate-900 shadow-sm">
                <NeedRequestIcon className="w-5 h-5 shrink-0" />
                <span>طلب إحتياج</span>
              </div>
            </div>
          </div>
        </aside>

        {/* محتوى الصفحة بالخلفية */}
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-16 bg-white dark:bg-[#0b1b2d] px-6 flex items-center justify-between border-b border-slate-100">
            <span className="text-xs text-slate-500">نظام إدارة المشتريات - الأزهر &gt; الإدارة الطالبة</span>
            <div className="w-64 h-9 bg-slate-50 border border-slate-200 rounded-full"></div>
            <div className="flex items-center gap-3">
              <NotificationMenu />
              <LanguageMenu />
            </div>
          </header>

          <main className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-black text-slate-900">طلبات الاحتياج والمشتريات المؤسسية</h1>
                <p className="text-xs text-slate-500 mt-1">إدارة ومتابعة متطلبات الكليات والعمادات المساندة...</p>
              </div>
              <div className="px-6 h-10 rounded-full bg-[#0095FF] text-white font-bold text-xs flex items-center">
                طلب إحتياج جديد
              </div>
            </div>
            <div className="w-full h-12 bg-white rounded-full border border-slate-200"></div>
            <div className="w-full h-64 bg-white rounded-2xl border border-slate-200"></div>
          </main>
        </div>
      </div>

      {/* ==================== طبقة التعتيم الخلفية (Backdrop Overlay) ==================== */}
      <div
        className="fixed inset-0 bg-black/45 backdrop-blur-[2px] transition-opacity duration-200 z-40"
        onClick={handleClose}
      ></div>

      {/* ==================== نافذة البوب في المنتصف (Modal Popup) ==================== */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto pointer-events-none">
        <div className="relative bg-white dark:bg-[#0b1b2d] rounded-[28px] max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 dark:border-slate-800 text-right z-50 my-auto max-h-[92vh] overflow-y-auto pointer-events-auto">
          {/* زر الإغلاق الدائري على اليسار */}
          <button
            type="button"
            onClick={handleClose}
            aria-label="إغلاق"
            className="absolute top-5 left-5 w-7 h-7 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
          >
            <i className="fa-solid fa-xmark text-xs"></i>
          </button>

          {/* الترويسة في المنتصف */}
          <div className="text-center pb-6">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              إنشاء طلب احتياج مشتريات جديد
            </h2>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
              منظومة إبرام - نموذج طلب التعميد والمنافسات الحكومية
            </p>
          </div>

          {/* نموذج إدخال البوب */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* 1. عنوان الاحتياج والمواصفة الفنية */}
            <div>
              <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5">
                عنوان الاحتياج والمواصفة الفنية <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="مثال: ترقية تجهيزات مركز الحوسبة فائقة الأداء HPC"
                className="w-full h-10 bg-slate-50/70 dark:bg-[#0f243a] border border-slate-200 dark:border-slate-700 rounded-full px-4 text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-[#01B0F5] transition-colors"
              />
            </div>

            {/* 2. الجهة الطالبة */}
            <div>
              <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5">
                الجهة الطالبة (الكلية / العمادة / الإدارة) <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <select
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className="w-full h-10 bg-slate-50/70 dark:bg-[#0f243a] border border-slate-200 dark:border-slate-700 rounded-full pr-4 pl-10 text-xs text-slate-700 dark:text-slate-200 focus:outline-none focus:border-[#01B0F5] appearance-none cursor-pointer transition-colors"
                >
                  <option value="">اختر الجهة الطالبة</option>
                  <option value="عمادة تقنية المعلومات">عمادة تقنية المعلومات</option>
                  <option value="كلية الهندسة وتكنولوجيا المعلومات">كلية الهندسة وتكنولوجيا المعلومات</option>
                  <option value="كلية الطب البشري">كلية الطب البشري</option>
                  <option value="كلية العلوم">كلية العلوم</option>
                  <option value="إدارة المشتريات واللوازم">إدارة المشتريات واللوازم</option>
                </select>
                <i className="fa-solid fa-angle-down absolute left-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 pointer-events-none"></i>
              </div>
            </div>

            {/* 3. سطر يحتوي على: الصنف | الكمية المطلوبة | وحدة القياس */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* الصنف */}
              <div>
                <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5">
                  الصنف <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full h-10 bg-slate-50/70 dark:bg-[#0f243a] border border-slate-200 dark:border-slate-700 rounded-full pr-4 pl-10 text-xs text-slate-700 dark:text-slate-200 focus:outline-none focus:border-[#01B0F5] appearance-none cursor-pointer"
                  >
                    <option value="جهاز متكامل">جهاز متكامل</option>
                    <option value="أجهزة حاسوب">أجهزة حاسوب</option>
                    <option value="شاشات وملحقات">شاشات وملحقات</option>
                    <option value="أثاث ومكاتب">أثاث ومكاتب</option>
                  </select>
                  <i className="fa-solid fa-angle-down absolute left-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 pointer-events-none"></i>
                </div>
              </div>

              {/* الكمية المطلوبة */}
              <div>
                <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5">
                  الكمية المطلوبة <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full h-10 bg-slate-50/70 dark:bg-[#0f243a] border border-slate-200 dark:border-slate-700 rounded-full pr-4 pl-10 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[#01B0F5]"
                  />
                  <i className="fa-solid fa-angle-down absolute left-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 pointer-events-none"></i>
                </div>
              </div>

              {/* وحدة القياس */}
              <div>
                <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5">
                  وحدة القياس <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <select
                    value={formData.unit}
                    onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                    className="w-full h-10 bg-slate-50/70 dark:bg-[#0f243a] border border-slate-200 dark:border-slate-700 rounded-full pr-4 pl-10 text-xs text-slate-700 dark:text-slate-200 focus:outline-none focus:border-[#01B0F5] appearance-none cursor-pointer"
                  >
                    <option value="جهاز متكامل">جهاز متكامل</option>
                    <option value="قطعة">قطعة</option>
                    <option value="طقم">طقم</option>
                    <option value="حزمة">حزمة</option>
                  </select>
                  <i className="fa-solid fa-sort absolute left-4 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 pointer-events-none"></i>
                </div>
              </div>
            </div>

            {/* 4. التكلفة التقديرية المتوقعة (اختياري) */}
            <div>
              <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5">
                التكلفة التقديرية المتوقعة(إختياري) <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={formData.estimatedCost}
                onChange={(e) => setFormData({ ...formData, estimatedCost: e.target.value })}
                placeholder="مثال: ترقية تجهيزات مركز الحوسبة فائقة الأداء HPC"
                className="w-full h-10 bg-slate-50/70 dark:bg-[#0f243a] border border-slate-200 dark:border-slate-700 rounded-full px-4 text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-[#01B0F5]"
              />
            </div>

            {/* 5. وصف الاحتياج والمبررات التشغيلية */}
            <div>
              <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5">
                وصف الاحتياج والمبررات التشغيلية <span className="text-rose-500">*</span>
              </label>
              <textarea
                rows={3}
                value={formData.justification}
                onChange={(e) => setFormData({ ...formData, justification: e.target.value })}
                placeholder="شرح موجز لأسباب طلب الإحتياج ومردوده الأكاديمي أو التقني على أعمال الكلية/العمادة..."
                className="w-full bg-slate-50/70 dark:bg-[#0f243a] border border-slate-200 dark:border-slate-700 rounded-2xl p-3.5 text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-[#01B0F5] resize-none leading-relaxed"
              ></textarea>
            </div>

            {/* 6. درجة الأولوية والأهمية التشغيلية (جدول الأصناف) */}
            <div>
              <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5">
                درجة الأولوية والأهمية التشغيلية <span className="text-rose-500">*</span>
              </label>
              <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
                <table className="w-full text-right text-xs">
                  <thead>
                    <tr className="bg-[#f2f4f7] dark:bg-[#0f243a] text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                      <th className="py-2.5 px-4 w-12 text-center">م</th>
                      <th className="py-2.5 px-4 text-center">اسم الصنف</th>
                      <th className="py-2.5 px-4 text-center">الكمية</th>
                      <th className="py-2.5 px-4 text-center">وحدة القياس</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-[#0b1b2d]">
                    {items.map((item) => (
                      <tr key={item.id} className="text-slate-700 dark:text-slate-300">
                        <td className="py-3 px-4 text-center font-bold">{item.id}</td>
                        <td className="py-3 px-4 text-center font-medium">{item.name}</td>
                        <td className="py-3 px-4 text-center">{item.quantity}</td>
                        <td className="py-3 px-4 text-center text-slate-400">{item.unit || ''}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 7. المرفقات والمسوغات الفنية */}
            <div>
              <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5">
                المرفقات والمسوغات الفنية (كراسة المواصفات، عروض الأسعار) <span className="text-rose-500">*</span>
              </label>
              <div className="border-2 border-dashed border-[#7dd3fc] bg-[#f0f9ff]/60 dark:bg-sky-950/20 rounded-2xl p-5 text-center cursor-pointer hover:bg-[#e0f2fe]/60 transition-colors">
                <div className="flex flex-col items-center justify-center gap-1.5">
                  <i className="fa-regular fa-file-lines text-sky-500 text-lg"></i>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    اسحب الملفات هنا أو اضغط لإختيار ملف
                  </p>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500">
                    الأنواع المدعومة: PDF, Word, Excel بحد أقصى 25 ميغابايت للملف الواحد.
                  </p>
                </div>
              </div>
            </div>

            {/* 8. توجيهات وملاحظات إضافية لسكرتارية لجنة المنافسات */}
            <div>
              <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5">
                توجيهات وملاحظات إضافية لسكرتارية لجنة المنافسات <span className="text-rose-500">*</span>
              </label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="أي اشتراطات تخص جدول التوريد أو الموقع الجغرافي للتسليم داخل الحرم الجامعي..."
                className="w-full bg-slate-50/70 dark:bg-[#0f243a] border border-slate-200 dark:border-slate-700 rounded-2xl p-3.5 text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-[#01B0F5] resize-none leading-relaxed"
              ></textarea>
            </div>

            {/* أزرار الإجراء السفلية */}
            <div className="flex items-center justify-start gap-3 pt-3">
              {/* زر إرسال طلب الاعتماد */}
              <button
                type="submit"
                className="px-8 h-10 rounded-full bg-[#0095FF] hover:bg-[#0084e3] active:scale-[0.98] text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
              >
                إرسال طلب الإعتماد
              </button>

              {/* زر إلغاء */}
              <button
                type="button"
                onClick={handleClose}
                className="px-6 h-10 rounded-full border border-sky-400 dark:border-sky-500 bg-white dark:bg-transparent text-sky-500 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-950/30 active:scale-[0.98] font-bold text-xs transition-all cursor-pointer"
              >
                إلغاء
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
