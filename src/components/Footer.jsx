import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerBox}>
        <strong className={styles.footerTitle}>Resources</strong>{" "}
        <span>Find a Store</span>
        <span>Membership</span> <span>Site Feedback</span>
      </div>

      <div className={styles.footerBox}>
        <strong className={styles.footerTitle}> Support</strong>{" "}
        <span>Get Help</span> <span>Order Status</span> <span>Returns</span>
      </div>

      <div className={styles.footerBox}>
        <strong className={styles.footerTitle}>Company</strong>{" "}
        <span>News</span> <span>Careers</span>
      </div>
    </div>
  );
}
