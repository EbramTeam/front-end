import { useCallback, useRef, useState } from 'react'
import { useDismiss } from '../hooks/useDismiss'
import { languages } from '../data/content'

const itemClass = `group w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl text-sm font-medium text-start transition-colors
  hover:bg-gray-50 dark:hover:bg-white/5
  data-[active=true]:bg-blue-50 data-[active=true]:text-blue-600
  dark:data-[active=true]:bg-blue-950/60 dark:data-[active=true]:text-blue-400`

// اللغة المحفوظة (الافتراضي: العربية)
function getSavedLang() {
  try {
    const saved = localStorage.getItem('lang')
    return languages.some((l) => l.code === saved) ? saved : 'ar'
  } catch {
    return 'ar'
  }
}

export default function LanguageMenu() {
  const [open, setOpen] = useState(false)
  const [lang, setLang] = useState(getSavedLang)
  const wrapRef = useRef(null)

  const close = useCallback(() => setOpen(false), [])
  useDismiss(open, [wrapRef], close)

  const current = languages.find((l) => l.code === lang) ?? languages[0]

  const selectLang = (code) => {
    setLang(code)
    try {
      localStorage.setItem('lang', code)
    } catch {
      /* التخزين غير متاح */
    }
    setOpen(false)
  }

  return (
    <div id="langWrap" ref={wrapRef} className="relative">
      <button
        id="langToggle"
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="langMenu"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer p-2 focus:outline-none"
      >
        <svg
          data-open={String(open)}
          className="hidden sm:block w-3.5 h-3.5 transition-transform duration-300 data-[open=true]:rotate-180"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
        </svg>

        <span className="hidden sm:inline">{current.label}</span>

        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
          ></path>
        </svg>
      </button>

      <div
        id="langMenu"
        data-open={String(open)}
        role="menu"
        dir="rtl"
        className="absolute left-0 top-full mt-2 w-44 rounded-2xl p-1.5 z-30 origin-top-left
          bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl
          dark:bg-[#0a2036]/95 dark:border-white/15
          transition-all duration-200 ease-out
          opacity-0 invisible scale-95 -translate-y-1 pointer-events-none
          data-[open=true]:opacity-100 data-[open=true]:visible data-[open=true]:scale-100
          data-[open=true]:translate-y-0 data-[open=true]:pointer-events-auto"
      >
        {languages.map(({ code, label }) => (
          <button
            key={code}
            type="button"
            role="menuitem"
            data-active={String(code === lang)}
            onClick={() => selectLang(code)}
            className={itemClass}
          >
            <span>{label}</span>
            <svg
              className="w-4 h-4 opacity-0 group-data-[active=true]:opacity-100 transition-opacity"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
            </svg>
          </button>
        ))}
      </div>
    </div>
  )
}
