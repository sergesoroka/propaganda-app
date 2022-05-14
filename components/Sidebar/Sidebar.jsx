import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import Statistic from "../Statistic/Statistic";
import styles from "./Sidebar.module.css";

import {
  uniqueNarrativesUKR,
  uniqueFakesUKR,
  uniqueMediasUKR,
  uniqueNarrativesENG,
  uniqueFakesENG,
  uniqueMediasENG,
} from "../../utils/statisticCalculate";



export default function Sidebar() {
  const [diary, setDiary] = useState(false);
  const [naratives, setNaratives] = useState(false);

  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <h1 className={styles.projectName}>
        <Link href='/'>
          <a><Image src='/logo.svg' alt='logo' width='200' height='43'/></a>
          
        </Link>
      </h1>
      <div className={styles.sidebar}>
        {pathname == "/uk" ? (
          <Statistic
            uniqueNarratives={uniqueNarrativesUKR}
            uniqueFakes={uniqueFakesUKR}
            uniqueMedias={uniqueMediasUKR}
          />
        ) : null}
        {pathname !== "/uk" ? (
          <Statistic
            uniqueNarratives={uniqueNarrativesENG}
            uniqueFakes={uniqueFakesENG}
            uniqueMedias={uniqueMediasENG}
          />
        ) : null}
        {/* <div className={styles.sidebarItem}>
          <h3
            className={
              diary ? styles.sidebarTitlesActive : styles.sidebarTitles
            }
            onClick={() => setDiary(!diary)}
          >
            # Diary
          </h3>
          {diary ? (
            <ul className={styles.list}>
              <li className={styles.listItem}>Antispiegel</li>
              <li className={styles.listItem}>SNA.DE</li>
              <li className={styles.listItem}>Report24 News</li>
            </ul>
          ) : null}
        </div> */}
        <div className={styles.sidebarItem}>
          <h3 className={styles.sidebarTitles}>
            <Link href="/whitelist">
              <a># White List</a>
            </Link>
          </h3>
        </div>
        <div className={styles.sidebarItem}>
          <h3 className={styles.sidebarTitles}>
            <Link href="/blacklist">
              <a># Black List</a>
            </Link>
          </h3>
        </div>
        {/* <div className={styles.sidebarItem}>
          <h3
            className={
              naratives ? styles.sidebarTitlesActive : styles.sidebarTitles
            }
            onClick={() => setNaratives(!naratives)}
          >
            # Naratives
          </h3>
          {naratives ? (
            <ul className={styles.list}>
              <li className={styles.listItem}>
                Maidan in 2014 was a coup d &apos; état
              </li>
              <li className={styles.listItem}>
                Ukraine fails to deliver commitments under Minsk Agreements/Kyiv
                does not comply with the Minsk agreements
              </li>
            </ul>
          ) : null}
        </div> */}
      </div>
    </>
  );
}
