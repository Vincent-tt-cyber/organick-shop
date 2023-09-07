import React from "react";
import styles from "./SectionSale.module.css";
import { SaleCard } from "./SaleCard";
import bg1 from "../../assets/images/sale-1.jpg";
import bg2 from "../../assets/images/sale-2.jpg";

export const SectionSale = () => {
  return (
    <section className={styles["sale"]}>
      <div className="container">
        <div className={styles["sale-row"]}>
          <SaleCard
            bg={bg1}
            textColor={"#fff"}
            topTitle={"Natural!!"}
            title={"Get Garden Fresh Fruits"}
          />
          <SaleCard
            bg={bg2}
            textColor={"#274C5B"}
            topTitle={"Offer!!"}
            title={"Get 10% off on Vegetables"}
          />
        </div>
      </div>
    </section>
  );
};
