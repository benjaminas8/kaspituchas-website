"use client"
import React from 'react'
import styles from './main.module.css'
import Portrait from '../Portrait/Portrait'


const Curtain = () => {
    const [isCurtainOpen, setIsCurtainOpen] = React.useState(false);

    const toggleCurtain = () => {
        setIsCurtainOpen(!isCurtainOpen);
    };

  return (
    <div className={styles.curtain}>
        <div className={styles.curtainContainer}>
            <div className={`${styles.curtainPanelLeft} ${isCurtainOpen ? styles.open : ""}`}></div>  
            <Portrait onTakePhoto={toggleCurtain}/> 
            <div className={`${styles.curtainPanelRight} ${isCurtainOpen ? styles.open : ""}`}></div>  
        </div>
    </div>
  )
}

export default Curtain