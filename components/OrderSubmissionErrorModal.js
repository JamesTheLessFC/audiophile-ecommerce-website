import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/OrderSubmissionErrorModal.module.scss";
import { useContext } from "react";
import ShopContext from "../contexts/shop";

export default function OrderSubmissionErrorModal() {
  const { orderSubmissionError, clearOrderSubmissionError } =
    useContext(ShopContext);

  return (
    <div className={styles.root}>
      <div>
        <FontAwesomeIcon icon={faExclamationTriangle} size="3x" />
      </div>
      <p>{orderSubmissionError}</p>
      <button onClick={clearOrderSubmissionError}>
        <FontAwesomeIcon icon={faTimesCircle} size="2x" />
      </button>
    </div>
  );
}
