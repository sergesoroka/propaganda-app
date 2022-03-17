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
      <>
        {/* <Link key={i} href={`/narratives/${n}/fakes/${n}`}> */}
          {n ? <h3 className={styles.fakeLink}>{n}</h3> : null}
        {/* </Link> */}
        <div style={{ display: "flex" }}>
          <div className={styles.country}>Німеччина</div>
          <div className={styles.media}>
            <a href="https://uncutnews.ch/die-nato-rueckt-in-der-ukraine-immer-naeher-an-einen-krieg-gegen-russland/">
              Uncutnews
            </a>
          </div>
          <div className={styles.date}>01/11/2021</div>
        </div>
      </>
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
            <BsArrowLeft />
          </a>
        </Link>
      </div>
      <h2 className={styles.fakeHeading}># {id} </h2>
      <div className={styles.debunking}>
        <h4 className={styles.debunkingHeading}>Debunking</h4>
        <p  className={styles.debunkingBody}>
        "In 2021, The American George Washington Institute{" "}
        <a
          href="https://www.illiberalism.org/far-right-group-made-its-home-in-ukraines-major-western-military-training-hub/"
          target="_blank"
        >
          published 
        </a> {" "}
        a report stating that the far-right group Centuria has been using the
        Sagaidachny National Army Academy to recruit new members. The Ministry
        of Defense said it would conduct an inspection. Commenting on the
        report, the Russian media resorted to numerous manipulations in order to
        further push the fundamentally untrue claim that neo-Nazi groups have
        infiltrated the Ukrainian government. "There are dozens of organizations
        that are not just far-right, but openly pro-Nazi, and their merging with
        law enforcement agencies, state authorities and local self-government
        has become an open secret"{" "}
        <a
          href="https://klymenko-time.com/novosti/naczizm-s-gosfinansirovaniem-kak-podderzhivaemaya-ssha-voennaya-akademiya-stala-domom-dlya-ultrapravoj-organizaczii-centuria-yutk/?utm_source=telegram&utm_medium=smm&utm_campaign=novosti_ktime_telegram"
          target="_blank"
        >
          wrote
        </a>{" "}
        Klymenko Time. The First Independent, on the other hand, spoke of "Nazis
        roaming the streets of Ukraine." Let’s address the elephant in the room.
        Ukraine, like the overwhelming majority of developed countries,
        including Russia, has a number of organizations belonging to the far
        right of the political spectrum, but these organizations are few and do
        not enjoy the levels of support in society and government the
        pro-Kremlin media tries to portray them as having. In the last
        parliamentary election, nationalist parties have won a resounding 1
        (one) seat out of 450 available. An article from the Russian website
        Ukraina.ru (a propaganda publication of the Russia-1 media group) with a
        manipulative headline was reprinted on the{" "}
        <a
          href="https://112ua.tv/mnenie/prozrenie-ot-freedom-house-vnesudebnye-raspravy-i-podderzhka-neonacistov-na-ukraine-592543.html"
          target="_blank"
        >
          website
        </a>{" "}
        of the TV channel 112 Ukraine, alleging that the international human
        rights organization Freedom House has “admitted that Ukraine supports
        neo-Nazi gangs”. However, at no point does the{" "}
        <a
          href="https://freedomhouse.org/country/ukraine/freedom-net/2021"
          target="_blank"
        >
          report
        </a>{" "}
        claim that the Ukrainian government directly supports neo-Nazis. On the
        "First Independent" tv channel, the lion's share of air time was also
        allocated to the discussion of Nazism in Ukraine. Andriy Telizhenko, a
        self-proclaimed “diplomat”, compares Ukraine to Nazi Germany: "You
        remember how Germany once said that they would not go to war, and would
        not attack anyone. At the same time, they amassed at the borders of
        other countries and created the Second World War. This is what Ukraine
        is doing today with negotiations in the Normandy format, prolonging the
        process. And then, they will provoke and declare: "You see, this is all
        the Russian Federation, this is not us, we want peace, we want victory."
        In the same broadcast, two laws are presented as the evidence of the
        popularity of "Nazism" in Ukraine: "Please take the law on language.
        Purely Nazi law - once. Take the law on indigenous peoples. Purely Nazi
        law - two." Russian dictator Vladimir Putin has also compared the law on
        indigenous peoples to the "practice of Nazi Germany." These two laws are
        perhaps the most misrepresented legal documents in recent history. As an
        example, Vesti{" "}
        <a
          href="https://vesti.ua/politika/vladimir-skachko-bessilie-oon-kak-zelenskij-lepit-svoyu-erzats-diktaturu"
          target="_blank"
        >
          has portrayed
        </a>{" "}
        the language law as being about "forced Ukrainization" and claimed the
        Law on Indigenous Peoples "threw Russians to the sidelines." Whereas
        Russians, by definition, cannot be the indigenous people of Ukraine, or,
        for that matter, any country other than Russia, as they have their own
        state formation."</p>
      </div>
      {fake}
    </div>
  );
}
