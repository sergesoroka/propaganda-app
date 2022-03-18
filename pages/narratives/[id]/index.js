import Head from "next/head";
import Link from "next/link";
import { BsXLg, BsArrowLeft } from "react-icons/bs";

import Media from '../../../components/Media/Media'
import { fakeData } from "../../../data/data";
import { dataEdited } from "../../../data/dataSample";

import styles from "../../../styles/Narrative.module.css";
import { useRouter } from "next/router";

export default function NarrativeItem() {
  const router = useRouter();
  const { id } = router.query;



  const fake = dataEdited.map((n, i) => {
    return (
      <>
        {/* <Link key={i} href={`/narratives/${n}/fakes/${n}`}> */}
          {n.Fakes ? <h3 className={styles.fakeLink}>{n.Fakes}</h3> : null}
        {/* </Link> */}
        <Media key={i} data={n}/>
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
      <div className={styles.debunking}>
        <h4 className={styles.debunkingHeading}>Debunking</h4>
        <p  className={styles.debunkingBody}>
        &quot;In 2021, The American George Washington Institute{" "}
        <a
          href="https://www.illiberalism.org/far-right-group-made-its-home-in-ukraines-major-western-military-training-hub/"
          
        >
          published 
        </a> {" "}
        a report stating that the far-right group Centuria has been using the
        Sagaidachny National Army Academy to recruit new members. The Ministry
        of Defense said it would conduct an inspection. Commenting on the
        report, the Russian media resorted to numerous manipulations in order to
        further push the fundamentally untrue claim that neo-Nazi groups have
        infiltrated the Ukrainian government. &quot;There are dozens of organizations
        that are not just far-right, but openly pro-Nazi, and their merging with
        law enforcement agencies, state authorities and local self-government
        has become an open secret&quot;{" "}
        <a
          href="https://klymenko-time.com/novosti/naczizm-s-gosfinansirovaniem-kak-podderzhivaemaya-ssha-voennaya-akademiya-stala-domom-dlya-ultrapravoj-organizaczii-centuria-yutk/?utm_source=telegram&utm_medium=smm&utm_campaign=novosti_ktime_telegram"
          
        >
          wrote
        </a>{" "}
        Klymenko Time. The First Independent, on the other hand, spoke of &quot;Nazis
        roaming the streets of Ukraine.&quot; Let’s address the elephant in the room.
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
          
        >
          website
        </a>{" "}
        of the TV channel 112 Ukraine, alleging that the international human
        rights organization Freedom House has “admitted that Ukraine supports
        neo-Nazi gangs&quot;. However, at no point does the{" "}
        <a
          href="https://freedomhouse.org/country/ukraine/freedom-net/2021"

        >
          report
        </a>{" "}
        claim that the Ukrainian government directly supports neo-Nazis. On the
        &quot;First Independent&quot; tv channel, the lion&apos;s share of air time was also
        allocated to the discussion of Nazism in Ukraine. Andriy Telizhenko, a
        self-proclaimed &quot;diplomat&quot;, compares Ukraine to Nazi Germany: &quot;You
        remember how Germany once said that they would not go to war, and would
        not attack anyone. At the same time, they amassed at the borders of
        other countries and created the Second World War. This is what Ukraine
        is doing today with negotiations in the Normandy format, prolonging the
        process. And then, they will provoke and declare: &quot;You see, this is all
        the Russian Federation, this is not us, we want peace, we want victory.&quot;
        In the same broadcast, two laws are presented as the evidence of the
        popularity of &quot;Nazism&quot; in Ukraine: &quot;Please take the law on language.
        Purely Nazi law - once. Take the law on indigenous peoples. Purely Nazi
        law - two.&quot; Russian dictator Vladimir Putin has also compared the law on
        indigenous peoples to the &quot;practice of Nazi Germany.&quot; These two laws are
        perhaps the most misrepresented legal documents in recent history. As an
        example, Vesti{" "}
        <a
          href="https://vesti.ua/politika/vladimir-skachko-bessilie-oon-kak-zelenskij-lepit-svoyu-erzats-diktaturu"
         
        >
          has portrayed
        </a>{" "}
        the language law as being about &quot;forced Ukrainization&quot; and claimed the
        Law on Indigenous Peoples &quot;threw Russians to the sidelines.&quot; Whereas
        Russians, by definition, cannot be the indigenous people of Ukraine, or,
        for that matter, any country other than Russia, as they have their own
        state formation.&quot;</p>
      </div>
      {fake}
      
    </div>
  );
}
