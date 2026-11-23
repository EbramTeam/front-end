import { useCallback, useState } from 'react'

function getSavedTheme() {
  try {
    return typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null
  } catch {
    return null
  }
}

function saveTheme(theme) {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', theme)
    }
  } catch {}
}

export function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof document === 'undefined') return false
    const fromDom = document.documentElement.classList.contains('dark')
    return fromDom || getSavedTheme() === 'dark'
  })

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev
      if (typeof document !== 'undefined') {
        document.documentElement.classList.toggle('dark', next)
      }
      saveTheme(next ? 'dark' : 'light')
      return next
    })
  }, [])

  return { isDark, toggleTheme }
}
