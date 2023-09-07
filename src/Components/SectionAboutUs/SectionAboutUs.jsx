import React from "react";
import styles from "./SectionAboutUs.module.css";
import AboutAsImage from "../../assets/images/About-us-section.png";
// import { SVGSelectHandler } from "../SVGSelectHandler/SVGSelectHandler";
import veganFood from "../../assets/images/vegan-food.png";
import mailboxQuality from "../../assets/images/mailbox-quality.png";
import { Link } from "react-router-dom";
export const SectionAboutUs = () => {
  return (
    <>
      <section className={styles["about-us"]}>
        <div className="container">
          <div className={styles["about-us-row"]}>
            <img src={AboutAsImage} alt="oranges" />
            <div className={styles["about-us-text"]}>
              <h3 className={styles["about-us__top-title"]}>About Us</h3>
              <h2 className={styles["about-us__title"]}>
                We Believe in Working Accredited Farmers
              </h2>
              <p className={styles["about-us__description"]}>
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>
              <ul className={styles["about-us-advantages"]}>
                <li className={styles["about-us-advantage"]}>
                  {/* <SVGSelectHandler id="vegan-food" /> */}
                  <div className={styles["about-us-advantages__icon"]}>
                    <img src={veganFood} alt="food image" />
                  </div>
                  <div>
                    <h3>Organic Foods Only</h3>
                    <p>
                      Simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum
                    </p>
                  </div>
                </li>
                <li className={styles["about-us-advantage"]}>
                  <div className={styles["about-us-advantages__icon"]}>
                    <img src={mailboxQuality} alt="food image" />
                  </div>
                  <div>
                    <h3>Quality Standards</h3>
                    <p>
                      Simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum
                    </p>
                  </div>
                </li>
              </ul>
              <Link className={styles["about-us__link"]} to="/shop">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
