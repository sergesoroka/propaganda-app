import React from 'react'
import FakeItem from './FakeItem/FakeItem'
import styles from './FakeList.module.css'

import { fakeData } from '../../data/data'

export default function FakeList() {
  return (
      <div className={styles.fakeListWrap}>
        <FakeItem data={fakeData} />
      </div>
  )
}
