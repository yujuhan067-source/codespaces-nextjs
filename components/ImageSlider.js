import { useCallback, useEffect, useState } from 'react'
import styles from './ImageSlider.module.css'

const SLIDES = [
  {
    src: 'https://picsum.photos/id/1015/1200/600',
    alt: '강과 산이 있는 풍경',
    caption: '자연에서 영감을 얻다',
  },
  {
    src: 'https://picsum.photos/id/1041/1200/600',
    alt: '숲 속의 오두막',
    caption: '조용한 순간을 소중히',
  },
  {
    src: 'https://picsum.photos/id/1043/1200/600',
    alt: '들판의 나뭇잎',
    caption: '디테일에 집중하다',
  },
  {
    src: 'https://picsum.photos/id/1050/1200/600',
    alt: '해질녘 도시 풍경',
    caption: '새로운 하루를 시작하다',
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
