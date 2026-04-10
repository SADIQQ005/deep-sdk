# 🛡️ Deep SDK

![npm version](https://img.shields.io/npm/v/deep-sdk)
![license](https://img.shields.io/npm/l/deep-sdk)
![downloads](https://img.shields.io/npm/dw/deep-sdk)

A lightweight **browser proctoring & monitoring SDK** for detecting suspicious behavior in online exams, assessments, and secure web sessions.

Built for modern SaaS platforms, LMS systems, and fintech-grade identity verification flows.

---

## ⚡ Features

- 👁 Tab switching detection
- 🖥 Fullscreen exit monitoring
- 📷 Webcam activity tracking
- 🔔 Real-time event callbacks
- 🔐 API key authentication
- ⚡ Lightweight & framework-agnostic
- 📡 Secure event reporting to backend

---

## 📦 Installation

```bash
npm install deep-sdk

or

yarn add deep-sdk
🚀 Quick Start
import { initProctoring } from "deep-sdk";

initProctoring({
  apiKey: "YOUR_API_KEY",
  userId: "user_123",
  sessionId: "exam_session_456",

  onEvent: (event) => {
    console.log("Event:", event);
  },
});
⚙️ Configuration
type ProctorConfig = {
  apiKey: string;
  userId: string;
  sessionId: string;

  onEvent?: (event: ProctorEvent) => void;
  onWarning?: (warning: string) => void;
  onViolation?: (violation: string) => void;

  enableTabSwitchDetection?: boolean;
  enableFullscreenCheck?: boolean;
  enableWebcamMonitoring?: boolean;

  endpoint?: string;
};
📡 Event Types
type ProctorEvent =
  | "TAB_SWITCH"
  | "FULLSCREEN_EXIT"
  | "FULLSCREEN_ENTER"
  | "WEBCAM_STARTED"
  | "WEBCAM_STOPPED"
  | "SUSPICIOUS_ACTIVITY";
🧪 Example (React)
import { useEffect } from "react";
import { initProctoring } from "deep-sdk";

export default function Exam() {
  useEffect(() => {
    initProctoring({
      apiKey: "YOUR_KEY",
      userId: "user_001",
      sessionId: "session_001",
    });
  }, []);

  return <div>Exam in progress...</div>;
}
🔐 Authentication

Deep SDK uses API key authentication.

How it works:
Create API key in dashboard
Pass it into SDK
Events are securely sent to your backend
apiKey: "pk_live_xxxxxxxxx"
🌐 Event Payload

Events are sent to your backend:

POST https://your-api.com/v1/proctor/events
Example payload:
{
  "apiKey": "pk_live_xxx",
  "userId": "user_123",
  "sessionId": "exam_456",
  "event": "TAB_SWITCH",
  "timestamp": 1710000000
}
🧠 How It Works
Frontend SDK
   ↓
Event Monitoring Layer
   ↓
Secure API Service
   ↓
Backend Database
   ↓
Admin Dashboard
🧱 Use Cases
Online exams & CBT platforms
Remote hiring assessments
Identity verification flows
Training & certification platforms
Secure fintech onboarding
📊 Roadmap
 AI-based cheating detection
 Face tracking & attention scoring
 Screen recording support
 LMS integrations (Moodle, etc.)
 Real-time supervisor dashboard
 Risk scoring engine
⚠️ Security
Keep API keys private
Always use HTTPS endpoints
Validate all events on backend
Do not expose keys in frontend repos
🛠 Development
git clone https://github.com/your-org/deep-sdk
cd deep-sdk
npm install
npm run build
📦 Build Output
dist/
 ├── index.js
 ├── index.mjs
 ├── index.global.js
 ├── index.d.ts
🚀 Publish
npm version patch
npm publish
📄 License

MIT © 2026 Deep SDK


---

# 🔥 Why this README performs better on npm

- Clean hierarchy (npm readers skim fast)
- Badges for trust
- Short sections (mobile-friendly)
- Clear install + usage first
- Architecture simplified visually
- Strong SaaS positioning (important for adoption)

---

# 🚀 If you want next upgrade

I can help you:

### 1. Make your npm page look like Stripe-level SDK
- add logo banner
- CLI demo section
- interactive examples

### 2. Improve package discoverability
- keywords optimization
- npm SEO tuning

### 3. Build your real SaaS backend (API + dashboard + billing)

Just say **“next”** 👍