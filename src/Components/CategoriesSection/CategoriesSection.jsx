import React from "react";
import styles from "./CategoriesSection.module.css";
import { ProductCard } from "../ProductCard/ProductCard";
import { products } from "../../data/DataProject";

export const CategoriesSection = () => {
  return (
    <section className={styles["categories"]}>
      <div className="container">
        <h3 className={styles["categories__top-title"]}>Categories</h3>
        <h2 className={styles["categories__title"]}>Our Products</h2>
        <div className={styles["categories-row"]}>
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
