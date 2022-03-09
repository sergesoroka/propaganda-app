import { useState } from 'react'
import styles from './Sidebar.module.css'

export default function Sidebar() {

const [diary, setDiary] = useState(true)
const [whiteList, setWhiteList] = useState(false)
const [blackList, setBlackList] = useState(false)
const [naratives, setNaratives] = useState(false)

  return (
    <>
    <h1 className={styles.projectName}>Propaganda Diary</h1>
    <div className={styles.sidebar}>
    <ul className={styles.statisticWrap}>
        <li className={styles.statisticListItem}>256 <span className={styles.statisticListName}>Narratives</span></li>
        <li className={styles.statisticListItem}>432 <span className={styles.statisticListName}>Fakes</span></li>
        <li className={styles.statisticListItem}>351 <span className={styles.statisticListName}>Sources</span></li>
    </ul>
        <div className={styles.sidebarItem}>
            <h3 className={diary ? styles.sidebarTitlesActive : styles.sidebarTitles}
            onClick={() => setDiary(!diary)}
            ># Diary</h3>
            {diary ?
            <ul className={styles.list}>
                <li className={styles.listItem}>Antispiegel</li>
                <li className={styles.listItem}>SNA.DE</li>
                <li className={styles.listItem}>Report24 News</li>
            </ul> : null }
        </div>  
        <div className={styles.sidebarItem}>
            <h3 className={whiteList ? styles.sidebarTitlesActive : styles.sidebarTitles}
                onClick={() => setWhiteList(!whiteList)}
                ># White List</h3>
                {whiteList ?
            <ul className={styles.list}>
                <li className={styles.listItem}>BBC</li>
                <li className={styles.listItem}>New Yorker</li>
                <li className={styles.listItem}>24 News</li>
            </ul> : null }
        </div>
        <div className={styles.sidebarItem}>
            <h3 className={blackList ? styles.sidebarTitlesActive : styles.sidebarTitles}
                onClick={() => setBlackList(!blackList)}
                ># Black List</h3>
            {blackList ? 
            <ul className={styles.list}>
                <li className={styles.listItem}>RT</li>
            </ul> : null }
        </div>
        <div className={styles.sidebarItem}>
            <h3 className={naratives ? styles.sidebarTitlesActive : styles.sidebarTitles}
                onClick={() => setNaratives(!naratives)}
                ># Naratives</h3>
            {naratives ?
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    Maidan in 2014 was a coup d'état
                </li>
                <li className={styles.listItem}>
                Ukraine fails to deliver commitments under Minsk Agreements/Kyiv does not comply with the Minsk agreements
                </li> 
            </ul> : null }
        </div>
    </div>
    </>
  )
}
