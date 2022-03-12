import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import styles from '../styles/Home.module.css'

export default function Layout({ children }) {
    return (
      <main className={styles.main}>
        <div className={styles.sidebar}>
            <Sidebar />
        </div>
        <div className={styles.contentArea}>
            <Header />    

            {children}
        </div>
        </main>
    )
  }

  