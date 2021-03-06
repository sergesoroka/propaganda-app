import Header from "./Header/Header";
import Statistic from "./Statistic/Statistic";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";

import { useRouter } from "next/router";

import {
  uniqueNarrativesUKR,
  uniqueFakesUKR,
  uniqueMediasUKR,
  uniqueNarrativesENG,
  uniqueFakesENG,
  uniqueMediasENG,
} from "../utils/statisticCalculate";

import styles from "../styles/Home.module.css";

export default function Layout({ children }) {
  const router = useRouter();
  const { pathname } = router;
  return (
    <main className={styles.main}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.contentArea}>
        {pathname !== "/narratives/[id]" && <Header />}
        <div className={styles.statisticMobile}>
          <Statistic
            uniqueNarratives={uniqueNarrativesUKR}
            uniqueFakes={uniqueFakesUKR}
            uniqueMedias={uniqueMediasUKR}
          />
        </div>

        {children}
        <Footer />
      </div>
    </main>
  );
}
