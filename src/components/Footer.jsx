



import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../assets/images'
import { footerLinks } from '../data/content'



const strokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const ChevronsLeft = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" {...strokeProps}>
    <path d="M11 17l-5-5 5-5M18 17l-5-5 5-5" />
  </svg>
)

const ChevronsUp = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" {...strokeProps}>
    <path d="M17 11l-5-5-5 5M17 18l-5-5-5 5" />
  </svg>
)

const socials = [
  {
    label: 'LinkedIn',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5a2.5 2.5 0 11-.001 5.001A2.5 2.5 0 014.98 3.5zM3 9.75h4V21H3zM9.75 9.75h3.83v1.54h.05c.53-1 1.84-2.07 3.78-2.07 4.04 0 4.79 2.66 4.79 6.1V21h-4v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.58V21h-4z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.69 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z" />
      </svg>
    ),
  },
  {
    label: 'X',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" {...strokeProps}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </svg>
    ),
  },
]

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (newsletterEmail.trim()) {
      setSubscribed(true)
      setTimeout(() => {
        setSubscribed(false)
        setNewsletterEmail('')
      }, 3500)
    }
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer dir="rtl" className="bg-[#01203d] text-white">
      <div className="mx-auto max-w-[1400px] px-4 pb-10 pt-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        
          <div className="space-y-4 lg:col-span-4">
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="IBRAM"
                className="h-auto w-32 object-contain sm:w-36 cursor-pointer"
              />
            </Link>
            <p className="max-w-xs text-[13px] font-medium leading-[1.9] text-white sm:text-sm">
              منصة إبرام لإدارة المشتريات، تأسست لتطوير تجربة المشتريات الرقمية
              وتسعى لتبسيط الإجراءات وتعزيز الكفاءة والشفافية من خلال حلول ذكية
              ومتكاملة.
            </p>
          </div>

          
          <div className="space-y-5 lg:col-span-2">
            <h4 className="text-base font-semibold text-[#009ef7]">روابط سريعة</h4>
            <ul className="space-y-3 text-sm text-white">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 transition-colors duration-200 hover:text-[#009ef7]"
                  >
                    <ChevronsLeft />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="space-y-5 lg:col-span-3">
            <h4 className="text-base font-semibold text-[#009ef7]">تواصل معنا</h4>
            <ul className="space-y-3.5 text-sm font-medium text-white">
              <li className="flex items-center gap-2.5">
                <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a
                  href="mailto:info@ibram.com"
                  dir="ltr"
                  className="transition-colors hover:text-[#009ef7]"
                >
                  info@ibram.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span>فلسطين , غزة</span>
              </li>
            </ul>
          </div>

          
          <div className="space-y-5 lg:col-span-3">
            <h4 className="text-base font-semibold text-[#009ef7]">ابقَ على اطلاع</h4>
            <p className="text-sm font-bold text-white">
              اشترك في نشرتنا الاخبارية ..
            </p>

            <form onSubmit={handleSubscribe}>
              <div className="relative flex h-[40px] w-full max-w-[260px] items-center overflow-hidden rounded-full bg-gradient-to-b from-[#00ACF1] to-[#007AE2] focus-within:ring-2 focus-within:ring-[#00ACF1]/50">
                <button
                  type="submit"
                  aria-label="اشتراك"
                  className="absolute left-2.5 z-10 flex h-6 w-6 cursor-pointer items-center justify-center text-white transition-transform hover:scale-110 active:scale-95"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.8 7.2l-2.1 10c-.15.7-.55.87-1.1.54l-3-2.2-1.45 1.4c-.16.16-.3.3-.6.3l.2-3.05 5.55-5c.24-.2-.05-.33-.38-.13l-6.85 4.3-2.95-.92c-.64-.2-.65-.64.14-.95l11.5-4.4c.53-.2 1 .13.83.95z" />
                  </svg>
                </button>

                <input
                  type="email"
                  required
                  placeholder="ادخل بريدك الالكتروني"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="absolute inset-y-0 left-[40px] right-0 h-full rounded-full bg-white px-4 text-right text-xs text-gray-700 placeholder:text-gray-500 focus:outline-none"
                />
              </div>

              {subscribed && (
                <p className="mt-2 text-xs font-semibold text-green-400">
                  شكراً لاشتراكك معنا بنجاح!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-4 py-4 text-xs sm:px-6 md:flex-row lg:px-8">
          
          <p className="text-white">
            © جميع الحقوق محفوظة{' '}
            <span className="inline-block bg-[#0b57d0] px-1 text-white">IBRAM</span>{' '}
            <span className="inline-block">2026</span>
          </p>

          
          <div className="flex items-center gap-6 text-white">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="transition-colors hover:text-[#009ef7]"
              >
                {s.icon}
              </a>
            ))}
          </div>

          
          <div className="flex items-center gap-5">
            <Link
              to="/privacy#privacy"
              className="text-slate-300 underline underline-offset-2 transition-colors hover:text-white"
            >
              سياسة الخصوصية
            </Link>
            <Link
              to="/privacy#terms"
              className="text-slate-300 underline underline-offset-2 transition-colors hover:text-white"
            >
              شروط الاستخدام
            </Link>
          </div>
        </div>
      </div>

      
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="العودة للأعلى"
        className={`fixed bottom-[52px] left-6 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#009ef7] text-white shadow-lg transition-all duration-300 hover:bg-[#008be3] hover:scale-110 active:scale-95 ${
          showTop
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <ChevronsUp />
      </button>
    </footer>
  )
}