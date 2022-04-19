import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Header.module.css";

export default function Header() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className={styles.headerWrap}>
      <div className={styles.langMenu}>
        <ul className={styles.mainMenuList}>
          <li
            className={
              pathname == "/it" || pathname == "/it/about"
                ? styles.activeLink
                : styles.mainMenuListItem
            }
          >
            <Link href="/it">
              <a>IT</a>
            </Link>
          </li>
          <li
            className={
              router.pathname == "/de" || pathname == "/de/about"
                ? styles.activeLink
                : styles.mainMenuListItem
            }
          >
            <Link href="/de">
              <a>DE</a>
            </Link>
          </li>
          <li
            className={
              router.pathname == "/"
                ? styles.activeLink
                : styles.mainMenuListItem
            }
          >
            <Link href="/">
              <a>ENG</a>
            </Link>
          </li>
          <li
            className={
              router.pathname == "/ru" || pathname == "/ru/about"
                ? styles.activeLink
                : styles.mainMenuListItem
            }
          >
            <Link href="/ru">
              <a>RU</a>
            </Link>
          </li>
          <li
            className={
              router.pathname == "/uk" || pathname == "/uk/about"
                ? styles.activeLink
                : styles.mainMenuListItem
            }
          >
            <Link href="/uk">
              <a>UKR</a>
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

          <li
            className={
              pathname === "/it/about" ||
              pathname === "/de/about" ||
              pathname === "/ru/about" ||
              pathname === "/uk/about"
                ? styles.activeLinkMain
                : styles.mainMenuListItem
            }
          >
            {pathname === "/it/about" ||
            pathname === "/de/about" ||
            pathname === "/ru/about" ||
            pathname === "/uk/about" ? (
              <a># About</a>
            ) : (
              <Link href={`${pathname}about`} passHref>
                <a># About</a>
              </Link>
            )}
          </li>
          <li className={styles.mainMenuListItem}>
            {pathname == `${pathname}how` ? (
              <Link href={`${pathname}how`} passHref>
                <a># How</a>
              </Link>
            ) : (
              "# How "
            )}
          </li>
          <li className={styles.mainMenuListItem}>
            <Link href={`${pathname}addfake`} passHref>
              <a># Add Fake</a>
            </Link>
          </li>
          <li className={styles.mainMenuListItem}>
            <Link href={`${pathname}download`} passHref>
              <a># Download</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
