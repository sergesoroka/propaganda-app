import React from "react";
import styles from "./MediaList.module.css";

export default function MediaList({ data }) {
  const dataRender = data.map((item, i) => (
    <li key={i} className={styles.MediaListItem}>
      <a href={item.Link} target='_blank' rel="noreferrer">{item.Name}</a>
    </li>
  ));
  return <ul className={styles.MediaList}>{dataRender}</ul>;
}
