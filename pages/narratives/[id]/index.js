import Head from "next/head";
import Link from "next/link";
import { BsXLg, BsArrowLeft } from "react-icons/bs";

import { fakeData } from "../../../data/data";

import styles from "../../../styles/Narrative.module.css";
import { useRouter } from "next/router";

export default function NarrativeItem() {
  const router = useRouter();
  const { id } = router.query;

  const uniqueFakes = [];
  const dataFoFakes = fakeData.map((c) => {
    if (!uniqueFakes.includes(c.Fakes)) {
      uniqueFakes.push(c.Fakes);
    }
    return c;
  });

  const fake = uniqueFakes.map((n, i) => {
    return (
      <Link  key={i} href={`/narratives/${n}/fakes/${n}`}>
        
          <a>{n ? (
            <h3 className={styles.fakeLink}>
              <span className={styles.fakeWord}>FAKE: </span>
              {n}
            </h3>
            ) : null}
          </a>
        
      </Link>
    );
  });

  //   const renderedData = fakeData.map((item, i) => {

  //       return (
  //         <div key={i}>
  //           {/* <div className={styles.fakeItemHedingWrap}>{item.Fakes}</div> */}
  //           <div className={styles.fakeNote}>{item.Disinfo_cases_en}</div>
  //         </div>
  //       );

  //   });

  return (
    <div className={styles.container}>
      <Head>
        <title>Propaganda Diary | {id}</title>
      </Head>
      <div className={styles.fakeItemArrow}>
        <Link href="/">
          <a style={{ justifyContent: "flex-end" }}>
            <BsArrowLeft  />
          </a>
        </Link>
      </div>
      <h2 className={styles.fakeHeading}># {id} | </h2>
      {fake}
    </div>
  );
}
