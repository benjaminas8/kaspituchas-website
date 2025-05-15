import {RefObject} from "react";

interface CameraHandlers {
    setCameraPermission: (value: boolean) => void;
    setPermissionError: (value: string) => void;
  }

  const ensureElementExists = <T>(ref: RefObject<T>): T => {
    if (!ref.current) {
      throw new Error('Required element is not available');
    }
    return ref.current;
  };

  export const getVideo = (
    videoRef: RefObject<HTMLVideoElement>,
    { setCameraPermission, setPermissionError }: CameraHandlers
  ) => {
    setPermissionError("");
    return window.navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        setCameraPermission(true);
        const video = ensureElementExists(videoRef);
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        setCameraPermission(false);
        setPermissionError("Reikia patvirtinti kamerą");
        console.error(err);
      });
  };
  
  export const takePhoto = (
    videoRef: RefObject<HTMLVideoElement>,
    photoRef: RefObject<HTMLCanvasElement>,
    hasCameraPermission: boolean,
    { setPermissionError, onPhotoTaken }: { setPermissionError: (value: string) => void, onPhotoTaken: () => void }
  ) => {
    if (!hasCameraPermission) {
      setPermissionError("Reikia patvirtinti kamerą");
      return;
    }
  
    const video = videoRef.current;
    const photo = photoRef.current;
  
    if (video && photo) {
      const context = photo.getContext("2d");
      if (context) {
        const container = photo.parentElement;
        if (container) {
          const width = container.clientWidth;
          const height = container.clientHeight;
          photo.width = width;
          photo.height = height;
  
          context.drawImage(video, 0, 0, photo.width, photo.height);
          onPhotoTaken();
        }
      }
    }
  };

  export const setupPermissionObserver = async (handlers: CameraHandlers) => {
    try {
      const result = await navigator.permissions.query({ name: 'camera' as PermissionName });
      
      result.addEventListener('change', () => {
        if (result.state === 'granted') {
          handlers.setCameraPermission(true);
          handlers.setPermissionError("");
        } else {
          handlers.setCameraPermission(false);
          handlers.setPermissionError("Reikia patvirtinti kamerą");
        }
      });
    } catch (err) {
      console.error(err);
    }
  };