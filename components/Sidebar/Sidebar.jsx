import styles from './Sidebar.module.css'

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <div className={styles.sidebarItem}>
            <h3 className={styles.sidebarTitles}># Diary</h3>
            <ul className={styles.list}>
                <li className={styles.listItem}>Antispiegel</li>
                <li className={styles.listItem}>SNA.DE</li>
                <li className={styles.listItem}>Report24 News</li>
            </ul>
        </div>
        <div className={styles.sidebarItem}>
            <h3 className={styles.sidebarTitles}># White List</h3>
            <ul className={styles.list}>
                <li className={styles.listItem}>BBC</li>
                <li className={styles.listItem}>New Yorker</li>
                <li className={styles.listItem}>24 News</li>
            </ul>
        </div>
        <div className={styles.sidebarItem}>
            <h3 className={styles.sidebarTitles}># Black List</h3>
            <ul className={styles.list}>
                <li className={styles.listItem}>RT</li>
            </ul>
        </div>
        <div className={styles.sidebarItem}>
            <h3 className={styles.sidebarTitles}># Naratives</h3>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    Maidan in 2014 was a coup d'état
                </li>
                <li className={styles.listItem}>
                Ukraine fails to deliver commitments under Minsk Agreements/Kyiv does not comply with the Minsk agreements
                </li>
            </ul>
        </div>
    </div>
  )
}
