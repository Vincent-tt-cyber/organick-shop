import React from "react";
import styles from "./TestimonialSection.module.css";
import testimonialBG from "../../assets/images/Testimonial.jpg";
import { clients } from "../../data/DataProject";
import Rating from "../Rating/Rating";

export const TestimonialSection = () => {
  return (
    <section
      className={styles["testimonial"]}
      style={{ backgroundImage: `url(${testimonialBG})` }}
    >
      <div className="container">
        <div>
          <h3>Testimonial</h3>
          <h1>What Our Customer Saying?</h1>
        </div>
        <div className={styles['user']}>
          {clients.map((user) => (
            <div key={user.id}>
              <Rating isDesabled={false} rating={user.rating} />
              <img src={user.userAvatar} alt="userAvatar" />
              <p>{user.description}</p>
              <h3>{user.userName}</h3>
              <small>{user.type}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
