import styles from './FeatureCards.module.css'

const FEATURES = [
  {
    icon: '✨',
    title: '부드러운 애니메이션',
    desc: '스크롤과 호버에 반응하는 자연스러운 모션으로 페이지에 생동감을 더합니다.',
  },
  {
    icon: '🖱️',
    title: '인터랙티브 버튼',
    desc: '클릭할 때마다 리플 효과가 퍼지는 버튼으로 사용자 피드백을 강화합니다.',
  },
  {
    icon: '🖼️',
    title: '이미지 슬라이더',
    desc: '자동 재생과 수동 탐색이 모두 가능한 캐러셀로 콘텐츠를 매력적으로 보여줍니다.',
  },
]

export default function FeatureCards() {
  return (
    <section id="features" className={styles.section}>
      <h2 className={styles.heading}>주요 기능</h2>
      <div className={styles.grid}>
        {FEATURES.map((f, i) => (
          <div
            key={f.title}
            className={styles.card}
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className={styles.icon}>{f.icon}</div>
            <h3 className={styles.cardTitle}>{f.title}</h3>
            <p className={styles.cardDesc}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
