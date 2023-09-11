import styles from "./HeroSection.module.css";

const HeroSection = ({ background, children }) => {
  return (
    <section
      style={{ backgroundImage: `url(${background})` }}
      className={styles["herosection"]}
    >
      <div className="container">{children}</div>
    </section>
  );
};
export default HeroSection;
