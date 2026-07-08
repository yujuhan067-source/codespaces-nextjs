import Link from 'next/link'
import styles from './InfoSection.module.css'

export default function InfoSection({
  id,
  eyebrow,
  title,
  subtitle,
  items,
  tint,
  ctaHref,
  ctaLabel,
}) {
  return (
    <section
      id={id}
      className={`${styles.section} ${tint ? styles.tint : ''}`}
    >
      <div className={styles.header}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <div className={styles.grid}>
        {items.map((item, i) => (
          <div
            key={item.title}
            className={styles.card}
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            <div className={styles.icon}>{item.icon}</div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDesc}>{item.desc}</p>
          </div>
        ))}
      </div>
      {ctaHref && (
        <div className={styles.ctaRow}>
          <Link href={ctaHref} className={styles.ctaLink}>
            {ctaLabel} →
          </Link>
        </div>
      )}
    </section>
  )
}
