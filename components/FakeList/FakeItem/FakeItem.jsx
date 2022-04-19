import styles from "./FakeItem.module.css";
import { v4 as uuidv4 } from "uuid";

export default function FakeItem({ data, narrative }) {
  return (
    <div>
      {narrative ? (
        <h2 key={uuidv4()} className={styles.fakeHeading}>
          # {narrative}
        </h2>
      ) : null}
    </div>
  );
}
