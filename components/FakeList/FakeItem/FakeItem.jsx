import React, { useState } from "react";
import styles from "./FakeItem.module.css";

export default function FakeItem({ data, narrative }) {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = (e) => {
    console.log(e);
  };

  const renderedData = data.map((item, i) => {
    if (item.Narrative === narrative) {
      return (
        <div key={i}>
          <div className={styles.fakeItemHedingWrap}></div>
          <table>
            <tbody>
              <tr className={styles.fakeItemWrap}>
                <td className={styles.fakeNote}>{item.Disinfo_cases_en}</td>
                <td className={styles.fakeSource}>{item.Media}</td>
                <td className={styles.fakeDate}>{item.Date}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  });

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
