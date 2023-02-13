import { openMobileModal, openDesktopModal } from "../helpers/modal";
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
    const cardGithub: HTMLAnchorElement = document.createElement("a");

    card.classList.add("card", "reveal--right");
    cardTitle.classList.add("card__title");
    cardImages.classList.add("card__image");
    cardImageMobile.classList.add("card__image--mobile");
    cardImageDesktop.classList.add("card__image--desktop");
    cardContent.classList.add("card__content");
    cardGithub.classList.add("card__github");

    cardTitle.innerHTML = repos[i].name;
    cardImageMobile.src = repos[i].imgMobile;
    cardImageMobile.alt = repos[i].name;
    cardImageDesktop.src = repos[i].imgDesktop;
    cardImageDesktop.alt = repos[i].name;
    cardContent.innerHTML = repos[i].text;
    cardGithub.href = repos[i].github;
    cardGithub.target = "_blank";
    cardGithub.innerHTML = `See project<br><i class="fa-brands fa-github"></i>`;

    cardImageMobile.addEventListener("click", () => {
      openMobileModal(repos[i]);
    });

    cardImageDesktop.addEventListener("click", () => {
      openDesktopModal(repos[i]);
    });

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
