"use client";

import React, { useRef, useEffect, useState } from "react";
import styles from "./main.module.css";
const Portrait = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const photoRef = useRef<HTMLCanvasElement>(null);

  const [hasPhoto, setHasPhoto] = useState(false);

  const getVideo = () => {
    window.navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        const video = videoRef.current;
        if (!video) return;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const takePhoto = () => {
    const video = videoRef.current;
    const photo = photoRef.current;

    if (!photo || !video) return;

    const container = photo.parentElement;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    photo.width = width;
    photo.height = height;

    const ctx = photo.getContext("2d");
    if (!ctx) return;

    ctx.drawImage(video, 0, 0, width, height);

    setHasPhoto(true);
  };

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  return (
    <div className={styles.portrait}>
      <div className={styles.camera}>
        <video ref={videoRef}></video>
      </div>
      <div className={styles.photoFrame}>
        <canvas className={styles.screenShot} ref={photoRef}></canvas>
        <button
          className={`${styles.snapButton} ${hasPhoto ? styles.photoOn : ""}`}
          onClick={takePhoto}
        >
          Kas gaidys?
        </button>
      </div>
    </div>
  );
};

export default Portrait;
