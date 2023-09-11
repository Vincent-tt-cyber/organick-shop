import React from "react";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";

export const ProductCard = ({ product }) => {
  return (
    <>
      {product && (
        <Link to={`/product/${product.id}`}>
          <div className={styles["card"]}>
            <div className={styles["card-top"]}>
              <span className={styles["card__category"]}>
                {product.category}
              </span>
              <div className={styles["card__image"]}>
                <img src={product.imageURL} alt={product.title} />
              </div>
            </div>
            <div className={styles["card-bottom"]}>
              {/* <Link to={`/product/${product.id}`}> */}
              <h3 className={styles["card__title"]}>{product.title}</h3>
              {/* </Link> */}
              <div>
                <div className={styles["card-info"]}>
                  <div className={styles["card-prices"]}>
                    <div className={styles["card__old-price"]}>
                      ${product.oldPrice.toFixed(2)}
                    </div>
                    <div className={styles["card__active-price"]}>
                      ${product.activePrice.toFixed(2)}
                    </div>
                  </div>
                  <div>
                    <Rating isDesabled={false} rating={product.rating} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};
