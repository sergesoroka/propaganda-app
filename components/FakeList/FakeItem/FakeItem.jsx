import React, { useState } from "react";
import styles from "./FakeItem.module.css";

export default function FakeItem({ data, narrative }) {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = (e) => {
    console.log(e);
  };

  

  return (
    <div>
      {narrative ? (
        <h2
          key={narrative}
          className={styles.fakeHeading}
          onClick={(e) => toggleHandler(e)}
        >
          # {narrative}
        </h2>
      ) : null}
      {/* {renderedData} */}
    </div>
  );
}
