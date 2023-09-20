import React from "react";
import styles from "./TestimonialSection.module.css";
import testimonialBG from "../../assets/images/Testimonial.jpg";
import { clients, organickStatistick } from "../../data/DataProject";
import Rating from "../Rating/Rating";

export const TestimonialSection = () => {
  return (
    <section
      className={styles["testimonial"]}
      style={{ backgroundImage: `url(${testimonialBG})` }}
    >
      <div className="container">
        <div className={styles["testimonial__text"]}>
          <h3 className={styles["testimonial__text-top-title"]}>Testimonial</h3>
          <h1 className={styles["testimonial__text-title"]}>
            What Our Customer Saying?
          </h1>
        </div>
        <div className={styles["user"]}>
          {clients.map((user) => (
            <div key={user.id}>
              <img
                className={styles["user__avatar"]}
                src={user.userAvatar}
                alt="userAvatar"
              />
              <div>
                <Rating isDesabled={false} rating={user.rating} />
              </div>
              <p className={styles["user__text"]}>{user.description}</p>
              <h3 className={styles["user__name"]}>{user.userName}</h3>
              <small className={styles["user__type"]}>{user.type}</small>
            </div>
          ))}
        </div>
        <div className={styles["statistics"]}>
          {organickStatistick.map((item) => (
            <div key={item.id} className={styles["circle"]}>
              <div className={styles["circle__cover"]}>
                <h2>{item.value}</h2>
                <p>{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
