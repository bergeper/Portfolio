import { Repo } from "../models/Repos";
import { repos } from "../services/projects";
import { titleContent } from "../services/titles";

export const createHtmlForPortfolio = () => {
  const content = document.getElementById("portfolio") as HTMLDivElement;
  content.innerHTML = "";

  // left container
  const contentLeft = document.createElement("div") as HTMLDivElement;
  contentLeft.classList.add("content--left");

  const cardInfo = document.createElement("div") as HTMLDivElement;
  const cardInfoTitle = document.createElement("h3") as HTMLHeadingElement;
  const cardInfoContent = document.createElement("p") as HTMLParagraphElement;

  cardInfo.classList.add("card--info", "reveal--left");
  cardInfoTitle.classList.add("card--info__title");
  cardInfoContent.classList.add("card--info__content");

  cardInfoTitle.innerHTML = titleContent[0].title;
  cardInfoContent.innerHTML = titleContent[0].text;

  cardInfo.appendChild(cardInfoTitle);
  cardInfo.appendChild(cardInfoContent);

  contentLeft.appendChild(cardInfo);

  // right container
  const contentRight = document.createElement("div") as HTMLDivElement;
  contentRight.classList.add("content--right");

  for (let i = 0; i < repos.length; i++) {
    const card = document.createElement("div") as HTMLDivElement;
    const cardTitle = document.createElement("h3") as HTMLHeadingElement;
    const cardImages = document.createElement("div") as HTMLDivElement;
    const cardImageMobile = document.createElement("img") as HTMLImageElement;
    const cardImageDesktop = document.createElement("img") as HTMLImageElement;
    const cardContent = document.createElement("p") as HTMLParagraphElement;
    const cardGithub = document.createElement("p") as HTMLParagraphElement;

    card.classList.add("cards", "reveal--right");
    cardTitle.classList.add("cards__title");
    cardImages.classList.add("cards__image");
    cardImageMobile.classList.add("cards__image--mobile");
    cardImageDesktop.classList.add("cards__image--desktop");
    cardContent.classList.add("cards__content");
    cardGithub.classList.add("cards__github");

    cardTitle.innerHTML = repos[i].name;
    cardImageMobile.src = repos[i].imgMobile;
    cardImageDesktop.src = repos[i].imgDesktop;
    cardContent.innerHTML = repos[i].text;
    cardGithub.innerHTML = repos[i].github;

    cardImageMobile.addEventListener("click", () => {
      createMobileModal(repos[i]);
    });
    cardImageMobile.setAttribute("data-bs-toggle", "modal");
    cardImageMobile.setAttribute("data-bs-target", "#mobileModal");

    cardImageDesktop.addEventListener("click", () => {
      createDesktopModal(repos[i]);
    });
    cardImageDesktop.setAttribute("data-bs-toggle", "modal");
    cardImageDesktop.setAttribute("data-bs-target", "#mobileModal");

    card.appendChild(cardTitle);
    cardImages.appendChild(cardImageMobile);
    cardImages.appendChild(cardImageDesktop);
    card.appendChild(cardImages);
    card.appendChild(cardContent);
    card.appendChild(cardGithub);

    contentRight.appendChild(card);
  }

  content.appendChild(contentLeft);
  content.appendChild(contentRight);
};

const imageModal = document.getElementById("modalContainer") as HTMLDivElement;

const createMobileModal = (image: Repo) => {
  imageModal.innerHTML = "";

  const imagePlaceHolder = document.createElement("img") as HTMLImageElement;
  imagePlaceHolder.src = image.imgMobile;
  imagePlaceHolder.classList.add("imageModal__image--mobile");

  imageModal.appendChild(imagePlaceHolder);
};

const createDesktopModal = (image: Repo) => {
  imageModal.innerHTML = "";

  const imagePlaceHolder = document.createElement("img") as HTMLImageElement;
  imagePlaceHolder.src = image.imgDesktop;
  imagePlaceHolder.classList.add("imageModal__image--desktop");

  imageModal.appendChild(imagePlaceHolder);
};
