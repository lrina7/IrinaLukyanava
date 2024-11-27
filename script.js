const certificates = document.querySelectorAll(".certificate");

const fullscreenOverlay = document.createElement("div");
fullscreenOverlay.style.position = "fixed";
fullscreenOverlay.style.top = "0";
fullscreenOverlay.style.left = "0";
fullscreenOverlay.style.width = "100vw";
fullscreenOverlay.style.height = "100vh";
fullscreenOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
fullscreenOverlay.style.display = "none";
fullscreenOverlay.style.justifyContent = "center";
fullscreenOverlay.style.alignItems = "center";
fullscreenOverlay.style.zIndex = "1000";

document.body.appendChild(fullscreenOverlay);

const fullscreenImage = document.createElement("img");
fullscreenImage.style.maxWidth = "90%";
fullscreenImage.style.maxHeight = "90%";
fullscreenOverlay.appendChild(fullscreenImage);

certificates.forEach((certificate) => {
  certificate.addEventListener("click", () => {
    fullscreenImage.src = certificate.src;
    fullscreenOverlay.style.display = "flex";
  });
});

fullscreenOverlay.addEventListener("click", () => {
  fullscreenOverlay.style.display = "none";
});
