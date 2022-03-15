import Head from "next/head";
import Link from "next/link";
// import { FaRegTimesCircle } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

import { fakeData } from '../../../data/data';

import styles from "../../../styles/Narrative.module.css";
import { useRouter } from "next/router";

export default function NarrativeItem() {
  const router = useRouter();
  const { id } = router.query;

  const renderedData = fakeData.map((item, i) => {
    if (item.Narrative === id) {
      return (
        <div key={i}>
          <div className={styles.fakeItemHedingWrap}></div>
          <table>
            <tbody>
              <tr className={styles.fakeItemWrap}>
                <td className={styles.fakeNote}>{item.Disinfo_cases_en}</td>
                <td className={styles.fakeSource}>{item.Media}</td>
                <td className={styles.fakeDate}>{item.Date}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Propaganda Diary | {id}</title>
      </Head>
      <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
        <Link href="/">
          <a style={{justifyContent: 'flex-end'}}>
            <BsXLg style={{fill: '#056A1F'}} />
          </a>
        </Link>
      </div>
      <h2 className={styles.fakeHeading}># {id}</h2>
      {renderedData}
    </div>
  );
}
