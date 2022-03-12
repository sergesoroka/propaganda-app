import React from 'react'
import FakeItem from './FakeItem/FakeItem'
import styles from './FakeList.module.css'

import { fakeData } from '../../data/data'

export default function FakeList() {
  const uniqueNarratives = [];
  fakeData.forEach((c) => {
        if (!uniqueNarratives.includes(c.Narrative)) {
            uniqueNarratives.push(c.Narrative);
        }
    });
  const narrative = uniqueNarratives.map(n => <FakeItem key={n} data={fakeData} narrative={n}/>)
  return (
      <div className={styles.fakeListWrap}>
        {narrative}
      </div>
  )
}
