import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import FakeItem from "./FakeItem/FakeItem";
import styles from "./FakeList.module.css";

export default function FakeList({ data }) {
  const router = useRouter();

  const pathnameRoute =
    (router.pathname == "/" && "/narratives/") ||
    (router.pathname == "/de" && "/de/narratives/") ||
    (router.pathname == "/it" && "/it/narratives/") ||
    (router.pathname == "/ru" && "/ru/narratives/") ||
    (router.pathname == "/uk" && "/uk/narratives/");

  const unique = [...new Set(data.map((item) => item.Narrative))];

  const narrative = unique.map((n, i) => {
    return (
      <Link key={i} href={{ pathname: `${pathnameRoute}${n}`, query: data }}>
        <a>
          <FakeItem data={data} narrative={n} />
        </a>
      </Link>
    );
  });

  return <div className={styles.fakeListWrap}>{narrative}</div>;
}
