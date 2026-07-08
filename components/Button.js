import { useCallback } from 'react'
import styles from './Button.module.css'

export default function Button({ onClick, ...props }) {
  const handleClick = useCallback(
    (e) => {
      const btn = e.currentTarget
      const rect = btn.getBoundingClientRect()
      const ripple = document.createElement('span')
      const size = Math.max(rect.width, rect.height)

      ripple.className = styles.ripple
      ripple.style.width = ripple.style.height = `${size}px`
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`

      btn.appendChild(ripple)
      ripple.addEventListener('animationend', () => ripple.remove())

      if (onClick) onClick(e)
    },
    [onClick]
  )

  return (
    <button type="button" className={styles.btn} onClick={handleClick} {...props} />
  )
}
