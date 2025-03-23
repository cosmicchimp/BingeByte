import { useEffect, useState } from "react";
import styles from "../styles/homepage.module.css";
export default function Homepage() {
  return (
    <div className={styles.homepageWrapper}>
      <div className={styles.about}>
        <h2>BingeByte</h2>
        <p>
          Welcome to <strong>BingeByte</strong>, your go-to destination for the
          latest smartphones and top-quality phone accessories. We are committed
          to providing cutting-edge technology at competitive prices, ensuring
          you stay connected with the world in style and efficiency.
        </p>
        <p>
          {" "}
          At BingByte, we believe that your mobile experience should be seamless
          and hassle-free. Whether you're looking for the newest flagship
          device, durable cases, fast chargers, or premium wireless earbuds,
          we’ve got you covered. Our carefully curated selection includes top
          brands and innovative products designed to enhance your tech
          lifestyle. This is a mock store website I built. It has a variety of
          items fetched using the FakeStoreAPI and full purchase functionality.
        </p>
      </div>
    </div>
  );
}
