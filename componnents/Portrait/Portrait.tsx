"use client";

import React, { useRef, useEffect, useState, RefObject } from "react";
import styles from "./main.module.css";
import { getVideo, takePhoto as takePhotoUtil, setupPermissionObserver} from "../../Utils/cameraUtils";

interface PortraitProps{
  onTakePhoto: () => void;
}

const Portrait = ({onTakePhoto}:PortraitProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const photoRef = useRef<HTMLCanvasElement>(null);

  const [hasPhoto, setHasPhoto] = useState(false);
  const [hasCameraPermission, setCameraPermission] = useState(false);
  const [permissionError, setPermissionError] = useState<string>("");

  const handleTakePhoto = () => {
    if (!videoRef.current) {
      setPermissionError("Video element not found");
      return;
    }
    if (!photoRef.current) {
      setPermissionError("Photo element not found");
      return;
    }
    takePhotoUtil(videoRef as RefObject<HTMLVideoElement>, photoRef as RefObject<HTMLCanvasElement>, hasCameraPermission, {
      setPermissionError,
      onPhotoTaken: () => {
        setHasPhoto(true);
        onTakePhoto();
      },
    });
  };

  useEffect(() => {
    if (videoRef.current) {
      const handlers = { setCameraPermission, setPermissionError };
      getVideo(videoRef as RefObject<HTMLVideoElement>, handlers);
      setupPermissionObserver(handlers);
    }
  }, []);

    

  return (
    <div className={styles.portrait}>
      <div className={styles.camera}>
        <video ref={videoRef}></video>
      </div>
      <div className={styles.photoFrame}>
        <canvas className={styles.screenShot} ref={photoRef}></canvas>
        <button
          className={`${styles.snapButton} ${hasPhoto ? styles.photoOn : ""}`}
          onClick={handleTakePhoto}
        >
          {permissionError || "Kas gaidys?"}
        </button>
      </div>
    </div>
  );
};

export default Portrait;
