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
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const takePhoto = () => {
    const width = 414;
    const height = width / (16 / 9);

    let video = videoRef.current;
    let photo = photoRef.current;

    photo.width = width;
    photo.height = height;

    let ctx = photo?.getContext("2d");
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
      <button onClick={takePhoto}>Kas gaidys?</button>
      <div className={`${styles.photo} ${hasPhoto ? styles.photoOn : ""}`}>
        <canvas ref={photoRef}></canvas>
      </div>
    </div>
  );
};

export default Portrait;
