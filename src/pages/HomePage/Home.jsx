import React from "react";
import styles from "./Home.module.css";
import { SectionSale } from "../../Components/SectionSale/SectionSale";
import { SectionAboutUs } from "../../Components/SectionAboutUs/SectionAboutUs";
import { CategoriesSection } from "../../Components/CategoriesSection/CategoriesSection";
export const Home = () => {
  return (
    <>
      <section className={styles["wrapper"]}>
        <div className={styles["home"]}>
          <div className="container">
            <div className={styles["home-text"]}>
              <h3 className={styles["home__top-title"]}>100% Natural Food</h3>
              <h1 className={styles["home__title"]}>
                Choose the best healthier way of life
              </h1>
            </div>
          </div>
        </div>
        <SectionSale />
        <SectionAboutUs />
        <CategoriesSection />
      </section>
    </>
  );
};
