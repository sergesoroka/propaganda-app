import styles from '../../styles/Narrative.module.css'

export default function Media({ data }) {
  return (
    <div style={{ display: "flex", marginTop: ".4rem" }}>
      <div className={styles.country}>{data.Countries}</div>
      <div className={styles.media}> {data.Media}</div>
      <div className={styles.date}>{data.Date}</div>
    </div>
  );
}
