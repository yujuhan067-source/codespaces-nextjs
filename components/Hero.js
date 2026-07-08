import Button from './Button'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.shape1} />
      <div className={styles.shape2} />
      <div className={styles.content}>
        <span className={`${styles.badge} ${styles.fadeIn}`}>
          시니어를 위한 건강 정보
        </span>
        <h1 className={`${styles.title} ${styles.fadeInUp}`}>
          건강하고 활기찬 노후,
          <br />
          작은 습관에서 시작됩니다
        </h1>
        <p className={`${styles.subtitle} ${styles.fadeInUp}`}>
          건강 관리, 피부 관리, 균형 잡힌 다이어트까지. 매일 실천할 수 있는
          생활 속 건강 정보를 전해드립니다.
        </p>
        <div className={`${styles.ctaRow} ${styles.fadeInUp}`}>
          <Button onClick={() => alert('건강 정보를 확인해 보세요!')}>
            건강 정보 보기
          </Button>
          <a href="#health" className={styles.secondaryLink}>
            더 알아보기 ↓
          </a>
        </div>
      </div>
    </section>
  )
}
