# WebRTC Voice Chat Sample

This is a simple example of a voice chat application using **WebRTC**, **Node.js**, and **Socket.IO**.  
It demonstrates peer-to-peer audio communication with basic signaling.  
The project is intended for educational and experimental purposes.

## 📦 Features

- ✅ Peer-to-peer voice communication via WebRTC
- ✅ Signaling server using Socket.IO
- ✅ Basic mute/unmute toggle with UI feedback
- ✅ Ready for deployment on Railway or other Node.js hosting services

## 🛠️ Tech Stack

- Node.js + Express
- Socket.IO (WebSocket signaling)
- WebRTC (P2P audio communication)
- HTML + Vanilla JavaScript (client UI)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/webrtc-voice-chat-sample.git
cd webrtc-voice-chat-sample
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
node server.js
```

Open your browser at [http://localhost:3000](http://localhost:3000)  
Open two tabs or devices to test the voice chat.

## 🌍 Deployment

This app can be deployed to platforms like **[Railway](https://railway.app/)** or **Render**.  
A simple `Procfile` is already included for that purpose.

## 🧪 Usage Notes

- The app uses Google STUN server: `stun:stun.l.google.com:19302`
- The same browser may not clearly differentiate incoming/outgoing audio if tested on one device
- For best results, test on **two separate devices or browsers**

## 📄 License

This project is available under the MIT License.
