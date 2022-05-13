import React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./MediaList.module.css";

export default function MediaList({ data }) {
  const dataRender = data.map((item) => (
    <li key={uuidv4()} className={styles.MediaListItem}>
      <a href={item.Link} target="_blank" rel="noreferrer">
        {item.Name} 
      </a>
    </li>
  ));
  return <ul className={styles.MediaList}>{dataRender}</ul>;
}
