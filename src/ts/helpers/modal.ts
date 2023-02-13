import { Repo } from "../models/Repos";

const imageModal: HTMLDivElement = document.createElement("div");

export const openMobileModal = (image: Repo) => {
  imageModal.innerHTML = "";
  const imageContainer: HTMLDivElement = document.createElement("div");
  const imageToDisplay: HTMLImageElement = document.createElement("img");

  imageModal.classList.add("modal");
  imageContainer.classList.add("imageModal");
  imageToDisplay.classList.add("imageModal__image--mobile");
  imageToDisplay.src = image.imgMobile;
  imageModal.style.display = "block";
  imageContainer.appendChild(imageToDisplay);
  imageModal.appendChild(imageContainer);

  imageModal.onclick = function (e) {
    imageModal.style.display = "none";
  };

  document.body.appendChild(imageModal);
};

export const openDesktopModal = (image: Repo) => {
  imageModal.innerHTML = "";
  const imageContainer: HTMLDivElement = document.createElement("div");
  const imageToDisplay: HTMLImageElement = document.createElement("img");

  imageModal.classList.add("modal");
  imageContainer.classList.add("imageModal");
  imageToDisplay.classList.add("imageModal__image--mobile");
  imageToDisplay.src = image.imgDesktop;
  imageModal.style.display = "block";
  imageContainer.appendChild(imageToDisplay);
  imageModal.appendChild(imageContainer);

  imageModal.onclick = function (e) {
    imageModal.style.display = "none";
  };

  document.body.appendChild(imageModal);
};
