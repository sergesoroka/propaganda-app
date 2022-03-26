import React from "react";
import Link from "next/link";
import FakeItem from "./FakeItem/FakeItem";
import styles from "./FakeList.module.css";

import { fakeData } from "../../data/data";
import { dataEdited } from "../../data/dataSample";

export default function FakeList() {
  

  const narrative = dataEdited.map((n, i) => (
    <Link key={i} href={`/narratives/${n.Narrative}`}>
      <a>
        <FakeItem data={fakeData} narrative={n.Narrative} />
      </a>
    </Link>
  ));



  return <div className={styles.fakeListWrap}>{narrative}</div>;
}
