import styles from "../styles/OrderSummary.module.scss";
import { useContext, useState, useEffect } from "react";
import ShopContext from "../contexts/shop";
import Image from "next/image";
import { useRouter } from "next/router";
import { formatUSD } from "../util/format";

export default function OrderSummary({ handleSubmit, errorsPresent }) {
  const { cart, total, grandTotal, shippingFee, vatTotal } =
    useContext(ShopContext);
  const router = useRouter();

  return (
    <div className={styles.root}>
      <h1>Summary</h1>
      {cart.map((item) => (
        <div key={item.id} className={styles.item}>
          <div className={styles.image}>
            <Image
              src={item.image}
              alt={item.name}
              layout="responsive"
              width={150}
              height={150}
            />
          </div>
          <div className={styles.item_name_and_price}>
            <h2>{item.name}</h2>
            <p>{`$${item.price.toLocaleString()}`}</p>
          </div>
          <p>{`x${item.quantity}`}</p>
        </div>
      ))}
      <div className={styles.totals}>
        <div className={styles.total}>
          <h2>Total</h2>
          <h2>{formatUSD(total)}</h2>
        </div>
        <div className={styles.total}>
          <h2>Shipping</h2>
          <h2>{formatUSD(shippingFee)}</h2>
        </div>
        <div className={styles.total}>
          <h2>VAT (Included)</h2>
          <h2>{formatUSD(vatTotal)}</h2>
        </div>
        <div className={styles.total}>
          <h2>Grand Total</h2>
          <h2>{formatUSD(grandTotal)}</h2>
        </div>
      </div>
      <button
        className={styles.continue_button}
        onClick={handleSubmit}
        disabled={errorsPresent || cart.length === 0}
      >
        Continue &amp; Pay
      </button>
    </div>
  );
}
