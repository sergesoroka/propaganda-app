import { useState } from "react";
import styles from "../../styles/Narrative.module.css";

export default function Media({ fake, narrative, data }) {
  const [toggle, setToggle] = useState(false);

  const fakeFiltered = data.filter((item) => item.Fakes == fake);
  const debunkigsUnique = [
    ...new Set(fakeFiltered.map((item) => item.Debunking)),
  ];

  const debunkingItem = debunkigsUnique.map((item, i) => {
    return (
      <div key={i} className={styles.Debunking}>
        <span dangerouslySetInnerHTML={{ __html: item }}></span>
      </div>
    );
  });

  const renderMedia = data.map((item, i) => {
    if (narrative == item.Narrative && fake == item.Fakes) {
      return (
        <div key={i} style={{ display: "flex", marginTop: ".4rem" }}>
          {toggle ? (
            <>
              <div className={styles.country}>{item.Countries}</div>
              <div className={styles.media}>
                <a target="_blank" rel="noreferrer" href={item.Link}>
                  {item.Media}
                </a>
              </div>
              <div className={styles.date}>{item.Date}</div>
            </>
          ) : null}
        </div>
      );
    }
  });
  return (
    <>
      {fake ? (
        <h3 onClick={() => setToggle(!toggle)} className={styles.fakeLink}>
          {fake}
        </h3>
      ) : null}

      {toggle ? (
        <>
          <span className={styles.boldFont}>Debunking: </span> {debunkingItem}
        </>
      ) : null}

      {toggle ? (
        <>
          <span className={styles.boldFont}>Media: </span> {renderMedia}
        </>
      ) : null}
    </>
  );
}
