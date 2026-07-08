import Head from 'next/head'
import Link from 'next/link'
import NavBar from '../components/NavBar'
import InfoSection from '../components/InfoSection'
import {
  SIXTIES_DIET_ITEMS,
  SEVENTIES_DIET_ITEMS,
  EIGHTIES_PLUS_DIET_ITEMS,
} from '../data/dietByAge'
import homeStyles from '../styles/home.module.css'
import styles from '../styles/byAgePage.module.css'

function DietByAge() {
  return (
    <>
      <Head>
        <title>나이대별 다이어트&영양 비법 | 시니어 건강 라이프</title>
        <meta
          name="description"
          content="60대, 70대, 80대 이상 연령대별로 꼭 챙겨야 할 핵심 식습관과 영양 비법"
        />
      </Head>

      <NavBar />

      <header className={styles.pageHeader}>
        <Link href="/" className={styles.backLink}>
          ← 홈으로
        </Link>
        <h1 className={styles.pageTitle}>나이대별 다이어트 & 영양 비법</h1>
        <p className={styles.pageSubtitle}>
          나이가 들수록 필요한 영양소와 식사 방식이 달라집니다. 우리 나이대에
          맞는 식습관부터 챙겨보세요.
        </p>
      </header>

      <InfoSection
        id="sixties"
        eyebrow="60대"
        title="근육을 지키는 60대 식습관"
        subtitle="체중 감량보다 근육량 유지에 초점을 맞출 때입니다."
        items={SIXTIES_DIET_ITEMS}
      />

      <InfoSection
        id="seventies"
        eyebrow="70대"
        title="편안하게 먹는 70대 식습관"
        subtitle="소화가 잘 되고 씹기 편한 식사가 중요해집니다."
        items={SEVENTIES_DIET_ITEMS}
        tint
      />

      <InfoSection
        id="eighties-plus"
        eyebrow="80대 이상"
        title="안전하게 챙기는 80대 이상 식습관"
        subtitle="삼킴과 탈수 예방 등 보호자의 관심이 더욱 필요한 시기입니다."
        items={EIGHTIES_PLUS_DIET_ITEMS}
      />

      <p className={homeStyles.disclaimer}>
        ⚠️ 본 콘텐츠는 일반적인 건강 정보 제공을 목적으로 하며, 의학적 진단이나
        치료를 대체하지 않습니다. 개인의 건강 상태에 따라 반드시 의사 또는
        전문가와 상담하시기 바랍니다.
      </p>

      <footer className={homeStyles.footer}>
        <p>&copy; {new Date().getFullYear()} 시니어 건강 라이프. All rights reserved.</p>
      </footer>
    </>
  )
}

export default DietByAge
