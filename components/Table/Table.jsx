import React from "react";
import styles from "./Table.module.css";
import { useRouter } from "next/router";

export default function Table({data}) {
  const router = useRouter();
  const { locale } = router;
  const tableColName =
    locale == "en"
      ? {source: 'Source', desc: 'Description', link: 'Link to website'}
      : locale == "ua"
      ? {source: 'Джерело', desc: 'Опис', link: 'Посилання на сайт'}
      : locale == "ru"
      ? {source: 'Источник', desc: 'Описание', link: 'Ссылка на сайт'}
      : locale == "de"
      ? {source: 'Source', desc: 'Description', link: 'Link to website'}
      : locale == "it"
      ? {source: 'Source', desc: 'Description', link: 'Link to website'}
      : '';

  const renderedTable = data.map((item) => {
    return (
      <tr className={styles.tableRow} key={item.id}>
        <td className={styles.tableCol}><span className={styles.tableNum}>{item.id}</span></td>
        <td className={styles.tableCol}><span className={styles.tableNum}>{item.Source}</span></td>
        <td className={styles.tableCol}>{item.Description}</td>
        <td className={styles.tableCol + ' ' + styles.tableLast}><a href={item.Link}>{item.Link}</a>  </td>
      </tr>
    )
  })
  return (
    <table>
      <tr className={styles.tableRow}>
        <th className={styles.tableHead}>#</th>
        <th className={styles.tableHead}>{tableColName.source}</th>
        <th className={styles.tableHead}>{tableColName.desc}</th>
        <th className={styles.tableHead}>{tableColName.link}</th>
      </tr>
      {renderedTable}
    </table>
  );
}
