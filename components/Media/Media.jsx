import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../../styles/Narrative.module.css";

import { dataEng } from "../../data/dataEng";

export default function Media({ fake, narrative }) {
  const [toggle, setToggle] = useState(false);

  const renderMedia = dataEng.map((item, i) => {
    if (narrative == item.Narrative && fake == item.Fakes) {
      return (
        <>
          {item.Debunking && toggle ? (
            <p key={uuidv4()}>
              <span className={styles.boldFont}>Debunking: </span>
              {item.Debunking}
            </p>
          ) : null}
          {toggle ? (
            <div key={uuidv4()} style={{ display: "flex", marginTop: ".4rem" }}>
              <div className={styles.country}>{item.Countries}</div>
              <div className={styles.media}>
                <a target="_blank" rel="noreferrer" href={item.Link}>
                  {item.Media}
                </a>
              </div>
              <div className={styles.date}>{item.Date}</div>
            </div>
          ) : null}{" "}
        </>
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
      {toggle ? renderMedia : null}
    </>
  );
}
