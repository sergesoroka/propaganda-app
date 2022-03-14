import React from "react";
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
  
  const narrative = uniqueNarratives.map((n) => (
    <FakeItem key={n} data={fakeData} narrative={n} />
  ));
  return <div className={styles.fakeListWrap}>{narrative}</div>;
}
