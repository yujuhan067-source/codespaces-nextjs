import Head from 'next/head'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import ImageSlider from '../components/ImageSlider'
import InfoSection from '../components/InfoSection'
import {
  HEALTH_ITEMS,
  SKIN_ITEMS,
  DIET_ITEMS,
} from '../data/seniorHealthContent'
import styles from '../styles/home.module.css'

function Home() {
  return (
    <>
      <Head>
        <title>시니어 건강 라이프</title>
        <meta
          name="description"
          content="시니어를 위한 건강, 피부, 다이어트 정보 홈페이지"
        />
      </Head>

      <NavBar />
      <Hero />

      <section className={styles.sliderSection}>
        <ImageSlider />
      </section>

      <InfoSection
        id="health"
        eyebrow="HEALTH"
        title="건강 관리"
        subtitle="일상 속 작은 습관이 건강한 노후를 만듭니다."
        items={HEALTH_ITEMS}
      />

      <InfoSection
        id="skin"
        eyebrow="SKIN CARE"
        title="피부 관리"
        subtitle="나이가 들수록 더 세심한 피부 관리가 필요합니다."
        items={SKIN_ITEMS}
        tint
      />

      <InfoSection
        id="diet"
        eyebrow="DIET"
        title="다이어트 & 영양"
        subtitle="균형 잡힌 식습관은 건강한 노후의 기본입니다."
        items={DIET_ITEMS}
      />

      <p className={styles.disclaimer}>
        ⚠️ 본 콘텐츠는 일반적인 건강 정보 제공을 목적으로 하며, 의학적 진단이나
        치료를 대체하지 않습니다. 개인의 건강 상태에 따라 반드시 의사 또는
        전문가와 상담하시기 바랍니다.
      </p>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} 시니어 건강 라이프. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Home
