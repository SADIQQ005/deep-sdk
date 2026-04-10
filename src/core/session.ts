let SESSION_TOKEN = "";

export async function initSession(config: any) {
  const res = await fetch(`${config.apiUrl}/session/start`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      examId: config.examId,
      userId: config.userId
    })
  });

  const data = await res.json();

  SESSION_TOKEN = data.token;

  console.log("Session initialized:", SESSION_TOKEN);
}

export function getSessionToken() {
  return SESSION_TOKEN;
}