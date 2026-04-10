import { sendEvent } from "../services/api";

export function startTabMonitoring(apiUrl?: string) {
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      console.log("Tab switch detected");

      sendEvent("TAB_SWITCH", {}, apiUrl || "");
    }
  });
}