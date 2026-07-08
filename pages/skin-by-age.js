import Head from 'next/head'
import Link from 'next/link'
import NavBar from '../components/NavBar'
import InfoSection from '../components/InfoSection'
import {
  SIXTIES_SKIN_ITEMS,
  SEVENTIES_SKIN_ITEMS,
  EIGHTIES_PLUS_SKIN_ITEMS,
} from '../data/skinByAge'
import homeStyles from '../styles/home.module.css'
import styles from '../styles/byAgePage.module.css'

function SkinByAge() {
  return (
    <>
      <Head>
        <title>나이대별 피부관리 비법 | 시니어 건강 라이프</title>
        <meta
          name="description"
          content="60대, 70대, 80대 이상 연령대별로 꼭 챙겨야 할 핵심 피부관리 비법"
        />
      </Head>

      <NavBar />

      <header className={styles.pageHeader}>
        <Link href="/" className={styles.backLink}>
          ← 홈으로
        </Link>
        <h1 className={styles.pageTitle}>나이대별 피부관리 비법</h1>
        <p className={styles.pageSubtitle}>
          나이가 들수록 피부는 더 얇아지고 건조해집니다. 우리 나이대에 맞는
          피부 관리 습관부터 시작해보세요.
        </p>
      </header>

      <InfoSection
        id="sixties"
        eyebrow="60대"
        title="탄력을 지키는 60대 피부 관리"
        subtitle="보습과 자외선 차단이 가장 중요한 시기입니다."
        items={SIXTIES_SKIN_ITEMS}
      />

      <InfoSection
        id="seventies"
        eyebrow="70대"
        title="약해진 피부를 지키는 70대 관리"
        subtitle="피부 장벽이 약해지므로 자극을 최소화하는 것이 핵심입니다."
        items={SEVENTIES_SKIN_ITEMS}
        tint
      />

      <InfoSection
        id="eighties-plus"
        eyebrow="80대 이상"
        title="섬세한 케어가 필요한 80대 이상"
        subtitle="가족, 보호자와 함께 살피는 피부 관리가 더욱 중요해집니다."
        items={EIGHTIES_PLUS_SKIN_ITEMS}
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

export default SkinByAge
