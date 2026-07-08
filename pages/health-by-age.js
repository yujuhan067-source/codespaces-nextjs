import Head from 'next/head'
import Link from 'next/link'
import NavBar from '../components/NavBar'
import InfoSection from '../components/InfoSection'
import {
  SIXTIES_ITEMS,
  SEVENTIES_ITEMS,
  EIGHTIES_PLUS_ITEMS,
} from '../data/healthByAge'
import homeStyles from '../styles/home.module.css'
import styles from '../styles/healthByAge.module.css'

function HealthByAge() {
  return (
    <>
      <Head>
        <title>나이대별 건강관리 비법 | 시니어 건강 라이프</title>
        <meta
          name="description"
          content="60대, 70대, 80대 이상 연령대별로 꼭 챙겨야 할 핵심 건강관리 비법"
        />
      </Head>

      <NavBar />

      <header className={styles.pageHeader}>
        <Link href="/" className={styles.backLink}>
          ← 홈으로
        </Link>
        <h1 className={styles.pageTitle}>나이대별 건강관리 비법</h1>
        <p className={styles.pageSubtitle}>
          연령대에 따라 신경 써야 할 건강 포인트는 조금씩 달라집니다. 우리
          나이대에 맞는 핵심 습관부터 시작해보세요.
        </p>
      </header>

      <InfoSection
        id="sixties"
        eyebrow="60대"
        title="활기찬 60대를 위한 습관"
        subtitle="근육량 감소가 시작되는 시기, 예방이 가장 중요합니다."
        items={SIXTIES_ITEMS}
      />

      <InfoSection
        id="seventies"
        eyebrow="70대"
        title="든든한 70대를 위한 습관"
        subtitle="낙상 예방과 만성질환 관리에 더 신경 써야 할 때입니다."
        items={SEVENTIES_ITEMS}
        tint
      />

      <InfoSection
        id="eighties-plus"
        eyebrow="80대 이상"
        title="편안한 80대 이상을 위한 습관"
        subtitle="가족, 보호자와 함께하는 건강 관리가 더욱 중요해집니다."
        items={EIGHTIES_PLUS_ITEMS}
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

export default HealthByAge
