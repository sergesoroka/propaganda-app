import Head from "next/head";
import Link from "next/link";
import { FaRegTimesCircle } from "react-icons/fa";

import styles from "../../../styles/Narrative.module.css";
import { useRouter } from "next/router";

export default function NarrativeItem() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.container}>
      <Head>
        <title>Propaganda Diary | {id}</title>
      </Head>
      <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
        <Link href="/">
          <a style={{justifyContent: 'flex-end'}}>
            <FaRegTimesCircle style={{fill: '#056A1F'}} />
          </a>
        </Link>
      </div>
      <h2 className={styles.fakeHeading}># {id}</h2>
    </div>
  );
}
