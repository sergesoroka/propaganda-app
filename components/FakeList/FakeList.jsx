import React from "react";
import Link from "next/link";
import FakeItem from "./FakeItem/FakeItem";
import styles from "./FakeList.module.css";

import { dataUkr } from "../../data/dataUkr";
import { dataEdited } from "../../data/dataSample";

export default function FakeList() {
  const narrative = dataUkr.map((n, i) => (
    <Link key={i} href={`/narratives/${n.Narrative}`}>
      <a>
        <FakeItem data={dataUkr} narrative={n.Narrative} />
      </a>
    </Link>
  ));

  return <div className={styles.fakeListWrap}>{narrative}</div>;
}
