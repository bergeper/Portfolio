import { repos } from "./services/reposTest";
import { titleContent } from "./services/titles";

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
    const cardImage = document.createElement("img") as HTMLImageElement;
    const cardContent = document.createElement("p") as HTMLParagraphElement;

    card.classList.add("card", "reveal--right");
    cardTitle.classList.add("card__title");
    cardImage.classList.add("card__image");
    cardContent.classList.add("card__content");

    cardTitle.innerHTML = repos[i].nameTest;
    cardImage.src = repos[i].imgTest;
    cardContent.innerHTML = repos[i].textTest;

    card.appendChild(cardTitle);
    card.appendChild(cardImage);
    card.appendChild(cardContent);

    contentRight.appendChild(card);
  }

  content.appendChild(contentLeft);
  content.appendChild(contentRight);
};
