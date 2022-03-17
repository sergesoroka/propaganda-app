
import styles from "./FakeItem.module.css";

export default function FakeItem({ data, narrative }) {

  return (
    <div>
      {narrative ? (
        <h2
          key={narrative}
          className={styles.fakeHeading}
        >
          # {narrative}
        </h2>
      ) : null}
    </div>
  );
}
