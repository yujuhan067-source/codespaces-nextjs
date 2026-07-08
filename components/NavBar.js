import styles from './NavBar.module.css'

const LINKS = [
  { href: '#health', label: '건강' },
  { href: '#skin', label: '피부' },
  { href: '#diet', label: '다이어트' },
]

export default function NavBar() {
  return (
    <header className={styles.nav}>
      <span className={styles.logo}>시니어 건강 라이프</span>
      <nav className={styles.links}>
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} className={styles.link}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
