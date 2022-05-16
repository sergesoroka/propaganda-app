import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./Header.module.css";

export default function Header() {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  console.log(pathname, locale);
  return (
    <div className={styles.headerWrap}>
      <div className={styles.langMenu}>
        <p className={styles.logoMobile}>PROPAGANDA DIARY</p>
        <ul className={styles.mainMenuList}>
          <li
            className={
              locale == "it" ? styles.activeLink : styles.mainMenuListItem
            }
            onClick={() => {
              router.push(
                { pathname, query },
                asPath,
                { locale: "it" },
                { shallow: false }
              );
            }}
          >
            IT
          </li>
          <li
            className={
              locale == "de" ||
              pathname == "/de/about" ||
              pathname == "/de/narratives/[id]"
                ? styles.activeLink
                : styles.mainMenuListItem
            }
            onClick={() => {
              router.push(
                { pathname, query },
                asPath,
                { locale: "de" },
                { shallow: false }
              );
            }}
          >
            DE
          </li>
          <li
            className={
              locale === "en" ? styles.activeLink : styles.mainMenuListItem
            }
            onClick={() => {
              router.push(
                { pathname, query },
                asPath,
                { locale: "en" },
                { shallow: false }
              );
            }}
          >
            ENG
          </li>
          <li
            className={
              locale == "ru" ? styles.activeLink : styles.mainMenuListItem
            }
            onClick={() => {
              router.push(
                { pathname, query },
                asPath,
                { locale: "ru" },
                { shallow: false }
              );
            }}
          >
            RU
          </li>
          <li
            className={
              locale == "uk" ? styles.activeLink : styles.mainMenuListItem
            }
            onClick={() => {
              router.push(
                { pathname, query },
                asPath,
                { locale: "uk" },
                { shallow: false }
              );
            }}
          >
            UKR
          </li>
        </ul>
      </div>
      <div className={styles.mainMenu}>
        <p className={styles.logoMobile}>
          <Link href={{ pathname: "/", locale: "en" }}>
            <a>
              <Image src="/logo.svg" alt="logoMobile" width="117" height="25" />
            </a>
          </Link>
        </p>
        <ul className={styles.mainMenuList}>
          <li
            className={
              pathname === "/about"
                ? styles.activeLinkMain
                : styles.mainMenuListItem
            }
          >
            <Link href="/about">
              <a># About</a>
            </Link>
          </li>
          <li
            className={
              pathname === "/method"
                ? styles.activeLinkMain
                : styles.mainMenuListItem
            }
          >
            <Link href="/method">
              <a># Method</a>
            </Link>
          </li>
          <li className={styles.mainMenuListItem}>
            <Link href="/addFake" passHref>
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
