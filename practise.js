//turning on camera using js

const cameraField = document.getElementById("camerafield");
navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => {
    cameraField.srcObject = stream;
  })
  .catch((error) => {
    console.error("error accessing the camera" + error);
  });

//local storage and user data management basics
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("button");
  const area = document.querySelector(".saved");
  btn.addEventListener("click", () => {
    const inputareacontent = document.getElementById("data").value;
    localStorage.setItem("userdata", inputareacontent);
    const data = localStorage.getItem("userdata");
    area.textContent = data;
  });
  area.textContent = data;
});
