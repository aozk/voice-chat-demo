const socket = io();
let localStream;
let peer;

document.getElementById('startCall').onclick = async () => {
  localStream = await navigator.mediaDevices.getUserMedia({ audio: true });
  peer = new RTCPeerConnection({
    iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
  });

  peer.onicecandidate = (event) => {
    if (event.candidate) {
      socket.emit('ice-candidate', event.candidate);
    }
  };

  peer.ontrack = (event) => {
    const audio = new Audio();
    audio.srcObject = event.streams[0];
    audio.play();
  };

  localStream.getTracks().forEach((track) => peer.addTrack(track, localStream));

  const offer = await peer.createOffer();
  await peer.setLocalDescription(offer);
  socket.emit('offer', offer);
};

socket.on('offer', async (offer) => {
  localStream = await navigator.mediaDevices.getUserMedia({ audio: true });
  peer = new RTCPeerConnection({
    iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
  });

  peer.onicecandidate = (event) => {
    if (event.candidate) {
      socket.emit('ice-candidate', event.candidate);
    }
  };

  peer.ontrack = (event) => {
    const audio = new Audio();
    audio.srcObject = event.streams[0];
    audio.play();
  };

  localStream.getTracks().forEach((track) => peer.addTrack(track, localStream));

  await peer.setRemoteDescription(offer);
  const answer = await peer.createAnswer();
  await peer.setLocalDescription(answer);
  socket.emit('answer', answer);
});

socket.on('answer', async (answer) => {
  await peer.setRemoteDescription(answer);
});

socket.on('ice-candidate', async (candidate) => {
  try {
    await peer.addIceCandidate(candidate);
  } catch (e) {
    console.error('Error adding ICE candidate:', e);
  }
});

let micMuted = false;
document.getElementById('toggleMic').onclick = () => {
  if (localStream) {
    micMuted = !micMuted;
    localStream.getAudioTracks()[0].enabled = !micMuted;

    const statusText = micMuted ? '🔇 ミュート中' : '🎙 マイクオン';
    document.getElementById('micStatus').innerText = statusText;

    console.log(`マイクが${micMuted ? 'ミュート' : 'オン'}になりました`);
  }
};
