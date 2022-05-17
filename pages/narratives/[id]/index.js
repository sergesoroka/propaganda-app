import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsArrowLeft } from "react-icons/bs";

import Media from "../../../components/Media/Media";
import { dataEng } from "../../../data/dataEng";
import { dataRu } from "../../../data/dataRu";

import { dataUkr } from "../../../data/dataUkr";
import { dataDe } from "../../../data/dataDe";
import { dataIt } from "../../../data/dataIt";

import styles from "../../../styles/Narrative.module.css";

export default function NarrativeItem() {
  const router = useRouter();
  const { id } = router.query;
  const { locale } = router;

  // console.log('ID: ', router.query)

  const dataLocale =
    locale == "en"
      ? dataEng
      : locale == "ua"
      ? dataUkr
      : locale == "ru"
      ? dataRu
      : locale == "de"
      ? dataDe
      : locale == "it"
      ? dataIt
      : dataEng;

  const unique = [
    ...new Set(
      dataLocale.map((item) => {
        if (item.Narrative == id) {
          return item.Fakes;
        }
      })
    ),
  ];

  const listOfFakes = unique.map((item, i) => (
    <Media key={i} fake={item} narrative={id} data={dataLocale} />
  ));

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

      {listOfFakes}
    </div>
  );
}
