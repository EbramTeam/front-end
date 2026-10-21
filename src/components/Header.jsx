// import { useCallback, useEffect, useRef, useState } from 'react'
// import { logo } from '../assets/images'
// import { desktopNavLinks, mobileNavLinks } from '../data/content'
// import { useDismiss } from '../hooks/useDismiss'
// import LanguageMenu from './LanguageMenu'
// import ThemeToggle from './ThemeToggle'

// const startGradient = { background: 'linear-gradient(135deg, #00ADF1 0%, #0079E2 100%)' }

// const desktopLinkClass = 'hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
// const mobileLinkClass =
//   'block px-4 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'

// export default function Header({ isDark, onToggleTheme }) {
//   const [menuOpen, setMenuOpen] = useState(false)
//   const menuRef = useRef(null)
//   const menuBtnRef = useRef(null)

//   const closeMenu = useCallback(() => setMenuOpen(false), [])

//   // إغلاق القائمة عند الضغط خارجها أو بزر Escape
//   useDismiss(menuOpen, [menuRef, menuBtnRef], closeMenu)

//   // إغلاق القائمة تلقائيًا لما تكبر الشاشة (lg = 1024px)
//   useEffect(() => {
//     const mq = window.matchMedia('(min-width: 1024px)')
//     const onChange = (e) => {
//       if (e.matches) setMenuOpen(false)
//     }
//     mq.addEventListener('change', onChange)
//     return () => mq.removeEventListener('change', onChange)
//   }, [])

//   return (
//     <header
//       dir="ltr"
//       className="relative z-20 w-full px-4 sm:px-6 lg:px-8 py-2 sm:py-3 flex flex-row-reverse items-center justify-between gap-4"
//     >
//       <div className="nav-glow" aria-hidden="true"></div>

//       {/* 1. الشعار على أقصى اليمين تماماً */}
//       <a href="/" className="flex flex-1 basis-0 items-center justify-end gap-2">
//         <div className="text-blue-600 dark:text-blue-400 font-extrabold text-2xl tracking-wider flex items-center gap-4">
//           <img
//             src={logo}
//             alt="IBRAM"
//             className="w-[130px] sm:w-[160px] lg:w-[196px] aspect-[196/100] object-contain select-none"
//           />
//         </div>
//       </a>

//       {/* 2. القائمة في المنتصف */}
//       <nav
//         className="hidden lg:flex items-center justify-center rounded-full px-6 py-2
//           bg-white/30 backdrop-blur-xl border border-sky-200/50
//           shadow-[0_8px_32px_rgba(31,38,135,0.10),inset_0_1px_0_rgba(255,255,255,0.7)]
//           dark:bg-white/5 dark:border-white/15
//           dark:shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.12)]"
//       >
//         <ul className="flex items-center gap-8 text-sm font-medium whitespace-nowrap">
//           {desktopNavLinks.map(({ label, href }) => (
//             <li key={label}>
//               <a href={href} className={desktopLinkClass}>
//                 {label}
//               </a>
//             </li>
//           ))}
//           <li>
//             <a
//               href="#"
//               className="bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 px-4 py-1.5 rounded-full font-semibold shadow-inner"
//             >
//               الرئيسية
//             </a>
//           </li>
//         </ul>
//       </nav>

//       {/* 3. الأزرار وأيقونات اليسار */}
//       <div className="flex flex-1 basis-0 items-center justify-start gap-1 sm:gap-4">
//         {/* زر ابدأ الآن مع تدرج الألوان وحركة الصعود والهبوط */}
//         <a
//           href="#"
//           className="hidden sm:inline-block shrink-0 whitespace-nowrap text-[#000000] font-semibold px-6 py-2.5 rounded-full shadow-lg shadow-blue-500/30 transition-all text-sm animate-bounce"
//           style={startGradient}
//         >
//           ابدأ الآن
//         </a>

//         <LanguageMenu />

//         <div className="hidden sm:block h-5 w-[1px] bg-gray-300 dark:bg-gray-700"></div>

//         <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />

//         <button
//           id="menuToggle"
//           ref={menuBtnRef}
//           type="button"
//           onClick={() => setMenuOpen((o) => !o)}
//           className="lg:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none"
//           aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
//           aria-expanded={menuOpen}
//           aria-controls="mobileMenu"
//         >
//           <svg
//             className={`w-6 h-6 ${menuOpen ? 'hidden' : ''}`}
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
//           </svg>
//           <svg
//             className={`w-6 h-6 ${menuOpen ? '' : 'hidden'}`}
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18"></path>
//           </svg>
//         </button>
//       </div>

      
//       <div
//         id="mobileMenu"
//         ref={menuRef}
//         dir="rtl"
//         className={`${menuOpen ? '' : 'hidden'} lg:hidden absolute top-full inset-x-4 sm:inset-x-6 -mt-1 rounded-2xl p-3
//           bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl
//           dark:bg-[#0a2036]/95 dark:border-white/15 z-40`}
//       >
//         <ul className="flex flex-col text-sm font-medium">
//           <li>
//             <a
//               href="/"
//               onClick={closeMenu}
//               className="block bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 px-4 py-3 rounded-xl font-semibold"
//             >
//               الرئيسية
//             </a>
//           </li>
//           {mobileNavLinks.map(({ label, href }) => (
//             <li key={label}>
//               <a href={href} onClick={closeMenu} className={mobileLinkClass}>
//                 {label}
//               </a>
//             </li>
//           ))}
//         </ul>
//         <a
//           href="#"
//           onClick={closeMenu}
//           className="sm:hidden mt-2 block text-center text-white font-semibold px-6 py-3 rounded-full shadow-md shadow-blue-500/20 transition-all text-sm animate-bounce"
//           style={startGradient}
//         >
//           ابدأ الآن
//         </a>
//       </div>
//     </header>
//   )
// }




