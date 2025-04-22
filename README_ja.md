# WebRTC 音声通話サンプルアプリ

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Click%20Here-green?logo=web)](https://web-production-afa0b.up.railway.app/)

これは **WebRTC**、**Node.js**、**Socket.IO** を使用したシンプルな音声通話アプリのサンプル実装です。  
P2P（ピアツーピア）による音声通話と、Socket.IO を用いたシグナリングの基本構成を示しています。  
教育用途や試作のために設計されています。

## 📦 特徴

- ✅ WebRTC によるピアツーピア音声通話
- ✅ Socket.IO によるシグナリングサーバ
- ✅ ミュート機能とUIでの状態表示
- ✅ RailwayやRenderなどのNode.jsホスティングに対応

## 🛠️ 使用技術

- Node.js + Express
- Socket.IO（WebSocketベースの通信）
- WebRTC（P2P音声通信）
- HTML + JavaScript（クライアントUI）

## 🚀 はじめかた

### 1. リポジトリをクローン

```bash
git clone https://github.com/your-username/webrtc-voice-chat-sample.git
cd webrtc-voice-chat-sample
```

### 2. 依存関係をインストール

```bash
npm install
```

### 3. 開発サーバを起動

```bash
node server.js
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。  
2つのタブまたは端末で同時に開くと音声通話をテストできます。

## 🌍 デプロイ

このアプリは **[Railway](https://railway.app/)** や **Render** といったNode.js対応のクラウドに簡単にデプロイ可能です。  
すでに `Procfile` が含まれており、すぐにデプロイできます。

## 🧪 利用上の注意

- GoogleのSTUNサーバ（`stun:stun.l.google.com:19302`）を使用しています
- 同じブラウザ内でのテストでは音声の入出力が分かりづらいことがあります
- 最良のテスト結果を得るには、**2台の異なる端末またはブラウザ**で試してください

## 📄 ライセンス

このプロジェクトは MIT ライセンスのもとで公開されています。
