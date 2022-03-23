import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Header.module.css";

export default function Header() {
  const router = useRouter();
  return (
    <div className={styles.headerWrap}>
      <div className={styles.langMenu}>
        <ul className={styles.mainMenuList}>
          <li
            className={
              router.pathname == "/lang/it"
                ? styles.activeLink
                : styles.mainMenuListItem
            }
          >
            <Link href="/lang/it">
              <a>IT</a>
            </Link>
          </li>
          <li
            className={
              router.pathname == "/lang/de"
                ? styles.activeLink
                : styles.mainMenuListItem
            }
          >
            <Link href="/lang/de">
              <a>DE</a>
            </Link>
          </li>
          <li
            className={
              router.pathname == "/lang/en"
                ? styles.activeLink
                : styles.mainMenuListItem
            }
          >
            <Link href="/lang/en">
              <a>ENG</a>
            </Link>
          </li>
          <li
            className={
              router.pathname == "/lang/ru"
                ? styles.activeLink
                : styles.mainMenuListItem
            }
          >
            <Link href="/lang/ru">
              <a>RU</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.mainMenu}>
        <ul className={styles.mainMenuList}>
          <li className={styles.mainMenuListItem}>
            <Link href="/">
              <a># Fakes</a>
            </Link>
          </li>

          <li className={styles.mainMenuListItem}>
            <Link href="/about">
              <a># About</a>
            </Link>
          </li>
          <li className={styles.mainMenuListItem}>
            <Link href="/how">
              <a># How</a>
            </Link>
          </li>
          <li className={styles.mainMenuListItem}>
            <Link href="/addfake">
              <a># Add Fake</a>
            </Link>
          </li>
          <li className={styles.mainMenuListItem}>
            <Link href="/download">
              <a># Download</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