import { useCallback, useEffect, useRef, useState } from 'react'
import { logo } from '../assets/images'
import { desktopNavLinks, mobileNavLinks } from '../data/content'
import { useDismiss } from '../hooks/useDismiss'
import LanguageMenu from './LanguageMenu'
import ThemeToggle from './ThemeToggle'

const startGradient = { background: 'linear-gradient(135deg, #00ADF1 0%, #0079E2 100%)' }

const desktopLinkClass = 'hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
const mobileLinkClass =
  'block px-4 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'

export default function Header({ isDark, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const menuBtnRef = useRef(null)

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  // إغلاق القائمة عند الضغط خارجها أو بزر Escape
  useDismiss(menuOpen, [menuRef, menuBtnRef], closeMenu)

  // إغلاق القائمة تلقائيًا لما تكبر الشاشة (lg = 1024px)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = (e) => {
      if (e.matches) setMenuOpen(false)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <header
      dir="ltr"
      className="relative z-20 w-full px-4 sm:px-8 lg:px-16 py-2 sm:py-3 flex flex-row-reverse items-center justify-between gap-4"
    >
      <div className="nav-glow" aria-hidden="true"></div>

      {/* 1. الشعار على أقصى اليمين تماماً */}
      <a href="/" className="flex flex-1 basis-0 items-center justify-end gap-2">
        <div className="text-blue-600 dark:text-blue-400 font-extrabold text-2xl tracking-wider flex items-center gap-4">
          <img
            src={logo}
            alt="IBRAM"
            className="w-[130px] sm:w-[160px] lg:w-[196px] aspect-[196/100] object-contain select-none"
          />
        </div>
      </a>

      {/* 2. القائمة في المنتصف */}
      <nav
        className="hidden lg:flex items-center justify-center rounded-full px-6 py-2
          bg-white/30 backdrop-blur-xl border border-sky-200/50
          shadow-[0_8px_32px_rgba(31,38,135,0.10),inset_0_1px_0_rgba(255,255,255,0.7)]
          dark:bg-white/5 dark:border-white/15
          dark:shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.12)]"
      >
        <ul className="flex items-center gap-8 text-sm font-medium whitespace-nowrap">
          {desktopNavLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className={desktopLinkClass}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              className="bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 px-4 py-1.5 rounded-full font-semibold shadow-inner"
            >
              الرئيسية
            </a>
          </li>
        </ul>
      </nav>

      {/* 3. الأزرار وأيقونات اليسار */}
      <div className="flex flex-1 basis-0 items-center justify-start gap-1 sm:gap-4">
        {/* زر ابدأ الآن مع تدرج الألوان وحركة الصعود والهبوط */}
        <a
          href="#"
          className="hidden sm:inline-block shrink-0 whitespace-nowrap text-[#000000] font-semibold px-6 py-2.5 rounded-full shadow-lg shadow-blue-500/30 transition-all text-sm animate-bounce"
          style={startGradient}
        >
          ابدأ الآن
        </a>

        <LanguageMenu />

        <div className="hidden sm:block h-5 w-[1px] bg-gray-300 dark:bg-gray-700"></div>

        <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />

        <button
          id="menuToggle"
          ref={menuBtnRef}
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="lg:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none"
          aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          aria-expanded={menuOpen}
          aria-controls="mobileMenu"
        >
          <svg
            className={`w-6 h-6 ${menuOpen ? 'hidden' : ''}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <svg
            className={`w-6 h-6 ${menuOpen ? '' : 'hidden'}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18"></path>
          </svg>
        </button>
      </div>

      
      <div
        id="mobileMenu"
        ref={menuRef}
        dir="rtl"
        className={`${menuOpen ? '' : 'hidden'} lg:hidden absolute top-full inset-x-4 sm:inset-x-8 -mt-1 rounded-2xl p-3
          bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl
          dark:bg-[#0a2036]/95 dark:border-white/15 z-40`}
      >
        <ul className="flex flex-col text-sm font-medium">
          <li>
            <a
              href="/"
              onClick={closeMenu}
              className="block bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 px-4 py-3 rounded-xl font-semibold"
            >
              الرئيسية
            </a>
          </li>
          {mobileNavLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} onClick={closeMenu} className={mobileLinkClass}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#"
          onClick={closeMenu}
          className="sm:hidden mt-2 block text-center text-white font-semibold px-6 py-3 rounded-full shadow-md shadow-blue-500/20 transition-all text-sm animate-bounce"
          style={startGradient}
        >
          ابدأ الآن
        </a>
      </div>
    </header>
  )
}