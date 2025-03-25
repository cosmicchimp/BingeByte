import { useState, useEffect } from "react";
import styles from "../styles/products.module.css";
export default function Products({ updateCheckout }) {
  const [productData, updateProductData] = useState([]);
  const [isLoading, updateLoading] = useState(true);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [isClicked, updateClicked] = useState(false);
  const [clickedData, updateClickedData] = useState([]);
  const [popupQuantity, updateQuantity] = useState(1);
  const [shoppingBag, updateBag] = useState([]);

  // Fetch product data
  useEffect(() => {
    fetch(
      "https://dummyjson.com/products/search?q=phone&limit=30&select=title,price,images,description,brand"
    )
      .then((res) => res.json())
      .then((data) => updateProductData([...data.products]))
      .finally(() => updateLoading(false));
  }, []);

  // Log product data when fetched
  useEffect(() => {
    console.log(productData);
  }, [productData]);
  //card modal click function
  function cardClick(title, price, desc, image) {
    updateClickedData([title, price, desc, image]);
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
    updateClicked(true);
  }
  //card exit function
  function exitModal() {
    updateClicked(false);
  }
  function handleAddToCart(product, price, quantity) {
    console.log(`Bag: ${quantity} ${product}: ${quantity * price}`);
    updateQuantity(1);
  }
  return (
    <>
      <h2 className={styles.title}>Products:</h2>
      {isClicked && (
        <div className={styles.popupModal}>
          <div className={styles.exitButton}>
            <svg
              onClick={exitModal}
              className={styles.svgButton}
              viewBox="0 -0.5 17 17"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>970</title> <defs> </defs>{" "}
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g transform="translate(1.000000, 0.000000)" fill="#434343">
                    {" "}
                    <path
                      d="M13.646,2.371 C10.535,-0.739 5.469,-0.74 2.358,2.371 C-0.753,5.483 -0.752,10.548 2.358,13.66 C5.469,16.77 10.534,16.771 13.646,13.66 C16.758,10.547 16.757,5.483 13.646,2.371 L13.646,2.371 Z M3.587,12.431 C1.148,9.993 1.146,6.028 3.58,3.594 C6.014,1.159 9.979,1.162 12.418,3.6 C14.856,6.038 14.857,10.004 12.424,12.438 C9.988,14.872 6.024,14.869 3.587,12.431 L3.587,12.431 Z"
                      class="si-glyph-fill"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M10.164,11.063 C9.982,11.063 9.845,10.991 9.776,10.922 L8.009,9.157 L6.314,10.852 C6.248,10.918 6.095,10.998 5.891,10.998 C5.738,10.998 5.507,10.952 5.288,10.733 C5.067,10.513 5.018,10.295 5.017,10.153 C5.013,9.965 5.086,9.823 5.157,9.753 L6.881,8.028 L5.201,6.35 C5.049,6.197 4.922,5.723 5.321,5.325 C5.546,5.1 5.767,5.053 5.914,5.053 C6.097,5.053 6.234,5.125 6.301,5.194 L8.009,6.9 L9.705,5.204 C9.773,5.137 9.925,5.058 10.129,5.058 C10.283,5.058 10.514,5.104 10.733,5.324 C11.111,5.703 11.035,6.134 10.864,6.304 L9.138,8.03 L10.875,9.766 C10.942,9.834 11.021,9.986 11.021,10.19 C11.021,10.344 10.976,10.573 10.756,10.792 C10.531,11.016 10.311,11.063 10.164,11.063 L10.164,11.063 L10.164,11.063 Z"
                      class="si-glyph-fill"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
          <div className={styles.modalInfo}>
            <div className={styles.modalTitle}>{clickedData[0]}</div>
            <img
              src={clickedData[3]}
              className={(styles.productImage, styles.modalPhoto)}
              alt=""
            />
            <div className={styles.modalDesc}>{clickedData[2]}</div>
            <div className={styles.modalPrice}>${clickedData[1]}</div>
            <div className={styles.buttonBox}>
              {" "}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAddToCart(
                    clickedData[0],
                    clickedData[1],
                    popupQuantity
                  );
                }}
              >
                <input
                  className={styles.quantity}
                  type="number"
                  min={1}
                  max={25}
                  required
                  value={popupQuantity}
                  onChange={(e) => updateQuantity(e.target.value)} // Ensure input updates state
                />
                <button type="submit" className={styles.addButton}>
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      <div className={styles.productWrapper}>
        {isLoading && <h2 style={{ color: "white" }}>Loading...</h2>}
        {!isLoading &&
          productData.map((product) => {
            // Determine which image to show
            const imageSrc =
              hoveredProductId === product.id && product.images.length > 1
                ? product.images[1]
                : product.images[0];

            return (
              <>
                <div
                  key={product.id}
                  className={styles.productBox}
                  onMouseEnter={() => setHoveredProductId(product.id)}
                  onMouseLeave={() => setHoveredProductId(null)}
                  onClick={() => {
                    cardClick(
                      product.title,
                      product.price,
                      product.description,
                      product.images[0]
                    );
                  }}
                >
                  <img
                    src={imageSrc}
                    alt={product.description}
                    className={styles.productImage}
                  />
                  <h3 className={styles.productTitle}>{product.title}</h3>
                  <div className={styles.productPrice}>{product.price}</div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}
