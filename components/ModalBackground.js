import styles from "../styles/ModalBackground.module.scss";

export default function ModalBackground({ children }) {
  return <div className={styles.root}>{children}</div>;
}
