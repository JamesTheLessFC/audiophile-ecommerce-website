import styles from "../styles/BackButton.module.scss";
import { useRouter } from "next/router";

export default function BackButton() {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <button className={styles.root} onClick={handleClick}>
      Go Back
    </button>
  );
}
