import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/OrderConfirmationModal.module.scss";
import { useContext, useEffect } from "react";
import ShopContext from "../contexts/shop";
import { useRouter } from "next/router";
import Image from "next/image";
import { formatUSD } from "../util/format";

export default function OrderConfirmationModal() {
  const { purchasedItems, purchaseTotal, clearPurchase } =
    useContext(ShopContext);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      clearPurchase();
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [clearPurchase, router]);

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className={styles.root}>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={faCheckCircle} size="4x" />
      </div>
      <h1>
        <span>Thank you </span>
        <span>for your order</span>
      </h1>
      <p>You will receive an email confirmation shortly.</p>
      {purchasedItems.length > 0 && purchaseTotal && (
        <div className={styles.order_summary}>
          <div className={styles.item}>
            <div className={styles.image}>
              <Image
                src={purchasedItems[0].image}
                alt={purchasedItems[0].name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.item_name_and_price}>
              <h2>{purchasedItems[0].name}</h2>
              <p>{`$${purchasedItems[0].price.toLocaleString()}`}</p>
            </div>
            <p>{`x${purchasedItems[0].quantity}`}</p>
          </div>
          {purchasedItems.length > 1 && (
            <>
              <hr />
              <p className={styles.other_items}>
                and {purchasedItems.length - 1} other item(s)
              </p>
            </>
          )}
          <div className={styles.total}>
            <h2>Grand Total</h2>
            <h2>{formatUSD(purchaseTotal)}</h2>
          </div>
        </div>
      )}
      <button onClick={handleClick}>Back to Home</button>
    </div>
  );
}
