import React, { useEffect } from "react";
import styles from "./ProductPage.module.css";
import { useParams } from "react-router-dom";
import { products } from "../../data/DataProject";
import HeroSection from "../../Components/HeroSection/HeroSection";
import shopSingleBG from "../../assets/images/shop-single.jpg";
import Rating from "../../Components/Rating/Rating";
import ProductQuantity from "../../Components/ProductQuantity/ProductQuantity";

export const ProductPage = () => {
  const { id } = useParams();

  const product = products.find((product) => product.id === parseInt(id));

  return (
    <section className={styles["product-page"]}>
      <HeroSection background={shopSingleBG}>
        <h1>Shop Single</h1>
      </HeroSection>
      <div className="container">
        <div className={styles["product-page-row"]}>
          {product ? (
            <>
              <div className={styles["product-page__info"]}>
                <div className={styles["product-page__info-right"]}>
                  <span className={styles["product-page__info-category"]}>
                    {product.category}
                  </span>
                  <img
                    className={styles["product-page__info-img"]}
                    src={`../../${product.imageURL}`}
                    alt={product.title}
                  />
                </div>
                <div className={styles["product-page__info-text"]}>
                  <h3 className={styles["product-page__info-text-title"]}>
                    {product.title}
                  </h3>
                  <Rating isDesabled={true} rating={product.rating} />
                  <div className={styles['"product-page__info-text-prices']}>
                    <span
                      className={styles["product-page__info-text-old-price"]}
                    >
                      ${product.oldPrice.toFixed(2)}
                    </span>
                    <span
                      className={styles["product-page__info-text-active-price"]}
                    >
                      ${product.activePrice.toFixed(2)}
                    </span>
                  </div>
                  <p className={styles["product-page__info-text-descr"]}>
                    {product.description}
                  </p>
                  <div className={styles["product-page__info-order"]}>
                    <ProductQuantity />
                  </div>
                </div>
              </div>
              <div></div>
            </>
          ) : (
            <h1>Продукт не найден😞</h1>
          )}
        </div>
      </div>
    </section>
  );
};
