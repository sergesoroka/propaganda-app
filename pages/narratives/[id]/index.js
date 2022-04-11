import Head from "next/head";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

import Media from "../../../components/Media/Media";
import { dataUkr } from "../../../data/dataUkr";

import styles from "../../../styles/Narrative.module.css";
import { useRouter } from "next/router";

export default function NarrativeItem() {
  const router = useRouter();
  const { id } = router.query;
  const data = router.query;
  console.log('DATA', data)

  const fake = dataUkr.map((n, i) => {
    return <Media key={i} data={n} />;
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
