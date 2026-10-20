
export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      id="themeToggle"
      type="button"
      onClick={onToggle}
      className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none"
      aria-label="تبديل الوضع"
    >
      <svg
        className={`w-5 h-5 ${isDark ? 'hidden' : ''}`}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
      </svg>
      <svg
        className={`w-5 h-5 ${isDark ? '' : 'hidden'}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="5"></circle>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42m12.72-12.72l1.42-1.42"
        ></path>
      </svg>
    </button>
  )
}
