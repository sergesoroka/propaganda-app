import { useState } from "react";
import styles from "../../styles/Narrative.module.css";

export default function Media({ data }) {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      {data.Fakes ? (
        <h3 onClick={() => setToggle(!toggle)} className={styles.fakeLink}>
          {data.Fakes}
        </h3>
      ) : null}
      {data.Debunking && toggle ? (
        <p>
          <span className={styles.boldFont}>Debunking: </span>
          {data.Debunking}
        </p>
      ) : null}
      {toggle ? (
        <div style={{ display: "flex", marginTop: ".4rem" }}>
          <div className={styles.country}>{data.Countries}</div>
          <div className={styles.media}>
            <a target="_blank" rel="noreferrer" href={data.Link}>
              {data.Media}
            </a>
          </div>
          <div className={styles.date}>{data.Date}</div>
        </div>
      ) : null}
    </>
  );
}
