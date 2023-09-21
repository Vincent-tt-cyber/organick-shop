import React from "react";
import styles from "./SectionOffer.module.css";
import { SVGSelectHandler } from "../../Components/SVGSelectHandler/SVGSelectHandler";
import { Link } from "react-router-dom";
import { ProductCard } from "../ProductCard/ProductCard";
import { products } from "../../data/DataProject";

export const SectionOffer = () => {
  return (
    <section className={styles["offer-section"]}>
      <div className="container">
        <div className={styles["offer-section-info"]}>
          <div>
            <h3 className={styles["offer-section__top-title"]}>Offer</h3>
            <h2 className={styles["offer-section__title"]}>
              We Offer Organic For You
            </h2>
          </div>
          <Link className={styles["offer-section__link"]} to="/shop">
            View All Product <SVGSelectHandler id="arrow-left" />
          </Link>
        </div>
        <div className={styles["offer-section-row"]}>
          {products.slice(8, 12).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
