import styles from "../styles/checkout.module.css";
import { useContext } from "react";
import { shopContext } from "../App.jsx";
export default function Checkout({}) {
  const { checkoutCart } = useContext(shopContext);
  return (
    <div className={styles.checkoutWrapper}>
      <h2 className={styles.title}>Your Cart</h2>
      <div className={styles.checkoutItems}>
        {checkoutCart.map((cartObj) => {
          return (
            <div className={styles.checkoutItem}>
              <h2>{cartObj.product}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
