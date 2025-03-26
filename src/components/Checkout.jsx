import styles from "../styles/checkout.module.css";
import { useContext } from "react";
import { shopContext } from "../App.jsx";

export default function Checkout({}) {
  const { checkoutCart } = useContext(shopContext);
  function handleQuantChange(event) {
    console.log(event, event.target);
  }
  return (
    <div className={styles.checkoutWrapper}>
      <h2 className={styles.title}>Your Cart</h2>
      <div className={styles.checkoutItems}>
        {checkoutCart.map((product) => {
          return (
            <div className={styles.checkoutItem}>
              <h3>{product.product}</h3>
              <p>{product.desc}</p>
              <div className={styles.buttonBox}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M5 6.77273H9.2M19 6.77273H14.8M9.2 6.77273V5.5C9.2 4.94772 9.64772 4.5 10.2 4.5H13.8C14.3523 4.5 14.8 4.94772 14.8 5.5V6.77273M9.2 6.77273H14.8M6.4 8.59091V15.8636C6.4 17.5778 6.4 18.4349 6.94673 18.9675C7.49347 19.5 8.37342 19.5 10.1333 19.5H13.8667C15.6266 19.5 16.5065 19.5 17.0533 18.9675C17.6 18.4349 17.6 17.5778 17.6 15.8636V8.59091M9.2 10.4091V15.8636M12 10.4091V15.8636M14.8 10.4091V15.8636"
                      stroke="#464455"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
