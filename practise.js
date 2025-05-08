//turning on camera using js

const cameraField = document.getElementById("camerafield");
navigator.mediaDevices.getUserMedia({video: true})
.then(stream => {
    videoElement.srcObject = stream;
})
.catch(error => {
    console.error("error accessing the camera" + error);
})