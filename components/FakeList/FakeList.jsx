import React from "react";
import Link from "next/link";
import FakeItem from "./FakeItem/FakeItem";
import styles from "./FakeList.module.css";

export default function FakeList({ data }) {
  const unique = [...new Set(data.map((item) => item.Narrative))];

  const narrative = unique.map((n, i) => {
    return (
      <Link key={i} href={{ pathname: `/narratives/${n}`, query: n }}>
        <a>
          <FakeItem data={data} narrative={n} />
        </a>
      </Link>
    );
  });

  return <div className={styles.fakeListWrap}>{narrative}</div>;
}
