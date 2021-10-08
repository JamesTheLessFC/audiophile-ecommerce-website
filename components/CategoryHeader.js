import styles from "../styles/CategoryHeader.module.scss";

export default function CategoryHeader({ name }) {
  return <h1 className={styles.root}>{name}</h1>;
}
