import React from 'react'
import styles from './Header.module.css'

export default function Header() {
  return (
    <div className={styles.headerWrap}>
      <div className={styles.langMenu}>
      <ul className={styles.mainMenuList}>
          <li className={styles.mainMenuListItem}>IT</li>
          <li className={styles.mainMenuListItem}>DE</li>
          <li className={styles.mainMenuListItem}>ENG</li>
          <li className={styles.mainMenuListItem}>RU</li>
        </ul>
      </div>
      <div className={styles.mainMenu}>
        <ul className={styles.mainMenuList}>
          <li className={styles.mainMenuListItem}># About</li>
          <li className={styles.mainMenuListItem}># How</li>
          <li className={styles.mainMenuListItem}># Add Fake</li>
          <li className={styles.mainMenuListItem}># Download</li>
        </ul>
        </div>
    </div>
  )
}
