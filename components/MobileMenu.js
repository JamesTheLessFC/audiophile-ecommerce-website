import styles from "../styles/MobileMenu.module.scss";
import Menu from "./Menu";

export default function MobileMenu({ showMobileMenu }) {
  return (
    <div
      className={`${styles.root} ${showMobileMenu ? styles.root_visible : ""}`}
    >
      <Menu />
    </div>
  );
}
