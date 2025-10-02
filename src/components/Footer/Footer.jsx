import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.made}>Made with ❤️ by Alaa</p>
      <p className={styles.copy}>© {new Date().getFullYear()} Alaa Jewelry</p>
    </footer>
  );
};

export default Footer;
