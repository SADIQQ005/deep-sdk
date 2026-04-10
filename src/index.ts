import { initSession } from "./core/session";
import { startFullscreenMonitoring } from "./monitors/fullscreenMonitor";
import { startTabMonitoring } from "./monitors/tabMonitor";
import { startWebcamMonitoring } from "./monitors/webcamMonitor";

let GLOBAL_CONFIG: any;

export async function startProctoring(config: any) {
  GLOBAL_CONFIG = config;

  await initSession(config);

  startTabMonitoring(config.apiUrl);
  startFullscreenMonitoring(config.apiUrl);
  startWebcamMonitoring(config.apiUrl);

  console.log("Proctoring started")
}