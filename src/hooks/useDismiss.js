import { useEffect } from 'react'

/**
 * يغلق عنصرًا مفتوحًا (قائمة) عند:
 *  - الضغط خارج العناصر المحددة في refs
 *  - الضغط على زر Escape
 */
export function useDismiss(open, refs, onClose) {
  useEffect(() => {
    if (!open) return

    const onPointer = (e) => {
      const inside = refs.some((ref) => ref.current && ref.current.contains(e.target))
      if (!inside) onClose()
    }
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('click', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onPointer)
      document.removeEventListener('keydown', onKey)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, onClose])
}
