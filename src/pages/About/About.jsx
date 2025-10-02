import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <>
     
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <h1 className={styles.title}>About Us</h1>
          <p className={styles.text}>
            Welcome to <span className={styles.brand}>Alaa Accessories</span>,
            where elegance meets artistry. We specialize in handcrafted jewelry
            that combines timeless beauty with modern design. Every bracelet,
            necklace, and ring is created to make you feel unique, confident,
            and effortlessly stylish.
          </p>
          <div className={styles.values}>
            <div className={styles.valueCard}>
              <h3>✨ Our Vision</h3>
              <p>
                To redefine luxury jewelry with simplicity, quality, and
                authenticity.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3>🌿 Our Mission</h3>
              <p>
                Crafting unique accessories that express individuality and
                elegance.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3>💎 Our Promise</h3>
              <p>Premium designs with the finest materials at fair prices.</p>
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default About;
