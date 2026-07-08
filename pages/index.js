import Head from 'next/head'
import Hero from '../components/Hero'
import ImageSlider from '../components/ImageSlider'
import FeatureCards from '../components/FeatureCards'
import styles from '../styles/home.module.css'

function Home() {
  return (
    <>
      <Head>
        <title>My Homepage</title>
        <meta
          name="description"
          content="애니메이션, 버튼 인터랙션, 이미지 슬라이더가 있는 홈페이지"
        />
      </Head>

      <Hero />

      <section className={styles.sliderSection}>
        <ImageSlider />
      </section>

      <FeatureCards />

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} My Homepage. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Home
