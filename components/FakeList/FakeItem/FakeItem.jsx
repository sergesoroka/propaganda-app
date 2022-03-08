import React from 'react'
import styles from './FakeItem.module.css'

export default function FakeItem({data}) {
   const renderedData = data.map(item => {
       return (
        <tr key={item.Date} className={styles.fakeItemWrap}>
            <td className={styles.fakeNote}>{item.Disinfo_cases_en}</td>
            <td className={styles.fakeSource}>{item.Media}</td>
            <td className={styles.fakeDate}>{item.Date}</td>
        </tr>
       )
   })
  return (
    <>
        <div className={styles.fakeItemHedingWrap}>
            <h2 className={styles.fakeHeading}>Maidan in 2014 was a coup d'état</h2>
        </div>
        <table><tbody>{renderedData}</tbody></table>
    </>
  )
}
