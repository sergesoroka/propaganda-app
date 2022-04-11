import React from "react";
import Link from "next/link";
import FakeItem from "./FakeItem/FakeItem";
import styles from "./FakeList.module.css";

export default function FakeList({data}) {
  console.log('Fake List', data)
  const narrative = data.map((n, i) => (
    <Link key={i} href={{pathname: `/narratives/${n.Narrative}`, query: n}}>
      <a>
        <FakeItem data={data} narrative={n.Narrative} />
      </a>
    </Link>
  ));

  return <div className={styles.fakeListWrap}>{narrative}</div>;
}
