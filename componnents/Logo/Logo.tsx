"use client";
import styles from "./main.module.css";
import { useEffect, useState } from "react";

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isHovered) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [isHovered]);

  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <div 
      className={`${styles.logo} ${isAnimating ? styles.shake : ""}`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={styles.textDecoration}>Kas Gaidys ?</span>
    </div>
  );
};

export default Logo;
