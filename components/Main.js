import styles from "../styles/Main.module.scss";

export default function Main({ children, checkoutPage }) {
  return (
    <main
      className={`${styles.root} ${
        checkoutPage ? styles.root_checkout_page : ""
      }`}
    >
      {children}
    </main>
  );
}
