import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./Header.module.css";

export default function Header() {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  console.log(pathname, locale, asPath);

  const linkDownload =
  locale == "en"
    ? 'https://docs.google.com/spreadsheets/d/1j5JuUDCpc7T9cAXqHC7MOe8mBsOJiw1SH5JzoUxFIYk/edit#gid=0'
    : locale == "ua"
    ? 'https://docs.google.com/spreadsheets/d/1s-A12JY9Xdfif-o664GnyhbpXuW1oiOrEAHjWgVHj_I/edit?usp=sharing'
    : locale == "ru"
    ? 'https://docs.google.com/spreadsheets/d/1fb9-DviYRdi83fCBaO7DeK6zgtn1xjLWDyO-H8H3DUU/edit?usp=sharing'
    : locale == "de"
    ? 'https://docs.google.com/spreadsheets/d/1lE5e7J1-uEXurtaVvhu78GZh4ti2bG17d4BSm-qTK_E/edit?usp=sharing'
    : locale == "it"
    ? 'https://docs.google.com/spreadsheets/d/1km-KYs54oe78Zp9bLpJ8X_zrKRhmBep9K2J4CmxaILc/edit#gid=0'
    : null

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
              locale == "ua" ? styles.activeLink : styles.mainMenuListItem
            }
            onClick={() => {
              router.push(
                { pathname, query },
                asPath,
                { locale: "ua" },
                { shallow: false }
              );
            }}
          >
            UA
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
            <Link href={linkDownload} passHref>
            <a target="_blank"># Download</a>
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
