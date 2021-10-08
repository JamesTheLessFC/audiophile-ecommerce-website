import styles from "../styles/ShoppingCart.module.scss";
import { useContext } from "react";
import ShopContext from "../contexts/shop";
import Image from "next/image";
import { useRouter } from "next/router";
import { formatUSD } from "../util/format";

export default function ShoppingCart({ showShoppingCart }) {
  const {
    cart,
    total,
    incrementQuantity,
    decrementQuantity,
    removeAllFromCart,
  } = useContext(ShopContext);
  const router = useRouter();

  return (
    <div
      className={`${styles.root} ${
        showShoppingCart ? styles.root_visible : ""
      }`}
    >
      <div className={styles.header}>
        <h1>{`Cart (${cart.length})`}</h1>
        <button
          onClick={(e) => {
            e.stopPropagation();
            removeAllFromCart();
          }}
        >
          Remove all
        </button>
      </div>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id} className={styles.item}>
            <div className={styles.image}>
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.item_name_and_price}>
              <h2>{item.name}</h2>
              <p>{`$${item.price.toLocaleString()}`}</p>
            </div>
            <div className={styles.cart_quantity}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  decrementQuantity(item.id);
                }}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  incrementQuantity(item.id);
                }}
              >
                +
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is currently empty.</p>
      )}
      <div className={styles.footer}>
        <h2>Total</h2>
        <h2>{formatUSD(total)}</h2>
      </div>
      <button
        className={styles.checkout_button}
        onClick={() => router.push("/checkout")}
        disabled={cart.length === 0}
      >
        Checkout
      </button>
    </div>
  );
}
