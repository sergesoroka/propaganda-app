import React from 'react'
import styles from './FakeItem.module.css'

export default function FakeItem({data, narrative}) {

//    const renderedData = data.map((item, i) => {
//     return (
//         <div key={item.Date} >
//         <div className={styles.fakeItemHedingWrap}>
//             {/* { item.Narrative.includes(item.Narrative) ?
//             <h2 className={styles.fakeHeading}>{item.Narrative}</h2>
//             : null } */}
//         </div>
//         <table><tbody>
//             <tr className={styles.fakeItemWrap}>
//                 <td className={styles.fakeNote}>{item.Disinfo_cases_en}</td>
//                 <td className={styles.fakeSource}>{item.Media}</td>
//                 <td className={styles.fakeDate}>{item.Date}</td>
//             </tr>
//         </tbody></table>
//         </div>
//        )
//    })
  return (
    <div>
       {narrative ? <h2 key={narrative} className={styles.fakeHeading}>#  {narrative}</h2> : null}
       
    </div>
  )
}
