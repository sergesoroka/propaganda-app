import React from "react";
import Link from "next/link";
import FakeItem from "./FakeItem/FakeItem";
import styles from "./FakeList.module.css";

import { fakeData } from "../../data/data";

export default function FakeList() {
  const uniqueNarratives = [];
  const dataForNarrative = fakeData.map((c) => {
    if (!uniqueNarratives.includes(c.Narrative)) {
      uniqueNarratives.push(c.Narrative);
    }
    return c;
  });

  const narrative = uniqueNarratives.map((n, i) => (
    <Link key={i} href={`/narratives/${n}`} >
      <a>
        <FakeItem  data={fakeData} narrative={n} />
      </a>
    </Link>
  ));
  console.log(narrative);
  return (
    <div className={styles.fakeListWrap}>
      {narrative}
    </div>
  );
}
