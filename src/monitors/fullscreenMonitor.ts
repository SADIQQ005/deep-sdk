import { sendEvent } from "../services/api";

export function startFullscreenMonitoring(apiUrl: string) {
  // Request fullscreen
  const elem = document.documentElement;

  if (elem.requestFullscreen) {
    elem.requestFullscreen().catch(() => {
      console.warn("Fullscreen permission denied");
    });
  }

  // Listen for exit
  document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
      console.log("Exited fullscreen");

      sendEvent("EXIT_FULLSCREEN", {}, apiUrl);

      // OPTIONAL: force back into fullscreen
      reEnterFullscreen(elem);
    }
  });
}

function reEnterFullscreen(elem: HTMLElement) {
  setTimeout(() => {
    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch(() => {});
    }
  }, 1000);
}