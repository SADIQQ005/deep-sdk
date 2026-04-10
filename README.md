📦 Deep SDK

A lightweight browser monitoring and proctoring SDK for detecting user behavior such as tab switching, fullscreen exit, and webcam activity — designed for online exams, assessments, and secure digital experiences.

✨ Features
👁️ Tab switch detection
🖥️ Fullscreen exit monitoring
📷 Webcam activity tracking
🔌 Simple API integration
⚡ Lightweight and framework-agnostic
🔐 API key-based authentication (SaaS-ready)
📊 Event-based reporting system
📥 Installation
npm install @abusadiqq005/deep

or

yarn add @abusadiqq005/deep
🚀 Quick Start
import { initProctoring } from "@abusadiqq005/deep";

initProctoring({
  apiKey: "YOUR_API_KEY",
  userId: "student_123",
  sessionId: "exam_session_456",
  onEvent: (event) => {
    console.log("Proctoring event:", event);
  },
});
⚙️ Configuration
type ProctorConfig = {
  apiKey: string;
  userId: string;
  sessionId: string;

  // Optional callbacks
  onEvent?: (event: ProctorEvent) => void;
  onWarning?: (warning: ProctorWarning) => void;
  onViolation?: (violation: ProctorViolation) => void;

  // Behavior settings
  enableFullscreenCheck?: boolean;
  enableTabSwitchDetection?: boolean;
  enableWebcamMonitoring?: boolean;

  endpoint?: string; // default backend endpoint
};
📡 Events

The SDK emits real-time events:

🧾 Event Types
type ProctorEvent =
  | "TAB_SWITCH"
  | "FULLSCREEN_EXIT"
  | "FULLSCREEN_ENTER"
  | "WEBCAM_STARTED"
  | "WEBCAM_STOPPED"
  | "SUSPICIOUS_ACTIVITY";
🧪 Example Usage
initProctoring({
  apiKey: "test_key",
  userId: "user_001",
  sessionId: "session_001",

  onEvent: (event) => {
    if (event.type === "TAB_SWITCH") {
      console.log("User switched tab!");
    }
  },

  onViolation: (violation) => {
    console.log("Violation detected:", violation);
  },
});
🔐 Authentication

This SDK uses API key authentication.

How it works:
You generate an API key from your dashboard
You pass it into the SDK
All events are securely sent to your backend
apiKey: "pk_live_xxxxxxxxx"
🌐 Backend Integration

Events are sent to:

POST https://your-api.com/v1/proctor/events
Payload Example:
{
  "apiKey": "pk_live_xxx",
  "userId": "student_123",
  "sessionId": "exam_456",
  "event": "TAB_SWITCH",
  "timestamp": 1710000000
}
🧠 How Monitoring Works
1. Tab Switching

Detects when user leaves exam tab.

2. Fullscreen Monitoring

Detects when user exits fullscreen mode.

3. Webcam Monitoring

Tracks camera activation and potential interruptions.

🧱 Architecture Overview
Frontend App (SDK)
        ↓
Event Monitor Layer
        ↓
API Service (secure request layer)
        ↓
Backend Proctoring API
        ↓
Database / Dashboard / Alerts
📊 Dashboard Support (Coming / Optional)

The SDK integrates with a dashboard that provides:

Live exam monitoring
Violation logs
User session tracking
Risk scoring per student
🧰 Example React Integration
import { useEffect } from "react";
import { initProctoring } from "@abusadiqq005/deep";

export default function ExamPage() {
  useEffect(() => {
    initProctoring({
      apiKey: "YOUR_KEY",
      userId: "user_1",
      sessionId: "session_1",
    });
  }, []);

  return <div>Exam in progress...</div>;
}
⚠️ Security Notes
API keys must be kept private
Do not expose keys in public frontend repos
Always validate events on backend
Use HTTPS endpoints only
🛠️ Development

Clone the repo:

git clone https://github.com/your-org/deep.git
cd deep

Install dependencies:

npm install

Build:

npm run build
📦 Build Output
dist/
 ├── index.js
 ├── index.mjs
 ├── index.global.js
 ├── index.d.ts
🚀 Publishing
npm run build
npm version patch
npm publish --access public
📈 Roadmap
 AI cheating detection (face movement analysis)
 Screen recording (optional)
 Multi-camera support
 LMS integrations (Moodle, Google Classroom)
 Real-time supervisor dashboard
 Risk scoring engine
🤝 Support

For issues or integrations:

Email: support@yourdomain.com
Dashboard: https://yourdomain.com/dashboard
📄 License

MIT License © 2026 Deep SDK