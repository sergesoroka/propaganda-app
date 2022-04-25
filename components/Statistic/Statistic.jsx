import React from 'react'
import styles from '../Sidebar/Sidebar.module.css'

export default function Statistic({uniqueNarratives, uniqueFakes, uniqueMedias}) {
  return (
    <ul className={styles.statisticWrap}>
    <li className={styles.statisticListItem}>
      {"# " + (uniqueNarratives.length -1)}{" "}
      <span className={styles.statisticListName}>Narratives</span>
    </li>
    <li className={styles.statisticListItem}>
      {"# " + (uniqueFakes.length -1)}{" "}
      <span className={styles.statisticListName}>Fakes</span>
    </li>
    <li className={styles.statisticListItem}>
      {"# " + (uniqueMedias.length -1)}{" "}
      <span className={styles.statisticListName}>Sources</span>
    </li>
  </ul>
  )
}
