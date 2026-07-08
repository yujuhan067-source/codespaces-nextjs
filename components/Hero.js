import Button from './Button'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.shape1} />
      <div className={styles.shape2} />
      <div className={styles.content}>
        <span className={`${styles.badge} ${styles.fadeIn}`}>새로운 시작</span>
        <h1 className={`${styles.title} ${styles.fadeInUp}`}>
          당신의 아이디어를
          <br />
          현실로 만들어보세요
        </h1>
        <p className={`${styles.subtitle} ${styles.fadeInUp}`}>
          애니메이션, 인터랙션, 이미지 슬라이더가 살아있는 홈페이지를
          경험해보세요.
        </p>
        <div className={`${styles.ctaRow} ${styles.fadeInUp}`}>
          <Button onClick={() => alert('시작하기를 눌렀습니다!')}>
            지금 시작하기
          </Button>
          <a href="#features" className={styles.secondaryLink}>
            더 알아보기 ↓
          </a>
        </div>
      </div>
    </section>
  )
}
