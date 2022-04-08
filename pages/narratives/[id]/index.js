import Head from "next/head";
import Link from "next/link";
import { BsXLg, BsArrowLeft } from "react-icons/bs";

import Media from "../../../components/Media/Media";
import { dataUkr } from "../../../data/dataUkr";
import { dataEdited } from "../../../data/dataSample";

import styles from "../../../styles/Narrative.module.css";
import { useRouter } from "next/router";

export default function NarrativeItem() {
  const router = useRouter();
  const { id } = router.query;

  const fake = dataUkr.map((n, i) => {
    return (
      <>
        {n.Fakes && n.Narrative ? (
          <h3 className={styles.fakeLink}>{n.Fakes}</h3>
        ) : null}
        {n.Debunking ? <p><span className={styles.boldFont}>Debunking: </span>{n.Debunking}</p> : null}
        <Media key={i} data={n} />
      </>
    );
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Propaganda Diary | {id}</title>
      </Head>
      <div className={styles.fakeItemArrow}>
        <Link href="/">
          <a style={{ justifyContent: "flex-end" }}>
            <BsArrowLeft />
          </a>
        </Link>
      </div>
      <h2 className={styles.fakeHeading}># {id} </h2>

      {fake}
    </div>
  );
}
