import React from "react";
import styles from "./SaleCard.module.css";

export const SaleCard = ({ bg, textColor, topTitle, title }) => {
  return (
    <>
      <div className={styles["card"]} style={{ backgroundImage: `url(${bg})` }}>
        <div className={styles["card-text"]} style={{ color: textColor }}>
          <div className={styles["card__top-title"]}>{topTitle}</div>
          <div className={styles["card__title"]}>{title}</div>
        </div>
      </div>
    </>
  );
};
