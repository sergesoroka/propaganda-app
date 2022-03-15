import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.headerWrap}>
      <div className={styles.langMenu}>
        <ul className={styles.mainMenuList}>
          <li className={styles.mainMenuListItem}>IT</li>
          <li className={styles.mainMenuListItem}>DE</li>
          <li className={styles.mainMenuListItem}>ENG</li>
          <li className={styles.mainMenuListItem}>RU</li>
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
