import { useState } from "react";
import Link from "next/link";
import MediaList from "../MediaList/MediaList";
import styles from "./Sidebar.module.css";

import { dataEdited } from "../../data/dataSample";
import { black_list_germany } from '../../data/black_list_germany'
import { black_list_italy } from '../../data/black_list_italy'


export default function Sidebar() {
  const [diary, setDiary] = useState(false);
  const [whiteList, setWhiteList] = useState(false);
  const [blackList, setBlackList] = useState(true);
  const [naratives, setNaratives] = useState(false);

  const uniqueNarratives = [];
  dataEdited.map((c) => {
    if (!uniqueNarratives.includes(c.Narrative)) {
      uniqueNarratives.push(c.Narrative);
    }
    return c;
  });

  const uniqueFakes = [];
  dataEdited.map((c) => {
    if (!uniqueFakes.includes(c.Fakes)) {
      uniqueFakes.push(c.Fakes);
    }
    return c;
  });

  const uniqueMedias = [];
  dataEdited.map((c) => {
    if (!uniqueMedias.includes(c.Media)) {
      uniqueMedias.push(c.Media);
    }
    return c;
  });
console.log(uniqueNarratives.length)
  
  return (
    <>
      <h1 className={styles.projectName}>
        <Link href="/">
          <a>Propaganda Diary</a>
        </Link>
      </h1>
      <div className={styles.sidebar}>
        <ul className={styles.statisticWrap}>
          <li className={styles.statisticListItem}>
            {'# ' + uniqueNarratives.length }{" "}
            <span className={styles.statisticListName}>Narratives</span>
          </li>
          <li className={styles.statisticListItem}>
            {'# ' + uniqueFakes.length }{" "}
            <span className={styles.statisticListName}>Fakes</span>
          </li>
          <li className={styles.statisticListItem}>
            {'# ' + uniqueMedias.length }{" "}
            <span className={styles.statisticListName}>Sources</span>
          </li>
        </ul>
        <div className={styles.sidebarItem}>
          <h3
            className={
              diary ? styles.sidebarTitlesActive : styles.sidebarTitles
            }
            onClick={() => setDiary(!diary)}
          >
            # Diary
          </h3>
          {diary ? (
            <ul className={styles.list}>
              <li className={styles.listItem}>Antispiegel</li>
              <li className={styles.listItem}>SNA.DE</li>
              <li className={styles.listItem}>Report24 News</li>
            </ul>
          ) : null}
        </div>
        <div className={styles.sidebarItem}>
          <h3
            className={
              whiteList ? styles.sidebarTitlesActive : styles.sidebarTitles
            }
            onClick={() => setWhiteList(!whiteList)}
          >
            # White List
          </h3>
          {whiteList ? (
            <ul className={styles.list}>
              <li className={styles.listItem}>BBC</li>
              <li className={styles.listItem}>New Yorker</li>
              <li className={styles.listItem}>24 News</li>
            </ul>
          ) : null}
        </div>
        <div className={styles.sidebarItem}>
          <h3
            className={
              blackList ? styles.sidebarTitlesActive : styles.sidebarTitles
            }
            onClick={() => setBlackList(!blackList)}
          >
            # Black List
          </h3>
          {blackList ? (
            <>
            <h4 className={styles.countryMedia}>GERMANY</h4>
            <MediaList data={black_list_germany} />
            <h4 className={styles.countryMedia}>ITALY</h4>
            <MediaList data={black_list_italy} />
            </>
          ) : null}
        </div>
        <div className={styles.sidebarItem}>
          <h3
            className={
              naratives ? styles.sidebarTitlesActive : styles.sidebarTitles
            }
            onClick={() => setNaratives(!naratives)}
          >
            # Naratives
          </h3>
          {naratives ? (
            <ul className={styles.list}>
              <li className={styles.listItem}>
                Maidan in 2014 was a coup d &apos; état
              </li>
              <li className={styles.listItem}>
                Ukraine fails to deliver commitments under Minsk Agreements/Kyiv
                does not comply with the Minsk agreements
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    </>
  );
}
