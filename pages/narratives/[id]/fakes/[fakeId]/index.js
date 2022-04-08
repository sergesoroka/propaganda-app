import { useRouter } from "next/router";
import { BsXLg, BsArrowLeft } from "react-icons/bs";
import styles from "../../../../../styles/Narrative.module.css";

export default function FakeItem() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className={styles.container}>
      <div className={styles.fakeItemArrow} onClick={() => router.back()}>
        <BsArrowLeft />
      </div>
      <h3 className={styles.fakeItemHeading}># {id}</h3>
      <div style={{ display: "flex" }}>
        <div className={styles.country}>Німеччина</div>
        <div className={styles.media}>
          <a href="https://uncutnews.ch/die-nato-rueckt-in-der-ukraine-immer-naeher-an-einen-krieg-gegen-russland/">
            Uncutnews
          </a>
        </div>
        <div className={styles.date}>01/11/2021</div>
      </div>
      <div className={styles.debunking}>
        <h4 className={styles.debunkingHeading}>jgjgjDebunking</h4>
        In 2021, The American George Washington Institute
        published(https://www.illiberalism.org/far-right-group-made-its-home-in-ukraines-major-western-military-training-hub/)
        a report stating that the far-right group Centuria has been using the
        Sagaidachny National Army Academy to recruit new members. The Ministry
        of Defense said it would conduct an inspection. Commenting on the
        report, the Russian media resorted to numerous manipulations in order to
        further push the fundamentally untrue claim that neo-Nazi groups have
        infiltrated the Ukrainian government. There are dozens of organizations
        that are not just far-right, but openly pro-Nazi, and their merging with
        law enforcement agencies, state authorities and local self-government
        has become an open secret
        wrote(https://klymenko-time.com/novosti/naczizm-s-gosfinansirovaniem-kak-podderzhivaemaya-ssha-voennaya-akademiya-stala-domom-dlya-ultrapravoj-organizaczii-centuria-yutk/?utm_source=telegram&utm_medium=smm&utm_campaign=novosti_ktime_telegram)
        Klymenko Time. The First Independent, on the other hand, spoke of Nazis
        roaming the streets of Ukraine. Let&quot;s address the elephant in the
        room. Ukraine, like the overwhelming majority of developed countries,
        including Russia, has a number of organizations belonging to the far
        right of the political spectrum, but these organizations are few and do
        not enjoy the levels of support in society and government the
        pro-Kremlin media tries to portray them as having. In the last
        parliamentary election, nationalist parties have won a resounding 1
        (one) seat out of 450 available.
      </div>
    </div>
  );
}
