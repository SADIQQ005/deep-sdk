import { getSessionToken } from "../core/session";

export async function sendEvent(type: string, payload: any = {}, apiUrl: string) {
  const token = getSessionToken();

  await fetch(`${apiUrl}/event`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      type,
      payload,
      timestamp: Date.now()
    })
  });
}