import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Header.module.css";

export default function Header() {
  const router = useRouter();
  const { pathname } = router;

  console.log(pathname);
  return (
    <div className={styles.headerWrap}>
      <div className={styles.langMenu}>
        <p className={styles.logoMobile}>PROPAGANDA DIARY</p>
        <ul className={styles.mainMenuList}>
          <li
            className={
              pathname == "/it" ||
              pathname == "/it/about" ||
              pathname == "/it/narratives/[id]"
                ? styles.activeLink
                : styles.mainMenuListItem
            }
          >
            <Link href={
                pathname === "/de/about"
                  ? "/it/about"
                  : pathname === "/ru/about"
                  ? "/it/about"
                  : pathname === "/uk/about"
                  ? "/it/about"
                  : pathname === "/about"
                  ? "/it/about"
                  : "/it"
              }>
              <a>IT</a>
            </Link>
          </li>
          <li
            className={
              router.pathname == "/de" ||
              pathname == "/de/about" ||
              pathname == "/de/narratives/[id]"
                ? styles.activeLink
                : styles.mainMenuListItem
            }
          >
            <Link
              href={
                pathname === "/it/about"
                  ? "/de/about"
                  : pathname === "/ru/about"
                  ? "/de/about"
                  : pathname === "/uk/about"
                  ? "/de/about"
                  : pathname === "/about"
                  ? "/de/about"
                  : "/de"
              }
            >
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
            <Link href={
                pathname === "/it/about"
                  ? "/about"
                  : pathname === "/ru/about"
                  ? "/about"
                  : pathname === "/uk/about"
                  ? "/about"
                  : pathname === "/de/about"
                  ? "/about"
                  : "/"
              }>
              <a>ENG</a>
            </Link>
          </li>
          <li
            className={
              router.pathname == "/ru" ||
              pathname == "/ru/about" ||
              pathname == "/ru/narratives/[id]"
                ? styles.activeLink
                : styles.mainMenuListItem
            }
          >
            <Link href={
                pathname === "/it/about"
                  ? "/de/about"
                  : pathname === "/de/about"
                  ? "/de/about"
                  : pathname === "/uk/about"
                  ? "/de/about"
                  : pathname === "/about"
                  ? "/de/about"
                  : "/ru"
              }>
              <a>RU</a>
            </Link>
          </li>
          <li
            className={
              router.pathname == "/uk" ||
              pathname == "/uk/about" ||
              pathname == "/uk/narratives/[id]"
                ? styles.activeLink
                : styles.mainMenuListItem
            }
          >
            <Link href={
                pathname === "/it/about"
                  ? "/uk/about"
                  : pathname === "/ru/about"
                  ? "/uk/about"
                  : pathname === "/de/about"
                  ? "/uk/about"
                  : pathname === "/about"
                  ? "/uk/about"
                  : "/uk"
              }>
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
              <Link
                href={
                  pathname === "/it"
                    ? "/it/about"
                    : pathname === "/de"
                    ? "/de/about"
                    : pathname === "/uk"
                    ? "/uk/about"
                    : pathname === "/ru"
                    ? "/ru/about"
                    : pathname === "/"
                    ? "/about"
                    : ""
                }
                passHref
              >
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
      <ul className={styles.listMenu}>
        <li className={styles.mainMenuListItem}>
          <Link href={`/blacklist`} passHref>
            <a># Black List</a>
          </Link>
        </li>
        <li className={styles.mainMenuListItem}>
          <Link href={`/whitelist`} passHref>
            <a># White List</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
