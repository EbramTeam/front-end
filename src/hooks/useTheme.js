import { useCallback, useState } from 'react'

// قراءة/حفظ آمنة لو التخزين مش متاح
function getSavedTheme() {
  try {
    return localStorage.getItem('theme')
  } catch {
    return null
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem('theme', theme)
  } catch {
    /* التخزين غير متاح */
  }
}

/**
 * الوضع المظلم: يعتمد على كلاس "dark" على عنصر <html>.
 * الحالة الأولية تُقرأ من العنصر نفسه (الذي ضبطه سكربت index.html قبل الرسم).
 */
export function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    const fromDom = document.documentElement.classList.contains('dark')
    return fromDom || getSavedTheme() === 'dark'
  })

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev
      document.documentElement.classList.toggle('dark', next)
      saveTheme(next ? 'dark' : 'light')
      return next
    })
  }, [])

  return { isDark, toggleTheme }
}
