import { useState, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDismiss } from '../hooks/useDismiss'

const defaultNotifications = [
  {
    id: 'PR-2026-0008',
    title: 'أُرجع طلبك للتعديل',
    note: 'الملاحظة: يرجى تحديد المواصفات الفنية بدقة.',
    order: 'طلب PR-2026-0008 — حواسيب محمولة.',
    time: 'منذ يومين',
    actionType: 'وصول معاملة',
    delivery: 'أُرسل بالبريد أيضاً',
    unread: true,
    iconType: 'tray',
  },
  {
    id: 'PR-2026-0001',
    title: 'اكتمل محضر فتح المظاريف',
    note: 'الطلب جاهز للمرحلة التالية.',
    order: 'طلب PR-2026-0001 — أجهزة حاسوب لمعمل الحاسب الآلي.',
    time: 'منذ 10 أيام',
    actionType: 'تحديث',
    delivery: 'أُرسل بالبريد أيضاً',
    unread: false,
    iconType: 'check-square',
  },
]

export default function NotificationMenu() {
  const [open, setOpen] = useState(false)
  const [filter, setFilter] = useState('all') // 'all' | 'unread'
  const [notifications, setNotifications] = useState(defaultNotifications)
  const wrapRef = useRef(null)
  const navigate = useNavigate()

  const close = useCallback(() => setOpen(false), [])
  useDismiss(open, [wrapRef], close)

  const unreadCount = notifications.filter((n) => n.unread).length
  const totalCount = notifications.length

  const filteredNotifications =
    filter === 'unread'
      ? notifications.filter((n) => n.unread)
      : notifications

  const handleNotificationClick = (item) => {
    // تحديد كمقروء عند الضغط
    setNotifications((prev) =>
      prev.map((n) => (n.id === item.id ? { ...n, unread: false } : n))
    )
    setOpen(false)
    if (item.id === 'PR-2026-0008') {
      navigate('/edit-order')
    } else {
      navigate(`/orders/${item.id}`)
    }
  }

  return (
    <div ref={wrapRef} className="relative" dir="rtl">
      {/* زر أيقونة الإشعارات (الجرس) */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="الإشعارات"
        aria-expanded={open}
        className="w-10 h-10 rounded-full flex items-center justify-center text-slate-900 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 relative transition-colors cursor-pointer"
      >
        <i className="fa-regular fa-bell text-[22px]"></i>
      </button>

      {/* النافذة المنبثقة للإشعارات */}
      {open && (
        <div
          className="absolute left-0 mt-2.5 z-50 w-[min(calc(100vw-28px),490px)] bg-white dark:bg-[#0c1f33] rounded-[22px] shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-[#E5E5E5] dark:border-slate-800/80 p-4 transition-all animate-in fade-in zoom-in-95 duration-150"
          style={{ fontFamily: '"Montserrat Arabic", sans-serif' }}
        >
          {/* شريط الفلاتر العلوي */}
          <div className="flex items-center gap-2.5">
            {/* فلتر: الكل */}
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`h-8 px-4 sm:px-5 rounded-full text-xs sm:text-[13px] font-semibold transition-all cursor-pointer flex items-center justify-center ${
                filter === 'all'
                  ? 'bg-[#00B4F0] text-black shadow-sm'
                  : 'bg-white dark:bg-transparent text-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:border-slate-400'
              }`}
            >
              الكل {totalCount}
            </button>

            {/* فلتر: غير مقروءة */}
            <button
              type="button"
              onClick={() => setFilter('unread')}
              className={`h-8 px-4 sm:px-5 rounded-full text-xs sm:text-[13px] font-semibold transition-all cursor-pointer flex items-center justify-center ${
                filter === 'unread'
                  ? 'bg-[#00B4F0] text-black shadow-sm'
                  : 'bg-white dark:bg-transparent text-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:border-slate-400'
              }`}
            >
              غير مقروءة {unreadCount}
            </button>
          </div>

          {/* الخط الفاصل الناعم */}
          <div className="w-full h-px bg-[#E5E5E5] dark:bg-slate-800/80 my-3"></div>

          {/* قائمة كروت الإشعارات (الشريطين فوق وتحت) */}
          <div className="space-y-2.5 max-h-[380px] overflow-y-auto">
            {filteredNotifications.length === 0 ? (
              <div className="py-8 text-center text-[#707070] dark:text-slate-500 text-xs sm:text-sm">
                لا توجد إشعارات حالياً
              </div>
            ) : (
              filteredNotifications.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleNotificationClick(item)}
                  className="bg-[#F4F4F4] dark:bg-[#10243b] hover:bg-[#eaeaea] dark:hover:bg-[#152e4a] rounded-[16px] p-3.5 sm:p-4 transition-colors cursor-pointer flex items-center gap-3.5"
                >
                  {/* الأيقونة (على اليمين في الواجهة العربية) */}
                  <div className="shrink-0 flex items-center justify-center">
                    {item.iconType === 'tray' ? (
                      /* أيقونة الصندوق الأسود (أرجع للتعديل) */
                      <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-white shadow-sm">
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                          <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                        </svg>
                      </div>
                    ) : (
                      /* أيقونة المربع مع علامة الصح (محضر فتح المظاريف) */
                      <div className="w-8 h-8 flex items-center justify-center text-black dark:text-slate-200">
                        <svg
                          className="w-6 h-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="9 11 12 14 22 4" />
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* محتوى الإشعار (على اليسار) */}
                  <div className="flex-1 min-w-0 text-right">
                    {/* السطر الأول: العنوان الرئيسي (أسود عريض) */}
                    <h4 className="font-bold text-[14px] sm:text-[15px] text-black dark:text-white leading-tight">
                      {item.title}
                    </h4>

                    {/* السطر الثاني: الملاحظة ورقم الطلب (لون #707070) */}
                    <div className="flex items-center justify-between gap-2 mt-1 text-[11px] sm:text-[12.5px] text-[#707070] dark:text-slate-300">
                      <span className="font-medium shrink-0">
                        {item.note}
                      </span>
                      <span className="font-normal truncate">
                        {item.order}
                      </span>
                    </div>

                    {/* السطر الثالث: التاريخ ووسيلة الإرسال (لون #707070) */}
                    <div className="flex items-center justify-between gap-2 mt-1 text-[10.5px] sm:text-[11.5px] text-[#707070] dark:text-slate-400 font-normal">
                      <div className="flex items-center gap-2">
                        <span>{item.delivery}</span>
                        <span>{item.actionType}</span>
                      </div>
                      <span className="shrink-0">{item.time}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}
