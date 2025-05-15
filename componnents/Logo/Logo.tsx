"use client";
import styles from "./main.module.css";

const Logo = () => {
  const handleClick = () => {
    window.location.href = "/";
    console.log("refreshed");
  };

  return (
    <div className={styles.logo} onClick={handleClick}>
      Kas Gaidys?
    </div>
  );
};

export default Logo;
