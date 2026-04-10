import { sendEvent } from "../services/api";

export async function startWebcamMonitoring(apiUrl: string) {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });

    const video = document.createElement("video");
    video.srcObject = stream;
    video.play();

    console.log("Webcam started");

    // Capture frame every 5 seconds
    setInterval(() => {
      captureFrame(video, apiUrl);
    }, 5000);

  } catch (error) {
    console.error("Webcam access denied");

    sendEvent("WEBCAM_DENIED", {}, apiUrl);
  }
}

function captureFrame(video: HTMLVideoElement, apiUrl: string) {
  if (video.videoWidth === 0) return;

  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  const ctx = canvas.getContext("2d");
  ctx?.drawImage(video, 0, 0);

  const image = canvas.toDataURL("image/jpeg", 0.6); // compressed

  sendEvent("WEBCAM_FRAME", { image }, apiUrl);

  console.log("Frame captured");
}