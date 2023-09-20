import React from "react";
import styles from "./ProductQuantity.module.css";
import { SVGSelectHandler } from "../SVGSelectHandler/SVGSelectHandler";

const ProductQuantity = () => {
  const [quanity, setQuanity] = React.useState(1);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value <= 10) {
      setQuanity(value);
    } else if (e.target.value === "") {
      setQuanity("");
    }
  };

  const handleAddToCart = () => {
    // Добавить логику для добавления продукта в корзину здесь
    alert("Добавлено в корзину.");
  };
  return (
    <>
      <div className={styles["quanity"]}>
        <label htmlFor="quanity" className={styles["quanity__label"]}>
          Quanity:
        </label>
        <input
          className={styles["quanity__counter"]}
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max="10"
          value={quanity}
          onChange={handleQuantityChange}
        />
        <button
          className={styles["add-cart"]}
          onClick={() => handleAddToCart()}
        >
          Add To Cart <SVGSelectHandler id="arrow-left" />
        </button>
      </div>
    </>
  );
};

export default ProductQuantity;
