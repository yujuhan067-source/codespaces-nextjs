import { useCallback, useEffect, useState } from 'react'
import styles from './ImageSlider.module.css'

const SLIDES = [
  {
    src: 'https://picsum.photos/id/1015/1200/600',
    alt: '강과 산이 있는 풍경',
    caption: '매일 30분, 자연 속을 걸어보세요',
  },
  {
    src: 'https://picsum.photos/id/1041/1200/600',
    alt: '숲 속의 오두막',
    caption: '충분한 휴식이 건강의 시작입니다',
  },
  {
    src: 'https://picsum.photos/id/1043/1200/600',
    alt: '들판의 나뭇잎',
    caption: '제철 재료로 균형 잡힌 식탁을',
  },
  {
    src: 'https://picsum.photos/id/1050/1200/600',
    alt: '해질녘 풍경',
    caption: '규칙적인 하루가 건강을 만듭니다',
  },
]

export default function ImageSlider() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const goTo = useCallback((i) => {
    setIndex((i + SLIDES.length) % SLIDES.length)
  }, [])

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    if (paused) return undefined
    const timer = setInterval(() => {
      setIndex((v) => (v + 1) % SLIDES.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [paused])

  return (
    <div
      className={styles.slider}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={styles.track}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {SLIDES.map((slide) => (
          <div className={styles.slide} key={slide.src}>
            <img src={slide.src} alt={slide.alt} className={styles.image} />
            <div className={styles.caption}>{slide.caption}</div>
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="이전 이미지"
        className={`${styles.arrow} ${styles.prev}`}
        onClick={prev}
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="다음 이미지"
        className={`${styles.arrow} ${styles.next}`}
        onClick={next}
      >
        ›
      </button>

      <div className={styles.dots}>
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`${i + 1}번 이미지로 이동`}
            className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  )
}
