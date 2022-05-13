import Head from "next/head";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

import Media from "../../../../components/Media/Media";
import { dataUkr } from "../../../../data/dataUkr";

import styles from "../../../../styles/Narrative.module.css";
import { useRouter } from "next/router";

export default function NarrativeItem() {
  const router = useRouter();
  const { id } = router.query;

  const unique = [
    ...new Set(
      dataUkr.map((item) => {
        if (item.Narrative == id) {
          return item.Fakes;
        }
      })
    ),
  ];

  const listOfFakes = unique.map((fake, i) => (
    // <Media key={i} fake={fake} narrative={id} />
    <></>
  ));

  return (
    <div className={styles.container}>
      <Head>
        <title>Propaganda Diary | {id}</title>
      </Head>
      <div className={styles.fakeItemArrow}>
        <Link href="/uk">
          <a style={{ justifyContent: "flex-end" }}>
            <BsArrowLeft />
          </a>
        </Link>
      </div>
      <h2 className={styles.fakeHeading}># {id} </h2>
      {listOfFakes}
    </div>
  );
}
